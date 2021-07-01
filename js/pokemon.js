
 
 class Pokemon {
    constructor(name, numId, size, weight, type, lifePoints, alName, alPoints, afName, afPoints) {
        this._name = name;
        this._numId = numId;
        this._size = size;
        this._weight = weight;
        this._type = type;
        this._lifePoints = lifePoints;
        this._attackLow = new Attack(alName, alPoints);
        this._attackFull = new Attack(afName, afPoints);
        this.LIFEPOINTS = lifePoints;
    }
    

    attaque(pkm) {
        let critical = Math.random();
        if (this._lifePoints > this.LIFEPOINTS/5 && critical < 0.1) {
            pkm.setLifePoints(pkm.getLifePoints() - (this._attackLow.destructionPoints * 2 ));
            return (this._attackLow.destructionPoints * 2);
        } else if (this._lifePoints > this.LIFEPOINTS/5 ) {
            pkm.setLifePoints(pkm.getLifePoints() - this._attackLow.destructionPoints);
            return this._attackLow.destructionPoints;
        } else  if  (critical < 0.1) {
            pkm.setLifePoints(pkm.getLifePoints() - (this._attackFull.destructionPoints * 2 ));
            return (this._attackFull.destructionPoints * 2); 
        } else {
            pkm.setLifePoints(pkm.getLifePoints() - this._attackFull.destructionPoints);
            return this._attackFull.destructionPoints; 
        }
    }

    getName() { return this._name; }
    setName(name) { this._name = name; }

    getNumId() { return this._numId; }
    setNumId(numId) { this._numId = numId}

    getSize() { return this._size; }
    setSize(size) { this._size = size; }

    getWeight() { return this._weight; }
    setWeight(weight) { this._weight = weight; }

    getType() { return this._type; }
    setType(type) { this._type = type; }

    getLifePoints() { return this._lifePoints; }
    setLifePoints(lifePoints) { this._lifePoints = lifePoints; }
    
}

