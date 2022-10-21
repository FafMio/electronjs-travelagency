const {ipcMain} = require('electron')
const path = require('path')
const commonService = require('../Services/CommonService')
const dataStore = require('../DataStores/DataStore')

class ShowItemCommunication {
    init() {
        ipcMain.on('open-show-item-window', (eHome, data) => {
            const viewPath = path.join(__dirname, '..', '..', 'templates', 'announce', 'show-announce.html')
            const win = commonService.createWindow(viewPath, 700, 700)

            let announce =  dataStore.announces.filter(field => {
                return (field.id === data.id)
            })[0]

            win.webContents.on('did-finish-load', () => {
                win.send('init-data', {
                    announce
                })
            })

            win.on('closed', () => {})
        })
    }
}

module.exports = new ShowItemCommunication()
