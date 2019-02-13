


  firebase.initializeApp(config);

function addTodo() {
  var todoitem = document.getElementById('textbox').value;

  var listItem= document.createElement('li');
  listItem.innerHTML = todoitem;

  var list = document.getElementById('list');
  list.append(listItem);

  firebase.database().ref('todos/').set ({
    username: "kk",
    email: "",
  })
}

// var database = Firebase.database();

  // firebase.initializeApp(config);


  // firebase.database().ref('')
