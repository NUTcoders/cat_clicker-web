import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import OnclickSpr from "./OnclickSpr/OnclickSpr.js";
import Cat from "./Cat/Cat.js";
import Glow from "./Glow/Glow.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import CatsPerSecond from "./CatsPerSecond/CatsPerSecond.js";
import Sprite18 from "./Sprite18/Sprite18.js";
import Cat2 from "./Cat2/Cat2.js";
import Cursor2 from "./Cursor2/Cursor2.js";
import Al from "./Al/Al.js";
import Shipment2 from "./Shipment2/Shipment2.js";
import Portal2 from "./Portal2/Portal2.js";
import Ac2 from "./Ac2/Ac2.js";
import Factory2 from "./Factory2/Factory2.js";
import Cursor from "./Cursor/Cursor.js";
import Grandma2 from "./Grandma2/Grandma2.js";
import Grandma3 from "./Grandma3/Grandma3.js";
import Farm2 from "./Farm2/Farm2.js";
import Factory3 from "./Factory3/Factory3.js";
import Mine from "./Mine/Mine.js";
import Shipment from "./Shipment/Shipment.js";
import Alchemylab from "./Alchemylab/Alchemylab.js";
import Portal from "./Portal/Portal.js";
import Ac from "./Ac/Ac.js";
import Timemachine from "./Timemachine/Timemachine.js";
import Farm3 from "./Farm3/Farm3.js";
import TimeMachine from "./TimeMachine/TimeMachine.js";
import Mine2 from "./Mine2/Mine2.js";
import Achievment from "./Achievment/Achievment.js";
import CloudEngineByFlames from "./CloudEngineByFlames/CloudEngineByFlames.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite8 from "./Sprite8/Sprite8.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  OnclickSpr: new OnclickSpr({
    x: -5,
    y: 16,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 34
  }),
  Cat: new Cat({
    x: 6,
    y: 14,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 35
  }),
  Glow: new Glow({
    x: 6,
    y: 16,
    direction: -90,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 1
  }),
  Sprite2: new Sprite2({
    x: -34,
    y: 140,
    direction: 90,
    costumeNumber: 2,
    size: 135.00000000000003,
    visible: true,
    layerOrder: 25
  }),
  Sprite5: new Sprite5({
    x: -220,
    y: -225,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 24
  }),
  Sprite1: new Sprite1({
    x: 1,
    y: 3,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 33
  }),
  CatsPerSecond: new CatsPerSecond({
    x: 23,
    y: -121,
    direction: 90,
    costumeNumber: 1,
    size: 140.00000000000003,
    visible: true,
    layerOrder: 26
  }),
  Sprite18: new Sprite18({
    x: -5,
    y: -152,
    direction: 90,
    costumeNumber: 1,
    size: 105,
    visible: true,
    layerOrder: 2
  }),
  Cat2: new Cat2({
    x: -201,
    y: 130,
    direction: 90,
    costumeNumber: 1,
    size: 18.000000000000004,
    visible: false,
    layerOrder: 3
  }),
  Cursor2: new Cursor2({
    x: 148,
    y: 156,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 14
  }),
  Al: new Al({
    x: 148,
    y: -62,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 18
  }),
  Shipment2: new Shipment2({
    x: 149,
    y: -26,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 19
  }),
  Portal2: new Portal2({
    x: 148,
    y: -98,
    direction: 90,
    costumeNumber: 1,
    size: 20.00000000000002,
    visible: false,
    layerOrder: 20
  }),
  Ac2: new Ac2({
    x: 150,
    y: -156,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 21
  }),
  Factory2: new Factory2({
    x: 150,
    y: 11,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 17
  }),
  Cursor: new Cursor({
    x: 217,
    y: 161,
    direction: 90,
    costumeNumber: 2,
    size: 15.000000023283084,
    visible: true,
    layerOrder: 5
  }),
  Grandma2: new Grandma2({
    x: 149,
    y: 120,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 15
  }),
  Grandma3: new Grandma3({
    x: 217,
    y: 125,
    direction: 90,
    costumeNumber: 2,
    size: 15.000000023283084,
    visible: true,
    layerOrder: 6
  }),
  Farm2: new Farm2({
    x: 217,
    y: 89,
    direction: 90,
    costumeNumber: 1,
    size: 15.000000023283084,
    visible: true,
    layerOrder: 7
  }),
  Factory3: new Factory3({
    x: 217,
    y: 16,
    direction: 90,
    costumeNumber: 2,
    size: 15.000000023283084,
    visible: true,
    layerOrder: 8
  }),
  Mine: new Mine({
    x: 217,
    y: 52,
    direction: 90,
    costumeNumber: 1,
    size: 15.00000000000002,
    visible: true,
    layerOrder: 9
  }),
  Shipment: new Shipment({
    x: 216,
    y: -20,
    direction: 90,
    costumeNumber: 2,
    size: 15.00000000000002,
    visible: true,
    layerOrder: 4
  }),
  Alchemylab: new Alchemylab({
    x: 216,
    y: -56,
    direction: 90,
    costumeNumber: 2,
    size: 15.00000000000002,
    visible: true,
    layerOrder: 10
  }),
  Portal: new Portal({
    x: 217,
    y: -92,
    direction: 90,
    costumeNumber: 2,
    size: 15.00000000000002,
    visible: true,
    layerOrder: 11
  }),
  Ac: new Ac({
    x: 217,
    y: -163,
    direction: 90,
    costumeNumber: 2,
    size: 15.00000000000002,
    visible: true,
    layerOrder: 13
  }),
  Timemachine: new Timemachine({
    x: 217,
    y: -128,
    direction: 90,
    costumeNumber: 2,
    size: 15.00000000000002,
    visible: true,
    layerOrder: 12
  }),
  Farm3: new Farm3({
    x: 149,
    y: 84,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 16
  }),
  TimeMachine: new TimeMachine({
    x: 149,
    y: -133,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 22
  }),
  Mine2: new Mine2({
    x: 149,
    y: 48,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 23
  }),
  Achievment: new Achievment({
    x: 0,
    y: 39,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 27
  }),
  CloudEngineByFlames: new CloudEngineByFlames({
    x: -89,
    y: -37,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 28
  }),
  Sprite6: new Sprite6({
    x: 65,
    y: -25,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 29
  }),
  Sprite7: new Sprite7({
    x: -377,
    y: 5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 32
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 30
  }),
  Sprite8: new Sprite8({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 31
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
