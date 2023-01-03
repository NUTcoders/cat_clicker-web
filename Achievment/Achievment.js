/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Achievment extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Achievment/costumes/costume1.svg", {
        x: 238,
        y: 181
      }),
      new Costume("costume2", "./Achievment/costumes/costume2.svg", {
        x: 238,
        y: 181
      }),
      new Costume("costume3", "./Achievment/costumes/costume3.svg", {
        x: 238,
        y: 181
      }),
      new Costume("costume4", "./Achievment/costumes/costume4.svg", {
        x: 236.35625721574743,
        y: 181.91189532
      })
    ];

    this.sounds = [new Sound("pop", "./Achievment/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 51);
  }
}
