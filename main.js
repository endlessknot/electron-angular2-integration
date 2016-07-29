const electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function ()
{

	// main browser window
	mainWindow = new BrowserWindow(
	{
		width: 800,
		height: 600
	});

	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function ()
	{
		mainWindow = null
	});
});
