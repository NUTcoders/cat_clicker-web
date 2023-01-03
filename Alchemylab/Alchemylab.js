/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Alchemylab extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ALon", "./Alchemylab/costumes/ALon.png", { x: 236, y: 240 }),
      new Costume("ALoff", "./Alchemylab/costumes/ALoff.png", {
        x: 236,
        y: 228
      })
    ];

    this.sounds = [new Sound("meow", "./Alchemylab/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.labcount = 5;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.labcost = 20000000;
    this.stage.vars.labs = 0;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.labcost) {
        this.costume = "ALon";
      }
      if (this.stage.vars.cookies < this.stage.vars.labcost) {
        this.costume = "ALoff";
      }
      yield* this.display();
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("7ON");
      } else {
        this.broadcast("7OFF");
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > this.stage.vars.labcost) {
      this.stage.vars.cookies += -1 * this.stage.vars.labcost;
      this.stage.vars.labs += 1;
      this.stage.vars.labcost = Math.ceil(this.stage.vars.labcost * 1.15);
    } else {
      0;
    }
  }

  *display() {
    this.stage.vars._ = 0;
    this.stage.vars.labtemp = this.stage.vars.labcost / 1000000;
    this.stage.vars.sind = 1;
    this.stage.vars.labdisplay = "";
    for (let i = 0; i < this.stage.vars.labtemp.length; i++) {
      if (String(this.stage.vars.labtemp)[this.stage.vars.sind - 1] == ".") {
        this.stage.vars._ = 1;
      } else {
        0;
      }
      yield;
    }
    if (this.stage.vars._ == 1) {
      this.stage.vars.labtemp = this.stage.vars.labcost / 1000000;
      this.stage.vars.sind = 1;
      this.stage.vars.labdisplay = "";
      while (
        !(String(this.stage.vars.labtemp)[this.stage.vars.sind - 1] == ".")
      ) {
        this.stage.vars.labdisplay =
          "" +
          this.stage.vars.labdisplay +
          String(this.stage.vars.labtemp)[this.stage.vars.sind - 1];
        this.stage.vars.sind += 1;
        yield;
      }
      this.stage.vars.labdisplay = "" + this.stage.vars.labdisplay + ".";
      this.stage.vars.sind += 1;
      this.stage.vars.labdisplay =
        "" +
        this.stage.vars.labdisplay +
        ("" + String(this.stage.vars.labtemp)[this.stage.vars.sind - 1] + "M");
    } else {
      this.stage.vars.labdisplay = this.stage.vars.labcost / 1000000;
      this.stage.vars.labdisplay = "" + this.stage.vars.labdisplay + "M";
    }
  }
}
