# Neko Finder
This is an API that integrates with TheCatAPI
https://thecatapi.com/

Developer: Ryan Gunawardana (ryanmgunawardana@gmail.com)


![image](https://user-images.githubusercontent.com/26731966/153346344-d2ded930-404b-45ab-8045-d2f2bc3856bb.png)



## Initial Configurations

The app directory of your application will contain a .env.example file.

Copy and rename `.env.example` to `.env` and the appropriate env variables


#### Environment Variables

| Variable | Description | Default Value
| --- | --- | :---:
| `REACT_APP_CAT_API_HOST` | TheCatAPI base url | https://api.thecatapi.com/v1
| `REACT_APP_CAT_API_KEY` | TheCatAPI api key |

For TheCatAPI api keys (get yours in https://docs.thecatapi.com/)

After these steps you can proceed to the running your app section.


## Running the app
Before proceeding please be sure you are done with setting up your Initial Configurations

#### Installing and running locally

##### Requirements

* Yarn and Node.js >=11 (https://nodejs.org/en/)

##### Steps

On the main directory run:
```shell
$ yarn install
$ yarn start
``` 
Then open http://localhost:3000

##### To run tests
```shell
$ yarn test
``` 


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`


# Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
