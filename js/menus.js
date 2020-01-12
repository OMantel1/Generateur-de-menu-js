
// fonction shuffle de l'array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// permet d'animer le bouton à chaque click en ajoutant et enlevant la class anim
document.getElementById("bouton").addEventListener('click', function (){
      document.getElementById("bouton").classList.add("anim"); //ajout l'anim sur le bouton
      setTimeout(function () {
           document.getElementById("bouton").classList.remove("anim");
        }, 1000);
  
});

document.getElementById("bouton").addEventListener('click', function (){
    
    // change le display none en display flex de #menu
    document.getElementById("menu").style.display = "flex"; 
    
    let menus = [ 
        "pennes carbonara",
        "spaguettis bolognaise",
        "lasagnes", 
        "lasagnes de courgettes", 
        "chili con carne", 
        "nuggets de poulet maison - crudités",
        "brochettes de poulet miel et beurre de cacahuète",
        "riz pilaf",  
        "poulet sauce coco - riz",
        "risoto poulet chorizo", 
        "boeuf sauté - riz cantonais",
        "burger - frites", 
        "pizzas maison", 
        "quiche au saumon", 
        "quiche lorraine - salade",
        "salade de crudités", 
        "knacks - lentilles", 
        "courgettes farcies", 
        "hachi parmentier", 
        "gratin dauphinois", 
        "gratin de courgettes",
        "poulet - ratatouille",
        "steack - haricots verts", 
        "escalope de dinde - petits pois",
        "escalope de dinde - courgettes à la crème", 
        "escalope de dinde - riz",
        "soupe de légumes", 
        "crêpes salées", 
        "saumon - pommes de terre", 
        "salade tomate mozarella", 
        "brochettes de saumon - riz",
        "roti de porc à la moutarde - légumes",
        "raclette",
        "fondue",
        "croziflette",
        "velouté de carottes",
        "tacos",
        "hot dog",
        "butter chicken - cheese nan",
        "suchis",
        "poisson - légumes à la vapeur",
        "tian de légumes",
        "filet de sole - légumes",
        "couscous aux légumes"
    ]
    
    
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
