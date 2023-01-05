const { app, BrowserWindow } = require('electron');
const { resolve } = require('path');

/**
 * @type {{[alias: string]: BrowserWindow }}
 */
const linksMap = {
  about: null,
};

function openMenu(alias, linkPath, size) {
  if (linksMap[alias]) {
    linksMap[alias].focus();
    return;
  }
  const link = new BrowserWindow({
    parent: BrowserWindow.getFocusedWindow(),
    width: size.width,
    height: size.height,
    center: true,
    resizable: false,
    minimizable: false,
    maximizable: false,
    show: true,
    title: '',
  });
  link.loadURL('file://' + linkPath);
  linksMap[alias] = link;
  link.on('closed', function () {
    linksMap[alias] = null;
  });
}

module.exports = [
  {
    label: 'Application',
    submenu: [
      {
        label: 'About Umi@4 Example',
        click: function () {
          openMenu('about', resolve(__dirname, 'about.html'), {
            width: 285,
            height: 230,
          });
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Quit Umi@4 Example',
        accelerator: 'CmdOrCtrl+Q',
        click: function () {
          app.quit();
        },
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        selector: 'undo:',
        role: 'undo',
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        selector: 'redo:',
        role: 'redo',
      },
      {
        type: 'separator',
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        selector: 'cut:',
        role: 'cut',
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        selector: 'copy:',
        role: 'copy',
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        selector: 'paste:',
        role: 'paste',
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        selector: 'selectAll:',
        role: 'selectall',
      },
    ],
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.reload();
          }
        },
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: (function () {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I';
          }
          return 'Ctrl+Shift+I';
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.toggleDevTools();
          }
        },
      },
    ],
  },
];
