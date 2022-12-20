function createAccount() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const secondPassword = document.getElementById("secondPassword");

    if (!firstName.value || !lastName.value || !email.value || !password.value || !secondPassword.value) {
        alert("Please fill in all the required details.");
    }

    const URL = "http://localhost:5611/api/v1/register";
    const body = {
        "first_name": firstName.value,
        "last_name": lastName.value,
        "email": email.value,
        "password": password.value,
        "second_password": secondPassword.value
    }
    const params = {
        "method": "POST",
        "mode": "cors",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    }

    fetch(URL, params).then(requestFinished).then(processData).catch(displayError);
}

function requestFinished(response) {
    if (!response.ok) {
        alert("Failed to register.");
    }
    return response.json();
}

function processData(data) {
    window.location.href = "signin.html";
}

function displayError(error) {
    alert(error.message);
}