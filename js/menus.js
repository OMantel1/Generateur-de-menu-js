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

            let cheatMealList = shuffleArray(response.filter(x => x.cheatMeal === true));
            let pastaList = shuffleArray(response.filter(x => x.sideDish === "pasta"));
            let vegetablesList = shuffleArray(response.filter(x => x.sideDish === "vegetables"));
            let potatoesList = shuffleArray(response.filter(x => x.sideDish === "potatoes" && x.cheatMeal === false));
            let othersideDishList = shuffleArray(response.filter(x => x.sideDish !== 'potatoes' && x.sideDish !== 'pasta'  && x.sideDish !== 'vegetables'&& x.cheatMeal === false));
            displayNewList(pastaList, vegetablesList, potatoesList, cheatMealList, othersideDishList);
            // console.log(cheatMealList, pastaList, vegetablesList, potatoesList, othersideDishList)
        })
        .catch(error => {
            console.log(error);
            sendMsgError(error);
        });
});


function displayNewList(pasta, vegetables, potatoes, cheatMeal, other) {

    let liste = `
        <li><p>Lundi</p> <p>${vegetables[0].meal} </p></li>
        <li><p>Mardi</p> <p>${pasta[0].meal} </p></li>
        <li><p>Mercredi</p> <p>${vegetables[1].meal}</p></li>
        <li><p>Jeudi</p> <p>${other[0].meal}</p></li>
        <li><p>Vendredi</p> <p>${cheatMeal[0].meal}</p></li>
        <li><p>Samedi</p> <p>${other[1].meal}</p></li>
        <li><p>Dimanche</p> <p>${potatoes[1].meal}</p></li>`
    document.getElementById("menu-liste").innerHTML = liste;
    document.getElementById("menu").style.display = "flex";
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