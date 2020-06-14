"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const createWindow = () => {
    //
    const window = new electron_1.BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            contextIsolation: true,
        },
    });
    window.loadFile("./index.html");
    window.webContents.openDevTools();
};
electron_1.app.whenReady().then(createWindow);
electron_1.app.on("window-all-closed", () => electron_1.app.quit());
//# sourceMappingURL=main.js.map