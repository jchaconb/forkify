var t,
  e,
  n,
  r,
  i,
  o,
  s,
  a,
  u,
  c,
  f,
  l,
  h,
  p,
  d,
  v = globalThis;
function g(t) {
  return t && t.__esModule ? t.default : t;
}
var y = {},
  b = {},
  m = v.parcelRequire94c2;
null == m &&
  (((m = function (t) {
    if (t in y) return y[t].exports;
    if (t in b) {
      var e = b[t];
      delete b[t];
      var n = { id: t, exports: {} };
      return (y[t] = n), e.call(n.exports, n, n.exports), n.exports;
    }
    var r = Error("Cannot find module '" + t + "'");
    throw ((r.code = 'MODULE_NOT_FOUND'), r);
  }).register = function (t, e) {
    b[t] = e;
  }),
  (v.parcelRequire94c2 = m)),
  (0, m.register)('27Lyk', function (t, e) {
    Object.defineProperty(t.exports, 'register', {
      get: () => n,
      set: t => (n = t),
      enumerable: !0,
      configurable: !0,
    });
    var n,
      r = new Map();
    n = function (t, e) {
      for (var n = 0; n < e.length - 1; n += 2)
        r.set(e[n], { baseUrl: t, path: e[n + 1] });
    };
  }),
  m('27Lyk').register(
    new URL('', import.meta.url).toString(),
    JSON.parse('["f9fpV","index.b7aacd7c.js","eyyUD","icons.21bad73c.svg"]')
  );
var w = {},
  _ = {},
  E = function (t) {
    return t && t.Math === Math && t;
  };
_ =
  E('object' == typeof globalThis && globalThis) ||
  E('object' == typeof window && window) ||
  E('object' == typeof self && self) ||
  E('object' == typeof v && v) ||
  E('object' == typeof _ && _) ||
  (function () {
    return this;
  })() ||
  Function('return this')();
var O = {},
  j = {};
O = !(j = function (t) {
  try {
    return !!t();
  } catch (t) {
    return !0;
  }
})(function () {
  return (
    7 !==
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1]
  );
});
var S = {},
  I = {};
I = !j(function () {
  var t = function () {}.bind();
  return 'function' != typeof t || t.hasOwnProperty('prototype');
});
var L = Function.prototype.call;
S = I
  ? L.bind(L)
  : function () {
      return L.apply(L, arguments);
    };
var k = {}.propertyIsEnumerable,
  x = Object.getOwnPropertyDescriptor;
n =
  x && !k.call({ 1: 2 }, 1)
    ? function (t) {
        var e = x(this, t);
        return !!e && e.enumerable;
      }
    : k;
var B = {};
B = function (t, e) {
  return {
    enumerable: !(1 & t),
    configurable: !(2 & t),
    writable: !(4 & t),
    value: e,
  };
};
var N = {},
  P = {},
  T = {},
  M = Function.prototype,
  F = M.call,
  $ = I && M.bind.bind(F, F),
  D = {},
  R = (T = I
    ? $
    : function (t) {
        return function () {
          return F.apply(t, arguments);
        };
      })({}.toString),
  C = T(''.slice);
D = function (t) {
  return C(R(t), 8, -1);
};
var U = Object,
  A = T(''.split);
P = j(function () {
  return !U('z').propertyIsEnumerable(0);
})
  ? function (t) {
      return 'String' === D(t) ? A(t, '') : U(t);
    }
  : U;
var H = {},
  G = {};
G = function (t) {
  return null == t;
};
var q = TypeError;
(H = function (t) {
  if (G(t)) throw new q("Can't call method on " + t);
  return t;
}),
  (N = function (t) {
    return P(H(t));
  });
var z = {},
  W = {},
  Y = {},
  V = {},
  J = 'object' == typeof document && document.all;
(V =
  void 0 === J && void 0 !== J
    ? function (t) {
        return 'function' == typeof t || t === J;
      }
    : function (t) {
        return 'function' == typeof t;
      }),
  (Y = function (t) {
    return 'object' == typeof t ? null !== t : V(t);
  });
var K = {},
  Z = {};
Z = function (t, e) {
  var n;
  return arguments.length < 2
    ? ((n = _[t]), V(n) ? n : void 0)
    : _[t] && _[t][e];
};
var Q = {};
Q = T({}.isPrototypeOf);
var X = {},
  tt = {},
  te = {},
  tn = {},
  tr = _.navigator,
  ti = tr && tr.userAgent;
tn = ti ? String(ti) : '';
var to = _.process,
  ts = _.Deno,
  ta = (to && to.versions) || (ts && ts.version),
  tu = ta && ta.v8;
tu && (i = (r = tu.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
  !i &&
    tn &&
    (!(r = tn.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
    (r = tn.match(/Chrome\/(\d+)/)) &&
    (i = +r[1]),
  (te = i);
var tc = _.String;
X =
  (tt =
    !!Object.getOwnPropertySymbols &&
    !j(function () {
      var t = Symbol('symbol detection');
      return (
        !tc(t) ||
        !(Object(t) instanceof Symbol) ||
        (!Symbol.sham && te && te < 41)
      );
    })) &&
  !Symbol.sham &&
  'symbol' == typeof Symbol.iterator;
var tf = Object;
K = X
  ? function (t) {
      return 'symbol' == typeof t;
    }
  : function (t) {
      var e = Z('Symbol');
      return V(e) && Q(e.prototype, tf(t));
    };
var tl = {},
  th = {},
  tp = {},
  td = String;
tp = function (t) {
  try {
    return td(t);
  } catch (t) {
    return 'Object';
  }
};
var tv = TypeError;
(th = function (t) {
  if (V(t)) return t;
  throw new tv(tp(t) + ' is not a function');
}),
  (tl = function (t, e) {
    var n = t[e];
    return G(n) ? void 0 : th(n);
  });
var tg = {},
  ty = TypeError;
tg = function (t, e) {
  var n, r;
  if (
    ('string' === e && V((n = t.toString)) && !Y((r = S(n, t)))) ||
    (V((n = t.valueOf)) && !Y((r = S(n, t)))) ||
    ('string' !== e && V((n = t.toString)) && !Y((r = S(n, t))))
  )
    return r;
  throw new ty("Can't convert object to primitive value");
};
var tb = {},
  tm = {},
  tw = {},
  t_ = {};
t_ = !1;
var tE = {},
  tO = Object.defineProperty;
tE = function (t, e) {
  try {
    tO(_, t, { value: e, configurable: !0, writable: !0 });
  } catch (n) {
    _[t] = e;
  }
  return e;
};
var tj = '__core-js_shared__',
  tS = (tw = _[tj] || tE(tj, {}));
(tS.versions || (tS.versions = [])).push({
  version: '3.40.0',
  mode: t_ ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE',
  source: 'https://github.com/zloirock/core-js',
}),
  (tm = function (t, e) {
    return tw[t] || (tw[t] = e || {});
  });
var tI = {},
  tL = {},
  tk = Object;
tL = function (t) {
  return tk(H(t));
};
var tx = T({}.hasOwnProperty);
tI =
  Object.hasOwn ||
  function (t, e) {
    return tx(tL(t), e);
  };
var tB = {},
  tN = 0,
  tP = Math.random(),
  tT = T((1).toString);
tB = function (t) {
  return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + tT(++tN + tP, 36);
};
var tM = _.Symbol,
  tF = tm('wks'),
  t$ = X ? tM.for || tM : (tM && tM.withoutSetter) || tB,
  tD = TypeError,
  tR = (function (t) {
    return (
      tI(tF, t) || (tF[t] = tt && tI(tM, t) ? tM[t] : t$('Symbol.' + t)), tF[t]
    );
  })('toPrimitive');
(W = function (t, e) {
  if (!Y(t) || K(t)) return t;
  var n,
    r = tl(t, tR);
  if (r) {
    if ((void 0 === e && (e = 'default'), (n = S(r, t, e)), !Y(n) || K(n)))
      return n;
    throw new tD("Can't convert object to primitive value");
  }
  return void 0 === e && (e = 'number'), tg(t, e);
}),
  (z = function (t) {
    var e = W(t, 'string');
    return K(e) ? e : e + '';
  });
var tC = {},
  tU = {},
  tA = _.document,
  tH = Y(tA) && Y(tA.createElement);
(tU = function (t) {
  return tH ? tA.createElement(t) : {};
}),
  (tC =
    !O &&
    !j(function () {
      return (
        7 !==
        Object.defineProperty(tU('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }));
var tG = Object.getOwnPropertyDescriptor;
e = O
  ? tG
  : function (t, e) {
      if (((t = N(t)), (e = z(e)), tC))
        try {
          return tG(t, e);
        } catch (t) {}
      if (tI(t, e)) return B(!S(n, t, e), t[e]);
    };
var tq = {},
  tz = {};
tz =
  O &&
  j(function () {
    return (
      42 !==
      Object.defineProperty(function () {}, 'prototype', {
        value: 42,
        writable: !1,
      }).prototype
    );
  });
var tW = {},
  tY = String,
  tV = TypeError;
tW = function (t) {
  if (Y(t)) return t;
  throw new tV(tY(t) + ' is not an object');
};
var tJ = TypeError,
  tK = Object.defineProperty,
  tZ = Object.getOwnPropertyDescriptor,
  tQ = 'enumerable',
  tX = 'configurable',
  t0 = 'writable';
(o = O
  ? tz
    ? function (t, e, n) {
        if (
          (tW(t),
          (e = z(e)),
          tW(n),
          'function' == typeof t &&
            'prototype' === e &&
            'value' in n &&
            t0 in n &&
            !n[t0])
        ) {
          var r = tZ(t, e);
          r &&
            r[t0] &&
            ((t[e] = n.value),
            (n = {
              configurable: tX in n ? n[tX] : r[tX],
              enumerable: tQ in n ? n[tQ] : r[tQ],
              writable: !1,
            }));
        }
        return tK(t, e, n);
      }
    : tK
  : function (t, e, n) {
      if ((tW(t), (e = z(e)), tW(n), tC))
        try {
          return tK(t, e, n);
        } catch (t) {}
      if ('get' in n || 'set' in n) throw new tJ('Accessors not supported');
      return 'value' in n && (t[e] = n.value), t;
    }),
  (tq = O
    ? function (t, e, n) {
        return o(t, e, B(1, n));
      }
    : function (t, e, n) {
        return (t[e] = n), t;
      });
var t1 = {},
  t2 = {},
  t7 = {},
  t3 = Function.prototype,
  t4 = O && Object.getOwnPropertyDescriptor,
  t8 = tI(t3, 'name'),
  t5 = t8 && (!O || (O && t4(t3, 'name').configurable)),
  t9 = {},
  t6 = T(Function.toString);
V(tw.inspectSource) ||
  (tw.inspectSource = function (t) {
    return t6(t);
  }),
  (t9 = tw.inspectSource);
var et = {},
  ee = {},
  en = _.WeakMap;
ee = V(en) && /native code/.test(String(en));
var er = {},
  ei = tm('keys');
er = function (t) {
  return ei[t] || (ei[t] = tB(t));
};
var eo = {};
eo = {};
var es = 'Object already initialized',
  ea = _.TypeError,
  eu = _.WeakMap;
if (ee || tw.state) {
  var ec = tw.state || (tw.state = new eu());
  (ec.get = ec.get),
    (ec.has = ec.has),
    (ec.set = ec.set),
    (s = function (t, e) {
      if (ec.has(t)) throw new ea(es);
      return (e.facade = t), ec.set(t, e), e;
    }),
    (a = function (t) {
      return ec.get(t) || {};
    }),
    (u = function (t) {
      return ec.has(t);
    });
} else {
  var ef = er('state');
  (eo[ef] = !0),
    (s = function (t, e) {
      if (tI(t, ef)) throw new ea(es);
      return (e.facade = t), tq(t, ef, e), e;
    }),
    (a = function (t) {
      return tI(t, ef) ? t[ef] : {};
    }),
    (u = function (t) {
      return tI(t, ef);
    });
}
var el = (et = {
    set: s,
    get: a,
    has: u,
    enforce: function (t) {
      return u(t) ? a(t) : s(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!Y(e) || (n = a(e)).type !== t)
          throw new ea('Incompatible receiver, ' + t + ' required');
        return n;
      };
    },
  }).enforce,
  eh = et.get,
  ep = String,
  ed = Object.defineProperty,
  ev = T(''.slice),
  eg = T(''.replace),
  ey = T([].join),
  eb =
    O &&
    !j(function () {
      return 8 !== ed(function () {}, 'length', { value: 8 }).length;
    }),
  em = String(String).split('String'),
  ew = (t2 = function (t, e, n) {
    'Symbol(' === ev(ep(e), 0, 7) &&
      (e = '[' + eg(ep(e), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
      n && n.getter && (e = 'get ' + e),
      n && n.setter && (e = 'set ' + e),
      (!tI(t, 'name') || (t5 && t.name !== e)) &&
        (O ? ed(t, 'name', { value: e, configurable: !0 }) : (t.name = e)),
      eb &&
        n &&
        tI(n, 'arity') &&
        t.length !== n.arity &&
        ed(t, 'length', { value: n.arity });
    try {
      n && tI(n, 'constructor') && n.constructor
        ? O && ed(t, 'prototype', { writable: !1 })
        : t.prototype && (t.prototype = void 0);
    } catch (t) {}
    var r = el(t);
    return (
      tI(r, 'source') || (r.source = ey(em, 'string' == typeof e ? e : '')), t
    );
  });
(Function.prototype.toString = ew(function () {
  return (V(this) && eh(this).source) || t9(this);
}, 'toString')),
  (t1 = function (t, e, n, r) {
    r || (r = {});
    var i = r.enumerable,
      s = void 0 !== r.name ? r.name : e;
    if ((V(n) && t2(n, s, r), r.global)) i ? (t[e] = n) : tE(e, n);
    else {
      try {
        r.unsafe ? t[e] && (i = !0) : delete t[e];
      } catch (t) {}
      i
        ? (t[e] = n)
        : o(t, e, {
            value: n,
            enumerable: !1,
            configurable: !r.nonConfigurable,
            writable: !r.nonWritable,
          });
    }
    return t;
  });
var e_ = {},
  eE = {},
  eO = {},
  ej = {},
  eS = {},
  eI = {},
  eL = {},
  ek = Math.ceil,
  ex = Math.floor;
(eL =
  Math.trunc ||
  function (t) {
    var e = +t;
    return (e > 0 ? ex : ek)(e);
  }),
  (eI = function (t) {
    var e = +t;
    return e != e || 0 === e ? 0 : eL(e);
  });
var eB = Math.max,
  eN = Math.min;
eS = function (t, e) {
  var n = eI(t);
  return n < 0 ? eB(n + e, 0) : eN(n, e);
};
var eP = {},
  eT = {},
  eM = Math.min;
(eT = function (t) {
  var e = eI(t);
  return e > 0 ? eM(e, 0x1fffffffffffff) : 0;
}),
  (eP = function (t) {
    return eT(t.length);
  });
var eF = function (t) {
    return function (e, n, r) {
      var i,
        o = N(e),
        s = eP(o);
      if (0 === s) return !t && -1;
      var a = eS(r, s);
      if (t && n != n) {
        for (; s > a; ) if ((i = o[a++]) != i) return !0;
      } else
        for (; s > a; a++) if ((t || a in o) && o[a] === n) return t || a || 0;
      return !t && -1;
    };
  },
  e$ = { includes: eF(!0), indexOf: eF(!1) }.indexOf,
  eD = T([].push);
eO = function (t, e) {
  var n,
    r = N(t),
    i = 0,
    o = [];
  for (n in r) !tI(eo, n) && tI(r, n) && eD(o, n);
  for (; e.length > i; ) tI(r, (n = e[i++])) && (~e$(o, n) || eD(o, n));
  return o;
};
var eR = {},
  eC = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ].concat('length', 'prototype');
(c =
  Object.getOwnPropertyNames ||
  function (t) {
    return eO(t, eC);
  }),
  (f = Object.getOwnPropertySymbols);
var eU = T([].concat);
(eE =
  Z('Reflect', 'ownKeys') ||
  function (t) {
    var e = c(tW(t));
    return f ? eU(e, f(t)) : e;
  }),
  (e_ = function (t, n, r) {
    for (var i = eE(n), s = 0; s < i.length; s++) {
      var a = i[s];
      tI(t, a) || (r && tI(r, a)) || o(t, a, e(n, a));
    }
  });
var eA = {},
  eH = /#|\.prototype\./,
  eG = function (t, e) {
    var n = ez[eq(t)];
    return n === eY || (n !== eW && (V(e) ? j(e) : !!e));
  },
  eq = (eG.normalize = function (t) {
    return String(t).replace(eH, '.').toLowerCase();
  }),
  ez = (eG.data = {}),
  eW = (eG.NATIVE = 'N'),
  eY = (eG.POLYFILL = 'P');
(eA = eG),
  (w = function (t, n) {
    var r,
      i,
      o,
      s,
      a,
      u = t.target,
      c = t.global,
      f = t.stat;
    if ((r = c ? _ : f ? _[u] || tE(u, {}) : _[u] && _[u].prototype))
      for (i in n) {
        if (
          ((s = n[i]),
          (o = t.dontCallGetSet ? (a = e(r, i)) && a.value : r[i]),
          !eA(c ? i : u + (f ? '.' : '#') + i, t.forced) && void 0 !== o)
        ) {
          if (typeof s == typeof o) continue;
          e_(s, o);
        }
        (t.sham || (o && o.sham)) && tq(s, 'sham', !0), t1(r, i, s, t);
      }
  });
var eV = {},
  eJ = {},
  eK = Function.prototype,
  eZ = eK.apply,
  eQ = eK.call;
eJ =
  ('object' == typeof Reflect && Reflect.apply) ||
  (I
    ? eQ.bind(eZ)
    : function () {
        return eQ.apply(eZ, arguments);
      });
var eX = {},
  e0 = {},
  e1 = (e0 = function (t) {
    if ('Function' === D(t)) return T(t);
  })(e0.bind);
eX = function (t, e) {
  return (
    th(t),
    void 0 === e
      ? t
      : I
      ? e1(t, e)
      : function () {
          return t.apply(e, arguments);
        }
  );
};
var e2 = {};
e2 = Z('document', 'documentElement');
var e7 = {};
e7 = T([].slice);
var e3 = {},
  e4 = TypeError;
e3 = function (t, e) {
  if (t < e) throw new e4('Not enough arguments');
  return t;
};
var e8 = {};
e8 = /(?:ipad|iphone|ipod).*applewebkit/i.test(tn);
var e5 = {},
  e9 = {},
  e6 = function (t) {
    return tn.slice(0, t.length) === t;
  };
e5 =
  'NODE' ===
  (e9 = e6('Bun/')
    ? 'BUN'
    : e6('Cloudflare-Workers')
    ? 'CLOUDFLARE'
    : e6('Deno/')
    ? 'DENO'
    : e6('Node.js/')
    ? 'NODE'
    : _.Bun && 'string' == typeof Bun.version
    ? 'BUN'
    : _.Deno && 'object' == typeof Deno.version
    ? 'DENO'
    : 'process' === D(_.process)
    ? 'NODE'
    : _.window && _.document
    ? 'BROWSER'
    : 'REST');
var nt = _.setImmediate,
  ne = _.clearImmediate,
  nn = _.process,
  nr = _.Dispatch,
  ni = _.Function,
  no = _.MessageChannel,
  ns = _.String,
  na = 0,
  nu = {},
  nc = 'onreadystatechange';
j(function () {
  l = _.location;
});
var nf = function (t) {
    if (tI(nu, t)) {
      var e = nu[t];
      delete nu[t], e();
    }
  },
  nl = function (t) {
    return function () {
      nf(t);
    };
  },
  nh = function (t) {
    nf(t.data);
  },
  np = function (t) {
    _.postMessage(ns(t), l.protocol + '//' + l.host);
  };
(nt && ne) ||
  ((nt = function (t) {
    e3(arguments.length, 1);
    var e = V(t) ? t : ni(t),
      n = e7(arguments, 1);
    return (
      (nu[++na] = function () {
        eJ(e, void 0, n);
      }),
      h(na),
      na
    );
  }),
  (ne = function (t) {
    delete nu[t];
  }),
  e5
    ? (h = function (t) {
        nn.nextTick(nl(t));
      })
    : nr && nr.now
    ? (h = function (t) {
        nr.now(nl(t));
      })
    : no && !e8
    ? ((d = (p = new no()).port2),
      (p.port1.onmessage = nh),
      (h = eX(d.postMessage, d)))
    : _.addEventListener &&
      V(_.postMessage) &&
      !_.importScripts &&
      l &&
      'file:' !== l.protocol &&
      !j(np)
    ? ((h = np), _.addEventListener('message', nh, !1))
    : (h =
        nc in tU('script')
          ? function (t) {
              e2.appendChild(tU('script'))[nc] = function () {
                e2.removeChild(this), nf(t);
              };
            }
          : function (t) {
              setTimeout(nl(t), 0);
            }));
var nd = (eV = { set: nt, clear: ne }).clear;
w(
  { global: !0, bind: !0, enumerable: !0, forced: _.clearImmediate !== nd },
  { clearImmediate: nd }
);
var nv = eV.set,
  ng = {},
  ny = _.Function,
  nb =
    /MSIE .\./.test(tn) ||
    ('BUN' === e9 &&
      ((t = _.Bun.version.split('.')).length < 3 ||
        ('0' === t[0] && (t[1] < 3 || ('3' === t[1] && '0' === t[2])))));
ng = function (t, e) {
  var n = e ? 2 : 1;
  return nb
    ? function (r, i) {
        var o = e3(arguments.length, 1) > n,
          s = V(r) ? r : ny(r),
          a = o ? e7(arguments, n) : [],
          u = o
            ? function () {
                eJ(s, this, a);
              }
            : s;
        return e ? t(u, i) : t(u);
      }
    : t;
};
var nm = _.setImmediate ? ng(nv, !1) : nv;
w(
  { global: !0, bind: !0, enumerable: !0, forced: _.setImmediate !== nm },
  { setImmediate: nm }
);
const nw = { recipe: {} },
  n_ = async function (t) {
    try {
      let e = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${t}`),
        n = await e.json();
      if (!e.ok) throw Error(`${n.message} (${n.status})`);
      let { recipe: r } = n.data;
      (nw.recipe = {
        id: r.id,
        title: r.title,
        publisher: r.publisher,
        sourceUrl: r.source_url,
        image: r.image_url,
        servings: r.servings,
        cookingTime: r.cooking_time,
        ingredients: r.ingredients,
      }),
        console.log(nw.recipe);
    } catch (t) {
      console.log(t);
    }
  };
var nE = {};
nE = new URL('icons.21bad73c.svg', import.meta.url).toString();
var nO = {};
!(function (t) {
  function e() {
    return Error('Parameters must be integer');
  }
  function n() {
    return Error('Invalid argument');
  }
  function r() {
    return Error('Division by Zero');
  }
  function i(t, i) {
    var s = l,
      a = h;
    let u = h;
    if (null != t) {
      if (void 0 !== i) {
        if ('bigint' == typeof t) s = t;
        else {
          if (isNaN(t)) throw n();
          if (0 != t % 1) throw e();
          s = BigInt(t);
        }
        if ('bigint' == typeof i) a = i;
        else {
          if (isNaN(i)) throw n();
          if (0 != i % 1) throw e();
          a = BigInt(i);
        }
        u = s * a;
      } else if ('object' == typeof t) {
        if ('d' in t && 'n' in t)
          (s = BigInt(t.n)), (a = BigInt(t.d)), 's' in t && (s *= BigInt(t.s));
        else if (0 in t) (s = BigInt(t[0])), 1 in t && (a = BigInt(t[1]));
        else if ('bigint' == typeof t) s = t;
        else throw n();
        u = s * a;
      } else if ('number' == typeof t) {
        if (isNaN(t)) throw n();
        if ((0 > t && ((u = -h), (t = -t)), 0 == t % 1)) s = BigInt(t);
        else if (0 < t) {
          i = 1;
          var c = 0,
            f = 1,
            p = 1;
          let e = 1;
          for (
            1 <= t && ((i = 10 ** Math.floor(1 + Math.log10(t))), (t /= i));
            1e7 >= f && 1e7 >= e;

          )
            if (t === (a = (c + p) / (f + e))) {
              1e7 >= f + e
                ? ((s = c + p), (a = f + e))
                : e > f
                ? ((s = p), (a = e))
                : ((s = c), (a = f));
              break;
            } else
              t > a ? ((c += p), (f += e)) : ((p += c), (e += f)),
                1e7 < f ? ((s = p), (a = e)) : ((s = c), (a = f));
          (s = BigInt(s) * BigInt(i)), (a = BigInt(a));
        }
      } else if ('string' == typeof t) {
        if (
          ((a = 0),
          (c = i = s = l),
          (f = p = h),
          null === (t = t.replace(/_/g, '').match(/\d+|./g)))
        )
          throw n();
        if (
          ('-' === t[a] ? ((u = -h), a++) : '+' === t[a] && a++,
          t.length === a + 1
            ? (i = o(t[a++], u))
            : '.' === t[a + 1] || '.' === t[a]
            ? ('.' !== t[a] && (s = o(t[a++], u)),
              (++a + 1 === t.length ||
                ('(' === t[a + 1] && ')' === t[a + 3]) ||
                ("'" === t[a + 1] && "'" === t[a + 3])) &&
                ((i = o(t[a], u)), (p = v ** BigInt(t[a].length)), a++),
              (('(' === t[a] && ')' === t[a + 2]) ||
                ("'" === t[a] && "'" === t[a + 2])) &&
                ((c = o(t[a + 1], u)),
                (f = v ** BigInt(t[a + 1].length) - h),
                (a += 3)))
            : '/' === t[a + 1] || ':' === t[a + 1]
            ? ((i = o(t[a], u)), (p = o(t[a + 2], h)), (a += 3))
            : '/' === t[a + 3] &&
              ' ' === t[a + 1] &&
              ((s = o(t[a], u)),
              (i = o(t[a + 2], u)),
              (p = o(t[a + 4], h)),
              (a += 5)),
          t.length <= a)
        )
          u = s = c + (a = p * f) * s + f * i;
        else throw n();
      } else if ('bigint' == typeof t) (u = s = t), (a = h);
      else throw n();
    }
    if (a === l) throw r();
    (g.s = u < l ? -h : h), (g.n = s < l ? -s : s), (g.d = a < l ? -a : a);
  }
  function o(t, e) {
    try {
      t = BigInt(t);
    } catch (t) {
      throw n();
    }
    return t * e;
  }
  function s(t) {
    return 'bigint' == typeof t ? t : Math.floor(t);
  }
  function a(t, e) {
    if (e === l) throw r();
    let n = Object.create(f.prototype);
    n.s = t < l ? -h : h;
    let i = c((t = t < l ? -t : t), e);
    return (n.n = t / i), (n.d = e / i), n;
  }
  function u(t) {
    let e = {},
      n = t,
      r = p,
      i = d - h;
    for (; i <= n; ) {
      for (; n % r === l; ) (n /= r), (e[r] = (e[r] || l) + h);
      i += h + p * r++;
    }
    return (
      n !== t ? 1 < n && (e[n] = (e[n] || l) + h) : (e[t] = (e[t] || l) + h), e
    );
  }
  function c(t, e) {
    if (!t) return e;
    if (!e) return t;
    for (;;) {
      if (!(t %= e)) return e;
      if (!(e %= t)) return t;
    }
  }
  function f(t, e) {
    if ((i(t, e), !(this instanceof f))) return a(g.s * g.n, g.d);
    (t = c(g.d, g.n)), (this.s = g.s), (this.n = g.n / t), (this.d = g.d / t);
  }
  'undefined' == typeof BigInt &&
    (BigInt = function (t) {
      if (isNaN(t)) throw Error('');
      return t;
    });
  let l = BigInt(0),
    h = BigInt(1),
    p = BigInt(2),
    d = BigInt(5),
    v = BigInt(10),
    g = { s: h, n: l, d: h };
  (f.prototype = {
    s: h,
    n: l,
    d: h,
    abs: function () {
      return a(this.n, this.d);
    },
    neg: function () {
      return a(-this.s * this.n, this.d);
    },
    add: function (t, e) {
      return (
        i(t, e), a(this.s * this.n * g.d + g.s * this.d * g.n, this.d * g.d)
      );
    },
    sub: function (t, e) {
      return (
        i(t, e), a(this.s * this.n * g.d - g.s * this.d * g.n, this.d * g.d)
      );
    },
    mul: function (t, e) {
      return i(t, e), a(this.s * g.s * this.n * g.n, this.d * g.d);
    },
    div: function (t, e) {
      return i(t, e), a(this.s * g.s * this.n * g.d, this.d * g.n);
    },
    clone: function () {
      return a(this.s * this.n, this.d);
    },
    mod: function (t, e) {
      if (void 0 === t) return a((this.s * this.n) % this.d, h);
      if ((i(t, e), l === g.n * this.d)) throw r();
      return a((this.s * g.d * this.n) % (g.n * this.d), g.d * this.d);
    },
    gcd: function (t, e) {
      return i(t, e), a(c(g.n, this.n) * c(g.d, this.d), g.d * this.d);
    },
    lcm: function (t, e) {
      return (
        i(t, e),
        g.n === l && this.n === l
          ? a(l, h)
          : a(g.n * this.n, c(g.n, this.n) * c(g.d, this.d))
      );
    },
    inverse: function () {
      return a(this.s * this.d, this.n);
    },
    pow: function (t, e) {
      if ((i(t, e), g.d === h))
        return g.s < l
          ? a((this.s * this.d) ** g.n, this.n ** g.n)
          : a((this.s * this.n) ** g.n, this.d ** g.n);
      if (this.s < l) return null;
      (t = u(this.n)), (e = u(this.d));
      let n = h,
        r = h;
      for (let e in t)
        if ('1' !== e) {
          if ('0' === e) {
            n = l;
            break;
          }
          if (((t[e] *= g.n), t[e] % g.d !== l)) return null;
          (t[e] /= g.d), (n *= BigInt(e) ** t[e]);
        }
      for (let t in e)
        if ('1' !== t) {
          if (((e[t] *= g.n), e[t] % g.d !== l)) return null;
          (e[t] /= g.d), (r *= BigInt(t) ** e[t]);
        }
      return g.s < l ? a(r, n) : a(n, r);
    },
    log: function (t, e) {
      if ((i(t, e), this.s <= l || g.s <= l)) return null;
      var n = {};
      t = u(g.n);
      let r = u(g.d);
      e = u(this.n);
      let o = u(this.d);
      for (var s in r) t[s] = (t[s] || l) - r[s];
      for (var f in o) e[f] = (e[f] || l) - o[f];
      for (var h in t) '1' !== h && (n[h] = !0);
      for (var p in e) '1' !== p && (n[p] = !0);
      for (let r in ((f = s = null), n))
        if (((h = t[r] || l), (n = e[r] || l), h === l)) {
          if (n !== l) return null;
        } else if (
          ((p = c(n, h)), (n /= p), (h /= p), null === s && null === f)
        )
          (s = n), (f = h);
        else if (n * f != s * h) return null;
      return null !== s && null !== f ? a(s, f) : null;
    },
    equals: function (t, e) {
      return i(t, e), this.s * this.n * g.d == g.s * g.n * this.d;
    },
    lt: function (t, e) {
      return i(t, e), this.s * this.n * g.d < g.s * g.n * this.d;
    },
    lte: function (t, e) {
      return i(t, e), this.s * this.n * g.d <= g.s * g.n * this.d;
    },
    gt: function (t, e) {
      return i(t, e), this.s * this.n * g.d > g.s * g.n * this.d;
    },
    gte: function (t, e) {
      return i(t, e), this.s * this.n * g.d >= g.s * g.n * this.d;
    },
    compare: function (t, e) {
      return (
        i(t, e),
        (l < (t = this.s * this.n * g.d - g.s * g.n * this.d)) - (t < l)
      );
    },
    ceil: function (t) {
      return (
        (t = v ** BigInt(t || 0)),
        a(
          s((this.s * t * this.n) / this.d) +
            ((t * this.n) % this.d > l && this.s >= l ? h : l),
          t
        )
      );
    },
    floor: function (t) {
      return (
        (t = v ** BigInt(t || 0)),
        a(
          s((this.s * t * this.n) / this.d) -
            ((t * this.n) % this.d > l && this.s < l ? h : l),
          t
        )
      );
    },
    round: function (t) {
      return (
        (t = v ** BigInt(t || 0)),
        a(
          s((this.s * t * this.n) / this.d) +
            this.s *
              ((this.s >= l ? h : l) + ((t * this.n) % this.d) * p > this.d
                ? h
                : l),
          t
        )
      );
    },
    roundTo: function (t, e) {
      i(t, e);
      var n = this.n * g.d;
      return (
        (e = n % (t = this.d * g.n)),
        (n = s(n / t)),
        e + e >= t && n++,
        a(this.s * n * g.n, g.d)
      );
    },
    divisible: function (t, e) {
      return i(t, e), !(!(g.n * this.d) || (this.n * g.d) % (g.n * this.d));
    },
    valueOf: function () {
      return Number(this.s * this.n) / Number(this.d);
    },
    toString: function (t) {
      let e = this.n,
        n = this.d;
      t = t || 15;
      t: {
        for (r = n; r % p === l; r /= p);
        for (; r % d === l; r /= d);
        if (r === h) r = l;
        else {
          for (var r, i = v % r, o = 1; i !== h; o++)
            if (((i = (i * v) % r), 2e3 < o)) {
              r = l;
              break t;
            }
          r = BigInt(o);
        }
      }
      t: {
        (i = h), (o = v);
        var a = r;
        let t = h;
        for (; a > l; o = (o * o) % n, a >>= h) a & h && (t = (t * o) % n);
        for (a = 0, o = t; 300 > a; a++) {
          if (i === o) {
            i = BigInt(a);
            break t;
          }
          (i = (i * v) % n), (o = (o * v) % n);
        }
        i = 0;
      }
      if (
        ((o = i),
        (i = (this.s < l ? '-' : '') + s(e / n)),
        (e = (e % n) * v) && (i += '.'),
        r)
      ) {
        for (t = o; t--; ) (i += s(e / n)), (e %= n), (e *= v);
        for (i += '(', t = r; t--; ) (i += s(e / n)), (e %= n), (e *= v);
        i += ')';
      } else for (; e && t--; ) (i += s(e / n)), (e %= n), (e *= v);
      return i;
    },
    toFraction: function (t) {
      let e = this.n,
        n = this.d,
        r = this.s < l ? '-' : '';
      if (n === h) r += e;
      else {
        let i = s(e / n);
        t && i > l && ((r += i), (r += ' '), (e %= n)), (r = r + e + '/' + n);
      }
      return r;
    },
    toLatex: function (t) {
      let e = this.n,
        n = this.d,
        r = this.s < l ? '-' : '';
      if (n === h) r += e;
      else {
        let i = s(e / n);
        t && i > l && ((r += i), (e %= n)),
          (r = r + '\\frac{' + e + '}{' + n + '}');
      }
      return r;
    },
    toContinued: function () {
      let t = this.n,
        e = this.d,
        n = [];
      do {
        n.push(s(t / e));
        let r = t % e;
        (t = e), (e = r);
      } while (t !== h);
      return n;
    },
    simplify: function (t) {
      t = BigInt((1 / (t || 0.001)) | 0);
      let e = this.abs(),
        n = e.toContinued();
      for (let i = 1; i < n.length; i++) {
        let o = a(n[i - 1], h);
        for (var r = i - 2; 0 <= r; r--) o = o.inverse().add(n[r]);
        if ((r = o.sub(e)).n * t < r.d) return o.mul(this.s);
      }
      return this;
    },
  }),
    'function' == typeof define && define.amd
      ? define([], function () {
          return f;
        })
      : (Object.defineProperty(f, '__esModule', { value: !0 }),
        (f.default = f),
        (f.Fraction = f),
        (nO = f));
})(0);
class nj {
  #t = document.querySelector('.recipe');
  #e;
  render(t) {
    this.#e = t;
    let e = this.#n();
    this.#r(), this.#t.insertAdjacentHTML('afterbegin', e);
  }
  #r() {
    this.#t.innerHTML = '';
  }
  renderSpinner = function () {
    let t = `
      <div class="spinner">
        <svg>
          <use href="${g(nE)}#icon-loader"></use>
        </svg>
      </div>
    `;
    this.#r(), this.#t.insertAdjacentHTML('afterbegin', t);
  };
  #n() {
    return `
    <figure class="recipe__fig">
      <img src="${this.#e.image}" alt="${this.#e.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.#e.title}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${g(nE)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this.#e.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${g(nE)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this.#e.servings
        }</span>
        <span class="recipe__info-text">servings</span>
        
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--decrease-servings">
            <svg>
              <use href="${g(nE)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${g(nE)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="recipe__user-generated">
        <svg>
          <use href="${g(nE)}#icon-user"></use>
        </svg>
      </div>
      
      <button class="btn--round">
        <svg>
          <use href="${g(nE)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this.#e.ingredients.map(t => this.#i(t)).join('')}
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          this.#e.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a class="btn--small recipe__btn" href="${
        this.#e.sourceUrl
      }" target="_blank">
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${g(nE)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
  }
  #i(t) {
    return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${g(nE)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
          t.quantity ? new (g(nO))(t.quantity).toFraction(!0) : ''
        }</div>
        <div class="recipe__description">
          <span class="recipe__unit">${t.unit}</span>
          ${t.description}
        </div>
      </li>
    `;
  }
}
var nS = new nj(),
  nI = (function (t) {
    var e,
      n = Object.prototype,
      r = n.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value;
        },
      o = 'function' == typeof Symbol ? Symbol : {},
      s = o.iterator || '@@iterator',
      a = o.asyncIterator || '@@asyncIterator',
      u = o.toStringTag || '@@toStringTag';
    function c(t, e, n) {
      return (
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      c({}, '');
    } catch (t) {
      c = function (t, e, n) {
        return (t[e] = n);
      };
    }
    function f(t, n, r, o) {
      var s,
        a,
        u,
        c,
        f = Object.create((n && n.prototype instanceof g ? n : g).prototype);
      return (
        i(f, '_invoke', {
          value:
            ((s = t),
            (a = r),
            (u = new L(o || [])),
            (c = h),
            function (t, n) {
              if (c === p) throw Error('Generator is already running');
              if (c === d) {
                if ('throw' === t) throw n;
                return { value: e, done: !0 };
              }
              for (u.method = t, u.arg = n; ; ) {
                var r = u.delegate;
                if (r) {
                  var i = (function t(n, r) {
                    var i = r.method,
                      o = n.iterator[i];
                    if (o === e)
                      return (
                        (r.delegate = null),
                        ('throw' === i &&
                          n.iterator.return &&
                          ((r.method = 'return'),
                          (r.arg = e),
                          t(n, r),
                          'throw' === r.method)) ||
                          ('return' !== i &&
                            ((r.method = 'throw'),
                            (r.arg = TypeError(
                              "The iterator does not provide a '" +
                                i +
                                "' method"
                            )))),
                        v
                      );
                    var s = l(o, n.iterator, r.arg);
                    if ('throw' === s.type)
                      return (
                        (r.method = 'throw'),
                        (r.arg = s.arg),
                        (r.delegate = null),
                        v
                      );
                    var a = s.arg;
                    return a
                      ? a.done
                        ? ((r[n.resultName] = a.value),
                          (r.next = n.nextLoc),
                          'return' !== r.method &&
                            ((r.method = 'next'), (r.arg = e)),
                          (r.delegate = null),
                          v)
                        : a
                      : ((r.method = 'throw'),
                        (r.arg = TypeError('iterator result is not an object')),
                        (r.delegate = null),
                        v);
                  })(r, u);
                  if (i) {
                    if (i === v) continue;
                    return i;
                  }
                }
                if ('next' === u.method) u.sent = u._sent = u.arg;
                else if ('throw' === u.method) {
                  if (c === h) throw ((c = d), u.arg);
                  u.dispatchException(u.arg);
                } else 'return' === u.method && u.abrupt('return', u.arg);
                c = p;
                var o = l(s, a, u);
                if ('normal' === o.type) {
                  if (((c = u.done ? d : 'suspendedYield'), o.arg === v))
                    continue;
                  return { value: o.arg, done: u.done };
                }
                'throw' === o.type &&
                  ((c = d), (u.method = 'throw'), (u.arg = o.arg));
              }
            }),
        }),
        f
      );
    }
    function l(t, e, n) {
      try {
        return { type: 'normal', arg: t.call(e, n) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    t.wrap = f;
    var h = 'suspendedStart',
      p = 'executing',
      d = 'completed',
      v = {};
    function g() {}
    function y() {}
    function b() {}
    var m = {};
    c(m, s, function () {
      return this;
    });
    var w = Object.getPrototypeOf,
      _ = w && w(w(k([])));
    _ && _ !== n && r.call(_, s) && (m = _);
    var E = (b.prototype = g.prototype = Object.create(m));
    function O(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        c(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function j(t, e) {
      var n;
      i(this, '_invoke', {
        value: function (i, o) {
          function s() {
            return new e(function (n, s) {
              !(function n(i, o, s, a) {
                var u = l(t[i], t, o);
                if ('throw' === u.type) a(u.arg);
                else {
                  var c = u.arg,
                    f = c.value;
                  return f && 'object' == typeof f && r.call(f, '__await')
                    ? e.resolve(f.__await).then(
                        function (t) {
                          n('next', t, s, a);
                        },
                        function (t) {
                          n('throw', t, s, a);
                        }
                      )
                    : e.resolve(f).then(
                        function (t) {
                          (c.value = t), s(c);
                        },
                        function (t) {
                          return n('throw', t, s, a);
                        }
                      );
                }
              })(i, o, n, s);
            });
          }
          return (n = n ? n.then(s, s) : s());
        },
      });
    }
    function S(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function I(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function L(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        t.forEach(S, this),
        this.reset(!0);
    }
    function k(t) {
      if (null != t) {
        var n = t[s];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var i = -1,
            o = function n() {
              for (; ++i < t.length; )
                if (r.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
              return (n.value = e), (n.done = !0), n;
            };
          return (o.next = o);
        }
      }
      throw TypeError(typeof t + ' is not iterable');
    }
    return (
      (y.prototype = b),
      i(E, 'constructor', { value: b, configurable: !0 }),
      i(b, 'constructor', { value: y, configurable: !0 }),
      (y.displayName = c(b, u, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return (
          !!e && (e === y || 'GeneratorFunction' === (e.displayName || e.name))
        );
      }),
      (t.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, b)
            : ((t.__proto__ = b), c(t, u, 'GeneratorFunction')),
          (t.prototype = Object.create(E)),
          t
        );
      }),
      (t.awrap = function (t) {
        return { __await: t };
      }),
      O(j.prototype),
      c(j.prototype, a, function () {
        return this;
      }),
      (t.AsyncIterator = j),
      (t.async = function (e, n, r, i, o) {
        void 0 === o && (o = Promise);
        var s = new j(f(e, n, r, i), o);
        return t.isGeneratorFunction(n)
          ? s
          : s.next().then(function (t) {
              return t.done ? t.value : s.next();
            });
      }),
      O(E),
      c(E, u, 'Generator'),
      c(E, s, function () {
        return this;
      }),
      c(E, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (t) {
        var e = Object(t),
          n = [];
        for (var r in e) n.push(r);
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in e) return (t.value = r), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (t.values = k),
      (L.prototype = {
        constructor: L,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(I),
            !t)
          )
            for (var n in this)
              't' === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function i(r, i) {
            return (
              (a.type = 'throw'),
              (a.arg = t),
              (n.next = r),
              i && ((n.method = 'next'), (n.arg = e)),
              !!i
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var s = this.tryEntries[o],
              a = s.completion;
            if ('root' === s.tryLoc) return i('end');
            if (s.tryLoc <= this.prev) {
              var u = r.call(s, 'catchLoc'),
                c = r.call(s, 'finallyLoc');
              if (u && c) {
                if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                if (this.prev < s.finallyLoc) return i(s.finallyLoc);
              } else if (u) {
                if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
              } else if (c) {
                if (this.prev < s.finallyLoc) return i(s.finallyLoc);
              } else throw Error('try statement without catch or finally');
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];
            if (
              i.tryLoc <= this.prev &&
              r.call(i, 'finallyLoc') &&
              this.prev < i.finallyLoc
            ) {
              var o = i;
              break;
            }
          }
          o &&
            ('break' === t || 'continue' === t) &&
            o.tryLoc <= e &&
            e <= o.finallyLoc &&
            (o = null);
          var s = o ? o.completion : {};
          return ((s.type = t), (s.arg = e), o)
            ? ((this.method = 'next'), (this.next = o.finallyLoc), v)
            : this.complete(s);
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t)
              return this.complete(n.completion, n.afterLoc), I(n), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ('throw' === r.type) {
                var i = r.arg;
                I(n);
              }
              return i;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: k(t), resultName: n, nextLoc: r }),
            'next' === this.method && (this.arg = e),
            v
          );
        },
      }),
      t
    );
  })({});
try {
  regeneratorRuntime = nI;
} catch (t) {
  'object' == typeof globalThis
    ? (globalThis.regeneratorRuntime = nI)
    : Function('r', 'regeneratorRuntime = r')(nI);
}
const nL = async function () {
  try {
    let t = window.location.hash.slice(1);
    if ((console.log(t), !t)) return;
    nS.renderSpinner(), await n_(t), nS.render(nw.recipe);
  } catch (t) {
    alert(t);
  }
};
['hashchange', 'load'].forEach(t => window.addEventListener(t, nL));
//# sourceMappingURL=index.b7aacd7c.js.map
