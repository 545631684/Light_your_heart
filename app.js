! function (e, t, s, r) {
  "use strict";
  s.defineProperty(e, "__esModule", {
    value: !0
  });
  var a = function (e, t, a) {
    return t && n(e.prototype, t), a && n(e, a), e
  };

  function n(e, t) {
    for (var a = 0; a < t.length; a++) {
      var n = t[a];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), s.defineProperty(e, n.key, n)
    }
  }
  t("./npm/@tarojs/async-await/index.js");
  var o, i = t("./npm/@tarojs/taro-weapp/index.js"),
    l = (o = i) && o.__esModule ? o : {
      default: o
    },
    p = t("./store/global_data.js");

  function g(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }
  var c = (function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = s.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (s.setPrototypeOf ? s.setPrototypeOf(e, t) : e.__proto__ = t)
  }(d, i.Component), a(d, [{
    key: "componentWillMount",
    value: function () {
      l.default.getSystemInfo({
        success: function (e) {
          console.log(e), (0, p.setKey)("statusBarHeight", e.statusBarHeight), e.model && -1 < e.model.indexOf("iPhone X") && (0, p.setKey)("isX", !0)
        }
      })
    }
  }, {
    key: "_createData",
    value: function () {}
  }]), d);

  function d() {
    var e, t, a;
    ! function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, d);
    for (var n = arguments.length, o = r(n), i = 0; i < n; i++) o[i] = arguments[i];
    return (t = a = g(this, (e = d.__proto__ || s.getPrototypeOf(d)).call.apply(e, [this].concat(o)))).config = {
      pages: ["pages/index/index", "pages/home/index", "pages/doctorList/index", "pages/doctorDetail/index", "pages/evaluateMenu/index", "pages/evaluate/index", "pages/evaluateDesc/index", "pages/evaluateList/index", "pages/evaluateResult/index", "pages/evaluateDetail/index", "pages/hypnosisMenu/index", "pages/health/index", "pages/articleDetail/index", "pages/my/index", "pages/myDetail/index", "pages/myEvaluate/index", "pages/myCollect/index", "pages/myConsult/index", "pages/myDoctor/index", "pages/setting/index", "pages/feedback/index", "pages/login/index", "pages/bind/index"],
      window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "",
        navigationBarTextStyle: "black"
      },
      tabBar: {
        backgroundColor: "#fff",
        color: "#999",
        selectedColor: "#3697ff",
        borderStyle: "white",
        list: [{
          pagePath: "pages/home/index",
          text: "首页",
          iconPath: "assets/images/home2.png",
          selectedIconPath: "assets/images/home2-on.png"
        }, {
          pagePath: "pages/health/index",
          text: "健康之路",
          iconPath: "assets/images/health2.png",
          selectedIconPath: "assets/images/health2-on.png"
        }, {
          pagePath: "pages/my/index",
          text: "我的",
          iconPath: "assets/images/my2.png",
          selectedIconPath: "assets/images/my2-on.png"
        }]
      }
    }, g(a, t)
  }
  e.default = c, App(t("./npm/@tarojs/taro-weapp/index.js").default.createApp(c)), l.default.initPxTransform({
    designWidth: 750,
    deviceRatio: {
      640: 1.17,
      750: 1,
      828: .905
    }
  })
}(exports, require, Object, Array);