Phaser.Plugin.Fade = function (game, parent) {
  Phaser.Plugin.call(this, game, parent);
};

Phaser.Plugin.Fade.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Fade.prototype.constructor = Phaser.Plugin.SamplePlugin;

// HexColor is a number like 0xff0000
// Delay is the time to wait before calling the callback
Phaser.Plugin.Fade.prototype.fadeOut = function(hexColor, time, delay, callback) {
  this.fade(hexColor, time, delay, 0, 1, callback);
};

// HexColor is a number like 0xff0000
// Delay is the time to wait before calling the callback
Phaser.Plugin.Fade.prototype.fadeIn = function(hexColor, time, delay, callback) {
  this.fade(hexColor, time, delay, 1, 0, callback);
};

Phaser.Plugin.Fade.prototype.fade = function(hexColor, time, delay, fromAlpha, toAlpha, callback) {
  delay = delay || 0;
  var bg = this.game.add.graphics(0, 0);
  bg.beginFill(hexColor, 1);
  bg.drawRect(this.game.camera.x, this.game.camera.y, this.game.width * 1.5, this.game.height * 1.5);
  bg.alpha = fromAlpha;
  bg.endFill();

  var s = this.game.add.tween(bg);
  s.to({alpha: toAlpha}, time, null);
  if (callback) {
    s.onComplete.add(callback, this);
  }
  s.start();
};
