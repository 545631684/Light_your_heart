! function (t, e) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n, u = e("./request.js"),
    o = (n = u) && n.__esModule ? n : {
      default: n
    };
  t.default = {
    getNewsTypes: function (t) {
      return o.default.get("healthy/types", t)
    },
    getNewsList: function (t) {
      return o.default.post("healthy/news", t)
    },
    getNewsDetail: function (t) {
      return o.default.get("healthy/newsinfo", t)
    },
    getHomeImages: function (t) {
      return o.default.get("home/images", t)
    },
    getCoursecate: function (t) {
      return o.default.get("home/coursecate", t)
    },
    getDoctorTags: function (t) {
      return o.default.post("home/doctortags", t)
    },
    getDoctorList: function (t) {
      return o.default.post("home/doctorpage", t)
    },
    getDoctorInfo: function (t) {
      return o.default.get("home/doctorinfo", t)
    },
    login: function (t) {
      return o.default.get("login/wxlogin", t)
    },
    bindPhone: function (t) {
      return o.default.post("login/bind", t)
    },
    bindWx: function (t) {
      return o.default.post("login/wxbind", t)
    },
    getvcode: function (t) {
      return o.default.get("login/getvcode", t)
    },
    updateUser: function (t) {
      return o.default.post("member/update", t)
    },
    likeorfav: function (t) {
      return o.default.post("member/likeorfav", t)
    },
    feedback: function (t) {
      return o.default.post("member/feedback", t)
    },
    favdoctors: function (t) {
      return o.default.post("member/favdoctors", t)
    },
    favnews: function (t) {
      return o.default.post("member/favnews", t)
    },
    userInfo: function (t) {
      return o.default.get("member/info", t)
    },
    testlist: function (t) {
      return o.default.post("member/testlist", t)
    },
    uploadimg: function (t) {
      return o.default.post("publics/uploadimg", t)
    },
    wxappuploadimg: function (t) {
      return o.default.post("publics/wxappuploadimg", t)
    },
    getItems: function (t) {
      return o.default.get("publics/items", t)
    },
    getCourses: function (t) {
      return o.default.post("test/courses", t)
    },
    getQuestions: function (t) {
      return o.default.get("test/questions", t)
    },
    getCourseInfo: function (t) {
      return o.default.get("test/courseinfo", t)
    },
    saveTest: function (t) {
      return o.default.post("test/save", t)
    },
    getTestInfo: function (t) {
      return o.default.get("test/info", t)
    }
  }
}(exports, require);