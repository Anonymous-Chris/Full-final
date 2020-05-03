import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD0-eu9Nr3LIePwAo7gcdxHJrbvOriVAnk",
  authDomain: "tutoring-4557d.firebaseapp.com",
  databaseURL: "https://tutoring-4557d.firebaseio.com",
  projectId: "tutoring-4557d",
  storageBucket: "tutoring-4557d.appspot.com",
  messagingSenderId: "68577167722",
  appId: "1:68577167722:web:9ea0a33a3393789ad9fd13",
  measurementId: "G-XL3NJT1PWX"
};


const fire = firebase.initializeApp(config);
var secondaryfire = firebase.initializeApp(config, "Secondary");
export {fire as default, secondaryfire};