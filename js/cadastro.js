const form = document.getElementById("form");

const validarEmail = () => {
    const email = form.email.value;
    const regexp = new RegExp("(^[a-zA-Z0-9]+([.]{1}[a-zA-Z0-9]+)*)[@]{1}([a-zA-Z0-9]+[.])*[a-zA-Z]+");

    return regexp.test(email);
};

const validarSenha = () => {
    const senha = form.password.value;

    if (senha.length < 8 || senha.length > 16) {
        return false;
    }

    const regexp = new RegExp("^.*(?=.*[a-zA-Z])(?=.*\\d).*$");

    return regexp.test(senha);

    return true;
};

const confirmarSenha = () => {
    const senha = form.password.value;
    const confirm = form["password-confirm"].value;

    return (senha === confirm);
};

form.email.onchange = () => {
    if (!validarEmail()) {
        addWarn("warn-invalid-email", "Email inválido.");
    } else {
        removeWarn("warn-invalid-email");
    }
}

form.password.onchange = () => {
    if (!validarSenha()) {
        addWarn("warn-invalid-password", "Senha inválida.");
    } else {
        removeWarn("warn-invalid-password");
    }
}

form["password-confirm"].onchange = () => {
    if (!confirmarSenha()) {
        addWarn("warn-different-passwords", "As senhas não coincidem.");
    } else {
        removeWarn("warn-different-passwords");
    }
}

form.onchange = () => {
    let submit = document.getElementById("submit");
    if (!validarEmail() || !validarSenha() || !confirmarSenha()) {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
}

form.onsubmit = event => {
    event.preventDefault();

    const data = {
        nome: event.target.name.value,
        email: event.target.email.value,
        numero: event.target.number.value,
        senha: event.target.password.value
    };

    localStorage.setItem("usuario", JSON.stringify(data));
    window.location.href = "login.html";
};
