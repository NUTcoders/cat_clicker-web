/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shipment extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shipmenton", "./Shipment/costumes/shipmenton.png", {
        x: 236,
        y: 230
      }),
      new Costume("shipmentoff", "./Shipment/costumes/shipmentoff.png", {
        x: 236,
        y: 230
      })
    ];

    this.sounds = [new Sound("meow", "./Shipment/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.shipmentcount = 4;
  }

  *whenGreenFlagClicked() {
    this.costume = "shipmentoff";
    this.visible = false;
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.shipmentcost = 1300000;
    this.stage.vars.shipments = 0;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("6ON");
      } else {
        this.broadcast("6OFF");
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.cookies > this.stage.vars.shipmentcost) {
        this.costume = "shipmenton";
      }
      if (this.stage.vars.cookies < this.stage.vars.shipmentcost) {
        this.costume = "shipmentoff";
      }
      yield* this.display();
      yield;
    }
  }

  *display() {
    this.stage.vars.shipmenttemp = this.stage.vars.shipmentcost / 1000000;
    this.stage.vars.sind = 1;
    this.stage.vars.shipmentdisplay = "";
    while (
      !(String(this.stage.vars.shipmenttemp)[this.stage.vars.sind - 1] == ".")
    ) {
      this.stage.vars.shipmentdisplay =
        "" +
        this.stage.vars.shipmentdisplay +
        String(this.stage.vars.shipmenttemp)[this.stage.vars.sind - 1];
      this.stage.vars.sind += 1;
      yield;
    }
    this.stage.vars.shipmentdisplay =
      "" + this.stage.vars.shipmentdisplay + ".";
    this.stage.vars.sind += 1;
    this.stage.vars.shipmentdisplay =
      "" +
      this.stage.vars.shipmentdisplay +
      ("" +
        String(this.stage.vars.shipmenttemp)[this.stage.vars.sind - 1] +
        "M");
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.cookies > this.stage.vars.shipmentcost) {
      this.stage.vars.cookies += -1 * this.stage.vars.shipmentcost;
      this.stage.vars.shipments += 1;
      this.stage.vars.shipmentcost = Math.ceil(
        this.stage.vars.shipmentcost * 1.15
      );
    } else {
      0;
    }
  }
}
