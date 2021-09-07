const firebaseConfig = {
      apiKey: "AIzaSyDIp4V1Uf-FUM1dF0prkMaltiHhHPfnfog",
      authDomain: "js-database-8d724.firebaseapp.com",
      databaseURL: "https://js-database-8d724-default-rtdb.firebaseio.com",
      projectId: "js-database-8d724",
      storageBucket: "js-database-8d724.appspot.com",
      messagingSenderId: "705669646749",
      appId: "1:705669646749:web:3fca5c9c52f423c22c8774"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
