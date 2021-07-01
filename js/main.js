

function Premier(pkm1, pkm2) {
    // tirage au sort 
    let val = Math.random();
    if (val < 0.5) {
        console.log("Le tirage au sort a décidé que " + pkm1.getName() + " attaquait en premier.");
        return pkm1;
    } else { 
        console.log("Le tirage au sort a décidé que " + pkm2.getName() + " attaquait en premier.");
        return pkm2;
    }
} 

function affichagePoints(pkm) {
    console.log(pkm.getName() + " a " + pkm.getLifePoints() + " points de vie");
}

// Instanciation des objets Pikachu et Evoli
let Pikachu = new Pokemon("Pikachu", 025, 40, 6,"Electric", 82, "statik", 10, "paratonnerre", 25);
let Evoli = new Pokemon("Evoli", 133, 30, 6.5, "Normal", 70, "adaptabilite", 9, "anticipation", 15);


let premier = Premier(Pikachu, Evoli);
let second = Pikachu;
if (premier === Pikachu ) {
    second = Evoli;
}

console.log("____________________________________________");

    affichagePoints(premier);
    affichagePoints(second);

console.log("____________________________________________");


while (premier.getLifePoints() > 0 && second.getLifePoints() > 0 ) {
    let pVal = premier.attaque(second);
    let firstString = premier.getName() + " a attaqué. Il a fait " + pVal + " de dégâts. ";
    //console.log("####" + premier.getLifePoints());
    if (second.getLifePoints() < 0) {
        console.log( firstString); 
    } else {
        let sVal = second.attaque(premier);
        //console.log("####" + second.getLifePoints());
        console.log( firstString + second.getName() + " a attaqué. Il a fait " + sVal + " de dégâts. ");
    }
    
}

let gagnant;
if (premier.getLifePoints() > 0) {
    gagnant = premier;
} else {
    gagnant = second;
}
console.log(gagnant.getName() + " a gagné le combat. Il lui restait " + gagnant.getLifePoints() + " points de vie.");


//console.log(premier.getName() + " a gagné le combat. Il lui restait " + premier.getLifePoints() + " points de vie.");
//console.log(second.getName() + " a gagné le combat. Il lui restait " + second.getLifePoints() + " points de vie.");