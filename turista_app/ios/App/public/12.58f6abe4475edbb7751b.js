(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Db2U:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("AytR"),r=n("fXoL"),i=n("tk/3"),a=n("tyNb"),l=n("M2ZX");let s=(()=>{class e{constructor(e,t,n){this.http=e,this.router=t,this.nativeStorage=n,this.url="/utilizadores/",this.url_info="/utilizadoresInfo/";var r=localStorage.getItem("id");console.log(localStorage.getItem("id")),this.http.get(o.a.apiUrl+this.url_info+r).subscribe(e=>{document.getElementById("nome_completo").innerText="Utilizador:"+e.primeiro_nome+" "+e.ultimo_nome,document.getElementById("email").innerText=e.email,this.http.get(o.a.apiUrl+this.url+r).subscribe(e=>{console.log(e)})})}ngOnInit(){}atualizaPassword(e){var t=localStorage.getItem("id");this.http.put(o.a.apiUrl+this.url+t+"/",{nome:"teste",password:e}).subscribe(e=>{console.log(e)})}getInfo(){this.http.get(o.a.apiUrl+this.url).subscribe(e=>{e.toString()},e=>{})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](i.a),r["\u0275\u0275inject"](a.g),r["\u0275\u0275inject"](l.a))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},MrnJ:function(e,t,n){"use strict";n.r(t),n.d(t,"DadosContaPageModule",function(){return h});var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),l=n("mrSG"),s=n("VF6e"),m=n("fXoL"),d=n("sYmb"),c=n("Db2U");const u=[{path:"",component:(()=>{class e{constructor(e,t,n,o,r){this.translateService=e,this.router=t,this.dadosContaApi=n,this.alertController=o,this.modalController=r,this.language=this.translateService.currentLang,this.showPass=!1,this.passwordIconToggle="eye",this.email_get=this.dadosContaApi.email_get,this.translateService.use(this.language)}ngOnInit(){}alterarPass(){this.presentModal()}presentModal(){return Object(l.a)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:s.a,cssClass:"reset-password-modal.page.scss"});return yield e.present()})}togglePass(){this.showPass=!this.showPass,this.passwordIconToggle="eye"==this.passwordIconToggle?"eye-off":"eye"}getInfo(){this.dadosContaApi.getInfo()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](d.e),m["\u0275\u0275directiveInject"](a.g),m["\u0275\u0275directiveInject"](c.a),m["\u0275\u0275directiveInject"](i.AlertController),m["\u0275\u0275directiveInject"](i.ModalController))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-dados-conta"]],decls:28,vars:0,consts:[[2,"text-align","center"],["slot","start"],["menu","main-menu"],["lines","none"],["id","nome_completo"],["name","mail","slot","start"],["id","email","readonly","true"],["name","call","slot","start"],["id","phone","inputmode","numeric","readonly","true"],["expand","block",3,"click"],["name","create-outline"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header"),m["\u0275\u0275elementStart"](1,"ion-toolbar"),m["\u0275\u0275elementStart"](2,"ion-title",0),m["\u0275\u0275text"](3,"Dados Pessoais"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-buttons",1),m["\u0275\u0275element"](5,"ion-menu-button",2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"ion-content"),m["\u0275\u0275elementStart"](7,"ion-list",3),m["\u0275\u0275elementStart"](8,"ion-item"),m["\u0275\u0275element"](9,"ion-avatar",1),m["\u0275\u0275elementStart"](10,"ion-label"),m["\u0275\u0275element"](11,"h1",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"ion-item"),m["\u0275\u0275element"](13,"ion-icon",5),m["\u0275\u0275elementStart"](14,"ion-label"),m["\u0275\u0275elementStart"](15,"h1"),m["\u0275\u0275text"](16,"Email"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](17,"ion-input",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"ion-item"),m["\u0275\u0275element"](19,"ion-icon",7),m["\u0275\u0275elementStart"](20,"ion-label"),m["\u0275\u0275elementStart"](21,"h2"),m["\u0275\u0275text"](22,"Telem\xf3vel"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](23,"ion-input",8),m["\u0275\u0275text"](24,"988122453"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](25,"ion-button",9),m["\u0275\u0275listener"]("click",function(){return t.alterarPass()}),m["\u0275\u0275element"](26,"ion-icon",10),m["\u0275\u0275text"](27," Alterar Password "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},directives:[i.IonHeader,i.IonToolbar,i.IonTitle,i.IonButtons,i.IonMenuButton,i.IonContent,i.IonList,i.IonItem,i.IonAvatar,i.IonLabel,i.IonIcon,i.IonInput,i.TextValueAccessor,i.IonButton],styles:["component-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:600;font-size:18px}component-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-light)}component-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{align-self:start;margin-top:10px;margin-right:29px;color:var(--text-lightest)}"]}),e})()},{path:"reset-password-modal",loadChildren:()=>n.e(14).then(n.bind(null,"JRNT")).then(e=>e.ResetPasswordModalPageModule)}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[a.i.forChild(u)],a.i]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[o.CommonModule,r.FormsModule,i.IonicModule,p]]}),e})()},VF6e:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("mrSG"),r=n("3Pt+"),i=n("fXoL"),a=n("TEn/"),l=n("Db2U");let s=(()=>{class e{constructor(e,t,n,o){this.formBuilder=e,this.alertController=t,this.dadosContaApi=n,this.modalCtr=o,this.isSubmitted=!1}alert(e,t){return Object(o.a)(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:""+e,message:""+t,buttons:["OK"]});yield n.present()})}submitForm(){if(this.isSubmitted=!0,!this.ionicForm.valid)return this.alert("Erro","Valide Corretamente os Dados"),!1;var e=this.ionicForm.get("pass").value,t=this.ionicForm.get("pass_repeat").value;e!=t?this.alert("Erro","As Password nao coincidem!"):(this.dadosContaApi.atualizaPassword(t),this.alert("Sucesso","Password alterada !"),this.modalCtr.dismiss())}ngOnInit(){this.ionicForm=this.formBuilder.group({pass:["",[r.Validators.required,r.Validators.minLength(6)]],pass_repeat:["",[r.Validators.required,r.Validators.minLength(6)]]})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](r.FormBuilder),i["\u0275\u0275directiveInject"](a.AlertController),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](a.ModalController))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-reset-password-modal"]],decls:18,vars:1,consts:[["novalidate","",3,"formGroup","ngSubmit"],["lines","full"],["position","floating"],["formControlName","pass","type","text"],["formControlName","pass_repeat","type","text"],["type","submit","color","danger","expand","block"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"ion-header"),i["\u0275\u0275elementStart"](1,"ion-toolbar"),i["\u0275\u0275elementStart"](2,"ion-title"),i["\u0275\u0275text"](3,"Reset Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"ion-content"),i["\u0275\u0275elementStart"](5,"form",0),i["\u0275\u0275listener"]("ngSubmit",function(){return t.submitForm()}),i["\u0275\u0275elementStart"](6,"ion-item",1),i["\u0275\u0275elementStart"](7,"ion-label",2),i["\u0275\u0275text"](8,"Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](9,"ion-input",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"ion-item",1),i["\u0275\u0275elementStart"](11,"ion-label",2),i["\u0275\u0275text"](12,"Repita a Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](13,"ion-input",4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"ion-row"),i["\u0275\u0275elementStart"](15,"ion-col"),i["\u0275\u0275elementStart"](16,"ion-button",5),i["\u0275\u0275text"](17,"Submit"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("formGroup",t.ionicForm))},directives:[a.IonHeader,a.IonToolbar,a.IonTitle,a.IonContent,r["\u0275angular_packages_forms_forms_ba"],r.NgControlStatusGroup,r.FormGroupDirective,a.IonItem,a.IonLabel,a.IonInput,a.TextValueAccessor,r.NgControlStatus,r.FormControlName,a.IonRow,a.IonCol,a.IonButton],styles:[""]}),e})()}}]);