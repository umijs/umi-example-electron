const electron = require('electron');
const path = require('path');
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;

/**
 * @type {electron.BrowserWindow}
 */
let mainWindow = null;

app.on('window-all-closed', app.quit);

const startupOpts = {
  useContentSize: true,
  width: 1000,
  minWidth: 930,
  height: 700,
  minHeight: 600,
  center: true,
  resizable: true,
  alwaysOnTop: false,
  fullscreen: false,
  skipTaskbar: false,
  kiosk: false,
  title: '',
  show: false,
  frame: true,
  disableAutoHideCursor: false,
  autoHideMenuBar: false,
  titleBarStyle: 'default',
  webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true,
    contextIsolation: false,
  },
};

app.on('ready', function () {
  Menu.setApplicationMenu(Menu.buildFromTemplate(require('./system/menus')));

  mainWindow = new BrowserWindow(startupOpts);

  if (process.env.NODE_ENV === 'dev') {
    setTimeout(function () {
      mainWindow.loadURL('http://localhost:8000/');
    }, 5000);
  } else {
    mainWindow.loadURL(
      'file://' + path.resolve(__dirname, '..', 'output', 'index.html'),
    );
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  mainWindow.show();
});
