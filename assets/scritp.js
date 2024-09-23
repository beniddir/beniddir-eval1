/* 1- Sélection du formulaire */

let formInscription = document.querySelector("form[name='inscription']");
console.log(formInscription);

/* 2- écouteur d'événement sur le submit */
formInscription.addEventListener('submit', functionInscription);

/* 3- fonction pour traiter le formulaire */
function functionInscription(event) {

    // a) empêche le comportement naturel du formulaire (son envoi)
    event.preventDefault();

    // b) récupération du contenu des champs dans des variables
    let prenom = event.target.prenom.value,
        nom = event.target.nom.value,
        email = event.target.email.value,
        message = event.target.message.value;
    console.log(prenom, nom, email,message);

    // c) déclaration du regex qui va permettre de vérifier la validité de l'email 
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z-]+)*$/;
    // let regex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z-]+)*$');

    /* un regex ou regular expression (expression régulière) est une déclaration qui va permettre de définir la structure et les caractères autorisés d'un élément (code postal, adresse mail, etc.) */

    // d) tests des différents éléments du formulaire
    if (prenom !== '' || nom !== '') { // on vérifie qu'il n'y a pas d'input vide
        if (prenom.length < 2) {
            event.target.prenom.classList.remove('valide')
            event.target.prenom.classList.add('erreur')
            alert("erreur les conditions ne sont pas respectées");
        } else {
            // on enleve la classe erreur avant de lui assigner la classe valide
            event.target.prenom.classList.remove('erreur')
            alert("erreurles conditions ne sont pas respectées ");
            event.target.prenom.classList.add('valide');
        }
        if (nom.length < 2) {
            event.target.nom.classList.remove('valide')
            event.target.nom.classList.add('erreur')
            alert("erreurles conditions ne sont pas respectées");
        } else {
            event.target.nom.classList.remove('erreur')
            alert("erreurles conditions ne sont pas respectées ");
            event.target.nom.classList.add('valide');
        }
    }

    if ( message.length > 6) {
        event.target.message.classList.remove('erreur')
        alert("erreurles conditions ne sont pas respectées ");
        event.target.message.classList.add('valide');
    } else {
        event.target.message.classList.remove('valide');
        event.target.message.classList.add('erreur')
        alert("erreurles conditions ne sont pas respectées ");
    }


    if (regex.test(email) === false) {/* je test l'email en la comparant à ma variable regex */
        event.target.email.classList.add('erreur')
        alert("erreurles conditions ne sont pas respectées ");
        event.target.email.classList.remove('valide');
    }
} // fin fonction