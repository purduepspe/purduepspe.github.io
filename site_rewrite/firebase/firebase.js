const firebase = require("firebase");
const firebaseStore = require("firebase/firestore");
const moment = require("./moment.js");



const init = () => {
    console.log("starting firebase");
    firebase.initializeApp({
        apiKey: "",
        authDomain: "",
        projectId: ""
    });

    let db = firebase.firestore();


    return db;
}

const submitEvent = (datetime, details, location, submitter, title, updated) => {

}

const getEvents = (database) => {
    const events = database.collection("events");
    let query = events.where("date", ">=", moment.format("X"))
}





console.log(moment.format("X"));


// const db = init();