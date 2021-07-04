const form = document.getElementById("login-form");

form.onsubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const senha = event.target.password.value;

    let usuario = null;

    try {
        usuario = JSON.parse(localStorage.getItem("usuario"));
    } catch (err) {
        addWarn("warn-user-not-found", "Usuário não encontrado.");
        return;
    }
    
    if (usuario && email !== usuario.email) {
        addWarn("warn-invalid-email", "Email inválido.");
        return;
    } else {
        removeWarn("warn-invalid-email");
    }

    if (usuario && senha !== usuario.senha) {
        addWarn("warn-invalid-password", "Senha inválida.");
        return;
    } else {
        removeWarn("warn-invalid-password");
    }

    window.location.href = "setores.html";
}
