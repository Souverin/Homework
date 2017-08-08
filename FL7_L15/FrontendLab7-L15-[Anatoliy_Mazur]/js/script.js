//validation for fighting etc
var assign = function(){
	var obj = {};
	for(var i = 0; i < arguments.length; i++){
		for(var prop in arguments[i]){
			obj[prop] = arguments[i][prop];
		}
	}
	return obj;
};

var Creature = function(parameters){
	this._name = parameters.name;
	this._attack = parameters.attack;
	this._totalHitpoints = parameters.hitpoints;
	this._currentHitpoints = parameters.hitpoints;

};

Creature.prototype.getHitpoints = function() {
	return this._currentHitpoints;
};
Creature.prototype.setHitpoints = function(hitpoints) {
	if(hitpoints < 0){
		this._currentHitpoints = 0;
	}
	else{
		if(hitpoints > this.getTotalHitpoints()){
			this._currentHitpoints = getTotalHitpoints();
		}
		else{
			this._currentHitpoints = hitpoints;
		}
	}
};
Creature.prototype.getTotalHitpoints = function() {
	return this._totalHitpoints;
};
Creature.prototype.setTotalHitpoints = function(hitpoints) {
	this._totalHitpoints = hitpoints;
};
Creature.prototype.getAttack = function() {
	return this._attack;
};
Creature.prototype.setAttack = function(attack) {
	this._attack = attack;
};
Creature.prototype.fight = function(attacked){
	if(attacked.block && attacked.hasOwnProperty(attacked.block)){
		attacked.unblock();
	}
	else{
		if(attacked === this){
			console.log("Can't fight yourself");
			return;
		}
		attacked.setHitpoints(attacked.getHitpoints() - this.getAttack());
	}
};
Creature.prototype.isAlive = function(){
	return this.getHitpoints() > 0;
};

var Champion = function(parameters){
	Creature.call(this, parameters);
	this.block = false;
};
Champion.prototype = Object.create(Creature.prototype);
Champion.prototype.constructor = Champion;
Champion.prototype.rest = function(){
	this.setHitpoints(this.getTotalHitpoints() + 5);
};
Champion.prototype.defence = function(){
	this.block = true;
};
Champion.prototype.unblock = function(){
	this.block = false;
};
Champion.prototype.isDefending = function(){
	return this.block;
};
Champion.prototype.fight = function(attacked){
	if(!attacked.isAlive()){
			console.log("You're fighting a dead creature");
			return;
	}
	else{
		Creature.prototype.fight.call( this, attacked);
		if(!attacked.isAlive()){
			this._attack++;
		}
	}
};

var Monster = function(parameters){
	Creature.call(this, parameters);
	this.numberOfDoubleAttacks = 0;
}
Monster.prototype = Object.create(Creature.prototype);
Monster.prototype.constructor = Monster;
Monster.prototype.enrage = function(){
	this.numberOfDoubleAttacks = 2;
};
Monster.prototype.fight = function(attacked){
	if(!attacked.isAlive()){
			console.log("You're fighting a dead creature");
			return;
	}
	else{
		if(this.numberOfDoubleAttacks > 0){
		this.numberOfDoubleAttacks--;
		this.setAttack(this._attack*2);
		Creature.prototype.fight.call( this, attacked);
		this.setAttack(this._attack/2);
		}
		else{
			Creature.prototype.fight.call( this, attacked);
		}
		if(!attacked.isAlive()){
			this.setHitpoints(this.getHitpoints() + Math.floor(attacked.getTotalHitpoints() * 0.25));
	        this.setTotalHitpoints(this.getTotalHitpoints() + Math.floor(attacked.getTotalHitpoints() * 0.1));
		}
	}
}
module.exports = {
  Champion: Champion,
  Monster: Monster,
  extend: extend
}
