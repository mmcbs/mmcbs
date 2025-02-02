(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Projects\mmc_storefront\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_services */
      "J9tS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "First Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RegisterComponent_div_7_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.required);
        }
      }

      function RegisterComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Last Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RegisterComponent_div_12_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.lastName.errors.required);
        }
      }

      function RegisterComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RegisterComponent_div_17_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.f.username.errors.required);
        }
      }

      function RegisterComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_22_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password must be at least 6 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RegisterComponent_div_22_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RegisterComponent_div_22_div_2_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.minlength);
        }
      }

      function RegisterComponent_img_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 16);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
          _classCallCheck(this, RegisterComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authenticationService = authenticationService;
          this.userService = userService;
          this.alertService = alertService;
          this.loading = false;
          this.submitted = false; // redirect to home if already logged in

          if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
          }
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
            });
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.submitted = true; // stop here if form is invalid

            if (this.registerForm.invalid) {
              return;
            }

            this.loading = true;
            this.userService.register(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
              _this.alertService.success('Registration successful', true);

              _this.router.navigate(['/login']);
            }, function (error) {
              _this.alertService.error(error);

              _this.loading = false;
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["ng-component"]],
        decls: 29,
        vars: 19,
        consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "firstName"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "pl-3", "src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], ["routerLink", "/login", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 1, "pl-3"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, RegisterComponent_div_7_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, RegisterComponent_div_17_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, RegisterComponent_img_26_Template, 1, 0, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.firstName.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.lastName.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/_services */
      "J9tS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomeComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_li_7_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var user_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.deleteUser(user_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", user_r1.username, " (", user_r1.firstName, " ", user_r1.lastName, ") - ");
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(authenticationService, userService) {
          var _this2 = this;

          _classCallCheck(this, HomeComponent);

          this.authenticationService = authenticationService;
          this.userService = userService;
          this.users = [];
          this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this2.currentUser = user;
          });
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadAllUsers();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // unsubscribe to ensure no memory leaks
            this.currentUserSubscription.unsubscribe();
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this3 = this;

            this.userService["delete"](id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).subscribe(function () {
              _this3.loadAllUsers();
            });
          }
        }, {
          key: "loadAllUsers",
          value: function loadAllUsers() {
            var _this4 = this;

            this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).subscribe(function (users) {
              _this4.users = users;
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["ng-component"]],
        decls: 8,
        vars: 2,
        consts: [[4, "ngFor", "ngForOf"], [1, "text-danger", 3, "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "You're logged in with Angular 7!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "All registered users:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_li_7_Template, 4, 3, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Hi ", ctx.currentUser.firstName, "!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'http://localhost:4000'
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
    "ByK8":
    /*!******************************************!*\
      !*** ./src/app/_helpers/fake-backend.ts ***!
      \******************************************/

    /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

    /***/
    function ByK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
        return FakeBackendInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
        return fakeBackendProvider;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FakeBackendInterceptor = /*#__PURE__*/function () {
        function FakeBackendInterceptor() {
          _classCallCheck(this, FakeBackendInterceptor);
        }

        _createClass(FakeBackendInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // array in local storage for registered users
            var users = JSON.parse(localStorage.getItem('users')) || []; // wrap in delayed observable to simulate server api call

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
              // authenticate
              if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                  return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                  // if login details are valid return 200 OK with user details and fake jwt token
                  var user = filteredUsers[0];
                  var body = {
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: 'fake-jwt-token'
                  };
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    status: 200,
                    body: body
                  }));
                } else {
                  // else return 400 bad request
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    error: {
                      message: 'Username or password is incorrect'
                    }
                  });
                }
              } // get users


              if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    status: 200,
                    body: users
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // get user by id


              if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  // find user by id in users array
                  var urlParts = request.url.split('/');
                  var id = parseInt(urlParts[urlParts.length - 1]);
                  var matchedUsers = users.filter(function (user) {
                    return user.id === id;
                  });

                  var _user = matchedUsers.length ? matchedUsers[0] : null;

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    status: 200,
                    body: _user
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // register user


              if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser = request.body; // validation

                var duplicateUser = users.filter(function (user) {
                  return user.username === newUser.username;
                }).length;

                if (duplicateUser) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    error: {
                      message: 'Username "' + newUser.username + '" is already taken'
                    }
                  });
                } // save new user


                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users)); // respond 200 OK

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                  status: 200
                }));
              } // delete user


              if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  // find user by id in users array
                  var _urlParts = request.url.split('/');

                  var _id = parseInt(_urlParts[_urlParts.length - 1]);

                  for (var i = 0; i < users.length; i++) {
                    var _user2 = users[i];

                    if (_user2.id === _id) {
                      // delete user
                      users.splice(i, 1);
                      localStorage.setItem('users', JSON.stringify(users));
                      break;
                    }
                  } // respond 200 OK


                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    status: 200
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // pass through any requests not handled above


              return next.handle(request);
            })) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["dematerialize"])());
          }
        }]);

        return FakeBackendInterceptor;
      }();

      FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) {
        return new (t || FakeBackendInterceptor)();
      };

      FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FakeBackendInterceptor,
        factory: FakeBackendInterceptor.ɵfac
      });
      var fakeBackendProvider = {
        // use fake backend in place of Http service for backend-less development
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: FakeBackendInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    "J9tS":
    /*!************************************!*\
      !*** ./src/app/_services/index.ts ***!
      \************************************/

    /*! exports provided: AlertService, AuthenticationService, UserService */

    /***/
    function J9tS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert.service */
      "f5O9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"];
      });
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication.service */
      "pW6c");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
      });
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user.service */
      "VITL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
      });
      /***/

    },

    /***/
    "K9Mn":
    /*!************************************************!*\
      !*** ./src/app/_components/alert.component.ts ***!
      \************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function K9Mn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/_services */
      "J9tS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "alert": a0,
          "alert-success": a1,
          "alert-danger": a2
        };
      };

      function AlertComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, ctx_r0.message, ctx_r0.message.type === "success", ctx_r0.message.type === "error"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message.text);
        }
      }

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(alertService) {
          _classCallCheck(this, AlertComponent);

          this.alertService = alertService;
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.subscription = this.alertService.getMessage().subscribe(function (message) {
              _this5.message = message;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__["AlertService"]));
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["alert"]],
        decls: 1,
        vars: 1,
        consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 6, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "NFyy":
    /*!********************************!*\
      !*** ./src/app/login/index.ts ***!
      \********************************/

    /*! exports provided: LoginComponent */

    /***/
    function NFyy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.component */
      "vtpD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
      });
      /***/

    },

    /***/
    "Ndrk":
    /*!**************************************!*\
      !*** ./src/app/_components/index.ts ***!
      \**************************************/

    /*! exports provided: AlertComponent */

    /***/
    function Ndrk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert.component */
      "K9Mn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"];
      });
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_services */
      "J9tS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./_components/alert.component */
      "K9Mn");

      function AppComponent_nav_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, authenticationService) {
          var _this6 = this;

          _classCallCheck(this, AppComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.authenticationService.currentUser.subscribe(function (x) {
            return _this6.currentUser = x;
          });
        }

        _createClass(AppComponent, [{
          key: "logout",
          value: function logout() {
            this.authenticationService.logout();
            this.router.navigate(['/login']);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app"]],
        decls: 14,
        vars: 1,
        consts: [["class", "navbar navbar-expand navbar-dark bg-dark", 4, "ngIf"], [1, "jumbotron"], [1, "container"], [1, "row"], [1, "col-sm-6", "offset-sm-3"], [1, "text-center"], ["href", "http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial", "target", "_top"], ["href", "http://jasonwatmore.com", "target", "_top"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav"], ["routerLink", "/", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 6, 0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Angular 7 - User Registration and Login Example & Tutorial");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "JasonWatmore.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "VITL":
    /*!*******************************************!*\
      !*** ./src/app/_services/user.service.ts ***!
      \*******************************************/

    /*! exports provided: UserService */

    /***/
    function VITL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users"));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat(id));
          }
        }, {
          key: "register",
          value: function register(user) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/register"), user);
          }
        }, {
          key: "update",
          value: function update(user) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat(user.id), user);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat(id));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "XgRA":
    /*!***********************************!*\
      !*** ./src/app/_helpers/index.ts ***!
      \***********************************/

    /*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */

    /***/
    function XgRA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error.interceptor */
      "nSnL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"];
      });
      /* harmony import */


      var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jwt.interceptor */
      "jfvi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"];
      });
      /* harmony import */


      var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fake-backend */
      "ByK8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
        return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
        return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"];
      });
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared.module */
      "d2mR");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./_components */
      "Ndrk");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./_helpers */
      "XgRA");
      /* harmony import */


      var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home */
      "wn6f");
      /* harmony import */


      var _login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./login */
      "NFyy");
      /* harmony import */


      var _register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./register */
      "lZQ7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _login__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _register__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routing */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routing", function () {
        return routing;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home */
      "wn6f");
      /* harmony import */


      var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login */
      "NFyy");
      /* harmony import */


      var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register */
      "lZQ7");

      var appRoutes = [{
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, // { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // *NOTE: AuthGuard re-routes to Login page if user not logged in
      {
        path: 'login',
        component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'register',
        component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
      }, // otherwise redirect to home
      {
        path: '**',
        redirectTo: ''
      }];

      var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
        relativeLinkResolution: 'legacy'
      });
      /***/

    },

    /***/
    "d2mR":
    /*!**********************************!*\
      !*** ./src/app/shared.module.ts ***!
      \**********************************/

    /*! exports provided: SharedModule */

    /***/
    function d2mR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "f5O9":
    /*!********************************************!*\
      !*** ./src/app/_services/alert.service.ts ***!
      \********************************************/

    /*! exports provided: AlertService */

    /***/
    function f5O9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(router) {
          var _this7 = this;

          _classCallCheck(this, AlertService);

          this.router = router;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.keepAfterNavigationChange = false; // clear alert message on route change

          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
              if (_this7.keepAfterNavigationChange) {
                // only keep for a single location change
                _this7.keepAfterNavigationChange = false;
              } else {
                // clear alert
                _this7.subject.next();
              }
            }
          });
        }

        _createClass(AlertService, [{
          key: "success",
          value: function success(message) {
            var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.keepAfterNavigationChange = keepAfterNavigationChange;
            this.subject.next({
              type: 'success',
              text: message
            });
          }
        }, {
          key: "error",
          value: function error(message) {
            var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.keepAfterNavigationChange = keepAfterNavigationChange;
            this.subject.next({
              type: 'error',
              text: message
            });
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            return this.subject.asObservable();
          }
        }]);

        return AlertService;
      }();

      AlertService.ɵfac = function AlertService_Factory(t) {
        return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AlertService,
        factory: AlertService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "jfvi":
    /*!*********************************************!*\
      !*** ./src/app/_helpers/jwt.interceptor.ts ***!
      \*********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function jfvi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/_services */
      "J9tS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add authorization header with jwt token if available
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser && currentUser.token) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "lZQ7":
    /*!***********************************!*\
      !*** ./src/app/register/index.ts ***!
      \***********************************/

    /*! exports provided: RegisterComponent */

    /***/
    function lZQ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.component */
      "1W4x");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"];
      });
      /***/

    },

    /***/
    "nSnL":
    /*!***********************************************!*\
      !*** ./src/app/_helpers/error.interceptor.ts ***!
      \***********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function nSnL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_services */
      "J9tS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this8 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this8.authenticationService.logout();

                location.reload(true);
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "pW6c":
    /*!*****************************************************!*\
      !*** ./src/app/_services/authentication.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function pW6c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this9 = this;

            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/authenticate"), {
              username: username,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));

                _this9.currentUserSubject.next(user);
              }

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_services */
      "J9tS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_7_div_1_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
        }
      }

      function LoginComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
        }
      }

      function LoginComponent_img_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 12);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.alertService = alertService;
          this.loading = false;
          this.submitted = false; // redirect to home if already logged in

          if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this10 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            }

            this.loading = true;
            this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
              _this10.router.navigate([_this10.returnUrl]);
            }, function (error) {
              _this10.alertService.error(error);

              _this10.loading = false;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["ng-component"]],
        decls: 19,
        vars: 11,
        consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "pl-3", "src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 4, "ngIf"], ["routerLink", "/register", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], ["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==", 1, "pl-3"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LoginComponent_img_16_Template, 1, 0, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "wn6f":
    /*!*******************************!*\
      !*** ./src/app/home/index.ts ***!
      \*******************************/

    /*! exports provided: HomeComponent */

    /***/
    function wn6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
      });
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map