/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ac2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ac", "./Ac2/costumes/ac.svg", {
        x: 237,
        y: 117.37626080000001
      })
    ];

    this.sounds = [new Sound("meow", "./Ac2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "10OFF" }, this.whenIReceive10off),
      new Trigger(Trigger.BROADCAST, { name: "10ON" }, this.whenIReceive10on)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(150, -156);
  }

  *whenIReceive10off() {
    this.visible = false;
    this.stage.watchers.aC.visible = false;
    this.stage.watchers.acdisplay.visible = false;
  }

  *whenIReceive10on() {
    this.visible = true;
    this.stage.watchers.aC.visible = true;
    this.stage.watchers.acdisplay.visible = true;
  }
}
