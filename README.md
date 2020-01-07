# Server Side Rendered Site for Northern Nevada Network Service utilizing SASS, NEXTjs and Reactjs


## Getting the project up and running

- clone or download the [Githhub repo found here](https://github.com/wcolts2000/nnns.git)
- install dependencies via npm in the projects root directory where the package.json is located with the following terminal command: `npm i` 
- note that the project is using [SASS](https://sass-lang.com/). NEXTjs is handling the css build for you.

## Running the project in development mode

- In the terminal in the root directory of the project where you find the package.json, start the project with the following command: `npm run dev`
- After NEXT has compiled the pages and started the server, go to your browser and navigate to `localhost:3000`.

## Stopping the development server

- In the terminal that the server is running on press `CTRL` + `c` to stop the server.

## Building the project

- In the terminal in the root directory of the project where you find the package.json, build a production copy of the project with the following command: `npm run build`.
- If you want to generate static pages and have them pre-built server side, you will want to add the next command as well: `npm run export`.
- Deploy to your server.