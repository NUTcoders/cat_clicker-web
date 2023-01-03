/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Glow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow", "./Glow/costumes/Glow.png", { x: 124, y: 124 })
    ];

    this.sounds = [new Sound("meow", "./Glow/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(6, 16);
    while (true) {
      this.direction = 90;
      while (!(this.stage.vars.fancyGraphics == 1)) {
        yield;
      }
      this.effects.ghost = 50;
      while (!(this.stage.vars.fancyGraphics == 0)) {
        this.direction += 1;
        yield* this.wait(0.05);
        this.moveBehind(1000000);
        this.size = 200;
        yield;
      }
      this.effects.clear();
      yield;
    }
  }
}
