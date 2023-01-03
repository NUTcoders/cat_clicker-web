/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mine extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mineoff", "./Mine/costumes/mineoff.png", { x: 236, y: 230 }),
      new Costume("mineon", "./Mine/costumes/mineon.png", { x: 236, y: 230 })
    ];

    this.sounds = [new Sound("meow", "./Mine/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.minecount = 7;
  }

  *whenGreenFlagClicked() {
    this.costume = "mineoff";
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.mine = 0;
    this.stage.vars.minecost = 12000;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.minecost) {
        this.costume = "mineon";
      }
      if (this.stage.vars.cookies < this.stage.vars.minecost) {
        this.costume = "mineoff";
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("5ON");
        this.stage.watchers.minecost.visible = true;
      } else {
        this.broadcast("5OFF");
        this.stage.watchers.minecost.visible = false;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > this.stage.vars.minecost) {
      this.stage.vars.cookies += -1 * this.stage.vars.minecost;
      this.stage.vars.mine += 1;
      this.stage.vars.cookiespersecond += 47;
      this.stage.vars.minecost = Math.ceil(this.stage.vars.minecost * 1.15);
    } else {
      0;
    }
  }
}
