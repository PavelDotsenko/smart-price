const {app, BrowserWindow} = require('electron');

let mainWindow,
	options = {
		width: 1000,
		height: 650,
		showTrayIcon: true,
		minWidth: 1000,
		minHeight: 650,
		debug: true
	};

function createWindow () {
	mainWindow = new BrowserWindow(options)
	if (options.debug) {
		mainWindow.openDevTools();
		mainWindow.maximize()
	}

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