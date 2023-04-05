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

/***/ "./components/CustomAppBar/index.js":
/*!******************************************!*\
  !*** ./components/CustomAppBar/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Menu */ \"@mui/material/Menu\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tooltip */ \"@mui/material/Tooltip\");\n/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/MenuItem */ \"@mui/material/MenuItem\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_icons_material_Adb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Adb */ \"@mui/icons-material/Adb\");\n/* harmony import */ var _mui_icons_material_Adb__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Adb__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst pages = [\n    {\n        label: \"Products\",\n        path: \"/products\"\n    },\n    {\n        label: \"Backends\",\n        path: \"/backends\"\n    },\n    {\n        label: \"DevOps\",\n        path: \"/devOps\"\n    }\n];\nconst settings = [\n    \"Profile\",\n    \"Account\",\n    \"Dashboard\",\n    \"Logout\"\n];\nconst BRAND = \"Absolute EDI Solutions\";\nfunction CustomAppBar() {\n    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleOpenUserMenu = (event)=>{\n        setAnchorElUser(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    const handleCloseUserMenu = ()=>{\n        setAnchorElUser(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {\n        position: \"static\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {\n            maxWidth: \"xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                disableGutters: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        variant: \"h6\",\n                        noWrap: true,\n                        component: \"a\",\n                        href: \"/\",\n                        sx: {\n                            mr: 2,\n                            display: {\n                                xs: \"none\",\n                                md: \"flex\"\n                            },\n                            fontFamily: \"monospace\",\n                            fontWeight: 700,\n                            letterSpacing: \".3rem\",\n                            color: \"inherit\",\n                            textDecoration: \"none\"\n                        },\n                        children: BRAND\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        sx: {\n                            flexGrow: 1,\n                            display: {\n                                xs: \"flex\",\n                                md: \"none\"\n                            }\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                size: \"large\",\n                                \"aria-label\": \"account of current user\",\n                                \"aria-controls\": \"menu-appbar\",\n                                \"aria-haspopup\": \"true\",\n                                onClick: handleOpenNavMenu,\n                                color: \"inherit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {\n                                    fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                id: \"menu-appbar\",\n                                anchorEl: anchorElNav,\n                                anchorOrigin: {\n                                    vertical: \"bottom\",\n                                    horizontal: \"left\"\n                                },\n                                keepMounted: true,\n                                transformOrigin: {\n                                    vertical: \"top\",\n                                    horizontal: \"left\"\n                                },\n                                open: Boolean(anchorElNav),\n                                onClose: handleCloseNavMenu,\n                                sx: {\n                                    display: {\n                                        xs: \"block\",\n                                        md: \"none\"\n                                    }\n                                },\n                                children: pages.map(({ label , path  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {\n                                        href: path,\n                                        sx: {\n                                            marginRight: \"10px\",\n                                            textDecoration: \"none\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            textAlign: \"center\",\n                                            children: label\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, path, false, {\n                                        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        variant: \"h5\",\n                        noWrap: true,\n                        component: \"a\",\n                        href: \"\",\n                        sx: {\n                            mr: 2,\n                            display: {\n                                xs: \"flex\",\n                                md: \"none\"\n                            },\n                            flexGrow: 1,\n                            fontFamily: \"monospace\",\n                            fontWeight: 700,\n                            letterSpacing: \".3rem\",\n                            color: \"inherit\",\n                            textDecoration: \"none\"\n                        },\n                        children: BRAND\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        sx: {\n                            ml: \"auto\",\n                            flexGrow: 1,\n                            display: {\n                                xs: \"none\",\n                                md: \"flex\"\n                            }\n                        },\n                        children: pages.map(({ label , path  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_15___default()), {\n                                href: path,\n                                sx: {\n                                    marginRight: \"10px\",\n                                    textDecoration: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    textAlign: \"center\",\n                                    sx: {\n                                        color: \"common.white\"\n                                    },\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 19\n                                }, this)\n                            }, path, false, {\n                                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                lineNumber: 121,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        sx: {\n                            flexGrow: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                title: \"Open settings\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    onClick: handleOpenUserMenu,\n                                    sx: {\n                                        p: 0\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                        alt: \"Vibhor\",\n                                        src: \"/static/images/avatar/2.jpg\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                sx: {\n                                    mt: \"45px\"\n                                },\n                                id: \"menu-appbar\",\n                                anchorEl: anchorElUser,\n                                anchorOrigin: {\n                                    vertical: \"top\",\n                                    horizontal: \"right\"\n                                },\n                                keepMounted: true,\n                                transformOrigin: {\n                                    vertical: \"top\",\n                                    horizontal: \"right\"\n                                },\n                                open: Boolean(anchorElUser),\n                                onClose: handleCloseUserMenu,\n                                children: settings.map((setting)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                        onClick: handleCloseUserMenu,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            textAlign: \"center\",\n                                            children: setting\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                            lineNumber: 151,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, setting, false, {\n                                        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                        lineNumber: 150,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\components\\\\CustomAppBar\\\\index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomAppBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztnQ0FDZHdDLFNBQVNqQzswQ0FFUmIsU0FBUytDLEdBQUcsQ0FBQyxDQUFDUyx3QkFDYiw4REFBQzlELGdFQUFRQTt3Q0FBZTBDLFNBQVN2QjtrREFDL0IsNEVBQUMxQixpRUFBVUE7NENBQUM4RCxXQUFVO3NEQUFVTzs7Ozs7O3VDQURuQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVS9CO0FBQ0EsaUVBQWV0RCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWVzLWZlLy4vY29tcG9uZW50cy9DdXN0b21BcHBCYXIvaW5kZXguanM/MmNmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcclxuaW1wb3J0IEFkYkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGInO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5cclxuY29uc3QgcGFnZXMgPSBbXHJcbiAge2xhYmVsOiAnUHJvZHVjdHMnLCBwYXRoOiBcIi9wcm9kdWN0c1wifSwge2xhYmVsOiAnQmFja2VuZHMnLCBwYXRoOiAnL2JhY2tlbmRzJ30sIHtsYWJlbDogJ0Rldk9wcycsIHBhdGg6IFwiL2Rldk9wc1wifV07XHJcbmNvbnN0IHNldHRpbmdzID0gWydQcm9maWxlJywgJ0FjY291bnQnLCAnRGFzaGJvYXJkJywgJ0xvZ291dCddO1xyXG5cclxuY29uc3QgQlJBTkQgPSAnQWJzb2x1dGUgRURJIFNvbHV0aW9ucydcclxuXHJcbmZ1bmN0aW9uIEN1c3RvbUFwcEJhcigpIHtcclxuICBjb25zdCBbYW5jaG9yRWxOYXYsIHNldEFuY2hvckVsTmF2XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthbmNob3JFbFVzZXIsIHNldEFuY2hvckVsVXNlcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk5hdk1lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsTmF2KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3BlblVzZXJNZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbFVzZXIoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VOYXZNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWxOYXYobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVc2VyTWVudSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsVXNlcihudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cclxuICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIG1yOiAyLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9LFxyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLjNyZW0nLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge0JSQU5EfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIGRpc3BsYXk6IHsgeHM6ICdmbGV4JywgbWQ6ICdub25lJyB9IH19PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWVudS1hcHBiYXJcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVuTmF2TWVudX1cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcclxuICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWxOYXZ9XHJcbiAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbE5hdil9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VOYXZNZW51fVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiAnYmxvY2snLCBtZDogJ25vbmUnIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwYWdlcy5tYXAoKHtsYWJlbCwgcGF0aH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9IGtleT17cGF0aH0gc3g9e3ttYXJnaW5SaWdodDogJzEwcHgnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHRleHRBbGlnbj1cImNlbnRlclwiPntsYWJlbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgbXI6IDIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogeyB4czogJ2ZsZXgnLCBtZDogJ25vbmUnIH0sXHJcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcuM3JlbScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7QlJBTkR9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7bWw6ICdhdXRvJywgZmxleEdyb3c6IDEsIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9IH19PlxyXG4gICAgICAgICAgICB7cGFnZXMubWFwKCh7bGFiZWwsIHBhdGh9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYXRofSBrZXk9e3BhdGh9IHN4PXt7bWFyZ2luUmlnaHQ6ICcxMHB4JywgdGV4dERlY29yYXRpb246ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBzeD17e2NvbG9yOiAnY29tbW9uLndoaXRlJ319PntsYWJlbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAwIH19PlxyXG4gICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk9wZW4gc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuVXNlck1lbnV9IHN4PXt7IHA6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlZpYmhvclwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhci8yLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgc3g9e3sgbXQ6ICc0NXB4JyB9fVxyXG4gICAgICAgICAgICAgIGlkPVwibWVudS1hcHBiYXJcIlxyXG4gICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbFVzZXJ9XHJcbiAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsVXNlcil9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVc2VyTWVudX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZXR0aW5ncy5tYXAoKHNldHRpbmcpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3NldHRpbmd9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXNlck1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB0ZXh0QWxpZ249XCJjZW50ZXJcIj57c2V0dGluZ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21BcHBCYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIk1lbnUiLCJNZW51SWNvbiIsIkNvbnRhaW5lciIsIkF2YXRhciIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJNZW51SXRlbSIsIkFkYkljb24iLCJMaW5rIiwicGFnZXMiLCJsYWJlbCIsInBhdGgiLCJzZXR0aW5ncyIsIkJSQU5EIiwiQ3VzdG9tQXBwQmFyIiwiYW5jaG9yRWxOYXYiLCJzZXRBbmNob3JFbE5hdiIsInVzZVN0YXRlIiwiYW5jaG9yRWxVc2VyIiwic2V0QW5jaG9yRWxVc2VyIiwiaGFuZGxlT3Blbk5hdk1lbnUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVPcGVuVXNlck1lbnUiLCJoYW5kbGVDbG9zZU5hdk1lbnUiLCJoYW5kbGVDbG9zZVVzZXJNZW51IiwicG9zaXRpb24iLCJtYXhXaWR0aCIsImRpc2FibGVHdXR0ZXJzIiwidmFyaWFudCIsIm5vV3JhcCIsImNvbXBvbmVudCIsImhyZWYiLCJzeCIsIm1yIiwiZGlzcGxheSIsInhzIiwibWQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiZmxleEdyb3ciLCJzaXplIiwiYXJpYS1sYWJlbCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWhhc3BvcHVwIiwib25DbGljayIsImlkIiwiYW5jaG9yRWwiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJrZWVwTW91bnRlZCIsInRyYW5zZm9ybU9yaWdpbiIsIm9wZW4iLCJCb29sZWFuIiwib25DbG9zZSIsIm1hcCIsIm1hcmdpblJpZ2h0IiwidGV4dEFsaWduIiwibWwiLCJ0aXRsZSIsInAiLCJhbHQiLCJzcmMiLCJtdCIsInNldHRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomAppBar/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomAppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomAppBar */ \"./components/CustomAppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CssBaseline, {}, void 0, false, {\n                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomAppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\pages\\\\_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\ReactProjects\\\\AesFrontend\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1M7QUFDakI7QUFDTjtBQUVmLFNBQVNHLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFBTzs7MEJBQ0wsOERBQUNMLHNEQUFXQTs7Ozs7MEJBQ1osOERBQUNDLGdFQUFZQTs7Ozs7MEJBQ2IsOERBQUNDLDBEQUFHQTswQkFDRiw0RUFBQ0U7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWVzLWZlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENzc0Jhc2VsaW5lIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgQ3VzdG9tQXBwQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VzdG9tQXBwQmFyJ1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxDdXN0b21BcHBCYXIgLz5cbiAgICA8Qm94PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQm94PlxuICA8Lz5cbn1cbiJdLCJuYW1lcyI6WyJDc3NCYXNlbGluZSIsIkN1c3RvbUFwcEJhciIsIkJveCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/icons-material/Adb":
/*!******************************************!*\
  !*** external "@mui/icons-material/Adb" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Adb");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Avatar":
/*!***************************************!*\
  !*** external "@mui/material/Avatar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ "@mui/material/Menu":
/*!*************************************!*\
  !*** external "@mui/material/Menu" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Menu");

/***/ }),

/***/ "@mui/material/MenuItem":
/*!*****************************************!*\
  !*** external "@mui/material/MenuItem" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Tooltip":
/*!****************************************!*\
  !*** external "@mui/material/Tooltip" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();