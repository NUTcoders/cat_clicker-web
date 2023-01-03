/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mine2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mine", "./Mine2/costumes/mine.svg", {
        x: 237,
        y: 119.56960360000002
      })
    ];

    this.sounds = [new Sound("meow", "./Mine2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "5ON" }, this.whenIReceive5on),
      new Trigger(Trigger.BROADCAST, { name: "5OFF" }, this.whenIReceive5off)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(149, 48);
    this.visible = false;
  }

  *whenIReceive5on() {
    this.visible = true;
    this.stage.watchers.mine.visible = true;
  }

  *whenIReceive5off() {
    this.visible = false;
    this.stage.watchers.mine.visible = false;
  }
}
