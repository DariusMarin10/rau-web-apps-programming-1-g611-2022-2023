const userId = sessionStorage.getItem("userId");
if (userId) {
    window.location.href = "home.html";
}


function signIn() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!email.value || !password.value) {
        alert("Please fill in the required information.");
    }

    const URL = "http://localhost:5611/api/v1/authenticate";
    const body = {
        "email": email.value,
        "password": password.value
    };
    const params = {
        "method": "POST",
        "mode": "cors",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    };

    fetch(URL, params).then(responseReceived).then(processData).catch(displayError);
}

function responseReceived(response) {
    if (!response.ok) {
        alert("Failed to sign in.");
    }
    return response.json();
}

function processData(data) {
    localStorage.setItem("userId", data.id);
    localStorage.setItem("userEmail", data.email);

    sessionStorage.setItem("userId", data.id);
    sessionStorage.setItem("userEmail", data.email);

    document.cookie = `userId=${data.id}; userEmail=${data.email}; expires=Fri, 23 Dec 2022 23:59:59 UTC; path=/;`;

    window.location.href = "home.html";
}

function displayError(error) {
    alert(error.message);
}