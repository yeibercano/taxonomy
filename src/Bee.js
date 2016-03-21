var Bee = function() {
  Grub.call(this);
  Bee.prototype.constructor = Bee;
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  console.log(this)
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.job = function() {
  return 'keep on growing';
};
