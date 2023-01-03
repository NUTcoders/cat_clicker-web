/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Portal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("portalon", "./Portal/costumes/portalon.png", {
        x: 236,
        y: 230
      }),
      new Costume("portaloff", "./Portal/costumes/portaloff.png", {
        x: 236,
        y: 230
      })
    ];

    this.sounds = [new Sound("meow", "./Portal/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.portalcount = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.cookiePortals = 0;
    this.stage.vars.portalcost = 330000000;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.portalcost) {
        this.costume = "portalon";
      }
      if (this.stage.vars.cookies < this.stage.vars.portalcost) {
        this.costume = "portaloff";
      }
      yield* this.display();
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("8ON");
      } else {
        this.broadcast("8OFF");
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > this.stage.vars.portalcost) {
      this.stage.vars.cookies += -1 * this.stage.vars.portalcost;
      this.stage.vars.cookiePortals += 1;
      this.stage.vars.portalcost = Math.ceil(this.stage.vars.portalcost * 1.15);
    } else {
      0;
    }
  }

  *display() {
    this.stage.vars._ = 0;
    this.stage.vars.portaltemp = this.stage.vars.portalcost / 1000000;
    this.stage.vars.sind = 1;
    this.stage.vars.portaldisplay = "";
    for (let i = 0; i < this.stage.vars.portaltemp.length; i++) {
      if (String(this.stage.vars.portaltemp)[this.stage.vars.sind - 1] == ".") {
        this.stage.vars._ = 1;
      } else {
        0;
      }
      yield;
    }
    if (this.stage.vars._ == 1) {
      this.stage.vars.portaltemp = this.stage.vars.portalcost / 1000000;
      this.stage.vars.sind = 1;
      this.stage.vars.portaldisplay = "";
      while (
        !(String(this.stage.vars.portaltemp)[this.stage.vars.sind - 1] == ".")
      ) {
        this.stage.vars.portaldisplay =
          "" +
          this.stage.vars.portaldisplay +
          String(this.stage.vars.portaltemp)[this.stage.vars.sind - 1];
        this.stage.vars.sind += 1;
        yield;
      }
      this.stage.vars.portaldisplay = "" + this.stage.vars.portaldisplay + ".";
      this.stage.vars.sind += 1;
      this.stage.vars.portaldisplay =
        "" +
        this.stage.vars.portaldisplay +
        ("" +
          String(this.stage.vars.portaltemp)[this.stage.vars.sind - 1] +
          "M");
    } else {
      this.stage.vars.portaldisplay = this.stage.vars.portalcost / 1000000;
      this.stage.vars.portaldisplay = "" + this.stage.vars.portaldisplay + "M";
    }
  }
}
