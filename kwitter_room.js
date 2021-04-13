
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBFaXf3UQOQvJ095S3zwyuQplNIwyY6Mn0",
      authDomain: "kwitter-35af4.firebaseapp.com",
      databaseURL: "https://kwitter-35af4-default-rtdb.firebaseio.com",
      projectId: "kwitter-35af4",
      storageBucket: "kwitter-35af4.appspot.com",
      messagingSenderId: "394905286411",
      appId: "1:394905286411:web:c3ea5f310018c5d75c140e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names+" </div> <hr> ";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() 
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

