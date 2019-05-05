import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = require("./firebaseStuff.json");

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // *** Auth API ***

  getCurrentUser = () => this.auth.currentUser;

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  // *** Database API ***
  /**
   * Get doctor's client list
   * @param {String} name The username of the doctor
   * @returns {Object}
   */
  getClients = name => this.db.collection("nutritionist/" + name).get();

  /**
   * Get specific client's data
   * @param {String} name fname of the client
   * @returns {Object} will contain notes and progress
   */
  getClient = name => this.db.collection("client/" + name).get();
}

export default Firebase;
