! function (e, t, z, i) {
  "use strict";
  z.defineProperty(e, "__esModule", {
    value: !0
  });
  var L = function (e, t) {
      if (i.isArray(e)) return e;
      if (Symbol.iterator in z(e)) return function (e, t) {
        var n = [],
          o = !0,
          a = !1,
          r = void 0;
        try {
          for (var i, u = e[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0);
        } catch (e) {
          a = !0, r = e
        } finally {
          try {
            !o && u.return && u.return()
          } finally {
            if (a) throw r
          }
        }
        return n
      }(e, t);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    n = function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e
    };

  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), z.defineProperty(e, o.key, o)
    }
  }
  var a, r, B = t("../../npm/@tarojs/taro-weapp/index.js"),
    D = u(B),
    q = u(t("../../hooks/loadingMore/index.js")),
    N = u(t("../../services/api.js")),
    R = u(t("../../utils/toast.js"));

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }
  var c = (function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = z.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (z.setPrototypeOf ? z.setPrototypeOf(e, t) : e.__proto__ = t)
  }(p, D.default.Component), n(p, [{
    key: "_constructor",
    value: function (e) {
      (function e(t, n, o) {
        null === t && (t = Function.prototype);
        var a = z.getOwnPropertyDescriptor(t, n);
        if (void 0 === a) {
          var r = z.getPrototypeOf(t);
          return null === r ? void 0 : e(r, n, o)
        }
        if ("value" in a) return a.value;
        var i = a.get;
        return void 0 !== i ? i.call(o) : void 0
      })(p.prototype.__proto__ || z.getPrototypeOf(p.prototype), "_constructor", this).call(this, e), this.$$refs = new D.default.RefsArray
    }
  }, {
    key: "_createData",
    value: function (e, t, n) {
      this.__state = e || this.state || {}, this.__props = t || this.props || {};
      var o = this.$prefix,
        a = (0, B.genCompid)(o + "$compid__0"),
        r = L(a, 2),
        i = r[0],
        u = r[1],
        s = (0, B.genCompid)(o + "$compid__1"),
        c = L(s, 2),
        p = c[0],
        l = c[1],
        f = (0, B.genCompid)(o + "$compid__2"),
        d = L(f, 2),
        m = d[0],
        _ = d[1],
        y = (0, B.genCompid)(o + "$compid__3"),
        g = L(y, 2),
        v = g[0],
        h = g[1],
        $ = (0, B.genCompid)(o + "$compid__4"),
        b = L($, 2),
        x = b[0],
        w = b[1],
        C = (0, B.genCompid)(o + "$compid__5"),
        F = L(C, 2),
        T = F[0],
        M = F[1],
        j = (0, B.useState)([]),
        k = L(j, 2),
        P = k[0],
        O = k[1];
      (0, B.useEffect)(function () {
        N.default.getHomeImages({
          type: 0
        }).then(function (e) {
          0 === e.code && O(e.data || [])
        })
      }, []);
      var I = (0, q.default)(N.default.getNewsList, {
          TypeId: "481ec006-1228-479a-bbfd-edf59fc95cb4"
        }, null, !!D.default.$articleClicked),
        S = I.list,
        A = I.noData,
        E = I.loadingMore;
      return this.anonymousFunc0 = function () {
        return D.default.navigateTo({
          url: "/pages/evaluate/index?id=0f52763b56684e51af6e93b34562f38f&title=睡眠即时测评"
        })
      }, this.anonymousFunc1 = function () {
        return D.default.navigateTo({
          url: "/pages/evaluate/index?id=353fd30709fe4f12a4b32cddaeeccbcc&title=相关状况测评"
        })
      }, this.anonymousFunc2 = function () {
        return D.default.navigateTo({
          url: "/pages/starIndex/starIndex"
        })
      }, this.anonymousFunc3 = function () {
        return R.default.indev()
      }, this.anonymousFunc4 = function () {
        return D.default.navigateTo({
          url: "/pages/doctorList/index"
        })
      }, B.propsManager.set({
        prefixClass: "icon",
        size: "20",
        value: "ceping1"
      }, u, i), B.propsManager.set({
        prefixClass: "icon",
        size: "20",
        value: "guanlian"
      }, l, p), B.propsManager.set({
        prefixClass: "icon",
        size: "20",
        value: "chuimian"
      }, _, m), B.propsManager.set({
        prefixClass: "icon",
        size: "20",
        value: "qiye"
      }, h, v), B.propsManager.set({
        className: "nopd",
        dataSource: S
      }, w, x), B.propsManager.set({
        loading: E,
        nodata: A
      }, M, T), z.assign(this.__state, {
        $compid__0: u,
        $compid__1: l,
        $compid__2: _,
        $compid__3: h,
        $compid__4: w,
        $compid__5: M,
        banner: P,
        docImg: "/assets/images/doctor.jpg"
      }), this.__state
    }
  }, {
    key: "anonymousFunc0",
    value: function () {}
  }, {
    key: "anonymousFunc1",
    value: function () {}
  }, {
    key: "anonymousFunc2",
    value: function () {}
  }, {
    key: "anonymousFunc3",
    value: function () {}
  }, {
    key: "anonymousFunc4",
    value: function () {}
  }]), r = a = p, a.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4"], a.$$componentPath = "pages/home/index", r);

  function p() {
    var e, t, n;
    ! function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, p);
    for (var o = arguments.length, a = i(o), r = 0; r < o; r++) a[r] = arguments[r];
    return (t = n = s(this, (e = p.__proto__ || z.getPrototypeOf(p)).call.apply(e, [this].concat(a)))).config = {
      navigationBarTitleText: "点亮心灵"
    }, n.$usedState = ["$compid__0", "$compid__1", "$compid__2", "$compid__3", "$compid__4", "$compid__5", "banner", "docImg"], n.customComponents = ["AtIcon", "ArticleList", "LoadBottom"], s(n, t)
  }
  c.config = {
    navigationBarTitleText: "点亮心灵"
  }, e.default = c, Component(t("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(c, !0))
}(exports, require, Object, Array);