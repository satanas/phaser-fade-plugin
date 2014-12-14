Fade out plugin for Phaser
=============================

This plugin let you create easily a fade out effect in any state to simulate a transition.
Has been developed and tested on [phaser.js](phaser.io) 2.0.

In the future it will support the fade in effect too.

Usage
-----

The syntax of the *fadeOut* method is pretty simple:

```js
fadeOut(hexColor, duration, delay, callback);
```

Where:
* _hexColor_ is a hex number representing the color of the fade (for example: 0xfff for white)
* _duration_ is how much time the fade will take
* _delay_ is the time you want to wait after the fade is done to invoke the callback
* _callback_ is the method invoked after the fade is completed

You don't need to add the plugin anywhere, just call it whenever you need it. For example:

```js
this.game.plugin.fadeOut(0x000, 750, 0, function() {
  self.game.state.start('another_state');
});
```

