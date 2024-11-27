import * as fs from "fs";
import { Command } from "commander";
import { createStructureFromJson } from "./build-tree";

const program = new Command();

program
  .argument("<layout>", "JSON file with a router layout")
  .action((layout) => {
    const layoutJson = fs.readFileSync(layout, "utf-8");
    createStructureFromJson(layoutJson, "./app");
  });

  program.parse(process.argv);