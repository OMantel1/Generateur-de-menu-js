window.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("bouton").addEventListener('click', async function () {
        const response = await axios.get("menus.json")
        if (response.status !== 200) {
            return sendMsgError("Aie... il semblerait qu'il y ait une erreur");
        }
            
        const menus = response.data
        const healtyAndVegetables = shuffleArray(menus.filter(x => x.healthy === true && x.sideDish === 'vegetables'))
        const healtyAndNotVegetables = shuffleArray(menus.filter(x => x.healthy === true && x.sideDish !== 'vegetables'))
        const pastaList = shuffleArray(menus.filter(x => x.sideDish === "pasta" && x.healthy === false));
        const cheatMealList = shuffleArray(menus.filter(x => x.cheatMeal === true));

        displayNewList({ healtyAndVegetables,  healtyAndNotVegetables, pastaList, cheatMealList});
    });
    
    

})

function displayNewList({ healtyAndVegetables,  healtyAndNotVegetables, pastaList, cheatMealList }) {
    let liste = `
        <li><p>Lundi</p> <p>${healtyAndVegetables[0].meal} </p></li>
        <li><p>Mardi</p> <p>${pastaList[0].meal} </p></li>
        <li><p>Mercredi</p> <p>${healtyAndNotVegetables[0].meal}</p></li>
        <li><p>Jeudi</p> <p>${healtyAndVegetables[1].meal}</p></li>
        <li><p>Vendredi</p> <p>${cheatMealList[0].meal}</p></li>
        <li><p>Samedi midi</p> <p>${healtyAndNotVegetables[1].meal}</p></li>
        <li><p>Samedi soir</p> <p>${cheatMealList[1].meal}</p></li>
        <li><p>Dimanche midi</p> <p>${pastaList[1].meal}</p></li>
        <li><p>Dimanche soir</p> <p>${healtyAndVegetables[2].meal}</p></li>`
        
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

export { displayNewList, shuffleArray, sendMsgError};