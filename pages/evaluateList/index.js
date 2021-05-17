! function (t, e, F, j) {
  "use strict";
  F.defineProperty(t, "__esModule", {
    value: !0
  });
  var C = function (t, e) {
      if (j.isArray(t)) return t;
      if (Symbol.iterator in F(t)) return function (t, e) {
        var n = [],
          o = !0,
          r = !1,
          a = void 0;
        try {
          for (var s, i = t[Symbol.iterator](); !(o = (s = i.next()).done) && (n.push(s.value), !e || n.length !== e); o = !0);
        } catch (t) {
          r = !0, a = t
        } finally {
          try {
            !o && i.return && i.return()
          } finally {
            if (r) throw a
          }
        }
        return n
      }(t, e);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    n = function (t, e, n) {
      return e && o(t.prototype, e), n && o(t, n), t
    };

  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), F.defineProperty(t, o.key, o)
    }
  }
  var r, a, P = e("../../npm/@tarojs/taro-weapp/index.js"),
    T = s(P),
    E = e("../../store/global_data.js"),
    O = s(e("../../services/api.js")),
    k = s(e("../../utils/toast.js"));

  function s(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }
  var A = new Date,
    u = (function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = F.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (F.setPrototypeOf ? F.setPrototypeOf(t, e) : t.__proto__ = e)
    }(l, T.default.Component), n(l, [{
      key: "_constructor",
      value: function (t) {
        (function t(e, n, o) {
          null === e && (e = Function.prototype);
          var r = F.getOwnPropertyDescriptor(e, n);
          if (void 0 === r) {
            var a = F.getPrototypeOf(e);
            return null === a ? void 0 : t(a, n, o)
          }
          if ("value" in r) return r.value;
          var s = r.get;
          return void 0 !== s ? s.call(o) : void 0
        })(l.prototype.__proto__ || F.getPrototypeOf(l.prototype), "_constructor", this).call(this, t), this.$$refs = new T.default.RefsArray
      }
    }, {
      key: "_createData",
      value: function (t, e, n) {
        this.__state = t || this.state || {}, this.__props = e || this.props || {};
        var o = this.$prefix,
          r = (0, P.genCompid)(o + "$compid__17"),
          a = C(r, 2),
          s = a[0],
          i = a[1],
          u = (0, P.useRouter)(),
          l = u.params,
          c = l.id,
          f = l.title,
          d = void 0 === f ? "" : f,
          p = (u.path, (0, P.useState)([])),
          h = C(p, 2),
          y = h[0],
          v = h[1],
          _ = (0, P.useState)(),
          g = C(_, 2),
          m = g[0],
          w = g[1],
          S = (0, P.useState)([]),
          b = C(S, 2),
          I = b[0],
          D = b[1],
          $ = T.default.getStorageSync("userId");
        (0, P.useDidShow)(function () {
          A = new Date
        }), (0, P.useEffect)(function () {
          T.default.setNavigationBarTitle({
            title: d
          }), c && (console.log(c), O.default.getQuestions({
            courseId: c
          }).then(function (t) {
            var e;
            console.log(t), 0 === t.code ? (e = t.data || [], v(e), D(new j(e.length).fill(""))) : w(t.msg)
          }))
        }, [c]);
        var x = (0, P.internal_inline_style)({
          paddingBottom: (0, E.getKey)("isX") ? "20px" : "0px"
        });
        return this.anonymousFunc0 = function (t, e, n) {
          console.log(t, n), I[t] = {
            QuesId: n.QuesId,
            ItemId: n.FId,
            Score: n.TestScore
          }, D(I)
        }, this.anonymousFunc1 = function () {
          console.log({
            UserId: $,
            CourseFId: c,
            StartDate: A,
            EndDate: new Date,
            Answers: I
          }), I.filter(function (t) {
            return !t
          }).length ? T.default.showToast({
            title: "选项不能为空",
            icon: "none"
          }) : (T.default.showLoading({
            title: "测评中...",
            mask: !0
          }), O.default.saveTest({
            UserId: $,
            CourseFId: c,
            StartDate: A,
            EndDate: new Date,
            Answers: I
          }).then(function (t) {
            var e;
            T.default.hideLoading(), 0 === t.code && t.data ? (k.default.show(t.msg, "success"), e = (t.data || {}).answer.AnswerId, T.default.redirectTo({
              url: "/pages/evaluateResult/index?id=" + e
            })) : k.default.show(t.msg || "error"), console.log(t)
          }).catch(function (t) {
            T.default.hideLoading()
          }))
        }, y && y.length && P.propsManager.set({
          dataSource: y,
          onChange: this.anonymousFunc0,
          valueList: I,
          onSubmit: this.anonymousFunc1
        }, i, s), F.assign(this.__state, {
          anonymousState__temp: x,
          $compid__17: i,
          list: y,
          errmsg: m
        }), this.__state
      }
    }, {
      key: "anonymousFunc0",
      value: function () {}
    }, {
      key: "anonymousFunc1",
      value: function () {}
    }]), a = r = l, r.$$events = [], r.$$componentPath = "pages/evaluateList/index", a);

  function l() {
    var t, e, n;
    ! function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, l);
    for (var o = arguments.length, r = j(o), a = 0; a < o; a++) r[a] = arguments[a];
    return (e = n = i(this, (t = l.__proto__ || F.getPrototypeOf(l)).call.apply(t, [this].concat(r)))).$usedState = ["anonymousState__temp", "$compid__17", "list", "errmsg"], n.customComponents = ["QuestionList"], i(n, e)
  }
  t.default = u, Component(e("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(u, !0))
}(exports, require, Object, Array);