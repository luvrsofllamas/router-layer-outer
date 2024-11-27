import * as fs from "fs";
import * as path from "path";
import { slotLayout, stackLayout, tabsLayout, screenTemplate } from "./templates";

export function createStructureFromJson(jsonString: string, rootDir: string) {
  const jsonObject = JSON.parse(jsonString);

  removeAllFilesInDir(rootDir);

  function createStructure(obj: any, currentPath: string) {
    // add layout file
    if (obj["_layout"]) {
      const layout = obj["_layout"];
      if (layout === "stack") {
        fs.writeFileSync(path.join(currentPath, "_layout.tsx"), stackLayout);
      }
      if (layout === "tabs") {
        fs.writeFileSync(path.join(currentPath, "_layout.tsx"), tabsLayout);
      }
      if (layout === "slot") {
        fs.writeFileSync(path.join(currentPath, "_layout.tsx"), slotLayout);
      }
    } else if( currentPath === rootDir) {
      // add implicit top level layout if not defined
      fs.writeFileSync(path.join(currentPath, "_layout.tsx"), slotLayout);
    }

    // add other files
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // skip layout
        if (key.startsWith("_layout")) {
          continue;
        }

        const newPath = path.join(currentPath, key);
        if (!obj[key]) {
          fs.writeFileSync(addTsxExtension(newPath), screenTemplate(key));
        } else {
          if (!fs.existsSync(newPath)) {
            fs.mkdirSync(newPath);
          }
          createStructure(obj[key], newPath);
        }
      }
    }
  }

  createStructure(jsonObject, rootDir);
}

function addTsxExtension(filename: string): string {
  if (!filename.endsWith(".tsx")) {
    return `${filename}.tsx`;
  }
  return filename;
}

function removeAllFilesInDir(rootDir: string) {
  const files = fs.readdirSync(rootDir);

  for (const file of files) {
      const filePath = path.join(rootDir, file);
      if (fs.statSync(filePath).isFile()) {
          fs.unlinkSync(filePath);
      } else if (fs.statSync(filePath).isDirectory()) {
          fs.rmdirSync(filePath, { recursive: true });
      }
  }
}