! function (t, e, $, i) {
  "use strict";
  $.defineProperty(t, "__esModule", {
    value: !0
  });
  var x = function (t, e) {
      if (i.isArray(t)) return t;
      if (Symbol.iterator in $(t)) return function (t, e) {
        var o = [],
          r = !0,
          n = !1,
          a = void 0;
        try {
          for (var i, s = t[Symbol.iterator](); !(r = (i = s.next()).done) && (o.push(i.value), !e || o.length !== e); r = !0);
        } catch (t) {
          n = !0, a = t
        } finally {
          try {
            !r && s.return && s.return()
          } finally {
            if (n) throw a
          }
        }
        return o
      }(t, e);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    o = function (t, e, o) {
      return e && r(t.prototype, e), o && r(t, o), t
    };

  function r(t, e) {
    for (var o = 0; o < e.length; o++) {
      var r = e[o];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), $.defineProperty(t, r.key, r)
    }
  }
  var n, a, j = e("../../npm/@tarojs/taro-weapp/index.js"),
    P = s(j),
    S = s(e("../../hooks/loadingMore/index.js")),
    C = e("../../store/global_data.js"),
    O = s(e("../../services/api.js"));

  function s(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function u(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }
  var p = (function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = $.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && ($.setPrototypeOf ? $.setPrototypeOf(t, e) : t.__proto__ = e)
  }(l, P.default.Component), o(l, [{
    key: "_constructor",
    value: function (t) {
      (function t(e, o, r) {
        null === e && (e = Function.prototype);
        var n = $.getOwnPropertyDescriptor(e, o);
        if (void 0 === n) {
          var a = $.getPrototypeOf(e);
          return null === a ? void 0 : t(a, o, r)
        }
        if ("value" in n) return n.value;
        var i = n.get;
        return void 0 !== i ? i.call(r) : void 0
      })(l.prototype.__proto__ || $.getPrototypeOf(l.prototype), "_constructor", this).call(this, t), this.$$refs = new P.default.RefsArray
    }
  }, {
    key: "_createData",
    value: function (t, e, o) {
      this.__state = t || this.state || {}, this.__props = e || this.props || {};
      var r = this.$prefix,
        n = (0, j.genCompid)(r + "$compid__14"),
        a = x(n, 2),
        i = a[0],
        s = a[1],
        u = (0, j.genCompid)(r + "$compid__15"),
        p = x(u, 2),
        l = p[0],
        c = p[1],
        f = (0, j.useRouter)().params,
        d = f.id,
        _ = f.title,
        y = void 0 === _ ? "睡眠即时测评" : _,
        v = P.default.getStorageSync("userId");
      (0, j.useEffect)(function () {
        P.default.setNavigationBarTitle({
          title: y
        })
      }, [y]);
      var m = (0, S.default)(O.default.getCourses, {
          cateId: d,
          userId: v
        }, null, !1),
        h = m.list,
        g = m.noData,
        b = m.loadingMore,
        w = (0, j.internal_inline_style)({
          paddingBottom: (0, C.getKey)("isX") ? "20px" : "0px"
        });
      return j.propsManager.set({
        type: y,
        dataSource: h
      }, s, i), j.propsManager.set({
        loading: b,
        nodata: g
      }, c, l), $.assign(this.__state, {
        anonymousState__temp: w,
        $compid__14: s,
        $compid__15: c
      }), this.__state
    }
  }]), a = n = l, n.$$events = [], n.$$componentPath = "pages/evaluate/index", a);

  function l() {
    var t, e, o;
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, l);
    for (var r = arguments.length, n = i(r), a = 0; a < r; a++) n[a] = arguments[a];
    return (e = o = u(this, (t = l.__proto__ || $.getPrototypeOf(l)).call.apply(t, [this].concat(n)))).$usedState = ["anonymousState__temp", "$compid__14", "$compid__15"], o.customComponents = ["TestList", "LoadBottom"], u(o, e)
  }
  t.default = p, Component(e("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(p, !0))
}(exports, require, Object, Array);