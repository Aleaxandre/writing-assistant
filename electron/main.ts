import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "Writing Assistant",
    titleBarStyle: "hidden",
    useContentSize: true,
    backgroundColor: "#222222",
    autoHideMenuBar: true, // Press ALT key to display it
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.maximize();

  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(`http://localhost:4000`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, "../index.html")}`);
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);
app.allowRendererProcessReuse = true;
