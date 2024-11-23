import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import inquirer from "inquirer";
import chalk from "chalk";


/**
 * Creates a file with the specified content in the given folder path file.
 *
 * @param folderPath - The path of the folder where the file should be created.
 * @param filename - The name of the file to create.
 * @param filecontent - The content to write into the file (default: "Hello World").
 */

export const createFolderFile = (
    folderPath: string | null,
    filename: string,
    filecontent?: string
  ): void => {
    if (!folderPath) {
      folderPath = process.cwd();
    }
  
    const filePath = join(folderPath, filename);
  
    if (!existsSync(filePath)) {
      if (!filecontent) {
        filecontent = "Hello World";
      }
  
      writeFileSync(filePath, filecontent);
      console.log(
        chalk.green(`✔ File "${filename}" created successfully in "${folderPath}".`)
      );
    } else {
      console.log(chalk.yellow(`⚠ File "${filename}" already exists.`));
    }
  };

/**
 * Creates a file with the specified content in the given folder path.
 *
 * @param folderPath - The path of the folder where the file should be created.
 * @param folderName - The name of the folder needs to create
 * @param filename - The name of the file to create.
 * @param filecontent - The content to write into the file (default: "Hello World").
 */


  export const createMainFolder = (folderPath:string,folderName:string,filename?:string|undefined,filecontent?:string|undefined) =>{
    if(folderPath==null || folderPath==''){
      folderPath=process.cwd();
    }
    folderPath = join(folderPath, folderName);
    if (!existsSync(folderPath)) {
      mkdirSync(folderPath);
      console.log(chalk.green(`✔ Folder "${folderName}" created successfully.`));
      if(filename){
        createFolderFile(folderPath,filename,filecontent);
      }
      else{
        if(filename==null || filename==undefined){
          console.log(chalk.yellow(`⚠ File "${filename}" already exists.`));
        }
      }
    } else {
      if(filename){
        createFolderFile(folderPath,filename,filecontent);
      }
      console.log(chalk.yellow(`⚠ Folder "${folderName}" already exists.`));
    }
   
  }

  export const createProject = async ():Promise<any>=> {
    try {
      const answers = await inquirer.prompt([
        {
          type: "input",
          name: "folderName",
          message: "Enter the folder name:",
          default: "my-app",
          validate: (input: string) => (input.trim() !== "" ? true : "Folder name cannot be empty."),
        },
      ]);
      return answers;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(chalk.red("Error: "), error.message);
      } else {
        console.error(chalk.red("An unexpected error occurred."));
      }
    }
  };