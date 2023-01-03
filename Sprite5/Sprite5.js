/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 12.806963502929676,
        y: 78.02093234143034
      })
    ];

    this.sounds = [new Sound("meow", "./Sprite5/sounds/meow.wav")];

    this.triggers = [];
  }
}
