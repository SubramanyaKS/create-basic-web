# create-basic-app

A CLI tool to scaffold a basic HTML folder structure with ease! Quickly generate a boilerplate structure for your web projects.

## Features

- Creates a basic HTML folder structure
- Includes files like `index.html`, `style.css`, and `script.js`
- Interactive prompts for customization of file and folder names

## Installation

Install the package globally using npm:

```bash
npm install -g create-basic-app
```
## Usage
1. Run the CLI tool:
```
create-basic-app
```
2. Follow the prompts:
The tool will ask for the following inputs 
* Folder Name/project Name: Name of the folder where the structure will be created

``` 
Running CLI App...
✔ Enter the folder name: my-project
✔ Folder "my-project" created successfully.
✔ File "index.html" created successfully in "D:\Learning\nodejs\cli-learning\create-basic-app\my-project".
✔ File ".gitignore" created successfully in "D:\Learning\nodejs\cli-learning\create-basic-app\my-project".
⚠ Folder "my-project" already exists.
✔ File "README.md" created successfully in "D:\Learning\nodejs\cli-learning\create-basic-app\my-project".
⚠ Folder "my-project" already exists.
✔ Folder "css" created successfully.
✔ File "style.css" created successfully in "my-project\css".
✔ Folder "js" created successfully.
✔ File "script.js" created successfully in "my-project\js".
✔ Folder "assets" created successfully.
⚠ File "undefined" already exists.
✔ Folder "images" created successfully.
⚠ File "undefined" already exists.
✔ Folder "fonts" created successfully.
⚠ File "undefined" already exists.
All tasks completed!
```

3. Navigate to the folder:

cd my-project