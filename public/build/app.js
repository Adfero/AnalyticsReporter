(function(S, X, u) {
    "use strict";
    function G(a) {
        return function() {
            var b = arguments[0], d;
            d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.4.8/" + (a ? a + "/" : "") + b;
            for (b = 1; b < arguments.length; b++) {
                d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
                var c = encodeURIComponent, e;
                e = arguments[b];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                d += c(e);
            }
            return Error(d);
        };
    }
    function za(a) {
        if (null == a || Xa(a)) return !1;
        if (I(a) || E(a) || B && a instanceof B) return !0;
        var b = "length" in Object(a) && a.length;
        return Q(b) && (0 <= b && b - 1 in a || "function" == typeof a.item);
    }
    function n(a, b, d) {
        var c, e;
        if (a) if (z(a)) for (c in a) "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a); else if (I(a) || za(a)) {
            var f = "object" !== typeof a;
            c = 0;
            for (e = a.length; c < e; c++) (f || c in a) && b.call(d, a[c], c, a);
        } else if (a.forEach && a.forEach !== n) a.forEach(b, d, a); else if (nc(a)) for (c in a) b.call(d, a[c], c, a); else if ("function" === typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a); else for (c in a) qa.call(a, c) && b.call(d, a[c], c, a);
        return a;
    }
    function oc(a, b, d) {
        for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);
        return c;
    }
    function pc(a) {
        return function(b, d) {
            a(d, b);
        };
    }
    function Td() {
        return ++nb;
    }
    function Mb(a, b, d) {
        for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g = b[e];
            if (H(g) || z(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                var m = h[k], r = g[m];
                d && H(r) ? da(r) ? a[m] = new Date(r.valueOf()) : Ma(r) ? a[m] = new RegExp(r) : r.nodeName ? a[m] = r.cloneNode(!0) : Nb(r) ? a[m] = r.clone() : (H(a[m]) || (a[m] = I(r) ? [] : {}), 
                Mb(a[m], [ r ], !0)) : a[m] = r;
            }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a;
    }
    function M(a) {
        return Mb(a, ra.call(arguments, 1), !1);
    }
    function Ud(a) {
        return Mb(a, ra.call(arguments, 1), !0);
    }
    function ea(a) {
        return parseInt(a, 10);
    }
    function Ob(a, b) {
        return M(Object.create(a), b);
    }
    function x() {}
    function Ya(a) {
        return a;
    }
    function na(a) {
        return function() {
            return a;
        };
    }
    function qc(a) {
        return z(a.toString) && a.toString !== sa;
    }
    function q(a) {
        return "undefined" === typeof a;
    }
    function y(a) {
        return "undefined" !== typeof a;
    }
    function H(a) {
        return null !== a && "object" === typeof a;
    }
    function nc(a) {
        return null !== a && "object" === typeof a && !rc(a);
    }
    function E(a) {
        return "string" === typeof a;
    }
    function Q(a) {
        return "number" === typeof a;
    }
    function da(a) {
        return "[object Date]" === sa.call(a);
    }
    function z(a) {
        return "function" === typeof a;
    }
    function Ma(a) {
        return "[object RegExp]" === sa.call(a);
    }
    function Xa(a) {
        return a && a.window === a;
    }
    function Za(a) {
        return a && a.$evalAsync && a.$watch;
    }
    function $a(a) {
        return "boolean" === typeof a;
    }
    function sc(a) {
        return a && Q(a.length) && Vd.test(sa.call(a));
    }
    function Nb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
    }
    function Wd(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++) b[a[d]] = !0;
        return b;
    }
    function ta(a) {
        return F(a.nodeName || a[0] && a[0].nodeName);
    }
    function ab(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d;
    }
    function bb(a, b) {
        function d(a, b) {
            var d = b.$$hashKey, e;
            if (I(a)) {
                e = 0;
                for (var f = a.length; e < f; e++) b.push(c(a[e]));
            } else if (nc(a)) for (e in a) b[e] = c(a[e]); else if (a && "function" === typeof a.hasOwnProperty) for (e in a) a.hasOwnProperty(e) && (b[e] = c(a[e])); else for (e in a) qa.call(a, e) && (b[e] = c(a[e]));
            d ? b.$$hashKey = d : delete b.$$hashKey;
            return b;
        }
        function c(a) {
            if (!H(a)) return a;
            var b = e.indexOf(a);
            if (-1 !== b) return f[b];
            if (Xa(a) || Za(a)) throw Aa("cpws");
            var b = !1, c;
            I(a) ? (c = [], b = !0) : sc(a) ? c = new a.constructor(a) : da(a) ? c = new Date(a.getTime()) : Ma(a) ? (c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), 
            c.lastIndex = a.lastIndex) : z(a.cloneNode) ? c = a.cloneNode(!0) : (c = Object.create(rc(a)), 
            b = !0);
            e.push(a);
            f.push(c);
            return b ? d(a, c) : c;
        }
        var e = [], f = [];
        if (b) {
            if (sc(b)) throw Aa("cpta");
            if (a === b) throw Aa("cpi");
            I(b) ? b.length = 0 : n(b, function(a, c) {
                "$$hashKey" !== c && delete b[c];
            });
            e.push(a);
            f.push(b);
            return d(a, b);
        }
        return c(a);
    }
    function ia(a, b) {
        if (I(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++) b[d] = a[d];
        } else if (H(a)) for (d in b = b || {}, a) if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
        return b || a;
    }
    function ma(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d = typeof a, c;
        if (d == typeof b && "object" == d) if (I(a)) {
            if (!I(b)) return !1;
            if ((d = a.length) == b.length) {
                for (c = 0; c < d; c++) if (!ma(a[c], b[c])) return !1;
                return !0;
            }
        } else {
            if (da(a)) return da(b) ? ma(a.getTime(), b.getTime()) : !1;
            if (Ma(a)) return Ma(b) ? a.toString() == b.toString() : !1;
            if (Za(a) || Za(b) || Xa(a) || Xa(b) || I(b) || da(b) || Ma(b)) return !1;
            d = $();
            for (c in a) if ("$" !== c.charAt(0) && !z(a[c])) {
                if (!ma(a[c], b[c])) return !1;
                d[c] = !0;
            }
            for (c in b) if (!(c in d) && "$" !== c.charAt(0) && y(b[c]) && !z(b[c])) return !1;
            return !0;
        }
        return !1;
    }
    function cb(a, b, d) {
        return a.concat(ra.call(b, d));
    }
    function tc(a, b) {
        var d = 2 < arguments.length ? ra.call(arguments, 2) : [];
        return !z(b) || b instanceof RegExp ? b : d.length ? function() {
            return arguments.length ? b.apply(a, cb(d, arguments, 0)) : b.apply(a, d);
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }
    function Xd(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = u : Xa(b) ? d = "$WINDOW" : b && X === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");
        return d;
    }
    function db(a, b) {
        if ("undefined" === typeof a) return u;
        Q(b) || (b = b ? 2 : null);
        return JSON.stringify(a, Xd, b);
    }
    function uc(a) {
        return E(a) ? JSON.parse(a) : a;
    }
    function vc(a, b) {
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(d) ? b : d;
    }
    function Pb(a, b, d) {
        d = d ? -1 : 1;
        var c = vc(b, a.getTimezoneOffset());
        b = a;
        a = d * (c - a.getTimezoneOffset());
        b = new Date(b.getTime());
        b.setMinutes(b.getMinutes() + a);
        return b;
    }
    function ua(a) {
        a = B(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var d = B("<div>").append(a).html();
        try {
            return a[0].nodeType === Na ? F(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + F(b);
            });
        } catch (c) {
            return F(d);
        }
    }
    function wc(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function xc(a) {
        var b = {};
        n((a || "").split("&"), function(a) {
            var c, e, f;
            a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), 
            f = a.substring(c + 1)), e = wc(e), y(e) && (f = y(f) ? wc(f) : !0, qa.call(b, e) ? I(b[e]) ? b[e].push(f) : b[e] = [ b[e], f ] : b[e] = f));
        });
        return b;
    }
    function Qb(a) {
        var b = [];
        n(a, function(a, c) {
            I(a) ? n(a, function(a) {
                b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)));
            }) : b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)));
        });
        return b.length ? b.join("&") : "";
    }
    function ob(a) {
        return ja(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function ja(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
    }
    function Yd(a, b) {
        var d, c, e = Oa.length;
        for (c = 0; c < e; ++c) if (d = Oa[c] + b, E(d = a.getAttribute(d))) return d;
        return null;
    }
    function Zd(a, b) {
        var d, c, e = {};
        n(Oa, function(b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
        });
        n(Oa, function(b) {
            b += "app";
            var e;
            !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
        });
        d && (e.strictDi = null !== Yd(d, "strict-di"), b(d, c ? [ c ] : [], e));
    }
    function yc(a, b, d) {
        H(d) || (d = {});
        d = M({
            strictDi: !1
        }, d);
        var c = function() {
            a = B(a);
            if (a.injector()) {
                var c = a[0] === X ? "document" : ua(a);
                throw Aa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            b = b || [];
            b.unshift([ "$provide", function(b) {
                b.value("$rootElement", a);
            } ]);
            d.debugInfoEnabled && b.push([ "$compileProvider", function(a) {
                a.debugInfoEnabled(!0);
            } ]);
            b.unshift("ng");
            c = eb(b, d.strictDi);
            c.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d);
                    c(b)(a);
                });
            } ]);
            return c;
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        S && e.test(S.name) && (d.debugInfoEnabled = !0, S.name = S.name.replace(e, ""));
        if (S && !f.test(S.name)) return c();
        S.name = S.name.replace(f, "");
        fa.resumeBootstrap = function(a) {
            n(a, function(a) {
                b.push(a);
            });
            return c();
        };
        z(fa.resumeDeferredBootstrap) && fa.resumeDeferredBootstrap();
    }
    function $d() {
        S.name = "NG_ENABLE_DEBUG_INFO!" + S.name;
        S.location.reload();
    }
    function ae(a) {
        a = fa.element(a).injector();
        if (!a) throw Aa("test");
        return a.get("$$testability");
    }
    function zc(a, b) {
        b = b || "_";
        return a.replace(be, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function ce() {
        var a;
        if (!Ac) {
            var b = pb();
            (oa = q(b) ? S.jQuery : b ? S[b] : u) && oa.fn.on ? (B = oa, M(oa.fn, {
                scope: Pa.scope,
                isolateScope: Pa.isolateScope,
                controller: Pa.controller,
                injector: Pa.injector,
                inheritedData: Pa.inheritedData
            }), a = oa.cleanData, oa.cleanData = function(b) {
                var c;
                if (Rb) Rb = !1; else for (var e = 0, f; null != (f = b[e]); e++) (c = oa._data(f, "events")) && c.$destroy && oa(f).triggerHandler("$destroy");
                a(b);
            }) : B = N;
            fa.element = B;
            Ac = !0;
        }
    }
    function qb(a, b, d) {
        if (!a) throw Aa("areq", b || "?", d || "required");
        return a;
    }
    function Qa(a, b, d) {
        d && I(a) && (a = a[a.length - 1]);
        qb(z(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
        return a;
    }
    function Ra(a, b) {
        if ("hasOwnProperty" === a) throw Aa("badname", b);
    }
    function Bc(a, b, d) {
        if (!b) return a;
        b = b.split(".");
        for (var c, e = a, f = b.length, g = 0; g < f; g++) c = b[g], a && (a = (e = a)[c]);
        return !d && z(a) ? tc(e, a) : a;
    }
    function rb(a) {
        for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) if (c || a[e] !== b) c || (c = B(ra.call(a, 0, e))), 
        c.push(b);
        return c || a;
    }
    function $() {
        return Object.create(null);
    }
    function de(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var d = G("$injector"), c = G("ng");
        a = b(a, "angular", Object);
        a.$$minErr = a.$$minErr || G;
        return b(a, "module", function() {
            var a = {};
            return function(f, g, h) {
                if ("hasOwnProperty" === f) throw c("badname", "module");
                g && a.hasOwnProperty(f) && (a[f] = null);
                return b(a, f, function() {
                    function a(b, d, e, f) {
                        f || (f = c);
                        return function() {
                            f[e || "push"]([ b, d, arguments ]);
                            return v;
                        };
                    }
                    function b(a, d) {
                        return function(b, e) {
                            e && z(e) && (e.$$moduleName = f);
                            c.push([ a, d, arguments ]);
                            return v;
                        };
                    }
                    if (!g) throw d("nomod", f);
                    var c = [], e = [], t = [], A = a("$injector", "invoke", "push", e), v = {
                        _invokeQueue: c,
                        _configBlocks: e,
                        _runBlocks: t,
                        requires: g,
                        name: f,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator"),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        config: A,
                        run: function(a) {
                            t.push(a);
                            return this;
                        }
                    };
                    h && A(h);
                    return v;
                });
            };
        });
    }
    function ee(a) {
        M(a, {
            bootstrap: yc,
            copy: bb,
            extend: M,
            merge: Ud,
            equals: ma,
            element: B,
            forEach: n,
            injector: eb,
            noop: x,
            bind: tc,
            toJson: db,
            fromJson: uc,
            identity: Ya,
            isUndefined: q,
            isDefined: y,
            isString: E,
            isFunction: z,
            isObject: H,
            isNumber: Q,
            isElement: Nb,
            isArray: I,
            version: fe,
            isDate: da,
            lowercase: F,
            uppercase: sb,
            callbacks: {
                counter: 0
            },
            getTestability: ae,
            $$minErr: G,
            $$csp: Ba,
            reloadWithDebugInfo: $d
        });
        Sb = de(S);
        Sb("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: ge
            });
            a.provider("$compile", Cc).directive({
                a: he,
                input: Dc,
                textarea: Dc,
                form: ie,
                script: je,
                select: ke,
                style: le,
                option: me,
                ngBind: ne,
                ngBindHtml: oe,
                ngBindTemplate: pe,
                ngClass: qe,
                ngClassEven: re,
                ngClassOdd: se,
                ngCloak: te,
                ngController: ue,
                ngForm: ve,
                ngHide: we,
                ngIf: xe,
                ngInclude: ye,
                ngInit: ze,
                ngNonBindable: Ae,
                ngPluralize: Be,
                ngRepeat: Ce,
                ngShow: De,
                ngStyle: Ee,
                ngSwitch: Fe,
                ngSwitchWhen: Ge,
                ngSwitchDefault: He,
                ngOptions: Ie,
                ngTransclude: Je,
                ngModel: Ke,
                ngList: Le,
                ngChange: Me,
                pattern: Ec,
                ngPattern: Ec,
                required: Fc,
                ngRequired: Fc,
                minlength: Gc,
                ngMinlength: Gc,
                maxlength: Hc,
                ngMaxlength: Hc,
                ngValue: Ne,
                ngModelOptions: Oe
            }).directive({
                ngInclude: Pe
            }).directive(tb).directive(Ic);
            a.provider({
                $anchorScroll: Qe,
                $animate: Re,
                $animateCss: Se,
                $$animateQueue: Te,
                $$AnimateRunner: Ue,
                $browser: Ve,
                $cacheFactory: We,
                $controller: Xe,
                $document: Ye,
                $exceptionHandler: Ze,
                $filter: Jc,
                $$forceReflow: $e,
                $interpolate: af,
                $interval: bf,
                $http: cf,
                $httpParamSerializer: df,
                $httpParamSerializerJQLike: ef,
                $httpBackend: ff,
                $xhrFactory: gf,
                $location: hf,
                $log: jf,
                $parse: kf,
                $rootScope: lf,
                $q: mf,
                $$q: nf,
                $sce: of,
                $sceDelegate: pf,
                $sniffer: qf,
                $templateCache: rf,
                $templateRequest: sf,
                $$testability: tf,
                $timeout: uf,
                $window: vf,
                $$rAF: wf,
                $$jqLite: xf,
                $$HashMap: yf,
                $$cookieReader: zf
            });
        } ]);
    }
    function fb(a) {
        return a.replace(Af, function(a, d, c, e) {
            return e ? c.toUpperCase() : c;
        }).replace(Bf, "Moz$1");
    }
    function Kc(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a;
    }
    function Lc(a, b) {
        var d, c, e = b.createDocumentFragment(), f = [];
        if (Tb.test(a)) {
            d = d || e.appendChild(b.createElement("div"));
            c = (Cf.exec(a) || [ "", "" ])[1].toLowerCase();
            c = ka[c] || ka._default;
            d.innerHTML = c[1] + a.replace(Df, "<$1></$2>") + c[2];
            for (c = c[0]; c--; ) d = d.lastChild;
            f = cb(f, d.childNodes);
            d = e.firstChild;
            d.textContent = "";
        } else f.push(b.createTextNode(a));
        e.textContent = "";
        e.innerHTML = "";
        n(f, function(a) {
            e.appendChild(a);
        });
        return e;
    }
    function N(a) {
        if (a instanceof N) return a;
        var b;
        E(a) && (a = U(a), b = !0);
        if (!(this instanceof N)) {
            if (b && "<" != a.charAt(0)) throw Ub("nosel");
            return new N(a);
        }
        if (b) {
            b = X;
            var d;
            a = (d = Ef.exec(a)) ? [ b.createElement(d[1]) ] : (d = Lc(a, b)) ? d.childNodes : [];
        }
        Mc(this, a);
    }
    function Vb(a) {
        return a.cloneNode(!0);
    }
    function ub(a, b) {
        b || vb(a);
        if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) vb(d[c]);
    }
    function Nc(a, b, d, c) {
        if (y(c)) throw Ub("offargs");
        var e = (c = wb(a)) && c.events, f = c && c.handle;
        if (f) if (b) {
            var g = function(b) {
                var c = e[b];
                y(d) && ab(c || [], d);
                y(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
            };
            n(b.split(" "), function(a) {
                g(a);
                xb[a] && g(xb[a]);
            });
        } else for (b in e) "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b];
    }
    function vb(a, b) {
        var d = a.ng339, c = d && gb[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), 
        Nc(a)), delete gb[d], a.ng339 = u));
    }
    function wb(a, b) {
        var d = a.ng339, d = d && gb[d];
        b && !d && (a.ng339 = d = ++Ff, d = gb[d] = {
            events: {},
            data: {},
            handle: u
        });
        return d;
    }
    function Wb(a, b, d) {
        if (Kc(a)) {
            var c = y(d), e = !c && b && !H(b), f = !b;
            a = (a = wb(a, !e)) && a.data;
            if (c) a[b] = d; else {
                if (f) return a;
                if (e) return a && a[b];
                M(a, b);
            }
        }
    }
    function yb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
    }
    function zb(a, b) {
        b && a.setAttribute && n(b.split(" "), function(b) {
            a.setAttribute("class", U((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(b) + " ", " ")));
        });
    }
    function Ab(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            n(b.split(" "), function(a) {
                a = U(a);
                -1 === d.indexOf(" " + a + " ") && (d += a + " ");
            });
            a.setAttribute("class", U(d));
        }
    }
    function Mc(a, b) {
        if (b) if (b.nodeType) a[a.length++] = b; else {
            var d = b.length;
            if ("number" === typeof d && b.window !== b) {
                if (d) for (var c = 0; c < d; c++) a[a.length++] = b[c];
            } else a[a.length++] = b;
        }
    }
    function Oc(a, b) {
        return Bb(a, "$" + (b || "ngController") + "Controller");
    }
    function Bb(a, b, d) {
        9 == a.nodeType && (a = a.documentElement);
        for (b = I(b) ? b : [ b ]; a; ) {
            for (var c = 0, e = b.length; c < e; c++) if (y(d = B.data(a, b[c]))) return d;
            a = a.parentNode || 11 === a.nodeType && a.host;
        }
    }
    function Pc(a) {
        for (ub(a, !0); a.firstChild; ) a.removeChild(a.firstChild);
    }
    function Xb(a, b) {
        b || ub(a);
        var d = a.parentNode;
        d && d.removeChild(a);
    }
    function Gf(a, b) {
        b = b || S;
        if ("complete" === b.document.readyState) b.setTimeout(a); else B(b).on("load", a);
    }
    function Qc(a, b) {
        var d = Cb[b.toLowerCase()];
        return d && Rc[ta(a)] && d;
    }
    function Hf(a, b) {
        var d = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented;
            };
            var f = b[d || c.type], g = f ? f.length : 0;
            if (g) {
                if (q(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c);
                    };
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped;
                };
                var k = f.specialHandlerWrapper || If;
                1 < g && (f = ia(f));
                for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l]);
            }
        };
        d.elem = a;
        return d;
    }
    function If(a, b, d) {
        d.call(a, b);
    }
    function Jf(a, b, d) {
        var c = b.relatedTarget;
        c && (c === a || Kf.call(a, c)) || d.call(a, b);
    }
    function xf() {
        this.$get = function() {
            return M(N, {
                hasClass: function(a, b) {
                    a.attr && (a = a[0]);
                    return yb(a, b);
                },
                addClass: function(a, b) {
                    a.attr && (a = a[0]);
                    return Ab(a, b);
                },
                removeClass: function(a, b) {
                    a.attr && (a = a[0]);
                    return zb(a, b);
                }
            });
        };
    }
    function Ca(a, b) {
        var d = a && a.$$hashKey;
        if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
        d = typeof a;
        return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Td)() : d + ":" + a;
    }
    function Sa(a, b) {
        if (b) {
            var d = 0;
            this.nextUid = function() {
                return ++d;
            };
        }
        n(a, this.put, this);
    }
    function Lf(a) {
        return (a = a.toString().replace(Sc, "").match(Tc)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function eb(a, b) {
        function d(a) {
            return function(b, c) {
                if (H(b)) n(b, pc(a)); else return a(b, c);
            };
        }
        function c(a, b) {
            Ra(a, "service");
            if (z(b) || I(b)) b = t.instantiate(b);
            if (!b.$get) throw Da("pget", a);
            return r[a + "Provider"] = b;
        }
        function e(a, b) {
            return function() {
                var c = v.invoke(b, this);
                if (q(c)) throw Da("undef", a);
                return c;
            };
        }
        function f(a, b, d) {
            return c(a, {
                $get: !1 !== d ? e(a, b) : b
            });
        }
        function g(a) {
            qb(q(a) || I(a), "modulesToLoad", "not an array");
            var b = [], c;
            n(a, function(a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], f = t.get(e[0]);
                        f[e[1]].apply(f, e[2]);
                    }
                }
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        E(a) ? (c = Sb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), 
                        d(c._configBlocks)) : z(a) ? b.push(t.invoke(a)) : I(a) ? b.push(t.invoke(a)) : Qa(a, "module");
                    } catch (e) {
                        throw I(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        Da("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b;
        }
        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k) throw Da("cdep", b + " <- " + l.join(" <- "));
                    return a[b];
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e);
                } catch (f) {
                    throw a[b] === k && delete a[b], f;
                } finally {
                    l.shift();
                }
            }
            function e(a, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var h = [], k = eb.$$annotate(a, b, g), l, m, t;
                m = 0;
                for (l = k.length; m < l; m++) {
                    t = k[m];
                    if ("string" !== typeof t) throw Da("itkn", t);
                    h.push(f && f.hasOwnProperty(t) ? f[t] : d(t, g));
                }
                I(a) && (a = a[l]);
                return a.apply(c, h);
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((I(a) ? a[a.length - 1] : a).prototype || null);
                    a = e(a, d, b, c);
                    return H(a) || z(a) ? a : d;
                },
                get: d,
                annotate: eb.$$annotate,
                has: function(b) {
                    return r.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
                }
            };
        }
        b = !0 === b;
        var k = {}, l = [], m = new Sa([], !0), r = {
            $provide: {
                provider: d(c),
                factory: d(f),
                service: d(function(a, b) {
                    return f(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: d(function(a, b) {
                    return f(a, na(b), !1);
                }),
                constant: d(function(a, b) {
                    Ra(a, "constant");
                    r[a] = b;
                    A[a] = b;
                }),
                decorator: function(a, b) {
                    var c = t.get(a + "Provider"), d = c.$get;
                    c.$get = function() {
                        var a = v.invoke(d, c);
                        return v.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, t = r.$injector = h(r, function(a, b) {
            fa.isString(b) && l.push(b);
            throw Da("unpr", l.join(" <- "));
        }), A = {}, v = A.$injector = h(A, function(a, b) {
            var c = t.get(a + "Provider", b);
            return v.invoke(c.$get, c, u, a);
        });
        n(g(a), function(a) {
            a && v.invoke(a);
        });
        return v;
    }
    function Qe() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1;
        };
        this.$get = [ "$window", "$location", "$rootScope", function(b, d, c) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function(a) {
                    if ("a" === ta(a)) return b = a, !0;
                });
                return b;
            }
            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    z(c) ? c = c() : Nb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Q(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
                } else b.scrollTo(0, 0);
            }
            function g(a) {
                a = E(a) ? a : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
            }
            var h = b.document;
            a && c.$watch(function() {
                return d.hash();
            }, function(a, b) {
                a === b && "" === a || Gf(function() {
                    c.$evalAsync(g);
                });
            });
            return g;
        } ];
    }
    function hb(a, b) {
        if (!a && !b) return "";
        if (!a) return b;
        if (!b) return a;
        I(a) && (a = a.join(" "));
        I(b) && (b = b.join(" "));
        return a + " " + b;
    }
    function Mf(a) {
        E(a) && (a = a.split(" "));
        var b = $();
        n(a, function(a) {
            a.length && (b[a] = !0);
        });
        return b;
    }
    function Ea(a) {
        return H(a) ? a : {};
    }
    function Nf(a, b, d, c) {
        function e(a) {
            try {
                a.apply(null, ra.call(arguments, 1));
            } finally {
                if (v--, 0 === v) for (;T.length; ) try {
                    T.pop()();
                } catch (b) {
                    d.error(b);
                }
            }
        }
        function f() {
            L = null;
            g();
            h();
        }
        function g() {
            a: {
                try {
                    p = m.state;
                    break a;
                } catch (a) {}
                p = void 0;
            }
            p = q(p) ? null : p;
            ma(p, J) && (p = J);
            J = p;
        }
        function h() {
            if (w !== k.url() || C !== p) w = k.url(), C = p, n(aa, function(a) {
                a(k.url(), p);
            });
        }
        var k = this, l = a.location, m = a.history, r = a.setTimeout, t = a.clearTimeout, A = {};
        k.isMock = !1;
        var v = 0, T = [];
        k.$$completeOutstandingRequest = e;
        k.$$incOutstandingRequestCount = function() {
            v++;
        };
        k.notifyWhenNoOutstandingRequests = function(a) {
            0 === v ? a() : T.push(a);
        };
        var p, C, w = l.href, ga = b.find("base"), L = null;
        g();
        C = p;
        k.url = function(b, d, e) {
            q(e) && (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = C === e;
                if (w === b && (!c.history || f)) return k;
                var h = w && Fa(w) === Fa(b);
                w = b;
                C = e;
                if (!c.history || h && f) {
                    if (!h || L) L = b;
                    d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), 
                    d.hash = e) : l.href = b;
                    l.href !== b && (L = b);
                } else m[d ? "replaceState" : "pushState"](e, "", b), g(), C = p;
                return k;
            }
            return L || l.href.replace(/%27/g, "'");
        };
        k.state = function() {
            return p;
        };
        var aa = [], D = !1, J = null;
        k.onUrlChange = function(b) {
            if (!D) {
                if (c.history) B(a).on("popstate", f);
                B(a).on("hashchange", f);
                D = !0;
            }
            aa.push(b);
            return b;
        };
        k.$$applicationDestroyed = function() {
            B(a).off("hashchange popstate", f);
        };
        k.$$checkUrlChange = h;
        k.baseHref = function() {
            var a = ga.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        k.defer = function(a, b) {
            var c;
            v++;
            c = r(function() {
                delete A[c];
                e(a);
            }, b || 0);
            A[c] = !0;
            return c;
        };
        k.defer.cancel = function(a) {
            return A[a] ? (delete A[a], t(a), e(x), !0) : !1;
        };
    }
    function Ve() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, d, c) {
            return new Nf(a, c, b, d);
        } ];
    }
    function We() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != r && (t ? t == a && (t = a.n) : t = a, f(a.n, a.p), f(a, r), r = a, r.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (a in b) throw G("$cacheFactory")("iid", a);
                var g = 0, h = M({}, c, {
                    id: a
                }), k = $(), l = c && c.capacity || Number.MAX_VALUE, m = $(), r = null, t = null;
                return b[a] = {
                    put: function(a, b) {
                        if (!q(b)) {
                            if (l < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = {
                                    key: a
                                });
                                e(c);
                            }
                            a in k || g++;
                            k[a] = b;
                            g > l && this.remove(t.key);
                            return b;
                        }
                    },
                    get: function(a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            e(b);
                        }
                        return k[a];
                    },
                    remove: function(a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b == r && (r = b.p);
                            b == t && (t = b.n);
                            f(b.n, b.p);
                            delete m[a];
                        }
                        a in k && (delete k[a], g--);
                    },
                    removeAll: function() {
                        k = $();
                        g = 0;
                        m = $();
                        r = t = null;
                    },
                    destroy: function() {
                        m = h = k = null;
                        delete b[a];
                    },
                    info: function() {
                        return M({}, h, {
                            size: g
                        });
                    }
                };
            }
            var b = {};
            a.info = function() {
                var a = {};
                n(b, function(b, e) {
                    a[e] = b.info();
                });
                return a;
            };
            a.get = function(a) {
                return b[a];
            };
            return a;
        };
    }
    function rf() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function Cc(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
            n(a, function(a, f) {
                var g = a.match(d);
                if (!g) throw ha("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || f
                };
            });
            return e;
        }
        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== F(b)) throw ha("baddir", a);
            if (a !== a.trim()) throw ha("baddir", a);
        }
        var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = Wd("ngSrc,ngSrcset,src,srcset"), k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function t(b, f) {
            Ra(b, "directive");
            E(b) ? (c(b), qb(f, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", [ "$injector", "$exceptionHandler", function(a, c) {
                var f = [];
                n(e[b], function(e, g) {
                    try {
                        var h = a.invoke(e);
                        z(h) ? h = {
                            compile: na(h)
                        } : !h.compile && h.link && (h.compile = na(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || b;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        var k = h, l = h, m = h.name, t = {
                            isolateScope: null,
                            bindToController: null
                        };
                        H(l.scope) && (!0 === l.bindToController ? (t.bindToController = d(l.scope, m, !0), 
                        t.isolateScope = {}) : t.isolateScope = d(l.scope, m, !1));
                        H(l.bindToController) && (t.bindToController = d(l.bindToController, m, !0));
                        if (H(t.bindToController)) {
                            var v = l.controller, R = l.controllerAs;
                            if (!v) throw ha("noctrl", m);
                            var V;
                            a: if (R && E(R)) V = R; else {
                                if (E(v)) {
                                    var n = Uc.exec(v);
                                    if (n) {
                                        V = n[3];
                                        break a;
                                    }
                                }
                                V = void 0;
                            }
                            if (!V) throw ha("noident", m);
                        }
                        var s = k.$$bindings = t;
                        H(s.isolateScope) && (h.$$isolateBindings = s.isolateScope);
                        h.$$moduleName = e.$$moduleName;
                        f.push(h);
                    } catch (u) {
                        c(u);
                    }
                });
                return f;
            } ])), e[b].push(f)) : n(b, pc(t));
            return this;
        };
        this.aHrefSanitizationWhitelist = function(a) {
            return y(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
        };
        this.imgSrcSanitizationWhitelist = function(a) {
            return y(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
        };
        var m = !0;
        this.debugInfoEnabled = function(a) {
            return y(a) ? (m = a, this) : m;
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, d, p, C, w, ga, L, aa, D) {
            function J(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function K(a, b, c, d, e) {
                a instanceof B || (a = B(a));
                n(a, function(b, c) {
                    b.nodeType == Na && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0]);
                });
                var f = O(a, b, a, c, d, e);
                K.$$addScopeClass(a);
                var g = null;
                return function(b, c, d) {
                    qb(b, "scope");
                    e && e.needsNewScope && (b = b.$parent.$new());
                    d = d || {};
                    var h = d.parentBoundTranscludeFn, k = d.transcludeControllers;
                    d = d.futureParentElement;
                    h && h.$$boundTransclude && (h = h.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? B(Yb(g, B("<div>").append(a).html())) : c ? Pa.clone.call(a) : a;
                    if (k) for (var l in k) d.data("$" + l + "Controller", k[l].instance);
                    K.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, h);
                    return d;
                };
            }
            function O(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, m, t, w, D;
                    if (p) for (D = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], D[f] = c[f]; else D = c;
                    m = 0;
                    for (t = h.length; m < t; ) k = D[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), 
                    K.$$addScopeInfo(B(k), l)) : l = a, w = c.transcludeOnThisElement ? R(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? R(a, b) : null, 
                    c(f, l, k, d, w)) : f && f(a, k.childNodes, u, e);
                }
                for (var h = [], k, l, m, t, p, w = 0; w < a.length; w++) {
                    k = new fa();
                    l = V(a[w], [], k, 0 === w ? d : u, e);
                    (f = l.length ? Z(l, a[w], k, b, c, null, [], [], f) : null) && f.scope && K.$$addScopeClass(k.$$element);
                    k = f && f.terminal || !(m = a[w].childNodes) || !m.length ? null : O(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || k) h.push(w, f, k), t = !0, p = p || f;
                    f = null;
                }
                return t ? g : null;
            }
            function R(a, b, c) {
                return function(d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    });
                };
            }
            function V(a, b, c, d, e) {
                var h = c.$attr, k;
                switch (a.nodeType) {
                  case 1:
                    P(b, va(ta(a)), "E", d, e);
                    for (var l, m, t, p = a.attributes, w = 0, D = p && p.length; w < D; w++) {
                        var K = !1, A = !1;
                        l = p[w];
                        k = l.name;
                        m = U(l.value);
                        l = va(k);
                        if (t = ka.test(l)) k = k.replace(Vc, "").substr(8).replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                        });
                        (l = l.match(la)) && G(l[1]) && (K = k, A = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
                        l = va(k.toLowerCase());
                        h[l] = k;
                        if (t || !c.hasOwnProperty(l)) c[l] = m, Qc(a, l) && (c[l] = !0);
                        W(a, b, m, l, t);
                        P(b, l, "A", d, e, K, A);
                    }
                    a = a.className;
                    H(a) && (a = a.animVal);
                    if (E(a) && "" !== a) for (;k = g.exec(a); ) l = va(k[2]), P(b, l, "C", d, e) && (c[l] = U(k[3])), 
                    a = a.substr(k.index + k[0].length);
                    break;

                  case Na:
                    if (11 === Ha) for (;a.parentNode && a.nextSibling && a.nextSibling.nodeType === Na; ) a.nodeValue += a.nextSibling.nodeValue, 
                    a.parentNode.removeChild(a.nextSibling);
                    N(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        if (k = f.exec(a.nodeValue)) l = va(k[1]), P(b, l, "M", d, e) && (c[l] = U(k[2]));
                    } catch (R) {}
                }
                b.sort(Ia);
                return b;
            }
            function Ta(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ha("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling;
                    } while (0 < e);
                } else d.push(a);
                return B(d);
            }
            function s(a, b, c) {
                return function(d, e, f, g, h) {
                    e = Ta(e[0], b, c);
                    return a(d, e, f, g, h);
                };
            }
            function Z(a, b, d, e, f, g, h, l, m) {
                function t(a, b, c, d) {
                    if (a) {
                        c && (a = s(a, c, d));
                        a.require = q.require;
                        a.directiveName = x;
                        if (O === q || q.$$isolateScope) a = ca(a, {
                            isolateScope: !0
                        });
                        h.push(a);
                    }
                    if (b) {
                        c && (b = s(b, c, d));
                        b.require = q.require;
                        b.directiveName = x;
                        if (O === q || q.$$isolateScope) b = ca(b, {
                            isolateScope: !0
                        });
                        l.push(b);
                    }
                }
                function p(a, b, c, d) {
                    var e;
                    if (E(b)) {
                        var f = b.match(k);
                        b = b.substring(f[0].length);
                        var g = f[1] || f[3], f = "?" === f[2];
                        "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                        e || (d = "$" + b + "Controller", e = g ? c.inheritedData(d) : c.data(d));
                        if (!e && !f) throw ha("ctreq", b, a);
                    } else if (I(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = p(a, b[g], c, d);
                    return e || null;
                }
                function w(a, b, c, d, e, f) {
                    var g = $(), h;
                    for (h in d) {
                        var k = d[h], l = {
                            $scope: k === O || k.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        }, m = k.controller;
                        "@" == m && (m = b[k.name]);
                        l = C(m, l, !0, k.controllerAs);
                        g[k.name] = l;
                        aa || a.data("$" + k.name + "Controller", l.instance);
                    }
                    return g;
                }
                function D(a, c, e, f, g) {
                    function k(a, b, c) {
                        var d;
                        Za(a) || (c = b, b = a, a = u);
                        aa && (d = v);
                        c || (c = aa ? V.parent() : V);
                        return g(a, b, d, c, Ta);
                    }
                    var m, t, A, v, C, V, Ga;
                    b === e ? (f = d, V = d.$$element) : (V = B(e), f = new fa(V, d));
                    A = c;
                    O ? t = c.$new(!0) : R && (A = c.$parent);
                    g && (C = k, C.$$boundTransclude = g);
                    T && (v = w(V, f, C, T, t, c));
                    O && (K.$$addScopeInfo(V, t, !0, !(J && (J === O || J === O.$$originalDirective))), 
                    K.$$addScopeClass(V, !0), t.$$isolateBindings = O.$$isolateBindings, (Ga = ba(c, f, t, t.$$isolateBindings, O)) && t.$on("$destroy", Ga));
                    for (var n in v) {
                        Ga = T[n];
                        var ga = v[n], L = Ga.$$bindings.bindToController;
                        ga.identifier && L && (m = ba(A, f, ga.instance, L, Ga));
                        var q = ga();
                        q !== ga.instance && (ga.instance = q, V.data("$" + Ga.name + "Controller", q), 
                        m && m(), m = ba(A, f, ga.instance, L, Ga));
                    }
                    F = 0;
                    for (M = h.length; F < M; F++) m = h[F], ea(m, m.isolateScope ? t : c, V, f, m.require && p(m.directiveName, m.require, V, v), C);
                    var Ta = c;
                    O && (O.template || null === O.templateUrl) && (Ta = t);
                    a && a(Ta, e.childNodes, u, g);
                    for (F = l.length - 1; 0 <= F; F--) m = l[F], ea(m, m.isolateScope ? t : c, V, f, m.require && p(m.directiveName, m.require, V, v), C);
                }
                m = m || {};
                for (var A = -Number.MAX_VALUE, R = m.newScopeDirective, T = m.controllerDirectives, O = m.newIsolateScopeDirective, J = m.templateDirective, n = m.nonTlbTranscludeDirective, ga = !1, L = !1, aa = m.hasElementTranscludeDirective, Z = d.$$element = B(b), q, x, P, Ia = e, G, F = 0, M = a.length; F < M; F++) {
                    q = a[F];
                    var N = q.$$start, Q = q.$$end;
                    N && (Z = Ta(b, N, Q));
                    P = u;
                    if (A > q.priority) break;
                    if (P = q.scope) q.templateUrl || (H(P) ? (Ua("new/isolated scope", O || R, q, Z), 
                    O = q) : Ua("new/isolated scope", O, q, Z)), R = R || q;
                    x = q.name;
                    !q.templateUrl && q.controller && (P = q.controller, T = T || $(), Ua("'" + x + "' controller", T[x], q, Z), 
                    T[x] = q);
                    if (P = q.transclude) ga = !0, q.$$tlb || (Ua("transclusion", n, q, Z), n = q), 
                    "element" == P ? (aa = !0, A = q.priority, P = Z, Z = d.$$element = B(X.createComment(" " + x + ": " + d[x] + " ")), 
                    b = Z[0], Y(f, ra.call(P, 0), b), Ia = K(P, e, A, g && g.name, {
                        nonTlbTranscludeDirective: n
                    })) : (P = B(Vb(b)).contents(), Z.empty(), Ia = K(P, e, u, u, {
                        needsNewScope: q.$$isolateScope || q.$$newScope
                    }));
                    if (q.template) if (L = !0, Ua("template", J, q, Z), J = q, P = z(q.template) ? q.template(Z, d) : q.template, 
                    P = ja(P), q.replace) {
                        g = q;
                        P = Tb.test(P) ? Xc(Yb(q.templateNamespace, U(P))) : [];
                        b = P[0];
                        if (1 != P.length || 1 !== b.nodeType) throw ha("tplrt", x, "");
                        Y(f, Z, b);
                        P = {
                            $attr: {}
                        };
                        var Wc = V(b, [], P), W = a.splice(F + 1, a.length - (F + 1));
                        (O || R) && y(Wc, O, R);
                        a = a.concat(Wc).concat(W);
                        S(d, P);
                        M = a.length;
                    } else Z.html(P);
                    if (q.templateUrl) L = !0, Ua("template", J, q, Z), J = q, q.replace && (g = q), 
                    D = Of(a.splice(F, a.length - F), Z, d, f, ga && Ia, h, l, {
                        controllerDirectives: T,
                        newScopeDirective: R !== q && R,
                        newIsolateScopeDirective: O,
                        templateDirective: J,
                        nonTlbTranscludeDirective: n
                    }), M = a.length; else if (q.compile) try {
                        G = q.compile(Z, d, Ia), z(G) ? t(null, G, N, Q) : G && t(G.pre, G.post, N, Q);
                    } catch (da) {
                        c(da, ua(Z));
                    }
                    q.terminal && (D.terminal = !0, A = Math.max(A, q.priority));
                }
                D.scope = R && !0 === R.scope;
                D.transcludeOnThisElement = ga;
                D.templateOnThisElement = L;
                D.transclude = Ia;
                m.hasElementTranscludeDirective = aa;
                return D;
            }
            function y(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) a[d] = Ob(a[d], {
                    $$isolateScope: b,
                    $$newScope: c
                });
            }
            function P(b, d, f, g, h, k, l) {
                if (d === h) return null;
                h = null;
                if (e.hasOwnProperty(d)) {
                    var m;
                    d = a.get(d + "Directive");
                    for (var p = 0, w = d.length; p < w; p++) try {
                        m = d[p], (q(g) || g > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = Ob(m, {
                            $$start: k,
                            $$end: l
                        })), b.push(m), h = m);
                    } catch (D) {
                        c(D);
                    }
                }
                return h;
            }
            function G(b) {
                if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) if (b = c[d], 
                b.multiElement) return !0;
                return !1;
            }
            function S(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                n(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                });
                n(b, function(b, f) {
                    "class" == f ? (J(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function Of(a, b, c, e, f, g, h, k) {
                var l = [], m, t, p = b[0], w = a.shift(), D = Ob(w, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: w
                }), A = z(w.templateUrl) ? w.templateUrl(b, c) : w.templateUrl, K = w.templateNamespace;
                b.empty();
                d(A).then(function(d) {
                    var T, v;
                    d = ja(d);
                    if (w.replace) {
                        d = Tb.test(d) ? Xc(Yb(K, U(d))) : [];
                        T = d[0];
                        if (1 != d.length || 1 !== T.nodeType) throw ha("tplrt", w.name, A);
                        d = {
                            $attr: {}
                        };
                        Y(e, b, T);
                        var C = V(T, [], d);
                        H(w.scope) && y(C, !0);
                        a = C.concat(a);
                        S(c, d);
                    } else T = p, b.html(d);
                    a.unshift(D);
                    m = Z(a, T, c, f, b, w, g, h, k);
                    n(e, function(a, c) {
                        a == T && (e[c] = b[0]);
                    });
                    for (t = O(b[0].childNodes, f); l.length; ) {
                        d = l.shift();
                        v = l.shift();
                        var ga = l.shift(), L = l.shift(), C = b[0];
                        if (!d.$$destroyed) {
                            if (v !== p) {
                                var q = v.className;
                                k.hasElementTranscludeDirective && w.replace || (C = Vb(T));
                                Y(ga, B(v), C);
                                J(B(C), q);
                            }
                            v = m.transcludeOnThisElement ? R(d, m.transclude, L) : L;
                            m(t, d, C, e, v);
                        }
                    }
                    l = null;
                });
                return function(a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = R(b, m.transclude, e)), 
                    m(t, b, c, d, a)));
                };
            }
            function Ia(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function Ua(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : "";
                }
                if (b) throw ha("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ua(d));
            }
            function N(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && K.$$addBindingClass(a);
                        return function(a, c) {
                            var e = c.parent();
                            b || K.$$addBindingClass(e);
                            K.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function(a) {
                                c[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function Yb(a, b) {
                a = F(a || "html");
                switch (a) {
                  case "svg":
                  case "math":
                    var c = X.createElement("div");
                    c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                    return c.childNodes[0].childNodes;

                  default:
                    return b;
                }
            }
            function Q(a, b) {
                if ("srcdoc" == b) return L.HTML;
                var c = ta(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return L.RESOURCE_URL;
            }
            function W(a, c, d, e, f) {
                var g = Q(a, e);
                f = h[e] || f;
                var k = b(d, !0, g, f);
                if (k) {
                    if ("multiple" === e && "select" === ta(a)) throw ha("selmulti", ua(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, h) {
                                    c = h.$$observers || (h.$$observers = $());
                                    if (l.test(e)) throw ha("nodomevents");
                                    var m = h[e];
                                    m !== d && (k = m && b(m, !0, g, f), d = m);
                                    k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function(a, b) {
                                        "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function Y(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, h;
                if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
                    a[g++] = c;
                    h = g + e - 1;
                    for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1;
                    a.context === d && (a.context = c);
                    break;
                }
                f && f.replaceChild(c, d);
                a = X.createDocumentFragment();
                a.appendChild(d);
                B.hasData(d) && (B.data(c, B.data(d)), oa ? (Rb = !0, oa.cleanData([ d ])) : delete B.cache[d[B.expando]]);
                d = 1;
                for (e = b.length; d < e; d++) f = b[d], B(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1;
            }
            function ca(a, b) {
                return M(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function ea(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g);
                } catch (h) {
                    c(h, ua(d));
                }
            }
            function ba(a, c, d, e, f) {
                var g = [];
                n(e, function(e, h) {
                    var k = e.attrName, l = e.optional, m, t, w, D;
                    switch (e.mode) {
                      case "@":
                        l || qa.call(c, k) || (d[h] = c[k] = void 0);
                        c.$observe(k, function(a) {
                            E(a) && (d[h] = a);
                        });
                        c.$$observers[k].$$scope = a;
                        E(c[k]) && (d[h] = b(c[k])(a));
                        break;

                      case "=":
                        if (!qa.call(c, k)) {
                            if (l) break;
                            c[k] = void 0;
                        }
                        if (l && !c[k]) break;
                        t = p(c[k]);
                        D = t.literal ? ma : function(a, b) {
                            return a === b || a !== a && b !== b;
                        };
                        w = t.assign || function() {
                            m = d[h] = t(a);
                            throw ha("nonassign", c[k], f.name);
                        };
                        m = d[h] = t(a);
                        l = function(b) {
                            D(b, d[h]) || (D(b, m) ? w(a, b = d[h]) : d[h] = b);
                            return m = b;
                        };
                        l.$stateful = !0;
                        l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(p(c[k], l), null, t.literal);
                        g.push(l);
                        break;

                      case "&":
                        t = c.hasOwnProperty(k) ? p(c[k]) : x;
                        if (t === x && l) break;
                        d[h] = function(b) {
                            return t(a, b);
                        };
                    }
                });
                return g.length && function() {
                    for (var a = 0, b = g.length; a < b; ++a) g[a]();
                };
            }
            var fa = function(a, b) {
                if (b) {
                    var c = Object.keys(b), d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++) f = c[d], this[f] = b[f];
                } else this.$attr = {};
                this.$$element = a;
            };
            fa.prototype = {
                $normalize: va,
                $addClass: function(a) {
                    a && 0 < a.length && aa.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && aa.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = Yc(a, b);
                    c && c.length && aa.addClass(this.$$element, c);
                    (c = Yc(b, a)) && c.length && aa.removeClass(this.$$element, c);
                },
                $set: function(a, b, d, e) {
                    var f = Qc(this.$$element[0], a), g = Zc[a], h = a;
                    f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = zc(a, "-"));
                    f = ta(this.$$element);
                    if ("a" === f && "href" === a || "img" === f && "src" === a) this[a] = b = D(b, "src" === a); else if ("img" === f && "srcset" === a) {
                        for (var f = "", g = U(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l, f = f + D(U(g[m]), !0), f = f + (" " + U(g[m + 1]));
                        g = U(g[2 * l]).split(/\s/);
                        f += D(U(g[0]), !0);
                        2 === g.length && (f += " " + U(g[1]));
                        this[a] = b = f;
                    }
                    !1 !== d && (null === b || q(b) ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    (a = this.$$observers) && n(a[h], function(a) {
                        try {
                            a(b);
                        } catch (d) {
                            c(d);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = $()), e = d[a] || (d[a] = []);
                    e.push(b);
                    w.$evalAsync(function() {
                        e.$$inter || !c.hasOwnProperty(a) || q(c[a]) || b(c[a]);
                    });
                    return function() {
                        ab(e, b);
                    };
                }
            };
            var da = b.startSymbol(), ia = b.endSymbol(), ja = "{{" == da || "}}" == ia ? Ya : function(a) {
                return a.replace(/\{\{/g, da).replace(/}}/g, ia);
            }, ka = /^ngAttr[A-Z]/, la = /^(.+)Start$/;
            K.$$addBindingInfo = m ? function(a, b) {
                var c = a.data("$binding") || [];
                I(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c);
            } : x;
            K.$$addBindingClass = m ? function(a) {
                J(a, "ng-binding");
            } : x;
            K.$$addScopeInfo = m ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
            } : x;
            K.$$addScopeClass = m ? function(a, b) {
                J(a, b ? "ng-isolate-scope" : "ng-scope");
            } : x;
            return K;
        } ];
    }
    function va(a) {
        return fb(a.replace(Vc, ""));
    }
    function Yc(a, b) {
        var d = "", c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
        a: for (;f < c.length; f++) {
            for (var g = c[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            d += (0 < d.length ? " " : "") + g;
        }
        return d;
    }
    function Xc(a) {
        a = B(a);
        var b = a.length;
        if (1 >= b) return a;
        for (;b--; ) 8 === a[b].nodeType && Pf.call(a, b, 1);
        return a;
    }
    function Xe() {
        var a = {}, b = !1;
        this.register = function(b, c) {
            Ra(b, "controller");
            H(b) ? M(a, b) : a[b] = c;
        };
        this.allowGlobals = function() {
            b = !0;
        };
        this.$get = [ "$injector", "$window", function(d, c) {
            function e(a, b, c, d) {
                if (!a || !H(a.$scope)) throw G("$controller")("noscp", d, b);
                a.$scope[b] = c;
            }
            return function(f, g, h, k) {
                var l, m, r;
                h = !0 === h;
                k && E(k) && (r = k);
                if (E(f)) {
                    k = f.match(Uc);
                    if (!k) throw Qf("ctrlfmt", f);
                    m = k[1];
                    r = r || k[3];
                    f = a.hasOwnProperty(m) ? a[m] : Bc(g.$scope, m, !0) || (b ? Bc(c, m, !0) : u);
                    Qa(f, m, !0);
                }
                if (h) return h = (I(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), 
                r && e(g, r, l, m || f.name), M(function() {
                    var a = d.invoke(f, l, g, m);
                    a !== l && (H(a) || z(a)) && (l = a, r && e(g, r, l, m || f.name));
                    return l;
                }, {
                    instance: l,
                    identifier: r
                });
                l = d.instantiate(f, g, m);
                r && e(g, r, l, m || f.name);
                return l;
            };
        } ];
    }
    function Ye() {
        this.$get = [ "$window", function(a) {
            return B(a.document);
        } ];
    }
    function Ze() {
        this.$get = [ "$log", function(a) {
            return function(b, d) {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function Zb(a) {
        return H(a) ? da(a) ? a.toISOString() : db(a) : a;
    }
    function df() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var b = [];
                oc(a, function(a, c) {
                    null === a || q(a) || (I(a) ? n(a, function(a, d) {
                        b.push(ja(c) + "=" + ja(Zb(a)));
                    }) : b.push(ja(c) + "=" + ja(Zb(a))));
                });
                return b.join("&");
            };
        };
    }
    function ef() {
        this.$get = function() {
            return function(a) {
                function b(a, e, f) {
                    null === a || q(a) || (I(a) ? n(a, function(a, c) {
                        b(a, e + "[" + (H(a) ? c : "") + "]");
                    }) : H(a) && !da(a) ? oc(a, function(a, c) {
                        b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
                    }) : d.push(ja(e) + "=" + ja(Zb(a))));
                }
                if (!a) return "";
                var d = [];
                b(a, "", !0);
                return d.join("&");
            };
        };
    }
    function $b(a, b) {
        if (E(a)) {
            var d = a.replace(Rf, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf($c)) || (c = (c = d.match(Sf)) && Tf[c[0]].test(d));
                c && (a = uc(d));
            }
        }
        return a;
    }
    function ad(a) {
        var b = $(), d;
        E(a) ? n(a.split("\n"), function(a) {
            d = a.indexOf(":");
            var e = F(U(a.substr(0, d)));
            a = U(a.substr(d + 1));
            e && (b[e] = b[e] ? b[e] + ", " + a : a);
        }) : H(a) && n(a, function(a, d) {
            var f = F(d), g = U(a);
            f && (b[f] = b[f] ? b[f] + ", " + g : g);
        });
        return b;
    }
    function bd(a) {
        var b;
        return function(d) {
            b || (b = ad(a));
            return d ? (d = b[F(d)], void 0 === d && (d = null), d) : b;
        };
    }
    function cd(a, b, d, c) {
        if (z(c)) return c(a, b, d);
        n(c, function(c) {
            a = c(a, b, d);
        });
        return a;
    }
    function cf() {
        var a = this.defaults = {
            transformResponse: [ $b ],
            transformRequest: [ function(a) {
                return H(a) && "[object File]" !== sa.call(a) && "[object Blob]" !== sa.call(a) && "[object FormData]" !== sa.call(a) ? db(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: ia(ac),
                put: ia(ac),
                patch: ia(ac)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, b = !1;
        this.useApplyAsync = function(a) {
            return y(a) ? (b = !!a, this) : b;
        };
        var d = !0;
        this.useLegacyPromiseExtensions = function(a) {
            return y(a) ? (d = !!a, this) : d;
        };
        var c = this.interceptors = [];
        this.$get = [ "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(e, f, g, h, k, l) {
            function m(b) {
                function c(a) {
                    var b = M({}, a);
                    b.data = cd(a.data, a.headers, a.status, f.transformResponse);
                    a = a.status;
                    return 200 <= a && 300 > a ? b : k.reject(b);
                }
                function e(a, b) {
                    var c, d = {};
                    n(a, function(a, e) {
                        z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
                    });
                    return d;
                }
                if (!fa.isObject(b)) throw G("$http")("badreq", b);
                var f = M({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                f.headers = function(b) {
                    var c = a.headers, d = M({}, b.headers), f, g, h, c = M({}, c.common, c[F(b.method)]);
                    a: for (f in c) {
                        g = F(f);
                        for (h in d) if (F(h) === g) continue a;
                        d[f] = c[f];
                    }
                    return e(d, ia(b));
                }(b);
                f.method = sb(f.method);
                f.paramSerializer = E(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
                var g = [ function(b) {
                    var d = b.headers, e = cd(b.data, bd(d), u, b.transformRequest);
                    q(e) && n(d, function(a, b) {
                        "content-type" === F(b) && delete d[b];
                    });
                    q(b.withCredentials) && !q(a.withCredentials) && (b.withCredentials = a.withCredentials);
                    return r(b, e).then(c, c);
                }, u ], h = k.when(f);
                for (n(v, function(a) {
                    (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && g.push(a.response, a.responseError);
                }); g.length; ) {
                    b = g.shift();
                    var m = g.shift(), h = h.then(b, m);
                }
                d ? (h.success = function(a) {
                    Qa(a, "fn");
                    h.then(function(b) {
                        a(b.data, b.status, b.headers, f);
                    });
                    return h;
                }, h.error = function(a) {
                    Qa(a, "fn");
                    h.then(null, function(b) {
                        a(b.data, b.status, b.headers, f);
                    });
                    return h;
                }) : (h.success = dd("success"), h.error = dd("error"));
                return h;
            }
            function r(c, d) {
                function g(a, c, d, e) {
                    function f() {
                        l(c, a, d, e);
                    }
                    J && (200 <= a && 300 > a ? J.put(R, [ a, c, ad(d), e ]) : J.remove(R));
                    b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
                }
                function l(a, b, d, e) {
                    b = -1 <= b ? b : 0;
                    (200 <= b && 300 > b ? n.resolve : n.reject)({
                        data: a,
                        status: b,
                        headers: bd(d),
                        config: c,
                        statusText: e
                    });
                }
                function r(a) {
                    l(a.data, a.status, ia(a.headers()), a.statusText);
                }
                function v() {
                    var a = m.pendingRequests.indexOf(c);
                    -1 !== a && m.pendingRequests.splice(a, 1);
                }
                var n = k.defer(), D = n.promise, J, K, O = c.headers, R = t(c.url, c.paramSerializer(c.params));
                m.pendingRequests.push(c);
                D.then(v, v);
                !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (J = H(c.cache) ? c.cache : H(a.cache) ? a.cache : A);
                J && (K = J.get(R), y(K) ? K && z(K.then) ? K.then(r, r) : I(K) ? l(K[1], K[0], ia(K[2]), K[3]) : l(K, 200, {}, "OK") : J.put(R, D));
                q(K) && ((K = ed(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : u) && (O[c.xsrfHeaderName || a.xsrfHeaderName] = K), 
                e(c.method, R, d, g, O, c.timeout, c.withCredentials, c.responseType));
                return D;
            }
            function t(a, b) {
                0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
                return a;
            }
            var A = g("$http");
            a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var v = [];
            n(c, function(a) {
                v.unshift(E(a) ? l.get(a) : l.invoke(a));
            });
            m.pendingRequests = [];
            (function(a) {
                n(arguments, function(a) {
                    m[a] = function(b, c) {
                        return m(M({}, c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            })("get", "delete", "head", "jsonp");
            (function(a) {
                n(arguments, function(a) {
                    m[a] = function(b, c, d) {
                        return m(M({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            })("post", "put", "patch");
            m.defaults = a;
            return m;
        } ];
    }
    function gf() {
        this.$get = function() {
            return function() {
                return new S.XMLHttpRequest();
            };
        };
    }
    function ff() {
        this.$get = [ "$browser", "$window", "$document", "$xhrFactory", function(a, b, d, c) {
            return Uf(a, c, a.defer, b.angular.callbacks, d[0]);
        } ];
    }
    function Uf(a, b, d, c, e) {
        function f(a, b, d) {
            var f = e.createElement("script"), m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function(a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, A = "unknown";
                a && ("load" !== a.type || c[b].called || (a = {
                    type: "error"
                }), A = a.type, g = "error" === a.type ? 404 : 200);
                d && d(g, A);
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m;
        }
        return function(e, h, k, l, m, r, t, A) {
            function v() {
                C && C();
                w && w.abort();
            }
            function T(b, c, e, f, g) {
                y(L) && d.cancel(L);
                C = w = null;
                b(c, e, f, g);
                a.$$completeOutstandingRequest(x);
            }
            a.$$incOutstandingRequestCount();
            h = h || a.url();
            if ("jsonp" == F(e)) {
                var p = "_" + (c.counter++).toString(36);
                c[p] = function(a) {
                    c[p].data = a;
                    c[p].called = !0;
                };
                var C = f(h.replace("JSON_CALLBACK", "angular.callbacks." + p), p, function(a, b) {
                    T(l, a, c[p].data, "", b);
                    c[p] = x;
                });
            } else {
                var w = b(e, h);
                w.open(e, h, !0);
                n(m, function(a, b) {
                    y(a) && w.setRequestHeader(b, a);
                });
                w.onload = function() {
                    var a = w.statusText || "", b = "response" in w ? w.response : w.responseText, c = 1223 === w.status ? 204 : w.status;
                    0 === c && (c = b ? 200 : "file" == wa(h).protocol ? 404 : 0);
                    T(l, c, b, w.getAllResponseHeaders(), a);
                };
                e = function() {
                    T(l, -1, null, null, "");
                };
                w.onerror = e;
                w.onabort = e;
                t && (w.withCredentials = !0);
                if (A) try {
                    w.responseType = A;
                } catch (ga) {
                    if ("json" !== A) throw ga;
                }
                w.send(q(k) ? null : k);
            }
            if (0 < r) var L = d(v, r); else r && z(r.then) && r.then(v);
        };
    }
    function af() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a;
        };
        this.endSymbol = function(a) {
            return a ? (b = a, this) : b;
        };
        this.$get = [ "$parse", "$exceptionHandler", "$sce", function(d, c, e) {
            function f(a) {
                return "\\\\\\" + a;
            }
            function g(c) {
                return c.replace(m, a).replace(r, b);
            }
            function h(f, h, m, r) {
                function p(a) {
                    try {
                        var b = a;
                        a = m ? e.getTrusted(m, b) : e.valueOf(b);
                        var d;
                        if (r && !y(a)) d = a; else if (null == a) d = ""; else {
                            switch (typeof a) {
                              case "string":
                                break;

                              case "number":
                                a = "" + a;
                                break;

                              default:
                                a = db(a);
                            }
                            d = a;
                        }
                        return d;
                    } catch (g) {
                        c(Ja.interr(f, g));
                    }
                }
                r = !!r;
                for (var C, w, n = 0, L = [], s = [], D = f.length, J = [], K = []; n < D; ) if (-1 != (C = f.indexOf(a, n)) && -1 != (w = f.indexOf(b, C + k))) n !== C && J.push(g(f.substring(n, C))), 
                n = f.substring(C + k, w), L.push(n), s.push(d(n, p)), n = w + l, K.push(J.length), 
                J.push(""); else {
                    n !== D && J.push(g(f.substring(n)));
                    break;
                }
                m && 1 < J.length && Ja.throwNoconcat(f);
                if (!h || L.length) {
                    var O = function(a) {
                        for (var b = 0, c = L.length; b < c; b++) {
                            if (r && q(a[b])) return;
                            J[K[b]] = a[b];
                        }
                        return J.join("");
                    };
                    return M(function(a) {
                        var b = 0, d = L.length, e = Array(d);
                        try {
                            for (;b < d; b++) e[b] = s[b](a);
                            return O(e);
                        } catch (g) {
                            c(Ja.interr(f, g));
                        }
                    }, {
                        exp: f,
                        expressions: L,
                        $$watchDelegate: function(a, b) {
                            var c;
                            return a.$watchGroup(s, function(d, e) {
                                var f = O(d);
                                z(b) && b.call(this, f, d !== e ? c : f, a);
                                c = f;
                            });
                        }
                    });
                }
            }
            var k = a.length, l = b.length, m = new RegExp(a.replace(/./g, f), "g"), r = new RegExp(b.replace(/./g, f), "g");
            h.startSymbol = function() {
                return a;
            };
            h.endSymbol = function() {
                return b;
            };
            return h;
        } ];
    }
    function bf() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", function(a, b, d, c) {
            function e(e, h, k, l) {
                var m = 4 < arguments.length, r = m ? ra.call(arguments, 4) : [], t = b.setInterval, A = b.clearInterval, v = 0, n = y(l) && !l, p = (n ? c : d).defer(), C = p.promise;
                k = y(k) ? k : 0;
                C.then(null, null, m ? function() {
                    e.apply(null, r);
                } : e);
                C.$$intervalId = t(function() {
                    p.notify(v++);
                    0 < k && v >= k && (p.resolve(v), A(C.$$intervalId), delete f[C.$$intervalId]);
                    n || a.$apply();
                }, h);
                f[C.$$intervalId] = p;
                return C;
            }
            var f = {};
            e.cancel = function(a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), 
                delete f[a.$$intervalId], !0) : !1;
            };
            return e;
        } ];
    }
    function bc(a) {
        a = a.split("/");
        for (var b = a.length; b--; ) a[b] = ob(a[b]);
        return a.join("/");
    }
    function fd(a, b) {
        var d = wa(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = ea(d.port) || Vf[d.protocol] || null;
    }
    function gd(a, b) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = wa(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = xc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function pa(a, b) {
        if (0 === b.indexOf(a)) return b.substr(a.length);
    }
    function Fa(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b);
    }
    function ib(a) {
        return a.replace(/(#.+)|#$/, "$1");
    }
    function cc(a, b, d) {
        this.$$html5 = !0;
        d = d || "";
        fd(a, this);
        this.$$parse = function(a) {
            var d = pa(b, a);
            if (!E(d)) throw Db("ipthprfx", a, b);
            gd(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose();
        };
        this.$$compose = function() {
            var a = Qb(this.$$search), d = this.$$hash ? "#" + ob(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + d;
            this.$$absUrl = b + this.$$url.substr(1);
        };
        this.$$parseLinkUrl = function(c, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            y(f = pa(a, c)) ? (g = f, g = y(f = pa(d, f)) ? b + (pa("/", f) || f) : a + g) : y(f = pa(b, c)) ? g = b + f : b == c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g;
        };
    }
    function dc(a, b, d) {
        fd(a, this);
        this.$$parse = function(c) {
            var e = pa(a, c) || pa(b, c), f;
            q(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", q(e) && (a = c, this.replace())) : (f = pa(d, e), 
            q(f) && (f = e));
            gd(f, this);
            c = this.$$path;
            var e = a, g = /^\/[A-Z]:(\/.*)/;
            0 === f.indexOf(e) && (f = f.replace(e, ""));
            g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
            this.$$path = c;
            this.$$compose();
        };
        this.$$compose = function() {
            var b = Qb(this.$$search), e = this.$$hash ? "#" + ob(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
        };
        this.$$parseLinkUrl = function(b, d) {
            return Fa(a) == Fa(b) ? (this.$$parse(b), !0) : !1;
        };
    }
    function hd(a, b, d) {
        this.$$html5 = !0;
        dc.apply(this, arguments);
        this.$$parseLinkUrl = function(c, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            a == Fa(c) ? f = c : (g = pa(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
            f && this.$$parse(f);
            return !!f;
        };
        this.$$compose = function() {
            var b = Qb(this.$$search), e = this.$$hash ? "#" + ob(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + d + this.$$url;
        };
    }
    function Eb(a) {
        return function() {
            return this[a];
        };
    }
    function id(a, b) {
        return function(d) {
            if (q(d)) return this[a];
            this[a] = b(d);
            this.$$compose();
            return this;
        };
    }
    function hf() {
        var a = "", b = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(b) {
            return y(b) ? (a = b, this) : a;
        };
        this.html5Mode = function(a) {
            return $a(a) ? (b.enabled = a, this) : H(a) ? ($a(a.enabled) && (b.enabled = a.enabled), 
            $a(a.requireBase) && (b.requireBase = a.requireBase), $a(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), 
            this) : b;
        };
        this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(d, c, e, f, g) {
            function h(a, b, d) {
                var e = l.url(), f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state();
                } catch (g) {
                    throw l.url(e), l.$$state = f, g;
                }
            }
            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
            }
            var l, m;
            m = c.baseHref();
            var r = c.url(), t;
            if (b.enabled) {
                if (!m && b.requireBase) throw Db("nobase");
                t = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (m || "/");
                m = e.history ? cc : hd;
            } else t = Fa(r), m = dc;
            var A = t.substr(0, Fa(t).lastIndexOf("/") + 1);
            l = new m(t, A, "#" + a);
            l.$$parseLinkUrl(r, r);
            l.$$state = c.state();
            var v = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = B(a.target); "a" !== ta(e[0]); ) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), k = e.attr("href") || e.attr("xlink:href");
                    H(h) && "[object SVGAnimatedString]" === h.toString() && (h = wa(h.animVal).href);
                    v.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), 
                    l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                }
            });
            ib(l.absUrl()) != ib(r) && c.url(l.absUrl(), !0);
            var n = !0;
            c.onUrlChange(function(a, b) {
                q(pa(A, a)) ? g.location.href = a : (d.$evalAsync(function() {
                    var c = l.absUrl(), e = l.$$state, f;
                    a = ib(a);
                    l.$$parse(a);
                    l.$$state = b;
                    f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (n = !1, k(c, e)));
                }), d.$$phase || d.$digest());
            });
            d.$watch(function() {
                var a = ib(c.url()), b = ib(l.absUrl()), f = c.state(), g = l.$$replace, m = a !== b || l.$$html5 && e.history && f !== l.$$state;
                if (n || m) n = !1, d.$evalAsync(function() {
                    var b = l.absUrl(), c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), 
                    k(a, f)));
                });
                l.$$replace = !1;
            });
            return l;
        } ];
    }
    function jf() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return y(b) ? (a = b, this) : a;
        };
        this.$get = [ "$window", function(d) {
            function c(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a;
            }
            function e(a) {
                var b = d.console || {}, e = b[a] || b.log || x;
                a = !1;
                try {
                    a = !!e.apply;
                } catch (k) {}
                return a ? function() {
                    var a = [];
                    n(arguments, function(b) {
                        a.push(c(b));
                    });
                    return e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        } ];
    }
    function Va(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ba("isecfld", b);
        return a;
    }
    function jd(a, b) {
        a += "";
        if (!E(a)) throw ba("iseccst", b);
        return a;
    }
    function xa(a, b) {
        if (a) {
            if (a.constructor === a) throw ba("isecfn", b);
            if (a.window === a) throw ba("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ba("isecdom", b);
            if (a === Object) throw ba("isecobj", b);
        }
        return a;
    }
    function kd(a, b) {
        if (a) {
            if (a.constructor === a) throw ba("isecfn", b);
            if (a === Wf || a === Xf || a === Yf) throw ba("isecff", b);
        }
    }
    function ld(a, b) {
        if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw ba("isecaf", b);
    }
    function Zf(a, b) {
        return "undefined" !== typeof a ? a : b;
    }
    function md(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
    }
    function W(a, b) {
        var d, c;
        switch (a.type) {
          case s.Program:
            d = !0;
            n(a.body, function(a) {
                W(a.expression, b);
                d = d && a.expression.constant;
            });
            a.constant = d;
            break;

          case s.Literal:
            a.constant = !0;
            a.toWatch = [];
            break;

          case s.UnaryExpression:
            W(a.argument, b);
            a.constant = a.argument.constant;
            a.toWatch = a.argument.toWatch;
            break;

          case s.BinaryExpression:
            W(a.left, b);
            W(a.right, b);
            a.constant = a.left.constant && a.right.constant;
            a.toWatch = a.left.toWatch.concat(a.right.toWatch);
            break;

          case s.LogicalExpression:
            W(a.left, b);
            W(a.right, b);
            a.constant = a.left.constant && a.right.constant;
            a.toWatch = a.constant ? [] : [ a ];
            break;

          case s.ConditionalExpression:
            W(a.test, b);
            W(a.alternate, b);
            W(a.consequent, b);
            a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
            a.toWatch = a.constant ? [] : [ a ];
            break;

          case s.Identifier:
            a.constant = !1;
            a.toWatch = [ a ];
            break;

          case s.MemberExpression:
            W(a.object, b);
            a.computed && W(a.property, b);
            a.constant = a.object.constant && (!a.computed || a.property.constant);
            a.toWatch = [ a ];
            break;

          case s.CallExpression:
            d = a.filter ? !b(a.callee.name).$stateful : !1;
            c = [];
            n(a.arguments, function(a) {
                W(a, b);
                d = d && a.constant;
                a.constant || c.push.apply(c, a.toWatch);
            });
            a.constant = d;
            a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [ a ];
            break;

          case s.AssignmentExpression:
            W(a.left, b);
            W(a.right, b);
            a.constant = a.left.constant && a.right.constant;
            a.toWatch = [ a ];
            break;

          case s.ArrayExpression:
            d = !0;
            c = [];
            n(a.elements, function(a) {
                W(a, b);
                d = d && a.constant;
                a.constant || c.push.apply(c, a.toWatch);
            });
            a.constant = d;
            a.toWatch = c;
            break;

          case s.ObjectExpression:
            d = !0;
            c = [];
            n(a.properties, function(a) {
                W(a.value, b);
                d = d && a.value.constant;
                a.value.constant || c.push.apply(c, a.value.toWatch);
            });
            a.constant = d;
            a.toWatch = c;
            break;

          case s.ThisExpression:
            a.constant = !1, a.toWatch = [];
        }
    }
    function nd(a) {
        if (1 == a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : u;
        }
    }
    function od(a) {
        return a.type === s.Identifier || a.type === s.MemberExpression;
    }
    function pd(a) {
        if (1 === a.body.length && od(a.body[0].expression)) return {
            type: s.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: s.NGValueParameter
            },
            operator: "="
        };
    }
    function qd(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
    }
    function rd(a, b) {
        this.astBuilder = a;
        this.$filter = b;
    }
    function sd(a, b) {
        this.astBuilder = a;
        this.$filter = b;
    }
    function Fb(a) {
        return "constructor" == a;
    }
    function ec(a) {
        return z(a.valueOf) ? a.valueOf() : $f.call(a);
    }
    function kf() {
        var a = $(), b = $();
        this.$get = [ "$filter", function(d) {
            function c(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = ec(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b;
            }
            function e(a, b, d, e, f) {
                var g = e.inputs, h;
                if (1 === g.length) {
                    var k = c, g = g[0];
                    return a.$watch(function(a) {
                        var b = g(a);
                        c(b, k) || (h = e(a, u, u, [ b ]), k = b && ec(b));
                        return h;
                    }, b, d, f);
                }
                for (var l = [], m = [], r = 0, n = g.length; r < n; r++) l[r] = c, m[r] = null;
                return a.$watch(function(a) {
                    for (var b = !1, d = 0, f = g.length; d < f; d++) {
                        var k = g[d](a);
                        if (b || (b = !c(k, l[d]))) m[d] = k, l[d] = k && ec(k);
                    }
                    b && (h = e(a, u, u, m));
                    return h;
                }, b, d, f);
            }
            function f(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    f = a;
                    z(b) && b.apply(this, arguments);
                    y(a) && d.$$postDigest(function() {
                        y(f) && e();
                    });
                }, c);
            }
            function g(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    n(a, function(a) {
                        y(a) || (b = !1);
                    });
                    return b;
                }
                var f, g;
                return f = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    g = a;
                    z(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function() {
                        e(g) && f();
                    });
                }, c);
            }
            function h(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    z(b) && b.apply(this, arguments);
                    e();
                }, c);
            }
            function k(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, d = !1, c = c !== g && c !== f ? function(c, e, f, g) {
                    f = d && g ? g[0] : a(c, e, f, g);
                    return b(f, c, e);
                } : function(c, d, e, f) {
                    e = a(c, d, e, f);
                    c = b(e, c, d);
                    return y(e) ? c : e;
                };
                a.$$watchDelegate && a.$$watchDelegate !== e ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = e, 
                d = !a.inputs, c.inputs = a.inputs ? a.inputs : [ a ]);
                return c;
            }
            var l = Ba().noUnsafeEval, m = {
                csp: l,
                expensiveChecks: !1
            }, r = {
                csp: l,
                expensiveChecks: !0
            };
            return function(c, l, v) {
                var n, p, q;
                switch (typeof c) {
                  case "string":
                    q = c = c.trim();
                    var w = v ? b : a;
                    n = w[q];
                    n || (":" === c.charAt(0) && ":" === c.charAt(1) && (p = !0, c = c.substring(2)), 
                    v = v ? r : m, n = new fc(v), n = new gc(n, d, v).parse(c), n.constant ? n.$$watchDelegate = h : p ? n.$$watchDelegate = n.literal ? g : f : n.inputs && (n.$$watchDelegate = e), 
                    w[q] = n);
                    return k(n, l);

                  case "function":
                    return k(c, l);

                  default:
                    return x;
                }
            };
        } ];
    }
    function mf() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return td(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function nf() {
        this.$get = [ "$browser", "$exceptionHandler", function(a, b) {
            return td(function(b) {
                a.defer(b);
            }, b);
        } ];
    }
    function td(a, b) {
        function d(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c));
                };
            }
            var e = !1;
            return [ d(b), d(c) ];
        }
        function c() {
            this.$$state = {
                status: 0
            };
        }
        function e(a, b) {
            return function(c) {
                b.call(a, c);
            };
        }
        function f(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, a(function() {
                var a, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = u;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    a = e[f][c.status];
                    try {
                        z(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
                    } catch (h) {
                        d.reject(h), b(h);
                    }
                }
            }));
        }
        function g() {
            this.promise = new c();
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify);
        }
        var h = G("$q", TypeError);
        M(c.prototype, {
            then: function(a, b, c) {
                if (q(a) && q(b) && q(c)) return this;
                var d = new g();
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([ d, a, b, c ]);
                0 < this.$$state.status && f(this.$$state);
                return d.promise;
            },
            "catch": function(a) {
                return this.then(null, a);
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return l(b, !0, a);
                }, function(b) {
                    return l(b, !1, a);
                }, b);
            }
        });
        M(g.prototype, {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a));
            },
            $$resolve: function(a) {
                var c, e;
                e = d(this, this.$$resolve, this.$$reject);
                try {
                    if (H(a) || z(a)) c = a && a.then;
                    z(c) ? (this.promise.$$state.status = -1, c.call(a, e[0], e[1], this.notify)) : (this.promise.$$state.value = a, 
                    this.promise.$$state.status = 1, f(this.promise.$$state));
                } catch (g) {
                    e[1](g), b(g);
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a);
            },
            $$reject: function(a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                f(this.promise.$$state);
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        a = d[f][3];
                        try {
                            e.notify(z(a) ? a(c) : c);
                        } catch (h) {
                            b(h);
                        }
                    }
                });
            }
        });
        var k = function(a, b) {
            var c = new g();
            b ? c.resolve(a) : c.reject(a);
            return c.promise;
        }, l = function(a, b, c) {
            var d = null;
            try {
                z(c) && (d = c());
            } catch (e) {
                return k(e, !1);
            }
            return d && z(d.then) ? d.then(function() {
                return k(a, b);
            }, function(a) {
                return k(a, !1);
            }) : k(a, b);
        }, m = function(a, b, c, d) {
            var e = new g();
            e.resolve(a);
            return e.promise.then(b, c, d);
        }, r = function A(a) {
            if (!z(a)) throw h("norslvr", a);
            if (!(this instanceof A)) return new A(a);
            var b = new g();
            a(function(a) {
                b.resolve(a);
            }, function(a) {
                b.reject(a);
            });
            return b.promise;
        };
        r.defer = function() {
            return new g();
        };
        r.reject = function(a) {
            var b = new g();
            b.reject(a);
            return b.promise;
        };
        r.when = m;
        r.resolve = m;
        r.all = function(a) {
            var b = new g(), c = 0, d = I(a) ? [] : {};
            n(a, function(a, e) {
                c++;
                m(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a);
                });
            });
            0 === c && b.resolve(d);
            return b.promise;
        };
        return r;
    }
    function wf() {
        this.$get = [ "$window", "$timeout", function(a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function(a) {
                var b = d(a);
                return function() {
                    c(b);
                };
            } : function(a) {
                var c = b(a, 16.66, !1);
                return function() {
                    b.cancel(c);
                };
            };
            f.supported = e;
            return f;
        } ];
    }
    function lf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++nb;
                this.$$ChildScope = null;
            }
            b.prototype = a;
            return b;
        }
        var b = 10, d = G("$rootScope"), c = null, e = null;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b;
        };
        this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(f, g, h, k) {
            function l(a) {
                a.currentScope.$$destroyed = !0;
            }
            function m(a) {
                9 === Ha && (a.$$childHead && m(a.$$childHead), a.$$nextSibling && m(a.$$nextSibling));
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
            }
            function r() {
                this.$id = ++nb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null;
            }
            function t(a) {
                if (w.$$phase) throw d("inprog", w.$$phase);
                w.$$phase = a;
            }
            function A(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent);
            }
            function v(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function s() {}
            function p() {
                for (;aa.length; ) try {
                    aa.shift()();
                } catch (a) {
                    g(a);
                }
                e = null;
            }
            function C() {
                null === e && (e = k.defer(function() {
                    w.$apply(p);
                }));
            }
            r.prototype = {
                constructor: r,
                $new: function(b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new r(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), 
                    d = new this.$$ChildScope());
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (b || c != this) && d.$on("$destroy", l);
                    return d;
                },
                $watch: function(a, b, d, e) {
                    var f = h(a);
                    if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
                    var g = this, k = g.$$watchers, l = {
                        fn: b,
                        last: s,
                        get: f,
                        exp: e || a,
                        eq: !!d
                    };
                    c = null;
                    z(b) || (l.fn = x);
                    k || (k = g.$$watchers = []);
                    k.unshift(l);
                    A(this, 1);
                    return function() {
                        0 <= ab(k, l) && A(g, -1);
                        c = null;
                    };
                },
                $watchGroup: function(a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1, b(e, e, g)) : b(e, d, g);
                    }
                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                    if (!a.length) {
                        var l = !0;
                        g.$evalAsync(function() {
                            l && b(e, e, g);
                        });
                        return function() {
                            l = !1;
                        };
                    }
                    if (1 === a.length) return this.$watch(a[0], function(a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f);
                    });
                    n(a, function(a, b) {
                        var k = g.$watch(a, function(a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c));
                        });
                        f.push(k);
                    });
                    return function() {
                        for (;f.length; ) f.shift()();
                    };
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!q(e)) {
                            if (H(e)) if (za(e)) for (f !== r && (f = r, n = f.length = 0, l++), a = e.length, 
                            n !== a && (l++, f.length = n = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, 
                            d || h === g || (l++, f[b] = g); else {
                                f !== t && (f = t = {}, n = 0, l++);
                                a = 0;
                                for (b in e) qa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, 
                                d || h === g || (l++, f[b] = g)) : (n++, f[b] = g, l++));
                                if (n > a) for (b in l++, f) qa.call(e, b) || (n--, delete f[b]);
                            } else f !== e && (f = e, l++);
                            return l;
                        }
                    }
                    c.$stateful = !0;
                    var d = this, e, f, g, k = 1 < b.length, l = 0, m = h(a, c), r = [], t = {}, p = !0, n = 0;
                    return this.$watch(m, function() {
                        p ? (p = !1, b(e, e, d)) : b(e, g, d);
                        if (k) if (H(e)) if (za(e)) {
                            g = Array(e.length);
                            for (var a = 0; a < e.length; a++) g[a] = e[a];
                        } else for (a in g = {}, e) qa.call(e, a) && (g[a] = e[a]); else g = e;
                    });
                },
                $digest: function() {
                    var a, f, h, l, m, r, n = b, A, q = [], v, C;
                    t("$digest");
                    k.$$checkUrlChange();
                    this === w && null !== e && (k.defer.cancel(e), p());
                    c = null;
                    do {
                        r = !1;
                        for (A = this; u.length; ) {
                            try {
                                C = u.shift(), C.scope.$eval(C.expression, C.locals);
                            } catch (aa) {
                                g(aa);
                            }
                            c = null;
                        }
                        a: do {
                            if (l = A.$$watchers) for (m = l.length; m--; ) try {
                                if (a = l[m]) if ((f = a.get(A)) !== (h = a.last) && !(a.eq ? ma(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) r = !0, 
                                c = a, a.last = a.eq ? bb(f, null) : f, a.fn(f, h === s ? f : h, A), 5 > n && (v = 4 - n, 
                                q[v] || (q[v] = []), q[v].push({
                                    msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: f,
                                    oldVal: h
                                })); else if (a === c) {
                                    r = !1;
                                    break a;
                                }
                            } catch (y) {
                                g(y);
                            }
                            if (!(l = A.$$watchersCount && A.$$childHead || A !== this && A.$$nextSibling)) for (;A !== this && !(l = A.$$nextSibling); ) A = A.$parent;
                        } while (A = l);
                        if ((r || u.length) && !n--) throw w.$$phase = null, d("infdig", b, q);
                    } while (r || u.length);
                    for (w.$$phase = null; L.length; ) try {
                        L.shift()();
                    } catch (x) {
                        g(x);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === w && k.$$applicationDestroyed();
                        A(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) v(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                        a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = x;
                        this.$on = this.$watch = this.$watchGroup = function() {
                            return x;
                        };
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        m(this);
                    }
                },
                $eval: function(a, b) {
                    return h(a)(this, b);
                },
                $evalAsync: function(a, b) {
                    w.$$phase || u.length || k.defer(function() {
                        u.length && w.$digest();
                    });
                    u.push({
                        scope: this,
                        expression: a,
                        locals: b
                    });
                },
                $$postDigest: function(a) {
                    L.push(a);
                },
                $apply: function(a) {
                    try {
                        t("$apply");
                        try {
                            return this.$eval(a);
                        } finally {
                            w.$$phase = null;
                        }
                    } catch (b) {
                        g(b);
                    } finally {
                        try {
                            w.$digest();
                        } catch (c) {
                            throw g(c), c;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a);
                    }
                    var c = this;
                    a && aa.push(b);
                    C();
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, v(e, 1, a));
                    };
                },
                $emit: function(a, b) {
                    var c = [], d, e = this, f = !1, h = {
                        name: a,
                        targetScope: e,
                        stopPropagation: function() {
                            f = !0;
                        },
                        preventDefault: function() {
                            h.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, k = cb([ h ], arguments, 1), l, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        l = 0;
                        for (m = d.length; l < m; l++) if (d[l]) try {
                            d[l].apply(null, k);
                        } catch (r) {
                            g(r);
                        } else d.splice(l, 1), l--, m--;
                        if (f) return h.currentScope = null, h;
                        e = e.$parent;
                    } while (e);
                    h.currentScope = null;
                    return h;
                },
                $broadcast: function(a, b) {
                    var c = this, d = this, e = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            e.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a]) return e;
                    for (var f = cb([ e ], arguments, 1), h, k; c = d; ) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++) if (d[h]) try {
                            d[h].apply(null, f);
                        } catch (l) {
                            g(l);
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (;c !== this && !(d = c.$$nextSibling); ) c = c.$parent;
                    }
                    e.currentScope = null;
                    return e;
                }
            };
            var w = new r(), u = w.$$asyncQueue = [], L = w.$$postDigestQueue = [], aa = w.$$applyAsyncQueue = [];
            return w;
        } ];
    }
    function ge() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return y(b) ? (a = b, this) : a;
        };
        this.imgSrcSanitizationWhitelist = function(a) {
            return y(a) ? (b = a, this) : b;
        };
        this.$get = function() {
            return function(d, c) {
                var e = c ? b : a, f;
                f = wa(d).href;
                return "" === f || f.match(e) ? d : "unsafe:" + f;
            };
        };
    }
    function ag(a) {
        if ("self" === a) return a;
        if (E(a)) {
            if (-1 < a.indexOf("***")) throw ya("iwcard", a);
            a = ud(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + a + "$");
        }
        if (Ma(a)) return new RegExp("^" + a.source + "$");
        throw ya("imatcher");
    }
    function vd(a) {
        var b = [];
        y(a) && n(a, function(a) {
            b.push(ag(a));
        });
        return b;
    }
    function pf() {
        this.SCE_CONTEXTS = la;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            arguments.length && (a = vd(b));
            return a;
        };
        this.resourceUrlBlacklist = function(a) {
            arguments.length && (b = vd(a));
            return b;
        };
        this.$get = [ "$injector", function(d) {
            function c(a, b) {
                return "self" === a ? ed(b) : !!a.exec(b.href);
            }
            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                a && (b.prototype = new a());
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                };
                return b;
            }
            var f = function(a) {
                throw ya("unsafe");
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e(), h = {};
            h[la.HTML] = e(g);
            h[la.CSS] = e(g);
            h[la.URL] = e(g);
            h[la.JS] = e(g);
            h[la.RESOURCE_URL] = e(h[la.URL]);
            return {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw ya("icontext", a, b);
                    if (null === b || q(b) || "" === b) return b;
                    if ("string" !== typeof b) throw ya("itype", a);
                    return new c(b);
                },
                getTrusted: function(d, e) {
                    if (null === e || q(e) || "" === e) return e;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (d === la.RESOURCE_URL) {
                        var g = wa(e.toString()), r, t, n = !1;
                        r = 0;
                        for (t = a.length; r < t; r++) if (c(a[r], g)) {
                            n = !0;
                            break;
                        }
                        if (n) for (r = 0, t = b.length; r < t; r++) if (c(b[r], g)) {
                            n = !1;
                            break;
                        }
                        if (n) return e;
                        throw ya("insecurl", e.toString());
                    }
                    if (d === la.HTML) return f(e);
                    throw ya("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function of() {
        var a = !0;
        this.enabled = function(b) {
            arguments.length && (a = !!b);
            return a;
        };
        this.$get = [ "$parse", "$sceDelegate", function(b, d) {
            if (a && 8 > Ha) throw ya("iequirks");
            var c = ia(la);
            c.isEnabled = function() {
                return a;
            };
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs = c.getTrusted = function(a, b) {
                return b;
            }, c.valueOf = Ya);
            c.parseAs = function(a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function(b) {
                    return c.getTrusted(a, b);
                });
            };
            var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
            n(la, function(a, b) {
                var d = F(b);
                c[fb("parse_as_" + d)] = function(b) {
                    return e(a, b);
                };
                c[fb("get_trusted_" + d)] = function(b) {
                    return f(a, b);
                };
                c[fb("trust_as_" + d)] = function(b) {
                    return g(a, b);
                };
            });
            return c;
        } ];
    }
    function qf() {
        this.$get = [ "$window", "$document", function(a, b) {
            var d = {}, c = ea((/android (\d+)/.exec(F((a.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((a.navigator || {}).userAgent), f = b[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, k = f.body && f.body.style, l = !1, m = !1;
            if (k) {
                for (var r in k) if (l = h.exec(r)) {
                    g = l[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break;
                }
                g || (g = "WebkitOpacity" in k && "webkit");
                l = !!("transition" in k || g + "Transition" in k);
                m = !!("animation" in k || g + "Animation" in k);
                !c || l && m || (l = E(k.webkitTransition), m = E(k.webkitAnimation));
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > c || e),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Ha) return !1;
                    if (q(d[a])) {
                        var b = f.createElement("div");
                        d[a] = "on" + a in b;
                    }
                    return d[a];
                },
                csp: Ba(),
                vendorPrefix: g,
                transitions: l,
                animations: m,
                android: c
            };
        } ];
    }
    function sf() {
        this.$get = [ "$templateCache", "$http", "$q", "$sce", function(a, b, d, c) {
            function e(f, g) {
                e.totalPendingRequests++;
                E(f) && a.get(f) || (f = c.getTrustedResourceUrl(f));
                var h = b.defaults && b.defaults.transformResponse;
                I(h) ? h = h.filter(function(a) {
                    return a !== $b;
                }) : h === $b && (h = null);
                return b.get(f, {
                    cache: a,
                    transformResponse: h
                })["finally"](function() {
                    e.totalPendingRequests--;
                }).then(function(b) {
                    a.put(f, b.data);
                    return b.data;
                }, function(a) {
                    if (!g) throw ha("tpload", f, a.status, a.statusText);
                    return d.reject(a);
                });
            }
            e.totalPendingRequests = 0;
            return e;
        } ];
    }
    function tf() {
        this.$get = [ "$rootScope", "$browser", "$location", function(a, b, d) {
            return {
                findBindings: function(a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    n(a, function(a) {
                        var c = fa.element(a).data("$binding");
                        c && n(c, function(c) {
                            d ? new RegExp("(^|\\s)" + ud(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
                        });
                    });
                    return g;
                },
                findModels: function(a, b, d) {
                    for (var g = [ "ng-", "data-ng-", "ng\\:" ], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length) return k;
                    }
                },
                getLocation: function() {
                    return d.url();
                },
                setLocation: function(b) {
                    b !== d.url() && (d.url(b), a.$digest());
                },
                whenStable: function(a) {
                    b.notifyWhenNoOutstandingRequests(a);
                }
            };
        } ];
    }
    function uf() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, d, c, e) {
            function f(f, k, l) {
                z(f) || (l = k, k = f, f = x);
                var m = ra.call(arguments, 3), r = y(l) && !l, t = (r ? c : d).defer(), n = t.promise, q;
                q = b.defer(function() {
                    try {
                        t.resolve(f.apply(null, m));
                    } catch (b) {
                        t.reject(b), e(b);
                    } finally {
                        delete g[n.$$timeoutId];
                    }
                    r || a.$apply();
                }, k);
                n.$$timeoutId = q;
                g[q] = t;
                return n;
            }
            var g = {};
            f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], 
                b.defer.cancel(a.$$timeoutId)) : !1;
            };
            return f;
        } ];
    }
    function wa(a) {
        Ha && (Y.setAttribute("href", a), a = Y.href);
        Y.setAttribute("href", a);
        return {
            href: Y.href,
            protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "",
            host: Y.host,
            search: Y.search ? Y.search.replace(/^\?/, "") : "",
            hash: Y.hash ? Y.hash.replace(/^#/, "") : "",
            hostname: Y.hostname,
            port: Y.port,
            pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname
        };
    }
    function ed(a) {
        a = E(a) ? wa(a) : a;
        return a.protocol === wd.protocol && a.host === wd.host;
    }
    function vf() {
        this.$get = na(S);
    }
    function xd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
                return a;
            }
        }
        var d = a[0] || {}, c = {}, e = "";
        return function() {
            var a, g, h, k, l;
            a = d.cookie || "";
            if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], 
            k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), q(c[l]) && (c[l] = b(g.substring(k + 1))));
            return c;
        };
    }
    function zf() {
        this.$get = xd;
    }
    function Jc(a) {
        function b(d, c) {
            if (H(d)) {
                var e = {};
                n(d, function(a, c) {
                    e[c] = b(c, a);
                });
                return e;
            }
            return a.factory(d + "Filter", c);
        }
        this.register = b;
        this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter");
            };
        } ];
        b("currency", yd);
        b("date", zd);
        b("filter", bg);
        b("json", cg);
        b("limitTo", dg);
        b("lowercase", eg);
        b("number", Ad);
        b("orderBy", Bd);
        b("uppercase", fg);
    }
    function bg() {
        return function(a, b, d) {
            if (!za(a)) {
                if (null == a) return a;
                throw G("filter")("notarray", a);
            }
            var c;
            switch (hc(b)) {
              case "function":
                break;

              case "boolean":
              case "null":
              case "number":
              case "string":
                c = !0;

              case "object":
                b = gg(b, d, c);
                break;

              default:
                return a;
            }
            return Array.prototype.filter.call(a, b);
        };
    }
    function gg(a, b, d) {
        var c = H(a) && "$" in a;
        !0 === b ? b = ma : z(b) || (b = function(a, b) {
            if (q(a)) return !1;
            if (null === a || null === b) return a === b;
            if (H(b) || H(a) && !qc(a)) return !1;
            a = F("" + a);
            b = F("" + b);
            return -1 !== a.indexOf(b);
        });
        return function(e) {
            return c && !H(e) ? Ka(e, a.$, b, !1) : Ka(e, a, b, d);
        };
    }
    function Ka(a, b, d, c, e) {
        var f = hc(a), g = hc(b);
        if ("string" === g && "!" === b.charAt(0)) return !Ka(a, b.substring(1), d, c);
        if (I(a)) return a.some(function(a) {
            return Ka(a, b, d, c);
        });
        switch (f) {
          case "object":
            var h;
            if (c) {
                for (h in a) if ("$" !== h.charAt(0) && Ka(a[h], b, d, !0)) return !0;
                return e ? !1 : Ka(a, b, d, !1);
            }
            if ("object" === g) {
                for (h in b) if (e = b[h], !z(e) && !q(e) && (f = "$" === h, !Ka(f ? a : a[h], e, d, f, f))) return !1;
                return !0;
            }
            return d(a, b);

          case "function":
            return !1;

          default:
            return d(a, b);
        }
    }
    function hc(a) {
        return null === a ? "null" : typeof a;
    }
    function yd(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, e) {
            q(c) && (c = b.CURRENCY_SYM);
            q(e) && (e = b.PATTERNS[1].maxFrac);
            return null == a ? a : Cd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
        };
    }
    function Ad(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : Cd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function Cd(a, b, d, c, e) {
        if (H(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = Infinity === a;
        if (!g && !isFinite(a)) return "";
        var h = a + "", k = "", l = !1, m = [];
        g && (k = "∞");
        if (!g && -1 !== h.indexOf("e")) {
            var r = h.match(/([\d\.]+)e(-?)(\d+)/);
            r && "-" == r[2] && r[3] > e + 1 ? a = 0 : (k = h, l = !0);
        }
        if (g || l) 0 < e && 1 > a && (k = a.toFixed(e), a = parseFloat(k), k = k.replace(ic, c)); else {
            g = (h.split(ic)[1] || "").length;
            q(e) && (e = Math.min(Math.max(b.minFrac, g), b.maxFrac));
            a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + a).split(ic), h = g[0], g = g[1] || "", r = 0, t = b.lgSize, n = b.gSize;
            if (h.length >= t + n) for (r = h.length - t, l = 0; l < r; l++) 0 === (r - l) % n && 0 !== l && (k += d), 
            k += h.charAt(l);
            for (l = r; l < h.length; l++) 0 === (h.length - l) % t && 0 !== l && (k += d), 
            k += h.charAt(l);
            for (;g.length < e; ) g += "0";
            e && "0" !== e && (k += c + g.substr(0, e));
        }
        0 === a && (f = !1);
        m.push(f ? b.negPre : b.posPre, k, f ? b.negSuf : b.posSuf);
        return m.join("");
    }
    function Gb(a, b, d) {
        var c = "";
        0 > a && (c = "-", a = -a);
        for (a = "" + a; a.length < b; ) a = "0" + a;
        d && (a = a.substr(a.length - b));
        return c + a;
    }
    function ca(a, b, d, c) {
        d = d || 0;
        return function(e) {
            e = e["get" + a]();
            if (0 < d || e > -d) e += d;
            0 === e && -12 == d && (e = 12);
            return Gb(e, b, c);
        };
    }
    function Hb(a, b) {
        return function(d, c) {
            var e = d["get" + a](), f = sb(b ? "SHORT" + a : a);
            return c[f][e];
        };
    }
    function Dd(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b);
    }
    function Ed(a) {
        return function(b) {
            var d = Dd(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
            b = 1 + Math.round(b / 6048e5);
            return Gb(b, a);
        };
    }
    function jc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
    }
    function zd(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = ea(b[9] + b[10]), g = ea(b[9] + b[11]));
                h.call(a, ea(b[1]), ea(b[2]) - 1, ea(b[3]));
                f = ea(b[4] || 0) - f;
                g = ea(b[5] || 0) - g;
                h = ea(b[6] || 0);
                b = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, f, g, h, b);
            }
            return a;
        }
        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, f) {
            var g = "", h = [], k, l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            E(c) && (c = hg.test(c) ? ea(c) : b(c));
            Q(c) && (c = new Date(c));
            if (!da(c) || !isFinite(c.getTime())) return c;
            for (;d; ) (l = ig.exec(d)) ? (h = cb(h, l, 1), d = h.pop()) : (h.push(d), d = null);
            var m = c.getTimezoneOffset();
            f && (m = vc(f, c.getTimezoneOffset()), c = Pb(c, f, !0));
            n(h, function(b) {
                k = jg[b];
                g += k ? k(c, a.DATETIME_FORMATS, m) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return g;
        };
    }
    function cg() {
        return function(a, b) {
            q(b) && (b = 2);
            return db(a, b);
        };
    }
    function dg() {
        return function(a, b, d) {
            b = Infinity === Math.abs(Number(b)) ? Number(b) : ea(b);
            if (isNaN(b)) return a;
            Q(a) && (a = a.toString());
            if (!I(a) && !E(a)) return a;
            d = !d || isNaN(d) ? 0 : ea(d);
            d = 0 > d ? Math.max(0, a.length + d) : d;
            return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d);
        };
    }
    function Bd(a) {
        function b(b, d) {
            d = d ? -1 : 1;
            return b.map(function(b) {
                var c = 1, h = Ya;
                if (z(b)) h = b; else if (E(b)) {
                    if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);
                    if ("" !== b && (h = a(b), h.constant)) var k = h(), h = function(a) {
                        return a[k];
                    };
                }
                return {
                    get: h,
                    descending: c * d
                };
            });
        }
        function d(a) {
            switch (typeof a) {
              case "number":
              case "boolean":
              case "string":
                return !0;

              default:
                return !1;
            }
        }
        return function(a, e, f) {
            if (!za(a)) return a;
            I(e) || (e = [ e ]);
            0 === e.length && (e = [ "+" ]);
            var g = b(e, f);
            g.push({
                get: function() {
                    return {};
                },
                descending: f ? -1 : 1
            });
            a = Array.prototype.map.call(a, function(a, b) {
                return {
                    value: a,
                    predicateValues: g.map(function(c) {
                        var e = c.get(a);
                        c = typeof e;
                        if (null === e) c = "string", e = "null"; else if ("string" === c) e = e.toLowerCase(); else if ("object" === c) a: {
                            if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e))) break a;
                            if (qc(e) && (e = e.toString(), d(e))) break a;
                            e = b;
                        }
                        return {
                            value: e,
                            type: c
                        };
                    })
                };
            });
            a.sort(function(a, b) {
                for (var c = 0, d = 0, e = g.length; d < e; ++d) {
                    var c = a.predicateValues[d], f = b.predicateValues[d], n = 0;
                    c.type === f.type ? c.value !== f.value && (n = c.value < f.value ? -1 : 1) : n = c.type < f.type ? -1 : 1;
                    if (c = n * g[d].descending) break;
                }
                return c;
            });
            return a = a.map(function(a) {
                return a.value;
            });
        };
    }
    function La(a) {
        z(a) && (a = {
            link: a
        });
        a.restrict = a.restrict || "AC";
        return na(a);
    }
    function Fd(a, b, d, c, e) {
        var f = this, g = [];
        f.$error = {};
        f.$$success = {};
        f.$pending = u;
        f.$name = e(b.name || b.ngForm || "")(d);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        f.$$parentForm = Ib;
        f.$rollbackViewValue = function() {
            n(g, function(a) {
                a.$rollbackViewValue();
            });
        };
        f.$commitViewValue = function() {
            n(g, function(a) {
                a.$commitViewValue();
            });
        };
        f.$addControl = function(a) {
            Ra(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a);
            a.$$parentForm = f;
        };
        f.$$renameControl = function(a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b;
        };
        f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            n(f.$pending, function(b, c) {
                f.$setValidity(c, null, a);
            });
            n(f.$error, function(b, c) {
                f.$setValidity(c, null, a);
            });
            n(f.$$success, function(b, c) {
                f.$setValidity(c, null, a);
            });
            ab(g, a);
            a.$$parentForm = Ib;
        };
        Gd({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [ c ];
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (ab(d, c), 0 === d.length && delete a[b]);
            },
            $animate: c
        });
        f.$setDirty = function() {
            c.removeClass(a, Wa);
            c.addClass(a, Jb);
            f.$dirty = !0;
            f.$pristine = !1;
            f.$$parentForm.$setDirty();
        };
        f.$setPristine = function() {
            c.setClass(a, Wa, Jb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            n(g, function(a) {
                a.$setPristine();
            });
        };
        f.$setUntouched = function() {
            n(g, function(a) {
                a.$setUntouched();
            });
        };
        f.$setSubmitted = function() {
            c.addClass(a, "ng-submitted");
            f.$submitted = !0;
            f.$$parentForm.$setSubmitted();
        };
    }
    function kc(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString();
        });
    }
    function jb(a, b, d, c, e, f) {
        var g = F(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function(a) {
                h = !0;
            });
            b.on("compositionend", function() {
                h = !1;
                k();
            });
        }
        var k = function(a) {
            l && (f.defer.cancel(l), l = null);
            if (!h) {
                var e = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim || (e = U(e));
                (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
            }
        };
        if (e.hasEvent("input")) b.on("input", k); else {
            var l, m = function(a, b, c) {
                l || (l = f.defer(function() {
                    l = null;
                    b && b.value === c || k(a);
                }));
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
            });
            if (e.hasEvent("paste")) b.on("paste cut", m);
        }
        b.on("change", k);
        c.$render = function() {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a);
        };
    }
    function Kb(a, b) {
        return function(d, c) {
            var e, f;
            if (da(d)) return d;
            if (E(d)) {
                '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (kg.test(d)) return new Date(d);
                a.lastIndex = 0;
                if (e = a.exec(d)) return e.shift(), f = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, n(e, function(a, c) {
                    c < b.length && (f[b[c]] = +a);
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1e3 * f.sss || 0);
            }
            return NaN;
        };
    }
    function kb(a, b, d, c) {
        return function(e, f, g, h, k, l, m) {
            function r(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime());
            }
            function n(a) {
                return y(a) && !da(a) ? d(a) || u : a;
            }
            Hd(e, f, g, h);
            jb(e, f, g, h, k, l);
            var A = h && h.$options && h.$options.timezone, v;
            h.$$parserName = a;
            h.$parsers.push(function(a) {
                return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, v), A && (a = Pb(a, A)), a) : u;
            });
            h.$formatters.push(function(a) {
                if (a && !da(a)) throw lb("datefmt", a);
                if (r(a)) return (v = a) && A && (v = Pb(v, A, !0)), m("date")(a, c, A);
                v = null;
                return "";
            });
            if (y(g.min) || g.ngMin) {
                var s;
                h.$validators.min = function(a) {
                    return !r(a) || q(s) || d(a) >= s;
                };
                g.$observe("min", function(a) {
                    s = n(a);
                    h.$validate();
                });
            }
            if (y(g.max) || g.ngMax) {
                var p;
                h.$validators.max = function(a) {
                    return !r(a) || q(p) || d(a) <= p;
                };
                g.$observe("max", function(a) {
                    p = n(a);
                    h.$validate();
                });
            }
        };
    }
    function Hd(a, b, d, c) {
        (c.$$hasNativeValidators = H(b[0].validity)) && c.$parsers.push(function(a) {
            var c = b.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? u : a;
        });
    }
    function Id(a, b, d, c, e) {
        if (y(c)) {
            a = a(c);
            if (!a.constant) throw lb("constexpr", d, c);
            return a(b);
        }
        return e;
    }
    function lc(a, b) {
        a = "ngClass" + a;
        return [ "$animate", function(d) {
            function c(a, b) {
                var c = [], d = 0;
                a: for (;d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                var b = [];
                return I(a) ? (n(a, function(a) {
                    b = b.concat(e(a));
                }), b) : E(a) ? a.split(" ") : H(a) ? (n(a, function(a, c) {
                    a && (b = b.concat(c.split(" ")));
                }), b) : a;
            }
            return {
                restrict: "AC",
                link: function(f, g, h) {
                    function k(a, b) {
                        var c = g.data("$classCounts") || $(), d = [];
                        n(a, function(a) {
                            if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
                        });
                        g.data("$classCounts", c);
                        return d.join(" ");
                    }
                    function l(a) {
                        if (!0 === b || f.$index % 2 === b) {
                            var l = e(a || []);
                            if (!m) {
                                var n = k(l, 1);
                                h.$addClass(n);
                            } else if (!ma(a, m)) {
                                var q = e(m), n = c(l, q), l = c(q, l), n = k(n, 1), l = k(l, -1);
                                n && n.length && d.addClass(g, n);
                                l && l.length && d.removeClass(g, l);
                            }
                        }
                        m = ia(a);
                    }
                    var m;
                    f.$watch(h[a], l, !0);
                    h.$observe("class", function(b) {
                        l(f.$eval(h[a]));
                    });
                    "ngClass" !== a && f.$watch("$index", function(c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var l = e(f.$eval(h[a]));
                            g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g));
                        }
                    });
                }
            };
        } ];
    }
    function Gd(a) {
        function b(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), 
            f[a] = !1);
        }
        function d(a, c) {
            a = a ? "-" + zc(a, "-") : "";
            b(mb + a, !0 === c);
            b(Jd + a, !1 === c);
        }
        var c = a.ctrl, e = a.$element, f = {}, g = a.set, h = a.unset, k = a.$animate;
        f[Jd] = !(f[mb] = e.hasClass(mb));
        c.$setValidity = function(a, e, f) {
            q(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), 
            Kd(c.$pending) && (c.$pending = u));
            $a(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), 
            h(c.$$success, a, f));
            c.$pending ? (b(Ld, !0), c.$valid = c.$invalid = u, d("", null)) : (b(Ld, !1), c.$valid = Kd(c.$error), 
            c.$invalid = !c.$valid, d("", c.$valid));
            e = c.$pending && c.$pending[a] ? u : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
            d(a, e);
            c.$$parentForm.$setValidity(a, e, c);
        };
    }
    function Kd(a) {
        if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;
        return !0;
    }
    var lg = /^\/(.+)\/([a-z]*)$/, F = function(a) {
        return E(a) ? a.toLowerCase() : a;
    }, qa = Object.prototype.hasOwnProperty, sb = function(a) {
        return E(a) ? a.toUpperCase() : a;
    }, Ha, B, oa, ra = [].slice, Pf = [].splice, mg = [].push, sa = Object.prototype.toString, rc = Object.getPrototypeOf, Aa = G("ng"), fa = S.angular || (S.angular = {}), Sb, nb = 0;
    Ha = X.documentMode;
    x.$inject = [];
    Ya.$inject = [];
    var I = Array.isArray, Vd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, U = function(a) {
        return E(a) ? a.trim() : a;
    }, ud = function(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, Ba = function() {
        if (!y(Ba.rules)) {
            var a = X.querySelector("[ng-csp]") || X.querySelector("[data-ng-csp]");
            if (a) {
                var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                Ba.rules = {
                    noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                    noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                };
            } else {
                a = Ba;
                try {
                    new Function(""), b = !1;
                } catch (d) {
                    b = !0;
                }
                a.rules = {
                    noUnsafeEval: b,
                    noInlineStyle: !1
                };
            }
        }
        return Ba.rules;
    }, pb = function() {
        if (y(pb.name_)) return pb.name_;
        var a, b, d = Oa.length, c, e;
        for (b = 0; b < d; ++b) if (c = Oa[b], a = X.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
            e = a.getAttribute(c + "jq");
            break;
        }
        return pb.name_ = e;
    }, Oa = [ "ng-", "data-ng-", "ng:", "x-ng-" ], be = /[A-Z]/g, Ac = !1, Rb, Na = 3, fe = {
        full: "1.4.8",
        major: 1,
        minor: 4,
        dot: 8,
        codeName: "ice-manipulation"
    };
    N.expando = "ng339";
    var gb = N.cache = {}, Ff = 1;
    N._data = function(a) {
        return this.cache[a[this.expando]] || {};
    };
    var Af = /([\:\-\_]+(.))/g, Bf = /^moz([A-Z])/, xb = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Ub = G("jqLite"), Ef = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Tb = /<|&#?\w+;/, Cf = /<([\w:-]+)/, Df = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ka = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ka.optgroup = ka.option;
    ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;
    ka.th = ka.td;
    var Kf = Node.prototype.contains || function(a) {
        return !!(this.compareDocumentPosition(a) & 16);
    }, Pa = N.prototype = {
        ready: function(a) {
            function b() {
                d || (d = !0, a());
            }
            var d = !1;
            "complete" === X.readyState ? setTimeout(b) : (this.on("DOMContentLoaded", b), N(S).on("load", b));
        },
        toString: function() {
            var a = [];
            n(this, function(b) {
                a.push("" + b);
            });
            return "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return 0 <= a ? B(this[a]) : B(this[this.length + a]);
        },
        length: 0,
        push: mg,
        sort: [].sort,
        splice: [].splice
    }, Cb = {};
    n("multiple selected checked disabled readOnly required open".split(" "), function(a) {
        Cb[F(a)] = a;
    });
    var Rc = {};
    n("input select option textarea button form details".split(" "), function(a) {
        Rc[a] = !0;
    });
    var Zc = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    n({
        data: Wb,
        removeData: vb,
        hasData: function(a) {
            for (var b in gb[a.ng339]) return !0;
            return !1;
        }
    }, function(a, b) {
        N[b] = a;
    });
    n({
        data: Wb,
        inheritedData: Bb,
        scope: function(a) {
            return B.data(a, "$scope") || Bb(a.parentNode || a, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(a) {
            return B.data(a, "$isolateScope") || B.data(a, "$isolateScopeNoTemplate");
        },
        controller: Oc,
        injector: function(a) {
            return Bb(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: yb,
        css: function(a, b, d) {
            b = fb(b);
            if (y(d)) a.style[b] = d; else return a.style[b];
        },
        attr: function(a, b, d) {
            var c = a.nodeType;
            if (c !== Na && 2 !== c && 8 !== c) if (c = F(b), Cb[c]) if (y(d)) d ? (a[b] = !0, 
            a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c)); else return a[b] || (a.attributes.getNamedItem(b) || x).specified ? c : u; else if (y(d)) a.setAttribute(b, d); else if (a.getAttribute) return a = a.getAttribute(b, 2), 
            null === a ? u : a;
        },
        prop: function(a, b, d) {
            if (y(d)) a[b] = d; else return a[b];
        },
        text: function() {
            function a(a, d) {
                if (q(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Na ? a.textContent : "";
                }
                a.textContent = d;
            }
            a.$dv = "";
            return a;
        }(),
        val: function(a, b) {
            if (q(b)) {
                if (a.multiple && "select" === ta(a)) {
                    var d = [];
                    n(a.options, function(a) {
                        a.selected && d.push(a.value || a.text);
                    });
                    return 0 === d.length ? null : d;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            if (q(b)) return a.innerHTML;
            ub(a, !0);
            a.innerHTML = b;
        },
        empty: Pc
    }, function(a, b) {
        N.prototype[b] = function(b, c) {
            var e, f, g = this.length;
            if (a !== Pc && q(2 == a.length && a !== yb && a !== Oc ? b : c)) {
                if (H(b)) {
                    for (e = 0; e < g; e++) if (a === Wb) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                    return this;
                }
                e = a.$dv;
                g = q(e) ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = a(this[f], b, c);
                    e = e ? e + h : h;
                }
                return e;
            }
            for (e = 0; e < g; e++) a(this[e], b, c);
            return this;
        };
    });
    n({
        removeData: vb,
        on: function(a, b, d, c) {
            if (y(c)) throw Ub("onargs");
            if (Kc(a)) {
                c = wb(a, !0);
                var e = c.events, f = c.handle;
                f || (f = c.handle = Hf(a, e));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [ b ];
                for (var g = c.length, h = function(b, c, g) {
                    var h = e[b];
                    h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));
                    h.push(d);
                }; g--; ) b = c[g], xb[b] ? (h(xb[b], Jf), h(b, u, !0)) : h(b);
            }
        },
        off: Nc,
        one: function(a, b, d) {
            a = B(a);
            a.on(b, function e() {
                a.off(b, d);
                a.off(b, e);
            });
            a.on(b, d);
        },
        replaceWith: function(a, b) {
            var d, c = a.parentNode;
            ub(a);
            n(new N(b), function(b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b;
            });
        },
        children: function(a) {
            var b = [];
            n(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a);
            });
            return b;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new N(b);
                for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d]);
            }
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                n(new N(b), function(b) {
                    a.insertBefore(b, d);
                });
            }
        },
        wrap: function(a, b) {
            b = B(b).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(b, a);
            b.appendChild(a);
        },
        remove: Xb,
        detach: function(a) {
            Xb(a, !0);
        },
        after: function(a, b) {
            var d = a, c = a.parentNode;
            b = new N(b);
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e];
                c.insertBefore(g, d.nextSibling);
                d = g;
            }
        },
        addClass: Ab,
        removeClass: zb,
        toggleClass: function(a, b, d) {
            b && n(b.split(" "), function(b) {
                var e = d;
                q(e) && (e = !yb(a, b));
                (e ? Ab : zb)(a, b);
            });
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
            return a.nextElementSibling;
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        },
        clone: Vb,
        triggerHandler: function(a, b, d) {
            var c, e, f = b.type || b, g = wb(a);
            if (g = (g = g && g.events) && g[f]) c = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped;
                },
                stopPropagation: x,
                type: f,
                target: a
            }, b.type && (c = M(c, b)), b = ia(g), e = d ? [ c ].concat(d) : [ c ], n(b, function(b) {
                c.isImmediatePropagationStopped() || b.apply(a, e);
            });
        }
    }, function(a, b) {
        N.prototype[b] = function(b, c, e) {
            for (var f, g = 0, h = this.length; g < h; g++) q(f) ? (f = a(this[g], b, c, e), 
            y(f) && (f = B(f))) : Mc(f, a(this[g], b, c, e));
            return y(f) ? f : this;
        };
        N.prototype.bind = N.prototype.on;
        N.prototype.unbind = N.prototype.off;
    });
    Sa.prototype = {
        put: function(a, b) {
            this[Ca(a, this.nextUid)] = b;
        },
        get: function(a) {
            return this[Ca(a, this.nextUid)];
        },
        remove: function(a) {
            var b = this[a = Ca(a, this.nextUid)];
            delete this[a];
            return b;
        }
    };
    var yf = [ function() {
        this.$get = [ function() {
            return Sa;
        } ];
    } ], Tc = /^[^\(]*\(\s*([^\)]*)\)/m, ng = /,/, og = /^\s*(_?)(\S+?)\1\s*$/, Sc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Da = G("$injector");
    eb.$$annotate = function(a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b) throw E(d) && d || (d = a.name || Lf(a)), Da("strictdi", d);
                    b = a.toString().replace(Sc, "");
                    b = b.match(Tc);
                    n(b[1].split(ng), function(a) {
                        a.replace(og, function(a, b, d) {
                            c.push(d);
                        });
                    });
                }
                a.$inject = c;
            }
        } else I(a) ? (b = a.length - 1, Qa(a[b], "fn"), c = a.slice(0, b)) : Qa(a, "fn", !0);
        return c;
    };
    var Md = G("$animate"), Ue = function() {
        this.$get = [ "$q", "$$rAF", function(a, b) {
            function d() {}
            d.all = x;
            d.chain = x;
            d.prototype = {
                end: x,
                cancel: x,
                resume: x,
                pause: x,
                complete: x,
                then: function(c, d) {
                    return a(function(a) {
                        b(function() {
                            a();
                        });
                    }).then(c, d);
                }
            };
            return d;
        } ];
    }, Te = function() {
        var a = new Sa(), b = [];
        this.$get = [ "$$AnimateRunner", "$rootScope", function(d, c) {
            function e(a, b, c) {
                var d = !1;
                b && (b = E(b) ? b.split(" ") : I(b) ? b : [], n(b, function(b) {
                    b && (d = !0, a[b] = c);
                }));
                return d;
            }
            function f() {
                n(b, function(b) {
                    var c = a.get(b);
                    if (c) {
                        var d = Mf(b.attr("class")), e = "", f = "";
                        n(c, function(a, b) {
                            a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
                        });
                        n(b, function(a) {
                            e && Ab(a, e);
                            f && zb(a, f);
                        });
                        a.remove(b);
                    }
                });
                b.length = 0;
            }
            return {
                enabled: x,
                on: x,
                off: x,
                pin: x,
                push: function(g, h, k, l) {
                    l && l();
                    k = k || {};
                    k.from && g.css(k.from);
                    k.to && g.css(k.to);
                    if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, 
                    h = e(k, h, !0), l = e(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
                    return new d();
                }
            };
        } ];
    }, Re = [ "$provide", function(a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null);
        this.register = function(d, c) {
            if (d && "." !== d.charAt(0)) throw Md("notcsel", d);
            var e = d + "-animation";
            b.$$registeredAnimations[d.substr(1)] = e;
            a.factory(e, c);
        };
        this.classNameFilter = function(a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Md("nongcls", "ng-animate");
            return this.$$classNameFilter;
        };
        this.$get = [ "$$animateQueue", function(a) {
            function b(a, c, d) {
                if (d) {
                    var h;
                    a: {
                        for (h = 0; h < d.length; h++) {
                            var k = d[h];
                            if (1 === k.nodeType) {
                                h = k;
                                break a;
                            }
                        }
                        h = void 0;
                    }
                    !h || h.parentNode || h.previousElementSibling || (d = null);
                }
                d ? d.after(a) : c.prepend(a);
            }
            return {
                on: a.on,
                off: a.off,
                pin: a.pin,
                enabled: a.enabled,
                cancel: function(a) {
                    a.end && a.end();
                },
                enter: function(e, f, g, h) {
                    f = f && B(f);
                    g = g && B(g);
                    f = f || g.parent();
                    b(e, f, g);
                    return a.push(e, "enter", Ea(h));
                },
                move: function(e, f, g, h) {
                    f = f && B(f);
                    g = g && B(g);
                    f = f || g.parent();
                    b(e, f, g);
                    return a.push(e, "move", Ea(h));
                },
                leave: function(b, c) {
                    return a.push(b, "leave", Ea(c), function() {
                        b.remove();
                    });
                },
                addClass: function(b, c, g) {
                    g = Ea(g);
                    g.addClass = hb(g.addclass, c);
                    return a.push(b, "addClass", g);
                },
                removeClass: function(b, c, g) {
                    g = Ea(g);
                    g.removeClass = hb(g.removeClass, c);
                    return a.push(b, "removeClass", g);
                },
                setClass: function(b, c, g, h) {
                    h = Ea(h);
                    h.addClass = hb(h.addClass, c);
                    h.removeClass = hb(h.removeClass, g);
                    return a.push(b, "setClass", h);
                },
                animate: function(b, c, g, h, k) {
                    k = Ea(k);
                    k.from = k.from ? M(k.from, c) : c;
                    k.to = k.to ? M(k.to, g) : g;
                    k.tempClasses = hb(k.tempClasses, h || "ng-inline-animate");
                    return a.push(b, "animate", k);
                }
            };
        } ];
    } ], Se = function() {
        this.$get = [ "$$rAF", "$q", function(a, b) {
            var d = function() {};
            d.prototype = {
                done: function(a) {
                    this.defer && this.defer[!0 === a ? "reject" : "resolve"]();
                },
                end: function() {
                    this.done();
                },
                cancel: function() {
                    this.done(!0);
                },
                getPromise: function() {
                    this.defer || (this.defer = b.defer());
                    return this.defer.promise;
                },
                then: function(a, b) {
                    return this.getPromise().then(a, b);
                },
                "catch": function(a) {
                    return this.getPromise()["catch"](a);
                },
                "finally": function(a) {
                    return this.getPromise()["finally"](a);
                }
            };
            return function(b, e) {
                function f() {
                    a(function() {
                        e.addClass && (b.addClass(e.addClass), e.addClass = null);
                        e.removeClass && (b.removeClass(e.removeClass), e.removeClass = null);
                        e.to && (b.css(e.to), e.to = null);
                        g || h.done();
                        g = !0;
                    });
                    return h;
                }
                e.cleanupStyles && (e.from = e.to = null);
                e.from && (b.css(e.from), e.from = null);
                var g, h = new d();
                return {
                    start: f,
                    end: f
                };
            };
        } ];
    }, ha = G("$compile");
    Cc.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Vc = /^((?:x|data)[\:\-_])/i, Qf = G("$controller"), Uc = /^(\S+)(\s+as\s+(\w+))?$/, $e = function() {
        this.$get = [ "$document", function(a) {
            return function(b) {
                b ? !b.nodeType && b instanceof B && (b = b[0]) : b = a[0].body;
                return b.offsetWidth + 1;
            };
        } ];
    }, $c = "application/json", ac = {
        "Content-Type": $c + ";charset=utf-8"
    }, Sf = /^\[|^\{(?!\{)/, Tf = {
        "[": /]$/,
        "{": /}$/
    }, Rf = /^\)\]\}',?\n/, pg = G("$http"), dd = function(a) {
        return function() {
            throw pg("legacy", a);
        };
    }, Ja = fa.$interpolateMinErr = G("$interpolate");
    Ja.throwNoconcat = function(a) {
        throw Ja("noconcat", a);
    };
    Ja.interr = function(a, b) {
        return Ja("interr", a, b.toString());
    };
    var qg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Vf = {
        http: 80,
        https: 443,
        ftp: 21
    }, Db = G("$location"), rg = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Eb("$$absUrl"),
        url: function(a) {
            if (q(a)) return this.$$url;
            var b = qg.exec(a);
            (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
            (b[2] || b[1] || "" === a) && this.search(b[3] || "");
            this.hash(b[5] || "");
            return this;
        },
        protocol: Eb("$$protocol"),
        host: Eb("$$host"),
        port: Eb("$$port"),
        path: id("$$path", function(a) {
            a = null !== a ? a.toString() : "";
            return "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (E(a) || Q(a)) a = a.toString(), this.$$search = xc(a); else if (H(a)) a = bb(a, {}), 
                n(a, function(b, c) {
                    null == b && delete a[c];
                }), this.$$search = a; else throw Db("isrcharg");
                break;

              default:
                q(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            this.$$compose();
            return this;
        },
        hash: id("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            this.$$replace = !0;
            return this;
        }
    };
    n([ hd, dc, cc ], function(a) {
        a.prototype = Object.create(rg);
        a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== cc || !this.$$html5) throw Db("nostate");
            this.$$state = q(b) ? null : b;
            return this;
        };
    });
    var ba = G("$parse"), Wf = Function.prototype.call, Xf = Function.prototype.apply, Yf = Function.prototype.bind, Lb = $();
    n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        Lb[a] = !0;
    });
    var sg = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "\x0B",
        "'": "'",
        '"': '"'
    }, fc = function(a) {
        this.options = a;
    };
    fc.prototype = {
        constructor: fc,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length; ) if (a = this.text.charAt(this.index), 
            '"' === a || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(a)) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a)) this.index++; else {
                var b = a + this.peek(), d = b + this.peek(2), c = Lb[b], e = Lb[d];
                Lb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
            }
            return this.tokens;
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a);
        },
        peek: function(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a && "string" === typeof a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "\x0B" === a || " " === a;
        },
        isIdent: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, b, d) {
            d = d || this.index;
            b = y(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
            throw ba("lexerr", a, b, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var d = F(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d; else {
                    var c = this.peek();
                    if ("e" == d && this.isExpOperator(c)) a += d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d; else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break; else this.throwError("Invalid exponent");
                }
                this.index++;
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            });
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length; ) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b)) break;
                this.index++;
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            });
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, e = !1; this.index < this.text.length; ) {
                var f = this.text.charAt(this.index), c = c + f;
                if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), 
                this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += sg[f] || f, e = !1; else if ("\\" === f) e = !0; else {
                    if (f === a) {
                        this.index++;
                        this.tokens.push({
                            index: b,
                            text: c,
                            constant: !0,
                            value: d
                        });
                        return;
                    }
                    d += f;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var s = function(a, b) {
        this.lexer = a;
        this.options = b;
    };
    s.Program = "Program";
    s.ExpressionStatement = "ExpressionStatement";
    s.AssignmentExpression = "AssignmentExpression";
    s.ConditionalExpression = "ConditionalExpression";
    s.LogicalExpression = "LogicalExpression";
    s.BinaryExpression = "BinaryExpression";
    s.UnaryExpression = "UnaryExpression";
    s.CallExpression = "CallExpression";
    s.MemberExpression = "MemberExpression";
    s.Identifier = "Identifier";
    s.Literal = "Literal";
    s.ArrayExpression = "ArrayExpression";
    s.Property = "Property";
    s.ObjectExpression = "ObjectExpression";
    s.ThisExpression = "ThisExpression";
    s.NGValueParameter = "NGValueParameter";
    s.prototype = {
        ast: function(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a;
        },
        program: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), 
            !this.expect(";")) return {
                type: s.Program,
                body: a
            };
        },
        expressionStatement: function() {
            return {
                type: s.ExpressionStatement,
                expression: this.filterChain()
            };
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|"); ) a = this.filter(a);
            return a;
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a = this.ternary();
            this.expect("=") && (a = {
                type: s.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            });
            return a;
        },
        ternary: function() {
            var a = this.logicalOR(), b, d;
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), 
            {
                type: s.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a;
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||"); ) a = {
                type: s.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a;
        },
        logicalAND: function() {
            for (var a = this.equality(); this.expect("&&"); ) a = {
                type: s.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a;
        },
        equality: function() {
            for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!=="); ) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a;
        },
        relational: function() {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">="); ) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.additive()
            };
            return a;
        },
        additive: function() {
            for (var a = this.multiplicative(), b; b = this.expect("+", "-"); ) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a;
        },
        multiplicative: function() {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%"); ) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a;
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: s.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary();
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = bb(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", "."); ) "(" === b.text ? (a = {
                type: s.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: s.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: s.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a;
        },
        filter: function(a) {
            a = [ a ];
            for (var b = {
                type: s.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":"); ) a.push(this.expression());
            return b;
        },
        parseArguments: function() {
            var a = [];
            if (")" !== this.peekToken().text) {
                do a.push(this.expression()); while (this.expect(","));
            }
            return a;
        },
        identifier: function() {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier", a);
            return {
                type: s.Identifier,
                name: a.text
            };
        },
        constant: function() {
            return {
                type: s.Literal,
                value: this.consume().value
            };
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression());
                } while (this.expect(","));
            }
            this.consume("]");
            return {
                type: s.ArrayExpression,
                elements: a
            };
        },
        object: function() {
            var a = [], b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    b = {
                        type: s.Property,
                        kind: "init"
                    };
                    this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());
                    this.consume(":");
                    b.value = this.expression();
                    a.push(b);
                } while (this.expect(","));
            }
            this.consume("}");
            return {
                type: s.ObjectExpression,
                properties: a
            };
        },
        throwError: function(a, b) {
            throw ba("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw ba("ueoe", this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return b;
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ba("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, d, c) {
            return this.peekAhead(0, a, b, d, c);
        },
        peekAhead: function(a, b, d, c, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
            }
            return !1;
        },
        expect: function(a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
        },
        constants: {
            "true": {
                type: s.Literal,
                value: !0
            },
            "false": {
                type: s.Literal,
                value: !1
            },
            "null": {
                type: s.Literal,
                value: null
            },
            undefined: {
                type: s.Literal,
                value: u
            },
            "this": {
                type: s.ThisExpression
            }
        }
    };
    rd.prototype = {
        compile: function(a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            };
            W(c, d.$filter);
            var e = "", f;
            this.stage = "assign";
            if (f = pd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), 
            this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            f = nd(c.body);
            d.stage = "inputs";
            n(f, function(a, b) {
                var c = "fn" + b;
                d.state[c] = {
                    vars: [],
                    body: [],
                    own: {}
                };
                d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e);
                d.return_(e);
                d.state.inputs.push(c);
                a.watchId = b;
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(c);
            e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
            e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Va, xa, kd, jd, ld, Zf, md, a);
            this.state = this.stage = u;
            e.literal = qd(c);
            e.constant = c.constant;
            return e;
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var a = [], b = this.state.inputs, d = this;
            n(b, function(b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"));
            });
            b.length && a.push("fn.inputs=[" + b.join(",") + "];");
            return a.join("");
        },
        generateFunction: function(a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
        },
        filterPrefix: function() {
            var a = [], b = this;
            n(this.state.filters, function(d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")");
            });
            return a.length ? "var " + a.join(",") + ";" : "";
        },
        varsPrefix: function(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
        },
        body: function(a) {
            return this.state[a].body.join("");
        },
        recurse: function(a, b, d, c, e, f) {
            var g, h, k = this, l, m;
            c = c || x;
            if (!f && y(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0)); else switch (a.type) {
              case s.Program:
                n(a.body, function(b, c) {
                    k.recurse(b.expression, u, u, function(a) {
                        h = a;
                    });
                    c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
                });
                break;

              case s.Literal:
                m = this.escape(a.value);
                this.assign(b, m);
                c(m);
                break;

              case s.UnaryExpression:
                this.recurse(a.argument, u, u, function(a) {
                    h = a;
                });
                m = a.operator + "(" + this.ifDefined(h, 0) + ")";
                this.assign(b, m);
                c(m);
                break;

              case s.BinaryExpression:
                this.recurse(a.left, u, u, function(a) {
                    g = a;
                });
                this.recurse(a.right, u, u, function(a) {
                    h = a;
                });
                m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
                this.assign(b, m);
                c(m);
                break;

              case s.LogicalExpression:
                b = b || this.nextId();
                k.recurse(a.left, b);
                k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                c(b);
                break;

              case s.ConditionalExpression:
                b = b || this.nextId();
                k.recurse(a.test, b);
                k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                c(b);
                break;

              case s.Identifier:
                b = b || this.nextId();
                d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), 
                d.computed = !1, d.name = a.name);
                Va(a.name);
                k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function() {
                    k.if_("inputs" === k.stage || "s", function() {
                        e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                        k.assign(b, k.nonComputedMember("s", a.name));
                    });
                }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
                (k.state.expensiveChecks || Fb(a.name)) && k.addEnsureSafeObject(b);
                c(b);
                break;

              case s.MemberExpression:
                g = d && (d.context = this.nextId()) || this.nextId();
                b = b || this.nextId();
                k.recurse(a.object, g, u, function() {
                    k.if_(k.notNull(g), function() {
                        if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), 
                        e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), 
                        m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, 
                        d.name = h); else {
                            Va(a.property.name);
                            e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));
                            m = k.nonComputedMember(g, a.property.name);
                            if (k.state.expensiveChecks || Fb(a.property.name)) m = k.ensureSafeObject(m);
                            k.assign(b, m);
                            d && (d.computed = !1, d.name = a.property.name);
                        }
                    }, function() {
                        k.assign(b, "undefined");
                    });
                    c(b);
                }, !!e);
                break;

              case s.CallExpression:
                b = b || this.nextId();
                a.filter ? (h = k.filter(a.callee.name), l = [], n(a.arguments, function(a) {
                    var b = k.nextId();
                    k.recurse(a, b);
                    l.push(b);
                }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, 
                l = [], k.recurse(a.callee, h, g, function() {
                    k.if_(k.notNull(h), function() {
                        k.addEnsureSafeFunction(h);
                        n(a.arguments, function(a) {
                            k.recurse(a, k.nextId(), u, function(a) {
                                l.push(k.ensureSafeObject(a));
                            });
                        });
                        g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
                        m = k.ensureSafeObject(m);
                        k.assign(b, m);
                    }, function() {
                        k.assign(b, "undefined");
                    });
                    c(b);
                }));
                break;

              case s.AssignmentExpression:
                h = this.nextId();
                g = {};
                if (!od(a.left)) throw ba("lval");
                this.recurse(a.left, u, g, function() {
                    k.if_(k.notNull(g.context), function() {
                        k.recurse(a.right, h);
                        k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
                        k.addEnsureSafeAssignContext(g.context);
                        m = k.member(g.context, g.name, g.computed) + a.operator + h;
                        k.assign(b, m);
                        c(b || m);
                    });
                }, 1);
                break;

              case s.ArrayExpression:
                l = [];
                n(a.elements, function(a) {
                    k.recurse(a, k.nextId(), u, function(a) {
                        l.push(a);
                    });
                });
                m = "[" + l.join(",") + "]";
                this.assign(b, m);
                c(m);
                break;

              case s.ObjectExpression:
                l = [];
                n(a.properties, function(a) {
                    k.recurse(a.value, k.nextId(), u, function(b) {
                        l.push(k.escape(a.key.type === s.Identifier ? a.key.name : "" + a.key.value) + ":" + b);
                    });
                });
                m = "{" + l.join(",") + "}";
                this.assign(b, m);
                c(m);
                break;

              case s.ThisExpression:
                this.assign(b, "s");
                c("s");
                break;

              case s.NGValueParameter:
                this.assign(b, "v"), c("v");
            }
        },
        getHasOwnProperty: function(a, b) {
            var d = a + "." + b, c = this.current().own;
            c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
            return c[d];
        },
        assign: function(a, b) {
            if (a) return this.current().body.push(a, "=", b, ";"), a;
        },
        filter: function(a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
            return this.state.filters[a];
        },
        ifDefined: function(a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")";
        },
        plus: function(a, b) {
            return "plus(" + a + "," + b + ")";
        },
        return_: function(a) {
            this.current().body.push("return ", a, ";");
        },
        if_: function(a, b, d) {
            if (!0 === a) b(); else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"), d(), c.push("}"));
            }
        },
        not: function(a) {
            return "!(" + a + ")";
        },
        notNull: function(a) {
            return a + "!=null";
        },
        nonComputedMember: function(a, b) {
            return a + "." + b;
        },
        computedMember: function(a, b) {
            return a + "[" + b + "]";
        },
        member: function(a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
        },
        addEnsureSafeObject: function(a) {
            this.current().body.push(this.ensureSafeObject(a), ";");
        },
        addEnsureSafeMemberName: function(a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";");
        },
        addEnsureSafeFunction: function(a) {
            this.current().body.push(this.ensureSafeFunction(a), ";");
        },
        addEnsureSafeAssignContext: function(a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";");
        },
        ensureSafeObject: function(a) {
            return "ensureSafeObject(" + a + ",text)";
        },
        ensureSafeMemberName: function(a) {
            return "ensureSafeMemberName(" + a + ",text)";
        },
        ensureSafeFunction: function(a) {
            return "ensureSafeFunction(" + a + ",text)";
        },
        getStringValue: function(a) {
            this.assign(a, "getStringValue(" + a + ",text)");
        },
        ensureSafeAssignContext: function(a) {
            return "ensureSafeAssignContext(" + a + ",text)";
        },
        lazyRecurse: function(a, b, d, c, e, f) {
            var g = this;
            return function() {
                g.recurse(a, b, d, c, e, f);
            };
        },
        lazyAssign: function(a, b) {
            var d = this;
            return function() {
                d.assign(a, b);
            };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(a) {
            if (E(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (Q(a)) return a.toString();
            if (!0 === a) return "true";
            if (!1 === a) return "false";
            if (null === a) return "null";
            if ("undefined" === typeof a) return "undefined";
            throw ba("esc");
        },
        nextId: function(a, b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d;
        },
        current: function() {
            return this.state[this.state.computing];
        }
    };
    sd.prototype = {
        compile: function(a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.expression = a;
            this.expensiveChecks = b;
            W(c, d.$filter);
            var e, f;
            if (e = pd(c)) f = this.recurse(e);
            e = nd(c.body);
            var g;
            e && (g = [], n(e, function(a, b) {
                var c = d.recurse(a);
                a.input = c;
                g.push(c);
                a.watchId = b;
            }));
            var h = [];
            n(c.body, function(a) {
                h.push(d.recurse(a.expression));
            });
            e = 0 === c.body.length ? function() {} : 1 === c.body.length ? h[0] : function(a, b) {
                var c;
                n(h, function(d) {
                    c = d(a, b);
                });
                return c;
            };
            f && (e.assign = function(a, b, c) {
                return f(a, c, b);
            });
            g && (e.inputs = g);
            e.literal = qd(c);
            e.constant = c.constant;
            return e;
        },
        recurse: function(a, b, d) {
            var c, e, f = this, g;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
              case s.Literal:
                return this.value(a.value, b);

              case s.UnaryExpression:
                return e = this.recurse(a.argument), this["unary" + a.operator](e, b);

              case s.BinaryExpression:
                return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);

              case s.LogicalExpression:
                return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);

              case s.ConditionalExpression:
                return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);

              case s.Identifier:
                return Va(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Fb(a.name), b, d, f.expression);

              case s.MemberExpression:
                return c = this.recurse(a.object, !1, !!d), a.computed || (Va(a.property.name, f.expression), 
                e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);

              case s.CallExpression:
                return g = [], n(a.arguments, function(a) {
                    g.push(f.recurse(a));
                }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), 
                a.filter ? function(a, c, d, f) {
                    for (var r = [], n = 0; n < g.length; ++n) r.push(g[n](a, c, d, f));
                    a = e.apply(u, r, f);
                    return b ? {
                        context: u,
                        name: u,
                        value: a
                    } : a;
                } : function(a, c, d, m) {
                    var r = e(a, c, d, m), n;
                    if (null != r.value) {
                        xa(r.context, f.expression);
                        kd(r.value, f.expression);
                        n = [];
                        for (var q = 0; q < g.length; ++q) n.push(xa(g[q](a, c, d, m), f.expression));
                        n = xa(r.value.apply(r.context, n), f.expression);
                    }
                    return b ? {
                        value: n
                    } : n;
                };

              case s.AssignmentExpression:
                return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function(a, d, g, m) {
                    var n = c(a, d, g, m);
                    a = e(a, d, g, m);
                    xa(n.value, f.expression);
                    ld(n.context);
                    n.context[n.name] = a;
                    return b ? {
                        value: a
                    } : a;
                };

              case s.ArrayExpression:
                return g = [], n(a.elements, function(a) {
                    g.push(f.recurse(a));
                }), function(a, c, d, e) {
                    for (var f = [], n = 0; n < g.length; ++n) f.push(g[n](a, c, d, e));
                    return b ? {
                        value: f
                    } : f;
                };

              case s.ObjectExpression:
                return g = [], n(a.properties, function(a) {
                    g.push({
                        key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
                        value: f.recurse(a.value)
                    });
                }), function(a, c, d, e) {
                    for (var f = {}, n = 0; n < g.length; ++n) f[g[n].key] = g[n].value(a, c, d, e);
                    return b ? {
                        value: f
                    } : f;
                };

              case s.ThisExpression:
                return function(a) {
                    return b ? {
                        value: a
                    } : a;
                };

              case s.NGValueParameter:
                return function(a, c, d, e) {
                    return b ? {
                        value: d
                    } : d;
                };
            }
        },
        "unary+": function(a, b) {
            return function(d, c, e, f) {
                d = a(d, c, e, f);
                d = y(d) ? +d : 0;
                return b ? {
                    value: d
                } : d;
            };
        },
        "unary-": function(a, b) {
            return function(d, c, e, f) {
                d = a(d, c, e, f);
                d = y(d) ? -d : 0;
                return b ? {
                    value: d
                } : d;
            };
        },
        "unary!": function(a, b) {
            return function(d, c, e, f) {
                d = !a(d, c, e, f);
                return b ? {
                    value: d
                } : d;
            };
        },
        "binary+": function(a, b, d) {
            return function(c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = md(h, c);
                return d ? {
                    value: h
                } : h;
            };
        },
        "binary-": function(a, b, d) {
            return function(c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = (y(h) ? h : 0) - (y(c) ? c : 0);
                return d ? {
                    value: h
                } : h;
            };
        },
        "binary*": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) * b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary/": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) / b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary%": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) % b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary===": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) === b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary!==": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) !== b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary==": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) == b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary!=": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) != b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary<": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) < b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary>": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) > b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary<=": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) <= b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary>=": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) >= b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary&&": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) && b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "binary||": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) || b(c, e, f, g);
                return d ? {
                    value: c
                } : c;
            };
        },
        "ternary?:": function(a, b, d, c) {
            return function(e, f, g, h) {
                e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
                return c ? {
                    value: e
                } : e;
            };
        },
        value: function(a, b) {
            return function() {
                return b ? {
                    context: u,
                    name: u,
                    value: a
                } : a;
            };
        },
        identifier: function(a, b, d, c, e) {
            return function(f, g, h, k) {
                f = g && a in g ? g : f;
                c && 1 !== c && f && !f[a] && (f[a] = {});
                g = f ? f[a] : u;
                b && xa(g, e);
                return d ? {
                    context: f,
                    name: a,
                    value: g
                } : g;
            };
        },
        computedMember: function(a, b, d, c, e) {
            return function(f, g, h, k) {
                var l = a(f, g, h, k), m, n;
                null != l && (m = b(f, g, h, k), m = jd(m), Va(m, e), c && 1 !== c && l && !l[m] && (l[m] = {}), 
                n = l[m], xa(n, e));
                return d ? {
                    context: l,
                    name: m,
                    value: n
                } : n;
            };
        },
        nonComputedMember: function(a, b, d, c, e, f) {
            return function(g, h, k, l) {
                g = a(g, h, k, l);
                e && 1 !== e && g && !g[b] && (g[b] = {});
                h = null != g ? g[b] : u;
                (d || Fb(b)) && xa(h, f);
                return c ? {
                    context: g,
                    name: b,
                    value: h
                } : h;
            };
        },
        inputs: function(a, b) {
            return function(d, c, e, f) {
                return f ? f[b] : a(d, c, e);
            };
        }
    };
    var gc = function(a, b, d) {
        this.lexer = a;
        this.$filter = b;
        this.options = d;
        this.ast = new s(this.lexer);
        this.astCompiler = d.csp ? new sd(this.ast, b) : new rd(this.ast, b);
    };
    gc.prototype = {
        constructor: gc,
        parse: function(a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks);
        }
    };
    $();
    $();
    var $f = Object.prototype.valueOf, ya = G("$sce"), la = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, ha = G("$compile"), Y = X.createElement("a"), wd = wa(S.location.href);
    xd.$inject = [ "$document" ];
    Jc.$inject = [ "$provide" ];
    yd.$inject = [ "$locale" ];
    Ad.$inject = [ "$locale" ];
    var ic = ".", jg = {
        yyyy: ca("FullYear", 4),
        yy: ca("FullYear", 2, 0, !0),
        y: ca("FullYear", 1),
        MMMM: Hb("Month"),
        MMM: Hb("Month", !0),
        MM: ca("Month", 2, 1),
        M: ca("Month", 1, 1),
        dd: ca("Date", 2),
        d: ca("Date", 1),
        HH: ca("Hours", 2),
        H: ca("Hours", 1),
        hh: ca("Hours", 2, -12),
        h: ca("Hours", 1, -12),
        mm: ca("Minutes", 2),
        m: ca("Minutes", 1),
        ss: ca("Seconds", 2),
        s: ca("Seconds", 1),
        sss: ca("Milliseconds", 3),
        EEEE: Hb("Day"),
        EEE: Hb("Day", !0),
        a: function(a, b) {
            return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
        },
        Z: function(a, b, d) {
            a = -1 * d;
            return a = (0 <= a ? "+" : "") + (Gb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Gb(Math.abs(a % 60), 2));
        },
        ww: Ed(2),
        w: Ed(1),
        G: jc,
        GG: jc,
        GGG: jc,
        GGGG: function(a, b) {
            return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
        }
    }, ig = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, hg = /^\-?\d+$/;
    zd.$inject = [ "$locale" ];
    var eg = na(F), fg = na(sb);
    Bd.$inject = [ "$parse" ];
    var he = na({
        restrict: "E",
        compile: function(a, b) {
            if (!b.href && !b.xlinkHref) return function(a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var e = "[object SVGAnimatedString]" === sa.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function(a) {
                        b.attr(e) || a.preventDefault();
                    });
                }
            };
        }
    }), tb = {};
    n(Cb, function(a, b) {
        function d(a, d, e) {
            a.$watch(e[c], function(a) {
                e.$set(b, !!a);
            });
        }
        if ("multiple" != a) {
            var c = va("ng-" + b), e = d;
            "checked" === a && (e = function(a, b, e) {
                e.ngModel !== e[c] && d(a, b, e);
            });
            tb[c] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                };
            };
        }
    });
    n(Zc, function(a, b) {
        tb[b] = function() {
            return {
                priority: 100,
                link: function(a, c, e) {
                    if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(lg))) {
                        e.$set("ngPattern", new RegExp(c[1], c[2]));
                        return;
                    }
                    a.$watch(e[b], function(a) {
                        e.$set(b, a);
                    });
                }
            };
        };
    });
    n([ "src", "srcset", "href" ], function(a) {
        var b = va("ng-" + a);
        tb[b] = function() {
            return {
                priority: 99,
                link: function(d, c, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === sa.call(c.prop("href")) && (g = "xlinkHref", 
                    e.$attr[g] = "xlink:href", f = null);
                    e.$observe(b, function(b) {
                        b ? (e.$set(g, b), Ha && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
                    });
                }
            };
        };
    });
    var Ib = {
        $addControl: x,
        $$renameControl: function(a, b) {
            a.$name = b;
        },
        $removeControl: x,
        $setValidity: x,
        $setDirty: x,
        $setPristine: x,
        $setSubmitted: x
    };
    Fd.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var Nd = function(a) {
        return [ "$timeout", "$parse", function(b, d) {
            function c(a) {
                return "" === a ? d('this[""]').assign : d(a).assign || x;
            }
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                require: [ "form", "^^?form" ],
                controller: Fd,
                compile: function(d, f) {
                    d.addClass(Wa).addClass(mb);
                    var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                    return {
                        pre: function(a, d, e, f) {
                            var n = f[0];
                            if (!("action" in e)) {
                                var q = function(b) {
                                    a.$apply(function() {
                                        n.$commitViewValue();
                                        n.$setSubmitted();
                                    });
                                    b.preventDefault();
                                };
                                d[0].addEventListener("submit", q, !1);
                                d.on("$destroy", function() {
                                    b(function() {
                                        d[0].removeEventListener("submit", q, !1);
                                    }, 0, !1);
                                });
                            }
                            (f[1] || n.$$parentForm).$addControl(n);
                            var s = g ? c(n.$name) : x;
                            g && (s(a, n), e.$observe(g, function(b) {
                                n.$name !== b && (s(a, u), n.$$parentForm.$$renameControl(n, b), s = c(n.$name), 
                                s(a, n));
                            }));
                            d.on("$destroy", function() {
                                n.$$parentForm.$removeControl(n);
                                s(a, u);
                                M(n, Ib);
                            });
                        }
                    };
                }
            };
        } ];
    }, ie = Nd(), ve = Nd(!0), kg = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, tg = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s\/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-\/]*)?$/, ug = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, vg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Od = /^(\d{4})-(\d{2})-(\d{2})$/, Pd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, mc = /^(\d{4})-W(\d\d)$/, Qd = /^(\d{4})-(\d\d)$/, Rd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Sd = {
        text: function(a, b, d, c, e, f) {
            jb(a, b, d, c, e, f);
            kc(c);
        },
        date: kb("date", Od, Kb(Od, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": kb("datetimelocal", Pd, Kb(Pd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: kb("time", Rd, Kb(Rd, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: kb("week", mc, function(a, b) {
            if (da(a)) return a;
            if (E(a)) {
                mc.lastIndex = 0;
                var d = mc.exec(a);
                if (d) {
                    var c = +d[1], e = +d[2], f = d = 0, g = 0, h = 0, k = Dd(c), e = 7 * (e - 1);
                    b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
                    return new Date(c, 0, k.getDate() + e, d, f, g, h);
                }
            }
            return NaN;
        }, "yyyy-Www"),
        month: kb("month", Qd, Kb(Qd, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: function(a, b, d, c, e, f) {
            Hd(a, b, d, c);
            jb(a, b, d, c, e, f);
            c.$$parserName = "number";
            c.$parsers.push(function(a) {
                return c.$isEmpty(a) ? null : vg.test(a) ? parseFloat(a) : u;
            });
            c.$formatters.push(function(a) {
                if (!c.$isEmpty(a)) {
                    if (!Q(a)) throw lb("numfmt", a);
                    a = a.toString();
                }
                return a;
            });
            if (y(d.min) || d.ngMin) {
                var g;
                c.$validators.min = function(a) {
                    return c.$isEmpty(a) || q(g) || a >= g;
                };
                d.$observe("min", function(a) {
                    y(a) && !Q(a) && (a = parseFloat(a, 10));
                    g = Q(a) && !isNaN(a) ? a : u;
                    c.$validate();
                });
            }
            if (y(d.max) || d.ngMax) {
                var h;
                c.$validators.max = function(a) {
                    return c.$isEmpty(a) || q(h) || a <= h;
                };
                d.$observe("max", function(a) {
                    y(a) && !Q(a) && (a = parseFloat(a, 10));
                    h = Q(a) && !isNaN(a) ? a : u;
                    c.$validate();
                });
            }
        },
        url: function(a, b, d, c, e, f) {
            jb(a, b, d, c, e, f);
            kc(c);
            c.$$parserName = "url";
            c.$validators.url = function(a, b) {
                var d = a || b;
                return c.$isEmpty(d) || tg.test(d);
            };
        },
        email: function(a, b, d, c, e, f) {
            jb(a, b, d, c, e, f);
            kc(c);
            c.$$parserName = "email";
            c.$validators.email = function(a, b) {
                var d = a || b;
                return c.$isEmpty(d) || ug.test(d);
            };
        },
        radio: function(a, b, d, c) {
            q(d.name) && b.attr("name", ++nb);
            b.on("click", function(a) {
                b[0].checked && c.$setViewValue(d.value, a && a.type);
            });
            c.$render = function() {
                b[0].checked = d.value == c.$viewValue;
            };
            d.$observe("value", c.$render);
        },
        checkbox: function(a, b, d, c, e, f, g, h) {
            var k = Id(h, a, "ngTrueValue", d.ngTrueValue, !0), l = Id(h, a, "ngFalseValue", d.ngFalseValue, !1);
            b.on("click", function(a) {
                c.$setViewValue(b[0].checked, a && a.type);
            });
            c.$render = function() {
                b[0].checked = c.$viewValue;
            };
            c.$isEmpty = function(a) {
                return !1 === a;
            };
            c.$formatters.push(function(a) {
                return ma(a, k);
            });
            c.$parsers.push(function(a) {
                return a ? k : l;
            });
        },
        hidden: x,
        button: x,
        submit: x,
        reset: x,
        file: x
    }, Dc = [ "$browser", "$sniffer", "$filter", "$parse", function(a, b, d, c) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(e, f, g, h) {
                    h[0] && (Sd[F(g.type)] || Sd.text)(e, f, g, h[0], b, a, d, c);
                }
            }
        };
    } ], wg = /^(true|false|\d+)$/, Ne = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(a, b) {
                return wg.test(b.ngValue) ? function(a, b, e) {
                    e.$set("value", a.$eval(e.ngValue));
                } : function(a, b, e) {
                    a.$watch(e.ngValue, function(a) {
                        e.$set("value", a);
                    });
                };
            }
        };
    }, ne = [ "$compile", function(a) {
        return {
            restrict: "AC",
            compile: function(b) {
                a.$$addBindingClass(b);
                return function(b, c, e) {
                    a.$$addBindingInfo(c, e.ngBind);
                    c = c[0];
                    b.$watch(e.ngBind, function(a) {
                        c.textContent = q(a) ? "" : a;
                    });
                };
            }
        };
    } ], pe = [ "$interpolate", "$compile", function(a, b) {
        return {
            compile: function(d) {
                b.$$addBindingClass(d);
                return function(c, d, f) {
                    c = a(d.attr(f.$attr.ngBindTemplate));
                    b.$$addBindingInfo(d, c.expressions);
                    d = d[0];
                    f.$observe("ngBindTemplate", function(a) {
                        d.textContent = q(a) ? "" : a;
                    });
                };
            }
        };
    } ], oe = [ "$sce", "$parse", "$compile", function(a, b, d) {
        return {
            restrict: "A",
            compile: function(c, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function(a) {
                    return (a || "").toString();
                });
                d.$$addBindingClass(c);
                return function(b, c, e) {
                    d.$$addBindingInfo(c, e.ngBindHtml);
                    b.$watch(g, function() {
                        c.html(a.getTrustedHtml(f(b)) || "");
                    });
                };
            }
        };
    } ], Me = na({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, d, c) {
            c.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange);
            });
        }
    }), qe = lc("", !0), se = lc("Odd", 0), re = lc("Even", 1), te = La({
        compile: function(a, b) {
            b.$set("ngCloak", u);
            a.removeClass("ng-cloak");
        }
    }), ue = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], Ic = {}, xg = {
        blur: !0,
        focus: !0
    };
    n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = va("ng-" + a);
        Ic[b] = [ "$parse", "$rootScope", function(d, c) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = d(f[b], null, !0);
                    return function(b, d) {
                        d.on(a, function(d) {
                            var e = function() {
                                g(b, {
                                    $event: d
                                });
                            };
                            xg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
                        });
                    };
                }
            };
        } ];
    });
    var xe = [ "$animate", function(a) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(b, d, c, e, f) {
                var g, h, k;
                b.$watch(c.ngIf, function(b) {
                    b ? h || f(function(b, e) {
                        h = e;
                        b[b.length++] = X.createComment(" end ngIf: " + c.ngIf + " ");
                        g = {
                            clone: b
                        };
                        a.enter(b, d.parent(), d);
                    }) : (k && (k.remove(), k = null), h && (h.$destroy(), h = null), g && (k = rb(g.clone), 
                    a.leave(k).then(function() {
                        k = null;
                    }), g = null));
                });
            }
        };
    } ], ye = [ "$templateRequest", "$anchorScroll", "$animate", function(a, b, d) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: fa.noop,
            compile: function(c, e) {
                var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
                return function(c, e, m, n, q) {
                    var s = 0, v, u, p, C = function() {
                        u && (u.remove(), u = null);
                        v && (v.$destroy(), v = null);
                        p && (d.leave(p).then(function() {
                            u = null;
                        }), u = p, p = null);
                    };
                    c.$watch(f, function(f) {
                        var m = function() {
                            !y(h) || h && !c.$eval(h) || b();
                        }, u = ++s;
                        f ? (a(f, !0).then(function(a) {
                            if (u === s) {
                                var b = c.$new();
                                n.template = a;
                                a = q(b, function(a) {
                                    C();
                                    d.enter(a, null, e).then(m);
                                });
                                v = b;
                                p = a;
                                v.$emit("$includeContentLoaded", f);
                                c.$eval(g);
                            }
                        }, function() {
                            u === s && (C(), c.$emit("$includeContentError", f));
                        }), c.$emit("$includeContentRequested", f)) : (C(), n.template = null);
                    });
                };
            }
        };
    } ], Pe = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(b, d, c, e) {
                /SVG/.test(d[0].toString()) ? (d.empty(), a(Lc(e.template, X).childNodes)(b, function(a) {
                    d.append(a);
                }, {
                    futureParentElement: d
                })) : (d.html(e.template), a(d.contents())(b));
            }
        };
    } ], ze = La({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, d) {
                    a.$eval(d.ngInit);
                }
            };
        }
    }), Le = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(a, b, d, c) {
                var e = b.attr(d.$attr.ngList) || ", ", f = "false" !== d.ngTrim, g = f ? U(e) : e;
                c.$parsers.push(function(a) {
                    if (!q(a)) {
                        var b = [];
                        a && n(a.split(g), function(a) {
                            a && b.push(f ? U(a) : a);
                        });
                        return b;
                    }
                });
                c.$formatters.push(function(a) {
                    return I(a) ? a.join(e) : u;
                });
                c.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, mb = "ng-valid", Jd = "ng-invalid", Wa = "ng-pristine", Jb = "ng-dirty", Ld = "ng-pending", lb = G("ngModel"), yg = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, c, e, f, g, h, k, l) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = u;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$error = {};
        this.$$success = {};
        this.$pending = u;
        this.$name = l(d.name || "", !1)(a);
        this.$$parentForm = Ib;
        var m = e(d.ngModel), r = m.assign, t = m, s = r, v = null, B, p = this;
        this.$$setOptions = function(a) {
            if ((p.$options = a) && a.getterSetter) {
                var b = e(d.ngModel + "()"), f = e(d.ngModel + "($$$p)");
                t = function(a) {
                    var c = m(a);
                    z(c) && (c = b(a));
                    return c;
                };
                s = function(a, b) {
                    z(m(a)) ? f(a, {
                        $$$p: p.$modelValue
                    }) : r(a, p.$modelValue);
                };
            } else if (!m.assign) throw lb("nonassign", d.ngModel, ua(c));
        };
        this.$render = x;
        this.$isEmpty = function(a) {
            return q(a) || "" === a || null === a || a !== a;
        };
        var C = 0;
        Gd({
            ctrl: this,
            $element: c,
            set: function(a, b) {
                a[b] = !0;
            },
            unset: function(a, b) {
                delete a[b];
            },
            $animate: f
        });
        this.$setPristine = function() {
            p.$dirty = !1;
            p.$pristine = !0;
            f.removeClass(c, Jb);
            f.addClass(c, Wa);
        };
        this.$setDirty = function() {
            p.$dirty = !0;
            p.$pristine = !1;
            f.removeClass(c, Wa);
            f.addClass(c, Jb);
            p.$$parentForm.$setDirty();
        };
        this.$setUntouched = function() {
            p.$touched = !1;
            p.$untouched = !0;
            f.setClass(c, "ng-untouched", "ng-touched");
        };
        this.$setTouched = function() {
            p.$touched = !0;
            p.$untouched = !1;
            f.setClass(c, "ng-touched", "ng-untouched");
        };
        this.$rollbackViewValue = function() {
            g.cancel(v);
            p.$viewValue = p.$$lastCommittedViewValue;
            p.$render();
        };
        this.$validate = function() {
            if (!Q(p.$modelValue) || !isNaN(p.$modelValue)) {
                var a = p.$$rawModelValue, b = p.$valid, c = p.$modelValue, d = p.$options && p.$options.allowInvalid;
                p.$$runValidators(a, p.$$lastCommittedViewValue, function(e) {
                    d || b === e || (p.$modelValue = e ? a : u, p.$modelValue !== c && p.$$writeModelToScope());
                });
            }
        };
        this.$$runValidators = function(a, b, c) {
            function d() {
                var c = !0;
                n(p.$validators, function(d, e) {
                    var g = d(a, b);
                    c = c && g;
                    f(e, g);
                });
                return c ? !0 : (n(p.$asyncValidators, function(a, b) {
                    f(b, null);
                }), !1);
            }
            function e() {
                var c = [], d = !0;
                n(p.$asyncValidators, function(e, g) {
                    var h = e(a, b);
                    if (!h || !z(h.then)) throw lb("$asyncValidators", h);
                    f(g, u);
                    c.push(h.then(function() {
                        f(g, !0);
                    }, function(a) {
                        d = !1;
                        f(g, !1);
                    }));
                });
                c.length ? k.all(c).then(function() {
                    g(d);
                }, x) : g(!0);
            }
            function f(a, b) {
                h === C && p.$setValidity(a, b);
            }
            function g(a) {
                h === C && c(a);
            }
            C++;
            var h = C;
            (function() {
                var a = p.$$parserName || "parse";
                if (q(B)) f(a, null); else return B || (n(p.$validators, function(a, b) {
                    f(b, null);
                }), n(p.$asyncValidators, function(a, b) {
                    f(b, null);
                })), f(a, B), B;
                return !0;
            })() ? d() ? e() : g(!1) : g(!1);
        };
        this.$commitViewValue = function() {
            var a = p.$viewValue;
            g.cancel(v);
            if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) p.$$lastCommittedViewValue = a, 
            p.$pristine && this.$setDirty(), this.$$parseAndValidate();
        };
        this.$$parseAndValidate = function() {
            var b = p.$$lastCommittedViewValue;
            if (B = q(b) ? u : !0) for (var c = 0; c < p.$parsers.length; c++) if (b = p.$parsers[c](b), 
            q(b)) {
                B = !1;
                break;
            }
            Q(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = t(a));
            var d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
            p.$$rawModelValue = b;
            e && (p.$modelValue = b, p.$modelValue !== d && p.$$writeModelToScope());
            p.$$runValidators(b, p.$$lastCommittedViewValue, function(a) {
                e || (p.$modelValue = a ? b : u, p.$modelValue !== d && p.$$writeModelToScope());
            });
        };
        this.$$writeModelToScope = function() {
            s(a, p.$modelValue);
            n(p.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (c) {
                    b(c);
                }
            });
        };
        this.$setViewValue = function(a, b) {
            p.$viewValue = a;
            p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(b);
        };
        this.$$debounceViewValueCommit = function(b) {
            var c = 0, d = p.$options;
            d && y(d.debounce) && (d = d.debounce, Q(d) ? c = d : Q(d[b]) ? c = d[b] : Q(d["default"]) && (c = d["default"]));
            g.cancel(v);
            c ? v = g(function() {
                p.$commitViewValue();
            }, c) : h.$$phase ? p.$commitViewValue() : a.$apply(function() {
                p.$commitViewValue();
            });
        };
        a.$watch(function() {
            var b = t(a);
            if (b !== p.$modelValue && (p.$modelValue === p.$modelValue || b === b)) {
                p.$modelValue = p.$$rawModelValue = b;
                B = u;
                for (var c = p.$formatters, d = c.length, e = b; d--; ) e = c[d](e);
                p.$viewValue !== e && (p.$viewValue = p.$$lastCommittedViewValue = e, p.$render(), 
                p.$$runValidators(b, e, x));
            }
            return b;
        });
    } ], Ke = [ "$rootScope", function(a) {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: yg,
            priority: 1,
            compile: function(b) {
                b.addClass(Wa).addClass("ng-untouched").addClass(mb);
                return {
                    pre: function(a, b, e, f) {
                        var g = f[0];
                        b = f[1] || g.$$parentForm;
                        g.$$setOptions(f[2] && f[2].$options);
                        b.$addControl(g);
                        e.$observe("name", function(a) {
                            g.$name !== a && g.$$parentForm.$$renameControl(g, a);
                        });
                        a.$on("$destroy", function() {
                            g.$$parentForm.$removeControl(g);
                        });
                    },
                    post: function(b, c, e, f) {
                        var g = f[0];
                        if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function(a) {
                            g.$$debounceViewValueCommit(a && a.type);
                        });
                        c.on("blur", function(c) {
                            g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
                        });
                    }
                };
            }
        };
    } ], zg = /(\s+|^)default(\s+|$)/, Oe = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function(a, b) {
                var d = this;
                this.$options = bb(a.$eval(b.ngModelOptions));
                y(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(zg, function() {
                    d.$options.updateOnDefault = !0;
                    return " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, Ae = La({
        terminal: !0,
        priority: 1e3
    }), Ag = G("ngOptions"), Bg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Ie = [ "$compile", "$parse", function(a, b) {
        function d(a, c, d) {
            function e(a, b, c, d, f) {
                this.selectValue = a;
                this.viewValue = b;
                this.label = c;
                this.group = d;
                this.disabled = f;
            }
            function l(a) {
                var b;
                if (!q && za(a)) b = a; else {
                    b = [];
                    for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
                }
                return b;
            }
            var m = a.match(Bg);
            if (!m) throw Ag("iexp", a, ua(c));
            var n = m[5] || m[7], q = m[6];
            a = / as /.test(m[0]) && m[1];
            var s = m[9];
            c = b(m[2] ? m[1] : n);
            var v = a && b(a) || c, u = s && b(s), p = s ? function(a, b) {
                return u(d, b);
            } : function(a) {
                return Ca(a);
            }, C = function(a, b) {
                return p(a, z(a, b));
            }, w = b(m[2] || m[1]), y = b(m[3] || ""), B = b(m[4] || ""), x = b(m[8]), D = {}, z = q ? function(a, b) {
                D[q] = b;
                D[n] = a;
                return D;
            } : function(a) {
                D[n] = a;
                return D;
            };
            return {
                trackBy: s,
                getTrackByValue: C,
                getWatchables: b(x, function(a) {
                    var b = [];
                    a = a || [];
                    for (var c = l(a), e = c.length, f = 0; f < e; f++) {
                        var g = a === c ? f : c[f], k = z(a[g], g), g = p(a[g], k);
                        b.push(g);
                        if (m[2] || m[1]) g = w(d, k), b.push(g);
                        m[4] && (k = B(d, k), b.push(k));
                    }
                    return b;
                }),
                getOptions: function() {
                    for (var a = [], b = {}, c = x(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
                        var n = c === f ? m : f[m], r = z(c[n], n), q = v(d, r), n = p(q, r), t = w(d, r), u = y(d, r), r = B(d, r), q = new e(n, q, t, u, r);
                        a.push(q);
                        b[n] = q;
                    }
                    return {
                        items: a,
                        selectValueMap: b,
                        getOptionFromViewValue: function(a) {
                            return b[C(a)];
                        },
                        getViewValueFromOption: function(a) {
                            return s ? fa.copy(a.viewValue) : a.viewValue;
                        }
                    };
                }
            };
        }
        var c = X.createElement("option"), e = X.createElement("optgroup");
        return {
            restrict: "A",
            terminal: !0,
            require: [ "select", "?ngModel" ],
            link: {
                pre: function(a, b, c, d) {
                    d[0].registerOption = x;
                },
                post: function(b, g, h, k) {
                    function l(a, b) {
                        a.element = b;
                        b.disabled = a.disabled;
                        a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                        a.value !== b.value && (b.value = a.selectValue);
                    }
                    function m(a, b, c, d) {
                        b && F(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));
                        return c;
                    }
                    function r(a) {
                        for (var b; a; ) b = a.nextSibling, Xb(a), a = b;
                    }
                    function q(a) {
                        var b = p && p[0], c = z && z[0];
                        if (b || c) for (;a && (a === b || a === c || 8 === a.nodeType || "" === a.value); ) a = a.nextSibling;
                        return a;
                    }
                    function s() {
                        var a = D && u.readValue();
                        D = E.getOptions();
                        var b = {}, d = g[0].firstChild;
                        x && g.prepend(p);
                        d = q(d);
                        D.items.forEach(function(a) {
                            var f, h;
                            a.group ? (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, 
                            f.label = a.group, f = b[a.group] = {
                                groupElement: f,
                                currentOptionElement: f.firstChild
                            }), h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, "option", c), 
                            l(a, h), d = h.nextSibling);
                        });
                        Object.keys(b).forEach(function(a) {
                            r(b[a].currentOptionElement);
                        });
                        r(d);
                        v.$render();
                        if (!v.$isEmpty(a)) {
                            var f = u.readValue();
                            (E.trackBy ? ma(a, f) : a === f) || (v.$setViewValue(f), v.$render());
                        }
                    }
                    var v = k[1];
                    if (v) {
                        var u = k[0];
                        k = h.multiple;
                        for (var p, C = 0, w = g.children(), y = w.length; C < y; C++) if ("" === w[C].value) {
                            p = w.eq(C);
                            break;
                        }
                        var x = !!p, z = B(c.cloneNode(!1));
                        z.val("?");
                        var D, E = d(h.ngOptions, g, b);
                        k ? (v.$isEmpty = function(a) {
                            return !a || 0 === a.length;
                        }, u.writeValue = function(a) {
                            D.items.forEach(function(a) {
                                a.element.selected = !1;
                            });
                            a && a.forEach(function(a) {
                                (a = D.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0);
                            });
                        }, u.readValue = function() {
                            var a = g.val() || [], b = [];
                            n(a, function(a) {
                                (a = D.selectValueMap[a]) && !a.disabled && b.push(D.getViewValueFromOption(a));
                            });
                            return b;
                        }, E.trackBy && b.$watchCollection(function() {
                            if (I(v.$viewValue)) return v.$viewValue.map(function(a) {
                                return E.getTrackByValue(a);
                            });
                        }, function() {
                            v.$render();
                        })) : (u.writeValue = function(a) {
                            var b = D.getOptionFromViewValue(a);
                            b && !b.disabled ? g[0].value !== b.selectValue && (z.remove(), x || p.remove(), 
                            g[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || x ? (z.remove(), 
                            x || g.prepend(p), g.val(""), p.prop("selected", !0), p.attr("selected", !0)) : (x || p.remove(), 
                            g.prepend(z), g.val("?"), z.prop("selected", !0), z.attr("selected", !0));
                        }, u.readValue = function() {
                            var a = D.selectValueMap[g.val()];
                            return a && !a.disabled ? (x || p.remove(), z.remove(), D.getViewValueFromOption(a)) : null;
                        }, E.trackBy && b.$watch(function() {
                            return E.getTrackByValue(v.$viewValue);
                        }, function() {
                            v.$render();
                        }));
                        x ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = B(c.cloneNode(!1));
                        s();
                        b.$watchCollection(E.getWatchables, s);
                    }
                }
            }
        };
    } ], Be = [ "$locale", "$interpolate", "$log", function(a, b, d) {
        var c = /{}/g, e = /^when(Minus)?(.+)$/;
        return {
            link: function(f, g, h) {
                function k(a) {
                    g.text(a || "");
                }
                var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), r = h.offset || 0, s = f.$eval(m) || {}, u = {}, v = b.startSymbol(), y = b.endSymbol(), p = v + l + "-" + r + y, C = fa.noop, w;
                n(h, function(a, b) {
                    var c = e.exec(b);
                    c && (c = (c[1] ? "-" : "") + F(c[2]), s[c] = g.attr(h.$attr[b]));
                });
                n(s, function(a, d) {
                    u[d] = b(a.replace(c, p));
                });
                f.$watch(l, function(b) {
                    var c = parseFloat(b), e = isNaN(c);
                    e || c in s || (c = a.pluralCat(c - r));
                    c === w || e && Q(w) && isNaN(w) || (C(), e = u[c], q(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), 
                    C = x, k()) : C = f.$watch(e, k), w = c);
                });
            }
        };
    } ], Ce = [ "$parse", "$animate", function(a, b) {
        var d = G("ngRepeat"), c = function(a, b, c, d, k, l, m) {
            a[c] = d;
            k && (a[k] = l);
            a.$index = b;
            a.$first = 0 === b;
            a.$last = b === m - 1;
            a.$middle = !(a.$first || a.$last);
            a.$odd = !(a.$even = 0 === (b & 1));
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(e, f) {
                var g = f.ngRepeat, h = X.createComment(" end ngRepeat: " + g + " "), k = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!k) throw d("iexp", g);
                var l = k[1], m = k[2], r = k[3], q = k[4], k = l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                if (!k) throw d("iidexp", l);
                var s = k[3] || k[1], v = k[2];
                if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r))) throw d("badident", r);
                var x, p, y, w, z = {
                    $id: Ca
                };
                q ? x = a(q) : (y = function(a, b) {
                    return Ca(b);
                }, w = function(a) {
                    return a;
                });
                return function(a, e, f, k, l) {
                    x && (p = function(b, c, d) {
                        v && (z[v] = b);
                        z[s] = c;
                        z.$index = d;
                        return x(a, z);
                    });
                    var q = $();
                    a.$watchCollection(m, function(f) {
                        var k, m, t = e[0], x, z = $(), D, E, H, F, I, G, J;
                        r && (a[r] = f);
                        if (za(f)) I = f, m = p || y; else for (J in m = p || w, I = [], f) qa.call(f, J) && "$" !== J.charAt(0) && I.push(J);
                        D = I.length;
                        J = Array(D);
                        for (k = 0; k < D; k++) if (E = f === I ? k : I[k], H = f[E], F = m(E, H, k), q[F]) G = q[F], 
                        delete q[F], z[F] = G, J[k] = G; else {
                            if (z[F]) throw n(J, function(a) {
                                a && a.scope && (q[a.id] = a);
                            }), d("dupes", g, F, H);
                            J[k] = {
                                id: F,
                                scope: u,
                                clone: u
                            };
                            z[F] = !0;
                        }
                        for (x in q) {
                            G = q[x];
                            F = rb(G.clone);
                            b.leave(F);
                            if (F[0].parentNode) for (k = 0, m = F.length; k < m; k++) F[k].$$NG_REMOVED = !0;
                            G.scope.$destroy();
                        }
                        for (k = 0; k < D; k++) if (E = f === I ? k : I[k], H = f[E], G = J[k], G.scope) {
                            x = t;
                            do x = x.nextSibling; while (x && x.$$NG_REMOVED);
                            G.clone[0] != x && b.move(rb(G.clone), null, B(t));
                            t = G.clone[G.clone.length - 1];
                            c(G.scope, k, s, H, v, E, D);
                        } else l(function(a, d) {
                            G.scope = d;
                            var e = h.cloneNode(!1);
                            a[a.length++] = e;
                            b.enter(a, null, B(t));
                            t = e;
                            G.clone = a;
                            z[G.id] = G;
                            c(G.scope, k, s, H, v, E, D);
                        });
                        q = z;
                    });
                };
            }
        };
    } ], De = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, d, c) {
                b.$watch(c.ngShow, function(b) {
                    a[b ? "removeClass" : "addClass"](d, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], we = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, d, c) {
                b.$watch(c.ngHide, function(b) {
                    a[b ? "addClass" : "removeClass"](d, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], Ee = La(function(a, b, d) {
        a.$watch(d.ngStyle, function(a, d) {
            d && a !== d && n(d, function(a, c) {
                b.css(c, "");
            });
            a && b.css(a);
        }, !0);
    }), Fe = [ "$animate", function(a) {
        return {
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(b, d, c, e) {
                var f = [], g = [], h = [], k = [], l = function(a, b) {
                    return function() {
                        a.splice(b, 1);
                    };
                };
                b.$watch(c.ngSwitch || c.on, function(b) {
                    var c, d;
                    c = 0;
                    for (d = h.length; c < d; ++c) a.cancel(h[c]);
                    c = h.length = 0;
                    for (d = k.length; c < d; ++c) {
                        var q = rb(g[c].clone);
                        k[c].$destroy();
                        (h[c] = a.leave(q)).then(l(h, c));
                    }
                    g.length = 0;
                    k.length = 0;
                    (f = e.cases["!" + b] || e.cases["?"]) && n(f, function(b) {
                        b.transclude(function(c, d) {
                            k.push(d);
                            var e = b.element;
                            c[c.length++] = X.createComment(" end ngSwitchWhen: ");
                            g.push({
                                clone: c
                            });
                            a.enter(c, e.parent(), e);
                        });
                    });
                });
            }
        };
    } ], Ge = La({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, d, c, e) {
            c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];
            c.cases["!" + d.ngSwitchWhen].push({
                transclude: e,
                element: b
            });
        }
    }), He = La({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, d, c, e) {
            c.cases["?"] = c.cases["?"] || [];
            c.cases["?"].push({
                transclude: e,
                element: b
            });
        }
    }), Je = La({
        restrict: "EAC",
        link: function(a, b, d, c, e) {
            if (!e) throw G("ngTransclude")("orphan", ua(b));
            e(function(a) {
                b.empty();
                b.append(a);
            });
        }
    }), je = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, d) {
                "text/ng-template" == d.type && a.put(d.id, b[0].text);
            }
        };
    } ], Cg = {
        $setViewValue: x,
        $render: x
    }, Dg = [ "$element", "$scope", "$attrs", function(a, b, d) {
        var c = this, e = new Sa();
        c.ngModelCtrl = Cg;
        c.unknownOption = B(X.createElement("option"));
        c.renderUnknownOption = function(b) {
            b = "? " + Ca(b) + " ?";
            c.unknownOption.val(b);
            a.prepend(c.unknownOption);
            a.val(b);
        };
        b.$on("$destroy", function() {
            c.renderUnknownOption = x;
        });
        c.removeUnknownOption = function() {
            c.unknownOption.parent() && c.unknownOption.remove();
        };
        c.readValue = function() {
            c.removeUnknownOption();
            return a.val();
        };
        c.writeValue = function(b) {
            c.hasOption(b) ? (c.removeUnknownOption(), a.val(b), "" === b && c.emptyOption.prop("selected", !0)) : null == b && c.emptyOption ? (c.removeUnknownOption(), 
            a.val("")) : c.renderUnknownOption(b);
        };
        c.addOption = function(a, b) {
            Ra(a, '"option value"');
            "" === a && (c.emptyOption = b);
            var d = e.get(a) || 0;
            e.put(a, d + 1);
            c.ngModelCtrl.$render();
            b[0].hasAttribute("selected") && (b[0].selected = !0);
        };
        c.removeOption = function(a) {
            var b = e.get(a);
            b && (1 === b ? (e.remove(a), "" === a && (c.emptyOption = u)) : e.put(a, b - 1));
        };
        c.hasOption = function(a) {
            return !!e.get(a);
        };
        c.registerOption = function(a, b, d, e, l) {
            if (e) {
                var m;
                d.$observe("value", function(a) {
                    y(m) && c.removeOption(m);
                    m = a;
                    c.addOption(a, b);
                });
            } else l ? a.$watch(l, function(a, e) {
                d.$set("value", a);
                e !== a && c.removeOption(e);
                c.addOption(a, b);
            }) : c.addOption(d.value, b);
            b.on("$destroy", function() {
                c.removeOption(d.value);
                c.ngModelCtrl.$render();
            });
        };
    } ], ke = function() {
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: Dg,
            priority: 1,
            link: {
                pre: function(a, b, d, c) {
                    var e = c[1];
                    if (e) {
                        var f = c[0];
                        f.ngModelCtrl = e;
                        e.$render = function() {
                            f.writeValue(e.$viewValue);
                        };
                        b.on("change", function() {
                            a.$apply(function() {
                                e.$setViewValue(f.readValue());
                            });
                        });
                        if (d.multiple) {
                            f.readValue = function() {
                                var a = [];
                                n(b.find("option"), function(b) {
                                    b.selected && a.push(b.value);
                                });
                                return a;
                            };
                            f.writeValue = function(a) {
                                var c = new Sa(a);
                                n(b.find("option"), function(a) {
                                    a.selected = y(c.get(a.value));
                                });
                            };
                            var g, h = NaN;
                            a.$watch(function() {
                                h !== e.$viewValue || ma(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());
                                h = e.$viewValue;
                            });
                            e.$isEmpty = function(a) {
                                return !a || 0 === a.length;
                            };
                        }
                    }
                }
            }
        };
    }, me = [ "$interpolate", function(a) {
        return {
            restrict: "E",
            priority: 100,
            compile: function(b, d) {
                if (y(d.value)) var c = a(d.value, !0); else {
                    var e = a(b.text(), !0);
                    e || d.$set("value", b.text());
                }
                return function(a, b, d) {
                    var k = b.parent();
                    (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
                };
            }
        };
    } ], le = na({
        restrict: "E",
        terminal: !1
    }), Fc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, d, c) {
                c && (d.required = !0, c.$validators.required = function(a, b) {
                    return !d.required || !c.$isEmpty(b);
                }, d.$observe("required", function() {
                    c.$validate();
                }));
            }
        };
    }, Ec = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, d, c) {
                if (c) {
                    var e, f = d.ngPattern || d.pattern;
                    d.$observe("pattern", function(a) {
                        E(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                        if (a && !a.test) throw G("ngPattern")("noregexp", f, a, ua(b));
                        e = a || u;
                        c.$validate();
                    });
                    c.$validators.pattern = function(a, b) {
                        return c.$isEmpty(b) || q(e) || e.test(b);
                    };
                }
            }
        };
    }, Hc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, d, c) {
                if (c) {
                    var e = -1;
                    d.$observe("maxlength", function(a) {
                        a = ea(a);
                        e = isNaN(a) ? -1 : a;
                        c.$validate();
                    });
                    c.$validators.maxlength = function(a, b) {
                        return 0 > e || c.$isEmpty(b) || b.length <= e;
                    };
                }
            }
        };
    }, Gc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, d, c) {
                if (c) {
                    var e = 0;
                    d.$observe("minlength", function(a) {
                        e = ea(a) || 0;
                        c.$validate();
                    });
                    c.$validators.minlength = function(a, b) {
                        return c.$isEmpty(b) || b.length >= e;
                    };
                }
            }
        };
    };
    S.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (ce(), 
    ee(fa), fa.module("ngLocale", [], [ "$provide", function(a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1;
        }
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: [ "AM", "PM" ],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: [ "Before Christ", "Anno Domini" ],
                ERAS: [ "BC", "AD" ],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                WEEKENDRANGE: [ 5, 6 ],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [ {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                } ]
            },
            id: "en-us",
            pluralCat: function(a, c) {
                var e = a | 0, f = c;
                u === f && (f = Math.min(b(a), 3));
                Math.pow(10, f);
                return 1 == e && 0 == f ? "one" : "other";
            }
        });
    } ]), B(X).ready(function() {
        Zd(X, yc);
    }));
})(window, document);

!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');

(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var arr = [];
    var document = window.document;
    var slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {};
    var version = "2.2.3", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) {
            return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this);
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
            return obj != null && obj === obj.window;
        },
        isNumeric: function(obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
        },
        isPlainObject: function(obj) {
            var key;
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
                return false;
            }
            for (key in obj) {}
            return key === undefined || hasOwn.call(obj, key);
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        type: function(obj) {
            if (obj == null) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code);
            if (code) {
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement("script");
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script);
                } else {
                    indirect(code);
                }
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for (;i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }
            return obj;
        },
        trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                } else {
                    push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (;j < len; j++) {
                first[i++] = second[j];
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (;i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }
            return matches;
        },
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
                length = elems.length;
                for (;i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            }
            return concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        now: Date.now,
        support: support
    });
    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = jQuery.type(obj);
        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle = function(window) {
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
                hasDuplicate = true;
            }
            return 0;
        }, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
            var i = 0, len = list.length;
            for (;i < len; i++) {
                if (list[i] === elem) {
                    return i;
                }
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
            setDocument();
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    var j = target.length, i = 0;
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                return results;
            }
            if (!seed) {
                if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                    setDocument(context);
                }
                context = context || document;
                if (documentIsHTML) {
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        if (m = match[1]) {
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else {
                                    return results;
                                }
                            } else {
                                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            }
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        if (nodeType !== 1) {
                            newContext = context;
                            newSelector = selector;
                        } else if (context.nodeName.toLowerCase() !== "object") {
                            if (nid = context.getAttribute("id")) {
                                nid = nid.replace(rescape, "\\$&");
                            } else {
                                context.setAttribute("id", nid = expando);
                            }
                            groups = tokenize(selector);
                            i = groups.length;
                            nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                            while (i--) {
                                groups[i] = nidselect + " " + toSelector(groups[i]);
                            }
                            newSelector = groups.join(",");
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                        }
                        if (newSelector) {
                            try {
                                push.apply(results, newContext.querySelectorAll(newSelector));
                                return results;
                            } catch (qsaError) {} finally {
                                if (nid === expando) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                if (keys.push(key + " ") > Expr.cacheLength) {
                    delete cache[keys.shift()];
                }
                return cache[key + " "] = value;
            }
            return cache;
        }
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                div = null;
            }
        }
        function addHandle(attrs, handler) {
            var arr = attrs.split("|"), i = arr.length;
            while (i--) {
                Expr.attrHandle[arr[i]] = handler;
            }
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
                return diff;
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        support = Sizzle.support = {};
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }
            document = doc;
            docElem = document.documentElement;
            documentIsHTML = !isXML(document);
            if ((parent = document.defaultView) && parent.top !== parent) {
                if (parent.addEventListener) {
                    parent.addEventListener("unload", unloadHandler, false);
                } else if (parent.attachEvent) {
                    parent.attachEvent("onunload", unloadHandler);
                }
            }
            support.attributes = assert(function(div) {
                div.className = "i";
                return !div.getAttribute("className");
            });
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(document.createComment(""));
                return !div.getElementsByTagName("*").length;
            });
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !document.getElementsByName || !document.getElementsByName(expando).length;
            });
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m ? [ m ] : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                    return context.getElementsByTagName(tag);
                } else if (support.qsa) {
                    return context.querySelectorAll(tag);
                }
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    while (elem = results[i++]) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }
                    return tmp;
                }
                return results;
            };
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = rnative.test(document.querySelectorAll)) {
                assert(function(div) {
                    docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (div.querySelectorAll("[msallowcapture^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }
                    if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                        rbuggyQSA.push("~=");
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }
                    if (!div.querySelectorAll("a#" + expando + "+*").length) {
                        rbuggyQSA.push(".#.+[+~]");
                    }
                });
                assert(function(div) {
                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("name", "D");
                    if (div.querySelectorAll("[name=d]").length) {
                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            sortOrder = hasCompare ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                    return compare;
                }
                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                        return -1;
                    }
                    if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                        return 1;
                    }
                    return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (!aup || !bup) {
                    return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur);
                }
                while (ap[i] === bp[i]) {
                    i++;
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };
            return document;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context);
            }
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }
            sortInput = null;
            return results;
        };
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                while (node = elem[i++]) {
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent;
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
            }
            return ret;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }
                    if (match[3]) {
                        match[2] = match[4] || match[5] || "";
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            if (forward && useCache) {
                                node = parent;
                                outerCache = node[expando] || (node[expando] = {});
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
                            } else {
                                if (useCache) {
                                    node = elem;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                if (diff === false) {
                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                            if (useCache) {
                                                outerCache = node[expando] || (node[expando] = {});
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                uniqueCache[type] = [ dirruns, diff ];
                                            }
                                            if (node === elem) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument);
                    }
                    if (fn.length > 1) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;--i >= 0; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;++i < length; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for (;i < len; i++) {
                selector += tokens[i].value;
            }
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                            if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                return newCache[2] = oldCache[2];
                            } else {
                                uniqueCache[dir] = newCache;
                                if (newCache[2] = matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret;
            } ];
            for (;i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (;j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                if (outermost) {
                    outermostContext = context === document || context || outermost;
                }
                for (;i !== len && (elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        if (!context && elem.ownerDocument !== document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while (matcher = elementMatchers[j++]) {
                            if (matcher(elem, context || document, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while (matcher = setMatchers[j++]) {
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                if (!match) {
                    match = tokenize(selector);
                }
                i = match.length;
                while (i--) {
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                cached.selector = selector;
            }
            return cached;
        };
        select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) {
                        return results;
                    } else if (compiled) {
                        context = context.parentNode;
                    }
                    selector = selector.slice(tokens.shift().value.length);
                }
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i--) {
                    token = tokens[i];
                    if (Expr.relative[type = token.type]) {
                        break;
                    }
                    if (find = Expr.find[type]) {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = !!hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div")) & 1;
        });
        if (!assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#";
        })) {
            addHandle("type|href|height|width", function(elem, name, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!support.attributes || !assert(function(div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === "";
        })) {
            addHandle("value", function(elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue;
                }
            });
        }
        if (!assert(function(div) {
            return div.getAttribute("disabled") == null;
        })) {
            addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (!isXML) {
                    return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }
            });
        }
        return Sizzle;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    var dir = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break;
                }
                matched.push(elem);
            }
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for (;n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
            }
        }
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
    var risSimple = /^.[^:#\[\.,]*$/;
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
            });
        }
        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")";
        }
        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, len = this.length, ret = [], self = this;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
            return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                match = [ null, selector, null ];
            } else {
                match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for (match in context) {
                            if (jQuery.isFunction(this[match])) {
                                this[match](context[match]);
                            } else {
                                this.attr(match, context[match]);
                            }
                        }
                    }
                    return this;
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem && elem.parentNode) {
                        this.length = 1;
                        this[0] = elem;
                    }
                    this.context = document;
                    this.selector = selector;
                    return this;
                }
            } else if (!context || context.jquery) {
                return (context || root).find(selector);
            } else {
                return this.constructor(context).find(selector);
            }
        } else if (selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
        } else if (jQuery.isFunction(selector)) {
            return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
    };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for (;i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    jQuery.uniqueSort(matched);
                }
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }
            return this.pushStack(matched);
        };
    });
    var rnotwhite = /\S+/g;
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = options.once;
            fired = firing = true;
            for (;queue.length; firingIndex = -1) {
                memory = queue.shift();
                while (++firingIndex < list.length) {
                    if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                        firingIndex = list.length;
                        memory = false;
                    }
                }
            }
            if (!options.memory) {
                memory = false;
            }
            firing = false;
            if (locked) {
                if (memory) {
                    list = [];
                } else {
                    list = "";
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (jQuery.isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                                add(arg);
                            }
                        });
                    })(arguments);
                    if (memory && !firing) {
                        fire();
                    }
                }
                return this;
            },
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while ((index = jQuery.inArray(arg, list, index)) > -1) {
                        list.splice(index, 1);
                        if (index <= firingIndex) {
                            firingIndex--;
                        }
                    }
                });
                return this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
                if (list) {
                    list = [];
                }
                return this;
            },
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                locked = queue = [];
                if (!memory) {
                    list = memory = "";
                }
                return this;
            },
            locked: function() {
                return !!locked;
            },
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [ context, args.slice ? args.slice() : args ];
                    queue.push(args);
                    if (!firing) {
                        fire();
                    }
                }
                return this;
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                } else {
                                    newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values);
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
        jQuery.ready.promise().done(fn);
        return this;
    };
    jQuery.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [ jQuery ]);
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready");
            }
        }
    });
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
    }
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
                window.setTimeout(jQuery.ready);
            } else {
                document.addEventListener("DOMContentLoaded", completed);
                window.addEventListener("load", completed);
            }
        }
        return readyList.promise(obj);
    };
    jQuery.ready.promise();
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
            }
        } else if (value !== undefined) {
            chainable = true;
            if (!jQuery.isFunction(value)) {
                raw = true;
            }
            if (bulk) {
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                } else {
                    bulk = fn;
                    fn = function(elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) {
                for (;i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };
    var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        register: function(owner, initial) {
            var value = initial || {};
            if (owner.nodeType) {
                owner[this.expando] = value;
            } else {
                Object.defineProperty(owner, this.expando, {
                    value: value,
                    writable: true,
                    configurable: true
                });
            }
            return owner[this.expando];
        },
        cache: function(owner) {
            if (!acceptData(owner)) {
                return {};
            }
            var value = owner[this.expando];
            if (!value) {
                value = {};
                if (acceptData(owner)) {
                    if (owner.nodeType) {
                        owner[this.expando] = value;
                    } else {
                        Object.defineProperty(owner, this.expando, {
                            value: value,
                            configurable: true
                        });
                    }
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
                cache[data] = value;
            } else {
                for (prop in data) {
                    cache[prop] = data[prop];
                }
            }
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
        },
        access: function(owner, key, value) {
            var stored;
            if (key === undefined || key && typeof key === "string" && value === undefined) {
                stored = this.get(owner, key);
                return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
            }
            this.set(owner, key, value);
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, name, camel, cache = owner[this.expando];
            if (cache === undefined) {
                return;
            }
            if (key === undefined) {
                this.register(owner);
            } else {
                if (jQuery.isArray(key)) {
                    name = key.concat(key.map(jQuery.camelCase));
                } else {
                    camel = jQuery.camelCase(key);
                    if (key in cache) {
                        name = [ key, camel ];
                    } else {
                        name = camel;
                        name = name in cache ? [ name ] : name.match(rnotwhite) || [];
                    }
                }
                i = name.length;
                while (i--) {
                    delete cache[name[i]];
                }
            }
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                if (owner.nodeType) {
                    owner[this.expando] = undefined;
                } else {
                    delete owner[this.expando];
                }
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                dataUser.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    dataUser.set(this, key);
                });
            }
            return access(this, function(value) {
                var data, camelKey;
                if (elem && value === undefined) {
                    data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
                    if (data !== undefined) {
                        return data;
                    }
                    camelKey = jQuery.camelCase(key);
                    data = dataUser.get(elem, camelKey);
                    if (data !== undefined) {
                        return data;
                    }
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) {
                        return data;
                    }
                    return;
                }
                camelKey = jQuery.camelCase(key);
                this.each(function() {
                    var data = dataUser.get(this, camelKey);
                    dataUser.set(this, camelKey, value);
                    if (key.indexOf("-") > -1 && data !== undefined) {
                        dataUser.set(this, key, value);
                    }
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [ type + "queue", key ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
    var isHidden = function(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            unit = unit || initialInUnit[3];
            valueParts = valueParts || [];
            initialInUnit = +initial || 1;
            do {
                scale = scale || ".5";
                initialInUnit = initialInUnit / scale;
                jQuery.style(elem, prop, initialInUnit + unit);
            } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([\w:-]+)/;
    var rscriptType = /^$|\/(?:java|ecma)script/i;
    var wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    function getAll(context, tag) {
        var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
    }
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (;i < l; i++) {
            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (;i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
                if (jQuery.type(elem) === "object") {
                    jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem));
                } else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild;
                    }
                    jQuery.merge(nodes, tmp.childNodes);
                    tmp = fragment.firstChild;
                    tmp.textContent = "";
                }
            }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem);
                }
                continue;
            }
            contains = jQuery.contains(elem.ownerDocument, elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (contains) {
                setGlobalEval(tmp);
            }
            if (scripts) {
                j = 0;
                while (elem = tmp[j++]) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem);
                    }
                }
            }
        }
        return fragment;
    }
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
            if (typeof selector !== "string") {
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                on(elem, type, selector, data, types[type], one);
            }
            return elem;
        }
        if (data == null && fn == null) {
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                fn = data;
                data = undefined;
            } else {
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) {
            fn = returnFalse;
        } else if (!fn) {
            return elem;
        }
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!elemData) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            }
            types = (types || "").match(rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = (types || "").match(rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, "handle events");
            }
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
                for (;cur !== this; cur = cur.parentNode || this) {
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        }
    };
    jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e) {
                e.preventDefault();
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
            return;
        }
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.access(src);
            pdataCur = dataPriv.set(dest, pdataOld);
            events = pdataOld.events;
            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};
                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        }
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }
    function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
        if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
                var self = collection.eq(index);
                if (isFunction) {
                    args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
            });
        }
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
                fragment = first;
            }
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                for (;i < l; i++) {
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        if (hasScripts) {
                            jQuery.merge(scripts, getAll(node, "script"));
                        }
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    jQuery.map(scripts, restoreScript);
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src) {
                                if (jQuery._evalUrl) {
                                    jQuery._evalUrl(node.src);
                                }
                            } else {
                                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                            }
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (;(node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
                if (keepData && jQuery.contains(node.ownerDocument, node)) {
                    setGlobalEval(getAll(node, "script"));
                }
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (;(elem = elems[i]) !== undefined; i++) {
                if (acceptData(elem)) {
                    if (data = elem[dataPriv.expando]) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        elem[dataPriv.expando] = undefined;
                    }
                    if (elem[dataUser.expando]) {
                        elem[dataUser.expando] = undefined;
                    }
                }
            }
        }
    });
    jQuery.fn.extend({
        domManip: domManip,
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.textContent = "";
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (;i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this);
                    }
                }
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (;i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var iframe, elemdisplay = {
        HTML: "block",
        BODY: "block"
    };
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
        elem.detach();
        return display;
    }
    function defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                doc = iframe[0].contentDocument;
                doc.write();
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    var rmargin = /^margin/;
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };
    var documentElement = document.documentElement;
    (function() {
        var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        if (!div.style) {
            return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        container.appendChild(div);
        function computeStyleTests() {
            div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
            div.innerHTML = "";
            documentElement.appendChild(container);
            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = divStyle.marginLeft === "2px";
            boxSizingReliableVal = divStyle.width === "4px";
            div.style.marginRight = "50%";
            pixelMarginRightVal = divStyle.marginRight === "4px";
            documentElement.removeChild(container);
        }
        jQuery.extend(support, {
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            boxSizingReliable: function() {
                if (boxSizingReliableVal == null) {
                    computeStyleTests();
                }
                return boxSizingReliableVal;
            },
            pixelMarginRight: function() {
                if (boxSizingReliableVal == null) {
                    computeStyleTests();
                }
                return pixelMarginRightVal;
            },
            reliableMarginLeft: function() {
                if (boxSizingReliableVal == null) {
                    computeStyleTests();
                }
                return reliableMarginLeftVal;
            },
            reliableMarginRight: function() {
                var ret, marginDiv = div.appendChild(document.createElement("div"));
                marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                documentElement.appendChild(container);
                ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
                documentElement.removeChild(container);
                div.removeChild(marginDiv);
                return ret;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
        if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
            ret = jQuery.style(elem, name);
        }
        if (computed) {
            if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                if (conditionFn()) {
                    delete this.get;
                    return;
                }
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cssPrefixes = [ "Webkit", "O", "Moz", "ms" ], emptyStyle = document.createElement("div").style;
    function vendorPropName(name) {
        if (name in emptyStyle) {
            return name;
        }
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name;
            }
        }
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (document.msFullscreenElement && window.top !== window) {
            if (elem.getClientRects().length) {
                val = Math.round(elem.getBoundingClientRect()[name] * 100);
            }
        }
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function showHide(elements, show) {
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = dataPriv.get(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            } else {
                hidden = isHidden(elem);
                if (display !== "none" || !hidden) {
                    dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    type = "number";
                }
                if (value == null || value !== value) {
                    return;
                }
                if (type === "number") {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                }
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    style[name] = value;
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                var matches, styles = extra && getStyles(elem), subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[name] = value;
                    value = jQuery.css(elem, name);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                marginLeft: 0
            }, function() {
                return elem.getBoundingClientRect().left;
            })) + "px";
        }
    });
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        if (computed) {
            return swap(elem, {
                display: "inline-block"
            }, curCSS, [ elem, "marginRight" ]);
        }
    });
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                for (;i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (;i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function createFxNow() {
        window.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    }
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (;index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
                return tween;
            }
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            display = jQuery.css(elem, "display");
            checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                style.display = "inline-block";
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            } else {
                display = undefined;
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = dataPriv.access(elem, "fxshow", {});
            }
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (;index < length; index++) {
                    animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                    deferred.notifyWith(elem, [ animation, 1, 0 ]);
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (jQuery.isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
                }
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [ function(prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
            } ]
        },
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.match(rnotwhite);
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [ defaultPrefilter ],
        prefilter: function(callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback);
            } else {
                Animation.prefilters.push(callback);
            }
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || dataPriv.get(this, "finish")) {
                    anim.stop(true);
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }
                delete data.finish;
            });
        }
    });
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = jQuery.now();
        for (;i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        window.clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() {
                window.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        elem[propName] = false;
                    }
                    elem.removeAttribute(name);
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle;
            if (!isXML) {
                handle = attrHandle[name];
                attrHandle[name] = ret;
                ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                attrHandle[name] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            },
            set: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    var rclass = /[\t\r\n\f]/g;
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                });
            }
            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];
                while (elem = this[i++]) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];
                while (elem = this[i++]) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                });
            }
            return this.each(function() {
                var className, i, self, classNames;
                if (type === "string") {
                    i = 0;
                    self = jQuery(this);
                    classNames = value.match(rnotwhite) || [];
                    while (className = classNames[i++]) {
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) {
                        dataPriv.set(this, "__className__", className);
                    }
                    if (this.setAttribute) {
                        this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                    }
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
                if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    var rreturn = /\r/g, rspaces = /[\x20\t\r\n\f]+/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (;i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                            optionSet = true;
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    });
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") > -1) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (;cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                    if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        elem[type]();
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    support.focusin = "onfocusin" in window;
    if (!support.focusin) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    dataPriv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function() {
                    var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        dataPriv.remove(doc, fix);
                    } else {
                        dataPriv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }
    var location = window.location;
    var nonce = jQuery.now();
    var rquery = /\?/;
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
    };
    jQuery.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
            return null;
        }
        try {
            xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };
    var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev;
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s.throws) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [ "" ];
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                try {
                    urlAnchor.href = s.url;
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    s.crossDomain = true;
                }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data;
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                if (state === 2) {
                    return jqXHR;
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";
                    } else if (status === 304) {
                        statusText = "notmodified";
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                }
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    jQuery.expr.filters.hidden = function(elem) {
        return !jQuery.expr.filters.visible(elem);
    };
    jQuery.expr.filters.visible = function(elem) {
        return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
    };
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function(headers, complete) {
                    var i, xhr = options.xhr();
                    xhr.open(options.type, options.url, options.async, options.username, options.password);
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    }
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    }
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }
                    callback = function(type) {
                        return function() {
                            if (callback) {
                                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") {
                                    if (typeof xhr.status !== "number") {
                                        complete(0, "error");
                                    } else {
                                        complete(xhr.status, xhr.statusText);
                                    }
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                        binary: xhr.response
                                    } : {
                                        text: xhr.responseText
                                    }, xhr.getAllResponseHeaders());
                                }
                            }
                        };
                    };
                    xhr.onload = callback();
                    errorCallback = xhr.onerror = callback("error");
                    if (xhr.onabort !== undefined) {
                        xhr.onabort = errorCallback;
                    } else {
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4) {
                                window.setTimeout(function() {
                                    if (callback) {
                                        errorCallback();
                                    }
                                });
                            }
                        };
                    }
                    callback = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) {
                        if (callback) {
                            throw e;
                        }
                    }
                },
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    });
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName);
                } else {
                    window[callbackName] = overwritten;
                }
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null;
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        context = context || document;
        var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
        if (parsed) {
            return [ context.createElement(parsed[1]) ];
        }
        parsed = buildFragment([ data ], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = jQuery.trim(url.slice(off));
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
                self.each(function() {
                    callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                });
            });
        }
        return this;
    };
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
                elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        offset: function(options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }
            var docElem, win, elem = this[0], box = {
                top: 0,
                left: 0
            }, doc = elem && elem.ownerDocument;
            if (!doc) {
                return;
            }
            docElem = doc.documentElement;
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }
            box = elem.getBoundingClientRect();
            win = getWindow(doc);
            return {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || documentElement;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length);
        };
    });
    jQuery.each([ "top", "left" ], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        size: function() {
            return this.length;
        }
    });
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
    var _jQuery = window.jQuery, _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    };
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});

(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
})(this, function() {
    "use strict";
    var hookCallback;
    function utils_hooks__hooks() {
        return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return Object.prototype.toString.call(input) === "[object Array]";
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
    }
    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }
        if (hasOwnProp(b, "toString")) {
            a.toString = b.toString;
        }
        if (hasOwnProp(b, "valueOf")) {
            a.valueOf = b.valueOf;
        }
        return a;
    }
    function create_utc__createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }
    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated;
            if (m._strict) {
                m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }
    function valid__createInvalid(flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }
        return m;
    }
    var momentProperties = utils_hooks__hooks.momentProperties = [];
    function copyConfig(to, from) {
        var i, prop, val;
        if (typeof from._isAMomentObject !== "undefined") {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== "undefined") {
            to._i = from._i;
        }
        if (typeof from._f !== "undefined") {
            to._f = from._f;
        }
        if (typeof from._l !== "undefined") {
            to._l = from._l;
        }
        if (typeof from._strict !== "undefined") {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== "undefined") {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== "undefined") {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== "undefined") {
            to._offset = from._offset;
        }
        if (typeof from._pf !== "undefined") {
            to._pf = getParsingFlags(from);
        }
        if (typeof from._locale !== "undefined") {
            to._locale = from._locale;
        }
        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== "undefined") {
                    to[prop] = val;
                }
            }
        }
        return to;
    }
    var updateInProgress = false;
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(+config._d);
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }
        return value;
    }
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }
    function Locale() {}
    var locales = {};
    var globalLocale;
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
    }
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join("-"));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }
    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && typeof module !== "undefined" && module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require("./locale/" + name);
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }
    function locale_locales__getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (typeof values === "undefined") {
                data = locale_locales__getLocale(key);
            } else {
                data = defineLocale(key, values);
            }
            if (data) {
                globalLocale = data;
            }
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);
            locale_locales__getSetGlobalLocale(name);
            return locales[name];
        } else {
            delete locales[name];
            return null;
        }
    }
    function locale_locales__getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }
        if (!key) {
            return globalLocale;
        }
        if (!isArray(key)) {
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [ key ];
        }
        return chooseLocale(key);
    }
    var aliases = {};
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }
        return normalizedInput;
    }
    function makeGetSet(unit, keepTime) {
        return function(value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }
    function get_set__get(mom, unit) {
        return mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]();
    }
    function get_set__set(mom, unit, value) {
        return mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
    }
    function getSet(units, value) {
        var unit;
        if (typeof units === "object") {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (typeof this[units] === "function") {
                return this[units](value);
            }
        }
        return this;
    }
    function zeroFill(number, targetLength, forceSign) {
        var output = "" + Math.abs(number), sign = number >= 0;
        while (output.length < targetLength) {
            output = "0" + output;
        }
        return (sign ? forceSign ? "+" : "" : "-") + output;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var formatFunctions = {};
    var formatTokenFunctions = {};
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === "string") {
            func = function() {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function() {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function() {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }
        return function(mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }
        format = expandFormat(format, m.localeData());
        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var match1 = /\d/;
    var match2 = /\d\d/;
    var match3 = /\d{3}/;
    var match4 = /\d{4}/;
    var match6 = /[+-]?\d{6}/;
    var match1to2 = /\d\d?/;
    var match1to3 = /\d{1,3}/;
    var match1to4 = /\d{1,4}/;
    var match1to6 = /[+-]?\d{1,6}/;
    var matchUnsigned = /\d+/;
    var matchSigned = /[+-]?\d+/;
    var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
    var regexes = {};
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = typeof regex === "function" ? regex : function(isStrict) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }
        return regexes[token](config._strict, config._locale);
    }
    function unescapeFormat(s) {
        return s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var tokens = {};
    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === "string") {
            token = [ token ];
        }
        if (typeof callback === "number") {
            func = function(input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }
    function addWeekParseToken(token, callback) {
        addParseToken(token, function(input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }
    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }
    addFormatToken("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    });
    addFormatToken("MMM", 0, 0, function(format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken("MMMM", 0, 0, function(format) {
        return this.localeData().months(this, format);
    });
    addUnitAlias("month", "M");
    addRegexToken("M", match1to2);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", matchWord);
    addRegexToken("MMMM", matchWord);
    addParseToken([ "M", "MM" ], function(input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken([ "MMM", "MMMM" ], function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    function localeMonths(m) {
        return this._months[m.month()];
    }
    var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function localeMonthsShort(m) {
        return this._monthsShort[m.month()];
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
            mom = create_utc__createUTC([ 2e3, i ]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
                this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
            }
            if (!strict && !this._monthsParse[i]) {
                regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
                this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }
    function setMonth(mom, value) {
        var dayOfMonth;
        if (typeof value === "string") {
            value = mom.localeData().monthsParse(value);
            if (typeof value !== "number") {
                return mom;
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, "Month");
        }
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    function checkOverflow(m) {
        var overflow;
        var a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + msg);
        }
    }
    function deprecate(msg, fn) {
        var firstTime = true, msgWithStack = msg + "\n" + new Error().stack;
        return extend(function() {
            if (firstTime) {
                warn(msgWithStack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    utils_hooks__hooks.suppressDeprecationWarnings = false;
    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var isoDates = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/ ], [ "YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d{2}/ ], [ "YYYY-DDD", /\d{4}-\d{3}/ ] ];
    var isoTimes = [ [ "HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ];
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    function configFromISO(config) {
        var i, l, string = config._i, match = from_string__isoRegex.exec(string);
        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0] + (match[6] || " ");
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(matchOffset)) {
                config._f += "Z";
            }
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }
    utils_hooks__hooks.createFromInputFallback = deprecate("moment construction falls back to js Date. This is " + "discouraged and will be removed in upcoming major " + "release. Please refer to " + "https://github.com/moment/moment/issues/1407 for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
    });
    function createDate(y, m, d, h, M, s, ms) {
        var date = new Date(y, m, d, h, M, s, ms);
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }
    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }
    addFormatToken(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    });
    addFormatToken(0, [ "YYYY", 4 ], 0, "year");
    addFormatToken(0, [ "YYYYY", 5 ], 0, "year");
    addFormatToken(0, [ "YYYYYY", 6, true ], 0, "year");
    addUnitAlias("year", "y");
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken([ "YYYY", "YYYYY", "YYYYYY" ], YEAR);
    addParseToken("YY", function(input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    utils_hooks__hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
    };
    var getSetYear = makeGetSet("FullYear", false);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    addFormatToken("w", [ "ww", 2 ], "wo", "week");
    addFormatToken("W", [ "WW", 2 ], "Wo", "isoWeek");
    addUnitAlias("week", "w");
    addUnitAlias("isoWeek", "W");
    addRegexToken("w", match1to2);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken([ "w", "ww", "W", "WW" ], function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek, daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(), adjustedMoment;
        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }
        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }
        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, "d");
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
    }
    addFormatToken("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear");
    addUnitAlias("dayOfYear", "DDD");
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken([ "DDD", "DDDD" ], function(input, array, config) {
        config._dayOfYear = toInt(input);
    });
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = createUTCDate(year, 0, 1).getUTCDay();
        var daysToAdd;
        var dayOfYear;
        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }
    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [ now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() ];
        }
        return [ now.getFullYear(), now.getMonth(), now.getDate() ];
    }
    function configFromArray(config) {
        var i, date, input = [], currentDate, yearToUse;
        if (config._d) {
            return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }
        for (;i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);
            if (w.d != null) {
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                weekday = w.e + dow;
            } else {
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
    utils_hooks__hooks.ISO_8601 = function() {};
    function configFromStringAndFormat(config) {
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = "" + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }
        if (getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) {
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            return hour;
        }
    }
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;
        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (!valid__isValid(tempConfig)) {
                continue;
            }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) {
            return;
        }
        var i = normalizeObjectUnits(config._i);
        config._a = [ i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond ];
        configFromArray(config);
    }
    function createFromConfig(config) {
        var input = config._i, format = config._f, res;
        config._locale = config._locale || locale_locales__getLocale(config._l);
        if (input === null || format === undefined && input === "") {
            return valid__createInvalid({
                nullInput: true
            });
        }
        if (typeof input === "string") {
            config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }
        res = new Moment(checkOverflow(config));
        if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = undefined;
        }
        return res;
    }
    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === "string") {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof input === "object") {
            configFromObject(config);
        } else if (typeof input === "number") {
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        if (typeof locale === "boolean") {
            strict = locale;
            locale = undefined;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function local__createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
        var other = local__createLocal.apply(null, arguments);
        return other < this ? this : other;
    });
    var prototypeMax = deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
        var other = local__createLocal.apply(null, arguments);
        return other > this ? this : other;
    });
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
        this._days = +days + weeks * 7;
        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = locale_locales__getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function offset(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset = this.utcOffset();
            var sign = "+";
            if (offset < 0) {
                offset = -offset;
                sign = "-";
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }
    offset("Z", ":");
    offset("ZZ", "");
    addRegexToken("Z", matchOffset);
    addRegexToken("ZZ", matchOffset);
    addParseToken([ "Z", "ZZ" ], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(string) {
        var matches = (string || "").match(matchOffset) || [];
        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + "").match(chunkOffset) || [ "-", 0, 0 ];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);
        return parts[0] === "+" ? minutes : -minutes;
    }
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - +res;
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
        return model._isUTC ? local__createLocal(input).zone(model._offset || 0) : local__createLocal(input).local();
    }
    function getDateOffset(m) {
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }
    utils_hooks__hooks.updateOffset = function() {};
    function getSetOffset(input, keepLocalTime) {
        var offset = this._offset || 0, localAdjust;
        if (input != null) {
            if (typeof input === "string") {
                input = offsetFromString(input);
            }
            if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, "m");
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, "m"), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== "string") {
                input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
        } else {
            return -this.utcOffset();
        }
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(getDateOffset(this), "m");
            }
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === "string") {
            this.utcOffset(offsetFromString(this._i));
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!input) {
            input = 0;
        } else {
            input = local__createLocal(input).utcOffset();
        }
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
        if (this._a) {
            var other = this._isUTC ? create_utc__createUTC(this._a) : local__createLocal(this._a);
            return this.isValid() && compareArrays(this._a, other.toArray()) > 0;
        }
        return false;
    }
    function isLocal() {
        return !this._isUTC;
    }
    function isUtcOffset() {
        return this._isUTC;
    }
    function isUtc() {
        return this._isUTC && this._offset === 0;
    }
    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    function create__createDuration(input, key) {
        var duration = input, match = null, sign, ret, diffRes;
        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === "number") {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = match[1] === "-" ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = create__isoRegex.exec(input))) {
            sign = match[1] === "-" ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                d: parseIso(match[4], sign),
                h: parseIso(match[5], sign),
                m: parseIso(match[6], sign),
                s: parseIso(match[7], sign),
                w: parseIso(match[8], sign)
            };
        } else if (duration == null) {
            duration = {};
        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale;
        }
        return ret;
    }
    create__createDuration.fn = Duration.prototype;
    function parseIso(inp, sign) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {
            milliseconds: 0,
            months: 0
        };
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period).");
                tmp = val;
                val = period;
                period = tmp;
            }
            val = typeof val === "string" ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }
    function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = duration._days, months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, "Date", get_set__get(mom, "Date") + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, "Month") + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }
    var add_subtract__add = createAdder(1, "add");
    var add_subtract__subtract = createAdder(-1, "subtract");
    function moment_calendar__calendar(time) {
        var now = time || local__createLocal(), sod = cloneWithOffset(now, this).startOf("day"), diff = this.diff(sod, "days", true), format = diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
        return this.format(this.localeData().calendar(format, this, local__createLocal(now)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== "undefined" ? units : "millisecond");
        if (units === "millisecond") {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this > +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return inputMs < +this.clone().startOf(units);
        }
    }
    function isBefore(input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== "undefined" ? units : "millisecond");
        if (units === "millisecond") {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this < +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return +this.clone().endOf(units) < inputMs;
        }
    }
    function isBetween(from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }
    function isSame(input, units) {
        var inputMs;
        units = normalizeUnits(units || "millisecond");
        if (units === "millisecond") {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this === +input;
        } else {
            inputMs = +local__createLocal(input);
            return +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units);
        }
    }
    function absFloor(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }
    function diff(input, units, asFloat) {
        var that = cloneWithOffset(input, this), zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4, delta, output;
        units = normalizeUnits(units);
        if (units === "year" || units === "month" || units === "quarter") {
            output = monthDiff(this, that);
            if (units === "quarter") {
                output = output / 3;
            } else if (units === "year") {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === "second" ? delta / 1e3 : units === "minute" ? delta / 6e4 : units === "hour" ? delta / 36e5 : units === "day" ? (delta - zoneDelta) / 864e5 : units === "week" ? (delta - zoneDelta) / 6048e5 : delta;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust);
    }
    utils_hooks__hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function moment_format__toISOString() {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if ("function" === typeof Date.prototype.toISOString) {
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
            }
        } else {
            return formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        }
    }
    function format(inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({
            to: this,
            from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
    }
    function fromNow(withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({
            from: this,
            to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
    }
    function toNow(withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }
    function locale(key) {
        var newLocaleData;
        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }
    var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    });
    function localeData() {
        return this._locale;
    }
    function startOf(units) {
        units = normalizeUnits(units);
        switch (units) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        if (units === "week") {
            this.weekday(0);
        }
        if (units === "isoWeek") {
            this.isoWeekday(1);
        }
        if (units === "quarter") {
            this.month(Math.floor(this.month() / 3) * 3);
        }
        return this;
    }
    function endOf(units) {
        units = normalizeUnits(units);
        if (units === undefined || units === "millisecond") {
            return this;
        }
        return this.startOf(units).add(1, units === "isoWeek" ? "week" : units).subtract(1, "ms");
    }
    function to_type__valueOf() {
        return +this._d - (this._offset || 0) * 6e4;
    }
    function unix() {
        return Math.floor(+this / 1e3);
    }
    function toDate() {
        return this._offset ? new Date(+this) : this._d;
    }
    function toArray() {
        var m = this;
        return [ m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond() ];
    }
    function moment_valid__isValid() {
        return valid__isValid(this);
    }
    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    addFormatToken(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    });
    addFormatToken(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [ token, token.length ], 0, getter);
    }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    addUnitAlias("weekYear", "gg");
    addUnitAlias("isoWeekYear", "GG");
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken([ "gg", "GG" ], function(input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    function weeksInYear(year, dow, doy) {
        return weekOfYear(local__createLocal([ year, 11, 31 + dow - doy ]), dow, doy).week;
    }
    function getSetWeekYear(input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return input == null ? year : this.add(input - year, "y");
    }
    function getSetISOWeekYear(input) {
        var year = weekOfYear(this, 1, 4).year;
        return input == null ? year : this.add(input - year, "y");
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    addFormatToken("Q", 0, 0, "quarter");
    addUnitAlias("quarter", "Q");
    addRegexToken("Q", match1);
    addParseToken("Q", function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    addFormatToken("D", [ "DD", 2 ], "Do", "date");
    addUnitAlias("date", "D");
    addRegexToken("D", match1to2);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function(isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });
    addParseToken([ "D", "DD" ], DATE);
    addParseToken("Do", function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });
    var getSetDayOfMonth = makeGetSet("Date", true);
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function(format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken("ddd", 0, 0, function(format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken("dddd", 0, 0, function(format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    addUnitAlias("day", "d");
    addUnitAlias("weekday", "e");
    addUnitAlias("isoWeekday", "E");
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", matchWord);
    addRegexToken("ddd", matchWord);
    addRegexToken("dddd", matchWord);
    addWeekParseToken([ "dd", "ddd", "dddd" ], function(input, week, config) {
        var weekday = config._locale.weekdaysParse(input);
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });
    addWeekParseToken([ "d", "e", "E" ], function(input, week, config, token) {
        week[token] = toInt(input);
    });
    function parseWeekday(input, locale) {
        if (typeof input === "string") {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            } else {
                input = locale.weekdaysParse(input);
                if (typeof input !== "number") {
                    return null;
                }
            }
        }
        return input;
    }
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    function localeWeekdays(m) {
        return this._weekdays[m.day()];
    }
    var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    function localeWeekdaysShort(m) {
        return this._weekdaysShort[m.day()];
    }
    var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    function localeWeekdaysMin(m) {
        return this._weekdaysMin[m.day()];
    }
    function localeWeekdaysParse(weekdayName) {
        var i, mom, regex;
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
            if (!this._weekdaysParse[i]) {
                mom = local__createLocal([ 2e3, 1 ]).day(i);
                regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
                this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }
    function getSetDayOfWeek(input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
        } else {
            return day;
        }
    }
    function getSetLocaleDayOfWeek(input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
    }
    function getSetISODayOfWeek(input) {
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }
    addFormatToken("H", [ "HH", 2 ], 0, "hour");
    addFormatToken("h", [ "hh", 2 ], 0, function() {
        return this.hours() % 12 || 12;
    });
    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem("a", true);
    meridiem("A", false);
    addUnitAlias("hour", "h");
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2);
    addRegexToken("h", match1to2);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addParseToken([ "H", "HH" ], HOUR);
    addParseToken([ "a", "A" ], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken([ "h", "hh" ], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    function localeIsPM(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? "pm" : "PM";
        } else {
            return isLower ? "am" : "AM";
        }
    }
    var getSetHour = makeGetSet("Hours", true);
    addFormatToken("m", [ "mm", 2 ], 0, "minute");
    addUnitAlias("minute", "m");
    addRegexToken("m", match1to2);
    addRegexToken("mm", match1to2, match2);
    addParseToken([ "m", "mm" ], MINUTE);
    var getSetMinute = makeGetSet("Minutes", false);
    addFormatToken("s", [ "ss", 2 ], 0, "second");
    addUnitAlias("second", "s");
    addRegexToken("s", match1to2);
    addRegexToken("ss", match1to2, match2);
    addParseToken([ "s", "ss" ], SECOND);
    var getSetSecond = makeGetSet("Seconds", false);
    addFormatToken("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    });
    function millisecond__milliseconds(token) {
        addFormatToken(0, [ token, 3 ], 0, "millisecond");
    }
    millisecond__milliseconds("SSS");
    millisecond__milliseconds("SSSS");
    addUnitAlias("millisecond", "ms");
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    addRegexToken("SSSS", matchUnsigned);
    addParseToken([ "S", "SS", "SSS", "SSSS" ], function(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1e3);
    });
    var getSetMillisecond = makeGetSet("Milliseconds", false);
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");
    function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
    }
    function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var momentPrototype__proto = Moment.prototype;
    momentPrototype__proto.add = add_subtract__add;
    momentPrototype__proto.calendar = moment_calendar__calendar;
    momentPrototype__proto.clone = clone;
    momentPrototype__proto.diff = diff;
    momentPrototype__proto.endOf = endOf;
    momentPrototype__proto.format = format;
    momentPrototype__proto.from = from;
    momentPrototype__proto.fromNow = fromNow;
    momentPrototype__proto.to = to;
    momentPrototype__proto.toNow = toNow;
    momentPrototype__proto.get = getSet;
    momentPrototype__proto.invalidAt = invalidAt;
    momentPrototype__proto.isAfter = isAfter;
    momentPrototype__proto.isBefore = isBefore;
    momentPrototype__proto.isBetween = isBetween;
    momentPrototype__proto.isSame = isSame;
    momentPrototype__proto.isValid = moment_valid__isValid;
    momentPrototype__proto.lang = lang;
    momentPrototype__proto.locale = locale;
    momentPrototype__proto.localeData = localeData;
    momentPrototype__proto.max = prototypeMax;
    momentPrototype__proto.min = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set = getSet;
    momentPrototype__proto.startOf = startOf;
    momentPrototype__proto.subtract = add_subtract__subtract;
    momentPrototype__proto.toArray = toArray;
    momentPrototype__proto.toDate = toDate;
    momentPrototype__proto.toISOString = moment_format__toISOString;
    momentPrototype__proto.toJSON = moment_format__toISOString;
    momentPrototype__proto.toString = toString;
    momentPrototype__proto.unix = unix;
    momentPrototype__proto.valueOf = to_type__valueOf;
    momentPrototype__proto.year = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;
    momentPrototype__proto.weekYear = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
    momentPrototype__proto.month = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;
    momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
    momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
    momentPrototype__proto.weeksInYear = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
    momentPrototype__proto.date = getSetDayOfMonth;
    momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
    momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear = getSetDayOfYear;
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
    momentPrototype__proto.utcOffset = getSetOffset;
    momentPrototype__proto.utc = setOffsetToUTC;
    momentPrototype__proto.local = setOffsetToLocal;
    momentPrototype__proto.parseZone = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal = isLocal;
    momentPrototype__proto.isUtcOffset = isUtcOffset;
    momentPrototype__proto.isUtc = isUtc;
    momentPrototype__proto.isUTC = isUtc;
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;
    momentPrototype__proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
    momentPrototype__proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
    momentPrototype__proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
    momentPrototype__proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", getSetZone);
    var momentPrototype = momentPrototype__proto;
    function moment__createUnix(input) {
        return local__createLocal(input * 1e3);
    }
    function moment__createInZone() {
        return local__createLocal.apply(null, arguments).parseZone();
    }
    var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };
    function locale_calendar__calendar(key, mom, now) {
        var output = this._calendar[key];
        return typeof output === "function" ? output.call(mom, now) : output;
    }
    var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY LT",
        LLLL: "dddd, MMMM D, YYYY LT"
    };
    function longDateFormat(key) {
        var output = this._longDateFormat[key];
        if (!output && this._longDateFormat[key.toUpperCase()]) {
            output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(val) {
                return val.slice(1);
            });
            this._longDateFormat[key] = output;
        }
        return output;
    }
    var defaultInvalidDate = "Invalid date";
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = "%d";
    var defaultOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
        return this._ordinal.replace("%d", number);
    }
    function preParsePostFormat(string) {
        return string;
    }
    var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };
    function relative__relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return typeof output === "function" ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? "future" : "past"];
        return typeof format === "function" ? format(output) : format.replace(/%s/i, output);
    }
    function locale_set__set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (typeof prop === "function") {
                this[i] = prop;
            } else {
                this["_" + i] = prop;
            }
        }
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
    }
    var prototype__proto = Locale.prototype;
    prototype__proto._calendar = defaultCalendar;
    prototype__proto.calendar = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat = longDateFormat;
    prototype__proto._invalidDate = defaultInvalidDate;
    prototype__proto.invalidDate = invalidDate;
    prototype__proto._ordinal = defaultOrdinal;
    prototype__proto.ordinal = ordinal;
    prototype__proto._ordinalParse = defaultOrdinalParse;
    prototype__proto.preparse = preParsePostFormat;
    prototype__proto.postformat = preParsePostFormat;
    prototype__proto._relativeTime = defaultRelativeTime;
    prototype__proto.relativeTime = relative__relativeTime;
    prototype__proto.pastFuture = pastFuture;
    prototype__proto.set = locale_set__set;
    prototype__proto.months = localeMonths;
    prototype__proto._months = defaultLocaleMonths;
    prototype__proto.monthsShort = localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse = localeMonthsParse;
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
    prototype__proto.weekdays = localeWeekdays;
    prototype__proto._weekdays = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin = localeWeekdaysMin;
    prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort = localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse = localeWeekdaysParse;
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;
    function lists__get(format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }
    function list(format, index, field, count, setter) {
        if (typeof format === "number") {
            index = format;
            format = undefined;
        }
        format = format || "";
        if (index != null) {
            return lists__get(format, index, field, setter);
        }
        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }
    function lists__listMonths(format, index) {
        return list(format, index, "months", 12, "month");
    }
    function lists__listMonthsShort(format, index) {
        return list(format, index, "monthsShort", 12, "month");
    }
    function lists__listWeekdays(format, index) {
        return list(format, index, "weekdays", 7, "day");
    }
    function lists__listWeekdaysShort(format, index) {
        return list(format, index, "weekdaysShort", 7, "day");
    }
    function lists__listWeekdaysMin(format, index) {
        return list(format, index, "weekdaysMin", 7, "day");
    }
    locale_locales__getSetGlobalLocale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return number + output;
        }
    });
    utils_hooks__hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", locale_locales__getLocale);
    var mathAbs = Math.abs;
    function duration_abs__abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function duration_add_subtract__addSubtract(duration, input, value, direction) {
        var other = create__createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    function duration_add_subtract__add(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }
    function duration_add_subtract__subtract(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }
    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years = 0;
        data.milliseconds = milliseconds % 1e3;
        seconds = absFloor(milliseconds / 1e3);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        years = absFloor(daysToYears(days));
        days -= absFloor(yearsToDays(years));
        months += absFloor(days / 30);
        days %= 30;
        years += absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToYears(days) {
        return days * 400 / 146097;
    }
    function yearsToDays(years) {
        return years * 146097 / 400;
    }
    function as(units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "year") {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToYears(days) * 12;
            return units === "month" ? months : months / 12;
        } else {
            days = this._days + Math.round(yearsToDays(this._months / 12));
            switch (units) {
              case "week":
                return days / 7 + milliseconds / 6048e5;

              case "day":
                return days + milliseconds / 864e5;

              case "hour":
                return days * 24 + milliseconds / 36e5;

              case "minute":
                return days * 1440 + milliseconds / 6e4;

              case "second":
                return days * 86400 + milliseconds / 1e3;

              case "millisecond":
                return Math.floor(days * 864e5) + milliseconds;

              default:
                throw new Error("Unknown unit " + units);
            }
        }
    }
    function duration_as__valueOf() {
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }
    function makeAs(alias) {
        return function() {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs("ms");
    var asSeconds = makeAs("s");
    var asMinutes = makeAs("m");
    var asHours = makeAs("h");
    var asDays = makeAs("d");
    var asWeeks = makeAs("w");
    var asMonths = makeAs("M");
    var asYears = makeAs("y");
    function duration_get__get(units) {
        units = normalizeUnits(units);
        return this[units + "s"]();
    }
    function makeGetter(name) {
        return function() {
            return this._data[name];
        };
    }
    var duration_get__milliseconds = makeGetter("milliseconds");
    var seconds = makeGetter("seconds");
    var minutes = makeGetter("minutes");
    var hours = makeGetter("hours");
    var days = makeGetter("days");
    var months = makeGetter("months");
    var years = makeGetter("years");
    function weeks() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round;
    var thresholds = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds = round(duration.as("s"));
        var minutes = round(duration.as("m"));
        var hours = round(duration.as("h"));
        var days = round(duration.as("d"));
        var months = round(duration.as("M"));
        var years = round(duration.as("y"));
        var a = seconds < thresholds.s && [ "s", seconds ] || minutes === 1 && [ "m" ] || minutes < thresholds.m && [ "mm", minutes ] || hours === 1 && [ "h" ] || hours < thresholds.h && [ "hh", hours ] || days === 1 && [ "d" ] || days < thresholds.d && [ "dd", days ] || months === 1 && [ "M" ] || months < thresholds.M && [ "MM", months ] || years === 1 && [ "y" ] || [ "yy", years ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }
    function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }
    function humanize(withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    }
    var iso_string__abs = Math.abs;
    function iso_string__toISOString() {
        var Y = iso_string__abs(this.years());
        var M = iso_string__abs(this.months());
        var D = iso_string__abs(this.days());
        var h = iso_string__abs(this.hours());
        var m = iso_string__abs(this.minutes());
        var s = iso_string__abs(this.seconds() + this.milliseconds() / 1e3);
        var total = this.asSeconds();
        if (!total) {
            return "P0D";
        }
        return (total < 0 ? "-" : "") + "P" + (Y ? Y + "Y" : "") + (M ? M + "M" : "") + (D ? D + "D" : "") + (h || m || s ? "T" : "") + (h ? h + "H" : "") + (m ? m + "M" : "") + (s ? s + "S" : "");
    }
    var duration_prototype__proto = Duration.prototype;
    duration_prototype__proto.abs = duration_abs__abs;
    duration_prototype__proto.add = duration_add_subtract__add;
    duration_prototype__proto.subtract = duration_add_subtract__subtract;
    duration_prototype__proto.as = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds = asSeconds;
    duration_prototype__proto.asMinutes = asMinutes;
    duration_prototype__proto.asHours = asHours;
    duration_prototype__proto.asDays = asDays;
    duration_prototype__proto.asWeeks = asWeeks;
    duration_prototype__proto.asMonths = asMonths;
    duration_prototype__proto.asYears = asYears;
    duration_prototype__proto.valueOf = duration_as__valueOf;
    duration_prototype__proto._bubble = bubble;
    duration_prototype__proto.get = duration_get__get;
    duration_prototype__proto.milliseconds = duration_get__milliseconds;
    duration_prototype__proto.seconds = seconds;
    duration_prototype__proto.minutes = minutes;
    duration_prototype__proto.hours = hours;
    duration_prototype__proto.days = days;
    duration_prototype__proto.weeks = weeks;
    duration_prototype__proto.months = months;
    duration_prototype__proto.years = years;
    duration_prototype__proto.humanize = humanize;
    duration_prototype__proto.toISOString = iso_string__toISOString;
    duration_prototype__proto.toString = iso_string__toISOString;
    duration_prototype__proto.toJSON = iso_string__toISOString;
    duration_prototype__proto.locale = locale;
    duration_prototype__proto.localeData = localeData;
    duration_prototype__proto.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", iso_string__toISOString);
    duration_prototype__proto.lang = lang;
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function(input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1e3);
    });
    addParseToken("x", function(input, array, config) {
        config._d = new Date(toInt(input));
    });
    utils_hooks__hooks.version = "2.10.3";
    setHookCallback(local__createLocal);
    utils_hooks__hooks.fn = momentPrototype;
    utils_hooks__hooks.min = min;
    utils_hooks__hooks.max = max;
    utils_hooks__hooks.utc = create_utc__createUTC;
    utils_hooks__hooks.unix = moment__createUnix;
    utils_hooks__hooks.months = lists__listMonths;
    utils_hooks__hooks.isDate = isDate;
    utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid = valid__createInvalid;
    utils_hooks__hooks.duration = create__createDuration;
    utils_hooks__hooks.isMoment = isMoment;
    utils_hooks__hooks.weekdays = lists__listWeekdays;
    utils_hooks__hooks.parseZone = moment__createInZone;
    utils_hooks__hooks.localeData = locale_locales__getLocale;
    utils_hooks__hooks.isDuration = isDuration;
    utils_hooks__hooks.monthsShort = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale = defineLocale;
    utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    var _moment = utils_hooks__hooks;
    return _moment;
});

(function() {
    var picker;
    picker = angular.module("daterangepicker", []);
    picker.constant("dateRangePickerConfig", {
        clearLabel: "Clear",
        locale: {
            separator: " - ",
            format: "YYYY-MM-DD"
        }
    });
    picker.directive("dateRangePicker", [ "$compile", "$timeout", "$parse", "dateRangePickerConfig", function($compile, $timeout, $parse, dateRangePickerConfig) {
        return {
            require: "ngModel",
            restrict: "A",
            scope: {
                min: "=",
                max: "=",
                model: "=ngModel",
                opts: "=options",
                clearable: "="
            },
            link: function($scope, element, attrs, modelCtrl) {
                var _clear, _init, _initBoundaryField, _mergeOpts, _picker, _setDatePoint, _setEndDate, _setStartDate, _validate, _validateMax, _validateMin, customOpts, el, opts;
                _mergeOpts = function() {
                    var extend, localeExtend;
                    localeExtend = angular.extend.apply(angular, Array.prototype.slice.call(arguments).map(function(opt) {
                        return opt != null ? opt.locale : void 0;
                    }).filter(function(opt) {
                        return !!opt;
                    }));
                    extend = angular.extend.apply(angular, arguments);
                    extend.locale = localeExtend;
                    return extend;
                };
                el = $(element);
                customOpts = $scope.opts;
                opts = _mergeOpts({}, dateRangePickerConfig, customOpts);
                _picker = null;
                _clear = function() {
                    _picker.setStartDate();
                    return _picker.setEndDate();
                };
                _setDatePoint = function(setter) {
                    return function(newValue) {
                        if (_picker && newValue) {
                            return setter(moment(newValue));
                        }
                    };
                };
                _setStartDate = _setDatePoint(function(m) {
                    if (_picker.endDate < m) {
                        _picker.setEndDate(m);
                    }
                    opts.startDate = m;
                    _picker.setStartDate(m);
                });
                _setEndDate = _setDatePoint(function(m) {
                    if (_picker.startDate > m) {
                        _picker.setStartDate(m);
                    }
                    opts.endDate = m;
                    _picker.setEndDate(m);
                });
                _validate = function(validator) {
                    return function(boundary, actual) {
                        if (boundary && actual) {
                            return validator(moment(boundary), moment(actual));
                        } else {
                            return true;
                        }
                    };
                };
                _validateMin = _validate(function(min, start) {
                    return min.isBefore(start) || min.isSame(start, "day");
                });
                _validateMax = _validate(function(max, end) {
                    return max.isAfter(end) || max.isSame(end, "day");
                });
                modelCtrl.$formatters.push(function(objValue) {
                    var f;
                    f = function(date) {
                        if (!moment.isMoment(date)) {
                            return moment(date).format(opts.locale.format);
                        } else {
                            return date.format(opts.locale.format);
                        }
                    };
                    if (opts.singleDatePicker && objValue) {
                        return f(objValue);
                    } else if (objValue.startDate) {
                        return [ f(objValue.startDate), f(objValue.endDate) ].join(opts.locale.separator);
                    } else {
                        return "";
                    }
                });
                modelCtrl.$render = function() {
                    if (modelCtrl.$modelValue && modelCtrl.$modelValue.startDate) {
                        _setStartDate(modelCtrl.$modelValue.startDate);
                        _setEndDate(modelCtrl.$modelValue.endDate);
                    } else {
                        _clear();
                    }
                    return el.val(modelCtrl.$viewValue);
                };
                modelCtrl.$parsers.push(function(val) {
                    var f, objValue, x;
                    f = function(value) {
                        return moment(value, opts.locale.format);
                    };
                    objValue = {
                        startDate: null,
                        endDate: null
                    };
                    if (angular.isString(val) && val.length > 0) {
                        if (opts.singleDatePicker) {
                            objValue = f(val);
                        } else {
                            x = val.split(opts.locale.separator).map(f);
                            objValue.startDate = x[0];
                            objValue.endDate = x[1];
                        }
                    }
                    return objValue;
                });
                modelCtrl.$isEmpty = function(val) {
                    return !(angular.isString(val) && val.length > 0);
                };
                _init = function() {
                    var eventType, results;
                    el.daterangepicker(angular.extend(opts, {
                        autoUpdateInput: true
                    }), function(start, end) {
                        return $scope.$apply(function() {
                            return $scope.model = opts.singleDatePicker ? start : {
                                startDate: start,
                                endDate: end
                            };
                        });
                    });
                    _picker = el.data("daterangepicker");
                    results = [];
                    for (eventType in opts.eventHandlers) {
                        results.push(el.on(eventType, function(e) {
                            var eventName;
                            eventName = e.type + "." + e.namespace;
                            return $scope.$evalAsync(opts.eventHandlers[eventName]);
                        }));
                    }
                    return results;
                };
                _init();
                $scope.$watch("model.startDate", function(n) {
                    return _setStartDate(n);
                });
                $scope.$watch("model.endDate", function(n) {
                    return _setEndDate(n);
                });
                _initBoundaryField = function(field, validator, modelField, optName) {
                    if (attrs[field]) {
                        modelCtrl.$validators[field] = function(value) {
                            return value && validator(opts[optName], value[modelField]);
                        };
                        return $scope.$watch(field, function(date) {
                            opts[optName] = date ? moment(date) : false;
                            return _init();
                        });
                    }
                };
                _initBoundaryField("min", _validateMin, "startDate", "minDate");
                _initBoundaryField("max", _validateMax, "endDate", "maxDate");
                if (attrs.options) {
                    $scope.$watch("opts", function(newOpts) {
                        opts = _mergeOpts(opts, newOpts);
                        return _init();
                    }, true);
                }
                if (attrs.clearable) {
                    $scope.$watch("clearable", function(newClearable) {
                        if (newClearable) {
                            opts = _mergeOpts(opts, {
                                locale: {
                                    cancelLabel: opts.clearLabel
                                }
                            });
                        }
                        _init();
                        if (newClearable) {
                            return el.on("cancel.daterangepicker", function() {
                                return $scope.$apply(function() {
                                    return $scope.model = opts.singleDatePicker ? null : {
                                        startDate: null,
                                        endDate: null
                                    };
                                });
                            });
                        }
                    });
                }
                return $scope.$on("$destroy", function() {
                    return _picker != null ? _picker.remove() : void 0;
                });
            }
        };
    } ]);
}).call(this);

(function(I, f, C) {
    "use strict";
    function D(t, e) {
        e = e || {};
        f.forEach(e, function(f, k) {
            delete e[k];
        });
        for (var k in t) !t.hasOwnProperty(k) || "$" === k.charAt(0) && "$" === k.charAt(1) || (e[k] = t[k]);
        return e;
    }
    var y = f.$$minErr("$resource"), B = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
    f.module("ngResource", [ "ng" ]).provider("$resource", function() {
        var t = /^https?:\/\/[^\/]*/, e = this;
        this.defaults = {
            stripTrailingSlashes: !0,
            actions: {
                get: {
                    method: "GET"
                },
                save: {
                    method: "POST"
                },
                query: {
                    method: "GET",
                    isArray: !0
                },
                remove: {
                    method: "DELETE"
                },
                "delete": {
                    method: "DELETE"
                }
            }
        };
        this.$get = [ "$http", "$q", function(k, F) {
            function w(f, g) {
                this.template = f;
                this.defaults = r({}, e.defaults, g);
                this.urlParams = {};
            }
            function z(l, g, s, h) {
                function c(a, q) {
                    var c = {};
                    q = r({}, g, q);
                    u(q, function(b, q) {
                        x(b) && (b = b());
                        var m;
                        if (b && b.charAt && "@" == b.charAt(0)) {
                            m = a;
                            var d = b.substr(1);
                            if (null == d || "" === d || "hasOwnProperty" === d || !B.test("." + d)) throw y("badmember", d);
                            for (var d = d.split("."), n = 0, g = d.length; n < g && f.isDefined(m); n++) {
                                var e = d[n];
                                m = null !== m ? m[e] : C;
                            }
                        } else m = b;
                        c[q] = m;
                    });
                    return c;
                }
                function G(a) {
                    return a.resource;
                }
                function d(a) {
                    D(a || {}, this);
                }
                var t = new w(l, h);
                s = r({}, e.defaults.actions, s);
                d.prototype.toJSON = function() {
                    var a = r({}, this);
                    delete a.$promise;
                    delete a.$resolved;
                    return a;
                };
                u(s, function(a, q) {
                    var g = /^(POST|PUT|PATCH)$/i.test(a.method);
                    d[q] = function(b, A, m, e) {
                        var n = {}, h, l, s;
                        switch (arguments.length) {
                          case 4:
                            s = e, l = m;

                          case 3:
                          case 2:
                            if (x(A)) {
                                if (x(b)) {
                                    l = b;
                                    s = A;
                                    break;
                                }
                                l = A;
                                s = m;
                            } else {
                                n = b;
                                h = A;
                                l = m;
                                break;
                            }

                          case 1:
                            x(b) ? l = b : g ? h = b : n = b;
                            break;

                          case 0:
                            break;

                          default:
                            throw y("badargs", arguments.length);
                        }
                        var w = this instanceof d, p = w ? h : a.isArray ? [] : new d(h), v = {}, z = a.interceptor && a.interceptor.response || G, B = a.interceptor && a.interceptor.responseError || C;
                        u(a, function(a, b) {
                            switch (b) {
                              default:
                                v[b] = H(a);
                                break;

                              case "params":
                              case "isArray":
                              case "interceptor":
                                break;

                              case "timeout":
                                v[b] = a;
                            }
                        });
                        g && (v.data = h);
                        t.setUrlParams(v, r({}, c(h, a.params || {}), n), a.url);
                        n = k(v).then(function(b) {
                            var c = b.data, m = p.$promise;
                            if (c) {
                                if (f.isArray(c) !== !!a.isArray) throw y("badcfg", q, a.isArray ? "array" : "object", f.isArray(c) ? "array" : "object", v.method, v.url);
                                a.isArray ? (p.length = 0, u(c, function(b) {
                                    "object" === typeof b ? p.push(new d(b)) : p.push(b);
                                })) : (D(c, p), p.$promise = m);
                            }
                            p.$resolved = !0;
                            b.resource = p;
                            return b;
                        }, function(b) {
                            p.$resolved = !0;
                            (s || E)(b);
                            return F.reject(b);
                        });
                        n = n.then(function(b) {
                            var a = z(b);
                            (l || E)(a, b.headers);
                            return a;
                        }, B);
                        return w ? n : (p.$promise = n, p.$resolved = !1, p);
                    };
                    d.prototype["$" + q] = function(b, a, c) {
                        x(b) && (c = a, a = b, b = {});
                        b = d[q].call(this, b, this, a, c);
                        return b.$promise || b;
                    };
                });
                d.bind = function(a) {
                    return z(l, r({}, g, a), s);
                };
                return d;
            }
            var E = f.noop, u = f.forEach, r = f.extend, H = f.copy, x = f.isFunction;
            w.prototype = {
                setUrlParams: function(l, g, e) {
                    var h = this, c = e || h.template, k, d, r = "", a = h.urlParams = {};
                    u(c.split(/\W/), function(d) {
                        if ("hasOwnProperty" === d) throw y("badname");
                        !/^\d+$/.test(d) && d && new RegExp("(^|[^\\\\]):" + d + "(\\W|$)").test(c) && (a[d] = !0);
                    });
                    c = c.replace(/\\:/g, ":");
                    c = c.replace(t, function(a) {
                        r = a;
                        return "";
                    });
                    g = g || {};
                    u(h.urlParams, function(a, e) {
                        k = g.hasOwnProperty(e) ? g[e] : h.defaults[e];
                        f.isDefined(k) && null !== k ? (d = encodeURIComponent(k).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), 
                        c = c.replace(new RegExp(":" + e + "(\\W|$)", "g"), function(b, a) {
                            return d + a;
                        })) : c = c.replace(new RegExp("(/?):" + e + "(\\W|$)", "g"), function(b, a, c) {
                            return "/" == c.charAt(0) ? c : a + c;
                        });
                    });
                    h.defaults.stripTrailingSlashes && (c = c.replace(/\/+$/, "") || "/");
                    c = c.replace(/\/\.(?=\w+($|\?))/, ".");
                    l.url = r + c.replace(/\/\\\./, "/.");
                    u(g, function(a, c) {
                        h.urlParams[c] || (l.params = l.params || {}, l.params[c] = a);
                    });
                }
            };
            return z;
        } ];
    });
})(window, window.angular);

"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), 
function(a, b, c) {
    "use strict";
    function d(a, b) {
        return N(new (N(function() {}, {
            prototype: a
        }))(), b);
    }
    function e(a) {
        return M(arguments, function(b) {
            b !== a && M(b, function(b, c) {
                a.hasOwnProperty(c) || (a[c] = b);
            });
        }), a;
    }
    function f(a, b) {
        var c = [];
        for (var d in a.path) {
            if (a.path[d] !== b.path[d]) break;
            c.push(a.path[d]);
        }
        return c;
    }
    function g(a) {
        if (Object.keys) return Object.keys(a);
        var b = [];
        return M(a, function(a, c) {
            b.push(c);
        }), b;
    }
    function h(a, b) {
        if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
        var c = a.length >>> 0, d = Number(arguments[2]) || 0;
        for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++) if (d in a && a[d] === b) return d;
        return -1;
    }
    function i(a, b, c, d) {
        var e, i = f(c, d), j = {}, k = [];
        for (var l in i) if (i[l].params && (e = g(i[l].params), e.length)) for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), 
        j[e[m]] = a[e[m]]);
        return N({}, j, b);
    }
    function j(a, b, c) {
        if (!c) {
            c = [];
            for (var d in a) c.push(d);
        }
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (a[f] != b[f]) return !1;
        }
        return !0;
    }
    function k(a, b) {
        var c = {};
        return M(a, function(a) {
            c[a] = b[a];
        }), c;
    }
    function l(a) {
        var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        return M(c, function(c) {
            c in a && (b[c] = a[c]);
        }), b;
    }
    function m(a) {
        var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var d in a) -1 == h(c, d) && (b[d] = a[d]);
        return b;
    }
    function n(a, b) {
        var c = L(a), d = c ? [] : {};
        return M(a, function(a, e) {
            b(a, e) && (d[c ? d.length : e] = a);
        }), d;
    }
    function o(a, b) {
        var c = L(a) ? [] : {};
        return M(a, function(a, d) {
            c[d] = b(a, d);
        }), c;
    }
    function p(a, b) {
        var d = 1, f = 2, i = {}, j = [], k = i, l = N(a.when(i), {
            $$promises: i,
            $$values: i
        });
        this.study = function(i) {
            function n(a, c) {
                if (s[c] !== f) {
                    if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
                    if (s[c] = d, J(a)) q.push(c, [ function() {
                        return b.get(a);
                    } ], j); else {
                        var e = b.annotate(a);
                        M(e, function(a) {
                            a !== c && i.hasOwnProperty(a) && n(i[a], a);
                        }), q.push(c, a, e);
                    }
                    r.pop(), s[c] = f;
                }
            }
            function o(a) {
                return K(a) && a.then && a.$$promises;
            }
            if (!K(i)) throw new Error("'invocables' must be an object");
            var p = g(i || {}), q = [], r = [], s = {};
            return M(i, n), i = r = s = null, function(d, f, g) {
                function h() {
                    --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, 
                    delete r.$$inheritedValues, n.resolve(t));
                }
                function i(a) {
                    r.$$failure = a, n.reject(a);
                }
                function j(c, e, f) {
                    function j(a) {
                        l.reject(a), i(a);
                    }
                    function k() {
                        if (!H(r.$$failure)) try {
                            l.resolve(b.invoke(e, g, t)), l.promise.then(function(a) {
                                t[c] = a, h();
                            }, j);
                        } catch (a) {
                            j(a);
                        }
                    }
                    var l = a.defer(), m = 0;
                    M(f, function(a) {
                        s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function(b) {
                            t[a] = b, --m || k();
                        }, j));
                    }), m || k(), s[c] = l.promise;
                }
                if (o(d) && g === c && (g = f, f = d, d = null), d) {
                    if (!K(d)) throw new Error("'locals' must be an object");
                } else d = k;
                if (f) {
                    if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
                } else f = l;
                var n = a.defer(), r = n.promise, s = r.$$promises = {}, t = N({}, d), u = 1 + q.length / 3, v = !1;
                if (H(f.$$failure)) return i(f.$$failure), r;
                f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), N(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), 
                r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), 
                f.then(h, i));
                for (var w = 0, x = q.length; x > w; w += 3) d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
                return r;
            };
        }, this.resolve = function(a, b, c, d) {
            return this.study(a)(b, c, d);
        };
    }
    function q(a, b, c) {
        this.fromConfig = function(a, b, c) {
            return H(a.template) ? this.fromString(a.template, b) : H(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : H(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null;
        }, this.fromString = function(a, b) {
            return I(a) ? a(b) : a;
        }, this.fromUrl = function(c, d) {
            return I(c) && (c = c(d)), null == c ? null : a.get(c, {
                cache: b,
                headers: {
                    Accept: "text/html"
                }
            }).then(function(a) {
                return a.data;
            });
        }, this.fromProvider = function(a, b, d) {
            return c.invoke(a, null, d || {
                params: b
            });
        };
    }
    function r(a, b, e) {
        function f(b, c, d, e) {
            if (q.push(b), o[b]) return o[b];
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
            if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
            return p[b] = new P.Param(b, c, d, e), p[b];
        }
        function g(a, b, c, d) {
            var e = [ "", "" ], f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!b) return f;
            switch (c) {
              case !1:
                e = [ "(", ")" + (d ? "?" : "") ];
                break;

              case !0:
                e = [ "?(", ")?" ];
                break;

              default:
                e = [ "(" + c + "|", ")?" ];
            }
            return f + e[0] + b + e[1];
        }
        function h(e, f) {
            var g, h, i, j, k;
            return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), 
            j = P.type(h || "string") || d(P.type("string"), {
                pattern: new RegExp(h, b.caseInsensitive ? "i" : c)
            }), {
                id: g,
                regexp: h,
                segment: i,
                type: j,
                cfg: k
            };
        }
        b = N({
            params: {}
        }, K(b) ? b : {});
        var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = "^", m = 0, n = this.segments = [], o = e ? e.params : {}, p = this.params = e ? e.params.$$new() : new P.ParamSet(), q = [];
        this.source = a;
        for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0)); ) s = f(r.id, r.type, r.cfg, "path"), 
        l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), 
        m = j.lastIndex;
        t = a.substring(m);
        var u = t.indexOf("?");
        if (u >= 0) {
            var v = this.sourceSearch = t.substring(u);
            if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v); ) r = h(i, !0), 
            s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex;
        } else this.sourcePath = a, this.sourceSearch = "";
        l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), 
        this.prefix = n[0], this.$$paramNames = q;
    }
    function s(a) {
        N(this, a);
    }
    function t() {
        function a(a) {
            return null != a ? a.toString().replace(/\//g, "%2F") : a;
        }
        function e(a) {
            return null != a ? a.toString().replace(/%2F/g, "/") : a;
        }
        function f() {
            return {
                strict: p,
                caseInsensitive: m
            };
        }
        function i(a) {
            return I(a) || L(a) && I(a[a.length - 1]);
        }
        function j() {
            for (;w.length; ) {
                var a = w.shift();
                if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                b.extend(u[a.name], l.invoke(a.def));
            }
        }
        function k(a) {
            N(this, a || {});
        }
        P = this;
        var l, m = !1, p = !0, q = !1, u = {}, v = !0, w = [], x = {
            string: {
                encode: a,
                decode: e,
                is: function(a) {
                    return null == a || !H(a) || "string" == typeof a;
                },
                pattern: /[^\/]*/
            },
            "int": {
                encode: a,
                decode: function(a) {
                    return parseInt(a, 10);
                },
                is: function(a) {
                    return H(a) && this.decode(a.toString()) === a;
                },
                pattern: /\d+/
            },
            bool: {
                encode: function(a) {
                    return a ? 1 : 0;
                },
                decode: function(a) {
                    return 0 !== parseInt(a, 10);
                },
                is: function(a) {
                    return a === !0 || a === !1;
                },
                pattern: /0|1/
            },
            date: {
                encode: function(a) {
                    return this.is(a) ? [ a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2) ].join("-") : c;
                },
                decode: function(a) {
                    if (this.is(a)) return a;
                    var b = this.capture.exec(a);
                    return b ? new Date(b[1], b[2] - 1, b[3]) : c;
                },
                is: function(a) {
                    return a instanceof Date && !isNaN(a.valueOf());
                },
                equals: function(a, b) {
                    return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {
                encode: b.toJson,
                decode: b.fromJson,
                is: b.isObject,
                equals: b.equals,
                pattern: /[^\/]*/
            },
            any: {
                encode: b.identity,
                decode: b.identity,
                equals: b.equals,
                pattern: /.*/
            }
        };
        t.$$getDefaultValue = function(a) {
            if (!i(a.value)) return a.value;
            if (!l) throw new Error("Injectable functions cannot be called at configuration time");
            return l.invoke(a.value);
        }, this.caseInsensitive = function(a) {
            return H(a) && (m = a), m;
        }, this.strictMode = function(a) {
            return H(a) && (p = a), p;
        }, this.defaultSquashPolicy = function(a) {
            if (!H(a)) return q;
            if (a !== !0 && a !== !1 && !J(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
            return q = a, a;
        }, this.compile = function(a, b) {
            return new r(a, N(f(), b));
        }, this.isMatcher = function(a) {
            if (!K(a)) return !1;
            var b = !0;
            return M(r.prototype, function(c, d) {
                I(c) && (b = b && H(a[d]) && I(a[d]));
            }), b;
        }, this.type = function(a, b, c) {
            if (!H(b)) return u[a];
            if (u.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
            return u[a] = new s(N({
                name: a
            }, b)), c && (w.push({
                name: a,
                def: c
            }), v || j()), this;
        }, M(x, function(a, b) {
            u[b] = new s(N({
                name: b
            }, a));
        }), u = d(u, {}), this.$get = [ "$injector", function(a) {
            return l = a, v = !1, j(), M(x, function(a, b) {
                u[b] || (u[b] = new s(a));
            }), this;
        } ], this.Param = function(a, b, d, e) {
            function f(a) {
                var b = K(a) ? g(a) : [], c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
                return c && (a = {
                    value: a
                }), a.$$fn = i(a.value) ? a.value : function() {
                    return a.value;
                }, a;
            }
            function j(b, c, d) {
                if (b.type && c) throw new Error("Param '" + a + "' has two type configurations.");
                return c ? c : b.type ? b.type instanceof s ? b.type : new s(b.type) : "config" === d ? u.any : u.string;
            }
            function k() {
                var b = {
                    array: "search" === e ? "auto" : !1
                }, c = a.match(/\[\]$/) ? {
                    array: !0
                } : {};
                return N(b, c, d).array;
            }
            function m(a, b) {
                var c = a.squash;
                if (!b || c === !1) return !1;
                if (!H(c) || null == c) return q;
                if (c === !0 || J(c)) return c;
                throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string");
            }
            function p(a, b, d, e) {
                var f, g, i = [ {
                    from: "",
                    to: d || b ? c : ""
                }, {
                    from: null,
                    to: d || b ? c : ""
                } ];
                return f = L(a.replace) ? a.replace : [], J(e) && f.push({
                    from: e,
                    to: c
                }), g = o(f, function(a) {
                    return a.from;
                }), n(i, function(a) {
                    return -1 === h(g, a.from);
                }).concat(f);
            }
            function r() {
                if (!l) throw new Error("Injectable functions cannot be called at configuration time");
                var a = l.invoke(d.$$fn);
                if (null !== a && a !== c && !w.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + w.id + "' is not an instance of Type (" + w.type.name + ")");
                return a;
            }
            function t(a) {
                function b(a) {
                    return function(b) {
                        return b.from === a;
                    };
                }
                function c(a) {
                    var c = o(n(w.replace, b(a)), function(a) {
                        return a.to;
                    });
                    return c.length ? c[0] : a;
                }
                return a = c(a), H(a) ? w.type.$normalize(a) : r();
            }
            function v() {
                return "{Param:" + a + " " + b + " squash: '" + z + "' optional: " + y + "}";
            }
            var w = this;
            d = f(d), b = j(d, b, e);
            var x = k();
            b = x ? b.$asArray(x, "search" === e) : b, "string" !== b.name || x || "path" !== e || d.value !== c || (d.value = "");
            var y = d.value !== c, z = m(d, y), A = p(d, x, y, z);
            N(this, {
                id: a,
                type: b,
                location: e,
                array: x,
                squash: z,
                replace: A,
                isOptional: y,
                value: t,
                dynamic: c,
                config: d,
                toString: v
            });
        }, k.prototype = {
            $$new: function() {
                return d(this, N(new k(), {
                    $$parent: this
                }));
            },
            $$keys: function() {
                for (var a = [], b = [], c = this, d = g(k.prototype); c; ) b.push(c), c = c.$$parent;
                return b.reverse(), M(b, function(b) {
                    M(g(b), function(b) {
                        -1 === h(a, b) && -1 === h(d, b) && a.push(b);
                    });
                }), a;
            },
            $$values: function(a) {
                var b = {}, c = this;
                return M(c.$$keys(), function(d) {
                    b[d] = c[d].value(a && a[d]);
                }), b;
            },
            $$equals: function(a, b) {
                var c = !0, d = this;
                return M(d.$$keys(), function(e) {
                    var f = a && a[e], g = b && b[e];
                    d[e].type.equals(f, g) || (c = !1);
                }), c;
            },
            $$validates: function(a) {
                var d, e, f, g, h, i = this.$$keys();
                for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
                    if (g = e.type.$normalize(f), !e.type.is(g)) return !1;
                    if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1;
                }
                return !0;
            },
            $$parent: c
        }, this.ParamSet = k;
    }
    function u(a, d) {
        function e(a) {
            var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
            return null != b ? b[1].replace(/\\(.)/g, "$1") : "";
        }
        function f(a, b) {
            return a.replace(/\$(\$|\d{1,2})/, function(a, c) {
                return b["$" === c ? 0 : Number(c)];
            });
        }
        function g(a, b, c) {
            if (!c) return !1;
            var d = a.invoke(b, b, {
                $match: c
            });
            return H(d) ? d : !0;
        }
        function h(d, e, f, g) {
            function h(a, b, c) {
                return "/" === p ? a : b ? p.slice(0, -1) + a : c ? p.slice(1) + a : a;
            }
            function m(a) {
                function b(a) {
                    var b = a(f, d);
                    return b ? (J(b) && d.replace().url(b), !0) : !1;
                }
                if (!a || !a.defaultPrevented) {
                    o && d.url() === o;
                    o = c;
                    var e, g = j.length;
                    for (e = 0; g > e; e++) if (b(j[e])) return;
                    k && b(k);
                }
            }
            function n() {
                return i = i || e.$on("$locationChangeSuccess", m);
            }
            var o, p = g.baseHref(), q = d.url();
            return l || n(), {
                sync: function() {
                    m();
                },
                listen: function() {
                    return n();
                },
                update: function(a) {
                    return a ? void (q = d.url()) : void (d.url() !== q && (d.url(q), d.replace()));
                },
                push: function(a, b, e) {
                    var f = a.format(b || {});
                    null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), o = e && e.$$avoidResync ? d.url() : c, 
                    e && e.replace && d.replace();
                },
                href: function(c, e, f) {
                    if (!c.validates(e)) return null;
                    var g = a.html5Mode();
                    b.isObject(g) && (g = g.enabled);
                    var i = c.format(e);
                    if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), 
                    i = h(i, g, f.absolute), !f.absolute || !i) return i;
                    var j = !g && i ? "/" : "", k = d.port();
                    return k = 80 === k || 443 === k ? "" : ":" + k, [ d.protocol(), "://", d.host(), k, j, i ].join("");
                }
            };
        }
        var i, j = [], k = null, l = !1;
        this.rule = function(a) {
            if (!I(a)) throw new Error("'rule' must be a function");
            return j.push(a), this;
        }, this.otherwise = function(a) {
            if (J(a)) {
                var b = a;
                a = function() {
                    return b;
                };
            } else if (!I(a)) throw new Error("'rule' must be a function");
            return k = a, this;
        }, this.when = function(a, b) {
            var c, h = J(b);
            if (J(a) && (a = d.compile(a)), !h && !I(b) && !L(b)) throw new Error("invalid 'handler' in when()");
            var i = {
                matcher: function(a, b) {
                    return h && (c = d.compile(b), b = [ "$match", function(a) {
                        return c.format(a);
                    } ]), N(function(c, d) {
                        return g(c, b, a.exec(d.path(), d.search()));
                    }, {
                        prefix: J(a.prefix) ? a.prefix : ""
                    });
                },
                regex: function(a, b) {
                    if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
                    return h && (c = b, b = [ "$match", function(a) {
                        return f(c, a);
                    } ]), N(function(c, d) {
                        return g(c, b, a.exec(d.path()));
                    }, {
                        prefix: e(a)
                    });
                }
            }, j = {
                matcher: d.isMatcher(a),
                regex: a instanceof RegExp
            };
            for (var k in j) if (j[k]) return this.rule(i[k](a, b));
            throw new Error("invalid 'what' in when()");
        }, this.deferIntercept = function(a) {
            a === c && (a = !0), l = a;
        }, this.$get = h, h.$inject = [ "$location", "$rootScope", "$injector", "$browser" ];
    }
    function v(a, e) {
        function f(a) {
            return 0 === a.indexOf(".") || 0 === a.indexOf("^");
        }
        function m(a, b) {
            if (!a) return c;
            var d = J(a), e = d ? a : a.name, g = f(e);
            if (g) {
                if (!b) throw new Error("No reference point given for path '" + e + "'");
                b = m(b);
                for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++) if ("" !== h[i] || 0 !== i) {
                    if ("^" !== h[i]) break;
                    if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                    k = k.parent;
                } else k = b;
                h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h;
            }
            var l = z[e];
            return !l || !d && (d || l !== a && l.self !== a) ? c : l;
        }
        function n(a, b) {
            A[a] || (A[a] = []), A[a].push(b);
        }
        function p(a) {
            for (var b = A[a] || []; b.length; ) q(b.shift());
        }
        function q(b) {
            b = d(b, {
                self: b,
                resolve: b.resolve || {},
                toString: function() {
                    return this.name;
                }
            });
            var c = b.name;
            if (!J(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
            if (z.hasOwnProperty(c)) throw new Error("State '" + c + "'' is already defined");
            var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : J(b.parent) ? b.parent : K(b.parent) && J(b.parent.name) ? b.parent.name : "";
            if (e && !z[e]) return n(e, b.self);
            for (var f in C) I(C[f]) && (b[f] = C[f](b, C.$delegates[f]));
            return z[c] = b, !b[B] && b.url && a.when(b.url, [ "$match", "$stateParams", function(a, c) {
                y.$current.navigable == b && j(a, c) || y.transitionTo(b, a, {
                    inherit: !0,
                    location: !1
                });
            } ]), p(c), b;
        }
        function r(a) {
            return a.indexOf("*") > -1;
        }
        function s(a) {
            for (var b = a.split("."), c = y.$current.name.split("."), d = 0, e = b.length; e > d; d++) "*" === b[d] && (c[d] = "*");
            return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), 
            c.push("**")), b.length != c.length ? !1 : c.join("") === b.join("");
        }
        function t(a, b) {
            return J(a) && !H(b) ? C[a] : I(b) && J(a) ? (C[a] && !C.$delegates[a] && (C.$delegates[a] = C[a]), 
            C[a] = b, this) : this;
        }
        function u(a, b) {
            return K(a) ? b = a : b.name = a, q(b), this;
        }
        function v(a, e, f, h, l, n, p, q, t) {
            function u(b, c, d, f) {
                var g = a.$broadcast("$stateNotFound", b, c, d);
                if (g.defaultPrevented) return p.update(), D;
                if (!g.retry) return null;
                if (f.$retry) return p.update(), E;
                var h = y.transition = e.when(g.retry);
                return h.then(function() {
                    return h !== y.transition ? A : (b.options.$retry = !0, y.transitionTo(b.to, b.toParams, b.options));
                }, function() {
                    return D;
                }), p.update(), h;
            }
            function v(a, c, d, g, i, j) {
                function m() {
                    var c = [];
                    return M(a.views, function(d, e) {
                        var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
                        g.$template = [ function() {
                            return f.load(e, {
                                view: d,
                                locals: i.globals,
                                params: n,
                                notify: j.notify
                            }) || "";
                        } ], c.push(l.resolve(g, i.globals, i.resolve, a).then(function(c) {
                            if (I(d.controllerProvider) || L(d.controllerProvider)) {
                                var f = b.extend({}, g, i.globals);
                                c.$$controller = h.invoke(d.controllerProvider, null, f);
                            } else c.$$controller = d.controller;
                            c.$$state = a, c.$$controllerAs = d.controllerAs, i[e] = c;
                        }));
                    }), e.all(c).then(function() {
                        return i.globals;
                    });
                }
                var n = d ? c : k(a.params.$$keys(), c), o = {
                    $stateParams: n
                };
                i.resolve = l.resolve(a.resolve, o, i.resolve, a);
                var p = [ i.resolve.then(function(a) {
                    i.globals = a;
                }) ];
                return g && p.push(g), e.all(p).then(m).then(function(a) {
                    return i;
                });
            }
            var A = e.reject(new Error("transition superseded")), C = e.reject(new Error("transition prevented")), D = e.reject(new Error("transition aborted")), E = e.reject(new Error("transition failed"));
            return x.locals = {
                resolve: null,
                globals: {
                    $stateParams: {}
                }
            }, y = {
                params: {},
                current: x.self,
                $current: x,
                transition: null
            }, y.reload = function(a) {
                return y.transitionTo(y.current, n, {
                    reload: a || !0,
                    inherit: !1,
                    notify: !0
                });
            }, y.go = function(a, b, c) {
                return y.transitionTo(a, b, N({
                    inherit: !0,
                    relative: y.$current
                }, c));
            }, y.transitionTo = function(b, c, f) {
                c = c || {}, f = N({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, f || {});
                var g, j = y.$current, l = y.params, o = j.path, q = m(b, f.relative), r = c["#"];
                if (!H(q)) {
                    var s = {
                        to: b,
                        toParams: c,
                        options: f
                    }, t = u(s, j.self, l, f);
                    if (t) return t;
                    if (b = s.to, c = s.toParams, f = s.options, q = m(b, f.relative), !H(q)) {
                        if (!f.relative) throw new Error("No such state '" + b + "'");
                        throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'");
                    }
                }
                if (q[B]) throw new Error("Cannot transition to abstract state '" + b + "'");
                if (f.inherit && (c = i(n, c || {}, y.$current, q)), !q.params.$$validates(c)) return E;
                c = q.params.$$values(c), b = q;
                var z = b.path, D = 0, F = z[D], G = x.locals, I = [];
                if (f.reload) {
                    if (J(f.reload) || K(f.reload)) {
                        if (K(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");
                        var L = f.reload === !0 ? o[0] : m(f.reload);
                        if (f.reload && !L) throw new Error("No such reload state '" + (J(f.reload) ? f.reload : f.reload.name) + "'");
                        for (;F && F === o[D] && F !== L; ) G = I[D] = F.locals, D++, F = z[D];
                    }
                } else for (;F && F === o[D] && F.ownParams.$$equals(c, l); ) G = I[D] = F.locals, 
                D++, F = z[D];
                if (w(b, c, j, l, G, f)) return r && (c["#"] = r), y.params = c, O(y.params, n), 
                f.location && b.navigable && b.navigable.url && (p.push(b.navigable.url, c, {
                    $$avoidResync: !0,
                    replace: "replace" === f.location
                }), p.update(!0)), y.transition = null, e.when(y.current);
                if (c = k(b.params.$$keys(), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), 
                p.update(), C;
                for (var M = e.when(G), P = D; P < z.length; P++, F = z[P]) G = I[P] = d(G), M = v(F, c, F === b, M, G, f);
                var Q = y.transition = M.then(function() {
                    var d, e, g;
                    if (y.transition !== Q) return A;
                    for (d = o.length - 1; d >= D; d--) g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), 
                    g.locals = null;
                    for (d = D; d < z.length; d++) e = z[d], e.locals = I[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
                    return r && (c["#"] = r), y.transition !== Q ? A : (y.$current = b, y.current = b.self, 
                    y.params = c, O(y.params, n), y.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === f.location
                    }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), p.update(!0), 
                    y.current);
                }, function(d) {
                    return y.transition !== Q ? A : (y.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), 
                    g.defaultPrevented || p.update(), e.reject(d));
                });
                return Q;
            }, y.is = function(a, b, d) {
                d = N({
                    relative: y.$current
                }, d || {});
                var e = m(a, d.relative);
                return H(e) ? y.$current !== e ? !1 : b ? j(e.params.$$values(b), n) : !0 : c;
            }, y.includes = function(a, b, d) {
                if (d = N({
                    relative: y.$current
                }, d || {}), J(a) && r(a)) {
                    if (!s(a)) return !1;
                    a = y.$current.name;
                }
                var e = m(a, d.relative);
                return H(e) ? H(y.$current.includes[e.name]) ? b ? j(e.params.$$values(b), n, g(b)) : !0 : !1 : c;
            }, y.href = function(a, b, d) {
                d = N({
                    lossy: !0,
                    inherit: !0,
                    absolute: !1,
                    relative: y.$current
                }, d || {});
                var e = m(a, d.relative);
                if (!H(e)) return null;
                d.inherit && (b = i(n, b || {}, y.$current, e));
                var f = e && d.lossy ? e.navigable : e;
                return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {
                    absolute: d.absolute
                }) : null;
            }, y.get = function(a, b) {
                if (0 === arguments.length) return o(g(z), function(a) {
                    return z[a].self;
                });
                var c = m(a, b || y.$current);
                return c && c.self ? c.self : null;
            }, y;
        }
        function w(a, b, c, d, e, f) {
            function g(a, b, c) {
                function d(b) {
                    return "search" != a.params[b].location;
                }
                var e = a.params.$$keys().filter(d), f = l.apply({}, [ a.params ].concat(e)), g = new P.ParamSet(f);
                return g.$$equals(b, c);
            }
            return !f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b)) ? !0 : void 0;
        }
        var x, y, z = {}, A = {}, B = "abstract", C = {
            parent: function(a) {
                if (H(a.parent) && a.parent) return m(a.parent);
                var b = /^(.+)\.[^.]+$/.exec(a.name);
                return b ? m(b[1]) : x;
            },
            data: function(a) {
                return a.parent && a.parent.data && (a.data = a.self.data = N({}, a.parent.data, a.data)), 
                a.data;
            },
            url: function(a) {
                var b = a.url, c = {
                    params: a.params || {}
                };
                if (J(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || x).url.concat(b, c);
                if (!b || e.isMatcher(b)) return b;
                throw new Error("Invalid url '" + b + "' in state '" + a + "'");
            },
            navigable: function(a) {
                return a.url ? a : a.parent ? a.parent.navigable : null;
            },
            ownParams: function(a) {
                var b = a.url && a.url.params || new P.ParamSet();
                return M(a.params || {}, function(a, c) {
                    b[c] || (b[c] = new P.Param(c, null, a, "config"));
                }), b;
            },
            params: function(a) {
                return a.parent && a.parent.params ? N(a.parent.params.$$new(), a.ownParams) : new P.ParamSet();
            },
            views: function(a) {
                var b = {};
                return M(H(a.views) ? a.views : {
                    "": a
                }, function(c, d) {
                    d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c;
                }), b;
            },
            path: function(a) {
                return a.parent ? a.parent.path.concat(a) : [];
            },
            includes: function(a) {
                var b = a.parent ? N({}, a.parent.includes) : {};
                return b[a.name] = !0, b;
            },
            $delegates: {}
        };
        x = q({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), x.navigable = null, this.decorator = t, this.state = u, this.$get = v, v.$inject = [ "$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory" ];
    }
    function w() {
        function a(a, b) {
            return {
                load: function(c, d) {
                    var e, f = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return d = N(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), 
                    e;
                }
            };
        }
        this.$get = a, a.$inject = [ "$rootScope", "$templateFactory" ];
    }
    function x() {
        var a = !1;
        this.useAnchorScroll = function() {
            a = !0;
        }, this.$get = [ "$anchorScroll", "$timeout", function(b, c) {
            return a ? b : function(a) {
                return c(function() {
                    a[0].scrollIntoView();
                }, 0, !1);
            };
        } ];
    }
    function y(a, c, d, e) {
        function f() {
            return c.has ? function(a) {
                return c.has(a) ? c.get(a) : null;
            } : function(a) {
                try {
                    return c.get(a);
                } catch (b) {
                    return null;
                }
            };
        }
        function g(a, b) {
            var c = function() {
                return {
                    enter: function(a, b, c) {
                        b.after(a), c();
                    },
                    leave: function(a, b) {
                        a.remove(), b();
                    }
                };
            };
            if (j) return {
                enter: function(a, b, c) {
                    var d = j.enter(a, null, b, c);
                    d && d.then && d.then(c);
                },
                leave: function(a, b) {
                    var c = j.leave(a, b);
                    c && c.then && c.then(b);
                }
            };
            if (i) {
                var d = i && i(b, a);
                return {
                    enter: function(a, b, c) {
                        d.enter(a, null, b), c();
                    },
                    leave: function(a, b) {
                        d.leave(a), b();
                    }
                };
            }
            return c();
        }
        var h = f(), i = h("$animator"), j = h("$animate"), k = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function(c, f, h) {
                return function(c, f, i) {
                    function j() {
                        l && (l.remove(), l = null), n && (n.$destroy(), n = null), m && (r.leave(m, function() {
                            l = null;
                        }), l = m, m = null);
                    }
                    function k(g) {
                        var k, l = A(c, i, f, e), s = l && a.$current && a.$current.locals[l];
                        if (g || s !== o) {
                            k = c.$new(), o = a.$current.locals[l];
                            var t = h(k, function(a) {
                                r.enter(a, f, function() {
                                    n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a);
                                }), j();
                            });
                            m = t, n = k, n.$emit("$viewContentLoaded"), n.$eval(p);
                        }
                    }
                    var l, m, n, o, p = i.onload || "", q = i.autoscroll, r = g(i, c);
                    c.$on("$stateChangeSuccess", function() {
                        k(!1);
                    }), c.$on("$viewContentLoading", function() {
                        k(!1);
                    }), k(!0);
                };
            }
        };
        return k;
    }
    function z(a, b, c, d) {
        return {
            restrict: "ECA",
            priority: -400,
            compile: function(e) {
                var f = e.html();
                return function(e, g, h) {
                    var i = c.$current, j = A(e, h, g, d), k = i && i.locals[j];
                    if (k) {
                        g.data("$uiView", {
                            name: j,
                            state: k.$$state
                        }), g.html(k.$template ? k.$template : f);
                        var l = a(g.contents());
                        if (k.$$controller) {
                            k.$scope = e, k.$element = g;
                            var m = b(k.$$controller, k);
                            k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), 
                            g.children().data("$ngControllerController", m);
                        }
                        l(e);
                    }
                };
            }
        };
    }
    function A(a, b, c, d) {
        var e = d(b.uiView || b.name || "")(a), f = c.inheritedData("$uiView");
        return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "");
    }
    function B(a, b) {
        var c, d = a.match(/^\s*({[^}]*})\s*$/);
        if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), 
        !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
        return {
            state: c[1],
            paramExpr: c[3] || null
        };
    }
    function C(a) {
        var b = a.parent().inheritedData("$uiView");
        return b && b.state && b.state.name ? b.state : void 0;
    }
    function D(a, c) {
        var d = [ "location", "inherit", "reload", "absolute" ];
        return {
            restrict: "A",
            require: [ "?^uiSrefActive", "?^uiSrefActiveEq" ],
            link: function(e, f, g, h) {
                var i = B(g.uiSref, a.current.name), j = null, k = C(f) || a.$current, l = "[object SVGAnimatedString]" === Object.prototype.toString.call(f.prop("href")) ? "xlink:href" : "href", m = null, n = "A" === f.prop("tagName").toUpperCase(), o = "FORM" === f[0].nodeName, p = o ? "action" : l, q = !0, r = {
                    relative: k,
                    inherit: !0
                }, s = e.$eval(g.uiSrefOpts) || {};
                b.forEach(d, function(a) {
                    a in s && (r[a] = s[a]);
                });
                var t = function(c) {
                    if (c && (j = b.copy(c)), q) {
                        m = a.href(i.state, j, r);
                        var d = h[1] || h[0];
                        return d && d.$$addStateInfo(i.state, j), null === m ? (q = !1, !1) : void g.$set(p, m);
                    }
                };
                i.paramExpr && (e.$watch(i.paramExpr, function(a, b) {
                    a !== j && t(a);
                }, !0), j = b.copy(e.$eval(i.paramExpr))), t(), o || f.bind("click", function(b) {
                    var d = b.which || b.button;
                    if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
                        var e = c(function() {
                            a.go(i.state, j, r);
                        });
                        b.preventDefault();
                        var g = n && !m ? 1 : 0;
                        b.preventDefault = function() {
                            g-- <= 0 && c.cancel(e);
                        };
                    }
                });
            }
        };
    }
    function E(a, b, c) {
        return {
            restrict: "A",
            controller: [ "$scope", "$element", "$attrs", function(b, d, e) {
                function f() {
                    g() ? d.addClass(i) : d.removeClass(i);
                }
                function g() {
                    for (var a = 0; a < j.length; a++) if (h(j[a].state, j[a].params)) return !0;
                    return !1;
                }
                function h(b, c) {
                    return "undefined" != typeof e.uiSrefActiveEq ? a.is(b.name, c) : a.includes(b.name, c);
                }
                var i, j = [];
                i = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b), this.$$addStateInfo = function(b, c) {
                    var e = a.get(b, C(d));
                    j.push({
                        state: e || {
                            name: b
                        },
                        params: c
                    }), f();
                }, b.$on("$stateChangeSuccess", f);
            } ]
        };
    }
    function F(a) {
        var b = function(b) {
            return a.is(b);
        };
        return b.$stateful = !0, b;
    }
    function G(a) {
        var b = function(b) {
            return a.includes(b);
        };
        return b.$stateful = !0, b;
    }
    var H = b.isDefined, I = b.isFunction, J = b.isString, K = b.isObject, L = b.isArray, M = b.forEach, N = b.extend, O = b.copy;
    b.module("ui.router.util", [ "ng" ]), b.module("ui.router.router", [ "ui.router.util" ]), 
    b.module("ui.router.state", [ "ui.router.router", "ui.router.util" ]), b.module("ui.router", [ "ui.router.state" ]), 
    b.module("ui.router.compat", [ "ui.router" ]), p.$inject = [ "$q", "$injector" ], 
    b.module("ui.router.util").service("$resolve", p), q.$inject = [ "$http", "$templateCache", "$injector" ], 
    b.module("ui.router.util").service("$templateFactory", q);
    var P;
    r.prototype.concat = function(a, b) {
        var c = {
            caseInsensitive: P.caseInsensitive(),
            strict: P.strictMode(),
            squash: P.defaultSquashPolicy()
        };
        return new r(this.sourcePath + a + this.sourceSearch, N(c, b), this);
    }, r.prototype.toString = function() {
        return this.source;
    }, r.prototype.exec = function(a, b) {
        function c(a) {
            function b(a) {
                return a.split("").reverse().join("");
            }
            function c(a) {
                return a.replace(/\\-/g, "-");
            }
            var d = b(a).split(/-(?!\\)/), e = o(d, b);
            return o(e, c).reverse();
        }
        var d = this.regexp.exec(a);
        if (!d) return null;
        b = b || {};
        var e, f, g, h = this.parameters(), i = h.length, j = this.segments.length - 1, k = {};
        if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (e = 0; j > e; e++) {
            g = h[e];
            var l = this.params[g], m = d[e + 1];
            for (f = 0; f < l.replace; f++) l.replace[f].from === m && (m = l.replace[f].to);
            m && l.array === !0 && (m = c(m)), k[g] = l.value(m);
        }
        for (;i > e; e++) g = h[e], k[g] = this.params[g].value(b[g]);
        return k;
    }, r.prototype.parameters = function(a) {
        return H(a) ? this.params[a] || null : this.$$paramNames;
    }, r.prototype.validates = function(a) {
        return this.params.$$validates(a);
    }, r.prototype.format = function(a) {
        function b(a) {
            return encodeURIComponent(a).replace(/-/g, function(a) {
                return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase();
            });
        }
        a = a || {};
        var c = this.segments, d = this.parameters(), e = this.params;
        if (!this.validates(a)) return null;
        var f, g = !1, h = c.length - 1, i = d.length, j = c[0];
        for (f = 0; i > f; f++) {
            var k = h > f, l = d[f], m = e[l], n = m.value(a[l]), p = m.isOptional && m.type.equals(m.value(), n), q = p ? m.squash : !1, r = m.type.encode(n);
            if (k) {
                var s = c[f + 1];
                if (q === !1) null != r && (j += L(r) ? o(r, b).join("-") : encodeURIComponent(r)), 
                j += s; else if (q === !0) {
                    var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    j += s.match(t)[1];
                } else J(q) && (j += q + s);
            } else {
                if (null == r || p && q !== !1) continue;
                L(r) || (r = [ r ]), r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), 
                g = !0;
            }
        }
        return j;
    }, s.prototype.is = function(a, b) {
        return !0;
    }, s.prototype.encode = function(a, b) {
        return a;
    }, s.prototype.decode = function(a, b) {
        return a;
    }, s.prototype.equals = function(a, b) {
        return a == b;
    }, s.prototype.$subPattern = function() {
        var a = this.pattern.toString();
        return a.substr(1, a.length - 2);
    }, s.prototype.pattern = /.*/, s.prototype.toString = function() {
        return "{Type:" + this.name + "}";
    }, s.prototype.$normalize = function(a) {
        return this.is(a) ? a : this.decode(a);
    }, s.prototype.$asArray = function(a, b) {
        function d(a, b) {
            function d(a, b) {
                return function() {
                    return a[b].apply(a, arguments);
                };
            }
            function e(a) {
                return L(a) ? a : H(a) ? [ a ] : [];
            }
            function f(a) {
                switch (a.length) {
                  case 0:
                    return c;

                  case 1:
                    return "auto" === b ? a[0] : a;

                  default:
                    return a;
                }
            }
            function g(a) {
                return !a;
            }
            function h(a, b) {
                return function(c) {
                    c = e(c);
                    var d = o(c, a);
                    return b === !0 ? 0 === n(d, g).length : f(d);
                };
            }
            function i(a) {
                return function(b, c) {
                    var d = e(b), f = e(c);
                    if (d.length !== f.length) return !1;
                    for (var g = 0; g < d.length; g++) if (!a(d[g], f[g])) return !1;
                    return !0;
                };
            }
            this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), 
            this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), 
            this.name = a.name, this.$arrayMode = b;
        }
        if (!a) return this;
        if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
        return new d(this, a);
    }, b.module("ui.router.util").provider("$urlMatcherFactory", t), b.module("ui.router.util").run([ "$urlMatcherFactory", function(a) {} ]), 
    u.$inject = [ "$locationProvider", "$urlMatcherFactoryProvider" ], b.module("ui.router.router").provider("$urlRouter", u), 
    v.$inject = [ "$urlRouterProvider", "$urlMatcherFactoryProvider" ], b.module("ui.router.state").value("$stateParams", {}).provider("$state", v), 
    w.$inject = [], b.module("ui.router.state").provider("$view", w), b.module("ui.router.state").provider("$uiViewScroll", x), 
    y.$inject = [ "$state", "$injector", "$uiViewScroll", "$interpolate" ], z.$inject = [ "$compile", "$controller", "$state", "$interpolate" ], 
    b.module("ui.router.state").directive("uiView", y), b.module("ui.router.state").directive("uiView", z), 
    D.$inject = [ "$state", "$timeout" ], E.$inject = [ "$state", "$stateParams", "$interpolate" ], 
    b.module("ui.router.state").directive("uiSref", D).directive("uiSrefActive", E).directive("uiSrefActiveEq", E), 
    F.$inject = [ "$state" ], G.$inject = [ "$state" ], b.module("ui.router.state").filter("isState", F).filter("includedByState", G);
}(window, window.angular);

if (typeof jQuery === "undefined") {
    throw new Error("Bootstrap's JavaScript requires jQuery");
}

+function($) {
    "use strict";
    var version = $.fn.jquery.split(" ")[0].split(".");
    if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 2) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
    }
}(jQuery);

+function($) {
    "use strict";
    function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                };
            }
        }
        return false;
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false;
        var $el = this;
        $(this).one("bsTransitionEnd", function() {
            called = true;
        });
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end);
        };
        setTimeout(callback, duration);
        return this;
    };
    $(function() {
        $.support.transition = transitionEnd();
        if (!$.support.transition) return;
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            }
        };
    });
}(jQuery);

+function($) {
    "use strict";
    var dismiss = '[data-dismiss="alert"]';
    var Alert = function(el) {
        $(el).on("click", dismiss, this.close);
    };
    Alert.VERSION = "3.3.6";
    Alert.TRANSITION_DURATION = 150;
    Alert.prototype.close = function(e) {
        var $this = $(this);
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = $(selector);
        if (e) e.preventDefault();
        if (!$parent.length) {
            $parent = $this.closest(".alert");
        }
        $parent.trigger(e = $.Event("close.bs.alert"));
        if (e.isDefaultPrevented()) return;
        $parent.removeClass("in");
        function removeElement() {
            $parent.detach().trigger("closed.bs.alert").remove();
        }
        $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.alert");
            if (!data) $this.data("bs.alert", data = new Alert(this));
            if (typeof option == "string") data[option].call($this);
        });
    }
    var old = $.fn.alert;
    $.fn.alert = Plugin;
    $.fn.alert.Constructor = Alert;
    $.fn.alert.noConflict = function() {
        $.fn.alert = old;
        return this;
    };
    $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
}(jQuery);

+function($) {
    "use strict";
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
    };
    Button.VERSION = "3.3.6";
    Button.DEFAULTS = {
        loadingText: "loading..."
    };
    Button.prototype.setState = function(state) {
        var d = "disabled";
        var $el = this.$element;
        var val = $el.is("input") ? "val" : "html";
        var data = $el.data();
        state += "Text";
        if (data.resetText == null) $el.data("resetText", $el[val]());
        setTimeout($.proxy(function() {
            $el[val](data[state] == null ? this.options[state] : data[state]);
            if (state == "loadingText") {
                this.isLoading = true;
                $el.addClass(d).attr(d, d);
            } else if (this.isLoading) {
                this.isLoading = false;
                $el.removeClass(d).removeAttr(d);
            }
        }, this), 0);
    };
    Button.prototype.toggle = function() {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
            var $input = this.$element.find("input");
            if ($input.prop("type") == "radio") {
                if ($input.prop("checked")) changed = false;
                $parent.find(".active").removeClass("active");
                this.$element.addClass("active");
            } else if ($input.prop("type") == "checkbox") {
                if ($input.prop("checked") !== this.$element.hasClass("active")) changed = false;
                this.$element.toggleClass("active");
            }
            $input.prop("checked", this.$element.hasClass("active"));
            if (changed) $input.trigger("change");
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            this.$element.toggleClass("active");
        }
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.button");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.button", data = new Button(this, options));
            if (option == "toggle") data.toggle(); else if (option) data.setState(option);
        });
    }
    var old = $.fn.button;
    $.fn.button = Plugin;
    $.fn.button.Constructor = Button;
    $.fn.button.noConflict = function() {
        $.fn.button = old;
        return this;
    };
    $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var $btn = $(e.target);
        if (!$btn.hasClass("btn")) $btn = $btn.closest(".btn");
        Plugin.call($btn, "toggle");
        if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery);

+function($) {
    "use strict";
    var Carousel = function(element, options) {
        this.$element = $(element);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = options;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));
        this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
    };
    Carousel.VERSION = "3.3.6";
    Carousel.TRANSITION_DURATION = 600;
    Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: true,
        keyboard: true
    };
    Carousel.prototype.keydown = function(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        switch (e.which) {
          case 37:
            this.prev();
            break;

          case 39:
            this.next();
            break;

          default:
            return;
        }
        e.preventDefault();
    };
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
        return this;
    };
    Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children(".item");
        return this.$items.index(item || this.$active);
    };
    Carousel.prototype.getItemForDirection = function(direction, active) {
        var activeIndex = this.getItemIndex(active);
        var willWrap = direction == "prev" && activeIndex === 0 || direction == "next" && activeIndex == this.$items.length - 1;
        if (willWrap && !this.options.wrap) return active;
        var delta = direction == "prev" ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this.$items.length;
        return this.$items.eq(itemIndex);
    };
    Carousel.prototype.to = function(pos) {
        var that = this;
        var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (pos > this.$items.length - 1 || pos < 0) return;
        if (this.sliding) return this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
        });
        if (activeIndex == pos) return this.pause().cycle();
        return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
    };
    Carousel.prototype.pause = function(e) {
        e || (this.paused = true);
        if (this.$element.find(".next, .prev").length && $.support.transition) {
            this.$element.trigger($.support.transition.end);
            this.cycle(true);
        }
        this.interval = clearInterval(this.interval);
        return this;
    };
    Carousel.prototype.next = function() {
        if (this.sliding) return;
        return this.slide("next");
    };
    Carousel.prototype.prev = function() {
        if (this.sliding) return;
        return this.slide("prev");
    };
    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active");
        var $next = next || this.getItemForDirection(type, $active);
        var isCycling = this.interval;
        var direction = type == "next" ? "left" : "right";
        var that = this;
        if ($next.hasClass("active")) return this.sliding = false;
        var relatedTarget = $next[0];
        var slideEvent = $.Event("slide.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        this.$element.trigger(slideEvent);
        if (slideEvent.isDefaultPrevented()) return;
        this.sliding = true;
        isCycling && this.pause();
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
            $nextIndicator && $nextIndicator.addClass("active");
        }
        var slidEvent = $.Event("slid.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        if ($.support.transition && this.$element.hasClass("slide")) {
            $next.addClass(type);
            $next[0].offsetWidth;
            $active.addClass(direction);
            $next.addClass(direction);
            $active.one("bsTransitionEnd", function() {
                $next.removeClass([ type, direction ].join(" ")).addClass("active");
                $active.removeClass([ "active", direction ].join(" "));
                that.sliding = false;
                setTimeout(function() {
                    that.$element.trigger(slidEvent);
                }, 0);
            }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
        } else {
            $active.removeClass("active");
            $next.addClass("active");
            this.sliding = false;
            this.$element.trigger(slidEvent);
        }
        isCycling && this.cycle();
        return this;
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.carousel");
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == "object" && option);
            var action = typeof option == "string" ? option : options.slide;
            if (!data) $this.data("bs.carousel", data = new Carousel(this, options));
            if (typeof option == "number") data.to(option); else if (action) data[action](); else if (options.interval) data.pause().cycle();
        });
    }
    var old = $.fn.carousel;
    $.fn.carousel = Plugin;
    $.fn.carousel.Constructor = Carousel;
    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old;
        return this;
    };
    var clickHandler = function(e) {
        var href;
        var $this = $(this);
        var $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
        if (!$target.hasClass("carousel")) return;
        var options = $.extend({}, $target.data(), $this.data());
        var slideIndex = $this.attr("data-slide-to");
        if (slideIndex) options.interval = false;
        Plugin.call($target, options);
        if (slideIndex) {
            $target.data("bs.carousel").to(slideIndex);
        }
        e.preventDefault();
    };
    $(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);
    $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this);
            Plugin.call($carousel, $carousel.data());
        });
    });
}(jQuery);

+function($) {
    "use strict";
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = this.getParent();
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }
        if (this.options.toggle) this.toggle();
    };
    Collapse.VERSION = "3.3.6";
    Collapse.TRANSITION_DURATION = 350;
    Collapse.DEFAULTS = {
        toggle: true
    };
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
    };
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) return;
        var activesData;
        var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (actives && actives.length) {
            activesData = actives.data("bs.collapse");
            if (activesData && activesData.transitioning) return;
        }
        var startEvent = $.Event("show.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        if (actives && actives.length) {
            Plugin.call(actives, "hide");
            activesData || actives.data("bs.collapse", null);
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
        this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
        this.transitioning = 1;
        var complete = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        var scrollSize = $.camelCase([ "scroll", dimension ].join("-"));
        this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
    };
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) return;
        var startEvent = $.Event("hide.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
        this.$trigger.addClass("collapsed").attr("aria-expanded", false);
        this.transitioning = 1;
        var complete = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
    };
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    Collapse.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
            var $element = $(element);
            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
    };
    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass("in");
        $element.attr("aria-expanded", isOpen);
        $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
    };
    function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        return $(target);
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.collapse");
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
            if (!data) $this.data("bs.collapse", data = new Collapse(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.collapse;
    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old;
        return this;
    };
    $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var $this = $(this);
        if (!$this.attr("data-target")) e.preventDefault();
        var $target = getTargetFromTrigger($this);
        var data = $target.data("bs.collapse");
        var option = data ? "toggle" : $this.data();
        Plugin.call($target, option);
    });
}(jQuery);

+function($) {
    "use strict";
    var backdrop = ".dropdown-backdrop";
    var toggle = '[data-toggle="dropdown"]';
    var Dropdown = function(element) {
        $(element).on("click.bs.dropdown", this.toggle);
    };
    Dropdown.VERSION = "3.3.6";
    function getParent($this) {
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent();
    }
    function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function() {
            var $this = $(this);
            var $parent = getParent($this);
            var relatedTarget = {
                relatedTarget: this
            };
            if (!$parent.hasClass("open")) return;
            if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;
            $parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $this.attr("aria-expanded", "false");
            $parent.removeClass("open").trigger($.Event("hidden.bs.dropdown", relatedTarget));
        });
    }
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if ($this.is(".disabled, :disabled")) return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        clearMenus();
        if (!isActive) {
            if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
                $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", clearMenus);
            }
            var relatedTarget = {
                relatedTarget: this
            };
            $parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $this.trigger("focus").attr("aria-expanded", "true");
            $parent.toggleClass("open").trigger($.Event("shown.bs.dropdown", relatedTarget));
        }
        return false;
    };
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
        var $this = $(this);
        e.preventDefault();
        e.stopPropagation();
        if ($this.is(".disabled, :disabled")) return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger("focus");
            return $this.trigger("click");
        }
        var desc = " li:not(.disabled):visible a";
        var $items = $parent.find(".dropdown-menu" + desc);
        if (!$items.length) return;
        var index = $items.index(e.target);
        if (e.which == 38 && index > 0) index--;
        if (e.which == 40 && index < $items.length - 1) index++;
        if (!~index) index = 0;
        $items.eq(index).trigger("focus");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.dropdown");
            if (!data) $this.data("bs.dropdown", data = new Dropdown(this));
            if (typeof option == "string") data[option].call($this);
        });
    }
    var old = $.fn.dropdown;
    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old;
        return this;
    };
    $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
}(jQuery);

+function($) {
    "use strict";
    var Modal = function(element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
                this.$element.trigger("loaded.bs.modal");
            }, this));
        }
    };
    Modal.VERSION = "3.3.6";
    Modal.TRANSITION_DURATION = 300;
    Modal.BACKDROP_TRANSITION_DURATION = 150;
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
    };
    Modal.prototype.show = function(_relatedTarget) {
        var that = this;
        var e = $.Event("show.bs.modal", {
            relatedTarget: _relatedTarget
        });
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented()) return;
        this.isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass("modal-open");
        this.escape();
        this.resize();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            that.$element.one("mouseup.dismiss.bs.modal", function(e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
            });
        });
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body);
            }
            that.$element.show().scrollTop(0);
            that.adjustDialog();
            if (transition) {
                that.$element[0].offsetWidth;
            }
            that.$element.addClass("in");
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {
                relatedTarget: _relatedTarget
            });
            transition ? that.$dialog.one("bsTransitionEnd", function() {
                that.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e);
        });
    };
    Modal.prototype.hide = function(e) {
        if (e) e.preventDefault();
        e = $.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) return;
        this.isShown = false;
        this.escape();
        this.resize();
        $(document).off("focusin.bs.modal");
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
        this.$dialog.off("mousedown.dismiss.bs.modal");
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
    };
    Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger("focus");
            }
        }, this));
    };
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(e) {
                e.which == 27 && this.hide();
            }, this));
        } else if (!this.isShown) {
            this.$element.off("keydown.dismiss.bs.modal");
        }
    };
    Modal.prototype.resize = function() {
        if (this.isShown) {
            $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this));
        } else {
            $(window).off("resize.bs.modal");
        }
    };
    Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide();
        this.backdrop(function() {
            that.$body.removeClass("modal-open");
            that.resetAdjustments();
            that.resetScrollbar();
            that.$element.trigger("hidden.bs.modal");
        });
    };
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    Modal.prototype.backdrop = function(callback) {
        var that = this;
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + animate).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false;
                    return;
                }
                if (e.target !== e.currentTarget) return;
                this.options.backdrop == "static" ? this.$element[0].focus() : this.hide();
            }, this));
            if (doAnimate) this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            if (!callback) return;
            doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var callbackRemove = function() {
                that.removeBackdrop();
                callback && callback();
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
        } else if (callback) {
            callback();
        }
    };
    Modal.prototype.handleUpdate = function() {
        this.adjustDialog();
    };
    Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
        });
    };
    Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    };
    Modal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
            var documentElementRect = document.documentElement.getBoundingClientRect();
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar();
    };
    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        if (this.bodyIsOverflowing) this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
    };
    Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    };
    Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure";
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
    };
    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.modal");
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data) $this.data("bs.modal", data = new Modal(this, options));
            if (typeof option == "string") data[option](_relatedTarget); else if (options.show) data.show(_relatedTarget);
        });
    }
    var old = $.fn.modal;
    $.fn.modal = Plugin;
    $.fn.modal.Constructor = Modal;
    $.fn.modal.noConflict = function() {
        $.fn.modal = old;
        return this;
    };
    $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this);
        var href = $this.attr("href");
        var $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""));
        var option = $target.data("bs.modal") ? "toggle" : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
        if ($this.is("a")) e.preventDefault();
        $target.one("show.bs.modal", function(showEvent) {
            if (showEvent.isDefaultPrevented()) return;
            $target.one("hidden.bs.modal", function() {
                $this.is(":visible") && $this.trigger("focus");
            });
        });
        Plugin.call($target, option, this);
    });
}(jQuery);

+function($) {
    "use strict";
    var Tooltip = function(element, options) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", element, options);
    };
    Tooltip.VERSION = "3.3.6";
    Tooltip.TRANSITION_DURATION = 150;
    Tooltip.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $(element);
        this.options = this.getOptions(options);
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = {
            click: false,
            hover: false,
            focus: false
        };
        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        }
        var triggers = this.options.trigger.split(" ");
        for (var i = triggers.length; i--; ) {
            var trigger = triggers[i];
            if (trigger == "click") {
                this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            } else if (trigger != "manual") {
                var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
                var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
                this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
                this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    };
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS;
    };
    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);
        if (options.delay && typeof options.delay == "number") {
            options.delay = {
                show: options.delay,
                hide: options.delay
            };
        }
        return options;
    };
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {};
        var defaults = this.getDefaults();
        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value) options[key] = value;
        });
        return options;
    };
    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self);
        }
        if (obj instanceof $.Event) {
            self.inState[obj.type == "focusin" ? "focus" : "hover"] = true;
        }
        if (self.tip().hasClass("in") || self.hoverState == "in") {
            self.hoverState = "in";
            return;
        }
        clearTimeout(self.timeout);
        self.hoverState = "in";
        if (!self.options.delay || !self.options.delay.show) return self.show();
        self.timeout = setTimeout(function() {
            if (self.hoverState == "in") self.show();
        }, self.options.delay.show);
    };
    Tooltip.prototype.isInStateTrue = function() {
        for (var key in this.inState) {
            if (this.inState[key]) return true;
        }
        return false;
    };
    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self);
        }
        if (obj instanceof $.Event) {
            self.inState[obj.type == "focusout" ? "focus" : "hover"] = false;
        }
        if (self.isInStateTrue()) return;
        clearTimeout(self.timeout);
        self.hoverState = "out";
        if (!self.options.delay || !self.options.delay.hide) return self.hide();
        self.timeout = setTimeout(function() {
            if (self.hoverState == "out") self.hide();
        }, self.options.delay.hide);
    };
    Tooltip.prototype.show = function() {
        var e = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !inDom) return;
            var that = this;
            var $tip = this.tip();
            var tipId = this.getUID(this.type);
            this.setContent();
            $tip.attr("id", tipId);
            this.$element.attr("aria-describedby", tipId);
            if (this.options.animation) $tip.addClass("fade");
            var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
            var autoToken = /\s?auto?\s?/i;
            var autoPlace = autoToken.test(placement);
            if (autoPlace) placement = placement.replace(autoToken, "") || "top";
            $tip.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(placement).data("bs." + this.type, this);
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var pos = this.getPosition();
            var actualWidth = $tip[0].offsetWidth;
            var actualHeight = $tip[0].offsetHeight;
            if (autoPlace) {
                var orgPlacement = placement;
                var viewportDim = this.getPosition(this.$viewport);
                placement = placement == "bottom" && pos.bottom + actualHeight > viewportDim.bottom ? "top" : placement == "top" && pos.top - actualHeight < viewportDim.top ? "bottom" : placement == "right" && pos.right + actualWidth > viewportDim.width ? "left" : placement == "left" && pos.left - actualWidth < viewportDim.left ? "right" : placement;
                $tip.removeClass(orgPlacement).addClass(placement);
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
            this.applyPlacement(calculatedOffset, placement);
            var complete = function() {
                var prevHoverState = that.hoverState;
                that.$element.trigger("shown.bs." + that.type);
                that.hoverState = null;
                if (prevHoverState == "out") that.leave(that);
            };
            $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        }
    };
    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip();
        var width = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;
        var marginTop = parseInt($tip.css("margin-top"), 10);
        var marginLeft = parseInt($tip.css("margin-left"), 10);
        if (isNaN(marginTop)) marginTop = 0;
        if (isNaN(marginLeft)) marginLeft = 0;
        offset.top += marginTop;
        offset.left += marginLeft;
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                });
            }
        }, offset), 0);
        $tip.addClass("in");
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if (placement == "top" && actualHeight != height) {
            offset.top = offset.top + height - actualHeight;
        }
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
        if (delta.left) offset.left += delta.left; else offset.top += delta.top;
        var isVertical = /top|bottom/.test(placement);
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
        var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
        $tip.offset(offset);
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
    };
    Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
        this.arrow().css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isVertical ? "top" : "left", "");
    };
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
        $tip.removeClass("fade in top bottom left right");
    };
    Tooltip.prototype.hide = function(callback) {
        var that = this;
        var $tip = $(this.$tip);
        var e = $.Event("hide.bs." + this.type);
        function complete() {
            if (that.hoverState != "in") $tip.detach();
            that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
            callback && callback();
        }
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;
        $tip.removeClass("in");
        $.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        this.hoverState = null;
        return this;
    };
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
            $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
        }
    };
    Tooltip.prototype.hasContent = function() {
        return this.getTitle();
    };
    Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0];
        var isBody = el.tagName == "BODY";
        var elRect = el.getBoundingClientRect();
        if (elRect.width == null) {
            elRect = $.extend({}, elRect, {
                width: elRect.right - elRect.left,
                height: elRect.bottom - elRect.top
            });
        }
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : $element.offset();
        var scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        };
        var outerDims = isBody ? {
            width: $(window).width(),
            height: $(window).height()
        } : null;
        return $.extend({}, elRect, scroll, outerDims, elOffset);
    };
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == "bottom" ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "top" ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "left" ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        };
    };
    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return delta;
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
        var viewportDimensions = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
            if (topEdgeOffset < viewportDimensions.top) {
                delta.top = viewportDimensions.top - topEdgeOffset;
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding;
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
            if (leftEdgeOffset < viewportDimensions.left) {
                delta.left = viewportDimensions.left - leftEdgeOffset;
            } else if (rightEdgeOffset > viewportDimensions.right) {
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
            }
        }
        return delta;
    };
    Tooltip.prototype.getTitle = function() {
        var title;
        var $e = this.$element;
        var o = this.options;
        title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
        return title;
    };
    Tooltip.prototype.getUID = function(prefix) {
        do prefix += ~~(Math.random() * 1e6); while (document.getElementById(prefix));
        return prefix;
    };
    Tooltip.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = $(this.options.template);
            if (this.$tip.length != 1) {
                throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            }
        }
        return this.$tip;
    };
    Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    };
    Tooltip.prototype.enable = function() {
        this.enabled = true;
    };
    Tooltip.prototype.disable = function() {
        this.enabled = false;
    };
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    };
    Tooltip.prototype.toggle = function(e) {
        var self = this;
        if (e) {
            self = $(e.currentTarget).data("bs." + this.type);
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions());
                $(e.currentTarget).data("bs." + this.type, self);
            }
        }
        if (e) {
            self.inState.click = !self.inState.click;
            if (self.isInStateTrue()) self.enter(self); else self.leave(self);
        } else {
            self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
        }
    };
    Tooltip.prototype.destroy = function() {
        var that = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            that.$element.off("." + that.type).removeData("bs." + that.type);
            if (that.$tip) {
                that.$tip.detach();
            }
            that.$tip = null;
            that.$arrow = null;
            that.$viewport = null;
        });
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tooltip");
            var options = typeof option == "object" && option;
            if (!data && /destroy|hide/.test(option)) return;
            if (!data) $this.data("bs.tooltip", data = new Tooltip(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.tooltip;
    $.fn.tooltip = Plugin;
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old;
        return this;
    };
}(jQuery);

+function($) {
    "use strict";
    var Popover = function(element, options) {
        this.init("popover", element, options);
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    Popover.VERSION = "3.3.6";
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
    Popover.prototype.constructor = Popover;
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS;
    };
    Popover.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        var content = this.getContent();
        $tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
        $tip.find(".popover-content").children().detach().end()[this.options.html ? typeof content == "string" ? "html" : "append" : "text"](content);
        $tip.removeClass("fade top bottom left right in");
        if (!$tip.find(".popover-title").html()) $tip.find(".popover-title").hide();
    };
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    };
    Popover.prototype.getContent = function() {
        var $e = this.$element;
        var o = this.options;
        return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content);
    };
    Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.popover");
            var options = typeof option == "object" && option;
            if (!data && /destroy|hide/.test(option)) return;
            if (!data) $this.data("bs.popover", data = new Popover(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.popover;
    $.fn.popover = Plugin;
    $.fn.popover.Constructor = Popover;
    $.fn.popover.noConflict = function() {
        $.fn.popover = old;
        return this;
    };
}(jQuery);

+function($) {
    "use strict";
    function ScrollSpy(element, options) {
        this.$body = $(document.body);
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this));
        this.refresh();
        this.process();
    }
    ScrollSpy.VERSION = "3.3.6";
    ScrollSpy.DEFAULTS = {
        offset: 10
    };
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    };
    ScrollSpy.prototype.refresh = function() {
        var that = this;
        var offsetMethod = "offset";
        var offsetBase = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = "position";
            offsetBase = this.$scrollElement.scrollTop();
        }
        this.$body.find(this.selector).map(function() {
            var $el = $(this);
            var href = $el.data("target") || $el.attr("href");
            var $href = /^#./.test(href) && $(href);
            return $href && $href.length && $href.is(":visible") && [ [ $href[offsetMethod]().top + offsetBase, href ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            that.offsets.push(this[0]);
            that.targets.push(this[1]);
        });
    };
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;
        if (this.scrollHeight != scrollHeight) {
            this.refresh();
        }
        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        }
        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null;
            return this.clear();
        }
        for (i = offsets.length; i--; ) {
            activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
        }
    };
    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target;
        this.clear();
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
        var active = $(selector).parents("li").addClass("active");
        if (active.parent(".dropdown-menu").length) {
            active = active.closest("li.dropdown").addClass("active");
        }
        active.trigger("activate.bs.scrollspy");
    };
    ScrollSpy.prototype.clear = function() {
        $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.scrollspy");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.scrollspy;
    $.fn.scrollspy = Plugin;
    $.fn.scrollspy.Constructor = ScrollSpy;
    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old;
        return this;
    };
    $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this);
            Plugin.call($spy, $spy.data());
        });
    });
}(jQuery);

+function($) {
    "use strict";
    var Tab = function(element) {
        this.element = $(element);
    };
    Tab.VERSION = "3.3.6";
    Tab.TRANSITION_DURATION = 150;
    Tab.prototype.show = function() {
        var $this = this.element;
        var $ul = $this.closest("ul:not(.dropdown-menu)");
        var selector = $this.data("target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        if ($this.parent("li").hasClass("active")) return;
        var $previous = $ul.find(".active:last a");
        var hideEvent = $.Event("hide.bs.tab", {
            relatedTarget: $this[0]
        });
        var showEvent = $.Event("show.bs.tab", {
            relatedTarget: $previous[0]
        });
        $previous.trigger(hideEvent);
        $this.trigger(showEvent);
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
        var $target = $(selector);
        this.activate($this.closest("li"), $ul);
        this.activate($target, $target.parent(), function() {
            $previous.trigger({
                type: "hidden.bs.tab",
                relatedTarget: $this[0]
            });
            $this.trigger({
                type: "shown.bs.tab",
                relatedTarget: $previous[0]
            });
        });
    };
    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find("> .active");
        var transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);
        function next() {
            $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
            element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
            if (transition) {
                element[0].offsetWidth;
                element.addClass("in");
            } else {
                element.removeClass("fade");
            }
            if (element.parent(".dropdown-menu").length) {
                element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true);
            }
            callback && callback();
        }
        $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
        $active.removeClass("in");
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tab");
            if (!data) $this.data("bs.tab", data = new Tab(this));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.tab;
    $.fn.tab = Plugin;
    $.fn.tab.Constructor = Tab;
    $.fn.tab.noConflict = function() {
        $.fn.tab = old;
        return this;
    };
    var clickHandler = function(e) {
        e.preventDefault();
        Plugin.call($(this), "show");
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
}(jQuery);

+function($) {
    "use strict";
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options);
        this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
        this.$element = $(element);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition();
    };
    Affix.VERSION = "3.3.6";
    Affix.RESET = "affix affix-top affix-bottom";
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    };
    Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var targetHeight = this.$target.height();
        if (offsetTop != null && this.affixed == "top") return scrollTop < offsetTop ? "top" : false;
        if (this.affixed == "bottom") {
            if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : "bottom";
            return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : "bottom";
        }
        var initializing = this.affixed == null;
        var colliderTop = initializing ? scrollTop : position.top;
        var colliderHeight = initializing ? targetHeight : height;
        if (offsetTop != null && scrollTop <= offsetTop) return "top";
        if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return "bottom";
        return false;
    };
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
    };
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1);
    };
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) return;
        var height = this.$element.height();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        var scrollHeight = Math.max($(document).height(), $(document.body).height());
        if (typeof offset != "object") offsetBottom = offsetTop = offset;
        if (typeof offsetTop == "function") offsetTop = offset.top(this.$element);
        if (typeof offsetBottom == "function") offsetBottom = offset.bottom(this.$element);
        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css("top", "");
            var affixType = "affix" + (affix ? "-" + affix : "");
            var e = $.Event(affixType + ".bs.affix");
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) return;
            this.affixed = affix;
            this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;
            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
        }
        if (affix == "bottom") {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            });
        }
    };
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.affix");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.affix", data = new Affix(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.affix;
    $.fn.affix = Plugin;
    $.fn.affix.Constructor = Affix;
    $.fn.affix.noConflict = function() {
        $.fn.affix = old;
        return this;
    };
    $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this);
            var data = $spy.data();
            data.offset = data.offset || {};
            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
            if (data.offsetTop != null) data.offset.top = data.offsetTop;
            Plugin.call($spy, data);
        });
    });
}(jQuery);

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "moment", "jquery", "exports" ], function(momentjs, $, exports) {
            root.daterangepicker = factory(root, exports, momentjs, $);
        });
    } else if (typeof exports !== "undefined") {
        var momentjs = require("moment");
        var jQuery = typeof window != "undefined" ? window.jQuery : undefined;
        if (!jQuery) {
            try {
                jQuery = require("jquery");
                if (!jQuery.fn) jQuery.fn = {};
            } catch (err) {
                if (!jQuery) throw new Error("jQuery dependency not found");
            }
        }
        factory(root, exports, momentjs, jQuery);
    } else {
        root.daterangepicker = factory(root, {}, root.moment || moment, root.jQuery || root.Zepto || root.ender || root.$);
    }
})(this || {}, function(root, daterangepicker, moment, $) {
    var DateRangePicker = function(element, options, cb) {
        this.parentEl = "body";
        this.element = $(element);
        this.startDate = moment().startOf("day");
        this.endDate = moment().endOf("day");
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};
        this.opens = "right";
        if (this.element.hasClass("pull-right")) this.opens = "left";
        this.drops = "down";
        if (this.element.hasClass("dropup")) this.drops = "up";
        this.buttonClasses = "btn btn-sm";
        this.applyClass = "btn-success";
        this.cancelClass = "btn-default";
        this.locale = {
            format: "MM/DD/YYYY",
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            weekLabel: "W",
            customRangeLabel: "Custom Range",
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };
        this.callback = function() {};
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};
        if (typeof options !== "object" || options === null) options = {};
        options = $.extend(this.element.data(), options);
        if (typeof options.template !== "string" && !(options.template instanceof $)) options.template = '<div class="daterangepicker dropdown-menu">' + '<div class="calendar left">' + '<div class="daterangepicker_input">' + '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' + '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' + '<div class="calendar-time">' + "<div></div>" + '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' + "</div>" + "</div>" + '<div class="calendar-table"></div>' + "</div>" + '<div class="calendar right">' + '<div class="daterangepicker_input">' + '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' + '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' + '<div class="calendar-time">' + "<div></div>" + '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' + "</div>" + "</div>" + '<div class="calendar-table"></div>' + "</div>" + '<div class="ranges">' + '<div class="range_inputs">' + '<button class="applyBtn" disabled="disabled" type="button"></button> ' + '<button class="cancelBtn" type="button"></button>' + "</div>" + "</div>" + "</div>";
        this.parentEl = options.parentEl && $(options.parentEl).length ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);
        if (typeof options.locale === "object") {
            if (typeof options.locale.format === "string") this.locale.format = options.locale.format;
            if (typeof options.locale.separator === "string") this.locale.separator = options.locale.separator;
            if (typeof options.locale.daysOfWeek === "object") this.locale.daysOfWeek = options.locale.daysOfWeek.slice();
            if (typeof options.locale.monthNames === "object") this.locale.monthNames = options.locale.monthNames.slice();
            if (typeof options.locale.firstDay === "number") this.locale.firstDay = options.locale.firstDay;
            if (typeof options.locale.applyLabel === "string") this.locale.applyLabel = options.locale.applyLabel;
            if (typeof options.locale.cancelLabel === "string") this.locale.cancelLabel = options.locale.cancelLabel;
            if (typeof options.locale.weekLabel === "string") this.locale.weekLabel = options.locale.weekLabel;
            if (typeof options.locale.customRangeLabel === "string") this.locale.customRangeLabel = options.locale.customRangeLabel;
        }
        if (typeof options.startDate === "string") this.startDate = moment(options.startDate, this.locale.format);
        if (typeof options.endDate === "string") this.endDate = moment(options.endDate, this.locale.format);
        if (typeof options.minDate === "string") this.minDate = moment(options.minDate, this.locale.format);
        if (typeof options.maxDate === "string") this.maxDate = moment(options.maxDate, this.locale.format);
        if (typeof options.startDate === "object") this.startDate = moment(options.startDate);
        if (typeof options.endDate === "object") this.endDate = moment(options.endDate);
        if (typeof options.minDate === "object") this.minDate = moment(options.minDate);
        if (typeof options.maxDate === "object") this.maxDate = moment(options.maxDate);
        if (this.minDate && this.startDate.isBefore(this.minDate)) this.startDate = this.minDate.clone();
        if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();
        if (typeof options.applyClass === "string") this.applyClass = options.applyClass;
        if (typeof options.cancelClass === "string") this.cancelClass = options.cancelClass;
        if (typeof options.dateLimit === "object") this.dateLimit = options.dateLimit;
        if (typeof options.opens === "string") this.opens = options.opens;
        if (typeof options.drops === "string") this.drops = options.drops;
        if (typeof options.showWeekNumbers === "boolean") this.showWeekNumbers = options.showWeekNumbers;
        if (typeof options.showISOWeekNumbers === "boolean") this.showISOWeekNumbers = options.showISOWeekNumbers;
        if (typeof options.buttonClasses === "string") this.buttonClasses = options.buttonClasses;
        if (typeof options.buttonClasses === "object") this.buttonClasses = options.buttonClasses.join(" ");
        if (typeof options.showDropdowns === "boolean") this.showDropdowns = options.showDropdowns;
        if (typeof options.singleDatePicker === "boolean") {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker) this.endDate = this.startDate.clone();
        }
        if (typeof options.timePicker === "boolean") this.timePicker = options.timePicker;
        if (typeof options.timePickerSeconds === "boolean") this.timePickerSeconds = options.timePickerSeconds;
        if (typeof options.timePickerIncrement === "number") this.timePickerIncrement = options.timePickerIncrement;
        if (typeof options.timePicker24Hour === "boolean") this.timePicker24Hour = options.timePicker24Hour;
        if (typeof options.autoApply === "boolean") this.autoApply = options.autoApply;
        if (typeof options.autoUpdateInput === "boolean") this.autoUpdateInput = options.autoUpdateInput;
        if (typeof options.linkedCalendars === "boolean") this.linkedCalendars = options.linkedCalendars;
        if (typeof options.isInvalidDate === "function") this.isInvalidDate = options.isInvalidDate;
        if (typeof options.alwaysShowCalendars === "boolean") this.alwaysShowCalendars = options.alwaysShowCalendars;
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }
        var start, end, range;
        if (typeof options.startDate === "undefined" && typeof options.endDate === "undefined") {
            if ($(this.element).is("input[type=text]")) {
                var val = $(this.element).val(), split = val.split(this.locale.separator);
                start = end = null;
                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }
        if (typeof options.ranges === "object") {
            for (range in options.ranges) {
                if (typeof options.ranges[range][0] === "string") start = moment(options.ranges[range][0], this.locale.format); else start = moment(options.ranges[range][0]);
                if (typeof options.ranges[range][1] === "string") end = moment(options.ranges[range][1], this.locale.format); else end = moment(options.ranges[range][1]);
                if (this.minDate && start.isBefore(this.minDate)) start = this.minDate.clone();
                var maxDate = this.maxDate;
                if (this.dateLimit && start.clone().add(this.dateLimit).isAfter(maxDate)) maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate)) end = maxDate.clone();
                if (this.minDate && end.isBefore(this.minDate) || maxDate && start.isAfter(maxDate)) continue;
                var elem = document.createElement("textarea");
                elem.innerHTML = range;
                var rangeHtml = elem.value;
                this.ranges[rangeHtml] = [ start, end ];
            }
            var list = "<ul>";
            for (range in this.ranges) {
                list += "<li>" + range + "</li>";
            }
            list += "<li>" + this.locale.customRangeLabel + "</li>";
            list += "</ul>";
            this.container.find(".ranges").prepend(list);
        }
        if (typeof cb === "function") {
            this.callback = cb;
        }
        if (!this.timePicker) {
            this.startDate = this.startDate.startOf("day");
            this.endDate = this.endDate.endOf("day");
            this.container.find(".calendar-time").hide();
        }
        if (this.timePicker && this.autoApply) this.autoApply = false;
        if (this.autoApply && typeof options.ranges !== "object") {
            this.container.find(".ranges").hide();
        } else if (this.autoApply) {
            this.container.find(".applyBtn, .cancelBtn").addClass("hide");
        }
        if (this.singleDatePicker) {
            this.container.addClass("single");
            this.container.find(".calendar.left").addClass("single");
            this.container.find(".calendar.left").show();
            this.container.find(".calendar.right").hide();
            this.container.find(".daterangepicker_input input, .daterangepicker_input i").hide();
            if (!this.timePicker) {
                this.container.find(".ranges").hide();
            }
        }
        if (typeof options.ranges === "undefined" && !this.singleDatePicker || this.alwaysShowCalendars) {
            this.container.addClass("show-calendar");
        }
        this.container.addClass("opens" + this.opens);
        if (typeof options.ranges !== "undefined" && this.opens == "right") {
            var ranges = this.container.find(".ranges");
            var html = ranges.clone();
            ranges.remove();
            this.container.find(".calendar.left").parent().prepend(html);
        }
        this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses);
        if (this.applyClass.length) this.container.find(".applyBtn").addClass(this.applyClass);
        if (this.cancelClass.length) this.container.find(".cancelBtn").addClass(this.cancelClass);
        this.container.find(".applyBtn").html(this.locale.applyLabel);
        this.container.find(".cancelBtn").html(this.locale.cancelLabel);
        this.container.find(".calendar").on("click.daterangepicker", ".prev", $.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", $.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", $.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", $.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available", $.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", $.proxy(this.timeChanged, this)).on("click.daterangepicker", ".daterangepicker_input input", $.proxy(this.showCalendars, this)).on("change.daterangepicker", ".daterangepicker_input input", $.proxy(this.formInputsChanged, this));
        this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", $.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", $.proxy(this.clickCancel, this)).on("click.daterangepicker", "li", $.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", $.proxy(this.hoverRange, this)).on("mouseleave.daterangepicker", "li", $.proxy(this.updateFormInputs, this));
        if (this.element.is("input")) {
            this.element.on({
                "click.daterangepicker": $.proxy(this.show, this),
                "focus.daterangepicker": $.proxy(this.show, this),
                "keyup.daterangepicker": $.proxy(this.elementChanged, this),
                "keydown.daterangepicker": $.proxy(this.keydown, this)
            });
        } else {
            this.element.on("click.daterangepicker", $.proxy(this.toggle, this));
        }
        if (this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger("change");
        } else if (this.element.is("input") && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger("change");
        }
    };
    DateRangePicker.prototype = {
        constructor: DateRangePicker,
        setStartDate: function(startDate) {
            if (typeof startDate === "string") this.startDate = moment(startDate, this.locale.format);
            if (typeof startDate === "object") this.startDate = moment(startDate);
            if (!this.timePicker) this.startDate = this.startDate.startOf("day");
            if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            if (this.minDate && this.startDate.isBefore(this.minDate)) this.startDate = this.minDate;
            if (this.maxDate && this.startDate.isAfter(this.maxDate)) this.startDate = this.maxDate;
            if (!this.isShowing) this.updateElement();
            this.updateMonthsInView();
        },
        setEndDate: function(endDate) {
            if (typeof endDate === "string") this.endDate = moment(endDate, this.locale.format);
            if (typeof endDate === "object") this.endDate = moment(endDate);
            if (!this.timePicker) this.endDate = this.endDate.endOf("day");
            if (this.timePicker && this.timePickerIncrement) this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            if (this.endDate.isBefore(this.startDate)) this.endDate = this.startDate.clone();
            if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate;
            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)) this.endDate = this.startDate.clone().add(this.dateLimit);
            this.previousRightTime = this.endDate.clone();
            if (!this.isShowing) this.updateElement();
            this.updateMonthsInView();
        },
        isInvalidDate: function() {
            return false;
        },
        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker("left");
                this.renderTimePicker("right");
                if (!this.endDate) {
                    this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled");
                } else {
                    this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled");
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass("active");
                this.container.find('input[name="daterangepicker_start"]').addClass("active");
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass("active");
                this.container.find('input[name="daterangepicker_start"]').removeClass("active");
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) {
                    return;
                }
                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month");
                }
            } else {
                if (this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM")) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month");
                }
            }
        },
        updateCalendars: function() {
            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find(".left .hourselect").val(), 10);
                    minute = parseInt(this.container.find(".left .minuteselect").val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find(".left .ampmselect").val();
                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find(".right .hourselect").val(), 10);
                    minute = parseInt(this.container.find(".right .minuteselect").val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find(".right .ampmselect").val();
                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }
            this.renderCalendar("left");
            this.renderCalendar("right");
            this.container.find(".ranges li").removeClass("active");
            if (this.endDate == null) return;
            this.calculateChosenLabel();
        },
        renderCalendar: function(side) {
            var calendar = side == "left" ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([ year, month ]).daysInMonth();
            var firstDay = moment([ year, month, 1 ]);
            var lastDay = moment([ year, month, daysInMonth ]);
            var lastMonth = moment(firstDay).subtract(1, "month").month();
            var lastYear = moment(firstDay).subtract(1, "month").year();
            var daysInLastMonth = moment([ lastYear, lastMonth ]).daysInMonth();
            var dayOfWeek = firstDay.day();
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;
            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth) startDay -= 7;
            if (dayOfWeek == this.locale.firstDay) startDay = daysInLastMonth - 6;
            var curDate = moment([ lastYear, lastMonth, startDay, 12, minute, second ]);
            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, "hour")) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);
                if (this.minDate && calendar[row][col].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && calendar[row][col].isBefore(this.minDate) && side == "left") {
                    calendar[row][col] = this.minDate.clone();
                }
                if (this.maxDate && calendar[row][col].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && calendar[row][col].isAfter(this.maxDate) && side == "right") {
                    calendar[row][col] = this.maxDate.clone();
                }
            }
            if (side == "left") {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }
            var minDate = side == "left" ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == "left" ? this.startDate : this.endDate;
            var html = '<table class="table-condensed">';
            html += "<thead>";
            html += "<tr>";
            if (this.showWeekNumbers || this.showISOWeekNumbers) html += "<th></th>";
            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == "left")) {
                html += '<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';
            } else {
                html += "<th></th>";
            }
            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");
            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = maxDate && maxDate.year() || currentYear + 5;
                var minYear = minDate && minDate.year() || currentYear - 50;
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;
                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";
                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : "") + ">" + y + "</option>";
                }
                yearHtml += "</select>";
                dateHtml = monthHtml + yearHtml;
            }
            html += '<th colspan="5" class="month">' + dateHtml + "</th>";
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == "right" || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>';
            } else {
                html += "<th></th>";
            }
            html += "</tr>";
            html += "<tr>";
            if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th class="week">' + this.locale.weekLabel + "</th>";
            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += "<th>" + dayOfWeek + "</th>";
            });
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf("day");
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }
            for (var row = 0; row < 6; row++) {
                html += "<tr>";
                if (this.showWeekNumbers) html += '<td class="week">' + calendar[row][0].week() + "</td>"; else if (this.showISOWeekNumbers) html += '<td class="week">' + calendar[row][0].isoWeek() + "</td>";
                for (var col = 0; col < 7; col++) {
                    var classes = [];
                    if (calendar[row][col].isSame(new Date(), "day")) classes.push("today");
                    if (calendar[row][col].isoWeekday() > 5) classes.push("weekend");
                    if (calendar[row][col].month() != calendar[1][1].month()) classes.push("off");
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, "day")) classes.push("off", "disabled");
                    if (maxDate && calendar[row][col].isAfter(maxDate, "day")) classes.push("off", "disabled");
                    if (this.isInvalidDate(calendar[row][col])) classes.push("off", "disabled");
                    if (calendar[row][col].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD")) classes.push("active", "start-date");
                    if (this.endDate != null && calendar[row][col].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD")) classes.push("active", "end-date");
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) classes.push("in-range");
                    var cname = "", disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + " ";
                        if (classes[i] == "disabled") disabled = true;
                    }
                    if (!disabled) cname += "available";
                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, "") + '" data-title="' + "r" + row + "c" + col + '">' + calendar[row][col].date() + "</td>";
                }
                html += "</tr>";
            }
            html += "</tbody>";
            html += "</table>";
            this.container.find(".calendar." + side + " .calendar-table").html(html);
        },
        renderTimePicker: function(side) {
            var html, selected, minDate, maxDate = this.maxDate;
            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate))) maxDate = this.startDate.clone().add(this.dateLimit);
            if (side == "left") {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == "right") {
                selected = this.endDate ? this.endDate.clone() : this.previousRightTime.clone();
                minDate = this.startDate;
                var timeSelector = this.container.find(".calendar.right .calendar-time div");
                if (timeSelector.html() != "") {
                    selected.hour(timeSelector.find(".hourselect option:selected").val() || selected.hour());
                    selected.minute(timeSelector.find(".minuteselect option:selected").val() || selected.minute());
                    selected.second(timeSelector.find(".secondselect option:selected").val() || selected.second());
                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find(".ampmselect option:selected").val();
                        if (ampm === "PM" && selected.hour() < 12) selected.hour(selected.hour() + 12);
                        if (ampm === "AM" && selected.hour() === 12) selected.hour(0);
                    }
                    if (selected.isBefore(this.startDate)) selected = this.startDate.clone();
                    if (maxDate && selected.isAfter(maxDate)) selected = maxDate.clone();
                }
            }
            html = '<select class="hourselect">';
            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;
            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour) i_in_24 = selected.hour() >= 12 ? i == 12 ? 12 : i + 12 : i == 12 ? 0 : i;
                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate)) disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate)) disabled = true;
                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + "</option>";
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + "</option>";
                } else {
                    html += '<option value="' + i + '">' + i + "</option>";
                }
            }
            html += "</select> ";
            html += ': <select class="minuteselect">';
            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? "0" + i : i;
                var time = selected.clone().minute(i);
                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate)) disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate)) disabled = true;
                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + "</option>";
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + "</option>";
                } else {
                    html += '<option value="' + i + '">' + padded + "</option>";
                }
            }
            html += "</select> ";
            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';
                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? "0" + i : i;
                    var time = selected.clone().second(i);
                    var disabled = false;
                    if (minDate && time.isBefore(minDate)) disabled = true;
                    if (maxDate && time.isAfter(maxDate)) disabled = true;
                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + "</option>";
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + "</option>";
                    } else {
                        html += '<option value="' + i + '">' + padded + "</option>";
                    }
                }
                html += "</select> ";
            }
            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';
                var am_html = "";
                var pm_html = "";
                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) am_html = ' disabled="disabled" class="disabled"';
                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) pm_html = ' disabled="disabled" class="disabled"';
                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + ">PM</option>";
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + ">PM</option>";
                }
                html += "</select>";
            }
            this.container.find(".calendar." + side + " .calendar-time div").html(html);
        },
        updateFormInputs: function() {
            if (this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus")) return;
            this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format));
            if (this.endDate) this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format));
            if (this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate))) {
                this.container.find("button.applyBtn").removeAttr("disabled");
            } else {
                this.container.find("button.applyBtn").attr("disabled", "disabled");
            }
        },
        move: function() {
            var parentOffset = {
                top: 0,
                left: 0
            }, containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is("body")) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }
            if (this.drops == "up") containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top; else containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == "up" ? "addClass" : "removeClass"]("dropup");
            if (this.opens == "left") {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: "auto"
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: "auto",
                        left: 9
                    });
                }
            } else if (this.opens == "center") {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                    right: "auto"
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: "auto",
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: "auto"
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: "auto",
                        right: 0
                    });
                }
            }
        },
        show: function(e) {
            if (this.isShowing) return;
            this._outsideClickProxy = $.proxy(function(e) {
                this.outsideClick(e);
            }, this);
            $(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy);
            $(window).on("resize.daterangepicker", $.proxy(function(e) {
                this.move(e);
            }, this));
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();
            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger("show.daterangepicker", this);
            this.isShowing = true;
        },
        hide: function(e) {
            if (!this.isShowing) return;
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) this.callback(this.startDate, this.endDate, this.chosenLabel);
            this.updateElement();
            $(document).off(".daterangepicker");
            $(window).off(".daterangepicker");
            this.container.hide();
            this.element.trigger("hide.daterangepicker", this);
            this.isShowing = false;
        },
        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },
        outsideClick: function(e) {
            var target = $(e.target);
            if (e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest(".calendar-table").length) return;
            this.hide();
        },
        showCalendars: function() {
            this.container.addClass("show-calendar");
            this.move();
            this.element.trigger("showCalendar.daterangepicker", this);
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar");
            this.element.trigger("hideCalendar.daterangepicker", this);
        },
        hoverRange: function(e) {
            if (this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus")) return;
            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find("input[name=daterangepicker_start]").val(dates[0].format(this.locale.format));
                this.container.find("input[name=daterangepicker_end]").val(dates[1].format(this.locale.format));
            }
        },
        clickRange: function(e) {
            var label = e.target.innerHTML;
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];
                if (!this.timePicker) {
                    this.startDate.startOf("day");
                    this.endDate.endOf("day");
                }
                if (!this.alwaysShowCalendars) this.hideCalendars();
                this.clickApply();
            }
        },
        clickPrev: function(e) {
            var cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                this.leftCalendar.month.subtract(1, "month");
                if (this.linkedCalendars) this.rightCalendar.month.subtract(1, "month");
            } else {
                this.rightCalendar.month.subtract(1, "month");
            }
            this.updateCalendars();
        },
        clickNext: function(e) {
            var cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                this.leftCalendar.month.add(1, "month");
            } else {
                this.rightCalendar.month.add(1, "month");
                if (this.linkedCalendars) this.leftCalendar.month.add(1, "month");
            }
            this.updateCalendars();
        },
        hoverDate: function(e) {
            if (this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus")) return;
            if (!$(e.target).hasClass("available")) return;
            var title = $(e.target).attr("data-title");
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents(".calendar");
            var date = cal.hasClass("left") ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
            if (this.endDate) {
                this.container.find("input[name=daterangepicker_start]").val(date.format(this.locale.format));
            } else {
                this.container.find("input[name=daterangepicker_end]").val(date.format(this.locale.format));
            }
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find(".calendar td").each(function(index, el) {
                    if ($(el).hasClass("week")) return;
                    var title = $(el).attr("data-title");
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents(".calendar");
                    var dt = cal.hasClass("left") ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];
                    if (dt.isAfter(startDate) && dt.isBefore(date)) {
                        $(el).addClass("in-range");
                    } else {
                        $(el).removeClass("in-range");
                    }
                });
            }
        },
        clickDate: function(e) {
            if (!$(e.target).hasClass("available")) return;
            var title = $(e.target).attr("data-title");
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents(".calendar");
            var date = cal.hasClass("left") ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
            if (this.endDate || date.isBefore(this.startDate, "day")) {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find(".left .hourselect").val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find(".left .ampmselect").val();
                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;
                    }
                    var minute = parseInt(this.container.find(".left .minuteselect").val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                this.setEndDate(this.startDate.clone());
            } else {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find(".right .hourselect").val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find(".right .ampmselect").val();
                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;
                    }
                    var minute = parseInt(this.container.find(".right .minuteselect").val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                    this.calculateChosenLabel();
                    this.clickApply();
                }
            }
            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker) this.clickApply();
            }
            this.updateView();
        },
        calculateChosenLabel: function() {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").html();
                        break;
                    }
                } else {
                    if (this.startDate.format("YYYY-MM-DD") == this.ranges[range][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[range][1].format("YYYY-MM-DD")) {
                        customRange = false;
                        this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").html();
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html();
                this.showCalendars();
            }
        },
        clickApply: function(e) {
            this.hide();
            this.element.trigger("apply.daterangepicker", this);
        },
        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger("cancel.daterangepicker", this);
        },
        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest(".calendar").hasClass("left"), leftOrRight = isLeft ? "left" : "right", cal = this.container.find(".calendar." + leftOrRight);
            var month = parseInt(cal.find(".monthselect").val(), 10);
            var year = cal.find(".yearselect").val();
            if (!isLeft) {
                if (year < this.startDate.year() || year == this.startDate.year() && month < this.startDate.month()) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }
            if (this.minDate) {
                if (year < this.minDate.year() || year == this.minDate.year() && month < this.minDate.month()) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }
            if (this.maxDate) {
                if (year > this.maxDate.year() || year == this.maxDate.year() && month > this.maxDate.month()) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }
            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars) this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month");
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars) this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month");
            }
            this.updateCalendars();
        },
        timeChanged: function(e) {
            var cal = $(e.target).closest(".calendar"), isLeft = cal.hasClass("left");
            var hour = parseInt(cal.find(".hourselect").val(), 10);
            var minute = parseInt(cal.find(".minuteselect").val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var ampm = cal.find(".ampmselect").val();
                if (ampm === "PM" && hour < 12) hour += 12;
                if (ampm === "AM" && hour === 12) hour = 0;
            }
            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format("YYYY-MM-DD") == start.format("YYYY-MM-DD") && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }
            this.updateCalendars();
            this.updateFormInputs();
            this.renderTimePicker("left");
            this.renderTimePicker("right");
        },
        formInputsChanged: function(e) {
            var isRight = $(e.target).closest(".calendar").hasClass("right");
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);
            if (start.isValid() && end.isValid()) {
                if (isRight && end.isBefore(start)) start = end.clone();
                this.setStartDate(start);
                this.setEndDate(end);
                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }
            }
            this.updateCalendars();
            if (this.timePicker) {
                this.renderTimePicker("left");
                this.renderTimePicker("right");
            }
        },
        elementChanged: function() {
            if (!this.element.is("input")) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;
            var dateString = this.element.val().split(this.locale.separator), start = null, end = null;
            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }
            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }
            if (!start.isValid() || !end.isValid()) return;
            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },
        keydown: function(e) {
            if (e.keyCode === 9 || e.keyCode === 13) {
                this.hide();
            }
        },
        updateElement: function() {
            if (this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger("change");
            } else if (this.element.is("input") && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger("change");
            }
        },
        remove: function() {
            this.container.remove();
            this.element.off(".daterangepicker");
            this.element.removeData();
        }
    };
    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data("daterangepicker")) el.data("daterangepicker").remove();
            el.data("daterangepicker", new DateRangePicker(el, options, callback));
        });
        return this;
    };
    return DateRangePicker;
});

angular.module("ui.bootstrap", [ "ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead" ]), 
angular.module("ui.bootstrap.tpls", [ "template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-popup.html", "template/tooltip/tooltip-popup.html", "template/tooltip/tooltip-template-popup.html", "template/popover/popover-html.html", "template/popover/popover-template.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html" ]), 
angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", [ "$animate", "$injector", function(a, b) {
    var c = b.has("$animateCss") ? b.get("$animateCss") : null;
    return {
        link: function(b, d, e) {
            function f() {
                d.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), 
                c ? c(d, {
                    addClass: "in",
                    easing: "ease",
                    to: {
                        height: d[0].scrollHeight + "px"
                    }
                }).start()["finally"](g) : a.addClass(d, "in", {
                    to: {
                        height: d[0].scrollHeight + "px"
                    }
                }).then(g);
            }
            function g() {
                d.removeClass("collapsing").addClass("collapse").css({
                    height: "auto"
                });
            }
            function h() {
                return d.hasClass("collapse") || d.hasClass("in") ? (d.css({
                    height: d[0].scrollHeight + "px"
                }).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), 
                void (c ? c(d, {
                    removeClass: "in",
                    to: {
                        height: "0"
                    }
                }).start()["finally"](i) : a.removeClass(d, "in", {
                    to: {
                        height: "0"
                    }
                }).then(i))) : i();
            }
            function i() {
                d.css({
                    height: "0"
                }), d.removeClass("collapsing").addClass("collapse");
            }
            b.$watch(e.uibCollapse, function(a) {
                a ? h() : f();
            });
        }
    };
} ]), angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning", !1).directive("collapse", [ "$animate", "$injector", "$log", "$collapseSuppressWarning", function(a, b, c, d) {
    var e = b.has("$animateCss") ? b.get("$animateCss") : null;
    return {
        link: function(b, f, g) {
            function h() {
                f.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), 
                e ? e(f, {
                    easing: "ease",
                    to: {
                        height: f[0].scrollHeight + "px"
                    }
                }).start().done(i) : a.animate(f, {}, {
                    height: f[0].scrollHeight + "px"
                }).then(i);
            }
            function i() {
                f.removeClass("collapsing").addClass("collapse in").css({
                    height: "auto"
                });
            }
            function j() {
                return f.hasClass("collapse") || f.hasClass("in") ? (f.css({
                    height: f[0].scrollHeight + "px"
                }).removeClass("collapse in").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), 
                void (e ? e(f, {
                    to: {
                        height: "0"
                    }
                }).start().done(k) : a.animate(f, {}, {
                    height: "0"
                }).then(k))) : k();
            }
            function k() {
                f.css({
                    height: "0"
                }), f.removeClass("collapsing").addClass("collapse");
            }
            d || c.warn("collapse is now deprecated. Use uib-collapse instead."), b.$watch(g.collapse, function(a) {
                a ? j() : h();
            });
        }
    };
} ]), angular.module("ui.bootstrap.accordion", [ "ui.bootstrap.collapse" ]).constant("uibAccordionConfig", {
    closeOthers: !0
}).controller("UibAccordionController", [ "$scope", "$attrs", "uibAccordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function(a) {
            a !== d && (a.isOpen = !1);
        });
    }, this.addGroup = function(a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function(c) {
            b.removeGroup(a);
        });
    }, this.removeGroup = function(a) {
        var b = this.groups.indexOf(a);
        -1 !== b && this.groups.splice(b, 1);
    };
} ]).directive("uibAccordion", function() {
    return {
        controller: "UibAccordionController",
        controllerAs: "accordion",
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/accordion/accordion.html";
        }
    };
}).directive("uibAccordionGroup", function() {
    return {
        require: "^uibAccordion",
        transclude: !0,
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/accordion/accordion-group.html";
        },
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a;
            };
        },
        link: function(a, b, c, d) {
            d.addGroup(a), a.openClass = c.openClass || "panel-open", a.panelClass = c.panelClass, 
            a.$watch("isOpen", function(c) {
                b.toggleClass(a.openClass, !!c), c && d.closeOthers(a);
            }), a.toggleOpen = function(b) {
                a.isDisabled || b && 32 !== b.which || (a.isOpen = !a.isOpen);
            };
        }
    };
}).directive("uibAccordionHeading", function() {
    return {
        transclude: !0,
        template: "",
        replace: !0,
        require: "^uibAccordionGroup",
        link: function(a, b, c, d, e) {
            d.setHeading(e(a, angular.noop));
        }
    };
}).directive("uibAccordionTransclude", function() {
    return {
        require: [ "?^uibAccordionGroup", "?^accordionGroup" ],
        link: function(a, b, c, d) {
            d = d[0] ? d[0] : d[1], a.$watch(function() {
                return d[c.uibAccordionTransclude];
            }, function(a) {
                a && (b.find("span").html(""), b.find("span").append(a));
            });
        }
    };
}), angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning", !1).controller("AccordionController", [ "$scope", "$attrs", "$controller", "$log", "$accordionSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("AccordionController is now deprecated. Use UibAccordionController instead."), 
    angular.extend(this, c("UibAccordionController", {
        $scope: a,
        $attrs: b
    }));
} ]).directive("accordion", [ "$log", "$accordionSuppressWarning", function(a, b) {
    return {
        restrict: "EA",
        controller: "AccordionController",
        controllerAs: "accordion",
        transclude: !0,
        replace: !1,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/accordion/accordion.html";
        },
        link: function() {
            b || a.warn("accordion is now deprecated. Use uib-accordion instead.");
        }
    };
} ]).directive("accordionGroup", [ "$log", "$accordionSuppressWarning", function(a, b) {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/accordion/accordion-group.html";
        },
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a;
            };
        },
        link: function(c, d, e, f) {
            b || a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."), 
            f.addGroup(c), c.openClass = e.openClass || "panel-open", c.panelClass = e.panelClass, 
            c.$watch("isOpen", function(a) {
                d.toggleClass(c.openClass, !!a), a && f.closeOthers(c);
            }), c.toggleOpen = function(a) {
                c.isDisabled || a && 32 !== a.which || (c.isOpen = !c.isOpen);
            };
        }
    };
} ]).directive("accordionHeading", [ "$log", "$accordionSuppressWarning", function(a, b) {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function(c, d, e, f, g) {
            b || a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."), 
            f.setHeading(g(c, angular.noop));
        }
    };
} ]).directive("accordionTransclude", [ "$log", "$accordionSuppressWarning", function(a, b) {
    return {
        require: "^accordionGroup",
        link: function(c, d, e, f) {
            b || a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."), 
            c.$watch(function() {
                return f[e.accordionTransclude];
            }, function(a) {
                a && (d.find("span").html(""), d.find("span").append(a));
            });
        }
    };
} ]), angular.module("ui.bootstrap.alert", []).controller("UibAlertController", [ "$scope", "$attrs", "$interpolate", "$timeout", function(a, b, c, d) {
    a.closeable = !!b.close;
    var e = angular.isDefined(b.dismissOnTimeout) ? c(b.dismissOnTimeout)(a.$parent) : null;
    e && d(function() {
        a.close();
    }, parseInt(e, 10));
} ]).directive("uibAlert", function() {
    return {
        controller: "UibAlertController",
        controllerAs: "alert",
        templateUrl: function(a, b) {
            return b.templateUrl || "template/alert/alert.html";
        },
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    };
}), angular.module("ui.bootstrap.alert").value("$alertSuppressWarning", !1).controller("AlertController", [ "$scope", "$attrs", "$controller", "$log", "$alertSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("AlertController is now deprecated. Use UibAlertController instead."), 
    angular.extend(this, c("UibAlertController", {
        $scope: a,
        $attrs: b
    }));
} ]).directive("alert", [ "$log", "$alertSuppressWarning", function(a, b) {
    return {
        controller: "AlertController",
        controllerAs: "alert",
        templateUrl: function(a, b) {
            return b.templateUrl || "template/alert/alert.html";
        },
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        },
        link: function() {
            b || a.warn("alert is now deprecated. Use uib-alert instead.");
        }
    };
} ]), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("UibButtonsController", [ "uibButtonConfig", function(a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click";
} ]).directive("uibBtnRadio", function() {
    return {
        require: [ "uibBtnRadio", "ngModel" ],
        controller: "UibButtonsController",
        controllerAs: "buttons",
        link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            b.find("input").css({
                display: "none"
            }), f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.uibBtnRadio)));
            }, b.on(e.toggleEvent, function() {
                if (!c.disabled) {
                    var d = b.hasClass(e.activeClass);
                    (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                        f.$setViewValue(d ? null : a.$eval(c.uibBtnRadio)), f.$render();
                    });
                }
            });
        }
    };
}).directive("uibBtnCheckbox", function() {
    return {
        require: [ "uibBtnCheckbox", "ngModel" ],
        controller: "UibButtonsController",
        controllerAs: "button",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0);
            }
            function f() {
                return g(c.btnCheckboxFalse, !1);
            }
            function g(b, c) {
                return angular.isDefined(b) ? a.$eval(b) : c;
            }
            var h = d[0], i = d[1];
            b.find("input").css({
                display: "none"
            }), i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()));
            }, b.on(h.toggleEvent, function() {
                c.disabled || a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render();
                });
            });
        }
    };
}), angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning", !1).controller("ButtonsController", [ "$controller", "$log", "$buttonsSuppressWarning", function(a, b, c) {
    c || b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."), 
    angular.extend(this, a("UibButtonsController"));
} ]).directive("btnRadio", [ "$log", "$buttonsSuppressWarning", function(a, b) {
    return {
        require: [ "btnRadio", "ngModel" ],
        controller: "ButtonsController",
        controllerAs: "buttons",
        link: function(c, d, e, f) {
            b || a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");
            var g = f[0], h = f[1];
            d.find("input").css({
                display: "none"
            }), h.$render = function() {
                d.toggleClass(g.activeClass, angular.equals(h.$modelValue, c.$eval(e.btnRadio)));
            }, d.bind(g.toggleEvent, function() {
                if (!e.disabled) {
                    var a = d.hasClass(g.activeClass);
                    (!a || angular.isDefined(e.uncheckable)) && c.$apply(function() {
                        h.$setViewValue(a ? null : c.$eval(e.btnRadio)), h.$render();
                    });
                }
            });
        }
    };
} ]).directive("btnCheckbox", [ "$document", "$log", "$buttonsSuppressWarning", function(a, b, c) {
    return {
        require: [ "btnCheckbox", "ngModel" ],
        controller: "ButtonsController",
        controllerAs: "button",
        link: function(d, e, f, g) {
            function h() {
                return j(f.btnCheckboxTrue, !0);
            }
            function i() {
                return j(f.btnCheckboxFalse, !1);
            }
            function j(a, b) {
                var c = d.$eval(a);
                return angular.isDefined(c) ? c : b;
            }
            c || b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");
            var k = g[0], l = g[1];
            e.find("input").css({
                display: "none"
            }), l.$render = function() {
                e.toggleClass(k.activeClass, angular.equals(l.$modelValue, h()));
            }, e.bind(k.toggleEvent, function() {
                f.disabled || d.$apply(function() {
                    l.$setViewValue(e.hasClass(k.activeClass) ? i() : h()), l.$render();
                });
            }), e.on("keypress", function(b) {
                f.disabled || 32 !== b.which || a[0].activeElement !== e[0] || d.$apply(function() {
                    l.$setViewValue(e.hasClass(k.activeClass) ? i() : h()), l.$render();
                });
            });
        }
    };
} ]), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", [ "$scope", "$element", "$interval", "$animate", function(a, b, c, d) {
    function e(b, c, e) {
        s || (angular.extend(b, {
            direction: e,
            active: !0
        }), angular.extend(m.currentSlide || {}, {
            direction: e,
            active: !1
        }), d.enabled() && !a.noTransition && !a.$currentTransition && b.$element && m.slides.length > 1 && (b.$element.data(q, b.direction), 
        m.currentSlide && m.currentSlide.$element && m.currentSlide.$element.data(q, b.direction), 
        a.$currentTransition = !0, o ? d.on("addClass", b.$element, function(b, c) {
            "close" === c && (a.$currentTransition = null, d.off("addClass", b));
        }) : b.$element.one("$animate:close", function() {
            a.$currentTransition = null;
        })), m.currentSlide = b, r = c, g());
    }
    function f(a) {
        if (angular.isUndefined(n[a].index)) return n[a];
        var b;
        n.length;
        for (b = 0; b < n.length; ++b) if (n[b].index == a) return n[b];
    }
    function g() {
        h();
        var b = +a.interval;
        !isNaN(b) && b > 0 && (k = c(i, b));
    }
    function h() {
        k && (c.cancel(k), k = null);
    }
    function i() {
        var b = +a.interval;
        l && !isNaN(b) && b > 0 && n.length ? a.next() : a.pause();
    }
    function j(b) {
        b.length || (a.$currentTransition = null);
    }
    var k, l, m = this, n = m.slides = a.slides = [], o = angular.version.minor >= 4, p = "uib-noTransition", q = "uib-slideDirection", r = -1;
    m.currentSlide = null;
    var s = !1;
    m.select = a.select = function(b, c) {
        var d = a.indexOfSlide(b);
        void 0 === c && (c = d > m.getCurrentIndex() ? "next" : "prev"), b && b !== m.currentSlide && !a.$currentTransition && e(b, d, c);
    }, a.$on("$destroy", function() {
        s = !0;
    }), m.getCurrentIndex = function() {
        return m.currentSlide && angular.isDefined(m.currentSlide.index) ? +m.currentSlide.index : r;
    }, a.indexOfSlide = function(a) {
        return angular.isDefined(a.index) ? +a.index : n.indexOf(a);
    }, a.next = function() {
        var b = (m.getCurrentIndex() + 1) % n.length;
        return 0 === b && a.noWrap() ? void a.pause() : m.select(f(b), "next");
    }, a.prev = function() {
        var b = m.getCurrentIndex() - 1 < 0 ? n.length - 1 : m.getCurrentIndex() - 1;
        return a.noWrap() && b === n.length - 1 ? void a.pause() : m.select(f(b), "prev");
    }, a.isActive = function(a) {
        return m.currentSlide === a;
    }, a.$watch("interval", g), a.$watchCollection("slides", j), a.$on("$destroy", h), 
    a.play = function() {
        l || (l = !0, g());
    }, a.pause = function() {
        a.noPause || (l = !1, h());
    }, m.addSlide = function(b, c) {
        b.$element = c, n.push(b), 1 === n.length || b.active ? (m.select(n[n.length - 1]), 
        1 === n.length && a.play()) : b.active = !1;
    }, m.removeSlide = function(a) {
        angular.isDefined(a.index) && n.sort(function(a, b) {
            return +a.index > +b.index;
        });
        var b = n.indexOf(a);
        n.splice(b, 1), n.length > 0 && a.active ? b >= n.length ? m.select(n[b - 1]) : m.select(n[b]) : r > b && r--, 
        0 === n.length && (m.currentSlide = null);
    }, a.$watch("noTransition", function(a) {
        b.data(p, a);
    });
} ]).directive("uibCarousel", [ function() {
    return {
        transclude: !0,
        replace: !0,
        controller: "UibCarouselController",
        controllerAs: "carousel",
        require: "carousel",
        templateUrl: function(a, b) {
            return b.templateUrl || "template/carousel/carousel.html";
        },
        scope: {
            interval: "=",
            noTransition: "=",
            noPause: "=",
            noWrap: "&"
        }
    };
} ]).directive("uibSlide", function() {
    return {
        require: "^uibCarousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/carousel/slide.html";
        },
        scope: {
            active: "=?",
            actual: "=?",
            index: "=?"
        },
        link: function(a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function() {
                d.removeSlide(a);
            }), a.$watch("active", function(b) {
                b && d.select(a);
            });
        }
    };
}).animation(".item", [ "$injector", "$animate", function(a, b) {
    function c(a, b, c) {
        a.removeClass(b), c && c();
    }
    var d = "uib-noTransition", e = "uib-slideDirection", f = null;
    return a.has("$animateCss") && (f = a.get("$animateCss")), {
        beforeAddClass: function(a, g, h) {
            if ("active" == g && a.parent() && a.parent().parent() && !a.parent().parent().data(d)) {
                var i = !1, j = a.data(e), k = "next" == j ? "left" : "right", l = c.bind(this, a, k + " " + j, h);
                return a.addClass(j), f ? f(a, {
                    addClass: k
                }).start().done(l) : b.addClass(a, k).then(function() {
                    i || l(), h();
                }), function() {
                    i = !0;
                };
            }
            h();
        },
        beforeRemoveClass: function(a, g, h) {
            if ("active" === g && a.parent() && a.parent().parent() && !a.parent().parent().data(d)) {
                var i = !1, j = a.data(e), k = "next" == j ? "left" : "right", l = c.bind(this, a, k, h);
                return f ? f(a, {
                    addClass: k
                }).start().done(l) : b.addClass(a, k).then(function() {
                    i || l(), h();
                }), function() {
                    i = !0;
                };
            }
            h();
        }
    };
} ]), angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning", !1).controller("CarouselController", [ "$scope", "$element", "$controller", "$log", "$carouselSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("CarouselController is now deprecated. Use UibCarouselController instead."), 
    angular.extend(this, c("UibCarouselController", {
        $scope: a,
        $element: b
    }));
} ]).directive("carousel", [ "$log", "$carouselSuppressWarning", function(a, b) {
    return {
        transclude: !0,
        replace: !0,
        controller: "CarouselController",
        controllerAs: "carousel",
        require: "carousel",
        templateUrl: function(a, b) {
            return b.templateUrl || "template/carousel/carousel.html";
        },
        scope: {
            interval: "=",
            noTransition: "=",
            noPause: "=",
            noWrap: "&"
        },
        link: function() {
            b || a.warn("carousel is now deprecated. Use uib-carousel instead.");
        }
    };
} ]).directive("slide", [ "$log", "$carouselSuppressWarning", function(a, b) {
    return {
        require: "^carousel",
        transclude: !0,
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/carousel/slide.html";
        },
        scope: {
            active: "=?",
            actual: "=?",
            index: "=?"
        },
        link: function(c, d, e, f) {
            b || a.warn("slide is now deprecated. Use uib-slide instead."), f.addSlide(c, d), 
            c.$on("$destroy", function() {
                f.removeSlide(c);
            }), c.$watch("active", function(a) {
                a && f.select(c);
            });
        }
    };
} ]), angular.module("ui.bootstrap.dateparser", []).service("uibDateParser", [ "$log", "$locale", "orderByFilter", function(a, b, c) {
    function d(a) {
        var b = [], d = a.split("");
        return angular.forEach(g, function(c, e) {
            var f = a.indexOf(e);
            if (f > -1) {
                a = a.split(""), d[f] = "(" + c.regex + ")", a[f] = "$";
                for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                a = a.join(""), b.push({
                    index: f,
                    apply: c.apply
                });
            }
        }), {
            regex: new RegExp("^" + d.join("") + "$"),
            map: c(b, "index")
        };
    }
    function e(a, b, c) {
        return 1 > c ? !1 : 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0;
    }
    var f, g, h = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    this.init = function() {
        f = b.id, this.parsers = {}, g = {
            yyyy: {
                regex: "\\d{4}",
                apply: function(a) {
                    this.year = +a;
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function(a) {
                    this.year = +a + 2e3;
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function(a) {
                    this.year = +a;
                }
            },
            MMMM: {
                regex: b.DATETIME_FORMATS.MONTH.join("|"),
                apply: function(a) {
                    this.month = b.DATETIME_FORMATS.MONTH.indexOf(a);
                }
            },
            MMM: {
                regex: b.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function(a) {
                    this.month = b.DATETIME_FORMATS.SHORTMONTH.indexOf(a);
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1;
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1;
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a;
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a;
                }
            },
            EEEE: {
                regex: b.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: b.DATETIME_FORMATS.SHORTDAY.join("|")
            },
            HH: {
                regex: "(?:0|1)[0-9]|2[0-3]",
                apply: function(a) {
                    this.hours = +a;
                }
            },
            hh: {
                regex: "0[0-9]|1[0-2]",
                apply: function(a) {
                    this.hours = +a;
                }
            },
            H: {
                regex: "1?[0-9]|2[0-3]",
                apply: function(a) {
                    this.hours = +a;
                }
            },
            h: {
                regex: "[0-9]|1[0-2]",
                apply: function(a) {
                    this.hours = +a;
                }
            },
            mm: {
                regex: "[0-5][0-9]",
                apply: function(a) {
                    this.minutes = +a;
                }
            },
            m: {
                regex: "[0-9]|[1-5][0-9]",
                apply: function(a) {
                    this.minutes = +a;
                }
            },
            sss: {
                regex: "[0-9][0-9][0-9]",
                apply: function(a) {
                    this.milliseconds = +a;
                }
            },
            ss: {
                regex: "[0-5][0-9]",
                apply: function(a) {
                    this.seconds = +a;
                }
            },
            s: {
                regex: "[0-9]|[1-5][0-9]",
                apply: function(a) {
                    this.seconds = +a;
                }
            },
            a: {
                regex: b.DATETIME_FORMATS.AMPMS.join("|"),
                apply: function(a) {
                    12 === this.hours && (this.hours = 0), "PM" === a && (this.hours += 12);
                }
            }
        };
    }, this.init(), this.parse = function(c, g, i) {
        if (!angular.isString(c) || !g) return c;
        g = b.DATETIME_FORMATS[g] || g, g = g.replace(h, "\\$&"), b.id !== f && this.init(), 
        this.parsers[g] || (this.parsers[g] = d(g));
        var j = this.parsers[g], k = j.regex, l = j.map, m = c.match(k);
        if (m && m.length) {
            var n, o;
            angular.isDate(i) && !isNaN(i.getTime()) ? n = {
                year: i.getFullYear(),
                month: i.getMonth(),
                date: i.getDate(),
                hours: i.getHours(),
                minutes: i.getMinutes(),
                seconds: i.getSeconds(),
                milliseconds: i.getMilliseconds()
            } : (i && a.warn("dateparser:", "baseDate is not a valid date"), n = {
                year: 1900,
                month: 0,
                date: 1,
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0
            });
            for (var p = 1, q = m.length; q > p; p++) {
                var r = l[p - 1];
                r.apply && r.apply.call(n, m[p]);
            }
            return e(n.year, n.month, n.date) && (angular.isDate(i) && !isNaN(i.getTime()) ? (o = new Date(i), 
            o.setFullYear(n.year, n.month, n.date, n.hours, n.minutes, n.seconds, n.milliseconds || 0)) : o = new Date(n.year, n.month, n.date, n.hours, n.minutes, n.seconds, n.milliseconds || 0)), 
            o;
        }
    };
} ]), angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning", !1).service("dateParser", [ "$log", "$dateParserSuppressWarning", "uibDateParser", function(a, b, c) {
    b || a.warn("dateParser is now deprecated. Use uibDateParser instead."), angular.extend(this, c);
} ]), angular.module("ui.bootstrap.position", []).factory("$uibPosition", [ "$document", "$window", function(a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c];
    }
    function d(a) {
        return "static" === (c(a, "position") || "static");
    }
    var e = function(b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e); ) e = e.offsetParent;
        return e || c;
    };
    return {
        position: function(b) {
            var c = this.offset(b), d = {
                top: 0,
                left: 0
            }, f = e(b[0]);
            f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, 
            d.left += f.clientLeft - f.scrollLeft);
            var g = b[0].getBoundingClientRect();
            return {
                width: g.width || b.prop("offsetWidth"),
                height: g.height || b.prop("offsetHeight"),
                top: c.top - d.top,
                left: c.left - d.left
            };
        },
        offset: function(c) {
            var d = c[0].getBoundingClientRect();
            return {
                width: d.width || c.prop("offsetWidth"),
                height: d.height || c.prop("offsetHeight"),
                top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
            };
        },
        positionElements: function(a, b, c, d) {
            var e, f, g, h, i = c.split("-"), j = i[0], k = i[1] || "center";
            e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
            var l = {
                center: function() {
                    return e.left + e.width / 2 - f / 2;
                },
                left: function() {
                    return e.left;
                },
                right: function() {
                    return e.left + e.width;
                }
            }, m = {
                center: function() {
                    return e.top + e.height / 2 - g / 2;
                },
                top: function() {
                    return e.top;
                },
                bottom: function() {
                    return e.top + e.height;
                }
            };
            switch (j) {
              case "right":
                h = {
                    top: m[k](),
                    left: l[j]()
                };
                break;

              case "left":
                h = {
                    top: m[k](),
                    left: e.left - f
                };
                break;

              case "bottom":
                h = {
                    top: m[j](),
                    left: l[k]()
                };
                break;

              default:
                h = {
                    top: e.top - g,
                    left: l[k]()
                };
            }
            return h;
        }
    };
} ]), angular.module("ui.bootstrap.position").value("$positionSuppressWarning", !1).service("$position", [ "$log", "$positionSuppressWarning", "$uibPosition", function(a, b, c) {
    b || a.warn("$position is now deprecated. Use $uibPosition instead."), angular.extend(this, c);
} ]), angular.module("ui.bootstrap.datepicker", [ "ui.bootstrap.dateparser", "ui.bootstrap.position" ]).value("$datepickerSuppressError", !1).constant("uibDatepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null,
    shortcutPropagation: !1
}).controller("UibDatepickerController", [ "$scope", "$attrs", "$parse", "$interpolate", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerSuppressError", function(a, b, c, d, e, f, g, h) {
    var i = this, j = {
        $setViewValue: angular.noop
    };
    this.modes = [ "day", "month", "year" ], angular.forEach([ "formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "showWeeks", "startingDay", "yearRange", "shortcutPropagation" ], function(c, e) {
        i[c] = angular.isDefined(b[c]) ? 6 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : g[c];
    }), angular.forEach([ "minDate", "maxDate" ], function(d) {
        b[d] ? a.$parent.$watch(c(b[d]), function(a) {
            i[d] = a ? new Date(a) : null, i.refreshView();
        }) : i[d] = g[d] ? new Date(g[d]) : null;
    }), angular.forEach([ "minMode", "maxMode" ], function(d) {
        b[d] ? a.$parent.$watch(c(b[d]), function(c) {
            i[d] = angular.isDefined(c) ? c : b[d], a[d] = i[d], ("minMode" == d && i.modes.indexOf(a.datepickerMode) < i.modes.indexOf(i[d]) || "maxMode" == d && i.modes.indexOf(a.datepickerMode) > i.modes.indexOf(i[d])) && (a.datepickerMode = i[d]);
        }) : (i[d] = g[d] || null, a[d] = i[d]);
    }), a.datepickerMode = a.datepickerMode || g.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), 
    angular.isDefined(b.initDate) ? (this.activeDate = a.$parent.$eval(b.initDate) || new Date(), 
    a.$parent.$watch(b.initDate, function(a) {
        a && (j.$isEmpty(j.$modelValue) || j.$invalid) && (i.activeDate = a, i.refreshView());
    })) : this.activeDate = new Date(), a.isActive = function(b) {
        return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1;
    }, this.init = function(a) {
        j = a, j.$render = function() {
            i.render();
        };
    }, this.render = function() {
        if (j.$viewValue) {
            var a = new Date(j.$viewValue), b = !isNaN(a);
            b ? this.activeDate = a : h || e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
        }
        this.refreshView();
    }, this.refreshView = function() {
        if (this.element) {
            this._refreshView();
            var a = j.$viewValue ? new Date(j.$viewValue) : null;
            j.$setValidity("dateDisabled", !a || this.element && !this.isDisabled(a));
        }
    }, this.createDateObject = function(a, b) {
        var c = j.$viewValue ? new Date(j.$viewValue) : null;
        return {
            date: a,
            label: f(a, b),
            selected: c && 0 === this.compare(a, c),
            disabled: this.isDisabled(a),
            current: 0 === this.compare(a, new Date()),
            customClass: this.customClass(a)
        };
    }, this.isDisabled = function(c) {
        return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
            date: c,
            mode: a.datepickerMode
        });
    }, this.customClass = function(b) {
        return a.customClass({
            date: b,
            mode: a.datepickerMode
        });
    }, this.split = function(a, b) {
        for (var c = []; a.length > 0; ) c.push(a.splice(0, b));
        return c;
    }, a.select = function(b) {
        if (a.datepickerMode === i.minMode) {
            var c = j.$viewValue ? new Date(j.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render();
        } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1];
    }, a.move = function(a) {
        var b = i.activeDate.getFullYear() + a * (i.step.years || 0), c = i.activeDate.getMonth() + a * (i.step.months || 0);
        i.activeDate.setFullYear(b, c, 1), i.refreshView();
    }, a.toggleMode = function(b) {
        b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b]);
    }, a.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var k = function() {
        i.element[0].focus();
    };
    a.$on("uib:datepicker.focus", k), a.keydown = function(b) {
        var c = a.keys[b.which];
        if (c && !b.shiftKey && !b.altKey) if (b.preventDefault(), i.shortcutPropagation || b.stopPropagation(), 
        "enter" === c || "space" === c) {
            if (i.isDisabled(i.activeDate)) return;
            a.select(i.activeDate);
        } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : a.toggleMode("up" === c ? 1 : -1);
    };
} ]).controller("UibDaypickerController", [ "$scope", "$element", "dateFilter", function(a, b, c) {
    function d(a, b) {
        return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? f[b] : 29;
    }
    function e(a) {
        var b = new Date(a);
        b.setDate(b.getDate() + 4 - (b.getDay() || 7));
        var c = b.getTime();
        return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1;
    }
    var f = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    this.step = {
        months: 1
    }, this.element = b, this.init = function(b) {
        angular.extend(b, this), a.showWeeks = b.showWeeks, b.refreshView();
    }, this.getDates = function(a, b) {
        for (var c, d = new Array(b), e = new Date(a), f = 0; b > f; ) c = new Date(e), 
        d[f++] = c, e.setDate(e.getDate() + 1);
        return d;
    }, this._refreshView = function() {
        var b = this.activeDate.getFullYear(), d = this.activeDate.getMonth(), f = new Date(this.activeDate);
        f.setFullYear(b, d, 1);
        var g = this.startingDay - f.getDay(), h = g > 0 ? 7 - g : -g, i = new Date(f);
        h > 0 && i.setDate(-h + 1);
        for (var j = this.getDates(i, 42), k = 0; 42 > k; k++) j[k] = angular.extend(this.createDateObject(j[k], this.formatDay), {
            secondary: j[k].getMonth() !== d,
            uid: a.uniqueId + "-" + k
        });
        a.labels = new Array(7);
        for (var l = 0; 7 > l; l++) a.labels[l] = {
            abbr: c(j[l].date, this.formatDayHeader),
            full: c(j[l].date, "EEEE")
        };
        if (a.title = c(this.activeDate, this.formatDayTitle), a.rows = this.split(j, 7), 
        a.showWeeks) {
            a.weekNumbers = [];
            for (var m = (11 - this.startingDay) % 7, n = a.rows.length, o = 0; n > o; o++) a.weekNumbers.push(e(a.rows[o][m].date));
        }
    }, this.compare = function(a, b) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate());
    }, this.handleKeyDown = function(a, b) {
        var c = this.activeDate.getDate();
        if ("left" === a) c -= 1; else if ("up" === a) c -= 7; else if ("right" === a) c += 1; else if ("down" === a) c += 7; else if ("pageup" === a || "pagedown" === a) {
            var e = this.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
            this.activeDate.setMonth(e, 1), c = Math.min(d(this.activeDate.getFullYear(), this.activeDate.getMonth()), c);
        } else "home" === a ? c = 1 : "end" === a && (c = d(this.activeDate.getFullYear(), this.activeDate.getMonth()));
        this.activeDate.setDate(c);
    };
} ]).controller("UibMonthpickerController", [ "$scope", "$element", "dateFilter", function(a, b, c) {
    this.step = {
        years: 1
    }, this.element = b, this.init = function(a) {
        angular.extend(a, this), a.refreshView();
    }, this._refreshView = function() {
        for (var b, d = new Array(12), e = this.activeDate.getFullYear(), f = 0; 12 > f; f++) b = new Date(this.activeDate), 
        b.setFullYear(e, f, 1), d[f] = angular.extend(this.createDateObject(b, this.formatMonth), {
            uid: a.uniqueId + "-" + f
        });
        a.title = c(this.activeDate, this.formatMonthTitle), a.rows = this.split(d, 3);
    }, this.compare = function(a, b) {
        return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth());
    }, this.handleKeyDown = function(a, b) {
        var c = this.activeDate.getMonth();
        if ("left" === a) c -= 1; else if ("up" === a) c -= 3; else if ("right" === a) c += 1; else if ("down" === a) c += 3; else if ("pageup" === a || "pagedown" === a) {
            var d = this.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
            this.activeDate.setFullYear(d);
        } else "home" === a ? c = 0 : "end" === a && (c = 11);
        this.activeDate.setMonth(c);
    };
} ]).controller("UibYearpickerController", [ "$scope", "$element", "dateFilter", function(a, b, c) {
    function d(a) {
        return parseInt((a - 1) / e, 10) * e + 1;
    }
    var e;
    this.element = b, this.yearpickerInit = function() {
        e = this.yearRange, this.step = {
            years: e
        };
    }, this._refreshView = function() {
        for (var b, c = new Array(e), f = 0, g = d(this.activeDate.getFullYear()); e > f; f++) b = new Date(this.activeDate), 
        b.setFullYear(g + f, 0, 1), c[f] = angular.extend(this.createDateObject(b, this.formatYear), {
            uid: a.uniqueId + "-" + f
        });
        a.title = [ c[0].label, c[e - 1].label ].join(" - "), a.rows = this.split(c, 5);
    }, this.compare = function(a, b) {
        return a.getFullYear() - b.getFullYear();
    }, this.handleKeyDown = function(a, b) {
        var c = this.activeDate.getFullYear();
        "left" === a ? c -= 1 : "up" === a ? c -= 5 : "right" === a ? c += 1 : "down" === a ? c += 5 : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * this.step.years : "home" === a ? c = d(this.activeDate.getFullYear()) : "end" === a && (c = d(this.activeDate.getFullYear()) + e - 1), 
        this.activeDate.setFullYear(c);
    };
} ]).directive("uibDatepicker", function() {
    return {
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/datepicker/datepicker.html";
        },
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&",
            customClass: "&",
            shortcutPropagation: "&?"
        },
        require: [ "uibDatepicker", "^ngModel" ],
        controller: "UibDatepickerController",
        controllerAs: "datepicker",
        link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            e.init(f);
        }
    };
}).directive("uibDaypicker", function() {
    return {
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/datepicker/day.html";
        },
        require: [ "^?uibDatepicker", "uibDaypicker", "^?datepicker" ],
        controller: "UibDaypickerController",
        link: function(a, b, c, d) {
            var e = d[0] || d[2], f = d[1];
            f.init(e);
        }
    };
}).directive("uibMonthpicker", function() {
    return {
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/datepicker/month.html";
        },
        require: [ "^?uibDatepicker", "uibMonthpicker", "^?datepicker" ],
        controller: "UibMonthpickerController",
        link: function(a, b, c, d) {
            var e = d[0] || d[2], f = d[1];
            f.init(e);
        }
    };
}).directive("uibYearpicker", function() {
    return {
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/datepicker/year.html";
        },
        require: [ "^?uibDatepicker", "uibYearpicker", "^?datepicker" ],
        controller: "UibYearpickerController",
        link: function(a, b, c, d) {
            var e = d[0] || d[2];
            angular.extend(e, d[1]), e.yearpickerInit(), e.refreshView();
        }
    };
}).constant("uibDatepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    datepickerPopupTemplateUrl: "template/datepicker/popup.html",
    datepickerTemplateUrl: "template/datepicker/datepicker.html",
    html5Types: {
        date: "yyyy-MM-dd",
        "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss",
        month: "yyyy-MM"
    },
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0,
    onOpenFocus: !0
}).controller("UibDatepickerPopupController", [ "$scope", "$element", "$attrs", "$compile", "$parse", "$document", "$rootScope", "$uibPosition", "dateFilter", "uibDateParser", "uibDatepickerPopupConfig", "$timeout", function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase();
        });
    }
    function n(b) {
        if (angular.isNumber(b) && (b = new Date(b)), b) {
            if (angular.isDate(b) && !isNaN(b)) return b;
            if (angular.isString(b)) {
                var c = j.parse(b, r, a.date);
                return isNaN(c) ? void 0 : c;
            }
            return void 0;
        }
        return null;
    }
    function o(a, b) {
        var d = a || b;
        if (!c.ngRequired && !d) return !0;
        if (angular.isNumber(d) && (d = new Date(d)), d) {
            if (angular.isDate(d) && !isNaN(d)) return !0;
            if (angular.isString(d)) {
                var e = j.parse(d, r);
                return !isNaN(e);
            }
            return !1;
        }
        return !0;
    }
    function p(c) {
        var d = A[0], e = b[0].contains(c.target), f = void 0 !== d.contains && d.contains(c.target);
        !a.isOpen || e || f || a.$apply(function() {
            a.isOpen = !1;
        });
    }
    function q(c) {
        27 === c.which && a.isOpen ? (c.preventDefault(), c.stopPropagation(), a.$apply(function() {
            a.isOpen = !1;
        }), b[0].focus()) : 40 !== c.which || a.isOpen || (c.preventDefault(), c.stopPropagation(), 
        a.$apply(function() {
            a.isOpen = !0;
        }));
    }
    var r, s, t, u, v, w, x, y, z, A, B = {}, C = !1;
    a.watchData = {}, this.init = function(h) {
        if (z = h, s = angular.isDefined(c.closeOnDateSelection) ? a.$parent.$eval(c.closeOnDateSelection) : k.closeOnDateSelection, 
        t = angular.isDefined(c.datepickerAppendToBody) ? a.$parent.$eval(c.datepickerAppendToBody) : k.appendToBody, 
        u = angular.isDefined(c.onOpenFocus) ? a.$parent.$eval(c.onOpenFocus) : k.onOpenFocus, 
        v = angular.isDefined(c.datepickerPopupTemplateUrl) ? c.datepickerPopupTemplateUrl : k.datepickerPopupTemplateUrl, 
        w = angular.isDefined(c.datepickerTemplateUrl) ? c.datepickerTemplateUrl : k.datepickerTemplateUrl, 
        a.showButtonBar = angular.isDefined(c.showButtonBar) ? a.$parent.$eval(c.showButtonBar) : k.showButtonBar, 
        k.html5Types[c.type] ? (r = k.html5Types[c.type], C = !0) : (r = c.datepickerPopup || c.uibDatepickerPopup || k.datepickerPopup, 
        c.$observe("uibDatepickerPopup", function(a, b) {
            var c = a || k.datepickerPopup;
            if (c !== r && (r = c, z.$modelValue = null, !r)) throw new Error("uibDatepickerPopup must have a date format specified.");
        })), !r) throw new Error("uibDatepickerPopup must have a date format specified.");
        if (C && c.datepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
        if (x = angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"), 
        x.attr({
            "ng-model": "date",
            "ng-change": "dateSelection(date)",
            "template-url": v
        }), y = angular.element(x.children()[0]), y.attr("template-url", w), C && "month" === c.type && (y.attr("datepicker-mode", '"month"'), 
        y.attr("min-mode", "month")), c.datepickerOptions) {
            var l = a.$parent.$eval(c.datepickerOptions);
            l && l.initDate && (a.initDate = l.initDate, y.attr("init-date", "initDate"), delete l.initDate), 
            angular.forEach(l, function(a, b) {
                y.attr(m(b), a);
            });
        }
        angular.forEach([ "minMode", "maxMode", "minDate", "maxDate", "datepickerMode", "initDate", "shortcutPropagation" ], function(b) {
            if (c[b]) {
                var d = e(c[b]);
                if (a.$parent.$watch(d, function(c) {
                    a.watchData[b] = c, ("minDate" === b || "maxDate" === b) && (B[b] = new Date(c));
                }), y.attr(m(b), "watchData." + b), "datepickerMode" === b) {
                    var f = d.assign;
                    a.$watch("watchData." + b, function(b, c) {
                        angular.isFunction(f) && b !== c && f(a.$parent, b);
                    });
                }
            }
        }), c.dateDisabled && y.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), 
        c.showWeeks && y.attr("show-weeks", c.showWeeks), c.customClass && y.attr("custom-class", "customClass({ date: date, mode: mode })"), 
        C ? z.$formatters.push(function(b) {
            return a.date = b, b;
        }) : (z.$$parserName = "date", z.$validators.date = o, z.$parsers.unshift(n), z.$formatters.push(function(b) {
            return a.date = b, z.$isEmpty(b) ? b : i(b, r);
        })), z.$viewChangeListeners.push(function() {
            a.date = j.parse(z.$viewValue, r, a.date);
        }), b.bind("keydown", q), A = d(x)(a), x.remove(), t ? f.find("body").append(A) : b.after(A), 
        a.$on("$destroy", function() {
            a.isOpen === !0 && (g.$$phase || a.$apply(function() {
                a.isOpen = !1;
            })), A.remove(), b.unbind("keydown", q), f.unbind("click", p);
        });
    }, a.getText = function(b) {
        return a[b + "Text"] || k[b + "Text"];
    }, a.isDisabled = function(b) {
        return "today" === b && (b = new Date()), a.watchData.minDate && a.compare(b, B.minDate) < 0 || a.watchData.maxDate && a.compare(b, B.maxDate) > 0;
    }, a.compare = function(a, b) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate());
    }, a.dateSelection = function(c) {
        angular.isDefined(c) && (a.date = c);
        var d = a.date ? i(a.date, r) : null;
        b.val(d), z.$setViewValue(d), s && (a.isOpen = !1, b[0].focus());
    }, a.keydown = function(c) {
        27 === c.which && (a.isOpen = !1, b[0].focus());
    }, a.select = function(b) {
        if ("today" === b) {
            var c = new Date();
            angular.isDate(a.date) ? (b = new Date(a.date), b.setFullYear(c.getFullYear(), c.getMonth(), c.getDate())) : b = new Date(c.setHours(0, 0, 0, 0));
        }
        a.dateSelection(b);
    }, a.close = function() {
        a.isOpen = !1, b[0].focus();
    }, a.$watch("isOpen", function(c) {
        c ? (a.position = t ? h.offset(b) : h.position(b), a.position.top = a.position.top + b.prop("offsetHeight"), 
        l(function() {
            u && a.$broadcast("uib:datepicker.focus"), f.bind("click", p);
        }, 0, !1)) : f.unbind("click", p);
    });
} ]).directive("uibDatepickerPopup", function() {
    return {
        require: [ "ngModel", "uibDatepickerPopup" ],
        controller: "UibDatepickerPopupController",
        scope: {
            isOpen: "=?",
            currentText: "@",
            clearText: "@",
            closeText: "@",
            dateDisabled: "&",
            customClass: "&"
        },
        link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            f.init(e);
        }
    };
}).directive("uibDatepickerPopupWrap", function() {
    return {
        replace: !0,
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/datepicker/popup.html";
        }
    };
}), angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning", !1).controller("DatepickerController", [ "$scope", "$attrs", "$parse", "$interpolate", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerSuppressError", "$datepickerSuppressWarning", function(a, b, c, d, e, f, g, h, i) {
    i || e.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");
    var j = this, k = {
        $setViewValue: angular.noop
    };
    this.modes = [ "day", "month", "year" ], angular.forEach([ "formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "showWeeks", "startingDay", "yearRange", "shortcutPropagation" ], function(c, e) {
        j[c] = angular.isDefined(b[c]) ? 6 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : g[c];
    }), angular.forEach([ "minDate", "maxDate" ], function(d) {
        b[d] ? a.$parent.$watch(c(b[d]), function(a) {
            j[d] = a ? new Date(a) : null, j.refreshView();
        }) : j[d] = g[d] ? new Date(g[d]) : null;
    }), angular.forEach([ "minMode", "maxMode" ], function(d) {
        b[d] ? a.$parent.$watch(c(b[d]), function(c) {
            j[d] = angular.isDefined(c) ? c : b[d], a[d] = j[d], ("minMode" == d && j.modes.indexOf(a.datepickerMode) < j.modes.indexOf(j[d]) || "maxMode" == d && j.modes.indexOf(a.datepickerMode) > j.modes.indexOf(j[d])) && (a.datepickerMode = j[d]);
        }) : (j[d] = g[d] || null, a[d] = j[d]);
    }), a.datepickerMode = a.datepickerMode || g.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), 
    angular.isDefined(b.initDate) ? (this.activeDate = a.$parent.$eval(b.initDate) || new Date(), 
    a.$parent.$watch(b.initDate, function(a) {
        a && (k.$isEmpty(k.$modelValue) || k.$invalid) && (j.activeDate = a, j.refreshView());
    })) : this.activeDate = new Date(), a.isActive = function(b) {
        return 0 === j.compare(b.date, j.activeDate) ? (a.activeDateId = b.uid, !0) : !1;
    }, this.init = function(a) {
        k = a, k.$render = function() {
            j.render();
        };
    }, this.render = function() {
        if (k.$viewValue) {
            var a = new Date(k.$viewValue), b = !isNaN(a);
            b ? this.activeDate = a : h || e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
        }
        this.refreshView();
    }, this.refreshView = function() {
        if (this.element) {
            this._refreshView();
            var a = k.$viewValue ? new Date(k.$viewValue) : null;
            k.$setValidity("dateDisabled", !a || this.element && !this.isDisabled(a));
        }
    }, this.createDateObject = function(a, b) {
        var c = k.$viewValue ? new Date(k.$viewValue) : null;
        return {
            date: a,
            label: f(a, b),
            selected: c && 0 === this.compare(a, c),
            disabled: this.isDisabled(a),
            current: 0 === this.compare(a, new Date()),
            customClass: this.customClass(a)
        };
    }, this.isDisabled = function(c) {
        return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
            date: c,
            mode: a.datepickerMode
        });
    }, this.customClass = function(b) {
        return a.customClass({
            date: b,
            mode: a.datepickerMode
        });
    }, this.split = function(a, b) {
        for (var c = []; a.length > 0; ) c.push(a.splice(0, b));
        return c;
    }, this.fixTimeZone = function(a) {
        var b = a.getHours();
        a.setHours(23 === b ? b + 2 : 0);
    }, a.select = function(b) {
        if (a.datepickerMode === j.minMode) {
            var c = k.$viewValue ? new Date(k.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), k.$setViewValue(c), k.$render();
        } else j.activeDate = b, a.datepickerMode = j.modes[j.modes.indexOf(a.datepickerMode) - 1];
    }, a.move = function(a) {
        var b = j.activeDate.getFullYear() + a * (j.step.years || 0), c = j.activeDate.getMonth() + a * (j.step.months || 0);
        j.activeDate.setFullYear(b, c, 1), j.refreshView();
    }, a.toggleMode = function(b) {
        b = b || 1, a.datepickerMode === j.maxMode && 1 === b || a.datepickerMode === j.minMode && -1 === b || (a.datepickerMode = j.modes[j.modes.indexOf(a.datepickerMode) + b]);
    }, a.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var l = function() {
        j.element[0].focus();
    };
    a.$on("uib:datepicker.focus", l), a.keydown = function(b) {
        var c = a.keys[b.which];
        if (c && !b.shiftKey && !b.altKey) if (b.preventDefault(), j.shortcutPropagation || b.stopPropagation(), 
        "enter" === c || "space" === c) {
            if (j.isDisabled(j.activeDate)) return;
            a.select(j.activeDate);
        } else !b.ctrlKey || "up" !== c && "down" !== c ? (j.handleKeyDown(c, b), j.refreshView()) : a.toggleMode("up" === c ? 1 : -1);
    };
} ]).directive("datepicker", [ "$log", "$datepickerSuppressWarning", function(a, b) {
    return {
        replace: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/datepicker/datepicker.html";
        },
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&",
            customClass: "&",
            shortcutPropagation: "&?"
        },
        require: [ "datepicker", "^ngModel" ],
        controller: "DatepickerController",
        controllerAs: "datepicker",
        link: function(c, d, e, f) {
            b || a.warn("datepicker is now deprecated. Use uib-datepicker instead.");
            var g = f[0], h = f[1];
            g.init(h);
        }
    };
} ]).directive("daypicker", [ "$log", "$datepickerSuppressWarning", function(a, b) {
    return {
        replace: !0,
        templateUrl: "template/datepicker/day.html",
        require: [ "^datepicker", "daypicker" ],
        controller: "UibDaypickerController",
        link: function(c, d, e, f) {
            b || a.warn("daypicker is now deprecated. Use uib-daypicker instead.");
            var g = f[0], h = f[1];
            h.init(g);
        }
    };
} ]).directive("monthpicker", [ "$log", "$datepickerSuppressWarning", function(a, b) {
    return {
        replace: !0,
        templateUrl: "template/datepicker/month.html",
        require: [ "^datepicker", "monthpicker" ],
        controller: "UibMonthpickerController",
        link: function(c, d, e, f) {
            b || a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");
            var g = f[0], h = f[1];
            h.init(g);
        }
    };
} ]).directive("yearpicker", [ "$log", "$datepickerSuppressWarning", function(a, b) {
    return {
        replace: !0,
        templateUrl: "template/datepicker/year.html",
        require: [ "^datepicker", "yearpicker" ],
        controller: "UibYearpickerController",
        link: function(c, d, e, f) {
            b || a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");
            var g = f[0];
            angular.extend(g, f[1]), g.yearpickerInit(), g.refreshView();
        }
    };
} ]).directive("datepickerPopup", [ "$log", "$datepickerSuppressWarning", function(a, b) {
    return {
        require: [ "ngModel", "datepickerPopup" ],
        controller: "UibDatepickerPopupController",
        scope: {
            isOpen: "=?",
            currentText: "@",
            clearText: "@",
            closeText: "@",
            dateDisabled: "&",
            customClass: "&"
        },
        link: function(c, d, e, f) {
            b || a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");
            var g = f[0], h = f[1];
            h.init(g);
        }
    };
} ]).directive("datepickerPopupWrap", [ "$log", "$datepickerSuppressWarning", function(a, b) {
    return {
        replace: !0,
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/datepicker/popup.html";
        },
        link: function() {
            b || a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.");
        }
    };
} ]), angular.module("ui.bootstrap.dropdown", [ "ui.bootstrap.position" ]).constant("uibDropdownConfig", {
    openClass: "open"
}).service("uibDropdownService", [ "$document", "$rootScope", function(a, b) {
    var c = null;
    this.open = function(b) {
        c || (a.bind("click", d), a.bind("keydown", e)), c && c !== b && (c.isOpen = !1), 
        c = b;
    }, this.close = function(b) {
        c === b && (c = null, a.unbind("click", d), a.unbind("keydown", e));
    };
    var d = function(a) {
        if (c && (!a || "disabled" !== c.getAutoClose())) {
            var d = c.getToggleElement();
            if (!(a && d && d[0].contains(a.target))) {
                var e = c.getDropdownElement();
                a && "outsideClick" === c.getAutoClose() && e && e[0].contains(a.target) || (c.isOpen = !1, 
                b.$$phase || c.$apply());
            }
        }
    }, e = function(a) {
        27 === a.which ? (c.focusToggleElement(), d()) : c.isKeynavEnabled() && /(38|40)/.test(a.which) && c.isOpen && (a.preventDefault(), 
        a.stopPropagation(), c.focusDropdownEntry(a.which));
    };
} ]).controller("UibDropdownController", [ "$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function(a, b, c, d, e, f, g, h, i, j, k) {
    var l, m, n = this, o = a.$new(), p = e.openClass, q = angular.noop, r = c.onToggle ? d(c.onToggle) : angular.noop, s = !1, t = !1;
    b.addClass("dropdown"), this.init = function() {
        c.isOpen && (m = d(c.isOpen), q = m.assign, a.$watch(m, function(a) {
            o.isOpen = !!a;
        })), s = angular.isDefined(c.dropdownAppendToBody), t = angular.isDefined(c.uibKeyboardNav), 
        s && n.dropdownMenu && (i.find("body").append(n.dropdownMenu), b.on("$destroy", function() {
            n.dropdownMenu.remove();
        }));
    }, this.toggle = function(a) {
        return o.isOpen = arguments.length ? !!a : !o.isOpen;
    }, this.isOpen = function() {
        return o.isOpen;
    }, o.getToggleElement = function() {
        return n.toggleElement;
    }, o.getAutoClose = function() {
        return c.autoClose || "always";
    }, o.getElement = function() {
        return b;
    }, o.isKeynavEnabled = function() {
        return t;
    }, o.focusDropdownEntry = function(a) {
        var c = n.dropdownMenu ? angular.element(n.dropdownMenu).find("a") : angular.element(b).find("ul").eq(0).find("a");
        switch (a) {
          case 40:
            angular.isNumber(n.selectedOption) ? n.selectedOption = n.selectedOption === c.length - 1 ? n.selectedOption : n.selectedOption + 1 : n.selectedOption = 0;
            break;

          case 38:
            angular.isNumber(n.selectedOption) ? n.selectedOption = 0 === n.selectedOption ? 0 : n.selectedOption - 1 : n.selectedOption = c.length - 1;
        }
        c[n.selectedOption].focus();
    }, o.getDropdownElement = function() {
        return n.dropdownMenu;
    }, o.focusToggleElement = function() {
        n.toggleElement && n.toggleElement[0].focus();
    }, o.$watch("isOpen", function(c, d) {
        if (s && n.dropdownMenu) {
            var e = h.positionElements(b, n.dropdownMenu, "bottom-left", !0), i = {
                top: e.top + "px",
                display: c ? "block" : "none"
            }, m = n.dropdownMenu.hasClass("dropdown-menu-right");
            m ? (i.left = "auto", i.right = window.innerWidth - (e.left + b.prop("offsetWidth")) + "px") : (i.left = e.left + "px", 
            i.right = "auto"), n.dropdownMenu.css(i);
        }
        if (g[c ? "addClass" : "removeClass"](b, p).then(function() {
            angular.isDefined(c) && c !== d && r(a, {
                open: !!c
            });
        }), c) n.dropdownMenuTemplateUrl && k(n.dropdownMenuTemplateUrl).then(function(a) {
            l = o.$new(), j(a.trim())(l, function(a) {
                var b = a;
                n.dropdownMenu.replaceWith(b), n.dropdownMenu = b;
            });
        }), o.focusToggleElement(), f.open(o); else {
            if (n.dropdownMenuTemplateUrl) {
                l && l.$destroy();
                var t = angular.element('<ul class="dropdown-menu"></ul>');
                n.dropdownMenu.replaceWith(t), n.dropdownMenu = t;
            }
            f.close(o), n.selectedOption = null;
        }
        angular.isFunction(q) && q(a, c);
    }), a.$on("$locationChangeSuccess", function() {
        "disabled" !== o.getAutoClose() && (o.isOpen = !1);
    });
    var u = a.$on("$destroy", function() {
        o.$destroy();
    });
    o.$on("$destroy", u);
} ]).directive("uibDropdown", function() {
    return {
        controller: "UibDropdownController",
        link: function(a, b, c, d) {
            d.init();
        }
    };
}).directive("uibDropdownMenu", function() {
    return {
        restrict: "AC",
        require: "?^uibDropdown",
        link: function(a, b, c, d) {
            if (d && !angular.isDefined(c.dropdownNested)) {
                b.addClass("dropdown-menu");
                var e = c.templateUrl;
                e && (d.dropdownMenuTemplateUrl = e), d.dropdownMenu || (d.dropdownMenu = b);
            }
        }
    };
}).directive("uibKeyboardNav", function() {
    return {
        restrict: "A",
        require: "?^uibDropdown",
        link: function(a, b, c, d) {
            b.bind("keydown", function(a) {
                if (-1 !== [ 38, 40 ].indexOf(a.which)) {
                    a.preventDefault(), a.stopPropagation();
                    var b = d.dropdownMenu.find("a");
                    switch (a.which) {
                      case 40:
                        angular.isNumber(d.selectedOption) ? d.selectedOption = d.selectedOption === b.length - 1 ? d.selectedOption : d.selectedOption + 1 : d.selectedOption = 0;
                        break;

                      case 38:
                        angular.isNumber(d.selectedOption) ? d.selectedOption = 0 === d.selectedOption ? 0 : d.selectedOption - 1 : d.selectedOption = b.length - 1;
                    }
                    b[d.selectedOption].focus();
                }
            });
        }
    };
}).directive("uibDropdownToggle", function() {
    return {
        require: "?^uibDropdown",
        link: function(a, b, c, d) {
            if (d) {
                b.addClass("dropdown-toggle"), d.toggleElement = b;
                var e = function(e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                        d.toggle();
                    });
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function(a) {
                    b.attr("aria-expanded", !!a);
                }), a.$on("$destroy", function() {
                    b.unbind("click", e);
                });
            }
        }
    };
}), angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning", !1).service("dropdownService", [ "$log", "$dropdownSuppressWarning", "uibDropdownService", function(a, b, c) {
    b || a.warn("dropdownService is now deprecated. Use uibDropdownService instead."), 
    angular.extend(this, c);
} ]).controller("DropdownController", [ "$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", "$log", "$dropdownSuppressWarning", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    m || l.warn("DropdownController is now deprecated. Use UibDropdownController instead.");
    var n, o, p = this, q = a.$new(), r = e.openClass, s = angular.noop, t = c.onToggle ? d(c.onToggle) : angular.noop, u = !1, v = !1;
    b.addClass("dropdown"), this.init = function() {
        c.isOpen && (o = d(c.isOpen), s = o.assign, a.$watch(o, function(a) {
            q.isOpen = !!a;
        })), u = angular.isDefined(c.dropdownAppendToBody), v = angular.isDefined(c.uibKeyboardNav), 
        u && p.dropdownMenu && (i.find("body").append(p.dropdownMenu), b.on("$destroy", function() {
            p.dropdownMenu.remove();
        }));
    }, this.toggle = function(a) {
        return q.isOpen = arguments.length ? !!a : !q.isOpen;
    }, this.isOpen = function() {
        return q.isOpen;
    }, q.getToggleElement = function() {
        return p.toggleElement;
    }, q.getAutoClose = function() {
        return c.autoClose || "always";
    }, q.getElement = function() {
        return b;
    }, q.isKeynavEnabled = function() {
        return v;
    }, q.focusDropdownEntry = function(a) {
        var c = p.dropdownMenu ? angular.element(p.dropdownMenu).find("a") : angular.element(b).find("ul").eq(0).find("a");
        switch (a) {
          case 40:
            angular.isNumber(p.selectedOption) ? p.selectedOption = p.selectedOption === c.length - 1 ? p.selectedOption : p.selectedOption + 1 : p.selectedOption = 0;
            break;

          case 38:
            angular.isNumber(p.selectedOption) ? p.selectedOption = 0 === p.selectedOption ? 0 : p.selectedOption - 1 : p.selectedOption = c.length - 1;
        }
        c[p.selectedOption].focus();
    }, q.getDropdownElement = function() {
        return p.dropdownMenu;
    }, q.focusToggleElement = function() {
        p.toggleElement && p.toggleElement[0].focus();
    }, q.$watch("isOpen", function(c, d) {
        if (u && p.dropdownMenu) {
            var e = h.positionElements(b, p.dropdownMenu, "bottom-left", !0), i = {
                top: e.top + "px",
                display: c ? "block" : "none"
            }, l = p.dropdownMenu.hasClass("dropdown-menu-right");
            l ? (i.left = "auto", i.right = window.innerWidth - (e.left + b.prop("offsetWidth")) + "px") : (i.left = e.left + "px", 
            i.right = "auto"), p.dropdownMenu.css(i);
        }
        if (g[c ? "addClass" : "removeClass"](b, r).then(function() {
            angular.isDefined(c) && c !== d && t(a, {
                open: !!c
            });
        }), c) p.dropdownMenuTemplateUrl && k(p.dropdownMenuTemplateUrl).then(function(a) {
            n = q.$new(), j(a.trim())(n, function(a) {
                var b = a;
                p.dropdownMenu.replaceWith(b), p.dropdownMenu = b;
            });
        }), q.focusToggleElement(), f.open(q); else {
            if (p.dropdownMenuTemplateUrl) {
                n && n.$destroy();
                var m = angular.element('<ul class="dropdown-menu"></ul>');
                p.dropdownMenu.replaceWith(m), p.dropdownMenu = m;
            }
            f.close(q), p.selectedOption = null;
        }
        angular.isFunction(s) && s(a, c);
    }), a.$on("$locationChangeSuccess", function() {
        "disabled" !== q.getAutoClose() && (q.isOpen = !1);
    });
    var w = a.$on("$destroy", function() {
        q.$destroy();
    });
    q.$on("$destroy", w);
} ]).directive("dropdown", [ "$log", "$dropdownSuppressWarning", function(a, b) {
    return {
        controller: "DropdownController",
        link: function(c, d, e, f) {
            b || a.warn("dropdown is now deprecated. Use uib-dropdown instead."), f.init();
        }
    };
} ]).directive("dropdownMenu", [ "$log", "$dropdownSuppressWarning", function(a, b) {
    return {
        restrict: "AC",
        require: "?^dropdown",
        link: function(c, d, e, f) {
            if (f && !angular.isDefined(e.dropdownNested)) {
                b || a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."), 
                d.addClass("dropdown-menu");
                var g = e.templateUrl;
                g && (f.dropdownMenuTemplateUrl = g), f.dropdownMenu || (f.dropdownMenu = d);
            }
        }
    };
} ]).directive("keyboardNav", [ "$log", "$dropdownSuppressWarning", function(a, b) {
    return {
        restrict: "A",
        require: "?^dropdown",
        link: function(c, d, e, f) {
            b || a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."), d.bind("keydown", function(a) {
                if (-1 !== [ 38, 40 ].indexOf(a.which)) {
                    a.preventDefault(), a.stopPropagation();
                    var b = f.dropdownMenu.find("a");
                    switch (a.which) {
                      case 40:
                        angular.isNumber(f.selectedOption) ? f.selectedOption = f.selectedOption === b.length - 1 ? f.selectedOption : f.selectedOption + 1 : f.selectedOption = 0;
                        break;

                      case 38:
                        angular.isNumber(f.selectedOption) ? f.selectedOption = 0 === f.selectedOption ? 0 : f.selectedOption - 1 : f.selectedOption = b.length - 1;
                    }
                    b[f.selectedOption].focus();
                }
            });
        }
    };
} ]).directive("dropdownToggle", [ "$log", "$dropdownSuppressWarning", function(a, b) {
    return {
        require: "?^dropdown",
        link: function(c, d, e, f) {
            if (b || a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."), 
            f) {
                d.addClass("dropdown-toggle"), f.toggleElement = d;
                var g = function(a) {
                    a.preventDefault(), d.hasClass("disabled") || e.disabled || c.$apply(function() {
                        f.toggle();
                    });
                };
                d.bind("click", g), d.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), c.$watch(f.isOpen, function(a) {
                    d.attr("aria-expanded", !!a);
                }), c.$on("$destroy", function() {
                    d.unbind("click", g);
                });
            }
        }
    };
} ]), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    });
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++) if (b == a[c].key) return a[c];
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b;
                },
                top: function() {
                    return a[a.length - 1];
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++) if (b == a[d].key) {
                        c = d;
                        break;
                    }
                    return a.splice(c, 1)[0];
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0];
                },
                length: function() {
                    return a.length;
                }
            };
        }
    };
}), angular.module("ui.bootstrap.modal", [ "ui.bootstrap.stackedMap" ]).factory("$$multiMap", function() {
    return {
        createNew: function() {
            var a = {};
            return {
                entries: function() {
                    return Object.keys(a).map(function(b) {
                        return {
                            key: b,
                            value: a[b]
                        };
                    });
                },
                get: function(b) {
                    return a[b];
                },
                hasKey: function(b) {
                    return !!a[b];
                },
                keys: function() {
                    return Object.keys(a);
                },
                put: function(b, c) {
                    a[b] || (a[b] = []), a[b].push(c);
                },
                remove: function(b, c) {
                    var d = a[b];
                    if (d) {
                        var e = d.indexOf(c);
                        -1 !== e && d.splice(e, 1), d.length || delete a[b];
                    }
                }
            };
        }
    };
}).directive("uibModalBackdrop", [ "$animate", "$injector", "$uibModalStack", function(a, b, c) {
    function d(b, d, f) {
        d.addClass("modal-backdrop"), f.modalInClass && (e ? e(d, {
            addClass: f.modalInClass
        }).start() : a.addClass(d, f.modalInClass), b.$on(c.NOW_CLOSING_EVENT, function(b, c) {
            var g = c();
            e ? e(d, {
                removeClass: f.modalInClass
            }).start().then(g) : a.removeClass(d, f.modalInClass).then(g);
        }));
    }
    var e = null;
    return b.has("$animateCss") && (e = b.get("$animateCss")), {
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        compile: function(a, b) {
            return a.addClass(b.backdropClass), d;
        }
    };
} ]).directive("uibModalWindow", [ "$uibModalStack", "$q", "$animate", "$injector", function(a, b, c, d) {
    var e = null;
    return d.has("$animateCss") && (e = d.get("$animateCss")), {
        scope: {
            index: "@"
        },
        replace: !0,
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/modal/window.html";
        },
        link: function(d, f, g) {
            f.addClass(g.windowClass || ""), f.addClass(g.windowTopClass || ""), d.size = g.size, 
            d.close = function(b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" !== c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), 
                b.stopPropagation(), a.dismiss(c.key, "backdrop click"));
            }, f.on("click", d.close), d.$isRendered = !0;
            var h = b.defer();
            g.$observe("modalRender", function(a) {
                "true" == a && h.resolve();
            }), h.promise.then(function() {
                var h = null;
                g.modalInClass && (h = e ? e(f, {
                    addClass: g.modalInClass
                }).start() : c.addClass(f, g.modalInClass), d.$on(a.NOW_CLOSING_EVENT, function(a, b) {
                    var d = b();
                    e ? e(f, {
                        removeClass: g.modalInClass
                    }).start().then(d) : c.removeClass(f, g.modalInClass).then(d);
                })), b.when(h).then(function() {
                    var a = f[0].querySelector("[autofocus]");
                    a ? a.focus() : f[0].focus();
                });
                var i = a.getTop();
                i && a.modalRendered(i.key);
            });
        }
    };
} ]).directive("uibModalAnimationClass", function() {
    return {
        compile: function(a, b) {
            b.modalAnimation && a.addClass(b.uibModalAnimationClass);
        }
    };
}).directive("uibModalTransclude", function() {
    return {
        link: function(a, b, c, d, e) {
            e(a.$parent, function(a) {
                b.empty(), b.append(a);
            });
        }
    };
}).factory("$uibModalStack", [ "$animate", "$timeout", "$document", "$compile", "$rootScope", "$q", "$injector", "$$multiMap", "$$stackedMap", function(a, b, c, d, e, f, g, h, i) {
    function j() {
        for (var a = -1, b = u.keys(), c = 0; c < b.length; c++) u.get(b[c]).value.backdrop && (a = c);
        return a;
    }
    function k(a, b) {
        var d = c.find("body").eq(0), e = u.get(a).value;
        u.remove(a), n(e.modalDomEl, e.modalScope, function() {
            var b = e.openedClass || t;
            v.remove(b, a), d.toggleClass(b, v.hasKey(b)), l(!0);
        }), m(), b && b.focus ? b.focus() : d.focus();
    }
    function l(a) {
        var b;
        u.length() > 0 && (b = u.top().value, b.modalDomEl.toggleClass(b.windowTopClass || "", a));
    }
    function m() {
        if (q && -1 == j()) {
            var a = r;
            n(q, r, function() {
                a = null;
            }), q = void 0, r = void 0;
        }
    }
    function n(b, c, d) {
        function e() {
            e.done || (e.done = !0, p ? p(b, {
                event: "leave"
            }).start().then(function() {
                b.remove();
            }) : a.leave(b), c.$destroy(), d && d());
        }
        var g, h = null, i = function() {
            return g || (g = f.defer(), h = g.promise), function() {
                g.resolve();
            };
        };
        return c.$broadcast(w.NOW_CLOSING_EVENT, i), f.when(h).then(e);
    }
    function o(a, b, c) {
        return !a.value.modalScope.$broadcast("modal.closing", b, c).defaultPrevented;
    }
    var p = null;
    g.has("$animateCss") && (p = g.get("$animateCss"));
    var q, r, s, t = "modal-open", u = i.createNew(), v = h.createNew(), w = {
        NOW_CLOSING_EVENT: "modal.stack.now-closing"
    }, x = 0, y = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";
    return e.$watch(j, function(a) {
        r && (r.index = a);
    }), c.bind("keydown", function(a) {
        if (a.isDefaultPrevented()) return a;
        var b = u.top();
        if (b && b.value.keyboard) switch (a.which) {
          case 27:
            a.preventDefault(), e.$apply(function() {
                w.dismiss(b.key, "escape key press");
            });
            break;

          case 9:
            w.loadFocusElementList(b);
            var c = !1;
            a.shiftKey ? w.isFocusInFirstItem(a) && (c = w.focusLastFocusableElement()) : w.isFocusInLastItem(a) && (c = w.focusFirstFocusableElement()), 
            c && (a.preventDefault(), a.stopPropagation());
        }
    }), w.open = function(a, b) {
        var f = c[0].activeElement, g = b.openedClass || t;
        l(!1), u.add(a, {
            deferred: b.deferred,
            renderDeferred: b.renderDeferred,
            modalScope: b.scope,
            backdrop: b.backdrop,
            keyboard: b.keyboard,
            openedClass: b.openedClass,
            windowTopClass: b.windowTopClass
        }), v.put(g, a);
        var h = c.find("body").eq(0), i = j();
        if (i >= 0 && !q) {
            r = e.$new(!0), r.index = i;
            var k = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
            k.attr("backdrop-class", b.backdropClass), b.animation && k.attr("modal-animation", "true"), 
            q = d(k)(r), h.append(q);
        }
        var m = angular.element('<div uib-modal-window="modal-window"></div>');
        m.attr({
            "template-url": b.windowTemplateUrl,
            "window-class": b.windowClass,
            "window-top-class": b.windowTopClass,
            size: b.size,
            index: u.length() - 1,
            animate: "animate"
        }).html(b.content), b.animation && m.attr("modal-animation", "true");
        var n = d(m)(b.scope);
        u.top().value.modalDomEl = n, u.top().value.modalOpener = f, h.append(n), h.addClass(g), 
        w.clearFocusListCache();
    }, w.close = function(a, b) {
        var c = u.get(a);
        return c && o(c, b, !0) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.resolve(b), 
        k(a, c.value.modalOpener), !0) : !c;
    }, w.dismiss = function(a, b) {
        var c = u.get(a);
        return c && o(c, b, !1) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.reject(b), 
        k(a, c.value.modalOpener), !0) : !c;
    }, w.dismissAll = function(a) {
        for (var b = this.getTop(); b && this.dismiss(b.key, a); ) b = this.getTop();
    }, w.getTop = function() {
        return u.top();
    }, w.modalRendered = function(a) {
        var b = u.get(a);
        b && b.value.renderDeferred.resolve();
    }, w.focusFirstFocusableElement = function() {
        return s.length > 0 ? (s[0].focus(), !0) : !1;
    }, w.focusLastFocusableElement = function() {
        return s.length > 0 ? (s[s.length - 1].focus(), !0) : !1;
    }, w.isFocusInFirstItem = function(a) {
        return s.length > 0 ? (a.target || a.srcElement) == s[0] : !1;
    }, w.isFocusInLastItem = function(a) {
        return s.length > 0 ? (a.target || a.srcElement) == s[s.length - 1] : !1;
    }, w.clearFocusListCache = function() {
        s = [], x = 0;
    }, w.loadFocusElementList = function(a) {
        if ((void 0 === s || !s.length) && a) {
            var b = a.value.modalDomEl;
            b && b.length && (s = b[0].querySelectorAll(y));
        }
    }, w;
} ]).provider("$uibModal", function() {
    var a = {
        options: {
            animation: !0,
            backdrop: !0,
            keyboard: !0
        },
        $get: [ "$injector", "$rootScope", "$q", "$templateRequest", "$controller", "$uibModalStack", "$modalSuppressWarning", "$log", function(b, c, d, e, f, g, h, i) {
            function j(a) {
                return a.template ? d.when(a.template) : e(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl);
            }
            function k(a) {
                var c = [];
                return angular.forEach(a, function(a) {
                    angular.isFunction(a) || angular.isArray(a) ? c.push(d.when(b.invoke(a))) : angular.isString(a) ? c.push(d.when(b.get(a))) : c.push(d.when(a));
                }), c;
            }
            var l = {}, m = null;
            return l.getPromiseChain = function() {
                return m;
            }, l.open = function(b) {
                function e() {
                    return r;
                }
                var l = d.defer(), n = d.defer(), o = d.defer(), p = {
                    result: l.promise,
                    opened: n.promise,
                    rendered: o.promise,
                    close: function(a) {
                        return g.close(p, a);
                    },
                    dismiss: function(a) {
                        return g.dismiss(p, a);
                    }
                };
                if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                var q, r = d.all([ j(b) ].concat(k(b.resolve)));
                return q = m = d.all([ m ]).then(e, e).then(function(a) {
                    var d = (b.scope || c).$new();
                    d.$close = p.close, d.$dismiss = p.dismiss, d.$on("$destroy", function() {
                        d.$$uibDestructionScheduled || d.$dismiss("$uibUnscheduledDestruction");
                    });
                    var e, j = {}, k = 1;
                    b.controller && (j.$scope = d, j.$uibModalInstance = p, Object.defineProperty(j, "$modalInstance", {
                        get: function() {
                            return h || i.warn("$modalInstance is now deprecated. Use $uibModalInstance instead."), 
                            p;
                        }
                    }), angular.forEach(b.resolve, function(b, c) {
                        j[c] = a[k++];
                    }), e = f(b.controller, j), b.controllerAs && (b.bindToController && angular.extend(e, d), 
                    d[b.controllerAs] = e)), g.open(p, {
                        scope: d,
                        deferred: l,
                        renderDeferred: o,
                        content: a[0],
                        animation: b.animation,
                        backdrop: b.backdrop,
                        keyboard: b.keyboard,
                        backdropClass: b.backdropClass,
                        windowTopClass: b.windowTopClass,
                        windowClass: b.windowClass,
                        windowTemplateUrl: b.windowTemplateUrl,
                        size: b.size,
                        openedClass: b.openedClass
                    }), n.resolve(!0);
                }, function(a) {
                    n.reject(a), l.reject(a);
                })["finally"](function() {
                    m === q && (m = null);
                }), p;
            }, l;
        } ]
    };
    return a;
}), angular.module("ui.bootstrap.modal").value("$modalSuppressWarning", !1).directive("modalBackdrop", [ "$animate", "$injector", "$modalStack", "$log", "$modalSuppressWarning", function(a, b, c, d, e) {
    function f(b, f, h) {
        e || d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."), 
        f.addClass("modal-backdrop"), h.modalInClass && (g ? g(f, {
            addClass: h.modalInClass
        }).start() : a.addClass(f, h.modalInClass), b.$on(c.NOW_CLOSING_EVENT, function(b, c) {
            var d = c();
            g ? g(f, {
                removeClass: h.modalInClass
            }).start().then(d) : a.removeClass(f, h.modalInClass).then(d);
        }));
    }
    var g = null;
    return b.has("$animateCss") && (g = b.get("$animateCss")), {
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        compile: function(a, b) {
            return a.addClass(b.backdropClass), f;
        }
    };
} ]).directive("modalWindow", [ "$modalStack", "$q", "$animate", "$injector", "$log", "$modalSuppressWarning", function(a, b, c, d, e, f) {
    var g = null;
    return d.has("$animateCss") && (g = d.get("$animateCss")), {
        scope: {
            index: "@"
        },
        replace: !0,
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/modal/window.html";
        },
        link: function(d, h, i) {
            f || e.warn("modal-window is now deprecated. Use uib-modal-window instead."), h.addClass(i.windowClass || ""), 
            h.addClass(i.windowTopClass || ""), d.size = i.size, d.close = function(b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" !== c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), 
                b.stopPropagation(), a.dismiss(c.key, "backdrop click"));
            }, h.on("click", d.close), d.$isRendered = !0;
            var j = b.defer();
            i.$observe("modalRender", function(a) {
                "true" == a && j.resolve();
            }), j.promise.then(function() {
                var e = null;
                i.modalInClass && (e = g ? g(h, {
                    addClass: i.modalInClass
                }).start() : c.addClass(h, i.modalInClass), d.$on(a.NOW_CLOSING_EVENT, function(a, b) {
                    var d = b();
                    g ? g(h, {
                        removeClass: i.modalInClass
                    }).start().then(d) : c.removeClass(h, i.modalInClass).then(d);
                })), b.when(e).then(function() {
                    var a = h[0].querySelector("[autofocus]");
                    a ? a.focus() : h[0].focus();
                });
                var f = a.getTop();
                f && a.modalRendered(f.key);
            });
        }
    };
} ]).directive("modalAnimationClass", [ "$log", "$modalSuppressWarning", function(a, b) {
    return {
        compile: function(c, d) {
            b || a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."), 
            d.modalAnimation && c.addClass(d.modalAnimationClass);
        }
    };
} ]).directive("modalTransclude", [ "$log", "$modalSuppressWarning", function(a, b) {
    return {
        link: function(c, d, e, f, g) {
            b || a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."), 
            g(c.$parent, function(a) {
                d.empty(), d.append(a);
            });
        }
    };
} ]).service("$modalStack", [ "$animate", "$timeout", "$document", "$compile", "$rootScope", "$q", "$injector", "$$multiMap", "$$stackedMap", "$uibModalStack", "$log", "$modalSuppressWarning", function(a, b, c, d, e, f, g, h, i, j, k, l) {
    l || k.warn("$modalStack is now deprecated. Use $uibModalStack instead."), angular.extend(this, j);
} ]).provider("$modal", [ "$uibModalProvider", function(a) {
    angular.extend(this, a), this.$get = [ "$injector", "$log", "$modalSuppressWarning", function(b, c, d) {
        return d || c.warn("$modal is now deprecated. Use $uibModal instead."), b.invoke(a.$get);
    } ];
} ]), angular.module("ui.bootstrap.pagination", []).controller("UibPaginationController", [ "$scope", "$attrs", "$parse", function(a, b, c) {
    var d = this, e = {
        $setViewValue: angular.noop
    }, f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(g, h) {
        e = g, this.config = h, e.$render = function() {
            d.render();
        }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
            d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages();
        }) : this.itemsPerPage = h.itemsPerPage, a.$watch("totalItems", function() {
            a.totalPages = d.calculateTotalPages();
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render();
        });
    }, this.calculateTotalPages = function() {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1);
    }, this.render = function() {
        a.page = parseInt(e.$viewValue, 10) || 1;
    }, a.selectPage = function(b, c) {
        c && c.preventDefault();
        var d = !a.ngDisabled || !c;
        d && a.page !== b && b > 0 && b <= a.totalPages && (c && c.target && c.target.blur(), 
        e.$setViewValue(b), e.$render());
    }, a.getText = function(b) {
        return a[b + "Text"] || d.config[b + "Text"];
    }, a.noPrevious = function() {
        return 1 === a.page;
    }, a.noNext = function() {
        return a.page === a.totalPages;
    };
} ]).constant("uibPaginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("uibPagination", [ "$parse", "uibPaginationConfig", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            firstText: "@",
            previousText: "@",
            nextText: "@",
            lastText: "@",
            ngDisabled: "="
        },
        require: [ "uibPagination", "?ngModel" ],
        controller: "UibPaginationController",
        controllerAs: "pagination",
        templateUrl: function(a, b) {
            return b.templateUrl || "template/pagination/pagination.html";
        },
        replace: !0,
        link: function(c, d, e, f) {
            function g(a, b, c) {
                return {
                    number: a,
                    text: b,
                    active: c
                };
            }
            function h(a, b) {
                var c = [], d = 1, e = b, f = angular.isDefined(k) && b > k;
                f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, 
                d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                for (var h = d; e >= h; h++) {
                    var i = g(h, h, h === a);
                    c.push(i);
                }
                if (f && !l) {
                    if (d > 1) {
                        var j = g(d - 1, "...", !1);
                        c.unshift(j);
                    }
                    if (b > e) {
                        var m = g(e + 1, "...", !1);
                        c.push(m);
                    }
                }
                return c;
            }
            var i = f[0], j = f[1];
            if (j) {
                var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize, l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, 
                c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, 
                i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                    k = parseInt(a, 10), i.render();
                });
                var m = i.render;
                i.render = function() {
                    m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages));
                };
            }
        }
    };
} ]).constant("uibPagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("uibPager", [ "uibPagerConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            previousText: "@",
            nextText: "@",
            ngDisabled: "="
        },
        require: [ "uibPager", "?ngModel" ],
        controller: "UibPaginationController",
        controllerAs: "pagination",
        templateUrl: function(a, b) {
            return b.templateUrl || "template/pagination/pager.html";
        },
        replace: !0,
        link: function(b, c, d, e) {
            var f = e[0], g = e[1];
            g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, 
            f.init(g, a));
        }
    };
} ]), angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning", !1).controller("PaginationController", [ "$scope", "$attrs", "$parse", "$log", "$paginationSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("PaginationController is now deprecated. Use UibPaginationController instead.");
    var f = this, g = {
        $setViewValue: angular.noop
    }, h = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(d, e) {
        g = d, this.config = e, g.$render = function() {
            f.render();
        }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
            f.itemsPerPage = parseInt(b, 10), a.totalPages = f.calculateTotalPages();
        }) : this.itemsPerPage = e.itemsPerPage, a.$watch("totalItems", function() {
            a.totalPages = f.calculateTotalPages();
        }), a.$watch("totalPages", function(b) {
            h(a.$parent, b), a.page > b ? a.selectPage(b) : g.$render();
        });
    }, this.calculateTotalPages = function() {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1);
    }, this.render = function() {
        a.page = parseInt(g.$viewValue, 10) || 1;
    }, a.selectPage = function(b, c) {
        c && c.preventDefault();
        var d = !a.ngDisabled || !c;
        d && a.page !== b && b > 0 && b <= a.totalPages && (c && c.target && c.target.blur(), 
        g.$setViewValue(b), g.$render());
    }, a.getText = function(b) {
        return a[b + "Text"] || f.config[b + "Text"];
    }, a.noPrevious = function() {
        return 1 === a.page;
    }, a.noNext = function() {
        return a.page === a.totalPages;
    };
} ]).directive("pagination", [ "$parse", "uibPaginationConfig", "$log", "$paginationSuppressWarning", function(a, b, c, d) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            firstText: "@",
            previousText: "@",
            nextText: "@",
            lastText: "@",
            ngDisabled: "="
        },
        require: [ "pagination", "?ngModel" ],
        controller: "PaginationController",
        controllerAs: "pagination",
        templateUrl: function(a, b) {
            return b.templateUrl || "template/pagination/pagination.html";
        },
        replace: !0,
        link: function(e, f, g, h) {
            function i(a, b, c) {
                return {
                    number: a,
                    text: b,
                    active: c
                };
            }
            function j(a, b) {
                var c = [], d = 1, e = b, f = angular.isDefined(m) && b > m;
                f && (n ? (d = Math.max(a - Math.floor(m / 2), 1), e = d + m - 1, e > b && (e = b, 
                d = e - m + 1)) : (d = (Math.ceil(a / m) - 1) * m + 1, e = Math.min(d + m - 1, b)));
                for (var g = d; e >= g; g++) {
                    var h = i(g, g, g === a);
                    c.push(h);
                }
                if (f && !n) {
                    if (d > 1) {
                        var j = i(d - 1, "...", !1);
                        c.unshift(j);
                    }
                    if (b > e) {
                        var k = i(e + 1, "...", !1);
                        c.push(k);
                    }
                }
                return c;
            }
            d || c.warn("pagination is now deprecated. Use uib-pagination instead.");
            var k = h[0], l = h[1];
            if (l) {
                var m = angular.isDefined(g.maxSize) ? e.$parent.$eval(g.maxSize) : b.maxSize, n = angular.isDefined(g.rotate) ? e.$parent.$eval(g.rotate) : b.rotate;
                e.boundaryLinks = angular.isDefined(g.boundaryLinks) ? e.$parent.$eval(g.boundaryLinks) : b.boundaryLinks, 
                e.directionLinks = angular.isDefined(g.directionLinks) ? e.$parent.$eval(g.directionLinks) : b.directionLinks, 
                k.init(l, b), g.maxSize && e.$parent.$watch(a(g.maxSize), function(a) {
                    m = parseInt(a, 10), k.render();
                });
                var o = k.render;
                k.render = function() {
                    o(), e.page > 0 && e.page <= e.totalPages && (e.pages = j(e.page, e.totalPages));
                };
            }
        }
    };
} ]).directive("pager", [ "uibPagerConfig", "$log", "$paginationSuppressWarning", function(a, b, c) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            previousText: "@",
            nextText: "@",
            ngDisabled: "="
        },
        require: [ "pager", "?ngModel" ],
        controller: "PaginationController",
        controllerAs: "pagination",
        templateUrl: function(a, b) {
            return b.templateUrl || "template/pagination/pager.html";
        },
        replace: !0,
        link: function(d, e, f, g) {
            c || b.warn("pager is now deprecated. Use uib-pager instead.");
            var h = g[0], i = g[1];
            i && (d.align = angular.isDefined(f.align) ? d.$parent.$eval(f.align) : a.align, 
            h.init(i, a));
        }
    };
} ]), angular.module("ui.bootstrap.tooltip", [ "ui.bootstrap.position", "ui.bootstrap.stackedMap" ]).provider("$uibTooltip", function() {
    function a(a) {
        var b = /[A-Z]/g, c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase();
        });
    }
    var b = {
        placement: "top",
        animation: !0,
        popupDelay: 0,
        popupCloseDelay: 0,
        useContentExp: !1
    }, c = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur",
        none: ""
    }, d = {};
    this.options = function(a) {
        angular.extend(d, a);
    }, this.setTriggers = function(a) {
        angular.extend(c, a);
    }, this.$get = [ "$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function(e, f, g, h, i, j, k, l, m) {
        var n = m.createNew();
        return h.on("keypress", function(a) {
            if (27 === a.which) {
                var b = n.top();
                b && (b.value.close(), n.removeTop(), b = null);
            }
        }), function(e, k, m, o) {
            function p(a) {
                var b = (a || o.trigger || m).split(" "), d = b.map(function(a) {
                    return c[a] || a;
                });
                return {
                    show: b,
                    hide: d
                };
            }
            o = angular.extend({}, b, d, o);
            var q = a(e), r = j.startSymbol(), s = j.endSymbol(), t = "<div " + q + '-popup title="' + r + "title" + s + '" ' + (o.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + r + "content" + s + '" ') + 'placement="' + r + "placement" + s + '" popup-class="' + r + "popupClass" + s + '" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block; top: -9999px; left: -9999px;"></div>';
            return {
                compile: function(a, b) {
                    var c = f(t);
                    return function(a, b, d, f) {
                        function j() {
                            L.isOpen ? q() : m();
                        }
                        function m() {
                            (!K || a.$eval(d[k + "Enable"])) && (u(), x(), L.popupDelay ? F || (F = g(r, L.popupDelay, !1)) : r());
                        }
                        function q() {
                            s(), L.popupCloseDelay ? G || (G = g(t, L.popupCloseDelay, !1)) : t();
                        }
                        function r() {
                            return s(), u(), L.content ? (v(), void L.$evalAsync(function() {
                                L.isOpen = !0, y(!0), Q();
                            })) : angular.noop;
                        }
                        function s() {
                            F && (g.cancel(F), F = null), H && (g.cancel(H), H = null);
                        }
                        function t() {
                            s(), u(), L && L.$evalAsync(function() {
                                L.isOpen = !1, y(!1), L.animation ? E || (E = g(w, 150, !1)) : w();
                            });
                        }
                        function u() {
                            G && (g.cancel(G), G = null), E && (g.cancel(E), E = null);
                        }
                        function v() {
                            C || (D = L.$new(), C = c(D, function(a) {
                                I ? h.find("body").append(a) : b.after(a);
                            }), z());
                        }
                        function w() {
                            A(), E = null, C && (C.remove(), C = null), D && (D.$destroy(), D = null);
                        }
                        function x() {
                            L.title = d[k + "Title"], O ? L.content = O(a) : L.content = d[e], L.popupClass = d[k + "Class"], 
                            L.placement = angular.isDefined(d[k + "Placement"]) ? d[k + "Placement"] : o.placement;
                            var b = parseInt(d[k + "PopupDelay"], 10), c = parseInt(d[k + "PopupCloseDelay"], 10);
                            L.popupDelay = isNaN(b) ? o.popupDelay : b, L.popupCloseDelay = isNaN(c) ? o.popupCloseDelay : c;
                        }
                        function y(b) {
                            N && angular.isFunction(N.assign) && N.assign(a, b);
                        }
                        function z() {
                            P.length = 0, O ? (P.push(a.$watch(O, function(a) {
                                L.content = a, !a && L.isOpen && t();
                            })), P.push(D.$watch(function() {
                                M || (M = !0, D.$$postDigest(function() {
                                    M = !1, L && L.isOpen && Q();
                                }));
                            }))) : P.push(d.$observe(e, function(a) {
                                L.content = a, !a && L.isOpen ? t() : Q();
                            })), P.push(d.$observe(k + "Title", function(a) {
                                L.title = a, L.isOpen && Q();
                            })), P.push(d.$observe(k + "Placement", function(a) {
                                L.placement = a ? a : o.placement, L.isOpen && Q();
                            }));
                        }
                        function A() {
                            P.length && (angular.forEach(P, function(a) {
                                a();
                            }), P.length = 0);
                        }
                        function B() {
                            var a = d[k + "Trigger"];
                            R(), J = p(a), "none" !== J.show && J.show.forEach(function(a, c) {
                                a === J.hide[c] ? b[0].addEventListener(a, j) : a && (b[0].addEventListener(a, m), 
                                J.hide[c].split(" ").forEach(function(a) {
                                    b[0].addEventListener(a, q);
                                })), b.on("keypress", function(a) {
                                    27 === a.which && q();
                                });
                            });
                        }
                        var C, D, E, F, G, H, I = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, J = p(void 0), K = angular.isDefined(d[k + "Enable"]), L = a.$new(!0), M = !1, N = angular.isDefined(d[k + "IsOpen"]) ? l(d[k + "IsOpen"]) : !1, O = o.useContentExp ? l(d[e]) : !1, P = [], Q = function() {
                            C && C.html() && (H || (H = g(function() {
                                C.css({
                                    top: 0,
                                    left: 0
                                });
                                var a = i.positionElements(b, C, L.placement, I);
                                a.top += "px", a.left += "px", a.visibility = "visible", C.css(a), H = null;
                            }, 0, !1)));
                        };
                        L.origScope = a, L.isOpen = !1, n.add(L, {
                            close: t
                        }), L.contentExp = function() {
                            return L.content;
                        }, d.$observe("disabled", function(a) {
                            a && s(), a && L.isOpen && t();
                        }), N && a.$watch(N, function(a) {
                            L && !a === L.isOpen && j();
                        });
                        var R = function() {
                            J.show.forEach(function(a) {
                                b.unbind(a, m);
                            }), J.hide.forEach(function(a) {
                                a.split(" ").forEach(function(a) {
                                    b[0].removeEventListener(a, q);
                                });
                            });
                        };
                        B();
                        var S = a.$eval(d[k + "Animation"]);
                        L.animation = angular.isDefined(S) ? !!S : o.animation;
                        var T = a.$eval(d[k + "AppendToBody"]);
                        I = angular.isDefined(T) ? T : I, I && a.$on("$locationChangeSuccess", function() {
                            L.isOpen && t();
                        }), a.$on("$destroy", function() {
                            s(), u(), R(), w(), n.remove(L), L = null;
                        });
                    };
                }
            };
        };
    } ];
}).directive("uibTooltipTemplateTransclude", [ "$animate", "$sce", "$compile", "$templateRequest", function(a, b, c, d) {
    return {
        link: function(e, f, g) {
            var h, i, j, k = e.$eval(g.tooltipTemplateTranscludeScope), l = 0, m = function() {
                i && (i.remove(), i = null), h && (h.$destroy(), h = null), j && (a.leave(j).then(function() {
                    i = null;
                }), i = j, j = null);
            };
            e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude), function(b) {
                var g = ++l;
                b ? (d(b, !0).then(function(d) {
                    if (g === l) {
                        var e = k.$new(), i = d, n = c(i)(e, function(b) {
                            m(), a.enter(b, f);
                        });
                        h = e, j = n, h.$emit("$includeContentLoaded", b);
                    }
                }, function() {
                    g === l && (m(), e.$emit("$includeContentError", b));
                }), e.$emit("$includeContentRequested", b)) : m();
            }), e.$on("$destroy", m);
        }
    };
} ]).directive("uibTooltipClasses", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            a.placement && b.addClass(a.placement), a.popupClass && b.addClass(a.popupClass), 
            a.animation() && b.addClass(c.tooltipAnimationClass);
        }
    };
}).directive("uibTooltipPopup", function() {
    return {
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html",
        link: function(a, b) {
            b.addClass("tooltip");
        }
    };
}).directive("uibTooltip", [ "$uibTooltip", function(a) {
    return a("uibTooltip", "tooltip", "mouseenter");
} ]).directive("uibTooltipTemplatePopup", function() {
    return {
        replace: !0,
        scope: {
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "template/tooltip/tooltip-template-popup.html",
        link: function(a, b) {
            b.addClass("tooltip");
        }
    };
}).directive("uibTooltipTemplate", [ "$uibTooltip", function(a) {
    return a("uibTooltipTemplate", "tooltip", "mouseenter", {
        useContentExp: !0
    });
} ]).directive("uibTooltipHtmlPopup", function() {
    return {
        replace: !0,
        scope: {
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-popup.html",
        link: function(a, b) {
            b.addClass("tooltip");
        }
    };
}).directive("uibTooltipHtml", [ "$uibTooltip", function(a) {
    return a("uibTooltipHtml", "tooltip", "mouseenter", {
        useContentExp: !0
    });
} ]), angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning", !1).provider("$tooltip", [ "$uibTooltipProvider", function(a) {
    angular.extend(this, a), this.$get = [ "$log", "$tooltipSuppressWarning", "$injector", function(b, c, d) {
        return c || b.warn("$tooltip is now deprecated. Use $uibTooltip instead."), d.invoke(a.$get);
    } ];
} ]).directive("tooltipTemplateTransclude", [ "$animate", "$sce", "$compile", "$templateRequest", "$log", "$tooltipSuppressWarning", function(a, b, c, d, e, f) {
    return {
        link: function(g, h, i) {
            f || e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");
            var j, k, l, m = g.$eval(i.tooltipTemplateTranscludeScope), n = 0, o = function() {
                k && (k.remove(), k = null), j && (j.$destroy(), j = null), l && (a.leave(l).then(function() {
                    k = null;
                }), k = l, l = null);
            };
            g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude), function(b) {
                var e = ++n;
                b ? (d(b, !0).then(function(d) {
                    if (e === n) {
                        var f = m.$new(), g = d, i = c(g)(f, function(b) {
                            o(), a.enter(b, h);
                        });
                        j = f, l = i, j.$emit("$includeContentLoaded", b);
                    }
                }, function() {
                    e === n && (o(), g.$emit("$includeContentError", b));
                }), g.$emit("$includeContentRequested", b)) : o();
            }), g.$on("$destroy", o);
        }
    };
} ]).directive("tooltipClasses", [ "$log", "$tooltipSuppressWarning", function(a, b) {
    return {
        restrict: "A",
        link: function(c, d, e) {
            b || a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."), 
            c.placement && d.addClass(c.placement), c.popupClass && d.addClass(c.popupClass), 
            c.animation() && d.addClass(e.tooltipAnimationClass);
        }
    };
} ]).directive("tooltipPopup", [ "$log", "$tooltipSuppressWarning", function(a, b) {
    return {
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html",
        link: function(c, d) {
            b || a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."), 
            d.addClass("tooltip");
        }
    };
} ]).directive("tooltip", [ "$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter");
} ]).directive("tooltipTemplatePopup", [ "$log", "$tooltipSuppressWarning", function(a, b) {
    return {
        replace: !0,
        scope: {
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "template/tooltip/tooltip-template-popup.html",
        link: function(c, d) {
            b || a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."), 
            d.addClass("tooltip");
        }
    };
} ]).directive("tooltipTemplate", [ "$tooltip", function(a) {
    return a("tooltipTemplate", "tooltip", "mouseenter", {
        useContentExp: !0
    });
} ]).directive("tooltipHtmlPopup", [ "$log", "$tooltipSuppressWarning", function(a, b) {
    return {
        replace: !0,
        scope: {
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-popup.html",
        link: function(c, d) {
            b || a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."), 
            d.addClass("tooltip");
        }
    };
} ]).directive("tooltipHtml", [ "$tooltip", function(a) {
    return a("tooltipHtml", "tooltip", "mouseenter", {
        useContentExp: !0
    });
} ]), angular.module("ui.bootstrap.popover", [ "ui.bootstrap.tooltip" ]).directive("uibPopoverTemplatePopup", function() {
    return {
        replace: !0,
        scope: {
            title: "@",
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "template/popover/popover-template.html",
        link: function(a, b) {
            b.addClass("popover");
        }
    };
}).directive("uibPopoverTemplate", [ "$uibTooltip", function(a) {
    return a("uibPopoverTemplate", "popover", "click", {
        useContentExp: !0
    });
} ]).directive("uibPopoverHtmlPopup", function() {
    return {
        replace: !0,
        scope: {
            contentExp: "&",
            title: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover-html.html",
        link: function(a, b) {
            b.addClass("popover");
        }
    };
}).directive("uibPopoverHtml", [ "$uibTooltip", function(a) {
    return a("uibPopoverHtml", "popover", "click", {
        useContentExp: !0
    });
} ]).directive("uibPopoverPopup", function() {
    return {
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html",
        link: function(a, b) {
            b.addClass("popover");
        }
    };
}).directive("uibPopover", [ "$uibTooltip", function(a) {
    return a("uibPopover", "popover", "click");
} ]), angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning", !1).directive("popoverTemplatePopup", [ "$log", "$popoverSuppressWarning", function(a, b) {
    return {
        replace: !0,
        scope: {
            title: "@",
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "template/popover/popover-template.html",
        link: function(c, d) {
            b || a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."), 
            d.addClass("popover");
        }
    };
} ]).directive("popoverTemplate", [ "$tooltip", function(a) {
    return a("popoverTemplate", "popover", "click", {
        useContentExp: !0
    });
} ]).directive("popoverHtmlPopup", [ "$log", "$popoverSuppressWarning", function(a, b) {
    return {
        replace: !0,
        scope: {
            contentExp: "&",
            title: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover-html.html",
        link: function(c, d) {
            b || a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."), 
            d.addClass("popover");
        }
    };
} ]).directive("popoverHtml", [ "$tooltip", function(a) {
    return a("popoverHtml", "popover", "click", {
        useContentExp: !0
    });
} ]).directive("popoverPopup", [ "$log", "$popoverSuppressWarning", function(a, b) {
    return {
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html",
        link: function(c, d) {
            b || a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."), 
            d.addClass("popover");
        }
    };
} ]).directive("popover", [ "$tooltip", function(a) {
    return a("popover", "popover", "click");
} ]), angular.module("ui.bootstrap.progressbar", []).constant("uibProgressConfig", {
    animate: !0,
    max: 100
}).controller("UibProgressController", [ "$scope", "$attrs", "uibProgressConfig", function(a, b, c) {
    var d = this, e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(a.max) ? a.max : c.max, this.addBar = function(b, c, f) {
        e || c.css({
            transition: "none"
        }), this.bars.push(b), b.max = a.max, b.title = f && angular.isDefined(f.title) ? f.title : "progressbar", 
        b.$watch("value", function(a) {
            b.recalculatePercentage();
        }), b.recalculatePercentage = function() {
            var a = d.bars.reduce(function(a, b) {
                return b.percent = +(100 * b.value / b.max).toFixed(2), a + b.percent;
            }, 0);
            a > 100 && (b.percent -= a - 100);
        }, b.$on("$destroy", function() {
            c = null, d.removeBar(b);
        });
    }, this.removeBar = function(a) {
        this.bars.splice(this.bars.indexOf(a), 1), this.bars.forEach(function(a) {
            a.recalculatePercentage();
        });
    }, a.$watch("max", function(b) {
        d.bars.forEach(function(b) {
            b.max = a.max, b.recalculatePercentage();
        });
    });
} ]).directive("uibProgress", function() {
    return {
        replace: !0,
        transclude: !0,
        controller: "UibProgressController",
        require: "uibProgress",
        scope: {
            max: "=?"
        },
        templateUrl: "template/progressbar/progress.html"
    };
}).directive("uibBar", function() {
    return {
        replace: !0,
        transclude: !0,
        require: "^uibProgress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b, c);
        }
    };
}).directive("uibProgressbar", function() {
    return {
        replace: !0,
        transclude: !0,
        controller: "UibProgressController",
        scope: {
            value: "=",
            max: "=?",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]), {
                title: c.title
            });
        }
    };
}), angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning", !1).controller("ProgressController", [ "$scope", "$attrs", "uibProgressConfig", "$log", "$progressSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("ProgressController is now deprecated. Use UibProgressController instead.");
    var f = this, g = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(a.max) ? a.max : c.max, this.addBar = function(b, c, d) {
        g || c.css({
            transition: "none"
        }), this.bars.push(b), b.max = a.max, b.title = d && angular.isDefined(d.title) ? d.title : "progressbar", 
        b.$watch("value", function(a) {
            b.recalculatePercentage();
        }), b.recalculatePercentage = function() {
            b.percent = +(100 * b.value / b.max).toFixed(2);
            var a = f.bars.reduce(function(a, b) {
                return a + b.percent;
            }, 0);
            a > 100 && (b.percent -= a - 100);
        }, b.$on("$destroy", function() {
            c = null, f.removeBar(b);
        });
    }, this.removeBar = function(a) {
        this.bars.splice(this.bars.indexOf(a), 1);
    }, a.$watch("max", function(b) {
        f.bars.forEach(function(b) {
            b.max = a.max, b.recalculatePercentage();
        });
    });
} ]).directive("progress", [ "$log", "$progressSuppressWarning", function(a, b) {
    return {
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {
            max: "=?",
            title: "@?"
        },
        templateUrl: "template/progressbar/progress.html",
        link: function() {
            b || a.warn("progress is now deprecated. Use uib-progress instead.");
        }
    };
} ]).directive("bar", [ "$log", "$progressSuppressWarning", function(a, b) {
    return {
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(c, d, e, f) {
            b || a.warn("bar is now deprecated. Use uib-bar instead."), f.addBar(c, d);
        }
    };
} ]).directive("progressbar", [ "$log", "$progressSuppressWarning", function(a, b) {
    return {
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            max: "=?",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(c, d, e, f) {
            b || a.warn("progressbar is now deprecated. Use uib-progressbar instead."), f.addBar(c, angular.element(d.children()[0]), {
                title: e.title
            });
        }
    };
} ]), angular.module("ui.bootstrap.rating", []).constant("uibRatingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null,
    titles: [ "one", "two", "three", "four", "five" ]
}).controller("UibRatingController", [ "$scope", "$attrs", "uibRatingConfig", function(a, b, c) {
    var d = {
        $setViewValue: angular.noop
    };
    this.init = function(e) {
        d = e, d.$render = this.render, d.$formatters.push(function(a) {
            return angular.isNumber(a) && a << 0 !== a && (a = Math.round(a)), a;
        }), this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, 
        this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
        var f = angular.isDefined(b.titles) ? a.$parent.$eval(b.titles) : c.titles;
        this.titles = angular.isArray(f) && f.length > 0 ? f : c.titles;
        var g = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
        a.range = this.buildTemplateObjects(g);
    }, this.buildTemplateObjects = function(a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
            index: b
        }, {
            stateOn: this.stateOn,
            stateOff: this.stateOff,
            title: this.getTitle(b)
        }, a[b]);
        return a;
    }, this.getTitle = function(a) {
        return a >= this.titles.length ? a + 1 : this.titles[a];
    }, a.rate = function(b) {
        !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(d.$viewValue === b ? 0 : b), 
        d.$render());
    }, a.enter = function(b) {
        a.readonly || (a.value = b), a.onHover({
            value: b
        });
    }, a.reset = function() {
        a.value = d.$viewValue, a.onLeave();
    }, a.onKeydown = function(b) {
        /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)));
    }, this.render = function() {
        a.value = d.$viewValue;
    };
} ]).directive("uibRating", function() {
    return {
        require: [ "uibRating", "ngModel" ],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "UibRatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            e.init(f);
        }
    };
}), angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning", !1).controller("RatingController", [ "$scope", "$attrs", "$controller", "$log", "$ratingSuppressWarning", function(a, b, c, d, e) {
    e || d.warn("RatingController is now deprecated. Use UibRatingController instead."), 
    angular.extend(this, c("UibRatingController", {
        $scope: a,
        $attrs: b
    }));
} ]).directive("rating", [ "$log", "$ratingSuppressWarning", function(a, b) {
    return {
        require: [ "rating", "ngModel" ],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(c, d, e, f) {
            b || a.warn("rating is now deprecated. Use uib-rating instead.");
            var g = f[0], h = f[1];
            g.init(h);
        }
    };
} ]), angular.module("ui.bootstrap.tabs", []).controller("UibTabsetController", [ "$scope", function(a) {
    var b = this, c = b.tabs = a.tabs = [];
    b.select = function(a) {
        angular.forEach(c, function(b) {
            b.active && b !== a && (b.active = !1, b.onDeselect(), a.selectCalled = !1);
        }), a.active = !0, a.selectCalled || (a.onSelect(), a.selectCalled = !0);
    }, b.addTab = function(a) {
        c.push(a), 1 === c.length && a.active !== !1 ? a.active = !0 : a.active ? b.select(a) : a.active = !1;
    }, b.removeTab = function(a) {
        var e = c.indexOf(a);
        if (a.active && c.length > 1 && !d) {
            var f = e == c.length - 1 ? e - 1 : e + 1;
            b.select(c[f]);
        }
        c.splice(e, 1);
    };
    var d;
    a.$on("$destroy", function() {
        d = !0;
    });
} ]).directive("uibTabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "UibTabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1;
        }
    };
}).directive("uibTab", [ "$parse", function(a) {
    return {
        require: "^uibTabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            active: "=?",
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        link: function(b, c, d, e, f) {
            b.$watch("active", function(a) {
                a && e.select(b);
            }), b.disabled = !1, d.disable && b.$parent.$watch(a(d.disable), function(a) {
                b.disabled = !!a;
            }), b.select = function() {
                b.disabled || (b.active = !0);
            }, e.addTab(b), b.$on("$destroy", function() {
                e.removeTab(b);
            }), b.$transcludeFn = f;
        }
    };
} ]).directive("uibTabHeadingTransclude", function() {
    return {
        restrict: "A",
        require: [ "?^uibTab", "?^tab" ],
        link: function(a, b) {
            a.$watch("headingElement", function(a) {
                a && (b.html(""), b.append(a));
            });
        }
    };
}).directive("uibTabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || a.hasAttribute("x-tab-heading") || a.hasAttribute("uib-tab-heading") || a.hasAttribute("data-uib-tab-heading") || a.hasAttribute("x-uib-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase() || "x-tab-heading" === a.tagName.toLowerCase() || "uib-tab-heading" === a.tagName.toLowerCase() || "data-uib-tab-heading" === a.tagName.toLowerCase() || "x-uib-tab-heading" === a.tagName.toLowerCase());
    }
    return {
        restrict: "A",
        require: [ "?^uibTabset", "?^tabset" ],
        link: function(b, c, d) {
            var e = b.$eval(d.uibTabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b);
                });
            });
        }
    };
}), angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning", !1).controller("TabsetController", [ "$scope", "$controller", "$log", "$tabsSuppressWarning", function(a, b, c, d) {
    d || c.warn("TabsetController is now deprecated. Use UibTabsetController instead."), 
    angular.extend(this, b("UibTabsetController", {
        $scope: a
    }));
} ]).directive("tabset", [ "$log", "$tabsSuppressWarning", function(a, b) {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(c, d, e) {
            b || a.warn("tabset is now deprecated. Use uib-tabset instead."), c.vertical = angular.isDefined(e.vertical) ? c.$parent.$eval(e.vertical) : !1, 
            c.justified = angular.isDefined(e.justified) ? c.$parent.$eval(e.justified) : !1;
        }
    };
} ]).directive("tab", [ "$parse", "$log", "$tabsSuppressWarning", function(a, b, c) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            active: "=?",
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        link: function(d, e, f, g, h) {
            c || b.warn("tab is now deprecated. Use uib-tab instead."), d.$watch("active", function(a) {
                a && g.select(d);
            }), d.disabled = !1, f.disable && d.$parent.$watch(a(f.disable), function(a) {
                d.disabled = !!a;
            }), d.select = function() {
                d.disabled || (d.active = !0);
            }, g.addTab(d), d.$on("$destroy", function() {
                g.removeTab(d);
            }), d.$transcludeFn = h;
        }
    };
} ]).directive("tabHeadingTransclude", [ "$log", "$tabsSuppressWarning", function(a, b) {
    return {
        restrict: "A",
        require: "^tab",
        link: function(c, d) {
            b || a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."), 
            c.$watch("headingElement", function(a) {
                a && (d.html(""), d.append(a));
            });
        }
    };
} ]).directive("tabContentTransclude", [ "$log", "$tabsSuppressWarning", function(a, b) {
    function c(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || a.hasAttribute("x-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase() || "x-tab-heading" === a.tagName.toLowerCase());
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(d, e, f) {
            b || a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");
            var g = d.$eval(f.tabContentTransclude);
            g.$transcludeFn(g.$parent, function(a) {
                angular.forEach(a, function(a) {
                    c(a) ? g.headingElement = a : e.append(a);
                });
            });
        }
    };
} ]), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0,
    arrowkeys: !0,
    showSpinners: !0
}).controller("UibTimepickerController", [ "$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function(a, b, c, d, e, f, g) {
    function h() {
        var b = parseInt(a.hours, 10), c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
        return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === r[1] && (b += 12)), 
        b) : void 0;
    }
    function i() {
        var b = parseInt(a.minutes, 10);
        return b >= 0 && 60 > b ? b : void 0;
    }
    function j(a) {
        return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a.toString();
    }
    function k(a) {
        l(), q.$setViewValue(new Date(p)), m(a);
    }
    function l() {
        q.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1;
    }
    function m(b) {
        var c = p.getHours(), d = p.getMinutes();
        a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : j(c), 
        "m" !== b && (a.minutes = j(d)), a.meridian = p.getHours() < 12 ? r[0] : r[1];
    }
    function n(a, b) {
        var c = new Date(a.getTime() + 6e4 * b), d = new Date(a);
        return d.setHours(c.getHours(), c.getMinutes()), d;
    }
    function o(a) {
        p = n(p, a), k();
    }
    var p = new Date(), q = {
        $setViewValue: angular.noop
    }, r = angular.isDefined(c.meridians) ? a.$parent.$eval(c.meridians) : g.meridians || f.DATETIME_FORMATS.AMPMS;
    a.tabindex = angular.isDefined(c.tabindex) ? c.tabindex : 0, b.removeAttr("tabindex"), 
    this.init = function(b, d) {
        q = b, q.$render = this.render, q.$formatters.unshift(function(a) {
            return a ? new Date(a) : null;
        });
        var e = d.eq(0), f = d.eq(1), h = angular.isDefined(c.mousewheel) ? a.$parent.$eval(c.mousewheel) : g.mousewheel;
        h && this.setupMousewheelEvents(e, f);
        var i = angular.isDefined(c.arrowkeys) ? a.$parent.$eval(c.arrowkeys) : g.arrowkeys;
        i && this.setupArrowkeyEvents(e, f), a.readonlyInput = angular.isDefined(c.readonlyInput) ? a.$parent.$eval(c.readonlyInput) : g.readonlyInput, 
        this.setupInputEvents(e, f);
    };
    var s = g.hourStep;
    c.hourStep && a.$parent.$watch(d(c.hourStep), function(a) {
        s = parseInt(a, 10);
    });
    var t = g.minuteStep;
    c.minuteStep && a.$parent.$watch(d(c.minuteStep), function(a) {
        t = parseInt(a, 10);
    });
    var u;
    a.$parent.$watch(d(c.min), function(a) {
        var b = new Date(a);
        u = isNaN(b) ? void 0 : b;
    });
    var v;
    a.$parent.$watch(d(c.max), function(a) {
        var b = new Date(a);
        v = isNaN(b) ? void 0 : b;
    }), a.noIncrementHours = function() {
        var a = n(p, 60 * s);
        return a > v || p > a && u > a;
    }, a.noDecrementHours = function() {
        var a = n(p, 60 * -s);
        return u > a || a > p && a > v;
    }, a.noIncrementMinutes = function() {
        var a = n(p, t);
        return a > v || p > a && u > a;
    }, a.noDecrementMinutes = function() {
        var a = n(p, -t);
        return u > a || a > p && a > v;
    }, a.noToggleMeridian = function() {
        return p.getHours() < 13 ? n(p, 720) > v : n(p, -720) < u;
    }, a.showMeridian = g.showMeridian, c.showMeridian && a.$parent.$watch(d(c.showMeridian), function(b) {
        if (a.showMeridian = !!b, q.$error.time) {
            var c = h(), d = i();
            angular.isDefined(c) && angular.isDefined(d) && (p.setHours(c), k());
        } else m();
    }), this.setupMousewheelEvents = function(b, c) {
        var d = function(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
            return a.detail || b > 0;
        };
        b.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault();
        }), c.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault();
        });
    }, this.setupArrowkeyEvents = function(b, c) {
        b.bind("keydown", function(b) {
            38 === b.which ? (b.preventDefault(), a.incrementHours(), a.$apply()) : 40 === b.which && (b.preventDefault(), 
            a.decrementHours(), a.$apply());
        }), c.bind("keydown", function(b) {
            38 === b.which ? (b.preventDefault(), a.incrementMinutes(), a.$apply()) : 40 === b.which && (b.preventDefault(), 
            a.decrementMinutes(), a.$apply());
        });
    }, this.setupInputEvents = function(b, c) {
        if (a.readonlyInput) return a.updateHours = angular.noop, void (a.updateMinutes = angular.noop);
        var d = function(b, c) {
            q.$setViewValue(null), q.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), 
            angular.isDefined(c) && (a.invalidMinutes = c);
        };
        a.updateHours = function() {
            var a = h(), b = i();
            angular.isDefined(a) && angular.isDefined(b) ? (p.setHours(a), u > p || p > v ? d(!0) : k("h")) : d(!0);
        }, b.bind("blur", function(b) {
            !a.invalidHours && a.hours < 10 && a.$apply(function() {
                a.hours = j(a.hours);
            });
        }), a.updateMinutes = function() {
            var a = i(), b = h();
            angular.isDefined(a) && angular.isDefined(b) ? (p.setMinutes(a), u > p || p > v ? d(void 0, !0) : k("m")) : d(void 0, !0);
        }, c.bind("blur", function(b) {
            !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                a.minutes = j(a.minutes);
            });
        });
    }, this.render = function() {
        var b = q.$viewValue;
        isNaN(b) ? (q.$setValidity("time", !1), e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (b && (p = b), 
        u > p || p > v ? (q.$setValidity("time", !1), a.invalidHours = !0, a.invalidMinutes = !0) : l(), 
        m());
    }, a.showSpinners = angular.isDefined(c.showSpinners) ? a.$parent.$eval(c.showSpinners) : g.showSpinners, 
    a.incrementHours = function() {
        a.noIncrementHours() || o(60 * s);
    }, a.decrementHours = function() {
        a.noDecrementHours() || o(60 * -s);
    }, a.incrementMinutes = function() {
        a.noIncrementMinutes() || o(t);
    }, a.decrementMinutes = function() {
        a.noDecrementMinutes() || o(-t);
    }, a.toggleMeridian = function() {
        a.noToggleMeridian() || o(720 * (p.getHours() < 12 ? 1 : -1));
    };
} ]).directive("uibTimepicker", function() {
    return {
        restrict: "EA",
        require: [ "uibTimepicker", "?^ngModel" ],
        controller: "UibTimepickerController",
        controllerAs: "timepicker",
        replace: !0,
        scope: {},
        templateUrl: function(a, b) {
            return b.templateUrl || "template/timepicker/timepicker.html";
        },
        link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            f && e.init(f, b.find("input"));
        }
    };
}), angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning", !1).controller("TimepickerController", [ "$scope", "$element", "$attrs", "$controller", "$log", "$timepickerSuppressWarning", function(a, b, c, d, e, f) {
    f || e.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."), 
    angular.extend(this, d("UibTimepickerController", {
        $scope: a,
        $element: b,
        $attrs: c
    }));
} ]).directive("timepicker", [ "$log", "$timepickerSuppressWarning", function(a, b) {
    return {
        restrict: "EA",
        require: [ "timepicker", "?^ngModel" ],
        controller: "TimepickerController",
        controllerAs: "timepicker",
        replace: !0,
        scope: {},
        templateUrl: function(a, b) {
            return b.templateUrl || "template/timepicker/timepicker.html";
        },
        link: function(c, d, e, f) {
            b || a.warn("timepicker is now deprecated. Use uib-timepicker instead.");
            var g = f[0], h = f[1];
            h && g.init(h, d.find("input"));
        }
    };
} ]), angular.module("ui.bootstrap.typeahead", [ "ui.bootstrap.position" ]).factory("uibTypeaheadParser", [ "$parse", function(a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
        parse: function(c) {
            var d = c.match(b);
            if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
            return {
                itemName: d[3],
                source: a(d[4]),
                viewMapper: a(d[2] || d[1]),
                modelMapper: a(d[1])
            };
        }
    };
} ]).controller("UibTypeaheadController", [ "$scope", "$element", "$attrs", "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$uibPosition", "uibTypeaheadParser", function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m() {
        K.moveInProgress || (K.moveInProgress = !0, K.$digest()), S && g.cancel(S), S = g(function() {
            K.matches.length && n(), K.moveInProgress = !1;
        }, r);
    }
    function n() {
        K.position = C ? k.offset(b) : k.position(b), K.position.top += b.prop("offsetHeight");
    }
    var o, p, q = [ 9, 13, 27, 38, 40 ], r = 200, s = a.$eval(c.typeaheadMinLength);
    s || 0 === s || (s = 1);
    var t, u, v = a.$eval(c.typeaheadWaitMs) || 0, w = a.$eval(c.typeaheadEditable) !== !1, x = e(c.typeaheadLoading).assign || angular.noop, y = e(c.typeaheadOnSelect), z = angular.isDefined(c.typeaheadSelectOnBlur) ? a.$eval(c.typeaheadSelectOnBlur) : !1, A = e(c.typeaheadNoResults).assign || angular.noop, B = c.typeaheadInputFormatter ? e(c.typeaheadInputFormatter) : void 0, C = c.typeaheadAppendToBody ? a.$eval(c.typeaheadAppendToBody) : !1, D = c.typeaheadAppendToElementId || !1, E = a.$eval(c.typeaheadFocusFirst) !== !1, F = c.typeaheadSelectOnExact ? a.$eval(c.typeaheadSelectOnExact) : !1, G = e(c.ngModel), H = e(c.ngModel + "($$$p)"), I = function(b, c) {
        return angular.isFunction(G(a)) && p && p.$options && p.$options.getterSetter ? H(b, {
            $$$p: c
        }) : G.assign(b, c);
    }, J = l.parse(c.uibTypeahead), K = a.$new(), L = a.$on("$destroy", function() {
        K.$destroy();
    });
    K.$on("$destroy", L);
    var M = "typeahead-" + K.$id + "-" + Math.floor(1e4 * Math.random());
    b.attr({
        "aria-autocomplete": "list",
        "aria-expanded": !1,
        "aria-owns": M
    });
    var N = angular.element("<div uib-typeahead-popup></div>");
    N.attr({
        id: M,
        matches: "matches",
        active: "activeIdx",
        select: "select(activeIdx)",
        "move-in-progress": "moveInProgress",
        query: "query",
        position: "position"
    }), angular.isDefined(c.typeaheadTemplateUrl) && N.attr("template-url", c.typeaheadTemplateUrl), 
    angular.isDefined(c.typeaheadPopupTemplateUrl) && N.attr("popup-template-url", c.typeaheadPopupTemplateUrl);
    var O = function() {
        K.matches = [], K.activeIdx = -1, b.attr("aria-expanded", !1);
    }, P = function(a) {
        return M + "-option-" + a;
    };
    K.$watch("activeIdx", function(a) {
        0 > a ? b.removeAttr("aria-activedescendant") : b.attr("aria-activedescendant", P(a));
    });
    var Q = function(a, b) {
        return K.matches.length > b && a ? a.toUpperCase() === K.matches[b].label.toUpperCase() : !1;
    }, R = function(c) {
        var d = {
            $viewValue: c
        };
        x(a, !0), A(a, !1), f.when(J.source(a, d)).then(function(e) {
            var f = c === o.$viewValue;
            if (f && t) if (e && e.length > 0) {
                K.activeIdx = E ? 0 : -1, A(a, !1), K.matches.length = 0;
                for (var g = 0; g < e.length; g++) d[J.itemName] = e[g], K.matches.push({
                    id: P(g),
                    label: J.viewMapper(K, d),
                    model: e[g]
                });
                K.query = c, n(), b.attr("aria-expanded", !0), F && 1 === K.matches.length && Q(c, 0) && K.select(0);
            } else O(), A(a, !0);
            f && x(a, !1);
        }, function() {
            O(), x(a, !1), A(a, !0);
        });
    };
    C && (angular.element(i).bind("resize", m), h.find("body").bind("scroll", m));
    var S;
    K.moveInProgress = !1, K.query = void 0;
    var T, U = function(a) {
        T = g(function() {
            R(a);
        }, v);
    }, V = function() {
        T && g.cancel(T);
    };
    O(), K.select = function(d) {
        var e, f, h = {};
        u = !0, h[J.itemName] = f = K.matches[d].model, e = J.modelMapper(a, h), I(a, e), 
        o.$setValidity("editable", !0), o.$setValidity("parse", !0), y(a, {
            $item: f,
            $model: e,
            $label: J.viewMapper(a, h)
        }), O(), K.$eval(c.typeaheadFocusOnSelect) !== !1 && g(function() {
            b[0].focus();
        }, 0, !1);
    }, b.bind("keydown", function(a) {
        if (0 !== K.matches.length && -1 !== q.indexOf(a.which)) {
            if (-1 === K.activeIdx && (9 === a.which || 13 === a.which)) return O(), void K.$digest();
            a.preventDefault(), 40 === a.which ? (K.activeIdx = (K.activeIdx + 1) % K.matches.length, 
            K.$digest()) : 38 === a.which ? (K.activeIdx = (K.activeIdx > 0 ? K.activeIdx : K.matches.length) - 1, 
            K.$digest()) : 13 === a.which || 9 === a.which ? K.$apply(function() {
                K.select(K.activeIdx);
            }) : 27 === a.which && (a.stopPropagation(), O(), K.$digest());
        }
    }), b.bind("blur", function() {
        z && K.matches.length && -1 !== K.activeIdx && !u && (u = !0, K.$apply(function() {
            K.select(K.activeIdx);
        })), t = !1, u = !1;
    });
    var W = function(a) {
        b[0] !== a.target && 3 !== a.which && 0 !== K.matches.length && (O(), j.$$phase || K.$digest());
    };
    h.bind("click", W), a.$on("$destroy", function() {
        h.unbind("click", W), (C || D) && X.remove(), C && (angular.element(i).unbind("resize", m), 
        h.find("body").unbind("scroll", m)), N.remove();
    });
    var X = d(N)(K);
    C ? h.find("body").append(X) : D !== !1 ? angular.element(h[0].getElementById(D)).append(X) : b.after(X), 
    this.init = function(b, c) {
        o = b, p = c, o.$parsers.unshift(function(b) {
            return t = !0, 0 === s || b && b.length >= s ? v > 0 ? (V(), U(b)) : R(b) : (x(a, !1), 
            V(), O()), w ? b : b ? void o.$setValidity("editable", !1) : (o.$setValidity("editable", !0), 
            null);
        }), o.$formatters.push(function(b) {
            var c, d, e = {};
            return w || o.$setValidity("editable", !0), B ? (e.$model = b, B(a, e)) : (e[J.itemName] = b, 
            c = J.viewMapper(a, e), e[J.itemName] = void 0, d = J.viewMapper(a, e), c !== d ? c : b);
        });
    };
} ]).directive("uibTypeahead", function() {
    return {
        controller: "UibTypeaheadController",
        require: [ "ngModel", "^?ngModelOptions", "uibTypeahead" ],
        link: function(a, b, c, d) {
            d[2].init(d[0], d[1]);
        }
    };
}).directive("uibTypeaheadPopup", function() {
    return {
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "&",
            moveInProgress: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: function(a, b) {
            return b.popupTemplateUrl || "template/typeahead/typeahead-popup.html";
        },
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0;
            }, a.isActive = function(b) {
                return a.active == b;
            }, a.selectActive = function(b) {
                a.active = b;
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                });
            };
        }
    };
}).directive("uibTypeaheadMatch", [ "$templateRequest", "$compile", "$parse", function(a, b, c) {
    return {
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(d, e, f) {
            var g = c(f.templateUrl)(d.$parent) || "template/typeahead/typeahead-match.html";
            a(g).then(function(a) {
                b(a.trim())(d, function(a) {
                    e.replaceWith(a);
                });
            });
        }
    };
} ]).filter("uibTypeaheadHighlight", [ "$sce", "$injector", "$log", function(a, b, c) {
    function d(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }
    function e(a) {
        return /<.*>/g.test(a);
    }
    var f;
    return f = b.has("$sanitize"), function(b, g) {
        return !f && e(b) && c.warn("Unsafe use of typeahead please use ngSanitize"), b = g ? ("" + b).replace(new RegExp(d(g), "gi"), "<strong>$&</strong>") : b, 
        f || (b = a.trustAsHtml(b)), b;
    };
} ]), angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning", !1).service("typeaheadParser", [ "$parse", "uibTypeaheadParser", "$log", "$typeaheadSuppressWarning", function(a, b, c, d) {
    return d || c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."), 
    b;
} ]).directive("typeahead", [ "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$uibPosition", "typeaheadParser", "$log", "$typeaheadSuppressWarning", function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = [ 9, 13, 27, 38, 40 ], m = 200;
    return {
        require: [ "ngModel", "^?ngModelOptions" ],
        link: function(n, o, p, q) {
            function r() {
                N.moveInProgress || (N.moveInProgress = !0, N.$digest()), V && d.cancel(V), V = d(function() {
                    N.matches.length && s(), N.moveInProgress = !1;
                }, m);
            }
            function s() {
                N.position = F ? h.offset(o) : h.position(o), N.position.top += o.prop("offsetHeight");
            }
            k || j.warn("typeahead is now deprecated. Use uib-typeahead instead.");
            var t = q[0], u = q[1], v = n.$eval(p.typeaheadMinLength);
            v || 0 === v || (v = 1);
            var w, x, y = n.$eval(p.typeaheadWaitMs) || 0, z = n.$eval(p.typeaheadEditable) !== !1, A = b(p.typeaheadLoading).assign || angular.noop, B = b(p.typeaheadOnSelect), C = angular.isDefined(p.typeaheadSelectOnBlur) ? n.$eval(p.typeaheadSelectOnBlur) : !1, D = b(p.typeaheadNoResults).assign || angular.noop, E = p.typeaheadInputFormatter ? b(p.typeaheadInputFormatter) : void 0, F = p.typeaheadAppendToBody ? n.$eval(p.typeaheadAppendToBody) : !1, G = p.typeaheadAppendToElementId || !1, H = n.$eval(p.typeaheadFocusFirst) !== !1, I = p.typeaheadSelectOnExact ? n.$eval(p.typeaheadSelectOnExact) : !1, J = b(p.ngModel), K = b(p.ngModel + "($$$p)"), L = function(a, b) {
                return angular.isFunction(J(n)) && u && u.$options && u.$options.getterSetter ? K(a, {
                    $$$p: b
                }) : J.assign(a, b);
            }, M = i.parse(p.typeahead), N = n.$new(), O = n.$on("$destroy", function() {
                N.$destroy();
            });
            N.$on("$destroy", O);
            var P = "typeahead-" + N.$id + "-" + Math.floor(1e4 * Math.random());
            o.attr({
                "aria-autocomplete": "list",
                "aria-expanded": !1,
                "aria-owns": P
            });
            var Q = angular.element("<div typeahead-popup></div>");
            Q.attr({
                id: P,
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                "move-in-progress": "moveInProgress",
                query: "query",
                position: "position"
            }), angular.isDefined(p.typeaheadTemplateUrl) && Q.attr("template-url", p.typeaheadTemplateUrl), 
            angular.isDefined(p.typeaheadPopupTemplateUrl) && Q.attr("popup-template-url", p.typeaheadPopupTemplateUrl);
            var R = function() {
                N.matches = [], N.activeIdx = -1, o.attr("aria-expanded", !1);
            }, S = function(a) {
                return P + "-option-" + a;
            };
            N.$watch("activeIdx", function(a) {
                0 > a ? o.removeAttr("aria-activedescendant") : o.attr("aria-activedescendant", S(a));
            });
            var T = function(a, b) {
                return N.matches.length > b && a ? a.toUpperCase() === N.matches[b].label.toUpperCase() : !1;
            }, U = function(a) {
                var b = {
                    $viewValue: a
                };
                A(n, !0), D(n, !1), c.when(M.source(n, b)).then(function(c) {
                    var d = a === t.$viewValue;
                    if (d && w) if (c && c.length > 0) {
                        N.activeIdx = H ? 0 : -1, D(n, !1), N.matches.length = 0;
                        for (var e = 0; e < c.length; e++) b[M.itemName] = c[e], N.matches.push({
                            id: S(e),
                            label: M.viewMapper(N, b),
                            model: c[e]
                        });
                        N.query = a, s(), o.attr("aria-expanded", !0), I && 1 === N.matches.length && T(a, 0) && N.select(0);
                    } else R(), D(n, !0);
                    d && A(n, !1);
                }, function() {
                    R(), A(n, !1), D(n, !0);
                });
            };
            F && (angular.element(f).bind("resize", r), e.find("body").bind("scroll", r));
            var V;
            N.moveInProgress = !1, R(), N.query = void 0;
            var W, X = function(a) {
                W = d(function() {
                    U(a);
                }, y);
            }, Y = function() {
                W && d.cancel(W);
            };
            t.$parsers.unshift(function(a) {
                return w = !0, 0 === v || a && a.length >= v ? y > 0 ? (Y(), X(a)) : U(a) : (A(n, !1), 
                Y(), R()), z ? a : a ? void t.$setValidity("editable", !1) : (t.$setValidity("editable", !0), 
                null);
            }), t.$formatters.push(function(a) {
                var b, c, d = {};
                return z || t.$setValidity("editable", !0), E ? (d.$model = a, E(n, d)) : (d[M.itemName] = a, 
                b = M.viewMapper(n, d), d[M.itemName] = void 0, c = M.viewMapper(n, d), b !== c ? b : a);
            }), N.select = function(a) {
                var b, c, e = {};
                x = !0, e[M.itemName] = c = N.matches[a].model, b = M.modelMapper(n, e), L(n, b), 
                t.$setValidity("editable", !0), t.$setValidity("parse", !0), B(n, {
                    $item: c,
                    $model: b,
                    $label: M.viewMapper(n, e)
                }), R(), N.$eval(p.typeaheadFocusOnSelect) !== !1 && d(function() {
                    o[0].focus();
                }, 0, !1);
            }, o.bind("keydown", function(a) {
                if (0 !== N.matches.length && -1 !== l.indexOf(a.which)) {
                    if (-1 === N.activeIdx && (9 === a.which || 13 === a.which)) return R(), void N.$digest();
                    a.preventDefault(), 40 === a.which ? (N.activeIdx = (N.activeIdx + 1) % N.matches.length, 
                    N.$digest()) : 38 === a.which ? (N.activeIdx = (N.activeIdx > 0 ? N.activeIdx : N.matches.length) - 1, 
                    N.$digest()) : 13 === a.which || 9 === a.which ? N.$apply(function() {
                        N.select(N.activeIdx);
                    }) : 27 === a.which && (a.stopPropagation(), R(), N.$digest());
                }
            }), o.bind("blur", function() {
                C && N.matches.length && -1 !== N.activeIdx && !x && (x = !0, N.$apply(function() {
                    N.select(N.activeIdx);
                })), w = !1, x = !1;
            });
            var Z = function(a) {
                o[0] !== a.target && 3 !== a.which && 0 !== N.matches.length && (R(), g.$$phase || N.$digest());
            };
            e.bind("click", Z), n.$on("$destroy", function() {
                e.unbind("click", Z), (F || G) && $.remove(), F && (angular.element(f).unbind("resize", r), 
                e.find("body").unbind("scroll", r)), Q.remove();
            });
            var $ = a(Q)(N);
            F ? e.find("body").append($) : G !== !1 ? angular.element(e[0].getElementById(G)).append($) : o.after($);
        }
    };
} ]).directive("typeaheadPopup", [ "$typeaheadSuppressWarning", "$log", function(a, b) {
    return {
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "&",
            moveInProgress: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: function(a, b) {
            return b.popupTemplateUrl || "template/typeahead/typeahead-popup.html";
        },
        link: function(c, d, e) {
            a || b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."), 
            c.templateUrl = e.templateUrl, c.isOpen = function() {
                return c.matches.length > 0;
            }, c.isActive = function(a) {
                return c.active == a;
            }, c.selectActive = function(a) {
                c.active = a;
            }, c.selectMatch = function(a) {
                c.select({
                    activeIdx: a
                });
            };
        }
    };
} ]).directive("typeaheadMatch", [ "$templateRequest", "$compile", "$parse", "$typeaheadSuppressWarning", "$log", function(a, b, c, d, e) {
    return {
        restrict: "EA",
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(f, g, h) {
            d || e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");
            var i = c(h.templateUrl)(f.$parent) || "template/typeahead/typeahead-match.html";
            a(i).then(function(a) {
                b(a.trim())(f, function(a) {
                    g.replaceWith(a);
                });
            });
        }
    };
} ]).filter("typeaheadHighlight", [ "$sce", "$injector", "$log", "$typeaheadSuppressWarning", function(a, b, c, d) {
    function e(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }
    function f(a) {
        return /<.*>/g.test(a);
    }
    var g;
    return g = b.has("$sanitize"), function(b, h) {
        return d || c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."), 
        !g && f(b) && c.warn("Unsafe use of typeahead please use ngSanitize"), b = h ? ("" + b).replace(new RegExp(e(h), "gi"), "<strong>$&</strong>") : b, 
        g || (b = a.trustAsHtml(b)), b;
    };
} ]), angular.module("template/accordion/accordion-group.html", []).run([ "$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n');
} ]), angular.module("template/accordion/accordion.html", []).run([ "$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>');
} ]), angular.module("template/alert/alert.html", []).run([ "$templateCache", function(a) {
    a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n');
} ]), angular.module("template/carousel/carousel.html", []).run([ "$templateCache", function(a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>');
} ]), angular.module("template/carousel/slide.html", []).run([ "$templateCache", function(a) {
    a.put("template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n');
} ]), angular.module("template/datepicker/datepicker.html", []).run([ "$templateCache", function(a) {
    a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>');
} ]), angular.module("template/datepicker/day.html", []).run([ "$templateCache", function(a) {
    a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
} ]), angular.module("template/datepicker/month.html", []).run([ "$templateCache", function(a) {
    a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
} ]), angular.module("template/datepicker/popup.html", []).run([ "$templateCache", function(a) {
    a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n');
} ]), angular.module("template/datepicker/year.html", []).run([ "$templateCache", function(a) {
    a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
} ]), angular.module("template/modal/backdrop.html", []).run([ "$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n');
} ]), angular.module("template/modal/window.html", []).run([ "$templateCache", function(a) {
    a.put("template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n');
} ]), angular.module("template/pagination/pager.html", []).run([ "$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n');
} ]), angular.module("template/pagination/pagination.html", []).run([ "$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n');
} ]), angular.module("template/tooltip/tooltip-html-popup.html", []).run([ "$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-popup.html", '<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n');
} ]), angular.module("template/tooltip/tooltip-popup.html", []).run([ "$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n');
} ]), angular.module("template/tooltip/tooltip-template-popup.html", []).run([ "$templateCache", function(a) {
    a.put("template/tooltip/tooltip-template-popup.html", '<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n');
} ]), angular.module("template/popover/popover-html.html", []).run([ "$templateCache", function(a) {
    a.put("template/popover/popover-html.html", '<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n');
} ]), angular.module("template/popover/popover-template.html", []).run([ "$templateCache", function(a) {
    a.put("template/popover/popover-template.html", '<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n');
} ]), angular.module("template/popover/popover.html", []).run([ "$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n');
} ]), angular.module("template/progressbar/bar.html", []).run([ "$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n');
} ]), angular.module("template/progressbar/progress.html", []).run([ "$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>');
} ]), angular.module("template/progressbar/progressbar.html", []).run([ "$templateCache", function(a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n</div>\n');
} ]), angular.module("template/rating/rating.html", []).run([ "$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n');
} ]), angular.module("template/tabs/tab.html", []).run([ "$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n');
} ]), angular.module("template/tabs/tabset.html", []).run([ "$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n');
} ]), angular.module("template/timepicker/timepicker.html", []).run([ "$templateCache", function(a) {
    a.put("template/timepicker/timepicker.html", '<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n');
} ]), angular.module("template/typeahead/typeahead-match.html", []).run([ "$templateCache", function(a) {
    a.put("template/typeahead/typeahead-match.html", '<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n');
} ]), angular.module("template/typeahead/typeahead-popup.html", []).run([ "$templateCache", function(a) {
    a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n');
} ]), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');

angular.module("onemetric.service.google", []).factory("Google", [ "$http", function($http) {
    return {
        fetchAccounts: function(site, account, property, done) {
            var object = {
                accounts: [],
                properties: [],
                profiles: []
            };
            var params = [];
            if (account) {
                params.push("account=" + encodeURIComponent(account));
            }
            if (property) {
                params.push("property=" + encodeURIComponent(property));
            }
            $http({
                method: "GET",
                url: "/api/site/" + site._id + "/accounts/google?" + params.join("&")
            }).then(function(response) {
                object.accounts = response.data.accounts;
                object.properties = response.data.properties;
                object.profiles = response.data.profiles;
                done(null, object);
            }, function(error) {
                done(error);
            });
            return object;
        }
    };
} ]);

angular.module("onemetric.service.report", [ "ngResource" ]).factory("Report", [ "$resource", function($resource) {
    var Report = $resource("/api/report/:id", {
        id: "@_id"
    });
    return Report;
} ]);

angular.module("onemetric.service.site", [ "ngResource" ]).factory("Site", [ "$resource", function($resource) {
    var dateFormatterInterceptor = function(response) {
        [ "reportStart", "reportEnd", "benchmarkStart", "benchmarkEnd" ].forEach(function(prop) {
            if (response.resource[prop]) {
                response.resource[prop] = new Date(Date.parse(response.resource[prop]));
            }
        });
        return response;
    };
    var Site = $resource("/api/site/:id", {
        id: "@_id"
    }, {
        update: {
            method: "PUT",
            interceptor: {
                response: dateFormatterInterceptor
            }
        },
        get: {
            method: "GET",
            interceptor: {
                response: dateFormatterInterceptor
            }
        }
    });
    Site.prototype.isValid = function() {
        return this._id ? this.isDeepValid() : this.isBasicValid();
    };
    Site.prototype.isBasicValid = function() {
        return this.name && this.name.trim().length > 0 && this.url && this.url.trim().length > 0;
    };
    Site.prototype.isDeepValid = function() {
        return this.isBasicValid() && this.reportURLs && this.reportURLs.length > 0 && this.benchmarkURLs && this.benchmarkURLs.length > 0 && this.reportStart && this.reportEnd && this.benchmarkStart && this.benchmarkEnd;
    };
    Site.prototype.generateValidationFeedback = function() {
        var errors = [];
        if (!this._isFullString(this.name)) {
            errors.push("Please provide a name.");
        }
        if (!this._isFullString(this.url)) {
            errors.push("Please provide a url.");
        }
        if (!this._isValidDateRange(this.benchmarkStart, this.benchmarkEnd)) {
            errors.push("Please provide a benchmark date range.");
        }
        if (!this._isValidDateRange(this.reportStart, this.reportEnd)) {
            errors.push("Please provide a report date range.");
        }
        if (!(this.benchmarkStart && this.benchmarkEnd && this.reportStart && this.reportEnd && (this.benchmarkEnd.getTime() - this.benchmarkStart.getTime() == this.reportEnd.getTime() - this.reportStart.getTime() || (this.benchmarkEnd.getTime() - this.benchmarkStart.getTime()) % (this.reportEnd.getTime() - this.reportStart.getTime()) == 0))) {
            errors.push("Please provide a benchmark date range that is equal-to or a multiple of the report date range.");
        }
        if (!this._isValidArrayOfUrls(this.reportURLs)) {
            errors.push("Please provide a set of valid report URLs.");
        }
        if (!this._isValidArrayOfUrls(this.benchmarkURLs)) {
            errors.push("Please provide a set of valid sample URLs.");
        }
        return errors;
    };
    Site.prototype.isGoogleAuthenticated = function() {
        return this.auth && this.auth.google && this.auth.google.token;
    };
    Site.prototype._isFullString = function(string) {
        return string && string.trim().length > 0;
    };
    Site.prototype._isValidDateRange = function(date1, date2) {
        return date1 && date2 && date1.getTime() < date2.getTime();
    };
    Site.prototype._isValidArrayOfUrls = function(array) {
        if (array && array.length > 0) {
            return array.filter(function(url) {
                return url.trim().length > 0 && url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g) != null;
            }).length > 0;
        } else {
            return false;
        }
    };
    return Site;
} ]);

angular.module("onemetric.controller.app", [ "ui.bootstrap", "daterangepicker", "onemetric.service.site" ]).controller("AppController", [ "$window", "$scope", "$state", "$stateParams", "$uibModal", "Site", function($window, $scope, $state, $stateParams, $uibModal, Site) {
    $scope.sites = Site.query();
    $scope.addSite = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "/partials/siteModal.html",
            controller: "AddSiteModal",
            size: "md",
            resolve: {
                doneCallback: function() {
                    return function(site) {
                        $scope.sites = Site.query();
                        $state.go("app.site", {
                            siteId: site._id
                        });
                    };
                }
            }
        });
    };
} ]).controller("AddSiteModal", [ "$scope", "$uibModalInstance", "Site", "doneCallback", function($scope, $uibModalInstance, Site, doneCallback) {
    $scope.site = new Site();
    $scope.cancel = function() {
        $uibModalInstance.dismiss("cancel");
    };
    $scope.invalidInput = function() {
        return !$scope.site.isValid();
    };
    $scope.add = function() {
        $scope.site.$save(function() {
            $uibModalInstance.close();
            doneCallback($scope.site);
        });
    };
} ]);

angular.module("onemetric.controller.report", [ "ui.bootstrap", "onemetric.service.site", "onemetric.service.report" ]).controller("ReportController", [ "$window", "$scope", "$state", "$stateParams", "Report", function($window, $scope, $state, $stateParams, Report) {
    $scope.report = Report.get({
        id: $stateParams.reportId
    }, function() {
        document.title = "Report";
    }, function(response) {
        $state.go("notPermitted", {
            status: response.status
        });
    });
} ]);

angular.module("onemetric.controller.site", [ "ui.bootstrap", "daterangepicker", "onemetric.service.site", "onemetric.service.report", "onemetric.service.google" ]).controller("SiteController", [ "$window", "$scope", "$state", "$stateParams", "Site", "Report", "Google", function($window, $scope, $state, $stateParams, Site, Report, Google) {
    var now = new Date();
    var lastWeek = new Date(now.getTime() - 864e5 * 7);
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
    $scope.datePicker = {
        benchmarkDates: {
            startDate: lastWeek,
            endDate: now
        },
        reportDates: {
            startDate: lastWeek,
            endDate: now
        }
    };
    $scope.benchmarkURLsString = function(urls) {
        if ($scope.site && typeof urls != "undefined") {
            $scope.site.benchmarkURLs = urls.split("\n");
        }
        return $scope.site && $scope.site.benchmarkURLs ? $scope.site.benchmarkURLs.join("\n") : "";
    };
    $scope.reportURLsString = function(urls) {
        if ($scope.site && typeof urls != "undefined") {
            $scope.site.reportURLs = urls.split("\n");
        }
        return $scope.site && $scope.site.reportURLs ? $scope.site.reportURLs.join("\n") : "";
    };
    $scope.$watch("datePicker.benchmarkDates.startDate", function() {
        $scope.site.benchmarkStart = new Date($scope.datePicker.benchmarkDates.startDate);
    });
    $scope.$watch("datePicker.benchmarkDates.endDate", function() {
        $scope.site.benchmarkEnd = new Date($scope.datePicker.benchmarkDates.endDate);
    });
    $scope.$watch("datePicker.reportDates.startDate", function() {
        $scope.site.reportStart = new Date($scope.datePicker.reportDates.startDate);
    });
    $scope.$watch("datePicker.reportDates.endDate", function() {
        $scope.site.reportEnd = new Date($scope.datePicker.reportDates.endDate);
    });
    if ($stateParams.siteId) {
        $scope.site = Site.get({
            id: $stateParams.siteId
        }, function() {
            document.title = $scope.site.name;
            $scope.site.benchmarkStart = $scope.datePicker.benchmarkDates.startDate = $scope.site.benchmarkStart || lastWeek;
            $scope.site.benchmarkEnd = $scope.datePicker.benchmarkDates.endDate = $scope.site.benchmarkEnd || now;
            $scope.site.reportStart = $scope.datePicker.reportDates.startDate = $scope.site.reportStart || lastWeek;
            $scope.site.reportEnd = $scope.datePicker.reportDates.endDate = $scope.site.reportEnd || now;
            loadGoogleAccounts(function() {
                setTimeout(function() {
                    $scope.$watch("site.auth.google.account.account", function() {
                        if ($scope.site && $scope.site.auth && $scope.site.auth.google && $scope.site.auth.google.account) {
                            $scope.site.auth.google.account.property = null;
                        }
                        loadGoogleAccounts();
                    });
                    $scope.$watch("site.auth.google.account.property", function() {
                        if ($scope.site && $scope.site.auth && $scope.site.auth.google && $scope.site.auth.google.account) {
                            $scope.site.auth.google.account.profile = null;
                        }
                        loadGoogleAccounts();
                    });
                }, 500);
            });
        }, function(response) {
            $state.go("notPermitted", {
                status: response.status
            });
        });
    } else {
        $scope.site = new Site();
        document.title = "New Site";
    }
    $scope.disableSaveButton = function() {
        return !$scope.site.isValid();
    };
    $scope.generateReport = function() {
        if ($scope.site._id) {
            $scope.site.$update(function() {
                var report = new Report({
                    site: $scope.site._id
                });
                report.$save(function() {
                    $state.go("report", {
                        reportId: report._id
                    });
                });
            });
        }
    };
    $scope.saveAndReport = function() {
        validateAndSave(function() {
            $scope.alerts = [ {
                msg: "Site saved!",
                type: "success"
            } ];
        });
    };
    $scope.save = function() {
        validateAndSave(function() {
            $scope.alerts = [ {
                msg: "Site saved!",
                type: "success"
            } ];
        });
    };
    function validateAndSave(callback) {
        var errors = $scope.site.generateValidationFeedback();
        if (errors.length > 0) {
            $scope.alerts = [];
            errors.forEach(function(error) {
                $scope.alerts.push({
                    msg: error,
                    type: "danger"
                });
            });
        } else {
            $scope.site.$update(callback);
        }
    }
    function loadGoogleAccounts(done) {
        if ($scope.site && $scope.site.auth && $scope.site.auth.google) {
            var account = $scope.site.auth.google.account ? $scope.site.auth.google.account.account : null;
            var property = $scope.site.auth.google.account ? $scope.site.auth.google.account.property : null;
            Google.fetchAccounts($scope.site, account, property, function(err, data) {
                if (err) {
                    $scope.site.auth.google = null;
                } else {
                    if (!$scope.google) {
                        $scope.google = data;
                    }
                    if (account) {
                        $scope.google.properties = data.properties;
                    }
                    if (property) {
                        $scope.google.profiles = data.profiles;
                    }
                }
                done && done();
            });
        }
    }
} ]);

var app = angular.module("onemetric", [ "ui.router", "onemetric.controller.app", "onemetric.controller.site", "onemetric.controller.report" ]);

angular.module("onemetric").config([ "$stateProvider", function($stateProvider) {
    $stateProvider.state("notPermitted", {
        params: {
            status: 404
        },
        templateUrl: "/partials/error.html",
        controller: function($scope, $stateParams) {
            $scope.errorMessage = $stateParams.status == 404 ? "Object not found" : "Not permitted";
        }
    }).state("app", {
        url: "/",
        templateUrl: "/partials/app.html",
        controller: "AppController"
    }).state("app.site", {
        url: "site/:siteId",
        templateUrl: "/partials/site.html",
        controller: "SiteController"
    }).state("report", {
        url: "/report/:reportId",
        templateUrl: "/partials/report.html",
        controller: "ReportController"
    });
} ]).run([ "$state", "$rootScope", "$location", "$window", function($state, $rootScope, $location, $window) {
    if (window.location.hash == "") {
        $state.go("app");
    }
} ]);