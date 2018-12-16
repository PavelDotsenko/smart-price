const {app, BrowserWindow} = require('electron');

let mainWindow;

let options = {width: 1000,
  			   height: 650,
  			   minWidth: 1000,
  			   minHeight: 650}

function createWindow () {
  mainWindow = new BrowserWindow(options)
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function () { mainWindow = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})