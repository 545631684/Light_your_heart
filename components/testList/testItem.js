! function (t, e, c, i) {
  "use strict";
  c.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (t, e, o) {
    return e && n(t.prototype, e), o && n(t, o), t
  };

  function n(t, e) {
    for (var o = 0; o < e.length; o++) {
      var n = e[o];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), c.defineProperty(t, n.key, n)
    }
  }
  var r, a, s, u = e("../../npm/@tarojs/taro-weapp/index.js"),
    p = (s = u) && s.__esModule ? s : {
      default: s
    };

  function l(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }
  var f = (function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = c.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (c.setPrototypeOf ? c.setPrototypeOf(t, e) : t.__proto__ = e)
  }(y, p.default.Component), o(y, [{
    key: "_constructor",
    value: function (t) {
      (function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = c.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
          var a = c.getPrototypeOf(e);
          return null === a ? void 0 : t(a, o, n)
        }
        if ("value" in r) return r.value;
        var i = r.get;
        return void 0 !== i ? i.call(n) : void 0
      })(y.prototype.__proto__ || c.getPrototypeOf(y.prototype), "_constructor", this).call(this, t), this.$$refs = new p.default.RefsArray
    }
  }, {
    key: "_createData",
    value: function (t, e, o) {
      this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
      var n = this.__props,
        r = n.fid,
        a = n.title,
        i = (n.desc, n.cover),
        s = n.count,
        u = n.tested;
      return this.anonymousFunc0 = function () {
        p.default.navigateTo({
          url: "/pages/evaluateDesc/index?id=" + r + "&title=" + a
        })
      }, c.assign(this.__state, {
        cover: i,
        title: a,
        tested: u,
        count: s
      }), this.__state
    }
  }, {
    key: "anonymousFunc0",
    value: function () {}
  }]), a = r = y, r.$$events = ["anonymousFunc0"], r.$$componentPath = "components/testList/testItem", a);

  function y() {
    var t, e, o;
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, y);
    for (var n = arguments.length, r = i(n), a = 0; a < n; a++) r[a] = arguments[a];
    return (e = o = l(this, (t = y.__proto__ || c.getPrototypeOf(y)).call.apply(t, [this].concat(r)))).$usedState = ["cover", "title", "tested", "count", "fid", "desc"], o.customComponents = [], l(o, e)
  }
  t.default = f, Component(e("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(f))
}(exports, require, Object, Array);