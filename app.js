function displayUsers() {
  const tableBody = document.querySelector('#userTable tbody');

  // Clear existing table rows
  tableBody.innerHTML = '';

  // Retrieve user data from Local Storage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== 'Current_User') {
      const name = key;
      const email = localStorage.getItem(key);

      // Create a new table row
      const row = document.createElement('tr');

      // Create table cells for name and email
      const nameCell = document.createElement('td');
      nameCell.textContent = name;

      const emailCell = document.createElement('td');
      emailCell.textContent = email;

      // Append cells to the row
      row.appendChild(nameCell);
      row.appendChild(emailCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    }
  }
}
window.addEventListener('DOMContentLoaded', displayUsers);

function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (localStorage.getItem(username)) {
    alert("Username already exists.");
    return;
  }

  localStorage.setItem(username, password);
  alert("Registration successful!");
  onlinestatus(username);
  window.location.assign("login.html");
}

function login() {
  const username = document.getElementById("username").value;
  // const password = document.getElementById("password").value; // Assuming the password is entered in the "password" input field
  // const savedPassword = localStorage.getItem(username);

  const savedusername = localStorage.getItem(username);
  
  if (savedusername) {
    alert("Login successful!");
    localStorage.setItem(`${username}_status`, "online");
    localStorage.setItem("Current_User", username);
    onlinestatus(username);
    window.location.assign("index.html");
  } else {
    alert("Login failed. Please check your username and password.");
    console.log(username);

  }
  // displayName();
}





<<<<<<< HEAD
function logout() {
  let user1 = localStorage.getItem("Current_User");
  const status = localStorage.getItem(`${user1}_status`);

  if (status == "online") {
    window.location.assign("index.html");
    localStorage.removeItem(`${user1}_status`);
    localStorage.setItem("Current_User", "");
    console.log(user1);

  } else {
    alert("User is no longer online");
  }
  displayName();
}

function signup1() {
  window.location.assign("signup.html");
}



// Call the displayName function when the page loads
window.addEventListener('DOMContentLoaded', displayName);



function card() {

  const username = document.getElementById("card").value;
  localStorage.setItem(card)
}
function checkPassword() {
  var password = document.getElementById("passwordInput").value;

  if (password === "1234") {
    window.location.href = "user.html";
  } else {
    // Incorrect password, add a red border to the input box
    document.getElementById("passwordInput").style.borderColor = "red";
  }
}
=======
// function logout() {
//   let user1 = localStorage.getItem("Current_User");
//   const status = localStorage.getItem(`${user1}_status`);

//   if (status == "online") {
//     window.location.assign("index.html");
//     localStorage.removeItem(`${user1}_status`);
//     localStorage.setItem("Current_User", "");
//     console.log(user1);

//   } else {
//     alert("User is no longer online");
//   }
//   displayName();
// }

// function signup1() {
//   window.location.assign("signup.html");
// }


// // Call the displayName function when the page loads
// window.addEventListener('DOMContentLoaded', displayName);



// function card() {

//   const username = document.getElementById("card").value;
//   localStorage.setItem(card)
// }
// function checkPassword() {
//   var password = document.getElementById("passwordInput").value;

//   if (password === "1234") {
//     window.location.href = "user.html";
//   } else {
//     // Incorrect password, add a red border to the input box
//     document.getElementById("passwordInput").style.borderColor = "red";
//   }
// }
>>>>>>> 12747ed (update to the app)
