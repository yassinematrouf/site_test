function calcul_moyenne(){
    var n1= prompt("Donner la premiere note: ");
    var n2= prompt("Donner la deuxieme note: ");
    var n3= prompt("Donner la troisieme note: ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write("Voici la somme: "+ somme+ "<br>");

    var moyenne= somme/3;

    document.write("Voici la moyenne: "+ moyenne+"<br>");


    if (moyenne<10)
        document.write("vous ete redoublant");
    
    else
        document.write("vous ete admis");
    

}

function test_age(){
    let age = prompt("Quel est votre age");
    if(age < 18){
        document.write("Vous etes mineur");
        document.bgColor="red";
    }
    else{
        document.write("vous etes majeur");
        document.bgcolor="green";
    }

}

function simple_affichage(){
    let name = prompt('Donner votre Prénom')
    let familyName = prompt('Donner votre nom')

    document.write('<div style="margin:auto; width:300px; border:2px solid blue; ">')
    document.write('Bonjour ' + name +" " + familyName)
    document.write('</div>')

}

function test_couleur(){
    let c = prompt("Donner une couleur")
    if(c == "rouge" || c == "ROUGE" || c == "8"){
        document.body.style.background = "red"
    }
    else if (c == "bleu" || c == "Bleu" || c == "8"){
        document.body.style.background = "blue"
    }
    else{
        document.write("Couleur non comprise")
    }
}