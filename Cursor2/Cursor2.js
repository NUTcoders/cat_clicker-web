/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cursor2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("new cursor", "./Cursor2/costumes/new cursor.svg", {
        x: 239,
        y: 115
      })
    ];

    this.sounds = [new Sound("meow", "./Cursor2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "1OFF" }, this.whenIReceive1off),
      new Trigger(Trigger.BROADCAST, { name: "1ON" }, this.whenIReceive1on)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(148, 156);
    this.visible = false;
  }

  *whenIReceive1off() {
    this.visible = false;
    this.stage.watchers.autoclicks.visible = false;
  }

  *whenIReceive1on() {
    this.visible = true;
    this.stage.watchers.autoclicks.visible = true;
  }
}
