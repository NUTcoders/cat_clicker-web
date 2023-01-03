/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shipment2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shipment", "./Shipment2/costumes/shipment.svg", {
        x: 237,
        y: 116.00434519999999
      })
    ];

    this.sounds = [new Sound("meow", "./Shipment2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "6ON" }, this.whenIReceive6on),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "6OFF" }, this.whenIReceive6off)
    ];
  }

  *whenIReceive6on() {
    this.visible = true;
    this.stage.watchers.shipments.visible = true;
    this.stage.watchers.shipmentdisplay.visible = true;
  }

  *whenGreenFlagClicked() {
    this.goto(149, -26);
    this.visible = false;
    while (true) {
      0;
      yield;
    }
  }

  *whenIReceive6off() {
    this.visible = false;
    this.stage.watchers.shipments.visible = false;
    this.stage.watchers.shipmentdisplay.visible = false;
  }
}
