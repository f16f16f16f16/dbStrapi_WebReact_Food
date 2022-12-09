(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[6750],{

/***/ 70736:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=35)}({0:function(t,r){t.exports=e},35:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 00-.374.68v1.65a.797.797 0 00.384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 00.216.744l1.167 1.166a.801.801 0 00.744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 00.679.374h1.649a.797.797 0 00.686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 00.744-.216l1.166-1.167a.803.803 0 00.216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 00.374-.679v-1.649a.796.796 0 00-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 00-.216-.744l-1.166-1.173a.802.802 0 00-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 00-.68-.374h-1.65a.797.797 0 00-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 00-.744.216L2.921 4.094a.802.802 0 00-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8zM12 17a5 5 0 100-10 5 5 0 000 10z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 21246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const cookieManagerRequests = {
  getConfig: () => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/config`, {
      method: "GET"
    });
  }),
  updateConfig: (data) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/config/update`, {
      method: "PUT",
      body: { data }
    });
  }),
  getLocales: () => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/locales`, {
      method: "GET"
    });
  }),
  getCookies: (locale = null) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie/find${locale ? `?locale=${locale}` : ""}`, {
      method: "GET"
    });
  }),
  createCookie: (data) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie/create`, {
      method: "POST",
      body: { data }
    });
  }),
  updateCookie: (id, data) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie/update/${id}`, {
      method: "PUT",
      body: { data }
    });
  }),
  deleteCookie: (id) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie/delete/${id}`, {
      method: "DELETE"
    });
  }),
  getCategories: (locale = null) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-category/find${locale ? `?locale=${locale}` : ""}`, {
      method: "GET"
    });
  }),
  createCategory: (data) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-category/create`, {
      method: "POST",
      body: { data }
    });
  }),
  updateCategory: (id, data) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-category/update/${id}`, {
      method: "PUT",
      body: { data }
    });
  }),
  deleteCategory: (id) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-category/delete/${id}`, {
      method: "DELETE"
    });
  }),
  getPopups: (locale = null) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-popup/find${locale ? `?locale=${locale}` : ""}`, {
      method: "GET"
    });
  }),
  createPopup: (data) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-popup/create`, {
      method: "POST",
      body: { data }
    });
  }),
  updatePopup: (id, data) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-popup/update/${id}`, {
      method: "PUT",
      body: { data }
    });
  }),
  deletePopup: (id) => __async(void 0, null, function* () {
    return yield (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-popup/delete/${id}`, {
      method: "DELETE"
    });
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookieManagerRequests);


/***/ }),

/***/ 1155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/utils/index.js + 5 modules
var utils = __webpack_require__(34097);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(78862);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Accordion.js
var Accordion = __webpack_require__(96654);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(62791);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(19408);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(41798);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(43808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Cog.js
var Cog = __webpack_require__(70736);
var Cog_default = /*#__PURE__*/__webpack_require__.n(Cog);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(80768);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/Illo/index.js
var Illo = __webpack_require__(84431);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/CookieTable/index.js
var CookieTable = __webpack_require__(28431);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/CookieModal/index.js + 1 modules
var CookieModal = __webpack_require__(28482);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/CategoryModal/index.js + 1 modules
var CategoryModal = __webpack_require__(13480);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/index.js
var design_system = __webpack_require__(14976);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/PopupContentModal/validation.js


const ValidationSchema = (formatMessage) => {
  const msg = {
    string: {
      isRequired: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.validation.string.isRequired"),
        defaultMessage: "Text cannot be empty"
      }),
      isMax: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.validation.string.isMax"),
        defaultMessage: "Text is to long"
      })
    }
  };
  return lib/* object */.Ry().shape({
    title: lib/* string */.Z_().required(msg.string.isRequired).max(125, msg.string.isMax),
    description: lib/* string */.Z_().max(250, msg.string.isMax)
  });
};
/* harmony default export */ const validation = (ValidationSchema);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/PopupContentModal/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const PopupContentModal = ({ setShowModal, createPopup, updatePopup, popup = {}, locale = null }) => {
  console.log("Popup: ", popup);
  const { formatMessage } = (0,react_intl.useIntl)();
  const isUpdate = Object.keys(popup).length > 0;
  const [id] = (0,react.useState)(popup.id || null);
  const [title, setTitle] = (0,react.useState)(popup.title || "");
  const [description, setDescription] = (0,react.useState)(popup.description || "");
  const [titleValidation, setTitleValidation] = (0,react.useState)([]);
  const [descriptionValidation, setDescriptionValidation] = (0,react.useState)([]);
  const [isCreating, setIsCreating] = (0,react.useState)(false);
  const handleSubmit = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    e.stopPropagation();
    if (yield validateFields()) {
      const fields = {
        title,
        description,
        locale
      };
      try {
        isCreating ? createPopup(__spreadValues({}, fields)) : updatePopup(__spreadValues({ id }, fields));
        setShowModal(false);
      } catch (e2) {
        console.log("error", e2);
      }
    }
  });
  const handleValidation = (field, setValueValidation) => __async(void 0, null, function* () {
    const key = Object.keys(field)[0];
    const result = yield validateField(field, key);
    const isValid = (0,lodash.isNull)(result) ? [] : result;
    setValueValidation(isValid);
  });
  const validateField = (field, key) => __async(void 0, null, function* () {
    return yield validation(formatMessage).validateAt(key, field).then(() => null).catch((err) => err.errors);
  });
  const validateFields = () => __async(void 0, null, function* () {
    const fields = {
      title,
      description
    };
    const validationSuccess = yield validation(formatMessage).isValid(fields).then((valid) => valid);
    if (!validationSuccess) {
      setTitleValidation(yield validateField({ title }, "title"));
      setDescriptionValidation(yield validateField({ description }, "description"));
    }
    return validationSuccess;
  });
  return /* @__PURE__ */ react.createElement(design_system.ModalLayout, {
    onClose: () => setShowModal(false),
    labelledBy: "title",
    as: "form",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ react.createElement(design_system.ModalHeader, null, /* @__PURE__ */ react.createElement(design_system.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "title"
  }, isUpdate ? formatMessage({
    id: (0,utils/* getTrad */.OB)("modal.popup.form.header.title.update"),
    defaultMessage: "Update Popup Content"
  }) : formatMessage({
    id: (0,utils/* getTrad */.OB)("modal.popup.form.header.title.create"),
    defaultMessage: "Create new Popup Content"
  }))), /* @__PURE__ */ react.createElement(design_system.ModalBody, null, isUpdate || isCreating ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(design_system.Box, null, /* @__PURE__ */ react.createElement(design_system.TextInput, {
    label: formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.popup.form.field.title.label"),
      defaultMessage: "Title"
    }),
    name: "title",
    error: (0,lodash.first)(titleValidation),
    onChange: (e) => {
      handleValidation({ title: e.target.value }, setTitleValidation, titleValidation);
      setTitle(e.target.value);
    },
    value: title
  })), /* @__PURE__ */ react.createElement(design_system.Box, {
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(design_system.Textarea, {
    label: formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.popup.form.field.description.label"),
      defaultMessage: "Description"
    }),
    name: "description",
    error: (0,lodash.first)(descriptionValidation),
    onChange: (e) => {
      handleValidation({ description: e.target.value }, setDescriptionValidation, descriptionValidation);
      setDescription(e.target.value);
    },
    value: description
  }))) : /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
    icon: /* @__PURE__ */ react.createElement(Illo/* default */.Z, null),
    content: formatMessage({
      id: (0,utils/* getTrad */.OB)("empty.popup"),
      defaultMessage: "You don't have any popup content yet..."
    }),
    action: /* @__PURE__ */ react.createElement(design_system.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      variant: "secondary",
      onClick: () => setIsCreating(true)
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("empty.popup.cta"),
      defaultMessage: "Add your first popup content"
    })),
    shadow: "none"
  })), /* @__PURE__ */ react.createElement(design_system.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(design_system.Button, {
      onClick: () => setShowModal(false),
      variant: "tertiary"
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.popup.form.cta.cancel"),
      defaultMessage: "Cancel"
    })),
    endActions: isUpdate ? /* @__PURE__ */ react.createElement(design_system.Button, {
      type: "submit"
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.popup.form.cta.update"),
      defaultMessage: "Update Popup Content"
    })) : /* @__PURE__ */ react.createElement(design_system.Button, {
      type: "submit"
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.popup.form.cta.create"),
      defaultMessage: "Add Popup Content"
    }))
  }));
};


// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/CategoryAccordion/index.js
var CategoryAccordion = __webpack_require__(88930);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/api/cookie-manager.js
var cookie_manager = __webpack_require__(21246);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/pages/HomePage/index.js
var HomePage_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





















const HomePage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [cookieData, setCookieData] = (0,react.useState)([]);
  const [categoryData, setCategoryData] = (0,react.useState)([]);
  const [configData, setConfigData] = (0,react.useState)([]);
  const [localeData, setLocaleData] = (0,react.useState)([]);
  const [popupData, setPopupData] = (0,react.useState)([]);
  const [showPopupModal, setShowPopupModal] = (0,react.useState)(false);
  const [showCreateCookieModal, setShowCreateCookieModal] = (0,react.useState)(false);
  const [showUpdateCookieModal, setShowUpdateCookieModal] = (0,react.useState)(false);
  const [showDeleteCookieModal, setShowDeleteCookieModal] = (0,react.useState)(false);
  const [showDuplicateCookieModal, setShowDuplicateCookieModal] = (0,react.useState)(false);
  const [showDeleteAllCookieModal, setShowDeleteAllCookieModal] = (0,react.useState)(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = (0,react.useState)(false);
  const [showUpdateCategoryModal, setShowUpdateCategoryModal] = (0,react.useState)(false);
  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = (0,react.useState)(false);
  const [cookieIsLoading, setCookieIsLoading] = (0,react.useState)(true);
  const [categoryIsLoading, setCategoryIsLoading] = (0,react.useState)(true);
  const [configIsLoading, setConfigIsLoading] = (0,react.useState)(true);
  const [localeIsLoading, setLocaleIsLoading] = (0,react.useState)(true);
  const [popupIsLoading, setPopupIsLoading] = (0,react.useState)(true);
  const [currentCategory, setCurrentCategory] = (0,react.useState)(null);
  const [currentCookie, setCurrentCookie] = (0,react.useState)(null);
  const [currentCookies, setCurrentCookies] = (0,react.useState)([]);
  const [currentLocale, setCurrentLocale] = (0,react.useState)(null);
  const [expandedStates, setExpandedStates] = (0,react.useState)([]);
  const setCookies = () => HomePage_async(void 0, null, function* () {
    setCookieIsLoading(true);
    const cookies = yield cookie_manager/* default.getCookies */.Z.getCookies(currentLocale);
    setCookieData(cookies);
    setCookieIsLoading(false);
  });
  const setCategories = () => HomePage_async(void 0, null, function* () {
    setCategoryIsLoading(true);
    const categories = yield cookie_manager/* default.getCategories */.Z.getCategories(currentLocale);
    setCategoryData(categories);
    setCategoryIsLoading(false);
  });
  const setPopups = () => HomePage_async(void 0, null, function* () {
    setPopupIsLoading(true);
    const popups = yield cookie_manager/* default.getPopups */.Z.getPopups(currentLocale);
    setPopupData(popups);
    setPopupIsLoading(false);
  });
  const getLocales = () => HomePage_async(void 0, null, function* () {
    const locales = yield cookie_manager/* default.getLocales */.Z.getLocales();
    const defaultLocale = locales.filter((locale) => locale.isDefault)[0];
    setLocaleData(locales);
    setCurrentLocale(defaultLocale.code);
    setLocaleIsLoading(false);
  });
  const getConfig = () => HomePage_async(void 0, null, function* () {
    const config = yield cookie_manager/* default.getConfig */.Z.getConfig();
    setConfigData(config);
    setConfigIsLoading(false);
  });
  const createCookie = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.createCookie */.Z.createCookie(data);
    yield setCookies();
  });
  const createCategory = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.createCategory */.Z.createCategory(data);
    yield setCategories();
  });
  const createPopup = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.createPopup */.Z.createPopup(data);
    yield setPopups();
  });
  const deleteCookie = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.deleteCookie */.Z.deleteCookie(data.id);
    yield setCookies();
  });
  const deleteAllCookie = (data) => HomePage_async(void 0, null, function* () {
    for (const cookie of data) {
      yield cookie_manager/* default.deleteCookie */.Z.deleteCookie(cookie.id);
    }
    yield setCookies();
  });
  const deleteCategory = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.deleteCategory */.Z.deleteCategory(data.id);
    yield setCategories();
  });
  const deletePopup = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.deletePopup */.Z.deletePopup(data.id);
    yield setPopups();
  });
  const updateCookie = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.updateCookie */.Z.updateCookie(data.id, data);
    yield setCookies();
  });
  const updateCategory = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.updateCategory */.Z.updateCategory(data.id, data);
    yield setCategories();
  });
  const updatePopup = (data) => HomePage_async(void 0, null, function* () {
    yield cookie_manager/* default.updatePopup */.Z.updatePopup(data.id, data);
    yield setPopups();
  });
  const createAccordionState = (id, isExpanded = false) => {
    const stateExists = expandedStates.filter((obj) => obj.id === id).length > 0;
    if (!stateExists)
      setExpandedStates([{ id, isExpanded }, ...expandedStates]);
  };
  (0,react.useEffect)(() => HomePage_async(void 0, null, function* () {
    yield getConfig();
    yield getLocales();
    yield setCategories();
    yield setCookies();
    yield setPopups();
  }), []);
  (0,react.useEffect)(() => HomePage_async(void 0, null, function* () {
    yield setCategories();
    yield setCookies();
    yield setPopups();
  }), [currentLocale]);
  const isLoading = !(!cookieIsLoading && !categoryIsLoading && !configIsLoading && !localeIsLoading && !popupIsLoading);
  return !isLoading ? /* @__PURE__ */ react.createElement(Layout.Layout, null, /* @__PURE__ */ react.createElement(Layout.BaseHeaderLayout, {
    title: formatMessage({
      id: (0,utils/* getTrad */.OB)("header.title"),
      defaultMessage: "Cookie Manager"
    }),
    subtitle: formatMessage({
      id: (0,utils/* getTrad */.OB)("header.description"),
      defaultMessage: "Create and organize your cookies in one place"
    }),
    as: "h2",
    primaryAction: /* @__PURE__ */ react.createElement(Stack.Stack, {
      horizontal: true,
      spacing: 4
    }, /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Cog_default()), null),
      onClick: () => {
        setShowPopupModal(true);
      }
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("header.cta.manage"),
      defaultMessage: "Manage popup content"
    })), configData.localization && /* @__PURE__ */ react.createElement(Select.Select, {
      id: "lang-select",
      "aria-label": formatMessage({
        id: (0,utils/* getTrad */.OB)("header.cta.locale.label"),
        defaultMessage: "Choose the language to edit"
      }),
      value: currentLocale,
      defaultValue: currentLocale,
      onChange: setCurrentLocale
    }, localeData.map((locale, index) => /* @__PURE__ */ react.createElement(Select.Option, {
      key: index,
      value: locale.code
    }, locale.code.toUpperCase()))))
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, categoryData.length === 0 ? /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
    icon: /* @__PURE__ */ react.createElement(Illo/* default */.Z, null),
    content: formatMessage({
      id: (0,utils/* getTrad */.OB)("empty.category"),
      defaultMessage: "You don't have any categories yet..."
    }),
    action: /* @__PURE__ */ react.createElement(Button.Button, {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      variant: "secondary",
      onClick: () => {
        setCurrentCategory(null);
        setShowCreateCategoryModal(true);
      }
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("empty.category.cta"),
      defaultMessage: "Add your first category"
    })),
    shadow: "none"
  }) : /* @__PURE__ */ react.createElement(Accordion.AccordionGroup, {
    footer: /* @__PURE__ */ react.createElement(Table.TFooter, {
      onClick: () => {
        setCurrentCategory(null);
        setShowCreateCategoryModal(true);
      },
      icon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.category.form.cta.create"),
      defaultMessage: "Create new category"
    }))
  }, categoryData.map((category, index) => {
    const cookieMatches = cookieData.filter((cookie) => {
      var _a;
      return ((_a = cookie.category) == null ? void 0 : _a.id) === category.id;
    });
    const firstIndex = index === 0;
    firstIndex ? createAccordionState(category.id, true) : createAccordionState(category.id);
    return /* @__PURE__ */ react.createElement(CategoryAccordion/* default */.Z, {
      key: index,
      cookies: cookieMatches,
      setCategory: setCurrentCategory,
      setCookies: setCurrentCookies,
      category,
      expandedStates,
      setExpandedStates,
      setShowCreateCookieModal,
      setShowUpdateCategoryModal,
      setShowDeleteCategoryModal
    }, cookieMatches.length > 0 ? /* @__PURE__ */ react.createElement(CookieTable/* default */.Z, {
      cookies: cookieMatches,
      setCookie: setCurrentCookie,
      setCookies: setCurrentCookies,
      category,
      setCategory: setCurrentCategory,
      updateCookie,
      setShowCreateCookieModal,
      setShowUpdateCookieModal,
      setShowDeleteCookieModel: setShowDeleteCookieModal,
      setShowDuplicateCookieModal,
      setShowDeleteAllCookieModal
    }) : /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
      icon: /* @__PURE__ */ react.createElement(Illo/* default */.Z, null),
      content: formatMessage({
        id: (0,utils/* getTrad */.OB)("empty.cookie"),
        defaultMessage: "You don't have any cookies yet..."
      }),
      action: /* @__PURE__ */ react.createElement(Button.Button, {
        startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
        variant: "secondary",
        onClick: () => {
          setCurrentCategory(category);
          setShowCreateCookieModal(true);
        }
      }, formatMessage({
        id: (0,utils/* getTrad */.OB)("empty.cookie.cta"),
        defaultMessage: "Add your first cookie"
      })),
      shadow: "none"
    }));
  }))), showPopupModal && /* @__PURE__ */ react.createElement(PopupContentModal, {
    setShowModal: setShowPopupModal,
    createPopup,
    updatePopup,
    popup: (0,lodash.first)(popupData),
    locale: currentLocale
  }), showCreateCategoryModal && /* @__PURE__ */ react.createElement(CategoryModal/* CreateCategoryModal */.vs, {
    setShowModal: setShowCreateCategoryModal,
    createCategory,
    locale: currentLocale
  }), showUpdateCategoryModal && /* @__PURE__ */ react.createElement(CategoryModal/* UpdateCategoryModal */.R7, {
    setShowModal: setShowUpdateCategoryModal,
    updateCategory,
    category: currentCategory
  }), showDeleteCategoryModal && /* @__PURE__ */ react.createElement(CategoryModal/* DeleteCategoryModal */.u3, {
    setShowModal: setShowDeleteCategoryModal,
    deleteCategory,
    deleteAllCookie,
    category: currentCategory,
    cookies: currentCookies,
    showModal: showDeleteCategoryModal
  }), showCreateCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* CreateCookieModal */.rB, {
    setShowModal: setShowCreateCookieModal,
    createCookie,
    categories: categoryData,
    locale: currentLocale,
    preservedCategory: currentCategory
  }), showUpdateCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* UpdateCookieModal */.PT, {
    setShowModal: setShowUpdateCookieModal,
    updateCookie,
    categories: categoryData,
    cookie: currentCookie
  }), showDeleteCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* DeleteCookieModal */.WL, {
    setShowModal: setShowDeleteCookieModal,
    deleteCookie,
    cookie: currentCookie,
    showModal: showDeleteCookieModal
  }), showDuplicateCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* DuplicateCookieModal */.vk, {
    setShowModal: setShowDuplicateCookieModal,
    createCookie,
    categories: categoryData,
    cookie: currentCookie,
    locale: currentLocale
  }), showDeleteAllCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* DeleteAllCookieModal */.Wx, {
    setShowModal: setShowDeleteAllCookieModal,
    deleteAllCookie,
    cookies: currentCookies,
    showModal: showDeleteAllCookieModal
  })) : /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${utils/* pluginId */.aw}`,
    component: pages_HomePage,
    exact: true
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    component: build.NotFound
  })));
};
/* harmony default export */ const pages_App = (App);


/***/ })

}]);