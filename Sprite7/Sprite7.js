/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite7/costumes/costume2.svg", {
        x: -138,
        y: 157
      }),
      new Costume("costume3", "./Sprite7/costumes/costume3.svg", {
        x: -138,
        y: 157
      }),
      new Costume("costume4", "./Sprite7/costumes/costume4.svg", {
        x: -138,
        y: 157
      }),
      new Costume("costume5", "./Sprite7/costumes/costume5.svg", {
        x: -138,
        y: 157
      }),
      new Costume("costume6", "./Sprite7/costumes/costume6.svg", {
        x: -138,
        y: 157
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CloudStart" },
        this.whenIReceiveCloudstart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CloudStart" },
        this.whenIReceiveCloudstart2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.autoSave = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "costume2";
    this.vars.autoSave = 0;
  }

  *whenGreenFlagClicked2() {
    this.x = -377;
    this.visible = false;
  }

  *whenIReceiveCloudstart() {
    if (this.vars.autoSave == 1) {
      this.broadcast("loadOnly");
    }
    while (true) {
      if (this.vars.autoSave == 1) {
        yield* this.wait(20);
        this.broadcast("s/l");
      }
      yield;
    }
  }

  *whenIReceiveCloudstart2() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (this.vars.autoSave == 0) {
      for (let i = 0; i < 4; i++) {
        this.costumeNumber += 1;
        yield;
      }
      this.vars.autoSave = 1;
      this.broadcast("loadOnly");
    } else {
      for (let i = 0; i < 4; i++) {
        this.costume = this.costumeNumber - 1;
        yield;
      }
      this.vars.autoSave = 0;
    }
  }
}
