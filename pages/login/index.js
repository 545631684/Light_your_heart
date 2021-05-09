! function (e, t, y, i) {
  "use strict";
  y.defineProperty(e, "__esModule", {
    value: !0
  });
  var m = function (e, t) {
      if (i.isArray(e)) return e;
      if (Symbol.iterator in y(e)) return function (e, t) {
        var n = [],
          o = !0,
          r = !1,
          a = void 0;
        try {
          for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0);
        } catch (e) {
          r = !0, a = e
        } finally {
          try {
            !o && s.return && s.return()
          } finally {
            if (r) throw a
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
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), y.defineProperty(e, o.key, o)
    }
  }
  var r, a, h = t("../../npm/@tarojs/taro-weapp/index.js"),
    _ = s(h),
    v = s(t("../../utils/auth.js")),
    b = s(t("../../services/api.js")),
    w = s(t("../../utils/toast.js")),
    $ = t("../../store/global_data.js");

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function u(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }
  var c = (function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = y.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (y.setPrototypeOf ? y.setPrototypeOf(e, t) : e.__proto__ = t)
  }(l, _.default.Component), n(l, [{
    key: "_constructor",
    value: function (e) {
      (function e(t, n, o) {
        null === t && (t = Function.prototype);
        var r = y.getOwnPropertyDescriptor(t, n);
        if (void 0 === r) {
          var a = y.getPrototypeOf(t);
          return null === a ? void 0 : e(a, n, o)
        }
        if ("value" in r) return r.value;
        var i = r.get;
        return void 0 !== i ? i.call(o) : void 0
      })(l.prototype.__proto__ || y.getPrototypeOf(l.prototype), "_constructor", this).call(this, e), this.$$refs = new _.default.RefsArray
    }
  }, {
    key: "_createData",
    value: function (e, t, n) {
      this.__state = e || this.state || {}, this.__props = t || this.props || {};
      var o = this.$prefix,
        r = (0, h.genCompid)(o + "$compid__46"),
        a = m(r, 2),
        i = a[0],
        s = a[1],
        u = (0, h.genCompid)(o + "$compid__47"),
        c = m(u, 2),
        l = c[0],
        p = c[1],
        f = (0, h.useRouter)().params,
        d = f.autoLogin,
        g = f.noCheck;
      return (0, h.useEffect)(function () {
        g || (console.log("====================="), v.default.checkLogin(d))
      }, []), this.anonymousFunc0 = function (e) {
        console.log(e);
        var t = e.detail || {},
          n = t.encryptedData,
          o = t.errMsg,
          r = t.iv,
          a = _.default.getStorageSync("session_key"),
          i = _.default.getStorageSync("openid");
        console.log(JSON.stringify({
          encryptedData: n,
          errMsg: o,
          iv: r,
          session_key: a
        })), n && (_.default.showLoading(), b.default.bindWx({
          OpenId: i,
          encryptedData: encodeURIComponent(n),
          iv: r,
          session_key: a
        }).then(function (e) {
          var t, n, o, r;
          _.default.hideLoading(), console.log(e), wx.setStorageSync('MemberCode', e.data.member.MemberCode), 0 === e.code ? (w.default.show("登录成功", "success", 1e3), n = (t = e.data || {}).accessToken, r = void 0 === (o = t.member) ? {} : o, _.default.setStorageSync("token", n), _.default.setStorageSync("userId", r.UserId), (0, $.setKey)("member", r), v.default.loginJump()) : w.default.show(e.msg)
        }).catch(function (e) {
          _.default.hideLoading()
        }))
      }, this.anonymousFunc1 = function () {
        _.default.navigateTo({
          url: "/pages/bind/index"
        })
      }, h.propsManager.set({
        className: "login-btn",
        type: "primary"
      }, s, i), h.propsManager.set({
        className: "login-btn",
        type: "secondary",
        onClick: this.anonymousFunc1
      }, p, l), y.assign(this.__state, {
        $compid__46: s,
        $compid__47: p,
        logoImg: "/assets/images/logo.png",
        wxImg: "/assets/images/wechat.png",
        phoneImg: "/assets/images/phone.png"
      }), this.__state
    }
  }, {
    key: "anonymousFunc0",
    value: function () {}
  }, {
    key: "anonymousFunc1",
    value: function () {}
  }]), a = r = l, r.$$events = ["anonymousFunc0"], r.$$componentPath = "pages/login/index", a);

  function l() {
    var e, t, n;
    ! function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, l);
    for (var o = arguments.length, r = i(o), a = 0; a < o; a++) r[a] = arguments[a];
    return (t = n = u(this, (e = l.__proto__ || y.getPrototypeOf(l)).call.apply(e, [this].concat(r)))).config = {
      navigationBarTitleText: "登录"
    }, n.$usedState = ["$compid__46", "$compid__47", "logoImg", "wxImg", "phoneImg"], n.customComponents = ["AtButton"], u(n, t)
  }
  c.config = {
    navigationBarTitleText: "登录"
  }, e.default = c, Component(t("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(c, !0))
}(exports, require, Object, Array);