/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CloudEngineByFlames extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Cloud Engine",
        "./CloudEngineByFlames/costumes/Cloud Engine.svg",
        { x: 240, y: 180 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "loadOnly" },
        this.whenIReceiveLoadonly
      ),
      new Trigger(Trigger.BROADCAST, { name: "s/l" }, this.whenIReceiveSL),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CloudStart" },
        this.whenIReceiveCloudstart
      )
    ];

    this.vars.characters =
      "�abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+[]{}\\;'\",./<?`~|:> ☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚";
    this.vars.i = 10;
    this.vars.a = 2;
    this.vars.b = 3;
    this.vars.c = 4;
    this.vars.d = 5;
    this.vars.e = 6;
    this.vars.f = 7;
    this.vars.g = 8;
    this.vars.h = 9;
    this.vars.j = 11;
    this.vars.k = 12;
    this.vars.l = 13;
    this.vars.m = 14;
    this.vars.n = 15;
    this.vars.o = 16;
    this.vars.p = 17;
    this.vars.q = 18;
    this.vars.r = 19;
    this.vars.s = 20;
    this.vars.t = 21;
    this.vars.u = 22;
    this.vars.v = 23;
    this.vars.w = 24;
    this.vars.x = 25;
    this.vars.y = 26;
    this.vars.z = 27;
    this.vars.a2 = 28;
    this.vars.b2 = 29;
    this.vars.c2 = 30;
    this.vars.d2 = 31;
    this.vars.e2 = 32;
    this.vars.f2 = 33;
    this.vars.g2 = 34;
    this.vars.h2 = 35;
    this.vars.i2 = 36;
    this.vars.j2 = 37;
    this.vars.k2 = 38;
    this.vars.l2 = 39;
    this.vars.m2 = 40;
    this.vars.n2 = 41;
    this.vars.o2 = 42;
    this.vars.p2 = 43;
    this.vars.q2 = 44;
    this.vars.r2 = 45;
    this.vars.s2 = 46;
    this.vars.t2 = 47;
    this.vars.u2 = 48;
    this.vars.v2 = 49;
    this.vars.w2 = 50;
    this.vars.x2 = 51;
    this.vars.y2 = 52;
    this.vars.z2 = 53;
    this.vars._1 = 54;
    this.vars._2 = 55;
    this.vars._3 = 56;
    this.vars._4 = 57;
    this.vars._5 = 58;
    this.vars._6 = 59;
    this.vars._7 = 60;
    this.vars._8 = 61;
    this.vars._9 = 62;
    this.vars._0 = 63;
    this.vars._10 = 64;
    this.vars._11 = 65;
    this.vars._12 = 66;
    this.vars._13 = 67;
    this.vars._14 = 68;
    this.vars._15 = 69;
    this.vars._16 = 70;
    this.vars._17 = 71;
    this.vars._18 = 72;
    this.vars._19 = 73;
    this.vars._20 = 74;
    this.vars._21 = 75;
    this.vars._22 = 76;
    this.vars._23 = 77;
    this.vars._24 = 78;
    this.vars._25 = 79;
    this.vars._26 = 80;
    this.vars._27 = 81;
    this.vars._28 = 82;
    this.vars._29 = 83;
    this.vars._30 = 84;
    this.vars._31 = 85;
    this.vars._32 = 86;
    this.vars._33 = 87;
    this.vars._34 = 88;
    this.vars._35 = 89;
    this.vars._36 = 90;
    this.vars._37 = 91;
    this.vars._38 = 92;
    this.vars._39 = 93;
    this.vars._40 = 94;
    this.vars._41 = 95;
    this.vars._42 = 96;
    this.vars._43 = 97;
    this.vars._44 = 98;
    this.vars._45 = 99;
    this.vars._46 = 100;
    this.vars._47 = 101;
    this.vars._48 = 102;
    this.vars._49 = 103;
    this.vars._50 = 104;
    this.vars._51 = 105;
    this.vars._52 = 106;
    this.vars._53 = 107;
    this.vars._54 = 108;
    this.vars._55 = 109;
    this.vars._56 = 110;
    this.vars._57 = 111;
    this.vars._58 = 112;
    this.vars._59 = 113;
    this.vars._60 = 114;
    this.vars._61 = 115;
    this.vars._62 = 116;
    this.vars._63 = 117;
    this.vars._64 = 118;
    this.vars._65 = 119;
    this.vars._66 = 120;
    this.vars._67 = 121;
    this.vars._68 = 122;
    this.vars._69 = 123;
    this.vars._70 = 124;
    this.vars._71 = 125;
    this.vars._72 = 126;
    this.vars._73 = 127;
    this.vars._74 = 128;
    this.vars._75 = 129;
    this.vars._76 = 130;
    this.vars._77 = 131;
    this.vars._78 = 132;
    this.vars._79 = 133;
    this.vars._80 = 134;
    this.vars._81 = 135;
    this.vars._82 = 136;
    this.vars._83 = 137;
    this.vars._84 = 138;
    this.vars._85 = 139;
    this.vars._86 = 140;
    this.vars._87 = 141;
    this.vars._88 = 142;
    this.vars._89 = 143;
    this.vars._90 = 144;
    this.vars._91 = 145;
    this.vars._92 = 146;
    this.vars._93 = 147;
    this.vars._94 = 148;
    this.vars._95 = 149;
    this.vars._96 = 150;
    this.vars._97 = 151;
    this.vars._98 = 152;
    this.vars._99 = 153;
    this.vars._100 = 154;
    this.vars._101 = 155;
    this.vars._102 = 156;
    this.vars._103 = 157;
    this.vars._104 = 158;
    this.vars._105 = 159;
    this.vars._106 = 160;
    this.vars._107 = 161;
    this.vars._108 = 162;
    this.vars._109 = 163;
    this.vars._110 = 164;
    this.vars._111 = 165;
    this.vars._112 = 166;
    this.vars._113 = 167;
    this.vars._114 = 168;
    this.vars._115 = 169;
    this.vars._116 = 170;
    this.vars._117 = 171;
    this.vars._118 = 172;
    this.vars._119 = 173;
    this.vars._120 = 174;
    this.vars._121 = 175;
    this.vars._122 = 176;
    this.vars._123 = 177;
    this.vars._124 = 178;
    this.vars._125 = 179;
    this.vars._126 = 180;
    this.vars._127 = 181;
    this.vars._128 = 182;
    this.vars._129 = 183;
    this.vars._130 = 184;
    this.vars._131 = 185;
    this.vars._132 = 186;
    this.vars._133 = 187;
    this.vars._134 = 188;
    this.vars._135 = 189;
    this.vars._136 = 190;
    this.vars._137 = 191;
    this.vars._138 = 192;
    this.vars._139 = 193;
    this.vars._140 = 194;
    this.vars._141 = 195;
    this.vars._142 = 196;
    this.vars._143 = 197;
    this.vars._144 = 198;
    this.vars._145 = 199;
    this.vars._146 = 200;
    this.vars._147 = 201;
    this.vars._148 = 1;
    this.vars.i1 = 1;
    this.vars.i3 = 0;
    this.vars.i4 = 63;
    this.vars.userindex = 1;
    this.vars.i5 = 0;
    this.vars.temp = [];
    this.vars.console = [
      "j3or",
      "(245.035) Error: Data Cannot Be Processed With Download Method (CANNOT CONTINUE)",
      "(245.035) Error: Data Cannot Be Processed With Download Method (CANNOT CONTINUE)",
      "(245.035) Error: Data Cannot Be Processed With Download Method (CANNOT CONTINUE)",
      "(247.532) Error: Data Cannot Be Processed With Download Method (CANNOT CONTINUE)",
      "(247.532) Error: Data Cannot Be Processed With Download Method (CANNOT CONTINUE)",
      "(247.532) Error: Data Cannot Be Processed With Download Method (CANNOT CONTINUE)"
    ];
    this.vars.cookies2 = [];
  }

  *downloadToMListWithExtraCharactersWithErrorDetection(
    variable,
    list,
    extraCharacters
  ) {
    this.stage.vars.getparamListR = [];
    if (undefined == "true") {
      this.vars.console.push(
        "" +
          "(" +
          ("" +
            this.timer +
            ("" +
              ") Attemping to download data to [" +
              ("" +
                list +
                ("" +
                  "] with Extra Characters set as [" +
                  ("" + extraCharacters + "]")))))
      );
    }
    if (extraCharacters == "true") {
      if (variable.length % 3 == 0) {
        this.vars.temp = [];
        this.vars.i1 = 1;
        for (let i = 0; i < variable.length / 3; i++) {
          this.vars.i3 =
            "" +
            String(variable)[this.vars.i1 - 1] +
            ("" +
              String(variable)[this.vars.i1 + 1 - 1] +
              String(variable)[this.vars.i1 + 2 - 1]);
          if (this.vars.i3 == 0) {
            this.stage.vars.getparamListR.push(this.vars.temp.join(" "));
            this.vars.temp = [];
          } else {
            this.vars.temp.push(String(this.vars.characters)[this.vars.i3 - 1]);
          }
          this.vars.i1 += 3;
          yield;
        }
      } else {
        if (undefined == "true") {
          this.vars.console.push(
            "" +
              "(" +
              ("" +
                this.timer +
                ") Error: Data Cannot Be Processed With Download Method (CANNOT CONTINUE)")
          );
        }
      }
    } else {
      if (variable.length % 2 == 0) {
        this.vars.temp = [];
        this.vars.i1 = 1;
        for (let i = 0; i < variable.length / 2; i++) {
          this.vars.i3 =
            "" +
            String(variable)[this.vars.i1 - 1] +
            String(variable)[this.vars.i1 + 1 - 1];
          if (this.vars.i3 == 0) {
            this.stage.vars.getparamListR.push(this.vars.temp.join(" "));
            this.vars.temp = [];
          } else {
            this.vars.temp.push(String(this.vars.characters)[this.vars.i3 - 1]);
          }
          this.vars.i1 += 2;
          yield;
        }
      } else {
        this.vars.console.push(
          "" +
            "(" +
            ("" +
              this.timer +
              ") Error: Data Cannot Be Processed With Download Method (CANNOT CONTINUE)")
        );
      }
    }
    if (undefined == "true") {
      if (!(variable.length % 2 == 0 || variable.length % 3 == 0)) {
        this.vars.console.push(
          "" +
            "(" +
            ("" +
              this.timer +
              ") Error: Data Cannot Be Processed With Any Download Method (CANNOT CONTINUE)")
        );
      }
      this.vars.console.push(
        "" + "(" + ("" + this.timer + ") Data Downloaded")
      );
    }
  }

  *uploadMListToMVarWithExtraCharactersWithErrorDetection(list2, variable2) {
    this.vars.temp = [];
    this.vars.i1 = 1;
    this.vars.i5 = 0;
    if (undefined == "true") {
      this.vars.console.push(
        "" +
          "(" +
          ("" +
            this.timer +
            ("" +
              ") Attemping to upload [" +
              ("" +
                list2 +
                ("" +
                  "] to [" +
                  ("" +
                    variable2 +
                    ("" +
                      "] with Extra Characters set as [" +
                      ("" + undefined + "]")))))))
      );
    }
    if (String(variable2)[1 - 1] == "☁") {
      if (undefined == "true") {
        for (let i = 0; i < this.stage.vars.getparamListR.length; i++) {
          this.vars.i3 = 1;
          for (
            let i = 0;
            i < this.stage.vars.getparamListR[this.vars.i1 - 1].length;
            i++
          ) {
            this.vars.i4 = this.sprites["CloudEngineByFlames"].vars[undefined];
            if (this.vars.i4 == 0) {
              if (undefined == "true") {
                this.vars.console.push(
                  "" +
                    "(" +
                    ("" +
                      this.timer +
                      ("" +
                        ") Error: Character Not Supported (CAN CONTINUE) [" +
                        ("" +
                          String(
                            this.stage.vars.getparamListR[this.vars.i1 - 1]
                          )[this.vars.i3 - 1] +
                          "]")))
                );
              }
              this.vars.i4 = 1;
            }
            this.vars.temp.push(String(this.vars.i4)[1 - 1]);
            this.vars.temp.push(String(this.vars.i4)[2 - 1]);
            this.vars.temp.push(String(this.vars.i4)[3 - 1]);
            this.vars.i3 += 1;
            this.vars.i5 += 1;
            yield;
          }
          this.vars.i1 += 1;
          this.vars.temp.push(0);
          this.vars.temp.push(0);
          this.vars.temp.push(0);
          yield;
        }
        this.stage.vars.getparamVariableR = this.vars.temp.join(" ");
      } else {
        for (let i = 0; i < this.stage.vars.getparamListR.length; i++) {
          this.vars.i3 = 1;
          for (
            let i = 0;
            i < this.stage.vars.getparamListR[this.vars.i1 - 1].length;
            i++
          ) {
            this.vars.i4 = this.sprites["CloudEngineByFlames"].vars[undefined];
            if (this.vars.i4 == 0 || 99 < this.vars.i4) {
              if (undefined == "true") {
                this.vars.console.push(
                  "" +
                    "(" +
                    ("" +
                      this.timer +
                      ("" +
                        ") Error: Character Not Supported (CAN CONTINUE) [" +
                        ("" +
                          String(
                            this.stage.vars.getparamListR[this.vars.i1 - 1]
                          )[this.vars.i3 - 1] +
                          "]")))
                );
              }
              this.vars.i4 = 1;
            }
            this.vars.temp.push(String(this.vars.i4)[2 - 1]);
            this.vars.temp.push(String(this.vars.i4)[3 - 1]);
            this.vars.i3 += 1;
            this.vars.i5 += 1;
            yield;
          }
          this.vars.i1 += 1;
          this.vars.temp.push(0);
          this.vars.temp.push(0);
          yield;
        }
        this.stage.vars.getparamVariableR = this.vars.temp.join(" ");
      }
    } else {
      if (undefined == "true") {
        this.vars.console.push(
          "" +
            "(" +
            ("" +
              this.timer +
              ") Error: Uploading To Non-Cloud Variable (CANNOT CONTINUE)")
        );
      }
    }
    if (undefined == "true") {
      this.vars.console.push("" + "(" + ("" + this.timer + ") Data Uploaded"));
    }
  }

  *_(notes) {}

  *setUpEngine() {
    this.vars.characters =
      "�abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+[]{}\\;'\",./<?`~|:> ☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚";
    this.vars.i1 = 1;
    for (let i = 0; i < this.vars.characters.length; i++) {
      if (this.vars.i1.length == 1) {
        this.stage.vars.letterOfReadvariableI1ReadvariableCharacters =
          "" + 0 + this.vars.i1;
      }
      if (this.vars.i1.length == 2) {
        this.stage.vars.letterOfReadvariableI1ReadvariableCharacters =
          "" + 0 + this.vars.i1;
      }
      if (this.vars.i1.length == 3) {
        this.stage.vars.letterOfReadvariableI1ReadvariableCharacters = this.vars.i1;
      }
      this.vars.i1 += 1;
      yield;
    }
  }

  *find(username) {
    this.vars.userindex = 1;
    while (!(this.stage.vars.usaving[this.vars.userindex - 1] == username)) {
      this.vars.userindex += 1;
      yield;
    }
  }

  *decompile() {
    yield* this.find(/* no username */ "");
    this.stage.vars.letterindex = 1;
    this.stage.vars.autoclicks = "";
    this.stage.vars.grandmas = "";
    this.stage.vars.farms = "";
    this.stage.vars.factories = "";
    this.stage.vars.mine = "";
    this.stage.vars.shipments = "";
    this.stage.vars.labs = "";
    this.stage.vars.timemach = "";
    this.stage.vars.cookiePortals = "";
    this.stage.vars.aC = "";
    for (
      let i = 0;
      i < this.stage.vars.items[this.vars.userindex - 1].length;
      i++
    ) {
      if (
        String(this.stage.vars.items[this.vars.userindex - 1])[
          this.stage.vars.letterindex - 1
        ] == "a"
      ) {
        this.stage.vars.letterindex += 1;
        while (
          !(
            String(this.stage.vars.items[this.vars.userindex - 1])[
              this.stage.vars.letterindex - 1
            ] == ":"
          )
        ) {
          this.stage.vars.autoclicks =
            "" +
            this.stage.vars.autoclicks +
            String(this.stage.vars.items[this.vars.userindex - 1])[
              this.stage.vars.letterindex - 1
            ];
          this.stage.vars.letterindex += 1;
          yield;
        }
      } else {
        if (
          String(this.stage.vars.items[this.vars.userindex - 1])[
            this.stage.vars.letterindex - 1
          ] == "g"
        ) {
          this.stage.vars.letterindex += 1;
          while (
            !(
              String(this.stage.vars.items[this.vars.userindex - 1])[
                this.stage.vars.letterindex - 1
              ] == ":"
            )
          ) {
            this.stage.vars.grandmas =
              "" +
              this.stage.vars.grandmas +
              String(this.stage.vars.items[this.vars.userindex - 1])[
                this.stage.vars.letterindex - 1
              ];
            this.stage.vars.letterindex += 1;
            yield;
          }
        } else {
          if (
            String(this.stage.vars.items[this.vars.userindex - 1])[
              this.stage.vars.letterindex - 1
            ] == "f"
          ) {
            this.stage.vars.letterindex += 1;
            if (
              String(this.stage.vars.items[this.vars.userindex - 1])[
                this.stage.vars.letterindex - 1
              ] == "a"
            ) {
              this.stage.vars.letterindex += 1;
              while (
                !(
                  String(this.stage.vars.items[this.vars.userindex - 1])[
                    this.stage.vars.letterindex - 1
                  ] == ":"
                )
              ) {
                this.stage.vars.factories =
                  "" +
                  this.stage.vars.factories +
                  String(this.stage.vars.items[this.vars.userindex - 1])[
                    this.stage.vars.letterindex - 1
                  ];
                this.stage.vars.letterindex += 1;
                yield;
              }
            } else {
              while (
                !(
                  String(this.stage.vars.items[this.vars.userindex - 1])[
                    this.stage.vars.letterindex - 1
                  ] == ":"
                )
              ) {
                this.stage.vars.farms =
                  "" +
                  this.stage.vars.farms +
                  String(this.stage.vars.items[this.vars.userindex - 1])[
                    this.stage.vars.letterindex - 1
                  ];
                this.stage.vars.letterindex += 1;
                yield;
              }
            }
          } else {
            if (
              String(this.stage.vars.items[this.vars.userindex - 1])[
                this.stage.vars.letterindex - 1
              ] == "m"
            ) {
              this.stage.vars.letterindex += 1;
              while (
                !(
                  String(this.stage.vars.items[this.vars.userindex - 1])[
                    this.stage.vars.letterindex - 1
                  ] == ":"
                )
              ) {
                this.stage.vars.mine =
                  "" +
                  this.stage.vars.mine +
                  String(this.stage.vars.items[this.vars.userindex - 1])[
                    this.stage.vars.letterindex - 1
                  ];
                this.stage.vars.letterindex += 1;
                yield;
              }
            } else {
              if (
                String(this.stage.vars.items[this.vars.userindex - 1])[
                  this.stage.vars.letterindex - 1
                ] == "s"
              ) {
                this.stage.vars.letterindex += 1;
                while (
                  !(
                    String(this.stage.vars.items[this.vars.userindex - 1])[
                      this.stage.vars.letterindex - 1
                    ] == ":"
                  )
                ) {
                  this.stage.vars.shipments =
                    "" +
                    this.stage.vars.shipments +
                    String(this.stage.vars.items[this.vars.userindex - 1])[
                      this.stage.vars.letterindex - 1
                    ];
                  this.stage.vars.letterindex += 1;
                  yield;
                }
              } else {
                if (
                  String(this.stage.vars.items[this.vars.userindex - 1])[
                    this.stage.vars.letterindex - 1
                  ] == "l"
                ) {
                  this.stage.vars.letterindex += 1;
                  while (
                    !(
                      String(this.stage.vars.items[this.vars.userindex - 1])[
                        this.stage.vars.letterindex - 1
                      ] == ":"
                    )
                  ) {
                    this.stage.vars.labs =
                      "" +
                      this.stage.vars.labs +
                      String(this.stage.vars.items[this.vars.userindex - 1])[
                        this.stage.vars.letterindex - 1
                      ];
                    this.stage.vars.letterindex += 1;
                    yield;
                  }
                } else {
                  if (
                    String(this.stage.vars.items[this.vars.userindex - 1])[
                      this.stage.vars.letterindex - 1
                    ] == "p"
                  ) {
                    this.stage.vars.letterindex += 1;
                    while (
                      !(
                        String(this.stage.vars.items[this.vars.userindex - 1])[
                          this.stage.vars.letterindex - 1
                        ] == ":"
                      )
                    ) {
                      this.stage.vars.cookiePortals =
                        "" +
                        this.stage.vars.cookiePortals +
                        String(this.stage.vars.items[this.vars.userindex - 1])[
                          this.stage.vars.letterindex - 1
                        ];
                      this.stage.vars.letterindex += 1;
                      yield;
                    }
                  } else {
                    if (
                      String(this.stage.vars.items[this.vars.userindex - 1])[
                        this.stage.vars.letterindex - 1
                      ] == "p"
                    ) {
                      this.stage.vars.letterindex += 1;
                      while (
                        !(
                          String(
                            this.stage.vars.items[this.vars.userindex - 1]
                          )[this.stage.vars.letterindex - 1] == ":"
                        )
                      ) {
                        this.stage.vars.cookiePortals =
                          "" +
                          this.stage.vars.cookiePortals +
                          String(
                            this.stage.vars.items[this.vars.userindex - 1]
                          )[this.stage.vars.letterindex - 1];
                        this.stage.vars.letterindex += 1;
                        yield;
                      }
                    } else {
                      if (
                        String(this.stage.vars.items[this.vars.userindex - 1])[
                          this.stage.vars.letterindex - 1
                        ] == "t"
                      ) {
                        this.stage.vars.letterindex += 1;
                        while (
                          !(
                            String(
                              this.stage.vars.items[this.vars.userindex - 1]
                            )[this.stage.vars.letterindex - 1] == ":"
                          )
                        ) {
                          this.stage.vars.timemach =
                            "" +
                            this.stage.vars.timemach +
                            String(
                              this.stage.vars.items[this.vars.userindex - 1]
                            )[this.stage.vars.letterindex - 1];
                          this.stage.vars.letterindex += 1;
                          yield;
                        }
                      } else {
                        if (
                          String(
                            this.stage.vars.items[this.vars.userindex - 1]
                          )[this.stage.vars.letterindex - 1] == "c"
                        ) {
                          this.stage.vars.letterindex += 1;
                          while (
                            !(
                              String(
                                this.stage.vars.items[this.vars.userindex - 1]
                              )[this.stage.vars.letterindex - 1] == ":"
                            )
                          ) {
                            this.stage.vars.aC =
                              "" +
                              this.stage.vars.aC +
                              String(
                                this.stage.vars.items[this.vars.userindex - 1]
                              )[this.stage.vars.letterindex - 1];
                            this.stage.vars.letterindex += 1;
                            yield;
                          }
                        } else {
                          0;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      this.stage.vars.letterindex += 1;
      yield;
    }
    this.stage.vars.cookies = this.stage.vars.csaving[this.vars.userindex - 1];
  }

  *load() {
    yield* this.downloadToMListWithExtraCharactersWithErrorDetection(
      this.stage.vars.Isaving,
      0,
      0
    );
    yield* this.downloadToMListWithExtraCharactersWithErrorDetection(
      this.stage.vars.Users,
      0,
      0
    );
    yield* this.downloadToMListWithExtraCharactersWithErrorDetection(
      this.stage.vars.Cs,
      0,
      0
    );
    yield* this.find(/* no username */ "");
    yield* this.decompile();
  }

  *whenIReceiveLoadonly() {
    yield* this.load();
  }

  *save() {
    yield* this.find(/* no username */ "");
    this.stage.vars.items.splice(
      this.vars.userindex - 1,
      1,
      "" +
        "a" +
        ("" +
          this.stage.vars.autoclicks +
          ("" +
            ":" +
            ("" +
              "g" +
              ("" +
                this.stage.vars.grandmas +
                ("" +
                  ":" +
                  ("" +
                    "f" +
                    ("" +
                      this.stage.vars.farms +
                      ("" +
                        ":" +
                        ("" +
                          "fa" +
                          ("" +
                            this.stage.vars.factories +
                            ("" +
                              ":" +
                              ("" +
                                "m" +
                                ("" +
                                  this.stage.vars.mine +
                                  ("" +
                                    ":" +
                                    ("" +
                                      "s" +
                                      ("" +
                                        this.stage.vars.shipments +
                                        ("" +
                                          ":" +
                                          ("" +
                                            "l" +
                                            ("" +
                                              this.stage.vars.labs +
                                              ("" +
                                                ":" +
                                                ("" +
                                                  "p" +
                                                  ("" +
                                                    this.stage.vars
                                                      .cookiePortals +
                                                    ("" +
                                                      ":" +
                                                      ("" +
                                                        "t" +
                                                        ("" +
                                                          this.stage.vars
                                                            .timemach +
                                                          ("" +
                                                            ":" +
                                                            ("" +
                                                              "c" +
                                                              ("" +
                                                                this.stage.vars
                                                                  .aC +
                                                                ":"))))))))))))))))))))))))))))
    );
    this.stage.vars.csaving.splice(
      this.vars.userindex - 1,
      1,
      this.stage.vars.cookies
    );
    yield* this.uploadMListToMVarWithExtraCharactersWithErrorDetection(0, 0);
    yield* this.uploadMListToMVarWithExtraCharactersWithErrorDetection(0, 0);
    yield* this.uploadMListToMVarWithExtraCharactersWithErrorDetection(0, 0);
  }

  *whenIReceiveSL() {
    yield* this.find(/* no username */ "");
    yield* this.save();
  }

  *whenIReceiveCloudstart() {
    this.stage.vars.items = [];
    this.stage.vars.users = [];
    this.stage.vars.csaving = [];
    this.stage.vars.usaving = [];
    yield* this.downloadToMListWithExtraCharactersWithErrorDetection(
      this.stage.vars.Isaving,
      0,
      0
    );
    yield* this.downloadToMListWithExtraCharactersWithErrorDetection(
      this.stage.vars.Users,
      0,
      0
    );
    yield* this.downloadToMListWithExtraCharactersWithErrorDetection(
      this.stage.vars.Cs,
      0,
      0
    );
    if (!this.stage.vars.usaving.includes(/* no username */ "")) {
      this.stage.vars.csaving.push(this.stage.vars.cookies);
      this.stage.vars.items.push(
        "" +
          "a" +
          ("" +
            this.stage.vars.autoclicks +
            ("" +
              ":" +
              ("" +
                "g" +
                ("" +
                  this.stage.vars.grandmas +
                  ("" +
                    ":" +
                    ("" +
                      "f" +
                      ("" +
                        this.stage.vars.farms +
                        ("" +
                          ":" +
                          ("" +
                            "fa" +
                            ("" +
                              this.stage.vars.factories +
                              ("" +
                                ":" +
                                ("" +
                                  "m" +
                                  ("" +
                                    this.stage.vars.mine +
                                    ("" +
                                      ":" +
                                      ("" +
                                        "s" +
                                        ("" +
                                          this.stage.vars.shipments +
                                          ("" +
                                            ":" +
                                            ("" +
                                              "l" +
                                              ("" +
                                                this.stage.vars.labs +
                                                ("" +
                                                  ":" +
                                                  ("" +
                                                    "p" +
                                                    ("" +
                                                      this.stage.vars
                                                        .cookiePortals +
                                                      ("" +
                                                        ":" +
                                                        ("" +
                                                          "t" +
                                                          ("" +
                                                            this.stage.vars
                                                              .timemach +
                                                            ("" +
                                                              ":" +
                                                              ("" +
                                                                "c" +
                                                                ("" +
                                                                  this.stage
                                                                    .vars.aC +
                                                                  ":"))))))))))))))))))))))))))))
      );
      this.stage.vars.usaving.push(/* no username */ "");
      yield* this.uploadMListToMVarWithExtraCharactersWithErrorDetection(0, 0);
      yield* this.uploadMListToMVarWithExtraCharactersWithErrorDetection(0, 0);
      yield* this.uploadMListToMVarWithExtraCharactersWithErrorDetection(0, 0);
      yield* this.find(/* no username */ "");
    } else {
      yield* this.find(/* no username */ "");
    }
  }
}
