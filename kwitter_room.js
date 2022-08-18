const firebaseConfig = {
    apiKey: "AIzaSyBmHZOwd_bZ_1e4fjOwG2QTFRRBvq6iDnw",
    authDomain: "let-s-chat-project-3327f.firebaseapp.com",
    databaseURL: "https://let-s-chat-project-3327f-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-project-3327f",
    storageBucket: "let-s-chat-project-3327f.appspot.com",
    messagingSenderId: "444463805044",
    appId: "1:444463805044:web:3963e8fd6708fb4ae21721",
    measurementId: "G-BQECQEVGFL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() 
{
  firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="Index.html";
 }
//End code
});});}
getData();

