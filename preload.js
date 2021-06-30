const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('e', {
  api: {
    dropped(path) {
      ipcRenderer.send('dropped', path)
    }
  }
})