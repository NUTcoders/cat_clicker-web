/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Factory3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("factoryon1", "./Factory3/costumes/factoryon1.png", {
        x: 236,
        y: 232
      }),
      new Costume("factoryoff1", "./Factory3/costumes/factoryoff1.png", {
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

    this.vars.factorycount = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "factoryoff1";
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.factorycost) {
        this.costume = "factoryon1";
      }
      if (this.stage.vars.cookies < this.stage.vars.factorycost) {
        this.costume = "factoryoff1";
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("4ON");
        this.stage.watchers.factorycost.visible = true;
      } else {
        this.broadcast("4OFF");
        this.stage.watchers.factorycost.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.vars.factorycount = 0;
    this.stage.vars.factorycost = 130000;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > this.stage.vars.factorycost) {
      this.stage.vars.cookies += -1 * this.stage.vars.factorycost;
      this.stage.vars.factories += 1;
      this.stage.vars.cookiespersecond += 260;
      this.stage.vars.factorycost = Math.ceil(
        this.stage.vars.factorycost * 1.15
      );
    } else {
      0;
    }
  }
}
