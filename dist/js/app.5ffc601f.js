(function () {
  "use strict";
  var n = {
      8235: function (n, t, o) {
        var e = o(5130),
          r = o(6768);
        const c = { id: "app" };
        function a(n, t, o, e, a, i) {
          const s = (0, r.g2)("NavBarComponent"),
            u = (0, r.g2)("BodyComponent"),
            f = (0, r.g2)("FooterComponent");
          return (
            (0, r.uX)(),
            (0, r.CE)("div", c, [(0, r.bF)(s), (0, r.bF)(u), (0, r.bF)(f)])
          );
        }
        const i = (n) => (
            (0, r.Qi)("data-v-70b949c2"), (n = n()), (0, r.jt)(), n
          ),
          s = { class: "navbar" },
          u = i(() => (0, r.Lk)("h1", { class: "text" }, "NavBar", -1)),
          f = [u];
        function d(n, t, o, e, c, a) {
          return (0, r.uX)(), (0, r.CE)("div", s, f);
        }
        var p = { name: "NavbarComponent" },
          v = o(1241);
        const l = (0, v.A)(p, [
          ["render", d],
          ["__scopeId", "data-v-70b949c2"],
        ]);
        var m = l;
        const b = (n) => (
            (0, r.Qi)("data-v-fe0c50ac"), (n = n()), (0, r.jt)(), n
          ),
          C = { class: "body" },
          h = b(() => (0, r.Lk)("h1", { class: "text" }, "Body", -1));
        function y(n, t, o, e, c, a) {
          const i = (0, r.g2)("section-one-component"),
            s = (0, r.g2)("section-two-component");
          return (
            (0, r.uX)(), (0, r.CE)("div", C, [h, (0, r.bF)(i), (0, r.bF)(s)])
          );
        }
        const _ = (n) => (
            (0, r.Qi)("data-v-475acd1f"), (n = n()), (0, r.jt)(), n
          ),
          g = { class: "section" },
          O = _(() =>
            (0, r.Lk)("h2", { class: "section-title text" }, "Sección 1", -1)
          ),
          k = _(() =>
            (0, r.Lk)(
              "p",
              { class: "text" },
              "Este es el contenido de la sección 1.",
              -1
            )
          ),
          x = [O, k];
        function j(n, t, o, e, c, a) {
          return (0, r.uX)(), (0, r.CE)("div", g, x);
        }
        var w = { name: "SectionOneComponent" };
        const E = (0, v.A)(w, [
          ["render", j],
          ["__scopeId", "data-v-475acd1f"],
        ]);
        var F = E;
        const A = (n) => (
            (0, r.Qi)("data-v-3f203a64"), (n = n()), (0, r.jt)(), n
          ),
          B = { class: "section" },
          L = A(() =>
            (0, r.Lk)("h2", { class: "section-title text" }, "Sección 2", -1)
          ),
          S = A(() =>
            (0, r.Lk)(
              "p",
              { class: "text" },
              "Este es el contenido de la sección 2.",
              -1
            )
          ),
          X = [L, S];
        function I(n, t, o, e, c, a) {
          return (0, r.uX)(), (0, r.CE)("div", B, X);
        }
        var Q = { name: "SectionTwoComponent" };
        const N = (0, v.A)(Q, [
          ["render", I],
          ["__scopeId", "data-v-3f203a64"],
        ]);
        var T = N,
          P = {
            name: "BodyComponent",
            components: { SectionOneComponent: F, SectionTwoComponent: T },
          };
        const M = (0, v.A)(P, [
          ["render", y],
          ["__scopeId", "data-v-fe0c50ac"],
        ]);
        var q = M;
        const z = (n) => (
            (0, r.Qi)("data-v-6c39bb7c"), (n = n()), (0, r.jt)(), n
          ),
          D = { class: "footer" },
          G = z(() => (0, r.Lk)("h1", { class: "text" }, "Footer", -1)),
          H = [G];
        function J(n, t, o, e, c, a) {
          return (0, r.uX)(), (0, r.CE)("div", D, H);
        }
        var K = { name: "FooterComponent" };
        const R = (0, v.A)(K, [
          ["render", J],
          ["__scopeId", "data-v-6c39bb7c"],
        ]);
        var U = R,
          V = {
            name: "App",
            components: {
              NavBarComponent: m,
              BodyComponent: q,
              FooterComponent: U,
            },
          };
        const W = (0, v.A)(V, [["render", a]]);
        var Y = W;
        (0, e.Ef)(Y).mount("#app");
      },
    },
    t = {};
  function o(e) {
    var r = t[e];
    if (void 0 !== r) return r.exports;
    var c = (t[e] = { exports: {} });
    return n[e].call(c.exports, c, c.exports, o), c.exports;
  }
  (o.m = n),
    (function () {
      var n = [];
      o.O = function (t, e, r, c) {
        if (!e) {
          var a = 1 / 0;
          for (f = 0; f < n.length; f++) {
            (e = n[f][0]), (r = n[f][1]), (c = n[f][2]);
            for (var i = !0, s = 0; s < e.length; s++)
              (!1 & c || a >= c) &&
              Object.keys(o.O).every(function (n) {
                return o.O[n](e[s]);
              })
                ? e.splice(s--, 1)
                : ((i = !1), c < a && (a = c));
            if (i) {
              n.splice(f--, 1);
              var u = r();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        c = c || 0;
        for (var f = n.length; f > 0 && n[f - 1][2] > c; f--) n[f] = n[f - 1];
        n[f] = [e, r, c];
      };
    })(),
    (function () {
      o.n = function (n) {
        var t =
          n && n.__esModule
            ? function () {
                return n["default"];
              }
            : function () {
                return n;
              };
        return o.d(t, { a: t }), t;
      };
    })(),
    (function () {
      o.d = function (n, t) {
        for (var e in t)
          o.o(t, e) &&
            !o.o(n, e) &&
            Object.defineProperty(n, e, { enumerable: !0, get: t[e] });
      };
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (n) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      };
    })(),
    (function () {
      var n = { 524: 0 };
      o.O.j = function (t) {
        return 0 === n[t];
      };
      var t = function (t, e) {
          var r,
            c,
            a = e[0],
            i = e[1],
            s = e[2],
            u = 0;
          if (
            a.some(function (t) {
              return 0 !== n[t];
            })
          ) {
            for (r in i) o.o(i, r) && (o.m[r] = i[r]);
            if (s) var f = s(o);
          }
          for (t && t(e); u < a.length; u++)
            (c = a[u]), o.o(n, c) && n[c] && n[c][0](), (n[c] = 0);
          return o.O(f);
        },
        e = (self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []);
      e.forEach(t.bind(null, 0)), (e.push = t.bind(null, e.push.bind(e)));
    })();
  var e = o.O(void 0, [504], function () {
    return o(8235);
  });
  e = o.O(e);
})();
//# sourceMappingURL=app.5ffc601f.js.map
