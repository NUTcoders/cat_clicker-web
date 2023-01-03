/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Farm3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("farm", "./Farm3/costumes/farm.svg", {
        x: 237,
        y: 124.7850584
      })
    ];

    this.sounds = [new Sound("meow", "./Farm3/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "3ON" }, this.whenIReceive3on),
      new Trigger(Trigger.BROADCAST, { name: "3OFF" }, this.whenIReceive3off)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive3on() {
    this.visible = true;
    this.stage.watchers.farms.visible = true;
  }

  *whenIReceive3off() {
    this.visible = false;
    this.stage.watchers.farms.visible = false;
  }
}
