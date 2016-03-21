var HoneyMakerBee = function() {
  Bee.call(this);
  HoneyMakerBee.prototype.constructor = HoneyMakerBee;
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};


HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};