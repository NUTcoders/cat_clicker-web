/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CatsPerSecond extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CatsPerSecond/costumes/costume1.svg", {
        x: 303,
        y: 174
      })
    ];

    this.sounds = [new Sound("pop", "./CatsPerSecond/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(23, -121);
    this.stage.vars.cookiespersecond = 0;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.stage.vars.cookiespersecond =
        this.stage.vars.autoclicks * 0.2 +
        (this.stage.vars.grandmas * 1 +
          (this.stage.vars.farms * 8 +
            (this.stage.vars.factories * 260 +
              (this.stage.vars.mine * 47 +
                (this.stage.vars.shipments * 1400 +
                  (this.stage.vars.labs * 7800 +
                    (this.stage.vars.cookiePortals * 44000 +
                      (this.stage.vars.timemach * 260000 +
                        this.stage.vars.aC * 1600000))))))));
      this.stage.vars.cookies += this.stage.vars.cookiespersecond;
      yield* this.wait(1);
      yield;
    }
  }
}
