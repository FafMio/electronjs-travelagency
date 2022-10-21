const {BrowserWindow} = require('electron')
const path = require('path')

class CommonService {
    createWindow(viewPath, width = 1400, height = 1000) {
        const winConfig = {
            width, height, webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                enableRemoteModule: false,
                preload: path.join(__dirname, '..', '..', 'app.preload.js')
            }
        }

        const win = new BrowserWindow(winConfig)
        win.loadFile(viewPath)
        // win.webContents.openDevTools();

        return win
    }
}

module.exports = new CommonService()
