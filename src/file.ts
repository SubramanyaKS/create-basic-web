import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import inquirer from "inquirer";
import chalk from "chalk";

/**
 * Creates a file with the specified content in the given folder path.
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
    console.log(chalk.yellow(`⚠ File "${filename}" already exists in "${folderPath}".`));
  }
};

/**
 * Creates a folder with an optional file inside it.
 *
 * @param folderPath - The base path where the folder should be created.
 * @param folderName - The name of the folder to create.
 * @param filename - (Optional) The name of the file to create inside the folder.
 * @param filecontent - (Optional) The content of the file (default: "Hello World").
 */
export const createMainFolder = (
  folderPath: string | null | undefined,
  folderName: string,
  filename?: string,
  filecontent?: string
): void => {
  if (!folderPath) {
    folderPath = process.cwd();
  }

  const fullPath = join(folderPath, folderName);

  if (!existsSync(fullPath)) {
    mkdirSync(fullPath);
    console.log(chalk.green(`✔ Folder "${folderName}" created successfully.`));
  } else {
    console.log(chalk.yellow(`⚠ Folder "${folderName}" already exists.`));
  }

  if (filename) {
    createFolderFile(fullPath, filename, filecontent);
  } else {
    console.log(chalk.yellow(`⚠ No filename provided. Skipping file creation.`));
  }
};

/**
 * Prompts the user for folder name input.
 *
 * @returns Promise resolving to user's folder name input.
 */
export const createProject = async (): Promise<{ folderName: string } | undefined> => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "folderName",
        message: "Enter the folder name:",
        default: "my-app",
        validate: (input: string) =>
          input.trim() !== "" ? true : "Folder name cannot be empty.",
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
