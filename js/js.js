
let users = [
  {
    name: "Asel Halabi",
    number: "0505835351",
    email: "asel@example.com",
    address: "dec",
    description: "fjdfkgdkjfdk",
    img: "image/contat.png"
  },
  {
    name: "John Doe",
    number: "0123456789",
    email: "john.doe@example.com",
    address: "123 Elm Street",
    description: "John is a software engineer.",
  img: "image/contat.png"
  },
  {
    name: "Jane Smith",
    number: "0987654321",
    email: "jane.smith@example.com",
    address: "456 Oak Avenue",
    description: "Jane is a graphic designer.",
  img: "image/contat.png"
  },
  {
    name: "Alice Johnson",
    number: "0112233445",
    email: "alice.johnson@example.com",
    address: "789 Pine Road",
    description: "Alice is a project manager.",
  img: "image/contat.png"
  },
  {
    name: "Bob Brown",
    number: "0555667788",
    email: "bob.brown@example.com",
    address: "101 Maple Drive",
    description: "Bob is a digital marketer.",
  img: "image/contat.png"
  },
]




function showuser() {
  let userlist = "";
  users.forEach
    (function (person, index) {
      userlist += ` <li id="user">
              <div class="first2">

                <div class="contactpic">
                  <img src="image/contat.png" alt="">
                </div>

                <div class="name">
                  <p>${person.name}</p>
                </div>
              </div>

              <div class="buttons">
                <img src="image/info.png" onclick="showpopup('moreinfo');display_user(${index}) " alt="" class="temp_butttons">
                <img src="image/edit.png" alt="" onclick="showpopup('edituser_adduser');change_value(${index});show_user(${index})" class="temp_butttons">
                <img src="image/delete.png" alt="" onclick="delete_user(${index})" class="temp_butttons">
              </div>
            </li> `
    })
  document.getElementById('usersaa').innerHTML = userlist;
  document.querySelector(".tempP").textContent = "count pepole : " + users.length;
}
showuser();






function showpopup(funname) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById(funname).classList.add("show");
}

function closepopup(x) {
  if (x.target == document.getElementById("popup") || x == "close") {
    document.getElementById("popup").style.display = "none"
    document.querySelector(".show").classList.remove("show");

    document.getElementById("add_button").innerHTML = ` <button onclick="close_popup('close')" id="cancel_add">Cancel</button>
            <button onclick="save_edit()" value="" id="save_add" >Save</button>`;
    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
    document.getElementById('email').value = "";
    document.getElementById('address').value = "";
    document.getElementById('description').value = "";


  }


}


function display_user(index) {
  //DISPLAY USER INFO IN MORE INFO POPUP
  document.getElementById("contact_img").src = users[index].img;

  document.getElementById("contact_name").textContent = users[index].name;

  document.getElementById("contact_phone").textContent = users[index].number;

  document.querySelector("#contact_email span").textContent = `Email: ${users[index].email}`;

  document.querySelector("#contact_address span").textContent = `Address: ${users[index].address}`;

  document.querySelector("#contact_description span").innerHTML = `Description: ${users[index].description}`

}

function delete_user(index) {
  if (index === 'all') {
    users = [];
    showuser();
  }
  else {
    users.splice(index, 1);
    showuser();
  }
}


function stopref(e) {
  event.preventDefault();
}


function show_user(index) {
  document.getElementById("name").value = users[index].name;
  document.getElementById("number").value = users[index].number;
  document.getElementById("email").value = users[index].email;
  document.getElementById("address").value = users[index].address;
  document.getElementById("description").value = users[index].description;
}

function change_value(index) {
  document.getElementById("save_add").value = index;
  if (index == -1) {
    document.getElementById("add_button").innerHTML = ` <button onclick="close_popup('close')" id="cancel_add">Cancel</button>
            <button onclick="save_edit()" value="-1" id="save_add" >Add</button>`}

}

function save_edit() {
  let index = document.getElementById("save_add").value;

  if (index == -1) {

    users.push({
      name: document.getElementById('name').value,
      number: document.getElementById('number').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      description: document.getElementById('description').value,
      img: "image/contat.png"
    });
    closepopup('close');
    showuser();
  }
  else {
    console.log(document.getElementById("name").value);
    users[index].name = document.getElementById("name").value;
    users[index].number = document.getElementById("number").value;
    users[index].email = document.getElementById("email").value;
    users[index].address = document.getElementById("address").value;
    users[index].description = document.getElementById("description").value;
    showuser();
    closepopup('close');

  }
}

