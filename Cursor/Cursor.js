/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cursor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cursoron", "./Cursor/costumes/cursoron.png", {
        x: 232,
        y: 238
      }),
      new Costume("cursoroff", "./Cursor/costumes/cursoroff.png", {
        x: 232,
        y: 238
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

    this.vars.cursorcount = 1;
    this.vars.perSecond = 1;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.autoclicks = 0;
    this.stage.vars.cursorcost = 10;
  }

  *whenGreenFlagClicked2() {
    this.costume = "cursoroff";
    this.visible = true;
    this.goto(217, 161);
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("1ON");
        this.stage.watchers.cursorcost.visible = true;
      } else {
        this.broadcast("1OFF");
        this.stage.watchers.cursorcost.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.cursorcost - 1) {
        this.costume = "cursoron";
      }
      if (this.stage.vars.cookies < this.stage.vars.cursorcost - 1) {
        this.costume = "cursoroff";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > this.stage.vars.cursorcost - 1) {
      this.stage.vars.cookies += -1 * this.stage.vars.cursorcost;
      this.stage.vars.cookiespersecond += 0.2;
      this.stage.vars.autoclicks += 1;
      this.stage.vars.cursorcost = Math.ceil(1.15 * this.stage.vars.cursorcost);
    } else {
      0;
    }
  }
}
