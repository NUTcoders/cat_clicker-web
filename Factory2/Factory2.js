/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Factory2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("factory", "./Factory2/costumes/factory.svg", {
        x: 237,
        y: 115
      })
    ];

    this.sounds = [new Sound("meow", "./Factory2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "4ON" }, this.whenIReceive4on),
      new Trigger(Trigger.BROADCAST, { name: "4OFF" }, this.whenIReceive4off)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(150, 11);
    this.visible = false;
  }

  *whenIReceive4on() {
    this.visible = true;
    this.stage.watchers.factories.visible = true;
  }

  *whenIReceive4off() {
    this.visible = false;
    this.stage.watchers.factories.visible = false;
  }
}
