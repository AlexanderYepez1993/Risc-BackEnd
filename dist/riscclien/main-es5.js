function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<app-hero [hidden]=\"hideElement\"></app-hero>\r\n<div class=\"container\">\r\n    <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n        <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n    </ngx-spinner>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cargas-his/cargas-his.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cargas-his/cargas-his.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesCargasHisCargasHisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container cuerpo mt-5 mb-5\">\r\n    <app-plantilla-inicio></app-plantilla-inicio>\r\n    <p-panel header=\"CARGAS HIS\" [toggleable]=\"true\" [style]=\"{ 'margin-bottom': '20px' }\">\r\n        <p-panel header=\"Maestro Paciente\">\r\n            <p-fileUpload name=\"archivopaciente\" [(url)]=\"urlPac\" chooseLabel=\"Elegir Archivo\" uploadLabel=\"Cargar Archivo\" cancelLabel=\"Cancelar\" (onSelect)=\"seleccionarArchivo()\" [(headers)]=\"headers\" (onUpload)=\"cargoPaciente($event)\" (onSend)=\"envioPaciente()\"\r\n                #mpa></p-fileUpload>\r\n            <div>\r\n                <p-messages key=\"mensajeMaestroPaciente\"></p-messages>\r\n            </div>\r\n        </p-panel>\r\n        <p-panel header=\"Maestro Personal\">\r\n            <p-fileUpload name=\"archivopersonal\" [(url)]=\"urlPer\" chooseLabel=\"Elegir Archivo\" uploadLabel=\"Cargar Archivo\" cancelLabel=\"Cancelar\" (onSelect)=\"seleccionarArchivo()\" (onUpload)=\"cargoPersonal($event)\" #mpe></p-fileUpload>\r\n            <div>\r\n                <p-messages key=\"mensajeMaestroPersonal\"></p-messages>\r\n            </div>\r\n        </p-panel>\r\n        <p-panel header=\"Maestro Registrador\">\r\n            <p-fileUpload name=\"archivoregistrador\" [(url)]=\"urlReg\" chooseLabel=\"Elegir Archivo\" uploadLabel=\"Cargar Archivo\" cancelLabel=\"Cancelar\" (onSelect)=\"seleccionarArchivo()\" (onUpload)=\"cargoRegistrador($event)\" #mre></p-fileUpload>\r\n            <div>\r\n                <p-messages key=\"mensajeMaestroRegistrador\"></p-messages>\r\n            </div>\r\n        </p-panel>\r\n        <p-panel header=\"Reporte Plano\">\r\n            <p-fileUpload name=\"archivoreporteplano\" [(url)]=\"urlRep\" chooseLabel=\"Elegir Archivo\" uploadLabel=\"Cargar Archivo\" cancelLabel=\"Cancelar\" (onSelect)=\"seleccionarArchivo()\" [(headers)]=\"headers\" (onUpload)=\"cargoReporte($event)\" #mrp></p-fileUpload>\r\n\r\n            <div>\r\n                <p-messages key=\"mensajeMaestroRpt\"></p-messages>\r\n            </div>\r\n        </p-panel>\r\n\r\n        <div class=\"center-block\" style=\"text-align: center;\">\r\n            <p-button label=\"Ejecutar Control de Calidad\" class=\"boton\" #bc disabled=\"true\" (onClick)=\"llamar_control_his()\"></p-button>\r\n            <p-button label=\"Descargar Control 2\" class=\"boton\" #bcc2 (onClick)=\"llamar_control_his2()\"></p-button>\r\n            <p-button label=\"Generar Reportes\" class=\"boton\" #br disabled=\"true\"></p-button>\r\n        </div>\r\n    </p-panel>\r\n    <p-toast showTransitionOptions=\"700ms ease-out\"></p-toast>\r\n\r\n    <p-dialog header=\"Generacion de Control de Calidad\" position=\"center\" [(visible)]=\"muestraControl\" [modal]=\"true\" [style]=\"{ width: '80vw' }\" [maximizable]=\"true\" [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-md-4\"></div>\r\n            <div class=\"ui-md-4\">\r\n                <h5>Seleccione Periodo a Generar</h5>\r\n                <p-calendar [(ngModel)]=\"periodoselec\" view=\"month\" dateFormat=\"mm/yy\" [yearNavigator]=\"true\" yearRange=\"2000:2030\" [readonlyInput]=\"true\" (onSelect)=\"mesCambia($event)\"></p-calendar>\r\n            </div>\r\n            <div class=\"ui-md-4\"></div>\r\n\r\n            <div class=\"ui-md-12\">\r\n                <p-scrollPanel [style]=\"{ width: '100%', height: '600px' }\" styleClass=\"custombar2\">\r\n                    <p-table [value]=\"registroscc\" [style]=\"{ width: '1580%', height: '200px' }\">\r\n                        <ng-template pTemplate=\"header\">\r\n                            <tr>\r\n                                <th *ngFor=\"let col of cols\">\r\n                                    {{ col.header }}\r\n                                </th>\r\n                            </tr>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"body\" let-car>\r\n                            <tr>\r\n                                <td *ngFor=\"let col of cols\" class=\"ui-resizable-column\">\r\n                                    {{ car[col.field] }}\r\n                                </td>\r\n                            </tr>\r\n                        </ng-template>\r\n                    </p-table>\r\n                    <div class=\"msg-carga\" *ngIf=\"verespinner\">\r\n                        <p-progressSpinner [style]=\"{ width: '100px', height: '100px' }\"></p-progressSpinner>\r\n                    </div>\r\n                </p-scrollPanel>\r\n\r\n                <br />\r\n                <br />\r\n\r\n                <button type=\"button\" pButton icon=\"pi pi-file-excel\" iconPos=\"left\" label=\"EXPORTAR A EXCEL\" (click)=\"exportExcel()\" style=\"margin-right: 0.5em;\" class=\"ui-button-success\" #bee></button>\r\n            </div>\r\n        </div>\r\n\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"pi pi-check\" label=\"Iniciar\" (click)=\"iniciarcontrol()\" #bicc [(disabled)]=\"biccdisabled\"></button>\r\n            <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"muestraControl = false\" label=\"Cancelar\" class=\"ui-button-secondary\"></button>\r\n        </p-footer>\r\n    </p-dialog>\r\n\r\n    <p-dialog header=\"Generacion de Control de Calidad\" position=\"center\" [(visible)]=\"muestraconfirmacion\" [modal]=\"false\" [style]=\"{ width: '40vw' }\" [maximizable]=\"false\" [baseZIndex]=\"10000\">\r\n        CULMINO CON EXITO LA GENERACION DE CONTROL DE CALIDAD\r\n    </p-dialog>\r\n\r\n    <span _ngcontent-kfg-c61=\"\" class=\"version\"> Version Actual: 0.1.0@03</span>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cargas-sis/cargas-sis.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cargas-sis/cargas-sis.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesCargasSisCargasSisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-md-4\"></div>\r\n    <div class=\"ui-g-4 ui-md-4\">\r\n        <h5>Seleccione Periodo</h5>\r\n        <p-calendar [(ngModel)]=\"periodoselec\" view=\"month\" dateFormat=\"mm/yy\" [yearNavigator]=\"true\"\r\n         yearRange=\"2000:2030\" [readonlyInput]=\"true\"\r\n         (onSelect)=\"mesCambia($event)\"></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-md-4\"></div>\r\n\r\n    <div class=\"ui-g-3 ui-md-3\"></div>\r\n    <div class=\"ui-g-6 ui-md-6\">\r\n        <p-fileUpload name=\"archivoSis\" [(url)]=\"urlSis\" (onSelect)=\"seleccionarArchivo()\" (onUpload)=\"cargoSis($event)\" [(headers)]=\"headers\" >\r\n        </p-fileUpload>\r\n    </div>\r\n    <div class=\"ui-g-3 ui-md-3\"></div>\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesDescargasDescargasHisCcDescargasHisCcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-g-4 ui-md-4\">\r\n    \r\n</div>\r\n<div class=\"ui-g-4 ui-md-4\">\r\n    <h5>Seleccione el Periodo a Descargar</h5>\r\n    <p-calendar [(ngModel)]=\"periodo\" view=\"month\" dateFormat=\"mm/yy\" [yearNavigator]=\"true\" yearRange=\"2000:2030\" [readonlyInput]=\"true\"></p-calendar>\r\n    <p-button label=\"DESCARGAR\" styleClass=\"ui-button-info\"(click)=\"descargar()\"></p-button>\r\n</div>\r\n<div class=\"ui-g-4 ui-md-4\">\r\n  \r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container-fluid text-center\">\n        <span class=\"text-muted\">Copyright &copy; 2020 Dirección Regional de Salud Cajamarca. Todos los derechos reservados</span>\n    </div>\n    <div class=\"container-fluid text-center\">\n        <span class=\"text-muted\">Diseñado y programado por la Oficina de Informática, Estadística y Telecomunicaciones</span>\n    </div>\n    <div class=\"container-fluid text-center\">\n        <a href=\"http://www.diresacajamarca.gob.pe\" target=\"_blank\">www.diresacajamarca.gob.pe</a>\n    </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/hero/hero.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/hero/hero.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesHeroHeroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h1 class=\"display-3\">TITULO</h1>\n        <p>AGREGAR CONTENIDO</p>\n        <p>\n            <a class=\"btn btn-primary btn-lg\" routerLink=\"/home\" role=\"button\">Leer más &raquo;</a>\n        </p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/inicio/inicio.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/inicio/inicio.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesInicioInicioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>BIENVENIDOS:</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-xl navbar-dark fixed-top bg-primary\" data-toggle=\"collapse\" data-target=\"#mainNavbar.show\">\r\n    <a class=\"navbar-brand\" routerLink=\"/user/inicio\">{{ app_name }}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-controls=\"mainNavbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item text-left\" *ngIf=\"islogged && accessRegister\">\r\n                <i class=\"navbar-brand \"> Bienvenido(a): {{ user.nombres }} {{ user.apellido_paterno }} {{ user.apellido_materno }}</i>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav mc-auto\">\r\n            <li class=\"nav-item text-left\" *ngIf=\"islogged && accessRegister\">\r\n                <i class=\"navbar-brand \"> {{ user.tipo_ambito }} : {{ user.descripcion_ambito }}</i>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto \">\r\n            <li class=\"nav-item\" *ngIf=\"islogged\">\r\n                <a class=\"nav-link\" routerLink=\"/home\">Tutoriales </a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"islogged \">\r\n                <a class=\"nav-link\" routerLink=\"/user/profile\">Perfil</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"islogged && validarPermiso() \">\r\n                <a class=\"nav-link\" routerLink=\"/user/register\">Registrar Usuario</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"islogged && validarPermiso() \">\r\n                <a class=\"nav-link\" routerLink=\"/user/register/list-usuarios\">Listar Usuarios</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!islogged\">\r\n                <a class=\"nav-link\" routerLink=\"/user/login\">Iniciar Sesión</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"islogged \">\r\n                <a class=\"nav-link\" routerLink=\"/home\" (click)=\"onLogout()\">Cerrar Sesión</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/page404/page404.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/page404/page404.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesPage404Page404ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-3\">PÁGINA NO ENCONTRADA</h1>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/plantilla-inicio/plantilla-inicio.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/plantilla-inicio/plantilla-inicio.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesPlantillaInicioPlantillaInicioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container cuerpo mt-5 mb-5\">\r\n    <div class=\"ui-g container banner\">\r\n        <div class=\"titulosub ui-g-12\">\r\n            TIPO DE AMBITO : {{ tipo_ambito }} <br /> DESCRIPCION DE AMBITO : {{ descripcion_ambito }}\r\n        </div>\r\n    </div>\r\n    <div class=\"alert alert-primary justify-content-center\" role=\"alert\">\r\n        <div class=\"text-center\">\r\n            REPOSITORIO DE INFORMACION DE SALUD CAJAMARCA\r\n        </div>\r\n        <app-menu-principal [punto_digitacion]=\"currentUser.descripcion_ambito\" [(ano)]=\"ano\" [(mes)]=\"mes\"></app-menu-principal>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <br />\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/change-password/change-password.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/change-password/change-password.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesUsuariosChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"changePassword\" class=\"mb-5 mt-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n                <div class=\"card_login\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <form #formChangePassword=\"ngForm\" (ngSubmit)=\"validarPassword()\">\n                                <h4 class=\"h4 mb-4 font-weight-normal\">CAMBIAR CONTRASEÑA</h4>\n                                <div class=\"alert alert-primary\" *ngIf=\"!isError\" role=\"alert\">\n                                    <h5 class=\"alert-heading\">¡IMPORTANTE!</h5>\n                                    <p>Por motivos de seguridad es necesario cambiar la contraseña.</p>\n                                </div>\n                                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isSuccess\">\n                                    {{msgSuccess}}\n                                </div>\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                                    {{msgError}}\n                                </div>\n                                <div class=\"form-group\">\n                                    <h6 style=\"text-align: left;\">DNI:</h6>\n                                    <input type=\"text\" #dni=\"ngModel\" name=\"dni\" class=\"form-control\" placeholder=\"DNI\" [(ngModel)]=\"datos.dni\" [disabled]=\"true\" required />\n                                </div>\n                                <div class=\"form-group is-invalid was-validated\">\n                                    <h6 style=\"text-align: left;\">Contraseña nueva:</h6>\n                                    <input type=\"password\" #passwordNuevo=\"ngModel\" name=\"passwordNuevo\" class=\"form-control is-invalid\" placeholder=\"Ingresar contraseña nueva\" [(ngModel)]=\"datos.passwordNuevo\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*)(?=.*\\W.*)[a-zA-Z0-9\\S]{8,15}$\" maxlength=\"15\"\n                                        [disabled]=\"isError\" required />\n                                    <div class=\"valid-feedback text-left\" *ngIf=\"passwordNuevo.valid\">\n                                        CONTRASEÑA VÁLIDA\n                                    </div>\n                                    <div class=\"invalid-feedback\" *ngIf=\"!passwordNuevo.valid\">\n                                        <div class=\"text-left\">\n                                            <div>* MÍNIMO 8 CARACTERES<br></div>\n                                            <div>* AL MENOS 1 LETRA MAYÚSCULA<br></div>\n                                            <div>* AL MENOS 1 LETRA MINÚSCULA<br></div>\n                                            <div>* AL MENOS 1 NÚMERO<br></div>\n                                            <div>* AL MENOS 1 CARACTER ESPECIAL<br></div>\n                                            <div>* NO SE PERMITEN ESPACIOS<br></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <br />\n                                <div class=\"form-group is-invalid was-validated\">\n                                    <h6 style=\"text-align: left;\">Contraseña nueva (confirmación):</h6>\n                                    <input type=\"password\" #replyPassword=\"ngModel\" name=\"replyPpassword\" class=\"form-control is-invalid\" placeholder=\"Confirmar contraseña nueva\" [(ngModel)]=\"datos.replyPassword\" (disabled)=\"!passwordNuevo.valid\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*)(?=.*\\W.*)[a-zA-Z0-9\\S]{8,15}$\"\n                                        maxlength=\"15\" (disabled)=\"isError\" required />\n                                    <div class=\"valid-feedback text-left\" *ngIf=\"replyPassword.value == passwordNuevo.value\">\n                                        CONTRASEÑAS COINCIDEN\n                                    </div>\n                                    <div class=\"invalid-feedback text-left\" *ngIf=\"replyPassword.value != passwordNuevo.value\">\n                                        CONTRASEÑAS NO COINCIDEN\n                                    </div>\n                                </div>\n                                <br />\n                                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!formChangePassword.valid\">ACTUALIZAR CONTRASEÑA</button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesUsuariosListUsuariosListUsuariosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-5 mb-5\">\n    <div class=\"col table-responsive-xl\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th style=\"text-align: center;\" scope=\"col\">DNI</th>\n                    <th style=\"text-align: center;\" scope=\"col\">Apellido Paterno</th>\n                    <th style=\"text-align: center;\" scope=\"col\">Apellido Materno</th>\n                    <th style=\"text-align: center;\" scope=\"col\">Nombres</th>\n                    <th style=\"text-align: center;\" scope=\"col\">Email</th>\n                    <th style=\"text-align: center;\" scope=\"col\">Tipo de ambito</th>\n                    <th style=\"text-align: center;\" scope=\"col\">Descripción de ambito</th>\n                    <th style=\"text-align: center;\" scope=\"col\">Estado</th>\n                    <th style=\"text-align: center;\" scope=\"col\">Acciones</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let usuario of usuarios | paginate: {itemsPerPage: 10, currentPage: pageActual}; let i = index\">\n                    <th scope=\"row\">{{ i + 1 }}</th>\n                    <td>{{ usuario.dni }}</td>\n                    <td>{{ usuario.apellido_paterno }}</td>\n                    <td>{{ usuario.apellido_materno }}</td>\n                    <td>{{ usuario.nombres }}</td>\n                    <td>{{ usuario.email }}</td>\n                    <td>{{ usuario.tipo_ambito }}</td>\n                    <td>{{ usuario.descripcion_ambito }}</td>\n                    <td>{{ usuario.estado }}</td>\n                    <td>\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"acciones\">\n                            <p-toast [style]=\"{marginTop: '40px'}\"></p-toast>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onPreUpdate(usuario)\" data-toggle=\"modal\" data-target=\"#ModalNew\">Modificar</button>\n                            <button type=\"button\" class=\"btn btn-warning\" (click)=\"cambiarEstado(usuario)\">{{usuario.estado == 'ACTIVO' ? 'Inactivar' : 'Activar'}}</button>\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"restablecerPassword(usuario)\">Restablecer</button>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <pagination-controls (pageChange)=\"pageActual = $event\"></pagination-controls>\n    </div>\n</div>\n<!-- Modal N° 01 -->\n<div class=\"modal fade\" id=\"ModalNew\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" data-backdrop=\"static\" data-keyboard=\"false\">\n    <div class=\"modal-dialog modal-md\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">MODIFICAR USUARIO</h5>\n                <button id=\"btnCerrar\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #formRegister=\"ngForm\" (ngSubmit)=\"onUpdateUsuario(formRegister)\">\n                    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isSuccess\">\n                        {{msgSuccess}}\n                    </div>\n                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                        {{msgError}}\n                    </div>\n                    <div class=\"form-row was-validated\">\n                        <div class=\"form-group is-invalid col-lg-6 col-sm-6 col-6\">\n                            <h6 style=\"text-align: left;\">Tipo de Ambito:</h6>\n                            <select #tipo_ambito=\"ngModel\" name=\"tipo_ambito\" class=\"custom-select\" (change)=\"devuelveDescripcionAmbito()\" [(ngModel)]=\"this.authService.selectedUsuario.tipo_ambito\" required>\n                                <option value=\"\" disabled hidden selected>Seleccionar una opción</option>\n                                    <ng-container *ngFor=\"let tipo_ambito of tipos_ambito\">\n                                        <option [value]=\"tipo_ambito.descripcion_tipo_ambito\">{{tipo_ambito.descripcion_tipo_ambito}}</option>\n                                    </ng-container>\n                            </select>\n                            <div class=\"valid-feedback text-left\" *ngIf=\"tipo_ambito.valid\">\n                                CAMPO VÁLIDO\n                            </div>\n                            <div class=\"invalid-feedback text-left\" *ngIf=\"!tipo_ambito.valid\">\n                                SELECCIONAR UNA OPCIÓN\n                            </div>\n                        </div>\n                        <div class=\"form-group is-invalid col-lg-6 col-sm-6 col-6\">\n                            <h6 style=\"text-align: left;\">Descripción de Ambito:</h6>\n                            <select #descripcion_ambito=\"ngModel\" name=\"descripcion_ambito\" class=\"custom-select\" [(ngModel)]=\"this.authService.selectedUsuario.descripcion_ambito\" required>\n                                <option value=\"\" disabled hidden selected>Seleccionar una opción</option>\n                                    <ng-container *ngFor=\"let descripcion of descripcionAmbito\">\n                                        <option [value]=\"descripcion.DATO\">{{descripcion.DATO}}</option>\n                                    </ng-container>\n                                </select>\n                            <div class=\"valid-feedback text-left\" *ngIf=\"descripcion_ambito.valid\">\n                                CAMPO VÁLIDO\n                            </div>\n                            <div class=\"invalid-feedback text-left\" *ngIf=\"!descripcion_ambito.valid\">\n                                SELECCIONAR UNA OPCIÓN\n                            </div>\n                        </div>\n                    </div>\n                    <nav>\n                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                            <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Datos Personales</a>\n                            <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Roles</a>\n                            <!-- <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Contact</a> -->\n                        </div>\n                    </nav>\n                    <div class=\"tab-content\" id=\"nav-tabContent\">\n                        <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n                            <br/>\n                            <div class=\"form-row\">\n                                <div class=\"form-group is-invalid col-lg-6 col-sm-6 col-6\">\n                                    <h6 style=\"text-align: left;\">DNI:</h6>\n                                    <input type=\"text\" name=\"dni\" class=\"form-control\" placeholder=\"Ingresar DNI\" [(ngModel)]=\"this.authService.selectedUsuario.dni\" disabled required />\n                                </div>\n                                <div class=\"form-group col-lg-6 col-sm-6 col-6\">\n                                    <h6 style=\"text-align: left;\">Nombres</h6>\n                                    <input type=\"text\" id=\"nombres\" name=\"nombres\" class=\"form-control\" placeholder=\"Nombres\" [(ngModel)]=\"this.authService.selectedUsuario.nombres\" disabled required />\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-lg-6 col-sm-6 col-6\">\n                                    <h6 style=\"text-align: left;\">Apellido Paterno</h6>\n                                    <input type=\"text\" id=\"apellido_paterno\" name=\"apellido_paterno\" class=\"form-control\" placeholder=\"Apellido Paterno\" [(ngModel)]=\"this.authService.selectedUsuario.apellido_paterno\" disabled required />\n                                </div>\n                                <div class=\"form-group col-lg-6 col-sm-6 col-6\">\n                                    <h6 style=\"text-align: left;\">Apellido Materno</h6>\n                                    <input type=\"text\" id=\"apellido_materno\" name=\"apellido_materno\" class=\"form-control\" placeholder=\"Apellido Materno\" [(ngModel)]=\"this.authService.selectedUsuario.apellido_materno\" disabled required />\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group is-invalid col-lg-6 col-sm-6 col-6 was-validated\">\n                                    <h6 style=\"text-align: left;\">Email:</h6>\n                                    <input type=\"email\" #email=\"ngModel\" name=\"email\" class=\"form-control is-invalid\" placeholder=\"Ingresar email\" [(ngModel)]=\"this.authService.selectedUsuario.email\" pattern=\"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$\"\n                                        required />\n                                    <div class=\"valid-feedback text-left\" *ngIf=\"email.valid\">\n                                        EMAIL VÁLIDO\n                                    </div>\n                                    <div class=\"invalid-feedback text-left\" *ngIf=\"!email.valid\">\n                                        INGRESAR EMAIL\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\n                            <br/>\n                            <div class=\"form-row\">\n                                <div class=\"col-7\"></div>\n                                <div class=\"col-5\">\n                                    <button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"!tipo_ambito.valid || validarModal()\" data-toggle=\"modal\" data-target=\"#myModalInfo\">Agregar</button> &nbsp;\n                                    <button type=\"button\" class=\"btn btn-danger btn-sm\" [disabled]=\"roles_seleccionados.length==0\" (click)=\"removerRol(roles_seleccionados,fila_seleccionada)\">Remover</button>\n                                </div>\n                            </div>\n                            <br>\n                            <table id=\"tableRoles\" class=\"table table-hover\" style=\"cursor: pointer;\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"text-align: center; display: none;\" scope=\"col\">Id</th>\n                                        <th style=\"text-align: center;\" scope=\"col\">Rol</th>\n                                        <th style=\"text-align: center;\" scope=\"col\">Descripcion</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let rol of roles_seleccionados; let i = index\" [appClickColor]=\"rol\" (click)=\"seleccionarFila(rol)\">\n                                        <td style=\"display: none;\"> {{ rol.id_rol_risc }} </td>\n                                        <td> {{ rol.nombre_rol_risc }} </td>\n                                        <td> {{ rol.descripcion_rol_risc }} </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">...</div> -->\n                    </div>\n                    <br />\n                    <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!formRegister.valid || roles_seleccionados.length==0\">REGISTRAR</button>\n                    <!-- <div class=\"form-group\">\n                            <a routerLink=\"/user/login\" class=\"form-control login-user\">¿Desea iniciar sesión?</a>\n                         </div> -->\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal N° 02 -->\n<div class=\"modal fade\" id=\"myModalInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" data-backdrop=\"static\" data-keyboard=\"false\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">ROLES DEL USUARIO</h5>\n                <button id=\"btnModal\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form class=\"form-usuario\" (ngSubmit)=\"enviarRol()\">\n                    <table class=\"table table-hover\" style=\"cursor: pointer;\">\n                        <thead>\n                            <tr>\n                                <th style=\"text-align: center; display: none;\" scope=\"col\">Id</th>\n                                <th style=\"text-align: center;\" scope=\"col\">Rol</th>\n                                <th style=\"text-align: center;\" scope=\"col\">Descripcion</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let rol of roles; let i = index\" [appClickColor]=\"rol\" (click)=\"seleccionarFilaModal(rol)\">\n                                <td style=\"display: none;\"> {{ rol.id_rol_risc }} </td>\n                                <td> {{ rol.nombre_rol_risc }} </td>\n                                <td> {{ rol.descripcion_rol_risc }} </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <p-toast [style]=\"{marginTop: '40px'}\"></p-toast>\n                    <button type=\"submit\" name=\"btnSeleccionar\" class=\"btn btn-primary float-right\">SELECCIONAR</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/login/login.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/login/login.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesUsuariosLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"login\" class=\"mb-5 mt-5\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n                <div class=\"card_login\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <form #formLogin=\"ngForm\" (ngSubmit)=\"onLogin(formLogin)\">\r\n                                <h4 class=\"h4 mb-4 font-weight-normal\" *ngIf=\"!isError\">INICIO DE SESIÓN</h4>\r\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                                    {{msgError}}\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <h6 style=\"text-align: left;\">Usuario:</h6>\r\n                                    <input type=\"text\" #dni=\"ngModel\" name=\"dni\" class=\"form-control\" placeholder=\"Ingrese su usuario\" [(ngModel)]=\"user.dni\" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength=\"8\" maxlength=\"8\" [disabled]=\"isError\" required />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <h6 style=\"text-align: left;\">Contraseña:</h6>\r\n                                    <input type=\"password\" id=\"password\" #password=\"ngModel\" name=\"password\" class=\"form-control\" placeholder=\"Ingrese su contraseña\" [(ngModel)]=\"user.password\" maxlength=\"15\" [disabled]=\"isError\" required />\r\n                                    <div class=\"form-group form-check\" style=\"text-align: left;\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"checkPassword\" (change)=\"hideOrShowPassword()\">\r\n                                        <label class=\"form-check-label\" for=\"checkPassword\">Mostrar constraseña</label>\r\n                                    </div>\r\n                                </div>\r\n                                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!formLogin.valid\">INICIAR SESIÓN</button>\r\n                                <!-- <div class=\"form-group\">\r\n                                    <a routerLink=\"/user/register\" class=\"form-control login-user\">¿Desea registrar un nuevo usuario?</a>\r\n                                </div> -->\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/profile/profile.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/profile/profile.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesUsuariosProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"profile\" class=\"container mb-5\">\r\n    <div class=\"row mt-5\">\r\n        <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\r\n            </div>\r\n            <div class=\"row user-details\">\r\n                <div class=\"col-12\">\r\n                    <img src=\"../../../../assets/user_profile.jpg\" class=\"rounded-circle img-thumbnail\" alt=\"profile\" />\r\n                    <h5 class=\"text-center\">DNI: {{ user.dni }}</h5>\r\n                    <hr />\r\n                    <p class=\"text-center\">NOMBRES: {{ user.nombres }}</p>\r\n                    <p class=\"text-center\">APELLIDOS: {{ user.apellido_paterno }} {{ user.apellido_materno }}</p>\r\n                    <p class=\"text-center\">EMAIL: {{ user.email }}</p>\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#ModalCP\">CAMBIAR CONTRASEÑA</button>\r\n                    <hr />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-sm-6 col-6\">\r\n                            <h5>TIPO DE AMBITO</h5>\r\n                            <p>{{ user.tipo_ambito }}</p>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-6 col-6\">\r\n                            <h5>DESCRIPCION DE AMBITO</h5>\r\n                            <p>{{ user.descripcion_ambito }}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"ModalCP\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" data-backdrop=\"static\" data-keyboard=\"false\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">CAMBIAR CONTRASEÑA</h5>\r\n                <button #btnCerrar type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"limpiarModal()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"form-usuario\" #formChangePassword=\"ngForm\" (ngSubmit)=\"validarPassword()\">\r\n                    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isSuccess\">\r\n                        {{msgSuccess}}\r\n                    </div>\r\n                    <div class=\"alert alert-danger text-center\" role=\"alert\" *ngIf=\"isError\">\r\n                        {{msgError}}\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <h6>DNI</h6>\r\n                        <input type=\"text\" #dni=\"ngModel\" name=\"dni\" class=\"form-control\" placeholder=\"DNI\" [(ngModel)]=\"datos.dni\" [disabled]=\"true\" required />\r\n                    </div>\r\n                    <div class=\"form-group is-invalid was-validated\">\r\n                        <h6>Contraseña antigua:</h6>\r\n                        <input type=\"password\" #passwordAntiguo=\"ngModel\" name=\"passwordAntiguo\" class=\"form-control is-invalid\" placeholder=\"Ingresar contraseña antigua\" [(ngModel)]=\"datos.passwordAntiguo\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*)(?=.*\\W.*)[a-zA-Z0-9\\S]{8,15}$\"\r\n                            maxlength=\"15\" [disabled]=\"isError\" required/>\r\n                        <div class=\"valid-feedback text-left\" *ngIf=\"passwordAntiguo.valid\">\r\n                            CONTRASEÑA VÁLIDA\r\n                        </div>\r\n                        <div class=\"invalid-feedback\" *ngIf=\"!passwordAntiguo.valid\">\r\n                            CONTRASEÑA INVÁLIDA\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group is-invalid was-validated\">\r\n                        <h6>Contraseña nueva:</h6>\r\n                        <input type=\"password\" #passwordNuevo=\"ngModel\" name=\"passwordNuevo\" class=\"form-control is-invalid\" placeholder=\"Ingresar contraseña nueva\" [(ngModel)]=\"datos.passwordNuevo\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*)(?=.*\\W.*)[a-zA-Z0-9\\S]{8,15}$\" maxlength=\"15\"\r\n                            [disabled]=\"isError\" required/>\r\n                        <div class=\"valid-feedback text-left\" *ngIf=\"passwordNuevo.valid\">\r\n                            CONTRASEÑA VÁLIDA\r\n                        </div>\r\n                        <div class=\"invalid-feedback\" *ngIf=\"!passwordNuevo.valid\">\r\n                            <div class=\"text-left\">\r\n                                <div>* MÍNIMO 8 CARACTERES<br></div>\r\n                                <div>* AL MENOS 1 LETRA MAYÚSCULA<br></div>\r\n                                <div>* AL MENOS 1 LETRA MINÚSCULA<br></div>\r\n                                <div>* AL MENOS 1 NÚMERO<br></div>\r\n                                <div>* AL MENOS 1 CARACTER ESPECIAL<br></div>\r\n                                <div>* NO SE PERMITEN ESPACIOS<br></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group is-invalid was-validated\">\r\n                        <h6>Contraseña nueva (confirmación):</h6>\r\n                        <input type=\"password\" #replyPassword=\"ngModel\" name=\"replyPpassword\" class=\"form-control is-invalid\" placeholder=\"Confirmar contraseña nueva\" [(ngModel)]=\"datos.replyPassword\" (disabled)=\"!passwordNuevo.valid\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d.*)(?=.*\\W.*)[a-zA-Z0-9\\S]{8,15}$\"\r\n                            maxlength=\"15\" [disabled]=\"isError\" required />\r\n                        <div class=\"valid-feedback text-left\" *ngIf=\"replyPassword.value == passwordNuevo.value\">\r\n                            CONTRASEÑAS COINCIDEN\r\n                        </div>\r\n                        <div class=\"invalid-feedback text-left\" *ngIf=\"replyPassword.value != passwordNuevo.value\">\r\n                            CONTRASEÑAS NO COINCIDEN\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!formChangePassword.valid\">ACTUALIZAR CONTRASEÑA</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/register/register.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/register/register.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesUsuariosRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"register\" class=\"mb-5 mt-5\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-6 col-sm-6 col-md-6 mx-auto\">\r\n                <div class=\"card_register\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <form #formRegister=\"ngForm\" (ngSubmit)=\"onRegister(formRegister)\">\r\n                                <h4 class=\"h4 mb-4 font-weight-normal\">REGISTRO DE USUARIO</h4>\r\n                                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isSuccess\">\r\n                                    {{msgSuccess}}\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                                    {{msgError}}\r\n                                </div>\r\n                                <div class=\"form-row was-validated\">\r\n                                    <div class=\"form-group is-invalid col-lg-6 col-sm-6 col-6\">\r\n                                        <h6 style=\"text-align: left;\">Tipo de Ambito:</h6>\r\n                                        <select #tipo_ambito=\"ngModel\" name=\"tipo_ambito\" class=\"custom-select\" (change)=\"devuelveDescripcionAmbito()\" [(ngModel)]=\"user.tipo_ambito\" required>\r\n                                                    <option value=\"\" disabled hidden selected>Seleccionar una opción</option>\r\n                                                    <ng-container *ngFor=\"let tipo_ambito of tipos_ambito\">\r\n                                                        <option [value]=\"tipo_ambito.descripcion_tipo_ambito\">{{tipo_ambito.descripcion_tipo_ambito}}</option>\r\n                                                    </ng-container>\r\n                                        </select>\r\n                                        <div class=\"valid-feedback text-left\" *ngIf=\"tipo_ambito.valid\">\r\n                                            CAMPO VÁLIDO\r\n                                        </div>\r\n                                        <div class=\"invalid-feedback text-left\" *ngIf=\"!tipo_ambito.valid\">\r\n                                            SELECCIONAR UNA OPCIÓN\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group is-invalid col-lg-6 col-sm-6 col-6\" *ngIf=\"tipo_ambito.valid\">\r\n                                        <h6 style=\"text-align: left;\">Descripción de Ambito:</h6>\r\n                                        <select #descripcion_ambito=\"ngModel\" name=\"descripcion_ambito\" class=\"custom-select\" [(ngModel)]=\"user.descripcion_ambito\" required>\r\n                                                    <option value=\"\" disabled hidden selected>Seleccionar una opción</option>\r\n                                                    <ng-container *ngFor=\"let descripcion of descripcionAmbito\">\r\n                                                        <option [value]=\"descripcion.DATO\">{{descripcion.DATO}}</option>\r\n                                                    </ng-container>\r\n                                        </select>\r\n                                        <div class=\"valid-feedback text-left\" *ngIf=\"descripcion_ambito.valid\">\r\n                                            CAMPO VÁLIDO\r\n                                        </div>\r\n                                        <div class=\"invalid-feedback text-left\" *ngIf=\"!descripcion_ambito.valid\">\r\n                                            SELECCIONAR UNA OPCIÓN\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <nav>\r\n                                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                                        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Datos Personales</a>\r\n                                        <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Roles</a>\r\n                                        <!-- <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Contact</a> -->\r\n                                    </div>\r\n                                </nav>\r\n                                <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                                    <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n                                        <br/>\r\n                                        <div class=\"form-row was-validated\">\r\n                                            <div class=\"form-group is-invalid col-lg-6 col-sm-6 col-6 was-validated\">\r\n                                                <h6 style=\"text-align: left;\">DNI:</h6>\r\n                                                <input type=\"text\" #dni=\"ngModel\" name=\"dni\" class=\"form-control is-invalid\" placeholder=\"Ingresar DNI\" [(ngModel)]=\"user.dni\" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength=\"8\" maxlength=\"8\" [disabled]=\"isError\" required />\r\n                                                <div class=\"valid-feedback text-left\" *ngIf=\"dni.valid\">\r\n                                                    DNI VÁLIDO\r\n                                                </div>\r\n                                                <div class=\"invalid-feedback text-left\" *ngIf=\"!dni.valid\">\r\n                                                    INGRESAR DNI\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group col-lg-6 col-sm-6 col-6 text-left\">\r\n                                                <h6 style=\"text-align: left; color: white;\">.</h6>\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"validaDni()\" [disabled]=\"!dni.valid\">VALIDAR</button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-row\">\r\n                                            <div class=\"form-group col-lg-6 col-sm-6 col-6\">\r\n                                                <h6 style=\"text-align: left;\">Apellido Paterno</h6>\r\n                                                <input type=\"text\" id=\"apellido_paterno\" name=\"apellido_paterno\" class=\"form-control\" placeholder=\"Apellido Paterno\" [(ngModel)]=\"user.apellido_paterno\" disabled required />\r\n                                            </div>\r\n                                            <div class=\"form-group col-lg-6 col-sm-6 col-6\">\r\n                                                <h6 style=\"text-align: left;\">Apellido Materno</h6>\r\n                                                <input type=\"text\" id=\"apellido_materno\" name=\"apellido_materno\" class=\"form-control\" placeholder=\"Apellido Materno\" [(ngModel)]=\"user.apellido_materno\" disabled required />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-row\">\r\n                                            <div class=\"form-group col-lg-6 col-sm-6 col-6\">\r\n                                                <h6 style=\"text-align: left;\">Nombres</h6>\r\n                                                <input type=\"text\" id=\"nombres\" name=\"nombres\" class=\"form-control\" placeholder=\"Nombres\" [(ngModel)]=\"user.nombres\" disabled required />\r\n                                            </div>\r\n                                            <div class=\"form-group is-invalid col-lg-6 col-sm-6 col-6 was-validated\">\r\n                                                <h6 style=\"text-align: left;\">Email:</h6>\r\n                                                <input type=\"email\" #email=\"ngModel\" name=\"email\" class=\"form-control is-invalid\" placeholder=\"Ingresar email\" [(ngModel)]=\"user.email\" pattern=\"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$\"\r\n                                                    required />\r\n                                                <div class=\"valid-feedback text-left\" *ngIf=\"email.valid\">\r\n                                                    EMAIL VÁLIDO\r\n                                                </div>\r\n                                                <div class=\"invalid-feedback text-left\" *ngIf=\"!email.valid\">\r\n                                                    INGRESAR EMAIL\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                                        <br/>\r\n                                        <div class=\"form-row\">\r\n                                            <div class=\"col-8\"></div>\r\n                                            <div class=\"col-4\">\r\n                                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"!tipo_ambito.valid || validarModal()\" data-toggle=\"modal\" data-target=\"#myModalInfo\">Agregar</button> &nbsp;\r\n                                                <button type=\"button\" class=\"btn btn-danger btn-sm\" [disabled]=\"roles_seleccionados.length==0\" (click)=\"removerRol(roles_seleccionados,fila_seleccionada)\">Remover</button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <br>\r\n                                        <table id=\"tableRoles\" class=\"table table-hover\" style=\"cursor: pointer;\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th style=\"text-align: center; display: none;\" scope=\"col\">Id</th>\r\n                                                    <th style=\"text-align: center;\" scope=\"col\">Rol</th>\r\n                                                    <th style=\"text-align: center;\" scope=\"col\">Descripcion</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let rol of roles_seleccionados; let i = index\" [appClickColor]=\"rol\" (click)=\"seleccionarFila(rol)\">\r\n                                                    <td style=\"display: none;\"> {{ rol.id_rol_risc }} </td>\r\n                                                    <td> {{ rol.nombre_rol_risc }} </td>\r\n                                                    <td> {{ rol.descripcion_rol_risc }} </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                    <!-- <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">...</div> -->\r\n                                </div>\r\n                                <br />\r\n                                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!formRegister.valid || roles_seleccionados.length==0\">REGISTRAR</button>\r\n                                <!-- <div class=\"form-group\">\r\n                                    <a routerLink=\"/user/login\" class=\"form-control login-user\">¿Desea iniciar sesión?</a>\r\n                                </div> -->\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModalInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" data-backdrop=\"static\" data-keyboard=\"false\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">ROLES DEL USUARIO</h5>\r\n                <button id=\"btnModal\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"form-usuario\" (ngSubmit)=\"enviarRol()\">\r\n                    <table class=\"table table-hover\" style=\"cursor: pointer;\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"text-align: center; display: none;\" scope=\"col\">Id</th>\r\n                                <th style=\"text-align: center;\" scope=\"col\">Rol</th>\r\n                                <th style=\"text-align: center;\" scope=\"col\">Descripcion</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let rol of roles; let i = index\" [appClickColor]=\"rol\" (click)=\"seleccionarFilaModal(rol)\">\r\n                                <td style=\"display: none;\"> {{ rol.id_rol_risc }}</td>\r\n                                <td> {{ rol.nombre_rol_risc }} </td>\r\n                                <td> {{ rol.descripcion_rol_risc }} </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <p-toast [style]=\"{marginTop: '40px'}\"></p-toast>\r\n                    <button type=\"submit\" name=\"btnSeleccionar\" class=\"btn btn-primary float-right\">SELECCIONAR</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPrincipalMenuPrincipalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-megaMenu [model]=\"items\"> </p-megaMenu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reportes/prueba/prueba.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportes/prueba/prueba.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportesPruebaPruebaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reportes/reporte-preliminar/reporte-preliminar.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportes/reporte-preliminar/reporte-preliminar.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportesReportePreliminarReportePreliminarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-panel header=\"SELECCIONE LOS CRITERIOS DE BUSQUEDA\" [toggleable]=\"true\">\r\n    SUBREGION <p-dropdown [options]=\"subregion\" [(ngModel)]=\"subregionselect\" (onChange)=\"seleccionarRed($event)\"  placeholder=\"Selecciona Subregion\"></p-dropdown>\r\n    RED <p-dropdown [options]=\"redesfiltradas\" placeholder=\"Selecciona Red\"></p-dropdown>\r\n    MICRORED <p-dropdown  [(ngModel)]=\"subregionselect\"  placeholder=\"Selecciona Microred\"></p-dropdown>\r\n    IPRESS <p-dropdown [options]=\"subregion\" [(ngModel)]=\"subregionselect\"  placeholder=\"Selecciona Ipress\"></p-dropdown>\r\n</p-panel>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _componentes_cargas_his_cargas_his_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./componentes/cargas-his/cargas-his.component */
    "./src/app/componentes/cargas-his/cargas-his.component.ts");
    /* harmony import */


    var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./componentes/inicio/inicio.component */
    "./src/app/componentes/inicio/inicio.component.ts");
    /* harmony import */


    var _componentes_cargas_sis_cargas_sis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./componentes/cargas-sis/cargas-sis.component */
    "./src/app/componentes/cargas-sis/cargas-sis.component.ts");
    /* harmony import */


    var _componentes_descargas_descargas_his_cc_descargas_his_cc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./componentes/descargas/descargas-his-cc/descargas-his-cc.component */
    "./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.ts");
    /* harmony import */


    var _reportes_reporte_preliminar_reporte_preliminar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./reportes/reporte-preliminar/reporte-preliminar.component */
    "./src/app/reportes/reporte-preliminar/reporte-preliminar.component.ts");
    /* harmony import */


    var _reportes_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./reportes/prueba/prueba.component */
    "./src/app/reportes/prueba/prueba.component.ts");
    /* harmony import */


    var _componentes_usuarios_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./componentes/usuarios/register/register.component */
    "./src/app/componentes/usuarios/register/register.component.ts");
    /* harmony import */


    var _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./componentes/usuarios/login/login.component */
    "./src/app/componentes/usuarios/login/login.component.ts");
    /* harmony import */


    var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./componentes/navbar/navbar.component */
    "./src/app/componentes/navbar/navbar.component.ts");
    /* harmony import */


    var _componentes_plantilla_inicio_plantilla_inicio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./componentes/plantilla-inicio/plantilla-inicio.component */
    "./src/app/componentes/plantilla-inicio/plantilla-inicio.component.ts");
    /* harmony import */


    var _componentes_usuarios_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./componentes/usuarios/profile/profile.component */
    "./src/app/componentes/usuarios/profile/profile.component.ts");
    /* harmony import */


    var _componentes_usuarios_list_usuarios_list_usuarios_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./componentes/usuarios/list-usuarios/list-usuarios.component */
    "./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _componentes_usuarios_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./componentes/usuarios/change-password/change-password.component */
    "./src/app/componentes/usuarios/change-password/change-password.component.ts");
    /* harmony import */


    var _guards_creacion_usuarios_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./guards/creacion-usuarios.guard */
    "./src/app/guards/creacion-usuarios.guard.ts");
    /* harmony import */


    var _guards_cargas_his_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./guards/cargas-his.guard */
    "./src/app/guards/cargas-his.guard.ts");
    /* harmony import */


    var _guards_cargas_sis_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./guards/cargas-sis.guard */
    "./src/app/guards/cargas-sis.guard.ts");
    /* harmony import */


    var _guards_reportes_ambito_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./guards/reportes-ambito.guard */
    "./src/app/guards/reportes-ambito.guard.ts");
    /* harmony import */


    var _guards_reportes_diresa_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./guards/reportes-diresa.guard */
    "./src/app/guards/reportes-diresa.guard.ts");
    /* harmony import */


    var _guards_seguimiento_cargas_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./guards/seguimiento-cargas.guard */
    "./src/app/guards/seguimiento-cargas.guard.ts");

    var routes = [{
      path: "home",
      component: _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]
    }, {
      path: "user/register",
      component: _componentes_usuarios_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_creacion_usuarios_guard__WEBPACK_IMPORTED_MODULE_17__["CreacionUsuariosGuard"]]
    }, {
      path: "user/login",
      component: _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
      path: "user/profile",
      component: _componentes_usuarios_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
    }, {
      path: "user/inicio",
      component: _componentes_plantilla_inicio_plantilla_inicio_component__WEBPACK_IMPORTED_MODULE_12__["PlantillaInicioComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
    }, {
      path: "user/register/list-usuarios",
      component: _componentes_usuarios_list_usuarios_list_usuarios_component__WEBPACK_IMPORTED_MODULE_14__["ListUsuariosComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_creacion_usuarios_guard__WEBPACK_IMPORTED_MODULE_17__["CreacionUsuariosGuard"]]
    }, {
      path: "user/changePassword",
      component: _componentes_usuarios_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
    }, {
      path: "user/cargasHis/:punto",
      component: _componentes_cargas_his_cargas_his_component__WEBPACK_IMPORTED_MODULE_3__["CargasHisComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_cargas_his_guard__WEBPACK_IMPORTED_MODULE_18__["CargasHisGuard"]]
    }, {
      path: "user/cargasSis/:punto",
      component: _componentes_cargas_sis_cargas_sis_component__WEBPACK_IMPORTED_MODULE_5__["CargasSisComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_cargas_sis_guard__WEBPACK_IMPORTED_MODULE_19__["CargasSisGuard"]]
    }, {
      path: "user/reportes_ambito",
      component: _componentes_cargas_sis_cargas_sis_component__WEBPACK_IMPORTED_MODULE_5__["CargasSisComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_reportes_ambito_guard__WEBPACK_IMPORTED_MODULE_20__["ReportesAmbitoGuard"]]
    }, {
      path: "user/reportes_diresa",
      component: _componentes_cargas_sis_cargas_sis_component__WEBPACK_IMPORTED_MODULE_5__["CargasSisComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_reportes_diresa_guard__WEBPACK_IMPORTED_MODULE_21__["ReportesDiresaGuard"]]
    }, {
      path: "user/seguimiento_cargas",
      component: _componentes_cargas_sis_cargas_sis_component__WEBPACK_IMPORTED_MODULE_5__["CargasSisComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_seguimiento_cargas_guard__WEBPACK_IMPORTED_MODULE_22__["SeguimientoCargasGuard"]]
    }, {
      path: "carga_his_1.jsp",
      component: _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"]
    }, {
      path: "principal_digitadores.jsp",
      component: _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"]
    }, {
      path: "descargaCC",
      component: _componentes_descargas_descargas_his_cc_descargas_his_cc_component__WEBPACK_IMPORTED_MODULE_6__["DescargasHisCCComponent"]
    }, {
      path: "reporte-preliminar",
      component: _reportes_reporte_preliminar_reporte_preliminar_component__WEBPACK_IMPORTED_MODULE_7__["ReportePreliminarComponent"]
    }, {
      path: "reporte",
      component: _reportes_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_8__["PruebaComponent"]
    }, {
      path: "**",
      redirectTo: "home"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, spinnerService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.spinnerService = spinnerService;
        this.hideElement = false;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (event.url.match('/user/')) {
              _this.hideElement = true;
            } else {
              _this.hideElement = false;
            }
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spinner();
        }
      }, {
        key: "spinner",
        value: function spinner() {
          var _this2 = this;

          this.spinnerService.show();
          setTimeout(function () {
            _this2.spinnerService.hide();
          }, 2000);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/megamenu */
    "./node_modules/primeng/fesm2015/primeng-megamenu.js");
    /* harmony import */


    var _menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu-principal/menu-principal.component */
    "./src/app/menu-principal/menu-principal.component.ts");
    /* harmony import */


    var _componentes_cargas_his_cargas_his_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./componentes/cargas-his/cargas-his.component */
    "./src/app/componentes/cargas-his/cargas-his.component.ts");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/panel */
    "./node_modules/primeng/fesm2015/primeng-panel.js");
    /* harmony import */


    var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/fileupload */
    "./node_modules/primeng/fesm2015/primeng-fileupload.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/fesm2015/primeng-message.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./componentes/inicio/inicio.component */
    "./src/app/componentes/inicio/inicio.component.ts");
    /* harmony import */


    var _componentes_cargas_sis_cargas_sis_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./componentes/cargas-sis/cargas-sis.component */
    "./src/app/componentes/cargas-sis/cargas-sis.component.ts");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/fesm2015/primeng-calendar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/fesm2015/primeng-progressspinner.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! primeng/scrollpanel */
    "./node_modules/primeng/fesm2015/primeng-scrollpanel.js");
    /* harmony import */


    var _componentes_descargas_descargas_his_cc_descargas_his_cc_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./componentes/descargas/descargas-his-cc/descargas-his-cc.component */
    "./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.ts");
    /* harmony import */


    var _reportes_reporte_preliminar_reporte_preliminar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./reportes/reporte-preliminar/reporte-preliminar.component */
    "./src/app/reportes/reporte-preliminar/reporte-preliminar.component.ts");
    /* harmony import */


    var _reportes_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./reportes/prueba/prueba.component */
    "./src/app/reportes/prueba/prueba.component.ts");
    /* harmony import */


    var _componentes_plantilla_inicio_plantilla_inicio_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./componentes/plantilla-inicio/plantilla-inicio.component */
    "./src/app/componentes/plantilla-inicio/plantilla-inicio.component.ts");
    /* harmony import */


    var _componentes_page404_page404_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./componentes/page404/page404.component */
    "./src/app/componentes/page404/page404.component.ts");
    /* harmony import */


    var _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./componentes/usuarios/login/login.component */
    "./src/app/componentes/usuarios/login/login.component.ts");
    /* harmony import */


    var _componentes_usuarios_register_register_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./componentes/usuarios/register/register.component */
    "./src/app/componentes/usuarios/register/register.component.ts");
    /* harmony import */


    var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./componentes/navbar/navbar.component */
    "./src/app/componentes/navbar/navbar.component.ts");
    /* harmony import */


    var _componentes_hero_hero_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./componentes/hero/hero.component */
    "./src/app/componentes/hero/hero.component.ts");
    /* harmony import */


    var _componentes_usuarios_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./componentes/usuarios/profile/profile.component */
    "./src/app/componentes/usuarios/profile/profile.component.ts");
    /* harmony import */


    var _componentes_usuarios_list_usuarios_list_usuarios_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./componentes/usuarios/list-usuarios/list-usuarios.component */
    "./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./componentes/footer/footer.component */
    "./src/app/componentes/footer/footer.component.ts");
    /* harmony import */


    var _componentes_usuarios_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./componentes/usuarios/change-password/change-password.component */
    "./src/app/componentes/usuarios/change-password/change-password.component.ts");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _directivas_click_color_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./directivas/click-color.directive */
    "./src/app/directivas/click-color.directive.ts"); // Servicios
    // Externals
    // Directivas


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_6__["MenuPrincipalComponent"], _componentes_cargas_his_cargas_his_component__WEBPACK_IMPORTED_MODULE_7__["CargasHisComponent"], _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_15__["InicioComponent"], _componentes_cargas_sis_cargas_sis_component__WEBPACK_IMPORTED_MODULE_16__["CargasSisComponent"], _componentes_descargas_descargas_his_cc_descargas_his_cc_component__WEBPACK_IMPORTED_MODULE_26__["DescargasHisCCComponent"], _reportes_reporte_preliminar_reporte_preliminar_component__WEBPACK_IMPORTED_MODULE_27__["ReportePreliminarComponent"], _reportes_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_28__["PruebaComponent"], _componentes_plantilla_inicio_plantilla_inicio_component__WEBPACK_IMPORTED_MODULE_29__["PlantillaInicioComponent"], _componentes_page404_page404_component__WEBPACK_IMPORTED_MODULE_30__["Page404Component"], _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_33__["NavbarComponent"], _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"], _componentes_usuarios_register_register_component__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"], _componentes_hero_hero_component__WEBPACK_IMPORTED_MODULE_34__["HeroComponent"], _componentes_usuarios_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"], _componentes_usuarios_list_usuarios_list_usuarios_component__WEBPACK_IMPORTED_MODULE_36__["ListUsuariosComponent"], _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__["FooterComponent"], _componentes_usuarios_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_39__["ChangePasswordComponent"], _directivas_click_color_directive__WEBPACK_IMPORTED_MODULE_44__["ClickColorDirective"]],
      imports: [primeng_table__WEBPACK_IMPORTED_MODULE_21__["TableModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__["MegaMenuModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_25__["ScrollPanelModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__["BrowserAnimationsModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], primeng_message__WEBPACK_IMPORTED_MODULE_11__["MessageModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_12__["MessagesModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__["ProgressSpinnerModule"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["CommonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_41__["NgxSpinnerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_42__["NgxPaginationModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__["InputTextModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__["MegaMenuModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_43__["NgbModule"]],
      providers: [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_40__["AuthService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/componentes/cargas-his/cargas-his.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/componentes/cargas-his/cargas-his.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesCargasHisCargasHisComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".boton {\r\n    margin-left: 10px;\r\n}\r\n\r\n.msg-carga {\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n.cuerpo {\r\n    background-color: aliceblue;\r\n}\r\n\r\n.custombar2 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.custombar2 .ui-scrollpanel-wrapper {\r\n    border-right: 9px solid #757575;\r\n    border-bottom: 9px solid #757575;\r\n}\r\n\r\n.custombar2 .ui-scrollpanel-bar {\r\n    background-color: blue;\r\n    border-radius: 0;\r\n    opacity: 1;\r\n    -webkit-transition: background-color 0.3s;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.custombar2:hover .ui-scrollpanel-bar {\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FyZ2FzLWhpcy9jYXJnYXMtaGlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix5Q0FBaUM7SUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvY2FyZ2FzLWhpcy9jYXJnYXMtaGlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tc2ctY2FyZ2Ege1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmN1ZXJwbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5jdXN0b21iYXIyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b21iYXIyIC51aS1zY3JvbGxwYW5lbC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yaWdodDogOXB4IHNvbGlkICM3NTc1NzU7XHJcbiAgICBib3JkZXItYm90dG9tOiA5cHggc29saWQgIzc1NzU3NTtcclxufVxyXG5cclxuLmN1c3RvbWJhcjIgLnVpLXNjcm9sbHBhbmVsLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5jdXN0b21iYXIyOmhvdmVyIC51aS1zY3JvbGxwYW5lbC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/componentes/cargas-his/cargas-his.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/componentes/cargas-his/cargas-his.component.ts ***!
    \****************************************************************/

  /*! exports provided: CargasHisComponent */

  /***/
  function srcAppComponentesCargasHisCargasHisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CargasHisComponent", function () {
      return CargasHisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_configuracion_configuracion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/configuracion/configuracion */
    "./src/app/configuracion/configuracion.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_servicios_control_calidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/servicios/control-calidad.service */
    "./src/app/servicios/control-calidad.service.ts");
    /* harmony import */


    var src_app_servicios_columnascc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/servicios/columnascc.service */
    "./src/app/servicios/columnascc.service.ts");

    var CargasHisComponent =
    /*#__PURE__*/
    function () {
      function CargasHisComponent(mensajes, rout, controlhis, colmnas) {
        _classCallCheck(this, CargasHisComponent);

        this.mensajes = mensajes;
        this.rout = rout;
        this.controlhis = controlhis;
        this.colmnas = colmnas;
        this.punto = '192';
        this.ano = '2020';
        this.mes = '02';
        this.carmpa = false;
        this.carmpe = false;
        this.carmre = false;
        this.carmrp = false;
        this.muestraControl = false;
        this.periodoselec = new Date();
        this.verespinner = false;
        this.biccdisabled = false;
        this.muestraconfirmacion = false;
        this.registrosPc = '0';
        this.registrosRc = '0';
        this.registrosRep = '0';
        this.registrosPerc = '0';
        this.config = new src_app_configuracion_configuracion__WEBPACK_IMPORTED_MODULE_2__["Configuracion"]();
      }

      _createClass(CargasHisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * selecionarArchivo
         */

      }, {
        key: "seleccionarArchivo",
        value: function seleccionarArchivo() {
          this.punto = localStorage.getItem("ID_PUNTO");
          this.urlPac = this.config.url + 'paciente/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + this.mes;
          this.urlPer = this.config.url + 'personal/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + this.mes;
          this.urlReg = this.config.url + 'registrador/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + this.mes;
          this.urlRep = this.config.url + 'reporteplano/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + this.mes;
          this.headers = new Headers();
          this.headers.append('Accept', '*/*');
          this.headers.append('Content-Type', 'application/json');
          this.headers.append('Access-Control-Allow-Origin', '*');
        }
      }, {
        key: "cargoPaciente",
        value: function cargoPaciente(event) {
          this.registrosPc = event.originalEvent.body.root.respuesta.cantidad_registros;
          this.mensajes.add({
            severity: 'success',
            summary: 'Carga Exitosa',
            detail: 'Se cargaron exitosamente ' + this.registrosPc + ' registros'
          });
          this.mensajes.add({
            key: 'mensajeMaestroPaciente',
            severity: 'success',
            summary: 'Carga Exitosa',
            detail: 'Se cargaron exitosamente ' + this.registrosPc + ' registros'
          });
          this.mpa.disabled = true;
          this.carmpa = true;

          if (this.carmpa && this.carmre && this.carmrp && this.carmpe) {
            this.bc.disabled = false;
          }
        }
      }, {
        key: "cargoRegistrador",
        value: function cargoRegistrador(event) {
          this.registrosRc = event.originalEvent.body.root.respuesta.cantidad_registros;
          this.mensajes.add({
            severity: 'success',
            summary: 'Carga Exitosa',
            detail: 'Se cargaron exitosamente ' + this.registrosRc + ' registros'
          });
          this.mensajes.add({
            key: 'mensajeMaestroRegistrador',
            severity: 'success',
            summary: 'Carga Exitosa',
            detail: 'Se cargaron exitosamente ' + this.registrosRc + ' registros'
          });
          this.mre.disabled = true;
          this.carmre = true;

          if (this.carmpa && this.carmre && this.carmrp && this.carmpe) {
            this.bc.disabled = false;
          }
        }
      }, {
        key: "cargoReporte",
        value: function cargoReporte(event) {
          this.registrosRep = event.originalEvent.body.root.respuesta.cantidad_registros;
          this.mensajes.add({
            severity: 'success',
            summary: 'Carga Exitosa',
            detail: 'Se cargaron exitosamente ' + this.registrosRep + ' registros'
          });
          this.mensajes.add({
            key: 'mensajeMaestroRpt',
            severity: 'success',
            summary: 'Carga Exitosa',
            detail: 'Se cargaron exitosamente ' + this.registrosRep + ' registros'
          });
          this.mrp.disabled = true;
          this.carmrp = true;

          if (this.carmpa && this.carmre && this.carmrp && this.carmpe) {
            this.bc.disabled = false;
          }
        }
      }, {
        key: "cargoPersonal",
        value: function cargoPersonal(event) {
          this.registrosPerc = event.originalEvent.body.root.respuesta.cantidad_registros;
          this.mensajes.add({
            severity: 'success',
            summary: 'Carga Exitosa',
            detail: 'Se cargaron exitosamente ' + this.registrosPerc + ' registros'
          });
          this.mensajes.add({
            key: 'mensajeMaestroPersonal',
            severity: 'success',
            summary: 'Carga Exitosa',
            detail: 'Se cargaron exitosamente ' + this.registrosPerc + ' registros'
          });
          this.mpe.disabled = true;
          this.carmpe = true;

          if (this.carmpa && this.carmre && this.carmrp && this.carmpe) {
            this.bc.disabled = false;
          }
        }
      }, {
        key: "llamar_control_his",
        value: function llamar_control_his() {
          var _this3 = this;

          this.muestraControl = true; //this.controlhis.ejecutarcontrol(this.ano,this.mes).subscribe((datos)=>{console.log(datos)});

          this.colmnas.devolvercolumnas().subscribe(function (datos) {
            console.log(datos);
            _this3.cols = datos.cols;
          }); //  this.controlhis.ejecutarcontrol(this.ano,this.mes);
        }
      }, {
        key: "llamar_control_his2",
        value: function llamar_control_his2() {
          var _this4 = this;

          this.controlhis.ejecutarcontrol2().subscribe(function (datos) {
            console.log(datos.respuesta);

            _this4.controlhis.descargarReporteCon2().subscribe(function (datos2) {
              __webpack_require__.e(
              /*! import() | file-saver */
              "file-saver").then(__webpack_require__.t.bind(null,
              /*! file-saver */
              "./node_modules/file-saver/dist/FileSaver.min.js", 7)).then(function (FileSaver) {
                var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;';
                var EXCEL_EXTENSION = '.xlsx';
                var data = new Blob([datos2], {
                  type: EXCEL_TYPE
                });
                FileSaver.saveAs(data, 'reporte2cc.xlsx');
              });
            });
          });
        }
      }, {
        key: "envioPaciente",
        value: function envioPaciente() {}
      }, {
        key: "iniciarcontrol",
        value: function iniciarcontrol() {
          var _this5 = this;

          this.registroscc = [];
          this.verespinner = true;
          this.biccdisabled = true;
          this.controlhis.ejecutarcontrol(this.ano, this.mes).subscribe(function (datos) {
            console.log(datos);

            _this5.controlhis.leercontrol(_this5.ano, _this5.mes).subscribe(function (datos) {
              console.log(datos.respuesta);
              _this5.registroscc = datos.respuesta;
              _this5.verespinner = false;
              _this5.biccdisabled = true;
              _this5.bee.disabled = false;
              _this5.muestraconfirmacion = true;
            }, function (error) {
              _this5.verespinner = false;
              _this5.biccdisabled = false;
              _this5.bee.disabled = false;
            });
          }, function (error) {
            _this5.verespinner = false;
            _this5.biccdisabled = false;
            _this5.bee.disabled = false;
          });
        }
      }, {
        key: "exportExcel",
        value: function exportExcel() {
          var _this6 = this;

          this.bee.disabled = true;

          __webpack_require__.e(
          /*! import() | xlsx */
          "xlsx").then(__webpack_require__.t.bind(null,
          /*! xlsx */
          "./node_modules/xlsx/xlsx.js", 7)).then(function (xlsx) {
            var worksheet = xlsx.utils.json_to_sheet(_this6.registroscc);
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
            });

            _this6.saveAsExcelFile(excelBuffer, "REPORTE_CONTROL_CALIDAD");
          });
        }
      }, {
        key: "saveAsExcelFile",
        value: function saveAsExcelFile(buffer, fileName) {
          __webpack_require__.e(
          /*! import() | file-saver */
          "file-saver").then(__webpack_require__.t.bind(null,
          /*! file-saver */
          "./node_modules/file-saver/dist/FileSaver.min.js", 7)).then(function (FileSaver) {
            var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            var EXCEL_EXTENSION = '.xlsx';
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          });
        }
      }, {
        key: "mesCambia",
        value: function mesCambia(event) {
          this.mes = (this.periodoselec.getMonth() + 1).toString();
          this.ano = this.periodoselec.getFullYear().toString();
        }
      }]);

      return CargasHisComponent;
    }();

    CargasHisComponent.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_servicios_control_calidad_service__WEBPACK_IMPORTED_MODULE_5__["ControlCalidadService"]
      }, {
        type: src_app_servicios_columnascc_service__WEBPACK_IMPORTED_MODULE_6__["ColumnasccService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CargasHisComponent.prototype, "punto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CargasHisComponent.prototype, "ano", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CargasHisComponent.prototype, "mes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mpa', {
      static: false
    })], CargasHisComponent.prototype, "mpa", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mpe', {
      static: false
    })], CargasHisComponent.prototype, "mpe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mre', {
      static: false
    })], CargasHisComponent.prototype, "mre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mrp', {
      static: false
    })], CargasHisComponent.prototype, "mrp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bc', {
      static: false
    })], CargasHisComponent.prototype, "bc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('br', {
      static: false
    })], CargasHisComponent.prototype, "br", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bicc', {
      static: false
    })], CargasHisComponent.prototype, "bicc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bee', {
      static: false
    })], CargasHisComponent.prototype, "bee", void 0);
    CargasHisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cargas-his',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cargas-his.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cargas-his/cargas-his.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cargas-his.component.css */
      "./src/app/componentes/cargas-his/cargas-his.component.css")).default]
    })], CargasHisComponent);
    /***/
  },

  /***/
  "./src/app/componentes/cargas-sis/cargas-sis.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/componentes/cargas-sis/cargas-sis.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesCargasSisCargasSisComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Nhcmdhcy1zaXMvY2FyZ2FzLXNpcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/componentes/cargas-sis/cargas-sis.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/componentes/cargas-sis/cargas-sis.component.ts ***!
    \****************************************************************/

  /*! exports provided: CargasSisComponent */

  /***/
  function srcAppComponentesCargasSisCargasSisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CargasSisComponent", function () {
      return CargasSisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_configuracion_configuracion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/configuracion/configuracion */
    "./src/app/configuracion/configuracion.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var CargasSisComponent =
    /*#__PURE__*/
    function () {
      function CargasSisComponent(mensajes, rout) {
        _classCallCheck(this, CargasSisComponent);

        this.mensajes = mensajes;
        this.rout = rout;
        this.config = new src_app_configuracion_configuracion__WEBPACK_IMPORTED_MODULE_2__["Configuracion"]();
      }

      _createClass(CargasSisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.urlSis = this.config.urlsis;
        }
      }, {
        key: "seleccionarArchivo",
        value: function seleccionarArchivo() {
          this.punto = this.rout.snapshot.paramMap.get('punto');
          this.urlSis = this.config.urlsis + '/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + (this.mes + 1).toString();
          this.headers = new Headers();
          this.headers.append('Accept', '*/*');
          this.headers.append('Content-Type', 'application/json');
          this.headers.append('Access-Control-Allow-Origin', '*');
        }
      }, {
        key: "mesCambia",
        value: function mesCambia(event) {
          this.ano = event.getFullYear();
          this.mes = event.getMonth();
        }
      }, {
        key: "cargoSis",
        value: function cargoSis(e) {}
      }]);

      return CargasSisComponent;
    }();

    CargasSisComponent.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CargasSisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cargas-sis',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cargas-sis.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cargas-sis/cargas-sis.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cargas-sis.component.css */
      "./src/app/componentes/cargas-sis/cargas-sis.component.css")).default]
    })], CargasSisComponent);
    /***/
  },

  /***/
  "./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesDescargasDescargasHisCcDescargasHisCcComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Rlc2Nhcmdhcy9kZXNjYXJnYXMtaGlzLWNjL2Rlc2Nhcmdhcy1oaXMtY2MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: DescargasHisCCComponent */

  /***/
  function srcAppComponentesDescargasDescargasHisCcDescargasHisCcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescargasHisCCComponent", function () {
      return DescargasHisCCComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_servicios_control_calidad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servicios/control-calidad.service */
    "./src/app/servicios/control-calidad.service.ts");

    var DescargasHisCCComponent =
    /*#__PURE__*/
    function () {
      function DescargasHisCCComponent(cc) {
        _classCallCheck(this, DescargasHisCCComponent);

        this.cc = cc;
        this.periodo = new Date();
      }

      _createClass(DescargasHisCCComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "descargar",
        value: function descargar() {
          this.cc.descargarReporteCC(localStorage.getItem('cod_ambito'));
        }
      }]);

      return DescargasHisCCComponent;
    }();

    DescargasHisCCComponent.ctorParameters = function () {
      return [{
        type: src_app_servicios_control_calidad_service__WEBPACK_IMPORTED_MODULE_2__["ControlCalidadService"]
      }];
    };

    DescargasHisCCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-descargas-his-cc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./descargas-his-cc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./descargas-his-cc.component.css */
      "./src/app/componentes/descargas/descargas-his-cc/descargas-his-cc.component.css")).default]
    })], DescargasHisCCComponent);
    /***/
  },

  /***/
  "./src/app/componentes/footer/footer.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/footer/footer.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\r\n    background: #007bff;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    height: 100;\r\n}\r\n\r\n.footer span {\r\n    color: white !important;\r\n}\r\n\r\n.footer a {\r\n    color: white !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmZvb3RlciBzcGFuIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyIGEge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/footer/footer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/footer/footer.component.ts ***!
    \********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentesFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/componentes/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/componentes/hero/hero.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/hero/hero.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesHeroHeroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/componentes/hero/hero.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/componentes/hero/hero.component.ts ***!
    \****************************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppComponentesHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeroComponent =
    /*#__PURE__*/
    function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hero',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hero.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/hero/hero.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hero.component.css */
      "./src/app/componentes/hero/hero.component.css")).default]
    })], HeroComponent);
    /***/
  },

  /***/
  "./src/app/componentes/inicio/inicio.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/inicio/inicio.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesInicioInicioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/inicio/inicio.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/inicio/inicio.component.ts ***!
    \********************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppComponentesInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InicioComponent =
    /*#__PURE__*/
    function () {
      function InicioComponent() {
        _classCallCheck(this, InicioComponent);
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InicioComponent;
    }();

    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/inicio/inicio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.component.css */
      "./src/app/componentes/inicio/inicio.component.css")).default]
    })], InicioComponent);
    /***/
  },

  /***/
  "./src/app/componentes/navbar/navbar.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/navbar/navbar.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/navbar/navbar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/navbar/navbar.component.ts ***!
    \********************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentesNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_guards_creacion_usuarios_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/guards/creacion-usuarios.guard */
    "./src/app/guards/creacion-usuarios.guard.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, router, creacion_usuarios) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.router = router;
        this.creacion_usuarios = creacion_usuarios;
        this.app_name = "RISC";
        this.islogged = false;
        this.accessRegister = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onCheckUser();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.user = this.authService.getCurrentUser();
          var dato = {
            dni: this.user.dni,
            isLogged: "0"
          };
          this.authService.updateUserLogged(dato).subscribe(function (usuario) {});
          this.authService.logoutUser();
          this.router.navigate(["home"]).then(function (datos) {
            return location.reload();
          });
        }
      }, {
        key: "onCheckUser",
        value: function onCheckUser() {
          if (this.authService.getCurrentUser() === null) {
            this.islogged = false;
          } else {
            this.islogged = true;
          }
        }
      }, {
        key: "validarPermiso",
        value: function validarPermiso() {
          return this.creacion_usuarios.canActivate();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_guards_creacion_usuarios_guard__WEBPACK_IMPORTED_MODULE_4__["CreacionUsuariosGuard"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-navbar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/componentes/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/componentes/page404/page404.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/componentes/page404/page404.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesPage404Page404ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/componentes/page404/page404.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/componentes/page404/page404.component.ts ***!
    \**********************************************************/

  /*! exports provided: Page404Component */

  /***/
  function srcAppComponentesPage404Page404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page404Component", function () {
      return Page404Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Page404Component =
    /*#__PURE__*/
    function () {
      function Page404Component() {
        _classCallCheck(this, Page404Component);
      }

      _createClass(Page404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page404Component;
    }();

    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page404',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page404.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/page404/page404.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page404.component.css */
      "./src/app/componentes/page404/page404.component.css")).default]
    })], Page404Component);
    /***/
  },

  /***/
  "./src/app/componentes/plantilla-inicio/plantilla-inicio.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/componentes/plantilla-inicio/plantilla-inicio.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesPlantillaInicioPlantillaInicioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titulosub {\r\n    align-content: center;\r\n    text-align: center;\r\n    color: #558abb;\r\n    font-size: 22px;\r\n}\r\n\r\n.cuerpo {\r\n    background-color: aliceblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGxhbnRpbGxhLWluaWNpby9wbGFudGlsbGEtaW5pY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcGxhbnRpbGxhLWluaWNpby9wbGFudGlsbGEtaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvc3ViIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTU4YWJiO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY3VlcnBvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/componentes/plantilla-inicio/plantilla-inicio.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/componentes/plantilla-inicio/plantilla-inicio.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PlantillaInicioComponent */

  /***/
  function srcAppComponentesPlantillaInicioPlantillaInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlantillaInicioComponent", function () {
      return PlantillaInicioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    var PlantillaInicioComponent =
    /*#__PURE__*/
    function () {
      function PlantillaInicioComponent(el, authService) {
        _classCallCheck(this, PlantillaInicioComponent);

        this.el = el;
        this.authService = authService;
        this.title = "RISC";
      }

      _createClass(PlantillaInicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.authService.getCurrentUser();
          this.dni = this.currentUser.dni;
          this.email = this.currentUser.email;
          this.tipo_ambito = this.currentUser.tipo_ambito;
          this.descripcion_ambito = this.currentUser.descripcion_ambito;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return PlantillaInicioComponent;
    }();

    PlantillaInicioComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    PlantillaInicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-plantilla-inicio",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./plantilla-inicio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/plantilla-inicio/plantilla-inicio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./plantilla-inicio.component.css */
      "./src/app/componentes/plantilla-inicio/plantilla-inicio.component.css")).default]
    })], PlantillaInicioComponent);
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/change-password/change-password.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/componentes/usuarios/change-password/change-password.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesUsuariosChangePasswordChangePasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/change-password/change-password.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/componentes/usuarios/change-password/change-password.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppComponentesUsuariosChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent(authService, router, location) {
        _classCallCheck(this, ChangePasswordComponent);

        this.authService = authService;
        this.router = router;
        this.location = location;
        this.isError = false;
        this.isSuccess = false;
        this.msgError = "";
        this.msgSuccess = "";
        this.aux = this.authService.getCurrentUser();
        this.datos = {
          dni: this.aux.dni,
          passwordAntiguo: this.aux.dni,
          passwordNuevo: '',
          replyPassword: ''
        };
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "validarPassword",
        value: function validarPassword() {
          var _this7 = this;

          if (this.datos.passwordNuevo == this.datos.replyPassword) {
            this.authService.updatePassword(this.datos).subscribe(function (usuario) {
              _this7.msgSuccess = "CONTRASEÑA ACTUALIZADA";

              _this7.onMsgSuccess();
            }, function (res) {
              _this7.msgError = res.error.message;

              _this7.onIsError();
            });
            this.router.navigate(["user/inicio"]).then(function (datos) {
              location.reload();
            });
          } else {
            this.msgError = "LOS DATOS INGRESADOS NO COINCIDEN";
            this.onIsError();
          }
        }
      }, {
        key: "onIsError",
        value: function onIsError() {
          var _this8 = this;

          this.isError = true;
          setTimeout(function () {
            _this8.isError = false;
            _this8.datos.passwordNuevo = '';
            _this8.datos.replyPassword = '';
          }, 3000);
        }
      }, {
        key: "onMsgSuccess",
        value: function onMsgSuccess() {
          var _this9 = this;

          this.isSuccess = true;
          setTimeout(function () {
            _this9.isSuccess = false;
            _this9.datos.passwordNuevo = '';
            _this9.datos.replyPassword = '';
          }, 2000);
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/change-password/change-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.css */
      "./src/app/componentes/usuarios/change-password/change-password.component.css")).default]
    })], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesUsuariosListUsuariosListUsuariosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL2xpc3QtdXN1YXJpb3MvbGlzdC11c3Vhcmlvcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ListUsuariosComponent */

  /***/
  function srcAppComponentesUsuariosListUsuariosListUsuariosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUsuariosComponent", function () {
      return ListUsuariosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);

    var ListUsuariosComponent =
    /*#__PURE__*/
    function () {
      function ListUsuariosComponent(authService, messageService, modalService) {
        _classCallCheck(this, ListUsuariosComponent);

        this.authService = authService;
        this.messageService = messageService;
        this.modalService = modalService;
        this.pageActual = 1; //VARIABLE AUXILIAR QUE TIENE LOS DATOS DEL USUARIO LOGEADO

        this.aux = this.authService.getCurrentUser(); //VARIABLES PARA MENSAJES

        this.isError = false;
        this.isSuccess = false;
        this.msgError = "";
        this.msgSuccess = "";
        this.datos = {
          tipo_ambito_usuario: this.aux.tipo_ambito,
          tipo_ambito_crear: this.aux.tipo_ambito,
          roles_asignados: ''
        };
        this.roles_seleccionados = [];
        this.roles_selectedUsuario = '';
        this.rolesAsignados = '';
        this.rolesRemovidos = '';
        this.roles_backEnd = [];
        this.roles_asignados = [];
        this.roles_toRemove = [];
      }

      _createClass(ListUsuariosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var enviar = {
            tipo_ambito: this.aux.tipo_ambito,
            descripcion_ambito: this.aux.descripcion_ambito,
            dni: this.aux.dni
          };
          this.authService.getlistaUsuarios(enviar).subscribe(function (usuarios) {
            _this10.usuarios = usuarios;

            _this10.authService.getTipoAmbito(_this10.aux.tipo_ambito).subscribe(function (tipo_ambito) {
              _this10.tipos_ambito = tipo_ambito;
              var datos = {
                tipo_ambito_usuario: _this10.aux.tipo_ambito,
                descripcion_ambito_usuario: _this10.aux.descripcion_ambito,
                tipo_ambito_crear: _this10.aux.tipo_ambito
              };

              _this10.authService.getDescripcionAmbito(datos).subscribe(function (datos) {
                _this10.descripcionAmbito = datos;

                _this10.authService.getRoles(_this10.datos).subscribe(function (roles) {
                  _this10.roles = roles;
                });
              });
            });
          });
        }
      }, {
        key: "getListUsuarios",
        value: function getListUsuarios() {
          var _this11 = this;

          var enviar = {
            tipo_ambito: this.aux.tipo_ambito,
            descripcion_ambito: this.aux.descripcion_ambito,
            dni: this.aux.dni
          };
          this.authService.getlistaUsuarios(enviar).subscribe(function (usuarios) {
            _this11.usuarios = usuarios;
          });
        }
      }, {
        key: "onPreUpdate",
        value: function onPreUpdate(usuario) {
          var _this12 = this;

          this.authService.selectedUsuario = Object.assign({}, usuario);
          var datos = {
            tipo_ambito_usuario: this.aux.tipo_ambito,
            descripcion_ambito_usuario: this.aux.descripcion_ambito,
            tipo_ambito_crear: this.authService.selectedUsuario.tipo_ambito
          };
          this.authService.getDescripcionAmbito(datos).subscribe(function (datos) {
            _this12.descripcionAmbito = datos;

            _this12.authService.getRoles_SelectedUsuario(_this12.authService.selectedUsuario.dni).subscribe(function (res) {
              _this12.roles_seleccionados = [];
              _this12.roles_selectedUsuario = '';
              _this12.roles_backEnd = [];

              for (var i = 0; i < Object.keys(res).length; i++) {
                _this12.roles_seleccionados.push(res[i]);
              }

              ;

              for (var i = 0; i < _this12.roles_seleccionados.length; i++) {
                if (_this12.roles_selectedUsuario == '') {
                  _this12.roles_backEnd.push(_this12.roles_seleccionados[i].id_rol_risc);

                  _this12.roles_selectedUsuario = _this12.roles_selectedUsuario + _this12.roles_seleccionados[i].id_rol_risc;
                } else {
                  _this12.roles_backEnd.push(_this12.roles_seleccionados[i].id_rol_risc);

                  _this12.roles_selectedUsuario = _this12.roles_selectedUsuario + ',' + _this12.roles_seleccionados[i].id_rol_risc;
                }
              }

              ;
              _this12.roles_asignados = [];
              _this12.roles_toRemove = [];
              _this12.datos.tipo_ambito_crear = _this12.authService.selectedUsuario.tipo_ambito;
              _this12.datos.roles_asignados = _this12.roles_selectedUsuario;

              _this12.obtenerRoles();
            });
          });
        }
      }, {
        key: "onUpdateUsuario",
        value: function onUpdateUsuario(usuarioForm) {
          var _this13 = this;

          if (this.roles_asignados.length == 0) {
            this.rolesAsignados = '';
          } else {
            this.rolesAsignados = '';

            for (var i = 0; i < this.roles_asignados.length; i++) {
              var coincidencia = 0;

              for (var j = 0; j < this.roles_backEnd.length; j++) {
                if (this.roles_asignados[i] == this.roles_backEnd[j]) {
                  coincidencia++;
                }

                ;
              }

              ;

              if (coincidencia == 0) {
                if (this.rolesAsignados == '') {
                  this.rolesAsignados = this.rolesAsignados + this.roles_asignados[i];
                } else {
                  this.rolesAsignados = this.rolesAsignados + ',' + this.roles_asignados[i];
                }

                ;
              }

              ;
            }

            ;
          }

          ;

          if (this.roles_toRemove.length == 0) {
            this.rolesRemovidos = '';
          } else {
            this.rolesRemovidos = '';

            for (var i = 0; i < this.roles_toRemove.length; i++) {
              var coincidencia = 0;

              for (var j = 0; j < this.roles_backEnd.length; j++) {
                if (this.roles_toRemove[i] == this.roles_backEnd[j]) {
                  coincidencia++;
                }

                ;
              }

              ;

              if (coincidencia == 1) {
                if (this.rolesRemovidos == '') {
                  this.rolesRemovidos = this.rolesRemovidos + this.roles_toRemove[i];
                } else {
                  this.rolesRemovidos = this.rolesRemovidos + ',' + this.roles_toRemove[i];
                }

                ;
              }

              ;
            }

            ;
          }

          ;
          var datoActualizado = {
            dni: this.authService.selectedUsuario.dni,
            email: usuarioForm.value.email,
            tipo_ambito: usuarioForm.value.tipo_ambito,
            descripcion_ambito: usuarioForm.value.descripcion_ambito,
            roles_asignados: this.rolesAsignados,
            roles_removidos: this.rolesRemovidos
          };
          this.authService.updateUser(datoActualizado).subscribe(function (usuario) {
            return _this13.getListUsuarios();
          });
          document.getElementById("nav-home-tab").click();
          document.getElementById("btnCerrar").click();
          setTimeout(function () {
            _this13.mensaje();
          }, 1000);
        }
      }, {
        key: "devuelveDescripcionAmbito",
        value: function devuelveDescripcionAmbito() {
          var _this14 = this;

          var datos = {
            tipo_ambito_usuario: this.aux.tipo_ambito,
            descripcion_ambito_usuario: this.aux.descripcion_ambito,
            tipo_ambito_crear: this.authService.selectedUsuario.tipo_ambito
          };
          this.authService.getDescripcionAmbito(datos).subscribe(function (datos) {
            _this14.descripcionAmbito = datos;
            _this14.datos.tipo_ambito_crear = _this14.authService.selectedUsuario.tipo_ambito;
            _this14.rolesAsignados = '';
            _this14.rolesRemovidos = '';
            _this14.datos.roles_asignados = '';
            _this14.roles_seleccionados = [];

            _this14.obtenerRoles();
          });
        }
      }, {
        key: "obtenerRoles",
        value: function obtenerRoles() {
          var _this15 = this;

          this.authService.getRoles(this.datos).subscribe(function (roles) {
            _this15.roles = roles;
          });
        }
      }, {
        key: "enviarRol",
        value: function enviarRol() {
          if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.fila_modal)) {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Ningún rol seleccionado.'
            });
          } else {
            this.roles_seleccionados.push(this.fila_modal);
            this.rolesAsignados = '';
            this.roles_asignados = [];

            for (var i = 0; i < this.roles_seleccionados.length; i++) {
              if (this.rolesAsignados == '') {
                this.roles_asignados.push(this.roles_seleccionados[i].id_rol_risc);
                this.rolesAsignados = this.rolesAsignados + this.roles_seleccionados[i].id_rol_risc;
              } else {
                this.roles_asignados.push(this.roles_seleccionados[i].id_rol_risc);
                this.rolesAsignados = this.rolesAsignados + ',' + this.roles_seleccionados[i].id_rol_risc;
              }
            }

            ;

            for (var i = 0; i < this.roles_toRemove.length; i++) {
              var coincidencia = 0;

              for (var j = 0; j < this.roles_asignados.length; j++) {
                if (this.roles_toRemove[i] == this.roles_asignados[j]) {
                  coincidencia++;
                }

                ;
              }

              ;

              if (coincidencia == 1) {
                this.roles_toRemove.splice(i, 1);
              }

              ;
            }

            ;
            this.datos.roles_asignados = this.rolesAsignados;
            this.fila_modal = null;
            this.obtenerRoles();
            document.getElementById("btnModal").click();
          }
        }
      }, {
        key: "removerRol",
        value: function removerRol(roles_seleccionados, fila_seleccionada) {
          if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.fila_seleccionada)) {
            this.msgError = "NO HA SELECCIONADO NINGÚN ROL PARA REMOVER";
            this.onIsError();
          } else {
            var i = roles_seleccionados.indexOf(fila_seleccionada);
            this.roles_toRemove.push(this.roles_seleccionados[i].id_rol_risc);
            i !== -1 && roles_seleccionados.splice(i, 1);
            this.rolesAsignados = '';
            this.roles_asignados = [];

            if (this.roles_seleccionados.length == 0) {
              this.roles_asignados = [];
              this.datos.roles_asignados = '';
              this.obtenerRoles();
            } else {
              for (var i = 0; i < this.roles_seleccionados.length; i++) {
                if (this.rolesAsignados == '') {
                  this.roles_asignados.push(this.roles_seleccionados[i].id_rol_risc);
                  this.rolesAsignados = this.rolesAsignados + this.roles_seleccionados[i].id_rol_risc;
                } else {
                  this.roles_asignados.push(this.roles_seleccionados[i].id_rol_risc);
                  this.rolesAsignados = this.rolesAsignados + ',' + this.roles_seleccionados[i].id_rol_risc;
                }
              }

              ;
              this.datos.roles_asignados = this.rolesAsignados;
              this.obtenerRoles();
            }

            ;
            this.fila_seleccionada = null;
          }
        }
      }, {
        key: "seleccionarFilaModal",
        value: function seleccionarFilaModal(fila) {
          this.fila_modal = fila;
        }
      }, {
        key: "seleccionarFila",
        value: function seleccionarFila(fila) {
          this.fila_seleccionada = fila;
        }
      }, {
        key: "validarModal",
        value: function validarModal() {
          if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.roles)) {
            return true;
          }

          if (Object.keys(this.roles).length == 0) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "cambiarEstado",
        value: function cambiarEstado(usuario) {
          var _this16 = this;

          if (usuario.estado == "ACTIVO") {
            if (confirm("¿ DESEA INACTIVAR AL USUARIO ?")) {
              var estado = {
                dni: usuario.dni,
                estado: "INACTIVO"
              };
              this.authService.updateUser(estado).subscribe(function (usuario) {
                return _this16.ngOnInit();
              });
              setTimeout(function () {
                _this16.mensaje();
              }, 1000);
            }
          } else {
            if (confirm("¿ DESEA ACTIVAR AL USUARIO ?")) {
              var _estado = {
                dni: usuario.dni,
                estado: "ACTIVO"
              };
              this.authService.updateUser(_estado).subscribe(function (usuario) {
                return _this16.ngOnInit();
              });
              setTimeout(function () {
                _this16.mensaje();
              }, 1000);
            }
          }
        }
      }, {
        key: "restablecerPassword",
        value: function restablecerPassword(usuario) {
          var _this17 = this;

          if (confirm("¿ DESEA RESTABLECER LA CONTRASEÑA DEL USUARIO ?")) {
            var enviar = {
              dni: usuario.dni,
              passwordNuevo: usuario.dni
            };
            this.authService.restorePassword(enviar).subscribe(function (usuario) {
              return _this17.ngOnInit();
            });
            setTimeout(function () {
              _this17.mensaje();
            }, 1000);
          }
        }
      }, {
        key: "mensaje",
        value: function mensaje() {
          this.messageService.add({
            severity: 'success',
            summary: 'Correcto',
            detail: 'Acción completada'
          });
        }
      }, {
        key: "onIsError",
        value: function onIsError() {
          var _this18 = this;

          this.isError = true;
          setTimeout(function () {
            _this18.isError = false;
          }, 3000);
        }
      }, {
        key: "onMsgSuccess",
        value: function onMsgSuccess() {
          var _this19 = this;

          this.isSuccess = true;
          setTimeout(function () {
            _this19.isSuccess = false;
          }, 3000);
        }
      }]);

      return ListUsuariosComponent;
    }();

    ListUsuariosComponent.ctorParameters = function () {
      return [{
        type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    ListUsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-list-usuarios",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-usuarios.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-usuarios.component.css */
      "./src/app/componentes/usuarios/list-usuarios/list-usuarios.component.css")).default]
    })], ListUsuariosComponent);
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/login/login.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/componentes/usuarios/login/login.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesUsuariosLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-control.login-user {\r\n    border: 0 solid #fff !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXN1YXJpb3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xyXG4gICAgYm9yZGVyOiAwIHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/login/login.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/componentes/usuarios/login/login.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentesUsuariosLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router, location) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.location = location;
        this.user = {
          dni: "",
          password: ""
        };
        this.isError = false;
        this.msgError = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "hideOrShowPassword",
        value: function hideOrShowPassword() {
          var password, check;
          password = document.getElementById("password");
          check = document.getElementById("checkPassword");

          if (check.checked == true) // Si la checkbox de mostrar contraseña está activada
            {
              password.type = "text";
            } else // Si no está activada 
            {
              password.type = "password";
            }
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var _this20 = this;

          if (form.valid) {
            return this.authService.login(this.user).subscribe(function (data) {
              var dato = {
                dni: _this20.user.dni,
                isLogged: "1"
              };

              _this20.authService.updateUserLogged(dato).subscribe(function (usuario) {});

              _this20.authService.validarPassword(_this20.user).subscribe(function (validacion) {}, function (res) {
                _this20.msgError = res.error.message;

                if (_this20.msgError == "CONTRASEÑA SIN ACTUALIZAR") {
                  _this20.onIsError();

                  setTimeout(function () {
                    _this20.router.navigate(["user/changePassword"]);
                  }, 2000);
                } else {
                  _this20.router.navigate(["user/inicio"]).then(function (datos) {
                    return location.reload();
                  });
                }
              });
            }, function (res) {
              _this20.msgError = res.error.message;

              _this20.onIsError();
            });
          } else {
            this.onIsError();
            this.limpiarFormulario();
          }
        }
      }, {
        key: "onIsError",
        value: function onIsError() {
          var _this21 = this;

          this.isError = true;
          setTimeout(function () {
            _this21.isError = false;
          }, 2000);
        }
      }, {
        key: "limpiarFormulario",
        value: function limpiarFormulario() {
          this.user.dni = '';
          this.user.password = '';
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/componentes/usuarios/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/profile/profile.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/componentes/usuarios/profile/profile.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesUsuariosProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-section {\r\n    border: 1px solid #007bff;\r\n    background: #fff;\r\n}\r\n\r\n.profile-header {\r\n    background: #007bff;\r\n    height: 150px;\r\n}\r\n\r\n.user-detail {\r\n    margin: -50px 0 30px 0;\r\n}\r\n\r\nimg {\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n\r\n.user-details h5 {\r\n    margin: 15px 0 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXN1YXJpb3MvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VjdGlvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnByb2ZpbGUtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4udXNlci1kZXRhaWwge1xyXG4gICAgbWFyZ2luOiAtNTBweCAwIDMwcHggMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi51c2VyLWRldGFpbHMgaDUge1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgNXB4IDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/profile/profile.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/componentes/usuarios/profile/profile.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentesUsuariosProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(authService, router, location) {
        _classCallCheck(this, ProfileComponent);

        this.authService = authService;
        this.router = router;
        this.location = location;
        this.isError = false;
        this.isSuccess = false;
        this.msgError = "";
        this.msgSuccess = "";
        this.aux = this.authService.getCurrentUser();
        this.datos = {
          dni: this.aux.dni,
          passwordAntiguo: '',
          passwordNuevo: '',
          replyPassword: ''
        };
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authService.getCurrentUser();
        }
      }, {
        key: "validarPassword",
        value: function validarPassword() {
          var _this22 = this;

          if (this.datos.passwordNuevo == this.datos.replyPassword) {
            this.authService.updatePassword(this.datos).subscribe(function (usuario) {
              _this22.msgSuccess = "CONTRASEÑA ACTUALIZADA";

              _this22.onMsgSuccess();
            }, function (res) {
              _this22.msgError = res.error.message;

              _this22.onIsError();
            });
          } else {
            this.msgError = "LOS DATOS INGRESADOS NO COINCIDEN";
            this.onIsError();
          }
        }
      }, {
        key: "onIsError",
        value: function onIsError() {
          var _this23 = this;

          this.isError = true;
          setTimeout(function () {
            _this23.isError = false;
            _this23.datos.passwordAntiguo = '';
            _this23.datos.passwordNuevo = '';
            _this23.datos.replyPassword = '';
          }, 3000);
        }
      }, {
        key: "onMsgSuccess",
        value: function onMsgSuccess() {
          var _this24 = this;

          this.isSuccess = true;
          setTimeout(function () {
            _this24.isSuccess = false;

            _this24.btnCerrar.nativeElement.click();

            _this24.datos.passwordAntiguo = '';
            _this24.datos.passwordNuevo = '';
            _this24.datos.replyPassword = '';
          }, 2000);
        }
      }, {
        key: "limpiarModal",
        value: function limpiarModal() {
          this.datos.passwordAntiguo = '';
          this.datos.passwordNuevo = '';
          this.datos.replyPassword = '';
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnCerrar', {
      static: false
    })], ProfileComponent.prototype, "btnCerrar", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/componentes/usuarios/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/register/register.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/componentes/usuarios/register/register.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesUsuariosRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-control.login-user {\r\n    border: 0px solid #fff !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXN1YXJpb3MvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/usuarios/register/register.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/componentes/usuarios/register/register.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentesUsuariosRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(authService, messageService, modalService) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.messageService = messageService;
        this.modalService = modalService; //OBJETO BIDIRECCIONAL QUE ALMACENA DATOS INGRESADOS EN EL FORMULARIO

        this.user = {
          dni: "",
          password: "",
          email: "",
          apellido_paterno: "",
          apellido_materno: "",
          nombres: "",
          tipo_ambito: "",
          descripcion_ambito: "",
          estado: "",
          isLogged: "",
          fecha_creacion: null,
          roles_asignados: "",
          roles_removidos: ""
        }; //VARIABLE AUXILIAR QUE TIENE LOS DATOS DEL USUARIO LOGEADO

        this.aux = this.authService.getCurrentUser(); //VARIABLES PARA MENSAJES

        this.isError = false;
        this.isSuccess = false;
        this.msgError = "";
        this.msgSuccess = ""; //VARIABLE CON LA FECHA ACTUAL

        this.fechaActual = new Date();
        this.datos = {
          tipo_ambito_usuario: this.aux.tipo_ambito,
          tipo_ambito_crear: this.aux.tipo_ambito,
          roles_asignados: ''
        };
        this.roles_seleccionados = [];
        this.rolesAsignados = '';
        this.rolesRemovidos = '';
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.authService.getTipoAmbito(this.aux.tipo_ambito).subscribe(function (tipo_ambito) {
            _this25.tipos_ambito = tipo_ambito;
            var datos = {
              tipo_ambito_usuario: _this25.aux.tipo_ambito,
              descripcion_ambito_usuario: _this25.aux.descripcion_ambito,
              tipo_ambito_crear: _this25.aux.tipo_ambito
            };

            _this25.authService.getDescripcionAmbito(datos).subscribe(function (datos) {
              _this25.descripcionAmbito = datos;

              _this25.authService.getRoles(_this25.datos).subscribe(function (roles) {
                _this25.roles = roles;
              });
            });
          });
          this.limpiarFormulario();
        }
      }, {
        key: "obtenerRoles",
        value: function obtenerRoles() {
          var _this26 = this;

          this.authService.getRoles(this.datos).subscribe(function (roles) {
            _this26.roles = roles;
          });
        }
      }, {
        key: "enviarRol",
        value: function enviarRol() {
          if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.fila_modal)) {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Ningún rol seleccionado.'
            });
          } else {
            this.roles_seleccionados.push(this.fila_modal);
            this.rolesAsignados = '';

            for (var i = 0; i < this.roles_seleccionados.length; i++) {
              if (this.rolesAsignados == '') {
                this.rolesAsignados = this.rolesAsignados + this.roles_seleccionados[i].id_rol_risc;
                this.datos.roles_asignados = this.rolesAsignados;
              } else {
                this.rolesAsignados = this.rolesAsignados + ',' + this.roles_seleccionados[i].id_rol_risc;
                this.datos.roles_asignados = this.rolesAsignados;
              }
            }

            ;
            this.fila_modal = null;
            this.obtenerRoles();
            document.getElementById("btnModal").click();
          }
        }
      }, {
        key: "removerRol",
        value: function removerRol(roles_seleccionados, fila_seleccionada) {
          if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.fila_seleccionada)) {
            this.msgError = "NO HA SELECCIONADO NINGÚN ROL PARA REMOVER";
            this.onIsError();
          } else {
            var i = roles_seleccionados.indexOf(fila_seleccionada);
            i !== -1 && roles_seleccionados.splice(i, 1);
            this.rolesAsignados = '';

            if (this.roles_seleccionados.length == 0) {
              this.datos.roles_asignados = '';
              this.obtenerRoles();
            } else {
              for (var i = 0; i < this.roles_seleccionados.length; i++) {
                if (this.rolesAsignados == '') {
                  this.rolesAsignados = this.rolesAsignados + this.roles_seleccionados[i].id_rol_risc;
                  this.datos.roles_asignados = this.rolesAsignados;
                } else {
                  this.rolesAsignados = this.rolesAsignados + ',' + this.roles_seleccionados[i].id_rol_risc;
                  this.datos.roles_asignados = this.rolesAsignados;
                }
              }

              ;
              this.obtenerRoles();
            }

            ;
            this.fila_seleccionada = null;
          }
        }
      }, {
        key: "seleccionarFilaModal",
        value: function seleccionarFilaModal(fila) {
          this.fila_modal = fila;
        }
      }, {
        key: "seleccionarFila",
        value: function seleccionarFila(fila) {
          this.fila_seleccionada = fila;
        }
      }, {
        key: "validarModal",
        value: function validarModal() {
          var numero = 0;

          for (var variable in this.roles) {
            numero++;
          }

          ;

          if (numero == 0) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "devuelveDescripcionAmbito",
        value: function devuelveDescripcionAmbito() {
          var _this27 = this;

          var dato = {
            tipo_ambito_usuario: this.aux.tipo_ambito,
            descripcion_ambito_usuario: this.aux.descripcion_ambito,
            tipo_ambito_crear: this.user.tipo_ambito
          };
          this.authService.getDescripcionAmbito(dato).subscribe(function (datos) {
            _this27.descripcionAmbito = datos;
            _this27.datos.tipo_ambito_crear = _this27.user.tipo_ambito;
            _this27.rolesAsignados = '';
            _this27.rolesRemovidos = '';
            _this27.datos.roles_asignados = '';
            _this27.roles_seleccionados = [];

            _this27.obtenerRoles();
          });
        }
      }, {
        key: "validaDni",
        value: function validaDni() {
          var _this28 = this;

          var dato = {
            dni: this.user.dni
          };
          this.authService.validarDni(dato).subscribe(function (datos) {
            _this28.datosPersonales = datos;
            _this28.user.apellido_paterno = _this28.datosPersonales[0].APELLIDO_PATERNO;
            _this28.user.apellido_materno = _this28.datosPersonales[0].APELLIDO_MATERNO;
            _this28.user.nombres = _this28.datosPersonales[0].NOMBRES;
          }, function (res) {
            _this28.user.dni = '';
            _this28.user.apellido_paterno = '';
            _this28.user.apellido_materno = '';
            _this28.user.nombres = '';
            _this28.msgError = res.error.message;

            _this28.onIsError();
          });
        }
      }, {
        key: "onRegister",
        value: function onRegister(form) {
          var _this29 = this;

          if (form.valid) {
            this.user.password = this.user.dni;
            this.user.estado = "ACTIVO";
            this.user.isLogged = "0";
            this.user.fecha_creacion = this.fechaActual;
            this.user.roles_asignados = this.rolesAsignados;
            this.user.roles_removidos = this.rolesRemovidos;
            this.authService.registerUser(this.user).subscribe(function (user) {
              _this29.roles_seleccionados = [];
              document.getElementById("nav-home-tab").click();
              _this29.msgSuccess = "EL USUARIO HA SIDO CREADO";

              _this29.onMsgSuccess();

              _this29.ngOnInit();
            }, function (res) {
              _this29.msgError = res.error.message;

              _this29.onIsError();
            });
          } else {
            this.onIsError();
          }
        }
      }, {
        key: "limpiarFormulario",
        value: function limpiarFormulario() {
          this.user.dni = '';
          this.user.password = '';
          this.user.email = '';
          this.user.apellido_paterno = '';
          this.user.apellido_materno = '';
          this.user.nombres = '';
          this.user.tipo_ambito = '';
          this.user.descripcion_ambito = '';
          this.user.estado = '';
          this.user.isLogged = '';
          this.user.fecha_creacion = null;
        }
      }, {
        key: "onIsError",
        value: function onIsError() {
          var _this30 = this;

          this.isError = true;
          setTimeout(function () {
            _this30.isError = false;
          }, 3000);
        }
      }, {
        key: "onMsgSuccess",
        value: function onMsgSuccess() {
          var _this31 = this;

          this.isSuccess = true;
          setTimeout(function () {
            _this31.isSuccess = false;
          }, 3000);
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/register/register.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/componentes/usuarios/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/configuracion/configuracion.ts":
  /*!************************************************!*\
    !*** ./src/app/configuracion/configuracion.ts ***!
    \************************************************/

  /*! exports provided: Configuracion */

  /***/
  function srcAppConfiguracionConfiguracionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuracion", function () {
      return Configuracion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Configuracion = function Configuracion() {
      _classCallCheck(this, Configuracion);

      //  url:string="http://172.18.20.26:8088/";
      //url:string="http://172.18.21.63:8088/";
      //ip:string="localhost";
      this.ip = "hospitalvirtual.diresacajamarca.gob.pe"; //ip:string=environment.ip;

      this.urlsimple = "http://" + this.ip + ":8089/";
      this.url = "http://" + this.ip + ":8089/cargashis/";
      this.urlsis = "http://" + this.ip + ":8089/cargassis/";
      this.urlcontrolhis = "http://" + this.ip + ":8089/controlcalidadhis/";
      this.urlgenerarexcelcc = "http://" + this.ip + ":8089/controlhis/"; //url:string="http://dwh.diresacajamarca.gob.pe:8089/";
    };
    /***/

  },

  /***/
  "./src/app/directivas/click-color.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/directivas/click-color.directive.ts ***!
    \*****************************************************/

  /*! exports provided: ClickColorDirective */

  /***/
  function srcAppDirectivasClickColorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickColorDirective", function () {
      return ClickColorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClickColorDirective =
    /*#__PURE__*/
    function () {
      function ClickColorDirective(elementref) {
        _classCallCheck(this, ClickColorDirective);

        this.elementref = elementref;
        this.fila = {};
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ClickColorDirective, [{
        key: "cambiarColor",
        value: function cambiarColor() {
          /* reseteo el estilo letra negra y fondo blanco */
          for (var index = 0; index < this.elementref.nativeElement.parentElement.children.length; index++) {
            this.elementref.nativeElement.parentElement.children[index].style.backgroundColor = '#FFFFFF';
            this.elementref.nativeElement.parentElement.children[index].style.color = '#000000';
          }
          /* establesco los estilos a la fila */


          this.elementref.nativeElement.style.backgroundColor = '#007bff';
          this.elementref.nativeElement.style.color = '#FFFFFF';
          this.click.emit(this.fila);
        }
      }]);

      return ClickColorDirective;
    }();

    ClickColorDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appClickColor')], ClickColorDirective.prototype, "fila", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], ClickColorDirective.prototype, "cambiarColor", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('selecciono')], ClickColorDirective.prototype, "click", void 0);
    ClickColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appClickColor]'
    })], ClickColorDirective);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.getCurrentUser()) {
            //LOGIN TRUE
            return true;
          } else {
            this.router.navigate(['user/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/cargas-his.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/guards/cargas-his.guard.ts ***!
    \********************************************/

  /*! exports provided: CargasHisGuard */

  /***/
  function srcAppGuardsCargasHisGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CargasHisGuard", function () {
      return CargasHisGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    var CargasHisGuard =
    /*#__PURE__*/
    function () {
      function CargasHisGuard(authService, router) {
        _classCallCheck(this, CargasHisGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(CargasHisGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var roles_usuario = this.authService.getRoles_CurrentUser();
          var index = roles_usuario.findIndex(function (roles) {
            return roles.nombre_rol_risc == "Carga HIS.";
          });

          if (index >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return CargasHisGuard;
    }();

    CargasHisGuard.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CargasHisGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CargasHisGuard);
    /***/
  },

  /***/
  "./src/app/guards/cargas-sis.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/guards/cargas-sis.guard.ts ***!
    \********************************************/

  /*! exports provided: CargasSisGuard */

  /***/
  function srcAppGuardsCargasSisGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CargasSisGuard", function () {
      return CargasSisGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    var CargasSisGuard =
    /*#__PURE__*/
    function () {
      function CargasSisGuard(authService, router) {
        _classCallCheck(this, CargasSisGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(CargasSisGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var roles_usuario = this.authService.getRoles_CurrentUser();
          var index = roles_usuario.findIndex(function (roles) {
            return roles.nombre_rol_risc == "Carga SIS.";
          });

          if (index >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return CargasSisGuard;
    }();

    CargasSisGuard.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CargasSisGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CargasSisGuard);
    /***/
  },

  /***/
  "./src/app/guards/creacion-usuarios.guard.ts":
  /*!***************************************************!*\
    !*** ./src/app/guards/creacion-usuarios.guard.ts ***!
    \***************************************************/

  /*! exports provided: CreacionUsuariosGuard */

  /***/
  function srcAppGuardsCreacionUsuariosGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreacionUsuariosGuard", function () {
      return CreacionUsuariosGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    var CreacionUsuariosGuard =
    /*#__PURE__*/
    function () {
      function CreacionUsuariosGuard(authService, router) {
        _classCallCheck(this, CreacionUsuariosGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(CreacionUsuariosGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var roles_usuario = this.authService.getRoles_CurrentUser();
          var index = roles_usuario.findIndex(function (roles) {
            return roles.nombre_rol_risc == "Creacion de usuarios.";
          });

          if (index >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return CreacionUsuariosGuard;
    }();

    CreacionUsuariosGuard.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CreacionUsuariosGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CreacionUsuariosGuard);
    /***/
  },

  /***/
  "./src/app/guards/reportes-ambito.guard.ts":
  /*!*************************************************!*\
    !*** ./src/app/guards/reportes-ambito.guard.ts ***!
    \*************************************************/

  /*! exports provided: ReportesAmbitoGuard */

  /***/
  function srcAppGuardsReportesAmbitoGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportesAmbitoGuard", function () {
      return ReportesAmbitoGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    var ReportesAmbitoGuard =
    /*#__PURE__*/
    function () {
      function ReportesAmbitoGuard(authService, router) {
        _classCallCheck(this, ReportesAmbitoGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(ReportesAmbitoGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var roles_usuario = this.authService.getRoles_CurrentUser();
          var index = roles_usuario.findIndex(function (roles) {
            return roles.nombre_rol_risc == "Reportes segun ambito.";
          });

          if (index >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return ReportesAmbitoGuard;
    }();

    ReportesAmbitoGuard.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ReportesAmbitoGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReportesAmbitoGuard);
    /***/
  },

  /***/
  "./src/app/guards/reportes-diresa.guard.ts":
  /*!*************************************************!*\
    !*** ./src/app/guards/reportes-diresa.guard.ts ***!
    \*************************************************/

  /*! exports provided: ReportesDiresaGuard */

  /***/
  function srcAppGuardsReportesDiresaGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportesDiresaGuard", function () {
      return ReportesDiresaGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    var ReportesDiresaGuard =
    /*#__PURE__*/
    function () {
      function ReportesDiresaGuard(authService, router) {
        _classCallCheck(this, ReportesDiresaGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(ReportesDiresaGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var roles_usuario = this.authService.getRoles_CurrentUser();
          var index = roles_usuario.findIndex(function (roles) {
            return roles.nombre_rol_risc == "Reportes DIRESA.";
          });

          if (index >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return ReportesDiresaGuard;
    }();

    ReportesDiresaGuard.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ReportesDiresaGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReportesDiresaGuard);
    /***/
  },

  /***/
  "./src/app/guards/seguimiento-cargas.guard.ts":
  /*!****************************************************!*\
    !*** ./src/app/guards/seguimiento-cargas.guard.ts ***!
    \****************************************************/

  /*! exports provided: SeguimientoCargasGuard */

  /***/
  function srcAppGuardsSeguimientoCargasGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeguimientoCargasGuard", function () {
      return SeguimientoCargasGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");

    var SeguimientoCargasGuard =
    /*#__PURE__*/
    function () {
      function SeguimientoCargasGuard(authService, router) {
        _classCallCheck(this, SeguimientoCargasGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(SeguimientoCargasGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var roles_usuario = this.authService.getRoles_CurrentUser();
          var index = roles_usuario.findIndex(function (roles) {
            return roles.nombre_rol_risc == "Seguimiento de cargas.";
          });

          if (index >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return SeguimientoCargasGuard;
    }();

    SeguimientoCargasGuard.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SeguimientoCargasGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SeguimientoCargasGuard);
    /***/
  },

  /***/
  "./src/app/menu-principal/menu-principal.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/menu-principal/menu-principal.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPrincipalMenuPrincipalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".MenuBuscar {\r\n    position: relative;\r\n    left: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1wcmluY2lwYWwvbWVudS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk1lbnVCdXNjYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menu-principal/menu-principal.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/menu-principal/menu-principal.component.ts ***!
    \************************************************************/

  /*! exports provided: MenuPrincipalComponent */

  /***/
  function srcAppMenuPrincipalMenuPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPrincipalComponent", function () {
      return MenuPrincipalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../servicios/auth.service */
    "./src/app/servicios/auth.service.ts");
    /* harmony import */


    var _guards_cargas_his_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../guards/cargas-his.guard */
    "./src/app/guards/cargas-his.guard.ts");
    /* harmony import */


    var _guards_cargas_sis_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../guards/cargas-sis.guard */
    "./src/app/guards/cargas-sis.guard.ts");
    /* harmony import */


    var _guards_reportes_ambito_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../guards/reportes-ambito.guard */
    "./src/app/guards/reportes-ambito.guard.ts");
    /* harmony import */


    var _guards_reportes_diresa_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../guards/reportes-diresa.guard */
    "./src/app/guards/reportes-diresa.guard.ts");
    /* harmony import */


    var _guards_seguimiento_cargas_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../guards/seguimiento-cargas.guard */
    "./src/app/guards/seguimiento-cargas.guard.ts");

    var MenuPrincipalComponent =
    /*#__PURE__*/
    function () {
      function MenuPrincipalComponent(authService, // GUARDS
      cargasHis_Guard, cargasSis_Guard, reportesAmbito_Guard, reportesDiresa_Guard, seguimientoCargas_Guard) {
        _classCallCheck(this, MenuPrincipalComponent);

        this.authService = authService;
        this.cargasHis_Guard = cargasHis_Guard;
        this.cargasSis_Guard = cargasSis_Guard;
        this.reportesAmbito_Guard = reportesAmbito_Guard;
        this.reportesDiresa_Guard = reportesDiresa_Guard;
        this.seguimientoCargas_Guard = seguimientoCargas_Guard;
      }

      _createClass(MenuPrincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.authService.getCurrentUser();
          this.nivel = this.currentUser.tipo_ambito;
          this.items = [{
            label: "Maestros",
            icon: "pi pi-fw pi-cog",
            items: [[{
              label: "Personal",
              items: [{
                label: "TV 1.1"
              }, {
                label: "TV 1.2"
              }]
            }, {
              label: "TV 2",
              items: [{
                label: "TV 2.1"
              }, {
                label: "TV 2.2"
              }]
            }], [{
              label: "Puntos de digitacion",
              items: [{
                label: "Establecimientos por Puntos",
                routerLink: "adminpue"
              }, {
                label: "TV 3.2"
              }]
            }]],
            visible: this.nivel == "DEPARTAMENTO"
          }, {
            label: "Reportes",
            icon: "pi pi-fw pi-chart-bar",
            items: [[{
              label: "Estrategias",
              items: [{
                label: "Niño"
              }, {
                label: "Adolecente"
              }, {
                label: "Adulto"
              }, {
                label: "Adulto Mayor"
              }, {
                label: "Joven"
              }, {
                label: "Materno"
              }]
            }], [{
              label: "Digitador",
              items: [{
                label: "Sports 5.1"
              }, {
                label: "Sports 5.2"
              }]
            }, {
              label: "Atenciones",
              items: [{
                label: "Sports 6.1"
              }, {
                label: "Sports 6.2"
              }]
            }]],
            visible: this.reportesAmbito_Guard.canActivate() || this.reportesDiresa_Guard.canActivate()
          }, {
            label: "Cargas",
            icon: "pi pi-fw pi-upload",
            items: [[{
              label: "HIS",
              items: [{
                label: "Periodo Actual",
                routerLink: "/user/cargasHis/" + this.nivel
              }, {
                label: "Actualizacion"
              }, {
                label: "Reporte de Cargas"
              }],
              visible: this.cargasHis_Guard.canActivate()
            }], [{
              label: "SIS",
              items: [{
                label: "Periodo Actual",
                routerLink: "user/cargasSis/" + this.nivel
              }, {
                label: "Actualizacion"
              }, {
                label: "Reporte de Cargas"
              }],
              visible: this.cargasSis_Guard.canActivate()
            }]],
            visible: this.nivel == "PUNTO"
          }, {
            label: "Seguimiento",
            icon: "pi pi-fw pi-download",
            items: [[{
              label: "Control de Calidad",
              items: [{
                label: "Reporte de Control de calidad",
                routerLink: "descargaCC"
              }]
            }]],
            visible: this.seguimientoCargas_Guard.canActivate()
          }];
        }
      }]);

      return MenuPrincipalComponent;
    }();

    MenuPrincipalComponent.ctorParameters = function () {
      return [{
        type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _guards_cargas_his_guard__WEBPACK_IMPORTED_MODULE_3__["CargasHisGuard"]
      }, {
        type: _guards_cargas_sis_guard__WEBPACK_IMPORTED_MODULE_4__["CargasSisGuard"]
      }, {
        type: _guards_reportes_ambito_guard__WEBPACK_IMPORTED_MODULE_5__["ReportesAmbitoGuard"]
      }, {
        type: _guards_reportes_diresa_guard__WEBPACK_IMPORTED_MODULE_6__["ReportesDiresaGuard"]
      }, {
        type: _guards_seguimiento_cargas_guard__WEBPACK_IMPORTED_MODULE_7__["SeguimientoCargasGuard"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MenuPrincipalComponent.prototype, "punto_digitacion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MenuPrincipalComponent.prototype, "ano", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MenuPrincipalComponent.prototype, "mes", void 0);
    MenuPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-menu-principal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-principal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-principal/menu-principal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-principal.component.css */
      "./src/app/menu-principal/menu-principal.component.css")).default]
    })], MenuPrincipalComponent);
    /***/
  },

  /***/
  "./src/app/reportes/prueba/prueba.component.css":
  /*!******************************************************!*\
    !*** ./src/app/reportes/prueba/prueba.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportesPruebaPruebaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grilla{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 1800px;\r\n   \r\n    border: 1px solid black;\r\n}\r\n\r\n\r\n  .grilla div{\r\n   \r\n  }\r\n\r\n\r\n  .item{\r\n     font-size: 10px; \r\n     visibility: visible;\r\n   \r\n     width: 80px;;\r\n     height: 30px;\r\n\r\n  }\r\n\r\n\r\n  .item27{\r\n    width: 50px;\r\n    text-align: justify;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZXMvcHJ1ZWJhL3BydWViYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7O0lBRWIsdUJBQXVCO0FBQzNCOzs7RUFHRTs7RUFFQTs7O0VBQ0E7S0FDRyxlQUFlO0tBQ2YsbUJBQW1COztLQUVuQixXQUFXO0tBQ1gsWUFBWTs7RUFFZjs7O0VBRUY7SUFDSSxXQUFXO0lBQ1gsbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGVzL3BydWViYS9wcnVlYmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlsbGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDE4MDBweDtcclxuICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbiAgLmdyaWxsYSBkaXZ7XHJcbiAgIFxyXG4gIH1cclxuICAuaXRlbXtcclxuICAgICBmb250LXNpemU6IDEwcHg7IFxyXG4gICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgIFxyXG4gICAgIHdpZHRoOiA4MHB4OztcclxuICAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gIH1cclxuICBcclxuLml0ZW0yN3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/reportes/prueba/prueba.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/reportes/prueba/prueba.component.ts ***!
    \*****************************************************/

  /*! exports provided: PruebaComponent */

  /***/
  function srcAppReportesPruebaPruebaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PruebaComponent", function () {
      return PruebaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PruebaComponent =
    /*#__PURE__*/
    function () {
      function PruebaComponent() {
        _classCallCheck(this, PruebaComponent);

        this.celda = [];
      }

      _createClass(PruebaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.celda[33] = "hablar";
          this.celda[109] = "PROMOCION DE LA SALUD VIDA SANA 2020";
          this.celda[27] = "1. FAMILIAS CON NIÑOS(AS) MENORES DE 36 MESES Y GESTANTES RECIBEN SESIONES DEMOSTRATIVAS EN PREPARACION DE ALIMENTOS";
        }
      }]);

      return PruebaComponent;
    }();

    PruebaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prueba',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prueba.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reportes/prueba/prueba.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prueba.component.css */
      "./src/app/reportes/prueba/prueba.component.css")).default]
    })], PruebaComponent);
    /***/
  },

  /***/
  "./src/app/reportes/reporte-preliminar/reporte-preliminar.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/reportes/reporte-preliminar/reporte-preliminar.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportesReportePreliminarReportePreliminarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGVzL3JlcG9ydGUtcHJlbGltaW5hci9yZXBvcnRlLXByZWxpbWluYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/reportes/reporte-preliminar/reporte-preliminar.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/reportes/reporte-preliminar/reporte-preliminar.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ReportePreliminarComponent */

  /***/
  function srcAppReportesReportePreliminarReportePreliminarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportePreliminarComponent", function () {
      return ReportePreliminarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReportePreliminarComponent =
    /*#__PURE__*/
    function () {
      function ReportePreliminarComponent() {
        _classCallCheck(this, ReportePreliminarComponent);

        this.subregion = [{
          label: "CAJAMARCA",
          value: 1
        }, {
          label: "CHOTA",
          value: 2
        }, {
          label: "CUTERVO",
          value: 3
        }, {
          label: "JAEN",
          value: 4
        }];
        this.redes = [{
          label: "CONTUMAZA",
          value: 1,
          subregion: 1
        }, {
          label: "CAJAMARCA",
          value: 2,
          subregion: 1
        }, {
          label: "CELENDIN",
          value: 3,
          subregion: 1
        }, {
          label: "SAN MARCOS",
          value: 4,
          subregion: 1
        }, {
          label: "CAJABAMBA",
          value: 5,
          subregion: 1
        }, {
          label: "SAN MIGUEL",
          value: 6,
          subregion: 1
        }, {
          label: "SAN PABLO",
          value: 7,
          subregion: 1
        }, {
          label: "CHOTA",
          value: 8,
          subregion: 2
        }, {
          label: "BAMBAMARCA",
          value: 9,
          subregion: 2
        }, {
          label: "SANTA CRUZ",
          value: 10,
          subregion: 2
        }, {
          label: "CUTERVO",
          value: 11,
          subregion: 3
        }, {
          label: "SOCOTA",
          value: 12,
          subregion: 3
        }, {
          label: "JAEN",
          value: 13,
          subregion: 4
        }, {
          label: "SAN IGNACIO",
          value: 14,
          subregion: 4
        }];
        this.redesfiltradas = [];
      }

      _createClass(ReportePreliminarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "seleccionarRed",
        value: function seleccionarRed(event) {
          this.redesfiltradas = this.redes.filter(function (data) {
            return data.subregion == event.value;
          });
        }
      }]);

      return ReportePreliminarComponent;
    }();

    ReportePreliminarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reporte-preliminar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reporte-preliminar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reportes/reporte-preliminar/reporte-preliminar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reporte-preliminar.component.css */
      "./src/app/reportes/reporte-preliminar/reporte-preliminar.component.css")).default]
    })], ReportePreliminarComponent);
    /***/
  },

  /***/
  "./src/app/servicios/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/servicios/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServiciosAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(httpClient) {
        _classCallCheck(this, AuthService);

        this.httpClient = httpClient;
        this.AUTH_SERVER = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ip_backend;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          "Content-Type": "application/json"
        });
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.selectedUsuario = {
          dni: null,
          apellido_paterno: '',
          apellido_materno: '',
          nombres: '',
          email: '',
          tipo_ambito: '',
          descripcion_ambito: '',
          estado: ''
        };
      }

      _createClass(AuthService, [{
        key: "getRoles_SelectedUsuario",
        value: function getRoles_SelectedUsuario(dni) {
          return this.httpClient.get("".concat(this.AUTH_SERVER, "/roles_selectedUsuario/").concat(dni));
        }
      }, {
        key: "getRoles",
        value: function getRoles(datos) {
          return this.httpClient.put("".concat(this.AUTH_SERVER, "/roles"), datos);
        }
      }, {
        key: "getlistaUsuarios",
        value: function getlistaUsuarios(usuario) {
          return this.httpClient.put("".concat(this.AUTH_SERVER, "/lista_usuarios"), usuario);
        }
      }, {
        key: "getDescripcionAmbito",
        value: function getDescripcionAmbito(datos) {
          return this.httpClient.put("".concat(this.AUTH_SERVER, "/descripcion_ambito"), datos);
        }
      }, {
        key: "getTipoAmbito",
        value: function getTipoAmbito(tipo_ambito) {
          return this.httpClient.get("".concat(this.AUTH_SERVER, "/tipo_ambito/").concat(tipo_ambito));
        }
      }, {
        key: "getIdPunto",
        value: function getIdPunto(description_ambito) {
          return this.httpClient.get("".concat(this.AUTH_SERVER, "/id_punto/").concat(description_ambito));
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.httpClient.get("".concat(this.AUTH_SERVER, "/usuarios"));
        }
      }, {
        key: "validarDni",
        value: function validarDni(user) {
          return this.httpClient.post("".concat(this.AUTH_SERVER, "/validarDni"), user);
        }
      }, {
        key: "validarPassword",
        value: function validarPassword(user) {
          return this.httpClient.post("".concat(this.AUTH_SERVER, "/validarPassword"), user);
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(user) {
          return this.httpClient.put("".concat(this.AUTH_SERVER, "/changedPassword/").concat(user.dni), user);
        }
      }, {
        key: "restorePassword",
        value: function restorePassword(user) {
          return this.httpClient.put("".concat(this.AUTH_SERVER, "/restorePassword/").concat(user.dni), user);
        }
      }, {
        key: "registerUser",
        value: function registerUser(user) {
          return this.httpClient.post("".concat(this.AUTH_SERVER, "/register"), user);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.httpClient.put("".concat(this.AUTH_SERVER, "/usuarios/").concat(user.dni), user);
        }
      }, {
        key: "updateUserLogged",
        value: function updateUserLogged(user) {
          return this.httpClient.put("".concat(this.AUTH_SERVER, "/usuario_logged/").concat(user.dni), user);
        }
      }, {
        key: "login",
        value: function login(user) {
          var _this32 = this;

          return this.httpClient.post("".concat(this.AUTH_SERVER, "/login"), user, {
            headers: this.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            if (res) {
              //GUARDAR CURRENT_USER
              var currentuser = {
                dni: res.dataUser.dni,
                apellido_paterno: res.dataUser.apellido_paterno,
                apellido_materno: res.dataUser.apellido_materno,
                nombres: res.dataUser.nombres,
                email: res.dataUser.email,
                tipo_ambito: res.dataUser.tipo_ambito,
                descripcion_ambito: res.dataUser.descripcion_ambito,
                estado: res.dataUser.estado
              };

              _this32.setCurrentUser(currentuser);

              _this32.saveRoles(res.roles); //GUARDAR TOKEN


              _this32.saveToken({
                accessToken: res.dataUser.accessToken,
                expiresIn: res.dataUser.expiresIn
              });

              if (res.dataUser.tipo_ambito == 'PUNTO') {
                _this32.getIdPunto(res.dataUser.descripcion_ambito).subscribe(function (datos) {
                  var idPunto = JSON.parse(datos[0].ID_PUNTO_DIG_HIS);

                  _this32.saveIdPunto(idPunto);
                });
              }
            }
          }));
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          var accessToken = localStorage.getItem("ACCESS_TOKEN");
          var url_api = "".concat(this.AUTH_SERVER, "/logout/").concat(accessToken);
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("EXPIRES_IN");
          localStorage.removeItem("CURRENT_USER");
          localStorage.removeItem("ID_PUNTO");
          localStorage.removeItem("ROLES");
          return this.httpClient.post(url_api, {
            headers: this.headers
          });
        }
      }, {
        key: "setCurrentUser",
        value: function setCurrentUser(user) {
          var user_string = JSON.stringify(user);
          localStorage.setItem("CURRENT_USER", user_string);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var user_string = localStorage.getItem("CURRENT_USER");

          if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(user_string)) {
            var user = JSON.parse(user_string);
            return user;
          } else {
            return null;
          }
        }
      }, {
        key: "getRoles_CurrentUser",
        value: function getRoles_CurrentUser() {
          var roles_string = localStorage.getItem("ROLES");

          if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(roles_string)) {
            var roles = JSON.parse(roles_string);
            return roles;
          } else {
            return null;
          }
        }
      }, {
        key: "saveRoles",
        value: function saveRoles(roles) {
          var roles_string = JSON.stringify(roles);
          localStorage.setItem("ROLES", roles_string);
        }
      }, {
        key: "saveToken",
        value: function saveToken(_ref) {
          var accessToken = _ref.accessToken,
              expiresIn = _ref.expiresIn;
          localStorage.setItem("ACCESS_TOKEN", accessToken);
          localStorage.setItem("EXPIRES_IN", expiresIn);
          this.token = accessToken;
        }
      }, {
        key: "saveIdPunto",
        value: function saveIdPunto(idPunto) {
          localStorage.setItem("ID_PUNTO", idPunto);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (!this.token) {
            this.token = localStorage.getItem("ACCESS_TOKEN");
          }

          return this.token;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/servicios/columnascc.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/servicios/columnascc.service.ts ***!
    \*************************************************/

  /*! exports provided: ColumnasccService */

  /***/
  function srcAppServiciosColumnasccServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnasccService", function () {
      return ColumnasccService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _configuracion_configuracion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuracion/configuracion */
    "./src/app/configuracion/configuracion.ts");

    var ColumnasccService =
    /*#__PURE__*/
    function () {
      function ColumnasccService(http) {
        _classCallCheck(this, ColumnasccService);

        this.http = http;
        this.conf = new _configuracion_configuracion__WEBPACK_IMPORTED_MODULE_3__["Configuracion"]();
      }

      _createClass(ColumnasccService, [{
        key: "devolvercolumnas",
        value: function devolvercolumnas() {
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          this.headers.append('Accept', '*/*');
          this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
          this.headers.append('Access-Control-Allow-Origin', '*');
          return this.http.get(this.conf.urlsimple + 'columnascc/', {
            headers: this.headers
          });
        }
      }]);

      return ColumnasccService;
    }();

    ColumnasccService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ColumnasccService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ColumnasccService);
    /***/
  },

  /***/
  "./src/app/servicios/control-calidad.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/servicios/control-calidad.service.ts ***!
    \******************************************************/

  /*! exports provided: ControlCalidadService */

  /***/
  function srcAppServiciosControlCalidadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlCalidadService", function () {
      return ControlCalidadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _configuracion_configuracion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuracion/configuracion */
    "./src/app/configuracion/configuracion.ts");

    var ControlCalidadService =
    /*#__PURE__*/
    function () {
      function ControlCalidadService(http) {
        _classCallCheck(this, ControlCalidadService);

        this.http = http;
        this.conf = new _configuracion_configuracion__WEBPACK_IMPORTED_MODULE_3__["Configuracion"]();
      }

      _createClass(ControlCalidadService, [{
        key: "ejecutarcontrol",
        value: function ejecutarcontrol(ano, mes) {
          return this.http.get(this.conf.urlsimple + 'controlcalidadhis/punto/' + localStorage.getItem('pun') + '/ano/' + ano + '/mes/' + mes + '/nivel/4'); //this.http.get(this.conf.urlgenerarexcelcc+'punto/'+localStorage.getItem('pun')+'/ano/'+ano+'/mes/'+mes);
        }
      }, {
        key: "leercontrol",
        value: function leercontrol(ano, mes) {
          return this.http.get(this.conf.urlsimple + 'leercontrol/' + 'punto/' + localStorage.getItem('pun') + '/ano/' + ano + '/mes/' + mes);
        }
      }, {
        key: "ejecutarcontrol2",
        value: function ejecutarcontrol2() {
          return this.http.get(this.conf.urlsimple + 'controlcalidadhis/leercontrol2/' + localStorage.getItem('pun'));
        }
      }, {
        key: "descargarReporteCon2",
        value: function descargarReporteCon2() {
          return this.http.get(this.conf.urlsimple + 'download/file/' + localStorage.getItem('pun') + '/reporte2cc.xlsx', {
            responseType: 'arraybuffer'
          });
        }
      }, {
        key: "descargarReporteCC",
        value: function descargarReporteCC(cod_ambito) {}
      }]);

      return ControlCalidadService;
    }();

    ControlCalidadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ControlCalidadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ControlCalidadService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      ip: "localhost",
      ip_backend: "172.18.20.17:8084"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\06. RISC 2020\05. RISC ( FRONTEND - BACKEND )\riscclien\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map