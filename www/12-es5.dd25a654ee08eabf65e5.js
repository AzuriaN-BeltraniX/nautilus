!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/2RN":function(e,o,i){"use strict";i.r(o),i.d(o,"DashboardPageModule",(function(){return I}));var r,a,c=i("ofXK"),s=i("3Pt+"),u=i("tyNb"),l=i("mrSG"),b=i("fXoL"),d=i("kZ8S"),p=i("TEn/"),h=i("AytR"),m=((r=function(){function e(t,o,i,r){n(this,e),this.router=t,this.popoverController=o,this.menuController=i,this.dataLocalService=r,this.baseUrl=h.a.baseUrl,this.noImage="noImage.svg"}return t(e,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){console.log("Se cerr\xf3 la sesi\xf3n"),this.dataLocalService.eliminarToken(),this.dataLocalService.eliminarMenu(),this.popoverController.dismiss(),this.menuController.close("dashboard"),this.router.navigateByUrl("/home")}},{key:"accountPage",value:function(){this.popoverController.dismiss(),this.menuController.close("dashboard"),this.router.navigateByUrl("/dashboard/perfil")}}]),e}()).\u0275fac=function(n){return new(n||r)(b.Ib(u.g),b.Ib(p.Z),b.Ib(p.T),b.Ib(d.a))},r.\u0275cmp=b.Cb({type:r,selectors:[["app-account-popover"]],decls:14,vars:4,consts:[[1,"ion-margin"],[2,"margin","auto"],[3,"src"],[1,"ion-text-center",2,"margin-bottom","5px !important"],[1,"ion-text-center",2,"opacity","50%","margin-top","2px !important"],[1,"ion-padding"],["color","primary","expand","block","shape","round","fill","outline",1,"ion-margin-start","ion-margin-end",3,"click"],[1,"ion-margin-top"],["color","danger","expand","block","shape","round","fill","outline",1,"ion-margin-start","ion-margin-end",3,"click"]],template:function(n,e){1&n&&(b.Lb(0,"ion-list",0),b.Lb(1,"ion-avatar",1),b.Jb(2,"img",2),b.Kb(),b.Lb(3,"h2",3),b.fc(4),b.Kb(),b.Lb(5,"p",4),b.fc(6),b.Kb(),b.Lb(7,"div",5),b.Lb(8,"div"),b.Lb(9,"ion-button",6),b.Tb("click",(function(){return e.accountPage()})),b.fc(10," Mi cuenta "),b.Kb(),b.Kb(),b.Lb(11,"div",7),b.Lb(12,"ion-button",8),b.Tb("click",(function(){return e.logout()})),b.fc(13," Cerrar sesi\xf3n "),b.Kb(),b.Kb(),b.Kb(),b.Kb()),2&n&&(b.xb(2),b.Zb("src","",e.baseUrl,"/upload/users/",e.dataLocalService.usuario.img||e.noImage,"",b.cc),b.xb(2),b.gc(e.dataLocalService.usuario.nombre),b.xb(2),b.gc(e.dataLocalService.usuario.email))},directives:[p.D,p.e,p.i],styles:[""]}),r),f=i("on2l"),g=((a=function(){function e(t,o){n(this,e),this.popoverController=t,this.usuarioService=o,this.popoverButton=!1,this.userImage="",this.userImage=o.getUserImage()}return t(e,[{key:"presentPopover",value:function(n){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverController.create({component:m,cssClass:"my-custom-class",event:n,translucent:!0});case 2:return t=e.sent,this.popoverButton=!0,e.next=6,t.present();case 6:return e.next=8,t.onWillDismiss();case 8:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(n){return new(n||a)(b.Ib(p.Z),b.Ib(f.a))},a.\u0275cmp=b.Cb({type:a,selectors:[["app-menu"]],decls:9,vars:1,consts:[["slot","start"],["menu","dashboard"],["slot","end",3,"click"],[2,"width","60%","height","60%","margin-top","12px",3,"src"]],template:function(n,e){1&n&&(b.Lb(0,"ion-header"),b.Lb(1,"ion-toolbar"),b.Lb(2,"ion-buttons",0),b.Jb(3,"ion-menu-button",1),b.Kb(),b.Lb(4,"ion-title"),b.fc(5,"Menu"),b.Kb(),b.Lb(6,"ion-buttons",2),b.Tb("click",(function(n){return e.presentPopover(n)})),b.Lb(7,"ion-avatar"),b.Jb(8,"ion-img",3),b.Kb(),b.Kb(),b.Kb(),b.Kb()),2&n&&(b.xb(8),b.Yb("src",e.userImage))},directives:[p.s,p.Q,p.j,p.F,p.P,p.e,p.u],styles:[""]}),a);function v(n,e){if(1&n&&(b.Lb(0,"ion-item",8),b.Jb(1,"ion-icon",9),b.Lb(2,"ion-label"),b.fc(3),b.Kb(),b.Kb()),2&n){var t=e.$implicit;b.Yb("routerLink",t.url),b.xb(1),b.Yb("name",t.icon),b.xb(2),b.gc(t.title)}}function L(n,e){if(1&n&&(b.Lb(0,"ion-list"),b.Lb(1,"ion-menu-toggle",4),b.Lb(2,"div",5),b.Lb(3,"h4",6),b.fc(4),b.Kb(),b.ec(5,v,4,3,"ion-item",7),b.Kb(),b.Kb(),b.Kb()),2&n){var t=e.$implicit;b.xb(4),b.gc(t.title),b.xb(1),b.Yb("ngForOf",t.submenu)}}var y,K,k,x=[{path:"",component:(y=function(){function e(t){n(this,e),this.dataLocalService=t,this.menu=[]}return t(e,[{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.dataLocalService.cargarMenu();case 2:console.log("Men\xfa cargado desde el Local Storage:",this.dataLocalService.menu),this.menu=this.dataLocalService.menu,console.log(this.menu);case 5:case"end":return n.stop()}}),n,this)})))}}]),e}(),y.\u0275fac=function(n){return new(n||y)(b.Ib(d.a))},y.\u0275cmp=b.Cb({type:y,selectors:[["app-dashboard"]],decls:6,vars:1,consts:[["when","md","contentId","main"],["side","start","menuId","dashboard","contentId","main"],[4,"ngFor","ngForOf"],["id","main"],["autoHide","false"],[1,"ion-margin"],[1,"ion-padding-top",2,"opacity","50%"],["detail","",3,"routerLink",4,"ngFor","ngForOf"],["detail","",3,"routerLink"],["slot","start","color","medium",3,"name"]],template:function(n,e){1&n&&(b.Lb(0,"ion-split-pane",0),b.Lb(1,"ion-menu",1),b.Jb(2,"app-menu"),b.Lb(3,"ion-content"),b.ec(4,L,6,2,"ion-list",2),b.Kb(),b.Kb(),b.Jb(5,"ion-router-outlet",3),b.Kb()),2&n&&(b.xb(4),b.Yb("ngForOf",e.menu))},directives:[p.N,p.E,g,p.q,c.h,p.J,p.D,p.G,p.y,p.ab,u.h,p.t,p.C],styles:[""]}),y),children:[{path:"",redirectTo:"/dashboard/inicio",pathMatch:"full"},{path:"inicio",loadChildren:function(){return i.e(13).then(i.bind(null,"Uc00")).then((function(n){return n.InicioPageModule}))}},{path:"perfil",loadChildren:function(){return i.e(17).then(i.bind(null,"g4ys")).then((function(n){return n.PerfilPageModule}))}},{path:"usuarios",loadChildren:function(){return Promise.all([i.e(0),i.e(16)]).then(i.bind(null,"nLhO")).then((function(n){return n.UsuariosPageModule}))}},{path:"medicos",loadChildren:function(){return Promise.all([i.e(0),i.e(14)]).then(i.bind(null,"xbUr")).then((function(n){return n.MedicosPageModule}))}},{path:"pacientes",loadChildren:function(){return Promise.all([i.e(0),i.e(15)]).then(i.bind(null,"t0fT")).then((function(n){return n.PacientesPageModule}))}}]}],C=((K=function e(){n(this,e)}).\u0275mod=b.Gb({type:K}),K.\u0275inj=b.Fb({factory:function(n){return new(n||K)},imports:[[u.i.forChild(x)],u.i]}),K),w=i("j1ZV"),I=((k=function e(){n(this,e)}).\u0275mod=b.Gb({type:k}),k.\u0275inj=b.Fb({factory:function(n){return new(n||k)},imports:[[c.b,s.i,s.d,p.R,C,w.a]]}),k)}}])}();