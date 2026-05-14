function reveal() {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);


function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    const alertBox = document.getElementById("formAlert");
    const alertText = document.getElementById("alertMessage");

    document.getElementById("nameInput").classList.remove("is-invalid");
    document.getElementById("emailInput").classList.remove("is-invalid");
    document.getElementById("messageInput").classList.remove("is-invalid");

    let isValid = true;

    if (name === "") {
        document.getElementById("nameInput").classList.add("is-invalid");
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailInput").classList.add("is-invalid");
        isValid = false;
    }

    if (message === "") {
        document.getElementById("messageInput").classList.add("is-invalid");
        isValid = false;
    }

    if (message.length > 100) {
        document.getElementById("messageInput").classList.add("is-invalid");
        isValid = false;
    }

    alertBox.classList.remove("d-none", "alert-success", "alert-danger"); // Reset alert

    if (!isValid) {
        alertBox.classList.add("alert-danger");
        alertText.innerHTML = "<strong>Error!</strong> Please fill out all required fields correctly.";
    } else {
        alertBox.classList.add("alert-success");
        alertText.innerHTML = "<strong>Success!</strong> Thank you, " + name + ". Your message has been sent!";
        document.getElementById("contactForm").reset();
    }
    
    return false;
}

function closeAlert() {
    document.getElementById("formAlert").classList.add("d-none");
}