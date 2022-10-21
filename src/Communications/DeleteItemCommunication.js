const {ipcMain, dialog} = require('electron')
const dataStore = require('../DataStores/DataStore')

class DeleteItemCommunication {
    init(mainWindow) {
        ipcMain.handle('show-confirm-delete-item', (e, data) => {
            console.log(data)
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
                console.log("before", newAnnounces)
                console.log("index", index)

                if (index >= 0) {
                    console.log("dans le if", newAnnounces)
                    newAnnounces.splice(index, 1)
                    console.log("avant de le reset",dataStore.announces)
                    dataStore.announces = newAnnounces
                    console.log("apres",dataStore.announces)

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
