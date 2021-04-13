

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

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }