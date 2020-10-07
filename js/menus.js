document.getElementById("bouton").addEventListener('click', function () {
    fetch("menus.json")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error = "Aie... il semblerait qu'il y ait une erreur";
            }
        })
        .then(response => {
            shuffleArray(response);
            let newMenu = response.slice(0, 7); //selection des 7 permiers éléements du tableau
            resetOldList();
            displayNewList(newMenu);
        })
        .catch(error => {
            console.log(error);
            sendMsgError(error);
        });
});


function displayNewList(newMenu) {
    for (i = 0; i < newMenu.length; i++) {
        let liste = document.createElement("li");
        liste.textContent = newMenu[i];
        document.getElementById("menu-liste").appendChild(liste);
    };
    document.getElementById("menu").style.display = "flex";
}

function resetOldList() {
    let elements = document.getElementsByTagName("li");
    while (elements[0])
        elements[0].parentNode.removeChild(elements[0]);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sendMsgError(elt) {
    let msgError = document.querySelector(".msgError");
    msgError.classList.remove("msgHidden");
    msgError.innerHTML = elt;
}