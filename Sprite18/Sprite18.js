/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite18/costumes/costume1.png", {
        x: 479,
        y: -48
      })
    ];

    this.sounds = [new Sound("meow", "./Sprite18/sounds/meow.wav")];

    this.triggers = [];
  }
}
