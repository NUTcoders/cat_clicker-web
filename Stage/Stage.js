/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("images", "./Stage/costumes/images.png", { x: 480, y: 360 }),
      new Costume("bgBlue", "./Stage/costumes/bgBlue.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.cookies = 0;
    this.vars.autoclicks = 0;
    this.vars.grandmas = 0;
    this.vars.farms = 0;
    this.vars.cookiePortals = 0;
    this.vars.factories = 0;
    this.vars.generators = 0;
    this.vars.grandmaApocalypses = 0;
    this.vars.fancyGraphics = 1;
    this.vars.garOffline = 15;
    this.vars.settings = 0;
    this.vars.cheatmode = 0;
    this.vars.cookiespersecond = 0;
    this.vars.cps1 = 54673.5;
    this.vars.cps2 = 54925.5;
    this.vars.cpstotal = false;
    this.vars.Clickedworldwide = 23943021.5;
    this.vars.activemilk = 0;
    this.vars.labs = 0;
    this.vars.shipments = 0;
    this.vars.aC = 0;
    this.vars.timemach = 0;
    this.vars.mine = 0;
    this.vars.hoursplayed = 0;
    this.vars.Cs = "6061625700556363006300";
    this.vars.Items =
      "0263940863940763940702639414639420639413639417639421639404639400";
    this.vars.Users = null;
    this.vars.scratcher = 1;
    this.vars.letterindex = 1;
    this.vars.cursorcost = 10;
    this.vars.grandmacost = 100;
    this.vars.farmcost = 1100;
    this.vars.minecost = 12000;
    this.vars.factorycost = 130000;
    this.vars.shipmentcost = 1300000;
    this.vars.labcost = 20000000;
    this.vars.portalcost = 330000000;
    this.vars.timemachcost = 5100000000;
    this.vars.aCondensercost = 75000000000;
    this.vars.shipmentdisplay = "1.3M";
    this.vars.shipmenttemp = 1.3;
    this.vars.sind = 3;
    this.vars.Cookiesave = 0;
    this.vars.Isaving =
      "026394086394076394070263941463942063941363941763942163940463940002589408639407639407026394146394206394136394176394216394046394000263940863940763940702639414639420639413639417639421639404639400";
    this.vars.Spot = 0;
    this.vars.Spot2 = 0;
    this.vars.Spot3 = 0;
    this.vars.Spot4 = 0;
    this.vars.Spot5 = 0;
    this.vars.labdisplay = "20M";
    this.vars.labtemp = 20;
    this.vars._ = 0;
    this.vars.portaltemp = 330;
    this.vars.portaldisplay = "330M";
    this.vars.timetemp = 5.1;
    this.vars.timedisplay = "5.1B";
    this.vars.actemp = 75;
    this.vars.acdisplay = "75B";
    this.vars.RecordGrandmaApocalypses = 0;
    this.vars.RecordGasCheats = 0;
    this.vars.CookiesWorldwide = 0;
    this.vars.getparamVariableR = 0;
    this.vars.letterOfReadvariableI1ReadvariableCharacters = 0;
    this.vars.recordHolder = ["j3or"];
    this.vars.users = [];
    this.vars.items = ["a0:g0:f0:fa0:m0:s0:l0:p0:t0:c0:"];
    this.vars.csaving = [0];
    this.vars.usaving = ["jj_man_code"];
    this.vars.getparamListR = [7894, 200, 0];

    this.watchers.cookies = new Watcher({
      label: "Cookies",
      style: "large",
      visible: true,
      value: () => this.vars.cookies,
      x: 509.05,
      y: 151
    });
    this.watchers.autoclicks = new Watcher({
      label: "autoclicks",
      style: "large",
      visible: false,
      value: () => this.vars.autoclicks,
      x: 584,
      y: 138
    });
    this.watchers.grandmas = new Watcher({
      label: "grandmas",
      style: "large",
      visible: false,
      value: () => this.vars.grandmas,
      x: 584,
      y: 101
    });
    this.watchers.farms = new Watcher({
      label: "farms",
      style: "large",
      visible: false,
      value: () => this.vars.farms,
      x: 585,
      y: 66
    });
    this.watchers.cookiePortals = new Watcher({
      label: "cookie portals",
      style: "large",
      visible: false,
      value: () => this.vars.cookiePortals,
      x: 584,
      y: -117
    });
    this.watchers.factories = new Watcher({
      label: "Factories",
      style: "large",
      visible: false,
      value: () => this.vars.factories,
      x: 588,
      y: -10
    });
    this.watchers.cookiespersecond = new Watcher({
      label: "cookiesPerSecond",
      style: "large",
      visible: true,
      value: () => this.vars.cookiespersecond,
      x: 467,
      y: -108
    });
    this.watchers.labs = new Watcher({
      label: "labs",
      style: "large",
      visible: false,
      value: () => this.vars.labs,
      x: 587,
      y: -81
    });
    this.watchers.shipments = new Watcher({
      label: "shipments",
      style: "large",
      visible: false,
      value: () => this.vars.shipments,
      x: 587,
      y: -45
    });
    this.watchers.aC = new Watcher({
      label: "A.C",
      style: "large",
      visible: false,
      value: () => this.vars.aC,
      x: 618,
      y: -121
    });
    this.watchers.timemach = new Watcher({
      label: "TimeMach",
      style: "large",
      visible: false,
      value: () => this.vars.timemach,
      x: 585,
      y: -147
    });
    this.watchers.mine = new Watcher({
      label: "Mine",
      style: "large",
      visible: false,
      value: () => this.vars.mine,
      x: 589,
      y: 28
    });
    this.watchers.shipmentdisplay = new Watcher({
      label: "shipmentDisplay",
      style: "large",
      visible: false,
      value: () => this.vars.shipmentdisplay,
      x: 587,
      y: -22
    });
    this.watchers.labdisplay = new Watcher({
      label: "labDisplay",
      style: "large",
      visible: false,
      value: () => this.vars.labdisplay,
      x: 587,
      y: -59
    });
    this.watchers.portaldisplay = new Watcher({
      label: "portalDisplay",
      style: "large",
      visible: false,
      value: () => this.vars.portaldisplay,
      x: 584,
      y: -92
    });
    this.watchers.timedisplay = new Watcher({
      label: "timeDisplay",
      style: "large",
      visible: false,
      value: () => this.vars.timedisplay,
      x: 586,
      y: -124
    });
    this.watchers.acdisplay = new Watcher({
      label: "ACDisplay",
      style: "large",
      visible: false,
      value: () => this.vars.acdisplay,
      x: 584,
      y: -151
    });
  }
}
