/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Al extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("AL", "./Al/costumes/AL.svg", { x: 237, y: 115 })
    ];

    this.sounds = [new Sound("meow", "./Al/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "7ON" }, this.whenIReceive7on),
      new Trigger(Trigger.BROADCAST, { name: "7OFF" }, this.whenIReceive7off)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(148, -62);
  }

  *whenIReceive7on() {
    this.visible = true;
    this.stage.watchers.labs.visible = true;
    this.stage.watchers.labdisplay.visible = true;
  }

  *whenIReceive7off() {
    this.visible = false;
    this.stage.watchers.labs.visible = false;
    this.stage.watchers.labdisplay.visible = false;
  }
}
