/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cat2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "cat-face-transparent-background-1",
        "./Cat2/costumes/cat-face-transparent-background-1.png",
        { x: 326.5, y: 220 }
      )
    ];

    this.sounds = [new Sound("meow", "./Cat2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *startAsClone() {
    this.effects.ghost = 40;
    this.visible = true;
    this.goto(this.random(93, -220), 147);
    while (!this.touching(this.sprites["Sprite18"].andClones())) {
      this.y += -10;
      yield;
    }
    this.visible = false;
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
