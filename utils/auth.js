! function (e, t) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var l = n(t("../npm/@tarojs/taro-weapp/index.js")),
    d = n(t("../npm/qs/lib/index.js")),
    u = t("../store/global_data.js"),
    o = n(t("../services/api.js"));

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  e.default = {
    checkLogin: function (e) {
      var s = 0 < arguments.length && void 0 !== e && e,
        r = this;
      l.default.getStorageSync("token") ? this.loginJump() : l.default.login({
        success: function (e) {
          e.code ? (console.log(e), o.default.login({
            code: e.code
          }).then(function (e) {
            console.log(e);
            var t, o, n, d, a, i = (e.data || {}).wxinfo;
            i.openid && (l.default.setStorageSync("openid", i.openid), l.default.setStorageSync("session_key", i.session_key)), 0 === e.code ? s && (l.default.showLoading({
              title: "自动登录..."
            }), o = (t = e.data || {}).accessToken, d = void 0 === (n = t.member) ? {} : n, l.default.setStorageSync("token", o), l.default.setStorageSync("userId", d.UserId), (0, u.setKey)("member", d), r.loginJump(), l.default.hideLoading()) : ("pages/index/index" !== (a = l.default.getCurrentPages().pop()).route && (l.default.setStorageSync("redictUrl", "/" + a.route), l.default.setStorageSync("redictOpt", a.options)), l.default.redirectTo({
              url: "/pages/login/index?noCheck=1"
            }))
          })) : console.log("登录失败！" + e.errMsg)
        }
      })
    },
    loginJump: function () {
      if (console.log(111), 1 === l.default.getCurrentPages().length && "pages/index/index" === l.default.getCurrentPages().pop().route) return console.log(222), void l.default.switchTab({
        url: "/pages/starIndex/starIndex"
      });
      var e = l.default.getStorageSync("redictUrl") || "/pages/starIndex/starIndex"; - 1 < ["/pages/login/index", "/pages/bind/index", "/pages/index/index"].indexOf(e) && (e = "/pages/starIndex/starIndex");
      var t = l.default.getStorageSync("redictOpt"),
        o = d.default.stringify(t),
        n = e + (o ? "?" + o : "");
      console.log("jump to:" + n), -1 === ["/pages/starIndex/starIndex", "/pages/health/index", "/pages/my/index"].indexOf(e) ? l.default.redirectTo({
        url: n
      }) : l.default.redirectTo({
        url: n
      })
    },
    checkToken: function () {
      l.default.getStorageSync("token") || l.default.login({
        success: function (e) {
          e.code ? o.default.login({
            code: e.code
          }).then(function (e) {
            var t, o, n, d, a, i = (e.data || {}).wxinfo;
            i.openid && (l.default.setStorageSync("openid", i.openid), l.default.setStorageSync("session_key", i.session_key)), 0 === e.code ? (l.default.showLoading({
              title: "自动登录..."
            }), o = (t = e.data || {}).accessToken, d = void 0 === (n = t.member) ? {} : n, l.default.setStorageSync("token", o), l.default.setStorageSync("userId", d.UserId), (0, u.setKey)("member", d), l.default.hideLoading()) : ("pages/index/index" !== (a = l.default.getCurrentPages().pop()).route && (l.default.setStorageSync("redictUrl", "/" + a.route), l.default.setStorageSync("redictOpt", a.options)), l.default.redirectTo({
              url: "/pages/login/index"
            }))
          }) : console.log("登录失败！" + e.errMsg)
        }
      })
    }
  }
}(exports, require);