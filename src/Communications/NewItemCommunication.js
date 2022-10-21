const {ipcMain} = require('electron')
const path = require('path')
const commonService = require('../Services/CommonService')
const dataStore = require('../DataStores/DataStore')

class NewItemCommunication {
    init() {
        ipcMain.on('open-new-item-window', (eHome, data) => {
            const viewPath = path.join(__dirname, '..', '..', 'templates', 'announce', 'add-announce.html')
            const win = commonService.createWindow(viewPath, 700, 700)

            ipcMain.handle('new-item', (e, newItem) => {
                let datas = dataStore.announces;
                newItem.id = datas.length > 0 ? datas[datas.length - 1].id + 1 : 1
                datas.push(newItem)

                eHome.reply('new-item-added', {
                    newItem
                })

                return "L'item a correctement été ajouté !"
            })

            win.on('closed', () => {
                ipcMain.removeHandler('new-item')
            })
        })
    }
}

module.exports = new NewItemCommunication()
