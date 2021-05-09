! function (t, e, u, a) {
  "use strict";
  u.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (t, e, o) {
    return e && n(t.prototype, e), o && n(t, o), t
  };

  function n(t, e) {
    for (var o = 0; o < e.length; o++) {
      var n = e[o];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), u.defineProperty(t, n.key, n)
    }
  }
  var r, i, s = e("../../npm/@tarojs/taro-weapp/index.js"),
    f = c(s),
    p = c(e("../../utils/auth.js"));

  function c(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function l(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }
  var d = (function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = u.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (u.setPrototypeOf ? u.setPrototypeOf(t, e) : t.__proto__ = e)
  }(h, f.default.Component), o(h, [{
    key: "_constructor",
    value: function (t) {
      (function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = u.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
          var i = u.getPrototypeOf(e);
          return null === i ? void 0 : t(i, o, n)
        }
        if ("value" in r) return r.value;
        var a = r.get;
        return void 0 !== a ? a.call(n) : void 0
      })(h.prototype.__proto__ || u.getPrototypeOf(h.prototype), "_constructor", this).call(this, t), this.$$refs = new f.default.RefsArray
    }
  }, {
    key: "_createData",
    value: function (t, e, o) {
      return this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix, (0, s.useDidShow)(function () {
        f.default.showLoading({
          title: "加载中"
        })
      }), (0, s.useDidHide)(function () {
        f.default.hideLoading()
      }), (0, s.useEffect)(function () {
        p.default.checkLogin(!0)
      }, []), u.assign(this.__state, {}), this.__state
    }
  }]), i = r = h, r.$$events = [], r.$$componentPath = "pages/index/index", i);

  function h() {
    var t, e, o;
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, h);
    for (var n = arguments.length, r = a(n), i = 0; i < n; i++) r[i] = arguments[i];
    return (e = o = l(this, (t = h.__proto__ || u.getPrototypeOf(h)).call.apply(t, [this].concat(r)))).$usedState = [], o.customComponents = [], l(o, e)
  }
  t.default = d, Component(e("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(d, !0))
}(exports, require, Object, Array);