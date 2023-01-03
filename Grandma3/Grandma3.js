/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Grandma3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("grandmaon", "./Grandma3/costumes/grandmaon.png", {
        x: 236,
        y: 234
      }),
      new Costume("grandmaoff", "./Grandma3/costumes/grandmaoff.png", {
        x: 236,
        y: 230
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.grandmacount = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.grandmacount = 0;
  }

  *whenGreenFlagClicked2() {
    this.goto(217, 125);
    this.costume = "grandmaoff";
    this.visible = true;
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.grandmacost = 100;
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.grandmacost - 1) {
        this.costume = "grandmaon";
      }
      if (this.stage.vars.cookies < this.stage.vars.grandmacost - 1) {
        this.costume = "grandmaoff";
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("2ON");
        this.stage.watchers.grandmacost.visible = true;
      } else {
        this.broadcast("2OFF");
        this.stage.watchers.grandmacost.visible = false;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("ChangetoLove");
    if (this.stage.vars.cookies > this.stage.vars.grandmacost - 1) {
      this.stage.vars.cookies += -1 * this.stage.vars.grandmacost;
      this.stage.vars.grandmas += 1;
      this.stage.vars.cookiespersecond += 1;
      this.stage.vars.grandmacost = Math.ceil(
        this.stage.vars.grandmacost * 1.15
      );
    } else {
      0;
    }
  }
}
