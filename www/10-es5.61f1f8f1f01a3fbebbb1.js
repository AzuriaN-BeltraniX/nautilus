!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lu3c:function(i,o,t){"use strict";t.r(o),t.d(o,"LoginPageModule",(function(){return K}));var r=t("ofXK"),a=t("3Pt+"),s=t("TEn/"),c=t("tyNb"),u=t("mrSG"),b=t("fXoL"),l=t("on2l"),m=t("kZ8S"),d=t("e8h1"),g=t("2MiI");function f(n,e){if(1&n){var i=b.Mb();b.Lb(0,"div"),b.Lb(1,"form",5),b.Tb("ngSubmit",(function(){return b.bc(i),b.Vb().login()})),b.Lb(2,"ion-list",6),b.Lb(3,"h1"),b.fc(4,"Ingresa tu correo electr\xf3nico"),b.Kb(),b.Lb(5,"ion-item",7),b.Jb(6,"ion-icon",8),b.Jb(7,"ion-input",9),b.Kb(),b.Lb(8,"div",10),b.Lb(9,"h1"),b.fc(10,"Ingresa tu contrase\xf1a"),b.Kb(),b.Lb(11,"ion-item",7),b.Jb(12,"ion-icon",11),b.Jb(13,"ion-input",12),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Lb(14,"div",13),b.Lb(15,"div",14),b.Lb(16,"ion-button",15),b.Tb("click",(function(){return b.bc(i),b.Vb().login()})),b.fc(17," Iniciar sesi\xf3n "),b.Kb(),b.Kb(),b.Kb(),b.Kb()}if(2&n){var o=b.Vb();b.xb(1),b.Yb("formGroup",o.loginForm)}}function p(n,e){if(1&n){var i=b.Mb();b.Lb(0,"div",16),b.Lb(1,"h1",17),b.fc(2,"\xa1Bienvenido de nuevo!"),b.Kb(),b.Jb(3,"img",18),b.Lb(4,"h3",16),b.fc(5),b.Kb(),b.Lb(6,"span",19),b.Tb("click",(function(){return b.bc(i),b.Vb().changeUser()})),b.fc(7,"Cambiar usuario"),b.Kb(),b.Lb(8,"form",5),b.Tb("ngSubmit",(function(){return b.bc(i),b.Vb().login()})),b.Lb(9,"ion-list",6),b.Lb(10,"div",10),b.Lb(11,"ion-item",7),b.Jb(12,"ion-icon",11),b.Jb(13,"ion-input",20),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Lb(14,"div",13),b.Lb(15,"div",14),b.Lb(16,"ion-button",15),b.Tb("click",(function(){return b.bc(i),b.Vb().login()})),b.fc(17," Iniciar sesi\xf3n "),b.Kb(),b.Kb(),b.Kb(),b.Kb()}if(2&n){var o=b.Vb();b.xb(3),b.Yb("src",o.userImg,b.cc),b.xb(2),b.gc(o.dataLocalService.usuario.nombre),b.xb(3),b.Yb("formGroup",o.recentLoginForm)}}function h(n,e){1&n&&(b.Lb(0,"div",21),b.Lb(1,"ion-card"),b.Lb(2,"ion-card-content",22),b.Jb(3,"ion-spinner",23),b.Lb(4,"p",10),b.fc(5,"Iniciando Sesi\xf3n"),b.Kb(),b.Kb(),b.Kb(),b.Kb())}var v,L,x,y=[{path:"",component:(v=function(){function i(e,o,t,r,s,c){n(this,i),this.formBuilder=e,this.router=o,this.alertController=t,this.usuarioService=r,this.dataLocalService=s,this.storage=c,this.userImg="",this.formRecent=!1,this.tryLogin=!1,this.loginForm=this.formBuilder.group({email:["jibv3729@outlook.com",[a.j.required,a.j.email]],password:["JolyPato_3729",[a.j.required,a.j.minLength(8)]]}),this.existeUsuario()}var o,t,r;return o=i,(t=[{key:"changeUser",value:function(){this.formRecent=!1,!1===this.formRecent?(this.formRecent=!1,this.storage.remove("usuario")):this.existeUsuario()}},{key:"existeUsuario",value:function(){var n=this;this.dataLocalService.cargarUsuario_Promise().then((function(e){console.log("> \xbfExiste un usuario almacenado?:",e),!0===e&&(n.formRecent=!0,n.userImg=n.usuarioService.getUserImage(),n.recentLoginForm=n.formBuilder.group({email:[n.dataLocalService.usuario.email,[a.j.required,a.j.email]],password:["JolyPato_3729",[a.j.required,a.j.minLength(8)]]}))}))}},{key:"login",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("Iniciando sesi\xf3n... \n\n  \xb7 Formlogin a enviar:",this.loginForm.value),this.tryLogin=!0,!1!==this.formRecent){n.next=7;break}return n.next=5,this.usuarioService.login(this.loginForm.value).then((function(n){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),!0!==n.ok){e.next=10;break}return console.log('Sesi\xf3n iniciada: \n\n  \xb7 Haz iniciado sesi\xf3n como: "'.concat(n.usuario.nombre,'".')),this.tryLogin=!1,e.next=4,this.alertController.create({backdropDismiss:!1,header:"\xa1Bienvenido ".concat(n.usuario.nombre,"!"),message:"Haz iniciado sesi\xf3n con \xe9xito.",buttons:["Adelante"]});case 4:return i=e.sent,e.next=7,i.present();case 7:this.router.navigateByUrl("/dashboard"),e.next=16;break;case 10:return console.warn("No se pudo iniciar sesi\xf3n..."),this.tryLogin=!1,e.next=13,this.alertController.create({backdropDismiss:!1,header:"\xa1Hey!",message:n.msg,buttons:["Adelante"]});case 13:return o=e.sent,e.next=16,o.present();case 16:case"end":return e.stop()}}),e,this)})))}));case 5:n.next=9;break;case 7:return n.next=9,this.usuarioService.login(this.recentLoginForm.value).then((function(n){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),!0!==n.ok){e.next=10;break}return console.log('Sesi\xf3n iniciada: \n\n  \xb7 Haz vuelto a iniciar sesi\xf3n como: "'.concat(n.usuario.nombre,'".')),this.tryLogin=!1,e.next=4,this.alertController.create({backdropDismiss:!1,header:"\xa1Bienvenido de nuevo, ".concat(n.usuario.nombre,"!"),message:"Haz iniciado sesi\xf3n con \xe9xito.",buttons:["Adelante"]});case 4:return i=e.sent,e.next=7,i.present();case 7:this.router.navigateByUrl("/dashboard"),e.next=16;break;case 10:return console.warn("No se pudo iniciar sesi\xf3n..."),this.tryLogin=!1,e.next=13,this.alertController.create({backdropDismiss:!1,header:"\xa1Hey!",message:n.msg,buttons:["Adelante"]});case 13:return o=e.sent,e.next=16,o.present();case 16:case"end":return e.stop()}}),e,this)})))}));case 9:case"end":return n.stop()}}),n,this)})))}}])&&e(o.prototype,t),r&&e(o,r),i}(),v.\u0275fac=function(n){return new(n||v)(b.Ib(a.a),b.Ib(c.g),b.Ib(s.b),b.Ib(l.a),b.Ib(m.a),b.Ib(d.b))},v.\u0275cmp=b.Cb({type:v,selectors:[["app-login"]],decls:5,vars:3,consts:[["titulo","Inicia Sesi\xf3n"],[1,"ion-padding"],[4,"ngIf"],["class","ion-text-center",4,"ngIf"],["class","ion-text-center ion-margin-start ion-margin-end",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"ion-margin-start","ion-margin-end","ion-margin-bottom"],[1,"ion-margin-top"],["slot","start","color","success","name","at-outline"],["type","text","placeholder","nautilusapp@ejemplo.com","autocomplete","off","formControlName","email"],[1,"ion-padding-top"],["slot","start","color","warning","name","key-outline"],["type","password","placeholder","Tu contrase\xf1a","autocomplete","off","min","8","formControlName","password"],[1,"ion-margin","ion-padding"],[1,"ion-margin-start","ion-padding-end"],["color","secondary","expand","block","shape","round","fill","outline",1,"ion-margin-start","ion-margin-end",3,"click"],[1,"ion-text-center"],[1,"ion-padding-bottom"],[1,"avatar",3,"src"],[1,"btnChangeUser",3,"click"],["type","password","placeholder","Contrase\xf1a","autocomplete","off","min","8","formControlName","password"],[1,"ion-text-center","ion-margin-start","ion-margin-end"],[1,"ion-margin"],["color","primary"]],template:function(n,e){1&n&&(b.Jb(0,"app-header",0),b.Lb(1,"ion-content",1),b.ec(2,f,18,1,"div",2),b.ec(3,p,18,3,"div",3),b.ec(4,h,6,0,"div",4),b.Kb()),2&n&&(b.xb(2),b.Yb("ngIf",!1===e.formRecent),b.xb(1),b.Yb("ngIf",!0===e.formRecent),b.xb(1),b.Yb("ngIf",!0===e.tryLogin))},directives:[g.a,s.q,r.i,a.k,a.h,a.c,s.D,s.y,s.t,s.x,s.bb,a.g,a.b,s.i,s.k,s.l,s.M],styles:["ion-list[_ngcontent-%COMP%]{margin-top:0!important;padding-top:0!important}.avatar[_ngcontent-%COMP%]{border-radius:100%;width:25%}.btnChangeUser[_ngcontent-%COMP%]{cursor:pointer;color:var(--ion-color-medium-tint);font-weight:500;transition:.1s ease}.btnChangeUser[_ngcontent-%COMP%]:active, .btnChangeUser[_ngcontent-%COMP%]:hover{color:var(--ion-color-dark-tint)}"]}),v)}],k=((L=function e(){n(this,e)}).\u0275mod=b.Gb({type:L}),L.\u0275inj=b.Fb({factory:function(n){return new(n||L)},imports:[[c.i.forChild(y)],c.i]}),L),w=t("j1ZV"),K=((x=function e(){n(this,e)}).\u0275mod=b.Gb({type:x}),x.\u0275inj=b.Fb({factory:function(n){return new(n||x)},imports:[[r.b,a.d,s.R,a.i,k,w.a]]}),x)}}])}();