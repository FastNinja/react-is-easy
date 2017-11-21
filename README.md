

## What it is
- single page react app that can be used for anything. currently it has landing page, login page, sign up page and sign out page. 


## How to run
- understand what firebase is (https://firebase.google.com/docs/web/setup)
- configure Firebase - create `firebase-config.js` file in `src/firebase/`
- content of the file:
```
// this is specific to the environment
const config = {
  apiKey: "xxx",
  authDomain: "xxx.firebaseapp.com",
  databaseURL: "https://xxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "yyy"
};

export default config;
```
\
- open command line and do `npm install`
- then run `npm start`
- navigate to `localhost:3000`


P.S.This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

