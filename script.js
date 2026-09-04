function showMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function startApp() {
    alert("Welcome to my Task 2 project!");
}

function viewProfile() {
    alert("Name: Prince Kamboj\nCourse: BCA");
}

function submitForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all fields.");
    } else {
        alert("Thank you " + name + "! Form submitted.");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
}
