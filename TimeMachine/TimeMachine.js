/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TimeMachine extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("time machine", "./TimeMachine/costumes/time machine.svg", {
        x: 237,
        y: 119.94156679999999
      })
    ];

    this.sounds = [new Sound("meow", "./TimeMachine/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "9ON" }, this.whenIReceive9on),
      new Trigger(Trigger.BROADCAST, { name: "9OFF" }, this.whenIReceive9off)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(149, -133);
  }

  *whenIReceive9on() {
    this.visible = true;
    this.stage.watchers.timemach.visible = true;
    this.stage.watchers.timedisplay.visible = true;
  }

  *whenIReceive9off() {
    this.visible = false;
    this.stage.watchers.timemach.visible = false;
    this.stage.watchers.timedisplay.visible = false;
  }
}
