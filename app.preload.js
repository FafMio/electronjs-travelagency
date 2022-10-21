const {contextBridge, ipcRenderer} = require('electron')

const toExpose = {
    onceInitData: (cb) => {
        ipcRenderer
            .once('init-data', (e, data) => {
                cb(e, data)
            })
    },
    sendOpenNewItemWindow: (args) => {
        ipcRenderer.send('open-new-item-window', args)
    },
    sendOpenShowItemWindow: (args) => {
        ipcRenderer.send('open-show-item-window', args)
    },
    invokeNewItem: (args, cb) => {
        ipcRenderer
            .invoke('new-item', args)
            .then((res) => {
                cb(res)
            })
    },
    onNewItemAdded: (cb) => {
        ipcRenderer.on('new-item-added', (e, data) => {
            cb(e, data)
        })
    },
    sendOpenEditItemWindow: (args) => {
        ipcRenderer.send('open-edit-item-window', args)
    },
    sendUpdatedItem: (args) => {
        ipcRenderer.send('update-item', args)
    },
    onItemUpdated: (cb) => {
        ipcRenderer.on('item-updated', (e, data) => {
            cb(e, data)
        })
    },
    invokeShowConfirmDeleteItem: (args, cb) => {
        ipcRenderer
            .invoke('show-confirm-delete-item', args)
            .then((res) => {
                cb(res)
            })
    },
    sendDeleteItem: (args) => {
        ipcRenderer.send('delete-item', args)
    },
    onDeleteItem: (cb) => {
        ipcRenderer.on('delete-item', (e, data) => {
            cb(e, data)
        })
    }
}

contextBridge.exposeInMainWorld('ipcRenderer', toExpose)
