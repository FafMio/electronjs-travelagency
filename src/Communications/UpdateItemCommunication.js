const {ipcMain} = require('electron')
const path = require('path')
const commonService = require('../Services/CommonService')
const dataStore = require('../DataStores/DataStore')

class UpdateItemCommunication {
    init(mainWindow) {
        ipcMain.on('open-edit-item-window', (eHome, data) => {
            const viewPath = path.join(__dirname, '..', '..', 'templates', 'announce', 'update-announce.html')
            const win = commonService.createWindow(viewPath, 1000, 500)

            const inArrayToSearch = dataStore.announces
            const index = inArrayToSearch.findIndex((item) => item.id === data.id)

            if (index >= 0) {
                const item = inArrayToSearch[index]

                win.webContents.on('did-finish-load', () => {
                    win.send('init-data', item)
                })

                this.onceUpdateItemCb = (e, updatedItem) => {
                    updatedItem.id = item.id
                    inArrayToSearch[index] = updatedItem
                    dataStore.announces = inArrayToSearch

                    mainWindow.send('item-updated', {
                        updatedItem
                    })

                    win.close()
                }

                ipcMain.once('update-item', this.onceUpdateItemCb)
            } else {
                console.error('L\'item n\'existe pas')
                win.close()
            }

            win.on('closed', () => {
                ipcMain.removeListener('update-item', this.onceUpdateItemCb)
            })

        })
    }
}

module.exports = new UpdateItemCommunication()
