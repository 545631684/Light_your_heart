! function (t, e, v, i) {
  "use strict";
  v.defineProperty(t, "__esModule", {
    value: !0
  });
  var h = function (t, e) {
      if (i.isArray(t)) return t;
      if (Symbol.iterator in v(t)) return function (t, e) {
        var n = [],
          r = !0,
          o = !1,
          a = void 0;
        try {
          for (var i, u = t[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
        } catch (t) {
          o = !0, a = t
        } finally {
          try {
            !r && u.return && u.return()
          } finally {
            if (o) throw a
          }
        }
        return n
      }(t, e);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    n = function (t, e, n) {
      return e && r(t.prototype, e), n && r(t, n), t
    };

  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), v.defineProperty(t, r.key, r)
    }
  }
  var o, a, _ = e("../../npm/@tarojs/taro-weapp/index.js"),
    m = u(_),
    g = u(e("../../hooks/showHide/index.js")),
    b = u(e("../../services/api.js"));

  function u(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }
  var l = (function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = v.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (v.setPrototypeOf ? v.setPrototypeOf(t, e) : t.__proto__ = e)
  }(c, m.default.Component), n(c, [{
    key: "_constructor",
    value: function (t) {
      (function t(e, n, r) {
        null === e && (e = Function.prototype);
        var o = v.getOwnPropertyDescriptor(e, n);
        if (void 0 === o) {
          var a = v.getPrototypeOf(e);
          return null === a ? void 0 : t(a, n, r)
        }
        if ("value" in o) return o.value;
        var i = o.get;
        return void 0 !== i ? i.call(r) : void 0
      })(c.prototype.__proto__ || v.getPrototypeOf(c.prototype), "_constructor", this).call(this, t), this.$$refs = new m.default.RefsArray
    }
  }, {
    key: "_createData",
    value: function (t, e, n) {
      this.__state = t || this.state || {}, this.__props = e || this.props || {};
      var r = this.$prefix,
        o = (0, _.genCompid)(r + "$compid__16"),
        a = h(o, 2),
        i = a[0],
        u = a[1],
        s = (0, _.useRouter)().params,
        l = s.id,
        c = s.title,
        p = (0, _.useState)({}),
        f = h(p, 2),
        d = f[0],
        y = f[1];
      return (0, _.useEffect)(function () {
        m.default.setNavigationBarTitle({
          title: c
        })
      }, [c]), (0, g.default)(function () {
        b.default.getCourseInfo({
          courseId: l
        }).then(function (t) {
          0 === t.code && y(t.data || {})
        })
      }), this.anonymousFunc0 = function () {
        return m.default.navigateTo({
          url: "/pages/evaluateList/index?id=" + d.FId + "&title=" + d.CourseName
        })
      }, d.FId && _.propsManager.set({
        className: "btn-block",
        type: "primary",
        onClick: this.anonymousFunc0
      }, u, i), v.assign(this.__state, {
        $compid__16: u,
        detail: d
      }), this.__state
    }
  }, {
    key: "anonymousFunc0",
    value: function () {}
  }]), a = o = c, o.$$events = [], o.$$componentPath = "pages/evaluateDesc/index", a);

  function c() {
    var t, e, n;
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, c);
    for (var r = arguments.length, o = i(r), a = 0; a < r; a++) o[a] = arguments[a];
    return (e = n = s(this, (t = c.__proto__ || v.getPrototypeOf(c)).call.apply(t, [this].concat(o)))).$usedState = ["$compid__16", "detail"], n.customComponents = ["AtButton"], s(n, e)
  }
  t.default = l, Component(e("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(l, !0))
}(exports, require, Object, Array);