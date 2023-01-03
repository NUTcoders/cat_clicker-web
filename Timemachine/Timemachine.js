/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Timemachine extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("TMon", "./Timemachine/costumes/TMon.png", {
        x: 236,
        y: 236
      }),
      new Costume("TMoff", "./Timemachine/costumes/TMoff.png", {
        x: 232,
        y: 232
      })
    ];

    this.sounds = [new Sound("meow", "./Timemachine/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "START" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.timemachine = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "TMoff";
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.cookies > 149999) {
        this.costume = "TMon";
      }
      if (this.stage.vars.cookies < 149999) {
        this.costume = "TMoff";
      }
      yield* this.display();
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.timemach = 0;
    this.stage.vars.timemachcost = 5100000000;
  }

  *whenIReceiveStart() {}

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("9ON");
      } else {
        this.broadcast("9OFF");
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > 149999) {
      this.stage.vars.cookies += -150000;
      this.stage.vars.timemach += 1;
      this.stage.vars.cookiespersecond += this.vars.timemachine + 17;
    } else {
      0;
    }
  }

  *display() {
    this.stage.vars._ = 0;
    this.stage.vars.timetemp = this.stage.vars.timemachcost / 1000000000;
    this.stage.vars.sind = 1;
    this.stage.vars.timedisplay = "";
    for (let i = 0; i < this.stage.vars.timetemp.length; i++) {
      if (String(this.stage.vars.timetemp)[this.stage.vars.sind - 1] == ".") {
        this.stage.vars._ = 1;
      } else {
        0;
      }
      yield;
    }
    if (this.stage.vars._ == 1) {
      this.stage.vars.timetemp = this.stage.vars.timemachcost / 1000000000;
      this.stage.vars.sind = 1;
      this.stage.vars.timedisplay = "";
      while (
        !(String(this.stage.vars.timetemp)[this.stage.vars.sind - 1] == ".")
      ) {
        this.stage.vars.timedisplay =
          "" +
          this.stage.vars.timedisplay +
          String(this.stage.vars.timetemp)[this.stage.vars.sind - 1];
        this.stage.vars.sind += 1;
        yield;
      }
      this.stage.vars.timedisplay = "" + this.stage.vars.timedisplay + ".";
      this.stage.vars.sind += 1;
      this.stage.vars.timedisplay =
        "" +
        this.stage.vars.timedisplay +
        ("" + String(this.stage.vars.timetemp)[this.stage.vars.sind - 1] + "B");
    } else {
      this.stage.vars.timedisplay = this.stage.vars.timemachcost / 1000000000;
      this.stage.vars.timedisplay = "" + this.stage.vars.timedisplay + "B";
    }
  }
}
