/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\cs ia\\\\Computer-Science-IA\\\\frontend\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVVO0FBRXpDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUFPLDhEQUFDRCxTQUFTO1FBQUUsR0FBR0MsU0FBUzs7Ozs7WUFBSSxDQUFDO0FBQ3RDLENBQUM7QUFFRCxpRUFBZUgsMkRBQWlCLENBQUNDLEtBQUssQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwibmFtZXMiOlsid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/cartSlice.ts":
/*!****************************!*\
  !*** ./store/cartSlice.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart),\n/* harmony export */   \"cartSlice\": () => (/* binding */ cartSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeFromCart\": () => (/* binding */ removeFromCart),\n/* harmony export */   \"selectCartState\": () => (/* binding */ selectCartState),\n/* harmony export */   \"selectTotalPrice\": () => (/* binding */ selectTotalPrice),\n/* harmony export */   \"selectTotalQuantity\": () => (/* binding */ selectTotalQuantity)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    cartState: [],\n    totalQuantity: 0,\n    totalPrice: 0\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addToCart (state, action) {\n            return state.cartState.map((product)=>product.ProductName).indexOf(action.payload.ProductName) !== -1 ? state : {\n                ...state,\n                cartState: [\n                    ...state.cartState,\n                    action.payload\n                ],\n                totalQuantity: state.totalQuantity + 1,\n                totalPrice: state.totalPrice + action.payload.price\n            };\n        },\n        removeFromCart (state, action) {\n            const cartState = [\n                ...state.cartState.filter((product)=>product.ProductName != action.payload.ProductName)\n            ];\n            const totalQuantity = cartState.reduce((partialCount, a)=>partialCount + 1, 0);\n            const totalPrice = cartState.reduce((partialSum, a)=>partialSum + a.price, 0);\n            return {\n                ...state,\n                cartState: cartState,\n                totalQuantity,\n                totalPrice\n            };\n        }\n    },\n    extraReducers: {\n        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, action)=>{\n            return {\n                ...state,\n                ...action.payload.auth\n            };\n        }\n    }\n});\nconst { addToCart , removeFromCart  } = cartSlice.actions;\nconst selectCartState = (state)=>state.cart.cartState;\nconst selectTotalQuantity = (state)=>state.cart.totalQuantity;\nconst selectTotalPrice = (state)=>state.cart.totalPrice;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jYXJ0U2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFFRjtBQU03QyxNQUFNRSxZQUFZLEdBQWM7SUFDOUJDLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxVQUFVLEVBQUUsQ0FBQztDQUNkO0FBRU0sTUFBTUMsU0FBUyxHQUFHTiw2REFBVyxDQUFDO0lBQ25DTyxJQUFJLEVBQUUsTUFBTTtJQUNaTCxZQUFZO0lBQ1pNLFFBQVEsRUFBRTtRQUNSQyxTQUFTLEVBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO1lBQ3JCLE9BQU9ELEtBQUssQ0FBQ1AsU0FBUyxDQUFDUyxHQUFHLENBQUNDLENBQUFBLE9BQU8sR0FBRUEsT0FBTyxDQUFDQyxXQUFXLENBQUMsQ0FBQ0MsT0FBTyxDQUFDSixNQUFNLENBQUNLLE9BQU8sQ0FBQ0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUdKLEtBQUssR0FBSTtnQkFBQyxHQUFHQSxLQUFLO2dCQUFFUCxTQUFTLEVBQUU7dUJBQUlPLEtBQUssQ0FBQ1AsU0FBUztvQkFBRVEsTUFBTSxDQUFDSyxPQUFPO2lCQUFDO2dCQUFFWixhQUFhLEVBQUVNLEtBQUssQ0FBQ04sYUFBYSxHQUFDLENBQUM7Z0JBQUVDLFVBQVUsRUFBRUssS0FBSyxDQUFDTCxVQUFVLEdBQUNNLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLO2FBQUM7UUFDdlEsQ0FBQztRQUNEQyxjQUFjLEVBQUNSLEtBQUssRUFBRUMsTUFBTSxFQUFFO1lBQzFCLE1BQU1SLFNBQVMsR0FBRzttQkFBSU8sS0FBSyxDQUFDUCxTQUFTLENBQUNnQixNQUFNLENBQUMsQ0FBQ04sT0FBTyxHQUFLQSxPQUFPLENBQUNDLFdBQVcsSUFBSUgsTUFBTSxDQUFDSyxPQUFPLENBQUNGLFdBQVcsQ0FBQzthQUFDO1lBQzdHLE1BQU1WLGFBQWEsR0FBR0QsU0FBUyxDQUFDaUIsTUFBTSxDQUFDLENBQUNDLFlBQVksRUFBRUMsQ0FBQyxHQUFLRCxZQUFZLEdBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvRSxNQUFNaEIsVUFBVSxHQUFHRixTQUFTLENBQUNpQixNQUFNLENBQUMsQ0FBQ0csVUFBVSxFQUFFRCxDQUFDLEdBQUtDLFVBQVUsR0FBR0QsQ0FBQyxDQUFDTCxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRS9FLE9BQU87Z0JBQUMsR0FBR1AsS0FBSztnQkFBRVAsU0FBUyxFQUFFQSxTQUFTO2dCQUFFQyxhQUFhO2dCQUFFQyxVQUFVO2FBQUM7UUFDdEUsQ0FBQztLQUNGO0lBQ0RtQixhQUFhLEVBQUU7UUFDYixDQUFDdkIsdURBQU8sQ0FBQyxFQUFFLENBQUNTLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQzVCLE9BQU87Z0JBQ0wsR0FBR0QsS0FBSztnQkFDUixHQUFHQyxNQUFNLENBQUNLLE9BQU8sQ0FBQ1MsSUFBSTthQUN2QixDQUFDO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBQ0ksTUFBTSxFQUFFaEIsU0FBUyxHQUFFUyxjQUFjLEdBQUUsR0FBR1osU0FBUyxDQUFDb0IsT0FBTyxDQUFDO0FBRXhELE1BQU1DLGVBQWUsR0FBRyxDQUFDakIsS0FBZSxHQUFLQSxLQUFLLENBQUNrQixJQUFJLENBQUN6QixTQUFTLENBQUM7QUFDbEUsTUFBTTBCLG1CQUFtQixHQUFHLENBQUNuQixLQUFlLEdBQUtBLEtBQUssQ0FBQ2tCLElBQUksQ0FBQ3hCLGFBQWEsQ0FBQztBQUMxRSxNQUFNMEIsZ0JBQWdCLEdBQUcsQ0FBQ3BCLEtBQWUsR0FBS0EsS0FBSyxDQUFDa0IsSUFBSSxDQUFDdkIsVUFBVSxDQUFDO0FBRzNFLGlFQUFlQyxTQUFTLENBQUN5QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3N0b3JlL2NhcnRTbGljZS50cz84YmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJ0U3RhdGUge1xyXG4gIGNhcnRTdGF0ZTogQXJyYXk8b2JqZWN0PjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBDYXJ0U3RhdGUgPSB7XHJcbiAgY2FydFN0YXRlOiBbXSxcclxuICB0b3RhbFF1YW50aXR5OiAwLFxyXG4gIHRvdGFsUHJpY2U6IDAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdjYXJ0JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZFRvQ2FydChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLmNhcnRTdGF0ZS5tYXAocHJvZHVjdD0+cHJvZHVjdC5Qcm9kdWN0TmFtZSkuaW5kZXhPZihhY3Rpb24ucGF5bG9hZC5Qcm9kdWN0TmFtZSkgIT09IC0xID8gc3RhdGUgOiAgey4uLnN0YXRlLCBjYXJ0U3RhdGU6IFsuLi5zdGF0ZS5jYXJ0U3RhdGUsIGFjdGlvbi5wYXlsb2FkXSwgdG90YWxRdWFudGl0eTogc3RhdGUudG90YWxRdWFudGl0eSsxLCB0b3RhbFByaWNlOiBzdGF0ZS50b3RhbFByaWNlK2FjdGlvbi5wYXlsb2FkLnByaWNlfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUZyb21DYXJ0KHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBjYXJ0U3RhdGUgPSBbLi4uc3RhdGUuY2FydFN0YXRlLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5Qcm9kdWN0TmFtZSAhPSBhY3Rpb24ucGF5bG9hZC5Qcm9kdWN0TmFtZSldXHJcbiAgICAgICAgY29uc3QgdG90YWxRdWFudGl0eSA9IGNhcnRTdGF0ZS5yZWR1Y2UoKHBhcnRpYWxDb3VudCwgYSkgPT4gcGFydGlhbENvdW50ICsxLCAwKVxyXG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBjYXJ0U3RhdGUucmVkdWNlKChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5wcmljZSwgMClcclxuXHJcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY2FydFN0YXRlOiBjYXJ0U3RhdGUsIHRvdGFsUXVhbnRpdHksIHRvdGFsUHJpY2V9XHJcbiAgICB9XHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbSFlEUkFURV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuYXV0aCxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCB7IGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQgfSA9IGNhcnRTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdENhcnRTdGF0ZSA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmNhcnQuY2FydFN0YXRlO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0VG90YWxRdWFudGl0eSA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmNhcnQudG90YWxRdWFudGl0eTtcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsUHJpY2UgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5jYXJ0LnRvdGFsUHJpY2U7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiSFlEUkFURSIsImluaXRpYWxTdGF0ZSIsImNhcnRTdGF0ZSIsInRvdGFsUXVhbnRpdHkiLCJ0b3RhbFByaWNlIiwiY2FydFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9DYXJ0Iiwic3RhdGUiLCJhY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiUHJvZHVjdE5hbWUiLCJpbmRleE9mIiwicGF5bG9hZCIsInByaWNlIiwicmVtb3ZlRnJvbUNhcnQiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJwYXJ0aWFsQ291bnQiLCJhIiwicGFydGlhbFN1bSIsImV4dHJhUmVkdWNlcnMiLCJhdXRoIiwiYWN0aW9ucyIsInNlbGVjdENhcnRTdGF0ZSIsImNhcnQiLCJzZWxlY3RUb3RhbFF1YW50aXR5Iiwic2VsZWN0VG90YWxQcmljZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/cartSlice.ts\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cartSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartSlice */ \"./store/cartSlice.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            [_cartSlice__WEBPACK_IMPORTED_MODULE_1__.cartSlice.name]: _cartSlice__WEBPACK_IMPORTED_MODULE_1__.cartSlice.reducer\n        },\n        devTools: true\n    });\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUU7QUFDL0I7QUFDVztBQUVuRCxNQUFNRyxTQUFTLEdBQUcsSUFDaEJILGdFQUFjLENBQUM7UUFDYkksT0FBTyxFQUFFO1lBQ1AsQ0FBQ0gsc0RBQWMsQ0FBQyxFQUFFQSx5REFBaUI7U0FDcEM7UUFDREssUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0FBV0csTUFBTUMsT0FBTyxHQUFHTCxpRUFBYSxDQUFXQyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3RvcmUvc3RvcmUudHM/MTJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgVGh1bmtBY3Rpb24sIEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjYXJ0U2xpY2UgfSBmcm9tICcuL2NhcnRTbGljZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT5cclxuICBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgIFtjYXJ0U2xpY2UubmFtZV06IGNhcnRTbGljZS5yZWR1Y2VyLFxyXG4gICAgfSxcclxuICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+O1xyXG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbJ2dldFN0YXRlJ10+O1xyXG5leHBvcnQgdHlwZSBBcHBUaHVuazxSZXR1cm5UeXBlID0gdm9pZD4gPSBUaHVua0FjdGlvbjxcclxuICBSZXR1cm5UeXBlLFxyXG4gIEFwcFN0YXRlLFxyXG4gIHVua25vd24sXHJcbiAgQWN0aW9uXHJcbj47XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8QXBwU3RvcmU+KG1ha2VTdG9yZSk7Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY2FydFNsaWNlIiwiY3JlYXRlV3JhcHBlciIsIm1ha2VTdG9yZSIsInJlZHVjZXIiLCJuYW1lIiwiZGV2VG9vbHMiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();