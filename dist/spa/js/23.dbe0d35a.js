(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"136c":function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("q-page",{attrs:{padding:""}},[a("BannerPages",{attrs:{bannerUrl:"ImageJobs.png",pageName:"New job",companyName:e.company.denomination}}),a("JobForm",{on:{form:e.saveForm}})],1)},r=[],o=(a("96cf"),a("c973")),s=a.n(o),c=a("ded3"),u=a.n(c),p=a("98d1"),i=a("204f"),m=a("e994"),d=a("2f62"),b=a("c1df"),f=a.n(b),l={name:"NewJobPage",components:{BannerPages:p["a"],JobForm:i["a"]},computed:u()({},Object(d["c"])(["company","previousRoute"])),methods:{saveForm:function(e){var n=this;return s()(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return"4"==e.status&&(e.published_at=f()()),a.next=3,Object(m["c"])(e);case 3:t=a.sent,n.$store.dispatch("wilfried/addJob",u()({},t)),n.$router.push({path:"/jobs"});case 6:case"end":return a.stop()}}),a)})))()}}},w=l,g=a("2877"),h=a("9989"),v=a("eebe"),J=a.n(v),j=Object(g["a"])(w,t,r,!1,null,null,null);n["default"]=j.exports;J()(j,"components",{QPage:h["a"]})}}]);