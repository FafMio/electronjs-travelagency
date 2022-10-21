const {app, BrowserWindow} = require('electron')
const path = require('path')

const commonService = require('./src/Services/CommonService')
const dataStore = require('./src/DataStores/DataStore')

const newItemCommunication = require('./src/Communications/NewItemCommunication')
const showItemCommunication = require('./src/Communications/ShowItemCommunication')
const deleteItemCommunication = require('./src/Communications/DeleteItemCommunication')
const updateItemCommunication = require('./src/Communications/UpdateItemCommunication')

app
    .whenReady()
    .then(() => {
        generateMainWindow()

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                generateMainWindow()
            }
        })

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })

    })

function generateMainWindow() {
    const viewPath = path.join(__dirname, 'templates', 'home', 'home.html')
    const mainWindow = commonService.createWindow(viewPath)

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.send('init-data', {
            announces: dataStore.announces,
        })
    })

    newItemCommunication.init()
    showItemCommunication.init()
    deleteItemCommunication.init(mainWindow)
    updateItemCommunication.init(mainWindow)
}
