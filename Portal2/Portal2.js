/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Portal2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("portal", "./Portal2/costumes/portal.svg", {
        x: 237,
        y: 120.11547279999999
      })
    ];

    this.sounds = [new Sound("meow", "./Portal2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "8ON" }, this.whenIReceive8on),
      new Trigger(Trigger.BROADCAST, { name: "8OFF" }, this.whenIReceive8off)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive8on() {
    this.visible = true;
    this.stage.watchers.cookiePortals.visible = true;
    this.stage.watchers.portaldisplay.visible = true;
  }

  *whenIReceive8off() {
    this.visible = false;
    this.stage.watchers.cookiePortals.visible = false;
    this.stage.watchers.portaldisplay.visible = false;
  }
}
