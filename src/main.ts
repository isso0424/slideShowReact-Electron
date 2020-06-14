import { app, BrowserWindow } from "electron";

const createWindow = () => {
  //
  const window = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: true,
    },
  });

  window.loadFile("./index.html");

  window.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => app.quit());
