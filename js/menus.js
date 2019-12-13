
// fonction shuffle de l'array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


document.getElementById("bouton").addEventListener('click', function (){
    
    // change le display none en display flex de #menu
    document.getElementById("menu").style.display = "flex"; 
    
    let menus = [ "pennes carbonara", "spaguettis bolognaise", "lasagnes", "lasagnes de courgettes", "riz - dinde", "nuggets de poulet maison - crudités","riz pilaf",  "riz - poulet sauce coco", "burger - frites", "pizzas maison", "quiche au saumon", "quiche au thon","salade de crudités", "knacks - lentilles", "courgettes farcies", "hachi parmentier", "gratin dauphinois", "ratatouille - poulet","steack - haricots verts", "escalope de dinde - petits pois", "soupe de légumes", "crêpes salées", "saumon - pommes de terre", "crudités - semoule" ]
    
    
    shuffleArray(menus);                            // appel de la fonction shuffle
    let newMenu = menus.slice(0,7);                 //selection des 7 permiers éléements du tableau
    
    
    //selection et supprime les listes deja existantes
    let elements = document.getElementsByTagName("li"); 
    while (elements[0]) elements[0].parentNode.removeChild(elements[0]);

    
    //Boucle pour afficher le contenu du tableau dans les listes
    for (i = 0; i <= newMenu.length; i++ ){          // pour chaque element
        let liste = document.createElement("li");   // creation d'un element <li>
        liste.textContent= newMenu[i];              //ajout contenu à <li>
        document.getElementById("menu-liste").appendChild(liste); //ajout a la suite de l'id texte
    };
     
});
