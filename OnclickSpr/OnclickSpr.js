/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class OnclickSpr extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./OnclickSpr/costumes/costume1.png", {
        x: -35,
        y: 21
      })
    ];

    this.sounds = [new Sound("meow", "./OnclickSpr/sounds/meow.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *whenIReceiveMessage1() {
    this.goto(this.mouse.x, this.mouse.y);
    this.visible = true;
    this.moveAhead();
    yield* this.wait(0.2);
    this.visible = false;
  }
}
