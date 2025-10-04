#!/usr/bin/env node

import chalk from "chalk";
import { csscontent, gitignorecontent, htmlContent, jscontent, readmecontent } from './content';
import {createProject, createMainFolder} from './file';


// Main function to run the CLI app
const main = async() => {
  try {
    console.log('Running CLI App...');
    const answers = await createProject();
    if (!answers) {
      throw new Error("Failed to get project details.");
    }
    const { folderName } = answers;
     // Create folders and add files
     createMainFolder('',folderName,"index.html",htmlContent);
     createMainFolder(``,folderName,".gitignore",gitignorecontent);
     createMainFolder('',folderName,"README.md",readmecontent)
     createMainFolder(folderName,'css','style.css',csscontent);
     createMainFolder(folderName,'js','script.js',jscontent);
     createMainFolder(folderName,'assets');
     createMainFolder(`${folderName}/assets`,'images');
     createMainFolder(`${folderName}/assets`,'fonts');

  console.log('All tasks completed!');
    
  } catch (error:unknown) {
    if (error instanceof Error) {
      console.error(chalk.red("Error: "), error.message);
    } else {
      console.error(chalk.red("An unexpected error occurred."));
    }
  }
  
};

main();