/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ac extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ACon", "./Ac/costumes/ACon.png", { x: 236, y: 230 }),
      new Costume("ACoff", "./Ac/costumes/ACoff.png", { x: 236, y: 230 })
    ];

    this.sounds = [new Sound("meow", "./Ac/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.account = 0;
    this.vars.perSecond2 = 22;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("10ON");
      } else {
        this.broadcast("10OFF");
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > this.stage.vars.aCondensercost) {
      this.stage.vars.cookies += -1 * this.stage.vars.aCondensercost;
      this.stage.vars.aC += 1;
      this.stage.vars.aCondensercost = Math.ceil(
        this.stage.vars.aCondensercost * 1.15
      );
    } else {
      0;
    }
  }

  *display() {
    this.stage.vars._ = 0;
    this.stage.vars.actemp = this.stage.vars.aCondensercost / 1000000000;
    this.stage.vars.sind = 1;
    this.stage.vars.acdisplay = "";
    for (let i = 0; i < this.stage.vars.actemp.length; i++) {
      if (String(this.stage.vars.actemp)[this.stage.vars.sind - 1] == ".") {
        this.stage.vars._ = 1;
      } else {
        0;
      }
      yield;
    }
    if (this.stage.vars._ == 1) {
      this.stage.vars.actemp = this.stage.vars.aCondensercost / 1000000000;
      this.stage.vars.sind = 1;
      this.stage.vars.acdisplay = "";
      while (
        !(String(this.stage.vars.actemp)[this.stage.vars.sind - 1] == ".")
      ) {
        this.stage.vars.acdisplay =
          "" +
          this.stage.vars.acdisplay +
          String(this.stage.vars.actemp)[this.stage.vars.sind - 1];
        this.stage.vars.sind += 1;
        yield;
      }
      this.stage.vars.acdisplay = "" + this.stage.vars.acdisplay + ".";
      this.stage.vars.sind += 1;
      this.stage.vars.acdisplay =
        "" +
        this.stage.vars.acdisplay +
        ("" + String(this.stage.vars.actemp)[this.stage.vars.sind - 1] + "B");
    } else {
      this.stage.vars.acdisplay = this.stage.vars.aCondensercost / 1000000000;
      this.stage.vars.acdisplay = "" + this.stage.vars.acdisplay + "B";
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.aCondensercost) {
        this.costume = "ACon";
      }
      if (this.stage.vars.cookies < this.stage.vars.aCondensercost) {
        this.costume = "ACoff";
      }
      yield* this.display();
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.aC = 0;
    this.stage.vars.aCondensercost = 75000000000;
  }
}
