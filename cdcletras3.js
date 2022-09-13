window.transforms = {
  short_strike: {
    name: "short strike",
    actions: [ {
      action: "append",
      chars: [ 821 ]
    } ]
  },
  long_strike: {
    name: "long strike",
    actions: [ {
      action: "append",
      chars: [ 822 ]
    } ]
  },
  short_slash: {
    name: "short slash",
    actions: [ {
      action: "append",
      chars: [ 823 ]
    } ]
  },
  long_slash: {
    name: "long slash",
    actions: [ {
      action: "append",
      chars: [ 824 ]
    } ]
  },
  tilde_strike: {
    name: "tilde strike",
    actions: [ {
      action: "append",
      chars: [ 820 ]
    } ]
  },
  line_under: {
    name: "underline",
    actions: [ {
      action: "append",
      chars: [ 863 ]
    } ]
  },
  arrow_under: {
    name: "arrow under",
    actions: [ {
      action: "append",
      chars: [ 866 ]
    } ]
  },
  seagulls_under: {
    name: "seagulls",
    actions: [ {
      action: "append",
      chars: [ 828 ]
    } ]
  },
  asterisks_under: {
    name: "asterisks",
    actions: [ {
      action: "append",
      chars: [ 857 ]
    } ]
  },
  spheres_under: {
    name: "spheres",
    actions: [ {
      action: "append",
      chars: [ 858 ]
    } ]
  },
  lighting_over: {
    name: "lighting",
    actions: [ {
      action: "append",
      chars: [ 859 ]
    } ]
  },
  smiley_over: {
    name: "smiley face",
    since: "1.0.1",
    actions: [ {
      action: "append",
      chars: [ 784, 776 ]
    } ]
  },
  upside_down: {
    name: "upside down",
    actions: [ {
      action: "map",
      map: {
        a: 592,
        b: 113,
        c: 596,
        d: 112,
        e: 477,
        f: 607,
        g: 387,
        h: 613,
        i: 305,
        j: 638,
        k: 670,
        l: 1503,
        m: 623,
        n: 117,
        p: 100,
        q: 98,
        r: 633,
        t: 647,
        u: 110,
        v: 652,
        w: 653,
        y: 654,
        ".": 729,
        "[": 93,
        "(": 41,
        "{": 125,
        "?": 191,
        "!": 161,
        "'": 44,
        "<": 62,
        _: 8254,
        '"': 8222,
        ";": 1563,
        "‿": 8256,
        "⁅": 8262,
        "∴": 8757,
        A: 8704,
        B: 113,
        C: 1021,
        D: 5601,
        E: 398,
        F: 8498,
        G: 387,
        H: 72,
        I: 73,
        J: 383,
        K: 670,
        L: 741,
        M: 87,
        N: 78,
        O: 79,
        P: 1280,
        Q: 8009,
        R: 7450,
        S: 83,
        T: 8869,
        U: 8745,
        V: 923,
        W: 77,
        X: 88,
        Y: 654,
        Z: 90
      }
    }, {
      action: "reverse"
    } ]
  },
  small_caps: {
    name: "small caps",
    actions: [ {
      action: "map",
      map: {
        a: 7424,
        b: 665,
        c: 7428,
        d: 7429,
        e: 7431,
        f: 1171,
        g: 610,
        h: 668,
        i: 618,
        j: 7434,
        k: 7435,
        l: 671,
        m: 7437,
        n: 628,
        o: 7439,
        p: 7448,
        q: 491,
        r: 640,
        s: 115,
        t: 7451,
        u: 7452,
        v: 7456,
        w: 7457,
        x: 120,
        y: 655,
        z: 7458
      }
    } ]
  },
  blackbubble: {
    name: "black bubble text",
    since: "1.0.3",
    actions: [ {
      action: "shift",
      initial: [ 65, 90 ],
      add: 56591,
      first_byte: 55356
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 56559,
      first_byte: 55356
    }, {
      action: "shift",
      initial: [ 49, 57 ],
      add: 10073
    }, {
      action: "map",
      map: {
        "0": 9471
      }
    } ]
  },
  bubble: {
    name: "bubble text",
    actions: [ {
      action: "shift",
      initial: [ 65, 90 ],
      add: 9333
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 9327
    }, {
      action: "shift",
      initial: [ 49, 57 ],
      add: 9263
    }, {
      action: "map",
      map: {
        "0": 9450
      }
    } ]
  },
  paren: {
    name: "parenthesis",
    actions: [ {
      action: "shift",
      initial: [ 65, 90 ],
      add: 127183
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 9275
    }, {
      action: "shift",
      initial: [ 49, 57 ],
      add: 9283
    } ]
  },
  bold: {
    name: "bold",
    since: "1.0.2",
    actions: [ {
      action: "shift",
      initial: [ 65, 90 ],
      add: 119743
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 119737
    }, {
      action: "shift",
      initial: [ 48, 57 ],
      add: 120734
    } ]
  },
  italics: {
    name: "italics",
    since: "1.0.2",
    actions: [ {
      action: "map",
      map: {
        h: 8462
      }
    }, {
      action: "shift",
      initial: [ 65, 90 ],
      add: 119795
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 119789
    } ]
  },
  boldital: {
    name: "bold + italics",
    since: "1.0.2",
    actions: [ {
      action: "shift",
      initial: [ 65, 90 ],
      add: 119847
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 119841
    } ]
  },
  script: {
    name: "script",
    since: "1.0.2",
    actions: [ {
      action: "map",
      map: {
        e: 8495,
        g: 8458,
        o: 8500,
        B: 8492,
        E: 8496,
        F: 8497,
        H: 8459,
        I: 8464,
        L: 8466,
        M: 8499,
        R: 8475
      }
    }, {
      action: "shift",
      initial: [ 65, 90 ],
      add: 119899
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 119893
    } ]
  },
  boldscript: {
    name: "bold script",
    since: "1.0.2",
    actions: [ {
      action: "shift",
      initial: [ 65, 90 ],
      add: 119951
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 119945
    } ]
  },
  doublestruck: {
    name: "outline",
    since: "1.0.2",
    actions: [ {
      action: "map",
      map: {
        C: 8450,
        H: 8461,
        N: 8469,
        P: 8473,
        Q: 8474,
        R: 8477,
        Z: 8484
      }
    }, {
      action: "shift",
      initial: [ 65, 90 ],
      add: 120055
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 120049
    }, {
      action: "shift",
      initial: [ 48, 57 ],
      add: 120744
    } ]
  },
  frakturbold: {
    name: "gothic bold",
    since: "1.0.2",
    actions: [ {
      action: "shift",
      initial: [ 65, 90 ],
      add: 120107
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 120101
    } ]
  },
  fraktur: {
    name: "gothic",
    since: "1.0.2",
    actions: [ {
      action: "map",
      map: {
        C: 8493,
        H: 8460,
        I: 8465,
        R: 8476,
        Z: 8488
      }
    }, {
      action: "shift",
      initial: [ 65, 90 ],
      add: 120003
    }, {
      action: "shift",
      initial: [ 97, 122 ],
      add: 119997
    } ]
  }
};

window.run_transform = function(i, a) {
  for (var n = 0; n < a.actions.length; n++) {
    var t = a.actions[n];
    var s = t.action;
    switch (s) {
     case "append":
      i = i.split("").map(function(i) {
        for (var a = 0; a < t.chars.length; a++) {
          i += String.fromCharCode(t.chars[a]);
        }
        return i;
      }).join("");
      break;

     case "prepend":
      i = i.split("").map(function(i) {
        for (var a = 0; a < t.chars.length; a++) {
          i = String.fromCharCode(t.chars[a]) + i;
        }
        return i;
      }).join("");
      break;

     case "shift":
      i = i.split("").map(function(i) {
        var a = i.charCodeAt(0);
        if (a >= t.initial[0] && a <= t.initial[1]) {
          if (t.first_byte) {
            return String.fromCodePoint(t.first_byte, a + t.add);
          }
          return String.fromCodePoint(a + t.add);
        }
        return i;
      }).join("");
      break;

     case "map":
      i = i.split("").map(function(i) {
        return t.map[i] ? String.fromCodePoint(t.map[i]) : i;
      }).join("");
      break;

     case "reverse":
      i = i.split("").reverse().join("");
      break;

     default:
      console.warn("cannot do action: " + s);
      break;
    }
  }
  return i;
};
