#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");

// const targetDir = process.argv[2] || "."; // User-specified directory or current dir
const templateDir = path.join(__dirname, "../template");

//console.log(process.argv)
//console.log(targetDir)
//console.log(templateDir)

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

  // Install dependencies if selected
  if (answers.installDeps) {
    // try {
    //   execSync("npm install", { cwd: targetDir, stdio: "inherit" });
    //   console.log("📦 Dependencies installed!");
    // } catch (error) {
    //   console.error("❌ Failed to install dependencies.");
    // }
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


// const fn = () => {

// // Copy files
// fs.copySync(templateDir, targetDir);
// console.log("✅ Project template successfully created!");

// // Optionally, install dependencies
// try {
//   execSync("npm install", { cwd: path.join(targetDir, "client"), stdio: "inherit" });
// } catch (error) {
//   console.error("❌ Failed to install client dependencies.");
// }

// try {
//   execSync("npm install", { cwd: path.join(targetDir, "server"), stdio: "inherit" });
// } catch (error) {
//   console.error("❌ Failed to install server dependencies.");
// }

// try {
//   execSync("npm install", { cwd: targetDir, stdio: "inherit" });
// } catch (error) {
//   console.error("❌ Failed to install project dependencies.");
// }

// }

// fn()