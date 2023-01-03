/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "test" }, this.whenIReceiveTest),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.checksay = "Checking............";
    this.vars.CloudTest = 0;
    this.vars.newscratcherval = 0;
    this.vars.scratcherval = 0;
  }

  *whenIReceiveTest() {
    this.stage.vars.scratcher = 0;
    this.vars.checksay = "Checking...";
    yield* this.wait(0.3);
    if (/* no username */ "" == "") {
      this.stage.vars.scratcher = 0;
    } else {
      while (
        !(
          !(this.vars.CloudTest == this.vars.newscratcherval) ||
          this.vars.checksay == "Checking............"
        )
      ) {
        this.vars.checksay = "" + this.vars.checksay + ".";
        yield* this.wait(0.3);
        yield;
      }
      if (this.vars.CloudTest == this.vars.scratcherval) {
        this.stage.vars.scratcher = 1;
        this.broadcast("CloudStart");
      } else {
        if (this.vars.CloudTest == this.vars.newscratcherval) {
          this.stage.vars.scratcher = 0;
        } else {
          this.stage.vars.scratcher = 0;
        }
      }
    }
  }

  *whenGreenFlagClicked() {
    this.broadcast("test");
  }
}
