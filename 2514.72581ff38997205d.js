"use strict";(self.webpackChunkwa_o_island=self.webpackChunkwa_o_island||[]).push([[2514],{2514:(S,r,o)=>{o.r(r),o.d(r,{CmsMeetingLayoutModule:()=>x});var a=o(1048),c=o(8413),u=o(4977),C=o(7931),n=o(9724),m=o(8546),M=o(3819);const v=function(t){return{active:t}};function h(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"li",3)(1,"a",4),n.NdJ("click",function(){const g=n.CHM(e).$implicit;return n.oxw().onNavClicked(g)}),n._uU(2),n.qZA()()}if(2&t){const e=i.$implicit;n.xp6(1),n.Q6J("ngClass",n.VKq(2,v,e.activated)),n.xp6(1),n.Oqu(e.title)}}let p=(()=>{class t extends m.NG{constructor(e,s,d){super(e,s,d),this.eventAnnounceService=e,this.routeService=s,this.appConfigService=d,this.init=()=>{const g=this.appConfigService.getRouteConfig();this.routeModules=g.modules.cms.modules.meeting.modules,this.pathPrefix="cms/meeting",this.activatedRouterMaxSlice=4}}ngOnInit(){super.ngOnInit()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(m.Le),n.Y36(m.Qx),n.Y36(M._Z))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cms-shared-meeting-nav"]],features:[n.qOj],decls:3,vars:1,consts:[[1,"meeting-nav-container"],[1,"nav","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[1,"nav-item"],["aria-current","page",1,"nav-link",3,"ngClass","click"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0)(1,"ul",1),n.YNc(2,h,3,4,"li",2),n.qZA()()),2&e&&(n.xp6(2),n.Q6J("ngForOf",s.navList))},directives:[a.sg,a.mk],styles:[".meeting-nav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem;border-bottom:2px solid #e0e0e0}.meeting-nav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:not(.active){color:#555}.meeting-nav-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{border-bottom-color:#7979de;background:#f2f2f2;font-weight:600}"]}),t})();const l=u.e.routes.modules.cms.modules.meeting.modules,y=[{path:"",component:(()=>{class t extends C.q{constructor(e){super(e),this.routeService=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(m.Qx))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cms-meeting-layout"]],features:[n.qOj],decls:4,vars:0,consts:[[1,"cms-meeting-layout-container"],[1,"mb-5"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"cms-shared-meeting-nav"),n.qZA(),n._UZ(3,"router-outlet"),n.qZA())},directives:[p,c.lC],styles:[""]}),t})(),children:[{path:l.index.path,loadChildren:()=>o.e(2254).then(o.bind(o,2254)).then(t=>t.CmsMeetingIndexModule)},{path:l.list.path,loadChildren:()=>Promise.all([o.e(8592),o.e(4028)]).then(o.bind(o,4028)).then(t=>t.CmsMeetingListModule)},{path:l.monitor.path,loadChildren:()=>Promise.all([o.e(8592),o.e(864)]).then(o.bind(o,864)).then(t=>t.CmsMeetingMonitorModule)},{path:l.situationPoster.path,loadChildren:()=>Promise.all([o.e(7663),o.e(9155)]).then(o.bind(o,9155)).then(t=>t.CmsMeetingSituationPosterModule)}]}];let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.Bz.forChild(y)],c.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.ez]]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.ez,O,P]]}),t})()}}]);