function toggleTheme() {
    document.body.classList.toggle("dark");
}

function togglePassword() {
    const input = document.getElementById("password");
    input.type = input.type === "password" ? "text" : "password";
}

function checkPassword() {
    const password = document.getElementById("password").value;
    const strength = document.getElementById("strength");
    const text = document.getElementById("strength-text");

    let score = 0;

    const rules = {
        length: password.length >= 8,
        upper: /[A-Z]/.test(password),
        lower: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };

    for (let rule in rules) {
        document.getElementById(rule).textContent =
            (rules[rule] ? "✔️ " : "❌ ") + document.getElementById(rule).textContent.slice(2);

        if (rules[rule]) score++;
    }

    if (password.length === 0) {
        strength.style.width = "0%";
        text.textContent = "";
        return;
    }

    if (score <= 2) {
        strength.style.width = "30%";
        strength.style.background = "red";
        text.textContent = "Weak Password";
        text.style.color = "red";
    } 
    else if (score <= 4) {
        strength.style.width = "65%";
        strength.style.background = "orange";
        text.textContent = "Medium Password";
        text.style.color = "orange";
    } 
    else {
        strength.style.width = "100%";
        strength.style.background = "green";
        text.textContent = "Strong Password";
        text.style.color = "green";
    }
}
