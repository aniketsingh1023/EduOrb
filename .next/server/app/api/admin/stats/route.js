"use strict";
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
exports.id = "app/api/admin/stats/route";
exports.ids = ["app/api/admin/stats/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fstats%2Froute&page=%2Fapi%2Fadmin%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fstats%2Froute.ts&appDir=%2FUsers%2Faniketsingh%2FDesktop%2FEduOrb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsingh%2FDesktop%2FEduOrb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fstats%2Froute&page=%2Fapi%2Fadmin%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fstats%2Froute.ts&appDir=%2FUsers%2Faniketsingh%2FDesktop%2FEduOrb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsingh%2FDesktop%2FEduOrb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_aniketsingh_Desktop_EduOrb_app_api_admin_stats_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/stats/route.ts */ \"(rsc)/./app/api/admin/stats/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/stats/route\",\n        pathname: \"/api/admin/stats\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/stats/route\"\n    },\n    resolvedPagePath: \"/Users/aniketsingh/Desktop/EduOrb/app/api/admin/stats/route.ts\",\n    nextConfigOutput,\n    userland: _Users_aniketsingh_Desktop_EduOrb_app_api_admin_stats_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/stats/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjE2X0BvcGVudGVsZW1ldHJ5K2FwaUAxLjkuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMV9fcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtYXBwLWxvYWRlci5qcz9uYW1lPWFwcCUyRmFwaSUyRmFkbWluJTJGc3RhdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkbWluJTJGc3RhdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRnN0YXRzJTJGcm91dGUudHMmYXBwRGlyPSUyRlVzZXJzJTJGYW5pa2V0c2luZ2glMkZEZXNrdG9wJTJGRWR1T3JiJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmFuaWtldHNpbmdoJTJGRGVza3RvcCUyRkVkdU9yYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDYztBQUMzRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXYwLXByb2plY3QvPzk1MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FuaWtldHNpbmdoL0Rlc2t0b3AvRWR1T3JiL2FwcC9hcGkvYWRtaW4vc3RhdHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL3N0YXRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vc3RhdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluL3N0YXRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FuaWtldHNpbmdoL0Rlc2t0b3AvRWR1T3JiL2FwcC9hcGkvYWRtaW4vc3RhdHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkbWluL3N0YXRzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fstats%2Froute&page=%2Fapi%2Fadmin%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fstats%2Froute.ts&appDir=%2FUsers%2Faniketsingh%2FDesktop%2FEduOrb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsingh%2FDesktop%2FEduOrb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/stats/route.ts":
/*!**************************************!*\
  !*** ./app/api/admin/stats/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.11_@auth+core@0.39.1_nodemailer@7.0.3__next@14.2.16_@opentelemetry+api@1_305347aca9bbd244a98d8bdb4dc4502e/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n        if (!session?.user?.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { db } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n        // Get actual user count\n        const totalUsers = await db.collection(\"users\").countDocuments();\n        // Mock stats for demo - in production, you'd calculate these from actual data\n        const stats = {\n            totalUsers,\n            activeUsers: Math.floor(totalUsers * 0.7),\n            totalSessions: Math.floor(totalUsers * 25),\n            totalQuestions: Math.floor(totalUsers * 150),\n            totalExams: Math.floor(totalUsers * 8),\n            avgSessionTime: Math.floor(Math.random() * 30) + 15\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            stats\n        });\n    } catch (error) {\n        console.error(\"Admin stats fetch error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3N0YXRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTREO0FBQ2hCO0FBQ0s7QUFFMUMsZUFBZUcsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUosMkRBQWdCQTtRQUN0QyxJQUFJLENBQUNJLFNBQVNDLE1BQU1DLE9BQU87WUFDekIsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFlLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN0RTtRQUVBLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUcsTUFBTVQsK0RBQWlCQTtRQUV0Qyx3QkFBd0I7UUFDeEIsTUFBTVUsYUFBYSxNQUFNRCxHQUFHRSxVQUFVLENBQUMsU0FBU0MsY0FBYztRQUU5RCw4RUFBOEU7UUFDOUUsTUFBTUMsUUFBUTtZQUNaSDtZQUNBSSxhQUFhQyxLQUFLQyxLQUFLLENBQUNOLGFBQWE7WUFDckNPLGVBQWVGLEtBQUtDLEtBQUssQ0FBQ04sYUFBYTtZQUN2Q1EsZ0JBQWdCSCxLQUFLQyxLQUFLLENBQUNOLGFBQWE7WUFDeENTLFlBQVlKLEtBQUtDLEtBQUssQ0FBQ04sYUFBYTtZQUNwQ1UsZ0JBQWdCTCxLQUFLQyxLQUFLLENBQUNELEtBQUtNLE1BQU0sS0FBSyxNQUFNO1FBQ25EO1FBRUEsT0FBT3ZCLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRU87UUFBTTtJQUNuQyxFQUFFLE9BQU9TLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBT3hCLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL2FwcC9hcGkvYWRtaW4vc3RhdHMvcm91dGUudHM/ODM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbigpXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pXG4gICAgfVxuXG4gICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKVxuXG4gICAgLy8gR2V0IGFjdHVhbCB1c2VyIGNvdW50XG4gICAgY29uc3QgdG90YWxVc2VycyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5jb3VudERvY3VtZW50cygpXG5cbiAgICAvLyBNb2NrIHN0YXRzIGZvciBkZW1vIC0gaW4gcHJvZHVjdGlvbiwgeW91J2QgY2FsY3VsYXRlIHRoZXNlIGZyb20gYWN0dWFsIGRhdGFcbiAgICBjb25zdCBzdGF0cyA9IHtcbiAgICAgIHRvdGFsVXNlcnMsXG4gICAgICBhY3RpdmVVc2VyczogTWF0aC5mbG9vcih0b3RhbFVzZXJzICogMC43KSxcbiAgICAgIHRvdGFsU2Vzc2lvbnM6IE1hdGguZmxvb3IodG90YWxVc2VycyAqIDI1KSxcbiAgICAgIHRvdGFsUXVlc3Rpb25zOiBNYXRoLmZsb29yKHRvdGFsVXNlcnMgKiAxNTApLFxuICAgICAgdG90YWxFeGFtczogTWF0aC5mbG9vcih0b3RhbFVzZXJzICogOCksXG4gICAgICBhdmdTZXNzaW9uVGltZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICsgMTUsXG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHMgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQWRtaW4gc3RhdHMgZmV0Y2ggZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiR0VUIiwicmVxdWVzdCIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImRiIiwidG90YWxVc2VycyIsImNvbGxlY3Rpb24iLCJjb3VudERvY3VtZW50cyIsInN0YXRzIiwiYWN0aXZlVXNlcnMiLCJNYXRoIiwiZmxvb3IiLCJ0b3RhbFNlc3Npb25zIiwidG90YWxRdWVzdGlvbnMiLCJ0b3RhbEV4YW1zIiwiYXZnU2Vzc2lvblRpbWUiLCJyYW5kb20iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/stats/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\n// Enhanced connection options to handle SSL/TLS issues\nconst options = {\n    maxPoolSize: 10,\n    serverSelectionTimeoutMS: 5000,\n    socketTimeoutMS: 45000,\n    family: 4,\n    tls: true,\n    tlsInsecure: false,\n    retryWrites: true,\n    w: \"majority\"\n};\nlet client;\nlet clientPromise;\nif (true) {\n    const globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\nasync function connectToDatabase() {\n    try {\n        const client = await clientPromise;\n        const db = client.db(\"eduorb\");\n        // Test the connection\n        await db.admin().ping();\n        console.log(\"Successfully connected to MongoDB\");\n        return {\n            client,\n            db\n        };\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw new Error(\"Failed to connect to database\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBRTlDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBRW5DLHVEQUF1RDtBQUN2RCxNQUFNRyxVQUFVO0lBQ2RDLGFBQWE7SUFDYkMsMEJBQTBCO0lBQzFCQyxpQkFBaUI7SUFDakJDLFFBQVE7SUFDUkMsS0FBSztJQUNMQyxhQUFhO0lBQ2JDLGFBQWE7SUFDYkMsR0FBRztBQUNMO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUlmLElBQXNDLEVBQUU7SUFDMUMsTUFBTWdCLGtCQUFrQkM7SUFJeEIsSUFBSSxDQUFDRCxnQkFBZ0JFLG1CQUFtQixFQUFFO1FBQ3hDSixTQUFTLElBQUlmLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QlcsZ0JBQWdCRSxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUN0RDtJQUNBSixnQkFBZ0JDLGdCQUFnQkUsbUJBQW1CO0FBQ3JELE9BQU8sRUFHTjtBQUVNLGVBQWVFO0lBQ3BCLElBQUk7UUFDRixNQUFNTixTQUFTLE1BQU1DO1FBQ3JCLE1BQU1NLEtBQUtQLE9BQU9PLEVBQUUsQ0FBQztRQUVyQixzQkFBc0I7UUFDdEIsTUFBTUEsR0FBR0MsS0FBSyxHQUFHQyxJQUFJO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUM7UUFFWixPQUFPO1lBQUVYO1lBQVFPO1FBQUc7SUFDdEIsRUFBRSxPQUFPSyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE1BQU0sSUFBSXZCLE1BQU07SUFDbEI7QUFDRjtBQUVBLGlFQUFlWSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL2xpYi9tb25nb2RiLnRzPzA1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIHR5cGUgRGIgfSBmcm9tIFwibW9uZ29kYlwiXG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5cbi8vIEVuaGFuY2VkIGNvbm5lY3Rpb24gb3B0aW9ucyB0byBoYW5kbGUgU1NML1RMUyBpc3N1ZXNcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIG1heFBvb2xTaXplOiAxMCxcbiAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiA1MDAwLFxuICBzb2NrZXRUaW1lb3V0TVM6IDQ1MDAwLFxuICBmYW1pbHk6IDQsIC8vIFVzZSBJUHY0LCBza2lwIHRyeWluZyBJUHY2XG4gIHRsczogdHJ1ZSxcbiAgdGxzSW5zZWN1cmU6IGZhbHNlLFxuICByZXRyeVdyaXRlczogdHJ1ZSxcbiAgdzogXCJtYWpvcml0eVwiIGFzIGNvbnN0LFxufVxuXG5sZXQgY2xpZW50OiBNb25nb0NsaWVudFxubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIGNvbnN0IGdsb2JhbFdpdGhNb25nbyA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgICBfbW9uZ29DbGllbnRQcm9taXNlPzogUHJvbWlzZTxNb25nb0NsaWVudD5cbiAgfVxuXG4gIGlmICghZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCk6IFByb21pc2U8eyBjbGllbnQ6IE1vbmdvQ2xpZW50OyBkYjogRGIgfT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcImVkdW9yYlwiKVxuXG4gICAgLy8gVGVzdCB0aGUgY29ubmVjdGlvblxuICAgIGF3YWl0IGRiLmFkbWluKCkucGluZygpXG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIE1vbmdvREJcIilcblxuICAgIHJldHVybiB7IGNsaWVudCwgZGIgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHRvIGRhdGFiYXNlXCIpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwibWF4UG9vbFNpemUiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJzb2NrZXRUaW1lb3V0TVMiLCJmYW1pbHkiLCJ0bHMiLCJ0bHNJbnNlY3VyZSIsInJldHJ5V3JpdGVzIiwidyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWxXaXRoTW9uZ28iLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiZGIiLCJhZG1pbiIsInBpbmciLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/@opentelemetry+api@1.9.0","vendor-chunks/next-auth@4.24.11_@auth+core@0.39.1_nodemailer@7.0.3__next@14.2.16_@opentelemetry+api@1_305347aca9bbd244a98d8bdb4dc4502e","vendor-chunks/@babel+runtime@7.27.6","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.1","vendor-chunks/oauth@0.9.15","vendor-chunks/object-hash@2.2.0","vendor-chunks/preact@10.26.8","vendor-chunks/uuid@8.3.2","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.26.8","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.7.2","vendor-chunks/oidc-token-hash@5.1.0","vendor-chunks/@panva+hkdf@1.2.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.16_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fstats%2Froute&page=%2Fapi%2Fadmin%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fstats%2Froute.ts&appDir=%2FUsers%2Faniketsingh%2FDesktop%2FEduOrb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Faniketsingh%2FDesktop%2FEduOrb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();