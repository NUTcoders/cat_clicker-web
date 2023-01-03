/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Grandma2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("new grandma", "./Grandma2/costumes/new grandma.svg", {
        x: 237,
        y: 115
      })
    ];

    this.sounds = [new Sound("meow", "./Grandma2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "2ON" }, this.whenIReceive2on),
      new Trigger(Trigger.BROADCAST, { name: "2OFF" }, this.whenIReceive2off)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive2on() {
    this.visible = true;
    this.stage.watchers.grandmas.visible = true;
  }

  *whenIReceive2off() {
    this.visible = false;
    this.stage.watchers.grandmas.visible = false;
  }
}
