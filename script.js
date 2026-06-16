const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    message.innerHTML = "✅ Registration Submitted Successfully!";
    message.style.marginTop = "20px";
    message.style.color = "green";

    form.reset();
});
