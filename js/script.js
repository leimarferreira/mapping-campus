const addWarn = (classe, mensagem) => {
    let existingWarn = document.querySelector(`.${classe}`);

    if (!existingWarn) {
        let warn = document.createElement("div");
        warn.classList.add(classe);
        warn.innerHTML = `<p class="text-danger">${mensagem}</p>`;
        form.append(warn);
    };
};

const removeWarn = (classe) => {
    let warn = document.querySelector(`.${classe}`);

    if (warn) {
        warn.parentNode.removeChild(warn);
    }
};
