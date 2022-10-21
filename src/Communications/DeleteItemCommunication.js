const {ipcMain, dialog} = require('electron')
const dataStore = require('../DataStores/DataStore')

class DeleteItemCommunication {
    init(mainWindow) {
        ipcMain.handle('show-confirm-delete-item', (e, data) => {
            const choice = dialog.showMessageBoxSync({
                type: 'warning',
                buttons: ['Non', 'Oui'],
                title: 'Confirmation de suppression',
                message: 'Êtes-vous sûr de vouloir supprimer cette annonce ?'
            })

            if (choice) {
                let res = false
                const newAnnounces = dataStore.announces
                const index = newAnnounces.findIndex((item) => item.id === data.id)

                if (index >= 0) {
                    newAnnounces.splice(index, 1)
                    dataStore.announces = newAnnounces

                    res = {
                        announces: dataStore.announces,
                    }

                    mainWindow.send('delete-item', {announces: dataStore.announces})
                }
                return res
            }
            return false
        })
    }
}

module.exports = new DeleteItemCommunication()
