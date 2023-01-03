/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Farm2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("farmoff", "./Farm2/costumes/farmoff.png", {
        x: 240,
        y: 222
      }),
      new Costume("farm on", "./Farm2/costumes/farm on.png", { x: 236, y: 224 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.farmcount = 4;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.farms = 0;
    this.stage.vars.farmcost = 1100;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.farmcost) {
        this.costume = "farm on";
      }
      if (this.stage.vars.cookies < this.stage.vars.farmcost) {
        this.costume = "farmoff";
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.costume = "farmoff";
    this.visible = true;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("3ON");
        this.stage.watchers.farmcost.visible = true;
      } else {
        this.broadcast("3OFF");
        this.stage.watchers.farmcost.visible = false;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > this.stage.vars.farmcost) {
      this.stage.vars.cookies += -1 * this.stage.vars.farmcost;
      this.stage.vars.farms += 1;
      this.stage.vars.farmcost = Math.ceil(this.stage.vars.farmcost * 1.15);
    } else {
      0;
    }
  }
}
