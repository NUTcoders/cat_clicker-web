/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "cat-face-transparent-background-1",
        "./Cat/costumes/cat-face-transparent-background-1.png",
        { x: 326.5, y: 220 }
      )
    ];

    this.sounds = [
      new Sound("meow", "./Cat/sounds/meow.wav"),
      new Sound("Eggs", "./Cat/sounds/Eggs.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(6, 14);
    this.stage.vars.cookies = 0;
    this.stage.vars.autoclicks = 0;
    this.stage.vars.grandmas = 0;
    this.stage.vars.farms = 0;
    this.stage.vars.cookiePortals = 0;
    this.stage.vars.factories = 0;
    this.stage.vars.generators = 0;
    this.stage.vars.grandmaApocalypses = 0;
    this.stage.vars.mine = 0;
    this.stage.vars.timemach = 0;
    this.stage.vars.aC = 0;
    this.stage.vars.shipments = 0;
    this.stage.vars.labs = 0;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      while (!(this.stage.vars.fancyGraphics == 0)) {
        if (!this.touching("mouse") || this.mouse.down) {
          this.size = 50;
        } else {
          this.size = 57;
        }
        yield;
      }
      this.size = 43;
      while (!(this.stage.vars.fancyGraphics == 1)) {
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    if (null) {
      yield* this.askAndWait("Cheats? (Yes/No)");
      if (this.answer == "no") {
        yield* this.sayAndWait("Ok!", 2);
        this.stage.vars.cheatmode = 0;
      }
      if (this.answer == "yes") {
        yield* this.askAndWait(
          "Cookies or Items?(Cookies 1k/AutoClicks,GA,and farm)"
        );
        this.stage.vars.cheatmode = 1;
      }
      if (this.answer == "Cookies") {
        this.stage.vars.cookies = 1000;
        this.stage.vars.cheatmode = 1;
      } else {
        if (this.answer == "Items") {
          this.stage.vars.autoclicks = 10;
          this.stage.vars.grandmas = 3;
          this.stage.vars.farms = 1;
          this.stage.vars.cheatmode = 1;
        }
      }
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.cookies += 1;
    this.stage.vars.Clickedworldwide += 1;
    if (this.random(1, 2) == 1) {
      yield* this.startSound("camera-shutter-click-10 (1)");
    } else {
      yield* this.startSound("camera-shutter-click-10 (1)2");
    }
    this.broadcast("message1");
    this.sprites["Cat2"].createClone();
  }

  *whenGreenFlagClicked4() {
    while (true) {
      yield* this.playSoundUntilDone("Eggs");
      yield;
    }
  }
}
