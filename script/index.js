function joinToggleText(button) {
  if (button.innerText == "Join Group") {
    button.innerText = "Leave Group";
  } else {
    button.innerText = "Join Group";
  }
}

window.onload = function () {
  const myParagraph = document.getElementById("filter");

  if (window.innerWidth < 768) {
    myParagraph.innerText = "Filter: All";
  } else {
    myParagraph.innerText = "Write a Post";
  }
};

// Detect window width changes
window.addEventListener("resize", function () {
  var windowWidth = window.innerWidth;
  const myParagraph = document.getElementById("filter");

  if (windowWidth < 768) {
    myParagraph.innerText = "Filter: All";
    // console.log("inside 768", windowWidth);
  } else {
    myParagraph.innerText = "Write a Post";
    // console.log("outside 768", windowWidth);
  }
});

function followedToggleClass(buttons) {
  if (buttons.innerText == "Follow") {
    buttons.classList.add("followed");
    buttons.innerText = "Followed!";
  } else {
    buttons.classList.remove("followed");
    buttons.innerText = "Follow";
  }
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const passwordIcon = document.querySelector(".modal-password-eye");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.setAttribute("src");
  } else {
    passwordInput.type = "password";
    passwordIcon.setAttribute("src");
  }
}
