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
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!"

function add_room(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
purpose : "you are in the room"
      })
     localStorage.setItem("room_name" , room_name) ;
     window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("user_name" , name)
      window.location = "kwitter_page.html"
}
function log_out(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}