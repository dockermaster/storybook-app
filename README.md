This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to see Percy or Chromatic
 Send a PR after changing one of the CSS classes. When the PR goes through Circle build, it runs 3 tests :-
  - Unit Tests
  - Percy Tests
  - Chromatic Tests
  
 At the end of the build you will see the failure marked in PR for both Percy and Chromatic.  Click on respective links to view the comparisons. Approve/Reject as needed.  
 
 Note that to view Chromatic failures, you will have to pick the link from Circle CI build console.log since it does not take you to the chromatic portal directly.
 
### Analyzing the Bundle Size
