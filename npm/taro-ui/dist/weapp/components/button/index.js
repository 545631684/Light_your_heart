! function (e, t, W, a) {
  "use strict";
  W.defineProperty(e, "__esModule", {
    value: !0
  });
  var j = function (e, t) {
      if (a.isArray(e)) return e;
      if (Symbol.iterator in W(e)) return function (e, t) {
        var n = [],
          o = !0,
          s = !1,
          r = void 0;
        try {
          for (var a, i = e[Symbol.iterator](); !(o = (a = i.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
        } catch (e) {
          s = !0, r = e
        } finally {
          try {
            !o && i.return && i.return()
          } finally {
            if (s) throw r
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
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), W.defineProperty(e, o.key, o)
    }
  }
  var s, r, x = p(t("../../../../../classnames/index.js")),
    i = p(t("../../../../../prop-types/index.js")),
    U = t("../../../../../@tarojs/taro-weapp/index.js"),
    l = p(U),
    u = p(t("../../common/component.js"));

  function p(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function Y(e, t, n) {
    return t in e ? W.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function f(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }
  var z = {
      normal: "normal",
      small: "small"
    },
    B = {
      primary: "primary",
      secondary: "secondary"
    },
    d = (function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = W.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (W.setPrototypeOf ? W.setPrototypeOf(e, t) : e.__proto__ = t)
    }(c, u.default), n(c, [{
      key: "_constructor",
      value: function (e) {
        (function e(t, n, o) {
          null === t && (t = Function.prototype);
          var s = W.getOwnPropertyDescriptor(t, n);
          if (void 0 === s) {
            var r = W.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, o)
          }
          if ("value" in s) return s.value;
          var a = s.get;
          return void 0 !== a ? a.call(o) : void 0
        })(c.prototype.__proto__ || W.getPrototypeOf(c.prototype), "_constructor", this).call(this, e), this.state = {
          isWEB: l.default.getEnv() === l.default.ENV_TYPE.WEB,
          isWEAPP: l.default.getEnv() === l.default.ENV_TYPE.WEAPP,
          isALIPAY: l.default.getEnv() === l.default.ENV_TYPE.ALIPAY
        }, this.$$refs = new l.default.RefsArray
      }
    }, {
      key: "onClick",
      value: function (e) {
        this.props.disabled || this.props.onClick && this.props.onClick(e)
      }
    }, {
      key: "onGetUserInfo",
      value: function (e) {
        this.props.onGetUserInfo && this.props.onGetUserInfo(e)
      }
    }, {
      key: "onContact",
      value: function (e) {
        this.props.onContact && this.props.onContact(e)
      }
    }, {
      key: "onGetPhoneNumber",
      value: function (e) {
        this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(e)
      }
    }, {
      key: "onError",
      value: function (e) {
        this.props.onError && this.props.onError(e)
      }
    }, {
      key: "onOpenSetting",
      value: function (e) {
        this.props.onOpenSetting && this.props.onOpenSetting(e)
      }
    }, {
      key: "onSumit",
      value: function (e) {
        (this.state.isWEAPP || this.state.isWEB) && this.$scope.triggerEvent("submit", e.detail, {
          bubbles: !0,
          composed: !0
        })
      }
    }, {
      key: "onReset",
      value: function (e) {
        (this.state.isWEAPP || this.state.isWEB) && this.$scope.triggerEvent("reset", e.detail, {
          bubbles: !0,
          composed: !0
        })
      }
    }, {
      key: "_createData",
      value: function (e, t, n) {
        var o;
        this.__state = e || this.state || {}, this.__props = t || this.props || {};
        var s = this.$prefix,
          r = (0, U.genCompid)(s + "$compid__57"),
          a = j(r, 2),
          i = a[0],
          l = a[1],
          u = this.__props,
          p = u.size,
          f = void 0 === p ? "normal" : p,
          d = u.type,
          c = void 0 === d ? "" : d,
          m = u.circle,
          g = u.full,
          h = u.loading,
          y = u.disabled,
          b = u.customStyle,
          _ = u.formType,
          v = u.openType,
          P = u.lang,
          E = u.sessionFrom,
          M = u.sendMessageTitle,
          C = u.sendMessagePath,
          T = u.sendMessageImg,
          w = u.showMessageCard,
          S = u.appParameter,
          A = this.__state,
          k = (A.isWEAPP, A.isALIPAY, A.isWEB, ["at-button"]),
          I = (Y(o = {}, "at-button--" + z[f], z[f]), Y(o, "at-button--disabled", y), Y(o, "at-button--" + c, B[c]), Y(o, "at-button--circle", m), Y(o, "at-button--full", g), o),
          O = "primary" === c ? "#fff" : "",
          $ = "small" === f ? "30" : 0;
        h && (k.push("at-button--icon"), U.propsManager.set({
          color: O,
          size: $
        }, l, i));
        var G = (0, x.default)(k, I, this.__props.className),
          N = (0, U.internal_inline_style)(b);
        return W.assign(this.__state, {
          anonymousState__temp: G,
          anonymousState__temp2: N,
          $compid__57: l,
          loading: h,
          lang: P,
          formType: _,
          undefined: void 0,
          openType: v,
          sessionFrom: E,
          sendMessageTitle: M,
          sendMessagePath: C,
          sendMessageImg: T,
          showMessageCard: w,
          appParameter: S,
          disabled: y
        }), this.__state
      }
    }]), r = s = c, s.$$events = ["onGetUserInfo", "onGetPhoneNumber", "onOpenSetting", "onError", "onContact", "onClick", "onSumit", "onReset"], s.$$componentPath = "C:/Users/HP/Desktop/项目总/LightMindMiniProgram/node_modules/taro-ui/dist/weapp/components/button/index", r);

  function c() {
    var e, t, n;
    ! function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, c);
    for (var o = arguments.length, s = a(o), r = 0; r < o; r++) s[r] = arguments[r];
    return (t = n = f(this, (e = c.__proto__ || W.getPrototypeOf(c)).call.apply(e, [this].concat(s)))).$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__57", "loading", "lang", "formType", "undefined", "openType", "sessionFrom", "sendMessageTitle", "sendMessagePath", "sendMessageImg", "showMessageCard", "appParameter", "isWEAPP", "disabled", "isWEB", "isALIPAY", "size", "type", "circle", "full", "customStyle", "className", "children"], n.customComponents = ["AtLoading"], f(n, t)
  }
  d.defaultProps = {
    size: "normal",
    type: void 0,
    circle: !1,
    full: !1,
    loading: !1,
    disabled: !1,
    customStyle: {},
    onClick: function () {},
    formType: void 0,
    openType: void 0,
    lang: "en",
    sessionFrom: "",
    sendMessageTitle: "",
    sendMessagePath: "",
    sendMessageImg: "",
    showMessageCard: !1,
    appParameter: "",
    onGetUserInfo: function () {},
    onContact: function () {},
    onGetPhoneNumber: function () {},
    onError: function () {},
    onOpenSetting: function () {}
  }, d.propTypes = {
    size: i.default.oneOf(["normal", "small"]),
    type: i.default.oneOf(["primary", "secondary", ""]),
    circle: i.default.bool,
    full: i.default.bool,
    loading: i.default.bool,
    disabled: i.default.bool,
    onClick: i.default.func,
    customStyle: i.default.oneOfType([i.default.object, i.default.string]),
    formType: i.default.oneOf(["submit", "reset", ""]),
    openType: i.default.oneOf(["contact", "share", "getUserInfo", "getPhoneNumber", "launchApp", "openSetting", "feedback", "getRealnameAuthInfo", "getAuthorize", "contactShare", ""]),
    lang: i.default.string,
    sessionFrom: i.default.string,
    sendMessageTitle: i.default.string,
    sendMessagePath: i.default.string,
    sendMessageImg: i.default.string,
    showMessageCard: i.default.bool,
    appParameter: i.default.string,
    onGetUserInfo: i.default.func,
    onContact: i.default.func,
    onGetPhoneNumber: i.default.func,
    onError: i.default.func,
    onOpenSetting: i.default.func
  }, e.default = d, Component(t("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(d))
}((module, exports), require, Object, Array);