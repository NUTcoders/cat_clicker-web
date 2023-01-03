/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Thumbnail", "./Sprite1/costumes/Thumbnail.png", {
        x: 480,
        y: 360
      }),
      new Costume("Thumbnail2", "./Sprite1/costumes/Thumbnail2.svg", {
        x: 240,
        y: 180
      }),
      new Costume(
        "1fa25f4d74ad38be4059150552d76394",
        "./Sprite1/costumes/1fa25f4d74ad38be4059150552d76394.png",
        { x: 480, y: 341 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(1);
    if (
      new Date().getMonth() + 1 == 12 &&
      new Date().getDate() < 31 && new Date().getDate() > 24
    ) {
      this.stage.vars.cookies += 10000;
    } else {
      if (new Date().getMonth() + 1 == 1 && new Date().getDate() < 6) {
        this.stage.vars.cookies += 10000;
      }
    }
  }
}
