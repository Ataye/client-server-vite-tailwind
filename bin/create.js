#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateDir = path.join(__dirname, "../template");

async function main() {
  console.log("🚀 Welcome to Ataye client-server-vire template.");

  // Ask user for project name
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
      default: "my-new-project",
    },
    {
      type: "confirm",
      name: "installDeps",
      message: "Would you like to install dependencies now?",
      default: true,
    },
  ]);

  const targetDir = path.join(process.cwd(), answers.projectName);

  // Copy template files
  fs.copySync(templateDir, targetDir);
  console.log(`✅ Project "${answers.projectName}" created!`);

  // Update package.json
  const packageJsonPath = path.join(targetDir, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = fs.readJsonSync(packageJsonPath);
    packageJson.name = answers.projectName;
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
    console.log("📦 Updated package.json with project name.");
  }

  // Install dependencies if selected
  if (answers.installDeps) {
    try {
      execSync("npm install", { cwd: path.join(targetDir, "client"), stdio: "inherit" });
      console.log("📦 Client dependencies installed!");
    } catch (error) {
      console.error("❌ Failed to install client dependencies.");
    }

    try {
      execSync("npm install", { cwd: path.join(targetDir, "server"), stdio: "inherit" });
      console.log("📦 Server dependencies installed!");
    } catch (error) {
      console.error("❌ Failed to install server dependencies.");
    }

    try {
      execSync("npm install", { cwd: targetDir, stdio: "inherit" });
      console.log("📦 Project dependencies installed!");
    } catch (error) {
      console.error("❌ Failed to install project dependencies.");
    }
  }

  console.log("🎉 Setup complete! Happy coding!");
}

main().catch(console.error);