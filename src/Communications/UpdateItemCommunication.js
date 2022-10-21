const {ipcMain} = require('electron')
const path = require('path')
const commonService = require('../Services/CommonService')
const dataStore = require('../DataStores/DataStore')

class UpdateItemCommunication {
    init(mainWindow) {
        ipcMain.on('open-edit-item-window', (eHome, data) => {
            const viewPath = path.join(__dirname, '..', '..', 'templates', 'announce', 'update-announce.html')
            const win = commonService.createWindow(viewPath, 1000, 500)


            win.webContents.on('did-finish-load', () => {
                win.send('init-data', item)
            })

            eHome.reply('item-updated', {
                updatedItem,
            })

            win.close()

            ipcMain.once('update-item', this.onceUpdateItemCb)

            win.on('closed', () => {
                ipcMain.removeListener('update-item', this.onceUpdateItemCb)
            })
        })
    }
}

module.exports = new UpdateItemCommunication()
