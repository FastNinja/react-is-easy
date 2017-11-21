import * as firebase from "firebase";
import config from "./firebase-config";

let database;
export const init = () => {
  firebase.initializeApp(config);
  database = firebase.database();
};
