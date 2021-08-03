webpackJsonp([111], [, , function(e, t, n) {
    var o = n(17),
        r = n(73),
        i = n(50),
        E = n(51),
        a = n(64),
        _ = function(e, t, n) {
            var s, u, c, T, I = e & _.F,
                N = e & _.G,
                S = e & _.S,
                O = e & _.P,
                l = e & _.B,
                A = N ? o : S ? o[t] || (o[t] = {}) : (o[t] || {}).prototype,
                R = N ? r : r[t] || (r[t] = {}),
                h = R.prototype || (R.prototype = {});
            N && (n = t);
            for (s in n) c = ((u = !I && A && void 0 !== A[s]) ? A : n)[s], T = l && u ? a(c, o) : O && "function" == typeof c ? a(Function.call, c) : c, A && E(A, s, c, e & _.U), R[s] != c && i(R, s, T), O && h[s] != c && (h[s] = c)
        };
    o.core = r, _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128, e.exports = _
}, , , , , , , , , , , , , function(e, t, n) {
    var o = n(20);
    e.exports = function(e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, , function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, , function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, , function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, , , , function(e, t, n) {
    var o = n(190)("wks"),
        r = n(118),
        i = n(17).Symbol,
        E = "function" == typeof i;
    (e.exports = function(e) {
        return o[e] || (o[e] = E && i[e] || (E ? i : r)("Symbol." + e))
    }).store = o
}, , , function(e, t, n) {
    e.exports = !n(19)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var o = n(15),
        r = n(393),
        i = n(74),
        E = Object.defineProperty;
    t.f = n(29) ? Object.defineProperty : function(e, t, n) {
        if (o(e), t = i(t, !0), o(n), r) try {
            return E(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    var o = n(76),
        r = Math.min;
    e.exports = function(e) {
        return e > 0 ? r(o(e), 9007199254740991) : 0
    }
}, , , , , function(e, t, n) {
    var o = n(75);
    e.exports = function(e) {
        return Object(o(e))
    }
}, , , , , , function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, , , , , , , function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    var o = n(30),
        r = n(117);
    e.exports = n(29) ? function(e, t, n) {
        return o.f(e, t, r(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var o = n(17),
        r = n(50),
        i = n(49),
        E = n(118)("src"),
        a = Function.toString,
        _ = ("" + a).split("toString");
    n(73).inspectSource = function(e) {
        return a.call(e)
    }, (e.exports = function(e, t, n, a) {
        var s = "function" == typeof n;
        s && (i(n, "name") || r(n, "name", t)), e[t] !== n && (s && (i(n, E) || r(n, E, e[t] ? "" + e[t] : _.join(String(t)))), e === o ? e[t] = n : a ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[E] || a.call(this)
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(19),
        i = n(75),
        E = /"/g,
        a = function(e, t, n, o) {
            var r = String(i(e)),
                a = "<" + t;
            return "" !== n && (a += " " + n + '="' + String(o).replace(E, "&quot;") + '"'), a + ">" + r + "</" + t + ">"
        };
    e.exports = function(e, t) {
        var n = {};
        n[e] = t(a), o(o.P + o.F * r(function() {
            var t = "" [e]('"');
            return t !== t.toLowerCase() || t.split('"').length > 3
        }), "String", n)
    }
}, , , , , , , function(e, t, n) {
    var o = n(161),
        r = n(75);
    e.exports = function(e) {
        return o(r(e))
    }
}, function(e, t, n) {
    var o = n(162),
        r = n(117),
        i = n(59),
        E = n(74),
        a = n(49),
        _ = n(393),
        s = Object.getOwnPropertyDescriptor;
    t.f = n(29) ? s : function(e, t) {
        if (e = i(e), t = E(t, !0), _) try {
            return s(e, t)
        } catch (e) {}
        if (a(e, t)) return r(!o.f.call(e, t), e[t])
    }
}, function(e, t, n) {
    var o = n(49),
        r = n(36),
        i = n(273)("IE_PROTO"),
        E = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? E : null
    }
}, , , function(e, t, n) {
    var o = n(42);
    e.exports = function(e, t, n) {
        if (o(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, o) {
                    return e.call(t, n, o)
                };
            case 3:
                return function(n, o, r) {
                    return e.call(t, n, o, r)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t, n) {
    "use strict";
    var o = n(19);
    e.exports = function(e, t) {
        return !!e && o(function() {
            t ? e.call(null, function() {}, 1) : e.call(null)
        })
    }
}, , , , , , function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }

    function i(e) {
        if (c === clearTimeout) return clearTimeout(e);
        if ((c === o || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
        try {
            return c(e)
        } catch (t) {
            try {
                return c.call(null, e)
            } catch (t) {
                return c.call(this, e)
            }
        }
    }

    function E() {
        S && I && (S = !1, I.length ? N = I.concat(N) : O = -1, N.length && a())
    }

    function a() {
        if (!S) {
            var e = r(E);
            S = !0;
            for (var t = N.length; t;) {
                for (I = N, N = []; ++O < t;) I && I[O].run();
                O = -1, t = N.length
            }
            I = null, S = !1, i(e)
        }
    }

    function _(e, t) {
        this.fun = e, this.array = t
    }

    function s() {}
    var u, c, T = e.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            u = n
        }
        try {
            c = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            c = o
        }
    }();
    var I, N = [],
        S = !1,
        O = -1;
    T.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        N.push(new _(e, t)), 1 !== N.length || S || r(a)
    }, _.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, T.title = "browser", T.browser = !0, T.env = {}, T.argv = [], T.version = "", T.versions = {}, T.on = s, T.addListener = s, T.once = s, T.off = s, T.removeListener = s, T.removeAllListeners = s, T.emit = s, T.prependListener = s, T.prependOnceListener = s, T.listeners = function(e) {
        return []
    }, T.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, T.cwd = function() {
        return "/"
    }, T.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, T.umask = function() {
        return 0
    }
}, function(e, t) {
    var n = e.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var o = n(20);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, r;
        if (t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        if ("function" == typeof(n = e.valueOf) && !o(r = n.call(e))) return r;
        if (!t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t) {
    var n = Math.ceil,
        o = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
    }
}, function(e, t, n) {
    var o = n(2),
        r = n(73),
        i = n(19);
    e.exports = function(e, t) {
        var n = (r.Object || {})[e] || Object[e],
            E = {};
        E[e] = t(n), o(o.S + o.F * i(function() {
            n(1)
        }), "Object", E)
    }
}, function(e, t, n) {
    var o = n(64),
        r = n(161),
        i = n(36),
        E = n(31),
        a = n(290);
    e.exports = function(e, t) {
        var n = 1 == e,
            _ = 2 == e,
            s = 3 == e,
            u = 4 == e,
            c = 6 == e,
            T = 5 == e || c,
            I = t || a;
        return function(t, a, N) {
            for (var S, O, l = i(t), A = r(l), R = o(a, N, 3), h = E(A.length), D = 0, d = n ? I(t, h) : _ ? I(t, 0) : void 0; h > D; D++)
                if ((T || D in A) && (S = A[D], O = R(S, D, l), e))
                    if (n) d[D] = O;
                    else if (O) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return S;
                case 6:
                    return D;
                case 2:
                    d.push(S)
            } else if (u) return !1;
            return c ? -1 : s || u ? u : d
        }
    }
}, , , , , , , , , , function(e, t, n) {
    "use strict";
    if (n(29)) {
        var o = n(119),
            r = n(17),
            i = n(19),
            E = n(2),
            a = n(200),
            _ = n(296),
            s = n(64),
            u = n(125),
            c = n(117),
            T = n(50),
            I = n(127),
            N = n(76),
            S = n(31),
            O = n(419),
            l = n(121),
            A = n(74),
            R = n(49),
            h = n(163),
            D = n(20),
            d = n(36),
            f = n(287),
            L = n(122),
            C = n(61),
            M = n(123).f,
            m = n(289),
            p = n(118),
            y = n(26),
            v = n(78),
            g = n(191),
            U = n(198),
            G = n(292),
            P = n(140),
            b = n(195),
            F = n(124),
            w = n(291),
            B = n(409),
            H = n(30),
            V = n(60),
            Y = H.f,
            k = V.f,
            W = r.RangeError,
            x = r.TypeError,
            K = r.Uint8Array,
            j = Array.prototype,
            J = _.ArrayBuffer,
            X = _.DataView,
            Q = v(0),
            q = v(2),
            $ = v(3),
            z = v(4),
            Z = v(5),
            ee = v(6),
            te = g(!0),
            ne = g(!1),
            oe = G.values,
            re = G.keys,
            ie = G.entries,
            Ee = j.lastIndexOf,
            ae = j.reduce,
            _e = j.reduceRight,
            se = j.join,
            ue = j.sort,
            ce = j.slice,
            Te = j.toString,
            Ie = j.toLocaleString,
            Ne = y("iterator"),
            Se = y("toStringTag"),
            Oe = p("typed_constructor"),
            le = p("def_constructor"),
            Ae = a.CONSTR,
            Re = a.TYPED,
            he = a.VIEW,
            De = v(1, function(e, t) {
                return Me(U(e, e[le]), t)
            }),
            de = i(function() {
                return 1 === new K(new Uint16Array([1]).buffer)[0]
            }),
            fe = !!K && !!K.prototype.set && i(function() {
                new K(1).set({})
            }),
            Le = function(e, t) {
                var n = N(e);
                if (n < 0 || n % t) throw W("Wrong offset!");
                return n
            },
            Ce = function(e) {
                if (D(e) && Re in e) return e;
                throw x(e + " is not a typed array!")
            },
            Me = function(e, t) {
                if (!(D(e) && Oe in e)) throw x("It is not a typed array constructor!");
                return new e(t)
            },
            me = function(e, t) {
                return pe(U(e, e[le]), t)
            },
            pe = function(e, t) {
                for (var n = 0, o = t.length, r = Me(e, o); o > n;) r[n] = t[n++];
                return r
            },
            ye = function(e, t, n) {
                Y(e, t, {
                    get: function() {
                        return this._d[n]
                    }
                })
            },
            ve = function(e) {
                var t, n, o, r, i, E, a = d(e),
                    _ = arguments.length,
                    u = _ > 1 ? arguments[1] : void 0,
                    c = void 0 !== u,
                    T = m(a);
                if (void 0 != T && !f(T)) {
                    for (E = T.call(a), o = [], t = 0; !(i = E.next()).done; t++) o.push(i.value);
                    a = o
                }
                for (c && _ > 2 && (u = s(u, arguments[2], 2)), t = 0, n = S(a.length), r = Me(this, n); n > t; t++) r[t] = c ? u(a[t], t) : a[t];
                return r
            },
            ge = function() {
                for (var e = 0, t = arguments.length, n = Me(this, t); t > e;) n[e] = arguments[e++];
                return n
            },
            Ue = !!K && i(function() {
                Ie.call(new K(1))
            }),
            Ge = function() {
                return Ie.apply(Ue ? ce.call(Ce(this)) : Ce(this), arguments)
            },
            Pe = {
                copyWithin: function(e, t) {
                    return B.call(Ce(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(e) {
                    return z(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(e) {
                    return w.apply(Ce(this), arguments)
                },
                filter: function(e) {
                    return me(this, q(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(e) {
                    return Z(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(e) {
                    return ee(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(e) {
                    Q(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(e) {
                    return ne(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(e) {
                    return te(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(e) {
                    return se.apply(Ce(this), arguments)
                },
                lastIndexOf: function(e) {
                    return Ee.apply(Ce(this), arguments)
                },
                map: function(e) {
                    return De(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(e) {
                    return ae.apply(Ce(this), arguments)
                },
                reduceRight: function(e) {
                    return _e.apply(Ce(this), arguments)
                },
                reverse: function() {
                    for (var e, t = this, n = Ce(t).length, o = Math.floor(n / 2), r = 0; r < o;) e = t[r], t[r++] = t[--n], t[n] = e;
                    return t
                },
                some: function(e) {
                    return $(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(e) {
                    return ue.call(Ce(this), e)
                },
                subarray: function(e, t) {
                    var n = Ce(this),
                        o = n.length,
                        r = l(e, o);
                    return new(U(n, n[le]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, S((void 0 === t ? o : l(t, o)) - r))
                }
            },
            be = function(e, t) {
                return me(this, ce.call(Ce(this), e, t))
            },
            Fe = function(e) {
                Ce(this);
                var t = Le(arguments[1], 1),
                    n = this.length,
                    o = d(e),
                    r = S(o.length),
                    i = 0;
                if (r + t > n) throw W("Wrong length!");
                for (; i < r;) this[t + i] = o[i++]
            },
            we = {
                entries: function() {
                    return ie.call(Ce(this))
                },
                keys: function() {
                    return re.call(Ce(this))
                },
                values: function() {
                    return oe.call(Ce(this))
                }
            },
            Be = function(e, t) {
                return D(e) && e[Re] && "symbol" != typeof t && t in e && String(+t) == String(t)
            },
            He = function(e, t) {
                return Be(e, t = A(t, !0)) ? c(2, e[t]) : k(e, t)
            },
            Ve = function(e, t, n) {
                return !(Be(e, t = A(t, !0)) && D(n) && R(n, "value")) || R(n, "get") || R(n, "set") || n.configurable || R(n, "writable") && !n.writable || R(n, "enumerable") && !n.enumerable ? Y(e, t, n) : (e[t] = n.value, e)
            };
        Ae || (V.f = He, H.f = Ve), E(E.S + E.F * !Ae, "Object", {
            getOwnPropertyDescriptor: He,
            defineProperty: Ve
        }), i(function() {
            Te.call({})
        }) && (Te = Ie = function() {
            return se.call(this)
        });
        var Ye = I({}, Pe);
        I(Ye, we), T(Ye, Ne, we.values), I(Ye, {
            slice: be,
            set: Fe,
            constructor: function() {},
            toString: Te,
            toLocaleString: Ge
        }), ye(Ye, "buffer", "b"), ye(Ye, "byteOffset", "o"), ye(Ye, "byteLength", "l"), ye(Ye, "length", "e"), Y(Ye, Se, {
            get: function() {
                return this[Re]
            }
        }), e.exports = function(e, t, n, _) {
            var s = e + ((_ = !!_) ? "Clamped" : "") + "Array",
                c = "get" + e,
                I = "set" + e,
                N = r[s],
                l = N || {},
                A = N && C(N),
                R = !N || !a.ABV,
                d = {},
                f = N && N.prototype,
                m = function(e, n) {
                    var o = e._d;
                    return o.v[c](n * t + o.o, de)
                },
                p = function(e, n, o) {
                    var r = e._d;
                    _ && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.v[I](n * t + r.o, o, de)
                },
                y = function(e, t) {
                    Y(e, t, {
                        get: function() {
                            return m(this, t)
                        },
                        set: function(e) {
                            return p(this, t, e)
                        },
                        enumerable: !0
                    })
                };
            R ? (N = n(function(e, n, o, r) {
                u(e, N, s, "_d");
                var i, E, a, _, c = 0,
                    I = 0;
                if (D(n)) {
                    if (!(n instanceof J || "ArrayBuffer" == (_ = h(n)) || "SharedArrayBuffer" == _)) return Re in n ? pe(N, n) : ve.call(N, n);
                    i = n, I = Le(o, t);
                    var l = n.byteLength;
                    if (void 0 === r) {
                        if (l % t) throw W("Wrong length!");
                        if ((E = l - I) < 0) throw W("Wrong length!")
                    } else if ((E = S(r) * t) + I > l) throw W("Wrong length!");
                    a = E / t
                } else a = O(n), i = new J(E = a * t);
                for (T(e, "_d", {
                        b: i,
                        o: I,
                        l: E,
                        e: a,
                        v: new X(i)
                    }); c < a;) y(e, c++)
            }), f = N.prototype = L(Ye), T(f, "constructor", N)) : i(function() {
                N(1)
            }) && i(function() {
                new N(-1)
            }) && b(function(e) {
                new N, new N(null), new N(1.5), new N(e)
            }, !0) || (N = n(function(e, n, o, r) {
                u(e, N, s);
                var i;
                return D(n) ? n instanceof J || "ArrayBuffer" == (i = h(n)) || "SharedArrayBuffer" == i ? void 0 !== r ? new l(n, Le(o, t), r) : void 0 !== o ? new l(n, Le(o, t)) : new l(n) : Re in n ? pe(N, n) : ve.call(N, n) : new l(O(n))
            }), Q(A !== Function.prototype ? M(l).concat(M(A)) : M(l), function(e) {
                e in N || T(N, e, l[e])
            }), N.prototype = f, o || (f.constructor = N));
            var v = f[Ne],
                g = !!v && ("values" == v.name || void 0 == v.name),
                U = we.values;
            T(N, Oe, !0), T(f, Re, s), T(f, he, !0), T(f, le, N), (_ ? new N(1)[Se] == s : Se in f) || Y(f, Se, {
                get: function() {
                    return s
                }
            }), d[s] = N, E(E.G + E.W + E.F * (N != l), d), E(E.S, s, {
                BYTES_PER_ELEMENT: t
            }), E(E.S + E.F * i(function() {
                l.of.call(N, 1)
            }), s, {
                from: ve,
                of: ge
            }), "BYTES_PER_ELEMENT" in f || T(f, "BYTES_PER_ELEMENT", t), E(E.P, s, Pe), F(s), E(E.P + E.F * fe, s, {
                set: Fe
            }), E(E.P + E.F * !g, s, we), o || f.toString == Te || (f.toString = Te), E(E.P + E.F * i(function() {
                new N(1).slice()
            }), s, {
                slice: be
            }), E(E.P + E.F * (i(function() {
                return [1, 2].toLocaleString() != new N([1, 2]).toLocaleString()
            }) || !i(function() {
                f.toLocaleString.call([1, 2])
            })), s, {
                toLocaleString: Ge
            }), P[s] = g ? v : U, o || g || T(f, Ne, U)
        }
    } else e.exports = function() {}
}, function(e, t, n) {
    var o = n(414),
        r = n(2),
        i = n(190)("metadata"),
        E = i.store || (i.store = new(n(417))),
        a = function(e, t, n) {
            var r = E.get(e);
            if (!r) {
                if (!n) return;
                E.set(e, r = new o)
            }
            var i = r.get(t);
            if (!i) {
                if (!n) return;
                r.set(t, i = new o)
            }
            return i
        };
    e.exports = {
        store: E,
        map: a,
        has: function(e, t, n) {
            var o = a(t, n, !1);
            return void 0 !== o && o.has(e)
        },
        get: function(e, t, n) {
            var o = a(t, n, !1);
            return void 0 === o ? void 0 : o.get(e)
        },
        set: function(e, t, n, o) {
            a(n, o, !0).set(e, t)
        },
        keys: function(e, t) {
            var n = a(e, t, !1),
                o = [];
            return n && n.forEach(function(e, t) {
                o.push(t)
            }), o
        },
        key: function(e) {
            return void 0 === e || "symbol" == typeof e ? e : String(e)
        },
        exp: function(e) {
            r(r.S, "Reflect", e)
        }
    }
}, , , , , , , , , function(e, t, n) {
    var o = n(118)("meta"),
        r = n(20),
        i = n(49),
        E = n(30).f,
        a = 0,
        _ = Object.isExtensible || function() {
            return !0
        },
        s = !n(19)(function() {
            return _(Object.preventExtensions({}))
        }),
        u = function(e) {
            E(e, o, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        },
        c = e.exports = {
            KEY: o,
            NEED: !1,
            fastKey: function(e, t) {
                if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, o)) {
                    if (!_(e)) return "F";
                    if (!t) return "E";
                    u(e)
                }
                return e[o].i
            },
            getWeak: function(e, t) {
                if (!i(e, o)) {
                    if (!_(e)) return !0;
                    if (!t) return !1;
                    u(e)
                }
                return e[o].w
            },
            onFreeze: function(e) {
                return s && c.NEED && _(e) && !i(e, o) && u(e), e
            }
        }
}, function(e, t, n) {
    var o = n(26)("unscopables"),
        r = Array.prototype;
    void 0 == r[o] && n(50)(r, o, {}), e.exports = function(e) {
        r[o][e] = !0
    }
}, , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t) {
    var n = 0,
        o = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
    }
}, function(e, t) {
    e.exports = !1
}, function(e, t, n) {
    var o = n(395),
        r = n(274);
    e.exports = Object.keys || function(e) {
        return o(e, r)
    }
}, function(e, t, n) {
    var o = n(76),
        r = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        return (e = o(e)) < 0 ? r(e + t, 0) : i(e, t)
    }
}, function(e, t, n) {
    var o = n(15),
        r = n(396),
        i = n(274),
        E = n(273)("IE_PROTO"),
        a = function() {},
        _ = function() {
            var e, t = n(271)("iframe"),
                o = i.length;
            for (t.style.display = "none", n(275).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), _ = e.F; o--;) delete _.prototype[i[o]];
            return _()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (a.prototype = o(e), n = new a, a.prototype = null, n[E] = e) : n = _(), void 0 === t ? n : r(n, t)
    }
}, function(e, t, n) {
    var o = n(395),
        r = n(274).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return o(e, r)
    }
}, function(e, t, n) {
    "use strict";
    var o = n(17),
        r = n(30),
        i = n(29),
        E = n(26)("species");
    e.exports = function(e) {
        var t = o[e];
        i && t && !t[E] && r.f(t, E, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t) {
    e.exports = function(e, t, n, o) {
        if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    var o = n(64),
        r = n(407),
        i = n(287),
        E = n(15),
        a = n(31),
        _ = n(289),
        s = {},
        u = {};
    (t = e.exports = function(e, t, n, c, T) {
        var I, N, S, O, l = T ? function() {
                return e
            } : _(e),
            A = o(n, c, t ? 2 : 1),
            R = 0;
        if ("function" != typeof l) throw TypeError(e + " is not iterable!");
        if (i(l)) {
            for (I = a(e.length); I > R; R++)
                if ((O = t ? A(E(N = e[R])[0], N[1]) : A(e[R])) === s || O === u) return O
        } else
            for (S = l.call(e); !(N = S.next()).done;)
                if ((O = r(S, A, N.value, t)) === s || O === u) return O
    }).BREAK = s, t.RETURN = u
}, function(e, t, n) {
    var o = n(51);
    e.exports = function(e, t, n) {
        for (var r in t) o(e, r, t[r], n);
        return e
    }
}, , , , , , , , , , , function(e, t, n) {
    var o = n(30).f,
        r = n(49),
        i = n(26)("toStringTag");
    e.exports = function(e, t, n) {
        e && !r(e = n ? e : e.prototype, i) && o(e, i, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    var o = n(2),
        r = n(75),
        i = n(19),
        E = n(277),
        a = "[" + E + "]",
        _ = RegExp("^" + a + a + "*"),
        s = RegExp(a + a + "*$"),
        u = function(e, t, n) {
            var r = {},
                a = i(function() {
                    return !!E[e]() || "​" != "​" [e]()
                }),
                _ = r[e] = a ? t(c) : E[e];
            n && (r[n] = _), o(o.P + o.F * a, "String", r)
        },
        c = u.trim = function(e, t) {
            return e = String(r(e)), 1 & t && (e = e.replace(_, "")), 2 & t && (e = e.replace(s, "")), e
        };
    e.exports = u
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var o = n(20);
    e.exports = function(e, t) {
        if (!o(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}, , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var o = n(65);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == o(e) ? e.split("") : Object(e)
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    var o = n(65),
        r = n(26)("toStringTag"),
        i = "Arguments" == o(function() {
            return arguments
        }()),
        E = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function(e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = E(t = Object(e), r)) ? n : i ? o(t) : "Object" == (a = o(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var o = n(17),
        r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    e.exports = function(e) {
        return r[e] || (r[e] = {})
    }
}, function(e, t, n) {
    var o = n(59),
        r = n(31),
        i = n(121);
    e.exports = function(e) {
        return function(t, n, E) {
            var a, _ = o(t),
                s = r(_.length),
                u = i(E, s);
            if (e && n != n) {
                for (; s > u;)
                    if ((a = _[u++]) != a) return !0
            } else
                for (; s > u; u++)
                    if ((e || u in _) && _[u] === n) return e || u || 0;
            return !e && -1
        }
    }
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    var o = n(65);
    e.exports = Array.isArray || function(e) {
        return "Array" == o(e)
    }
}, function(e, t, n) {
    var o = n(20),
        r = n(65),
        i = n(26)("match");
    e.exports = function(e) {
        var t;
        return o(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == r(e))
    }
}, function(e, t, n) {
    var o = n(26)("iterator"),
        r = !1;
    try {
        var i = [7][o]();
        i.return = function() {
            r = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !r) return !1;
        var n = !1;
        try {
            var i = [7],
                E = i[o]();
            E.next = function() {
                return {
                    done: n = !0
                }
            }, i[o] = function() {
                return E
            }, e(i)
        } catch (e) {}
        return n
    }
}, function(e, t, n) {
    "use strict";
    var o = n(15);
    e.exports = function() {
        var e = o(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function(e, t, n) {
    "use strict";
    var o = n(50),
        r = n(51),
        i = n(19),
        E = n(75),
        a = n(26);
    e.exports = function(e, t, n) {
        var _ = a(e),
            s = n(E, _, "" [e]),
            u = s[0],
            c = s[1];
        i(function() {
            var t = {};
            return t[_] = function() {
                return 7
            }, 7 != "" [e](t)
        }) && (r(String.prototype, e, u), o(RegExp.prototype, _, 2 == t ? function(e, t) {
            return c.call(e, this, t)
        } : function(e) {
            return c.call(e, this)
        }))
    }
}, function(e, t, n) {
    var o = n(15),
        r = n(42),
        i = n(26)("species");
    e.exports = function(e, t) {
        var n, E = o(e).constructor;
        return void 0 === E || void 0 == (n = o(E)[i]) ? t : r(n)
    }
}, function(e, t, n) {
    "use strict";
    var o = n(17),
        r = n(2),
        i = n(51),
        E = n(127),
        a = n(98),
        _ = n(126),
        s = n(125),
        u = n(20),
        c = n(19),
        T = n(195),
        I = n(138),
        N = n(278);
    e.exports = function(e, t, n, S, O, l) {
        var A = o[e],
            R = A,
            h = O ? "set" : "add",
            D = R && R.prototype,
            d = {},
            f = function(e) {
                var t = D[e];
                i(D, e, "delete" == e ? function(e) {
                    return !(l && !u(e)) && t.call(this, 0 === e ? 0 : e)
                } : "has" == e ? function(e) {
                    return !(l && !u(e)) && t.call(this, 0 === e ? 0 : e)
                } : "get" == e ? function(e) {
                    return l && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                } : "add" == e ? function(e) {
                    return t.call(this, 0 === e ? 0 : e), this
                } : function(e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this
                })
            };
        if ("function" == typeof R && (l || D.forEach && !c(function() {
                (new R).entries().next()
            }))) {
            var L = new R,
                C = L[h](l ? {} : -0, 1) != L,
                M = c(function() {
                    L.has(1)
                }),
                m = T(function(e) {
                    new R(e)
                }),
                p = !l && c(function() {
                    for (var e = new R, t = 5; t--;) e[h](t, t);
                    return !e.has(-0)
                });
            m || ((R = t(function(t, n) {
                s(t, R, e);
                var o = N(new A, t, R);
                return void 0 != n && _(n, O, o[h], o), o
            })).prototype = D, D.constructor = R), (M || p) && (f("delete"), f("has"), O && f("get")), (p || C) && f(h), l && D.clear && delete D.clear
        } else R = S.getConstructor(t, e, O, h), E(R.prototype, n), a.NEED = !0;
        return I(R, e), d[e] = R, r(r.G + r.W + r.F * (R != A), d), l || S.setStrong(R, e, O), R
    }
}, function(e, t, n) {
    for (var o, r = n(17), i = n(50), E = n(118), a = E("typed_array"), _ = E("view"), s = !(!r.ArrayBuffer || !r.DataView), u = s, c = 0, T = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); c < 9;)(o = r[T[c++]]) ? (i(o.prototype, a, !0), i(o.prototype, _, !0)) : u = !1;
    e.exports = {
        ABV: s,
        CONSTR: u,
        TYPED: a,
        VIEW: _
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(119) || !n(19)(function() {
        var e = Math.random();
        __defineSetter__.call(null, e, function() {}), delete n(17)[e]
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2);
    e.exports = function(e) {
        o(o.S, e, { of: function() {
                for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
                return new this(t)
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(42),
        i = n(64),
        E = n(126);
    e.exports = function(e) {
        o(o.S, e, {
            from: function(e) {
                var t, n, o, a, _ = arguments[1];
                return r(this), (t = void 0 !== _) && r(_), void 0 == e ? new this : (n = [], t ? (o = 0, a = i(_, arguments[2], 2), E(e, !1, function(e) {
                    n.push(a(e, o++))
                })) : E(e, !1, n.push, n), new this(n))
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = {
        DISCORD_DESC_SHORT: "Team voice & text chat",
        DISCORD_DESC_LONG: "Free and secure chat for gamers, works on both your desktop and your phone.",
        NOTIFICATION_BODY_ATTACHMENT: "Uploaded !!{filename}!!",
        NOTIFICATION_TITLE_START_GAME: "Somebody Playin'",
        NOTIFICATION_BODY_START_GAME: "!!{username}!! started playing !!{gameName}!!!",
        NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_SPECTATE: "!!{user}!! invited the channel to spectate !!{game}!!",
        NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN: "!!{user}!! invited the channel to play !!{game}!!",
        NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_SPECTATE: "!!{user}!! invited the group to spectate !!{game}!!",
        NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN: "!!{user}!! invited the group to play !!{game}!!",
        NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_SPECTATE: "!!{user}!! invited you to spectate !!{game}!!",
        NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN: "!!{user}!! invited you to play !!{game}!!",
        ERRORS_UNEXPECTED_CRASH: "Looks like Discord has crashed unexpectedly....",
        ERRORS_ACTION_TO_TAKE: "We've tracked the error and will get right on it.",
        ERRORS_RELOAD: "Reload",
        UNSUPPORTED_BROWSER: "Unsupported Browser",
        DOWNLOAD_APP: "Download App",
        CANCEL: "Cancel",
        FILTER: "Filter",
        UNSUPPORTED_BROWSER_DETAILS: "\nYou want to be able to talk to your team, right? Switch to latest Chrome, Opera, Firefox 38+ or download\nthe Discord Client to start talking right now!\n  ",
        NO_INPUT_DEVICES_DETECTED: "No input devices could be detected, please plug one in and try again.",
        TRY_AGAIN: "Try Again",
        MICROPHONE_PERMISSION_ERROR: "Microphone could not be unmuted because the permission dialog was dismissed.",
        EMAIL_VERIFICATION_INSTRUCTIONS_HEADER: "Instructions Sent",
        EMAIL_VERIFICATION_INSTRUCTIONS_BODY: "\nWe sent instructions to change your password to **!!{email}!!**, please check both your inbox and spam folder.\n  ",
        HELP: "Help",
        NEED_HELP: "Need Help?",
        NEED_HELP_SUBMIT_REQUEST: "Can't find your answer? [Submit a request]({submitRequestURL})",
        NEED_HELP_SEARCH_PLACEHOLDER: "Have a question? We have the answers!",
        NEED_HELP_TITLE_QUESTION: "NEED HELP?",
        NEED_HELP_FAILED_LOADING: "OH :POOP:\n\n\nOUR HELP ARTICLES FAILED TO LOAD",
        SUPPORT: "Support",
        CHANGE_LOG: "Change Log",
        DOWNLOAD_APPS: "Download Apps",
        DISCARD_CHANGES: "Discard unsaved changes?",
        DISCARD_CHANGES_DESCRIPTION: "You have unsaved changes, are you sure you want to discard them?",
        SHARE: "Share",
        RECENT_MENTIONS: "Recent Mentions",
        ALL_SERVERS: "All Servers",
        THIS_SERVER: "This Server",
        NO_RECENT_MENTIONS: "And in the beginning... there was silence.",
        RECENT_MENTIONS_PRO_TIP: "Whenever someone mentions you it will be saved here for 7 days.",
        RECENT_MENTIONS_FILTER_EVERYONE: "Include @everyone mentions",
        RECENT_MENTIONS_FILTER_ROLES: "Include @role mentions",
        RECENT_MENTIONS_FILTER_LABEL: "Display:",
        RECENT_MENTIONS_FILTER_EXPLAIN_EVERYTHING: "Everything",
        RECENT_MENTIONS_DIRECT_ONLY: "direct only",
        RECENT_MENTIONS_ROLES_AND_DIRECT: "direct & @role",
        RECENT_MENTIONS_EVERYONE_AND_DIRECT: "direct & @everyone",
        CHANGE_AVATAR: "Change\nAvatar",
        REMOVE: "Remove",
        MINIMUM_SIZE: "Minimum Size: **{size}x{size}**",
        IMAGES: "Images",
        AVATAR_CONVERT_FAILURE_MOBILE: "Unable to convert avatar to data URL. {avatarUrl}",
        CHANGE_ICON: "Change\nIcon",
        CHANGE_SPLASH: "Change Splash",
        MUTE: "Mute",
        UNMUTE: "Unmute",
        DEAFEN: "Deafen",
        UNDEAFEN: "Undeafen",
        YOUR_DISCORD_TAG: "Your Discord Tag",
        SEARCH: "Search",
        AUTOCOMPLETE_NO_RESULTS_HEADER: "Nope!",
        AUTOCOMPLETE_NO_RESULTS_BODY: "Did you make a typo?",
        ARTWORK_COPYRIGHT: "All trademarks and copyrights on this site are owned by their respective owners.",
        MISSED_AN_UPDATE: "Missed an update? [Check out our previous change logs]({link})",
        TEXTAREA_PLACEHOLDER: "Message !!{channel}!!",
        MESSAGE_TOO_LONG_HEADER: "Your message is too long.",
        MESSAGE_TOO_LONG_BODY: "\nPlease make your message shorter. We've set the limit at {maxLength, number} characters to be courteous to others.\n  ",
        MESSAGE_RATE_LIMITED_HEADER: "WOAH THERE. WAY TOO SPICY",
        MESSAGE_RATE_LIMITED_BODY: "You're sending messages too quickly!",
        MESSAGE_RATE_LIMITED_BUTTON: "Enter the chill zone",
        OKAY: "Okay",
        NO_THANKS: "No thanks",
        BLOCKED_MESSAGES: "{count, plural, one {1 Blocked Message} other {{count} Blocked Messages}}",
        LOAD_MORE_MESSAGES: "Load more messages",
        RATE_LIMITED: "You are being rate limited.",
        AUDIO_HINT_TITLE: "Allow Discord access to your microphone.",
        AUDIO_HINT_BODY: "\nIf your browser is not showing a popup asking you to allow or deny microphone access please refresh and try again.\n  ",
        MEDIA_HINT_TITLE: "Allow Discord access to your camera.",
        MEDIA_HINT_BODY: "\nIf your browser is not showing a popup asking you to allow or deny media access please refresh and try again.\n  ",
        NO_MIC_TITLE: "Microphone Access is Denied",
        NO_MIC_BODY: "Instructions for enabling access to your microphone can be found in the Discord Help Center.",
        HELP_DESK: "Help Desk",
        PTT_PERMISSION_TITLE: "Push-to-talk Needs Permission",
        PTT_PERMISSION_BODY: "\nYou launched !!{game}!! as administrator. Please relaunch Discord as an administrator in order to enable Push-to-talk\ndetection while the game has focus.\n  ",
        SUPPRESSED_AFK_TITLE: "Hello, anyone there?",
        SUPPRESSED_AFK_BODY: "\nIt seems you've gone AFK on us. We've went ahead and moved you to the AFK channel.\n  ",
        SUPPRESSED: "Suppressed",
        SUPPRESSED_PERMISSION_BODY: "You do not have permission to speak in this channel.",
        DONT_SHOW_AGAIN: "Don't show me this again.",
        CONFIRM_DISABLE_SILENCE_TITLE: "We can't hear you!",
        CONFIRM_DISABLE_SILENCE_BODY: "\nIs your mic extra fancy and silencing itself? In that case you can turn off the red warning by clicking the\nteeny tiny small text below.",
        CONFIRM_DISABLE_SILENCE_DONT_SHOW: "Don't show me the warning again",
        VAD_PERMISSION_TITLE: "Push to Talk Required",
        VAD_PERMISSION_BODY: "\nThis channel requires Push to Talk to voice chat. You will only be able to listen until you switch modes\nto Push to Talk from Voice Activity Detection.\n  ",
        OPEN_ORIGINAL_IMAGE: "Open original",
        IMAGE_TOO_LARGE: "This image is too large to embed.",
        NSFW_TITLE: "NSFW Channel",
        NSFW_DESCRIPTION: "You must be at least eighteen years old to view this channel. Are you over eighteen and willing to see adult content?",
        NSFW_ACCEPT: "Continue",
        NSFW_DECLINE: "Nope",
        FORM_LABEL_CHANNEL_NAME: "Channel Name",
        FORM_LABEL_CHANNEL_TOPIC: "Channel Topic",
        CHANNEL_TOPIC_EMPTY: "No topic set.",
        CHANNEL_NAME_REQUIRED: "Channel name is required.",
        DELETE_CHANNEL: "Delete Channel",
        DELETE_CATEGORY: "Delete Category",
        OVERVIEW: "Overview",
        EDIT_OVERVIEW: "Edit Overview",
        INSTANT_INVITES: "Instant Invites",
        PERMISSIONS: "Permissions",
        DONE: "Done",
        CONFIRM: "Confirm",
        FORM_LABEL_BITRATE: "Bitrate",
        FORM_HELP_BITRATE: "\n**ALL THE BITS!** Going above {bitrate}kbps is not recommended unless you are an audiophile because it will adversely\naffect people on mobile devices or poor connections without noticeable benefit.\n",
        FORM_LABEL_USER_LIMIT: "User Limit",
        FORM_HELP_USER_LIMIT: "\nLimits the number of users that can connect to this voice channel. Users with the **Move Members** permission\nignore this limit and can move other users into the channel.\n",
        NO_USER_LIMIT: "No Limit",
        NUM_USERS: "{num, plural, one {1 user} other {{num} users}}",
        FORM_LABEL_NSFW: "NSFW",
        FORM_LABEL_NSFW_CHANNEL: "NSFW Channel",
        FORM_HELP_NSFW: "\nUsers will need to confirm they are of over legal age to view in the content in this channel.\nNSFW channels are exempt from the explicit content filter.\n",
        OVERWRITE_AUTOCOMPLETE_LABEL: "Add:",
        OVERWRITE_AUTOCOMPLETE_PLACEHOLDER: "Role/Member",
        ROLES: "Roles",
        MEMBERS: "Members",
        ADD_A_ROLE: "Add a Role",
        ADD_A_MEMBER: "Add a Member",
        OVERWRITE_NO_ROLE_TO_ADD: "Every role has overridden permissions in this channel.",
        MEMBER_LIST: "Member List",
        GENERAL_PERMISSIONS: "General Permissions",
        CREATE_INSTANT_INVITE: "Create Instant Invite",
        MANAGE_CHANNEL: "Manage Channel",
        MANAGE_CHANNEL_DESCRIPTION: "Members with this permission can change the channel's name or delete it.",
        MANAGE_PERMISSIONS: "Manage Permissions",
        MANAGE_PERMISSIONS_DESCRIPTION: "Members with this permission can change this channel's permissions.",
        TEXT_PERMISSIONS: "Text Permissions",
        READ_MESSAGES: "Read Messages",
        READ_MESSAGES_VIEW_CHANNELS: "Read Text Channels & See Voice Channels",
        VIEW_CHANNEL: "View Channel",
        SEND_MESSAGES: "Send Messages",
        SEND_TTS_MESSAGES: "Send TTS Messages",
        SEND_TTS_MESSAGES_DESCRIPTION: "\nMembers with this permission can send text-to-speech messages by starting a message with /tts. These messages\ncan be heard by everyone focused on the channel.\n  ",
        MANAGE_MESSAGES: "Manage Messages",
        MANAGE_MESSAGES_DESCRIPTION: "Members with this permission can delete messages by other members or pin any message.",
        MANAGE_EMOJIS: "Manage Emojis",
        VIEW_AUDIT_LOG: "View Audit Log",
        EMBED_LINKS: "Embed Links",
        ATTACH_FILES: "Attach Files",
        READ_MESSAGE_HISTORY: "Read Message History",
        MENTION: "Mention",
        MENTION_EVERYONE: "Mention Everyone",
        MENTION_EVERYONE_DESCRIPTION: "\nMembers with this permission can trigger push notifications for all members of this channel by starting a\nmessage with @everyone or @here.\n  ",
        USE_EXTERNAL_EMOJIS: "Use External Emojis",
        USE_EXTERNAL_EMOJIS_DESCRIPTION: "Members with this permission can use emojis from other servers in this server.",
        REACTIONS: "Reactions",
        ADD_REACTIONS: "Add Reactions",
        REMOVE_ALL_REACTIONS: "Remove All Reactions",
        REMOVE_ALL_REACTIONS_CONFIRM_TITLE: "Remove All Reactions",
        REMOVE_ALL_REACTIONS_CONFIRM_BODY: "Are you sure you want to remove all reactions from this message?",
        ADD_REACTIONS_DESCRIPTION: "\nMembers with this permission can add new reactions to a message. Members can still react using reactions already added to\nmessages without this permission.\n  ",
        VOICE_PERMISSIONS: "Voice Permissions",
        CONNECT: "Connect",
        SPEAK: "Speak",
        MUTE_MEMBERS: "Mute Members",
        DEAFEN_MEMBERS: "Deafen Members",
        MOVE_MEMBERS: "Move Members",
        MOVE_MEMBERS_DESCRIPTION: "\nMembers with this permission can drag other members out of this channel. They can only move members between\nchannels both they and the member they are moving have access.\n  ",
        USE_VAD: "Use Voice Activity",
        USE_VAD_DESCRIPTION: "Members must use Push-to-talk in this channel if this permission is disallowed.",
        PERMISSION_HELPDESK: "Need help with permissions?",
        SELF_DENY_PERMISSION_TITLE: "Pretty sure you don't want to do this",
        SELF_DENY_PERMISSION_BODY: "\nYou cannot deny this permission to **!!{name}!!** because it will deny it to you as well. Allow another role or yourself\nbefore trying again.\n",
        CANNOT_DENY_SELF_SIMPLE: "You cannot revoke permissions from yourself.",
        CANNOT_DENY_SINGULAR_PERMISSION: "Revoking this permission would remove it from you.",
        CANNOT_DENY_MISSING_PERMISSION: "You do not have this permission, so you cannot revoke it.",
        REMOVE_ROLE_OR_USER: "Remove !!{name}!!",
        SEARCH_ROLES: "Search Roles",
        SEARCH_ROLES_NO_RESULT: "No roles were found.",
        SEARCH_MEMBERS: "Search Members",
        SEARCH_MEMBERS_NO_RESULT: "No members were found.",
        SEARCH_ACTIONS: "Search Actions",
        SEARCH_CHANNELS: "Search Channels",
        SEARCH_CHANNELS_NO_RESULT: "No channels were found.",
        CONTENT_MATCHING: "!!{command}!! content matching **!!{query}!!**",
        EMOJI_MATCHING: "Emoji matching **!!{prefix}!!**",
        MEMBERS_MATCHING: "Members matching **!!{prefix}!!**",
        COMMANDS_MATCHING: "Commands matching **!!{prefix}!!**",
        TEXT_CHANNELS_MATCHING: "Text channels matching **!!{prefix}!!**",
        MENTION_USERS_WITH_ROLE: "Notify users with this role who have permission to view this channel.",
        EMOJI: "Emoji",
        COMMANDS: "Commands",
        UNREAD_CHANNELS: "Unread Channels",
        TEXT_CHANNELS: "Text Channels",
        NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER: "You do not have permission to send messages in this channel.",
        COMMAND_GAMER_ESCAPE_DESCRIPTION: "Search Gamer Escape's FINAL FANTASY XIV wiki and embed a link to a page.",
        COMMAND_XIVDB_DESCRIPTION: "Search XIVDB's database and embed a link to any in-game content.",
        COMMAND_TTS_DESCRIPTION: "Use text-to-speech to read the message to all members currently viewing the channel.",
        COMMAND_ME_DESCRIPTION: "Displays text with emphasis.",
        COMMAND_TABLEFLIP_DESCRIPTION: "Appends (╯°□°）╯︵ ┻━┻ to your message.",
        COMMAND_TABLEUNFLIP_DESCRIPTION: "Appends ┬─┬ ノ( ゜-゜ノ) to your message.",
        COMMAND_SHRUG_DESCRIPTION: "Appends ¯\\_(ツ)_/¯ to your message.",
        COMMAND_NICK_DESCRIPTION: "Change nickname on this server.",
        COMMAND_GIPHY_DESCRIPTION: "Search Animated GIFs on the Web",
        MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION: "Notify everyone who has permission to view this channel.",
        MENTION_HERE_AUTOCOMPLETE_DESCRIPTION: "Notify everyone online who has permission to view this channel.",
        MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION_MOBILE: "Notify everyone in this channel.",
        MENTION_HERE_AUTOCOMPLETE_DESCRIPTION_MOBILE: "Notify members online in this channel.",
        MENTION_ROLE_AUTOCOMPLETE_DESCRIPTION_MOBILE: "Notify users with this role in this channel.",
        COMMAND_NICK_SUCCESS: "Your nickname on this server has been changed to **{nick}**.",
        COMMAND_NICK_RESET: "Your nickname on this server has been reset.",
        COMMAND_NICK_FAILURE: "Your nickname could not be changed on this server.",
        COMMAND_NICK_FAILURE_PERMISSION: "You do not have the **Change Nickname** permission on this server.",
        READY: "Ready",
        CONNECTING: "Connecting",
        CONNECTING_PROBLEMS_CTA: "Connection problems? Let us know!",
        TWEET_US: "Tweet Us",
        SERVER_STATUS: "Server Status",
        QUOTE_ATTRIBUTION: "submitted by [!!{name}!!]({url})",
        QUOTE_ATTRIBUTION_FACEBOOK: "submitted via [facebook]({url})",
        QUOTE_ATTRIBUTION_INSTAGRAM: "submitted via [instagram]({url})",
        CREATE: "Create",
        CREATE_TEXT_CHANNEL: "Create Text Channel",
        CREATE_VOICE_CHANNEL: "Create Voice Channel",
        CLONE_CHANNEL: "Clone Channel",
        CLONE_CHANNEL_HELP: "A new channel will be created with the same permissions, user limit and bitrate as **!!{name}!!**.",
        FORM_LABEL_CHANNEL_PERMISSIONS: "Who can access this channel?",
        FORM_LABEL_CHANNEL_VOICE_PERMISSIONS: "Who can connect to this channel?",
        FORM_LABEL_CATEGORY_PERMISSIONS: "Who can access this category?",
        FORM_HELP_CHANNEL_PERMISSIONS: "Selecting roles will automatically setup basic permissions for this channel.",
        INSTANT_INVITE_EXPIRED: "The instant invite is invalid or has expired.",
        JOIN_SERVER_TITLE: "Join a Server",
        JOIN_SERVER_DESCRIPTION: "\nEnter an Instant Invite below to join an existing server. The invite will look something like these:\n  ",
        JOIN_SERVER_DESCRIPTION_MOBILE: "Enter an Instant Invite above to join an existing server.",
        INSTANT_INVITE_LOOKS_LIKE: "The invite will look something like these:",
        FORM_LABEL_INSTANT_INVITE: "Enter an Instant Invite",
        INVALID_INVITE_LINK_ERROR: "Please enter a valid invite link or invite code.",
        BACK: "Back",
        JOIN: "Join",
        CREATE_SERVER_TITLE: "Create your server",
        CREATE_SERVER_DESCRIPTION: "\nBy creating a server, you will have access to **free** voice and text chat to use amongst your friends.\n  ",
        FORM_LABEL_SERVER_NAME: "Server Name",
        FORM_PLACEHOLDER_SERVER_NAME: "Enter a server name",
        SERVER_NAME_REQUIRED: "Server name is required.",
        FORM_LABEL_SERVER_REGION: "Server Region",
        CREATE_SERVER_BUTTON_BODY: "Create a new server and invite your friends. It's free!",
        CREATE_SERVER_BUTTON_CTA: "Create a Server",
        CREATE_SERVER_BUTTON_CTA_MOBILE: "Create a new Server",
        JOIN_SERVER_BUTTON_BODY: "Enter an Instant Invite and join your friend's server.",
        JOIN_SERVER_BUTTON_CTA: "Join a Server",
        JOIN_SERVER_BUTTON_CTA_MOBILE: "Join a Server with an Invite Link",
        JOIN_SERVER_BUTTON_CTA_NAMED: "Join {serverName}",
        CREATE_OR_JOIN_MODAL_HEADER: "Oh, another server huh?",
        SERVER_REGION_UNAVAILABLE: "Unavailable",
        ADD_A_SERVER: "Add a Server",
        CREATE_SERVER_GUIDELINES: "By creating a server, you agree to Discord's **[Community Guidelines]({guidelinesURL})**.",
        PLATFORM_OSX: "Mac OSX",
        PLATFORM_WINDOWS: "PC",
        PLATFORM_LINUX: "Linux",
        PLATFORM_IOS: "Apple iOS",
        PLATFORM_IOS_VERSION: "Apple iOS 8+",
        PLATFORM_ANDROID: "Android",
        PLATFORM_ANDROID_VERSION: "Android v16+",
        DOWNLOAD_DESKTOP_TITLE: "Get Discord at home",
        DOWNLOAD_MOBILE_TITLE: "Or on the go",
        DOWNLOAD_DESKTOP_STABLE_FOOTER: "Want some of that fresh off-the-vine Discord? [Get the public test build](onClick).",
        DOWNLOAD_DESKTOP_PTB_FOOTER: "A bit too ripe? [Get the stable build](onClick).",
        COMING_SOON: "Coming Soon",
        DOWNLOAD: "Download",
        DEB: "DEB",
        TAR_GZ: "TAR",
        DOWNLOAD_MOBILE_MODAL_APPS_HEADER: "Get the Discord Mobile App",
        GOOGLE_PLAY: "Google Play",
        APP_STORE: "App Store",
        CHANNEL_LOCKED: "Your role does not have permission to access this channel.",
        CHANNEL_LOCKED_SHORT: "Channel Locked",
        CHANNELS_UNAVAILABLE_TITLE: "No Text Channels",
        CHANNELS_UNAVAILABLE_BODY: "You find yourself in a strange place. You don't have access to any text channels, or there are none in this server.",
        UNABLE_TO_JOIN_VOICE_UNSUPPORTED_MOBILE: "Voice communications are not supported on this device.",
        UNABLE_TO_JOIN_CHANNEL_FULL: "This channel is full.",
        INSTANT_INVITE: "Instant Invite",
        INSTANT_INVITE_HIDDEN: "Hidden; Use copy button",
        EDIT_CHANNEL: "Edit Channel",
        EDIT_VOICE_CHANNEL_NO_PERMISSION: "You do not have permission to edit this voice channel.",
        LEAVE_SERVER_TITLE: "Leave '!!{name}!!'",
        LEAVE_SERVER_BODY: "\nAre you sure you want to leave **!!{name}!!**? You won't be able to rejoin this server unless you are re-invited.\n  ",
        LEAVE_SERVER: "Leave Server",
        VOICE_CHANNELS: "Voice Channels",
        VOICE_CHANNEL: "Voice Channel",
        SERVER_SETTINGS: "Server Settings",
        SERVER_SETTINGS_UPDATED: "Server settings have been updated.",
        NOTIFICATION_SETTINGS: "Notification Settings",
        CHANNEL_ORDER_UPDATED: "Channel order updated.",
        GUILD_MUTED_HELP_TEXT: "Server is currently muted, therefore these are disabled",
        GUILD_VERIFIED: "Verified",
        DISPLAY: "Display",
        AFK_SETTINGS: "AFK Settings",
        NO_AFK_CHANNEL: "No AFK Channel",
        FORM_LABEL_AFK_CHANNEL: "AFK Channel",
        FORM_HELP_AFK_CHANNEL: "\nAutomatically move members to this channel and mute them when they have been idle for longer than the\nAFK timeout. This does not affect browsers.\n  ",
        FORM_LABEL_AFK_TIMEOUT: "AFK Timeout",
        NO_SYSTEM_CHANNEL: "No New Member Messages",
        FORM_LABEL_SYSTEM_CHANNEL: "New Member Messages Channel",
        FORM_HELP_SYSTEM_CHANNEL: "Send a message to this channel when someone joins this server. Messages are randomized. This can be turned off at any time.",
        FORM_LABEL_VERIFICATION_LEVEL: "Verification Level",
        FORM_HELP_VERIFICATION_LEVEL: "\nMembers of the server must meet the following criteria before they can send messages in text channels or initiate a\ndirect message conversation. If a member has an assigned role this does not apply.\n**We recommend setting a verification level for a public Discord.**\n",
        VERIFICATION_LEVEL_NONE: "None",
        VERIFICATION_LEVEL_NONE_CRITERIA: "Unrestricted",
        VERIFICATION_LEVEL_LOW: "Low",
        VERIFICATION_LEVEL_LOW_CRITERIA: "Must have a verified email on their Discord account.",
        VERIFICATION_LEVEL_MEDIUM: "Medium",
        VERIFICATION_LEVEL_MEDIUM_CRITERIA: "Must also be registered on Discord for longer than {min} minutes.",
        VERIFICATION_LEVEL_HIGH_CRITERIA: "Must also be a member of this server for longer than {min} minutes.",
        VERIFICATION_LEVEL_VERY_HIGH_CRITERIA: "Must have a verified phone on their Discord account.",
        FORM_LABEL_DEFAULT_NOTIFICATION_SETTINGS: "Default Notification Settings",
        FORM_HELP_DEFAULT_NOTIFICATION_SETTINGS: "\nThis will determine whether members who have not explicitly set their notification settings receive a notification\nfor every message sent in this server or not. **We highly recommend setting this to only @mentions for a public Discord\nto avoid [this insanity]({videoURL}).**\n",
        FORM_HELP_DEFAULT_NOTIFICATION_SETTINGS_MOBILE: "\nThis will determine whether members who have not explicitly set their notification settings receive a notification for\nevery message sent in this server or not. We highly recommend setting this to only @mentions for a public Discord\n",
        FORM_LABEL_SPLASH_BACKGROUND: "Instant Invite Splash Background",
        DELETE_SERVER_TITLE: "Delete '!!{name}!!'",
        DELETE_SERVER_BODY: "Are you sure you want to delete **!!{name}!!**? This action cannot be undone.",
        DELETE_SERVER: "Delete Server",
        DELETE_SERVER_ENTER_NAME: "Enter server name",
        DELETE_SERVER_INCORRECT_NAME: "You didn't enter the server name correctly",
        WIDGET: "Widget",
        BANS: "Bans",
        SECURITY: "Security",
        VANITY_URL: "Vanity URL",
        GUILD_MEMBERS_HEADER: "!!{guild}!! members",
        SETTINGS: "Settings",
        USER_MANAGEMENT: "User Management",
        FORM_LABEL_EXPLICIT_CONTENT_FILTER: "Explicit Content Filter",
        FORM_HELP_EXPLICIT_CONTENT_FILTER: "\nAutomatically scan and delete messages sent in this server that contain explicit content. Please choose how broadly\nthe filter will apply to members in your server. **We recommend setting a filter for a public Discord.**\n",
        EXPLICIT_CONTENT_FILTER_DISABLED: "Don't scan any messages.",
        EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION: "Ain't no party like my grandma's tea party.",
        EXPLICIT_CONTENT_FILTER_MEDIUM: "Scan messages from members without a role.",
        EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION: "Recommended option for servers that use roles for trusted membership.",
        EXPLICIT_CONTENT_FILTER_HIGH: "Scan messages sent by all members.",
        EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION: "Recommended option for when you want that squeaky clean shine.",
        GUILD_SETTINGS_LABEL_AUDIT_LOG: "Audit Log",
        GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE: "Load More",
        GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE: "No Logs Yet",
        GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY: "Once moderators begin moderating, you can moderate the moderation here.",
        GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE: "This is Awkward",
        GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY: "We broke something. Come back later.",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE: "$[**!!{user}!!**](userHook) made changes to $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE: "$[**!!{user}!!**](userHook) created a text channel $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE: "$[**!!{user}!!**](userHook) created a category $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE: "$[**!!{user}!!**](userHook) created a voice channel $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE: "$[**!!{user}!!**](userHook) made changes to $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE: "$[**!!{user}!!**](userHook) removed $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE: "$[**!!{user}!!**](userHook) created channel overrides for $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE: "$[**!!{user}!!**](userHook) updated channel overrides for $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE: "$[**!!{user}!!**](userHook) removed channel overrides for $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK: "$[**!!{user}!!**](userHook) kicked $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE: "$[**!!{user}!!**](userHook) pruned {count, plural, =1 {**a member**} other {**!!{count}!! members**}}",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD: "$[**!!{user}!!**](userHook) banned $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE: "$[**!!{user}!!**](userHook) removed the ban for $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE: "$[**!!{user}!!**](userHook) updated $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE: "$[**!!{user}!!**](userHook) updated roles for $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE: "$[**!!{user}!!**](userHook) created the role $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE: "$[**!!{user}!!**](userHook) updated the role $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE: "$[**!!{user}!!**](userHook) deleted the role $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE: "$[**!!{user}!!**](userHook) created an invite $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE: "$[**!!{user}!!**](userHook) updated an invite $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE: "$[**!!{user}!!**](userHook) deleted an invite $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE: "$[**!!{user}!!**](userHook) created the webhook $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE: "$[**!!{user}!!**](userHook) updated the webhook $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE: "$[**!!{user}!!**](userHook) deleted the webhook $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE: "$[**!!{user}!!**](userHook) created the emoji $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE: "$[**!!{user}!!**](userHook) updated the emoji $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE: "$[**!!{user}!!**](userHook) deleted the emoji $[**!!{target}!!**](targetHook)",
        GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE: "$[**!!{user}!!**](userHook) deleted {count, plural, =1 {**a message**} other {**!!{count}!! messages**}} by $[**!!{target}!!**](targetHook) in $[**!!{channel}!!**](channelHook)",
        GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON: "With reason **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE: "Set the server name to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE: "Set the server icon",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE: "Set the invite splash",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE: "Passed ownership to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE: "Set the voice region to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE: "Set the afk channel to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE: "Set the welcome notification channel to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE: "**Disabled** the welcome notification messages",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE: "Set the afk timeout to **!!{newValue}!!** minutes",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED: "**Enabled** two-factor authentication requirement",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED: "**Disabled** two-factor authentication requirement",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED: "**Enabled** the widget",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED: "**Disabled** the widget",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE: "Set the widget channel to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE: "**Removed** the widget channel",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE: "Set the guild verification level to **None**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW: "Set the guild verification level to **Low**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM: "Set the guild verification level to **Medium**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH: "Set the guild verification level to **High**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH: "Set the guild verification level to **Very High**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES: "Set the default message notification setting to **All Messages**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS: "Set the default message notification setting to **Only Mentions**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE: "Set the vanity url to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE: "**Removed** the vanity url",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE: "**Disabled** the explicit content filter",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES: "Set the explicit content filter to scan messages from **members without a role**",
        GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS: "Set the explicit content filter to scan messages from **all members**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE: "Set the name to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE: "In position **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE: "Set the topic of to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE: "Set the bitrate of **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_CREATE: "With permission overrides",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE: "Changed the name from **!!{oldValue}!!** to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE: "Moved from **!!{oldValue}!!** to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE: "Changed the topic to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE: "Changed the bitrate to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED: "Marked the channel as NSFW",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED: "Unmarked the channel as NSFW",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED: "**Granted** {count, plural, =1 {a permission} other {permissions}} for **!!{subtarget}!!**",
        GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED: "**Denied** {count, plural, =1 {a permission} other {permissions}} for **!!{subtarget}!!**",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE: "Set their nickname to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE: "Changed their nickname from **!!{oldValue}!!** to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE: "**Removed** their nickname of **!!{oldValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON: "**Deafened** them",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF: "**Undeafened** them",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON: "**Muted** them",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF: "**Unmuted** them",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE: "**Removed** {count, plural, =1 {a role} other {some roles}}",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD: "**Added** {count, plural, =1 {a role} other {some roles}}",
        GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS: "For {newValue, plural, =1 {**a day**} other {**!!{newValue}!! days**}} of inactivity",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE: "With the name **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE: "Changed the name from **!!{oldValue}!!** to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED: "**Granted** {count, plural, =1 {permission} other {permissions}}",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED: "**Denied** {count, plural, =1 {permission} other {permissions}}",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE: "With no color",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR: "Set the color to **!!{newValue}!!** $[](newColorHook)",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON: "Hoisted",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF: "Not hoisted",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON: "Mentionable",
        GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF: "Not mentionable",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE: "With code **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE: "For channel **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE: "Which expires after **!!{newValue}!!** uses",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE: "Which has **unlimited** uses",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE: "Which expires after **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE: "Which **never** expires",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON: "With temporary **on**",
        GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF: "With temporary **off**",
        GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE: "With channel **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE: "Changed the channel to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE: "With name **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE: "Changed the name from **!!{oldValue}!!** to **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR: "Changed the avatar",
        GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE: "With the name **!!{newValue}!!**",
        GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE: "Changed the name from **!!{oldValue}!!** to **!!{newValue}!!**",
        GUILD_SETTINGS_FILTER_ACTION: "Filter by Action",
        GUILD_SETTINGS_FILTER_USER: "Filter by User",
        GUILD_SETTINGS_FILTER_ALL: "All",
        GUILD_SETTINGS_FILTER_ALL_USERS: "All Users",
        GUILD_SETTINGS_FILTER_ALL_ACTIONS: "All Actions",
        GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE: "Update Server",
        GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE: "Create Channel",
        GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE: "Update Channel",
        GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE: "Delete Channel",
        GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE: "Create Channel Permissions",
        GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE: "Update Channel Permissions",
        GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE: "Delete Channel Permissions",
        GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK: "Kick Member",
        GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE: "Prune Members",
        GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD: "Ban Member",
        GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE: "Unban Member",
        GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE: "Update Member",
        GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE: "Update Member Roles",
        GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE: "Create Role",
        GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE: "Update Role",
        GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE: "Delete Role",
        GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE: "Create Invite",
        GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE: "Update Invite",
        GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE: "Delete Invite",
        GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE: "Create Webhook",
        GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE: "Update Webhook",
        GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE: "Delete Webhook",
        GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE: "Create Emoji",
        GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE: "Update Emoji",
        GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE: "Delete Emoji",
        GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE: "Delete Messages",
        GUILD_MESSAGE_NOTIFICATIONS_ONLY_MENTIONS: "Only @mentions",
        CHANNELS: "Channels",
        SORTING_CHANNELS: "Sorting Channels",
        SORT: "Sort",
        SORTING: "Sorting",
        SELECT_SORT_MODE: "Select Sort Mode",
        GUILD_SECURITY_REQ_MFA_LABEL: "Server two-factor authentication",
        GUILD_SECURITY_REQ_MFA_BODY: "Prevent potentially dangerous administrative actions for users without two-factor authentication enabled.\n**This setting can only be changed by the server owner if they have 2FA enabled on their account**.",
        GUILD_SECURITY_REQ_MFA_ENABLE: "[Enable on your account.](onClick)",
        GUILD_SECURITY_REQ_MFA_TURN_ON: "Enable server-wide 2FA requirement",
        GUILD_SECURITY_REQ_MFA_TURN_OFF: "Disable server-wide 2FA requirement",
        GUILD_SECURITY_REQ_MFA_GUILD_ENABLE: "Enable 2FA Requirement",
        GUILD_SECURITY_REQ_MFA_GUILD_DISABLE: "Disable 2FA Requirement",
        INTEGRATIONS: "Integrations",
        INTEGRATION_SETTINGS: "Integration Settings",
        INTEGRATIONS_HEADER: "Connected Twitch/YouTube Gaming Accounts",
        SYNC: "Sync",
        NO_INTEGRATIONS: "\n[Connect](onConnect) your partnered Twitch or YouTube Gaming account to sync your subscribers/sponsors to a role\n",
        NO_INTEGRATIONS_LABEL: "No Integrations",
        NO_INTEGRATIONS_BODY: "Protocol FR13NDSH1P can only be executed from the Discord client",
        FORM_LABEL_SUB_EXPIRE_BEHAVIOR: "Expired Sub Behavior",
        FORM_LABEL_SPONSOR_EXPIRE_BEHAVIOR: "Expired Sponsor Behavior",
        KICK_FROM_SERVER: "Kick",
        FORM_LABEL_CUSTOM_TWITCH_EMOTICON: "Custom Twitch Emoticons",
        ENABLE_TWITCH_EMOJI_SYNC: "Allow sync'd subscribers to use your Twitch Custom Emoticons in Discord.",
        REMOVE_SYNCED_ROLE: "Remove Role",
        FORM_LABEL_EXPIRE_GRACE_PERIOD: "Grace Period",
        N_DAYS: "{days, plural, one {1 day} other {{days} days}}",
        FORM_LABEL_SYNCED_ROLE: "Synced Role",
        FORM_LABEL_SYNCED_SUBS: "Synced Subs",
        FORM_LABEL_SYNCED_SPONSORS: "Synced Sponsors",
        NUM_SUBSCRIBERS: "\n{subscribers, plural, =0 {**0** subscribers} one {**1** subscriber} other {**{subscribers}** subscribers}}",
        NUM_SPONSORS: "\n{subscribers, plural, =0 {**0** sponsors} one {**1** sponsor} other {**{subscribers}** sponsors}}",
        LAST_SYNC: "last sync: {datetime}",
        DISABLE_INTEGRATION_TITLE: "Disable Sync",
        DISABLE_INTEGRATION_TWITCH_BODY: "\nDisabling sync will perform the selected expired sub behavior as if all subs have expired.\n",
        DISABLE_INTEGRATION_YOUTUBE_BODY: "\nDisabling sync will perform the selected expired sponsor behavior as if all sponsors have expired.\n",
        FORCE_SYNC: "Force Sync",
        INTEGRATIONS_PRO_TIP: "\nFor more integrations check out [Discord's StreamKit]({streamkitURL}).",
        SYNC_THIS_ACCOUNT: "Sync this account",
        SUBSCRIBER_INFORMATION: "Subscriber Information",
        BANS_HEADER: "{bans, plural, =0 {No Bans} one {1 Ban} other {{bans} Bans}}",
        BANS_SEARCH_PLACEHOLDER: "Search Bans",
        UNBAN: "Unban",
        UNBAN_USER_TITLE: "Unban '!!{user}!!'",
        UNBAN_USER_BODY: "Are you sure you want to unban !!{user}!!?",
        BANS_HINT: "\nBans by default are by account and IP.\nA user can circumvent an IP ban by using a proxy.\nBan circumvention can be made very hard by enabling phone verification in [Moderation](onModerationClick).\n",
        BANS_NO_RESULTS: "We looked as hard as we could, but no banned users were found matching that search.",
        BANS_NO_USERS_BANNED: "\nYou haven't banned anybody...\nbut if and when you must, do not hesitate!\n",
        NO_BANS: "No Bans",
        BAN_REASON: "Ban Reason",
        NO_BAN_REASON: "No reason provided",
        REVOKE_BAN: "Revoke Ban",
        GUILD_SETTINGS_MEMBERS_SERVER_MEMBERS: "Server Members",
        GUILD_SETTINGS_MEMBERS_ALL_MEMBERS: "All Members — {count, number}",
        GUILD_SETTINGS_MEMBERS_DISPLAY_ROLE: "Display role:",
        ADD_ROLE_LABEL: "Add:",
        ADD_ROLE_PLACEHOLDER: "Role",
        KICK: "Kick",
        BAN: "Ban",
        MEMBERS_HEADER: "{members, plural, =0 {No Members} one {1 Member} other {{members} Members}}",
        MEMBERS_SEARCH_PLACEHOLDER: "Search Members",
        GUILD_MEMBERS_SEARCH_NO_RESULT: "No members were found.",
        PRUNE_MEMBERS: "Prune Members",
        MEMBER_LIST_SERVER_OWNER_HELP: "This person is the server owner and always has all permissions regardless of roles.",
        CANNOT_MANAGE_IS_OWNER: "This person owns the server, so you cannot manage them.",
        CANNOT_MANAGE_HIGHER_RANK: "This person has a higher role than you, so you cannot manage them.",
        CANNOT_MANAGE_SAME_RANK: "This person's highest role is the same as yours, so you cannot manage them.",
        ADMINISTRATIVE: "Administrative",
        EDIT_USER: "Edit !!{user}!!",
        GUILD_SETTINGS_TITLE_SERVER_WIDGET: "Server Widget",
        GUILD_SETTINGS_WIDGET_ENABLE_WIDGET: "Enable Server Widget",
        NO_INSTANT_INVITE: "No Instant Invite",
        FORM_LABEL_ENABLE_WIDGET: "Enable Widget",
        FORM_LABEL_INSTANT_INVITE_CHANNEL: "Instant Invite Channel",
        FORM_HELP_INSTANT_INVITE_CHANNEL: "\nIf a channel is selected then an Instant Invite link will be generated with the widget,\notherwise only online members and voice channels will be provided.\n  ",
        FORM_LABEL_SERVER_ID: "Server ID",
        FORM_LABEL_PREMADE_WIDGET: "Premade Widget",
        FORM_HELP_PREMADE_WIDGET: "\nEmbed this HTML on your website to use Discord's beautiful pre-made widget. If you have access to your\nsite's users then you can dynamically add &username= to the querystring.\n  ",
        GUILD_SETTINGS_WIDGET_EMBED_HELP: "\nEmbed this HTML on your website to use Discord's beautiful pre-made widget.\n\nIf you have access to your site's users then you can dynamically add &username= to the querystring.",
        FORM_LABEL_JSON_API: "JSON API",
        HELP_ROLE_LOCKED: "Role is locked because it is a higher rank than your highest role.",
        HELP_ROLE_LOCKED_MINE: "Role is locked because it is your highest ranked role. Please ask a higher rank or Server Owner for help.",
        HELP_MISSING_MANAGE_ROLES_PERMISSION: "Role is locked because you do not have the Manage Roles permission.",
        HELP_MISSING_PERMISSION: "You cannot modify this permission because none of your roles have it.",
        HELP_SINGULAR_PERMISSION: "You cannot modify this permission because removing it would remove it from you.",
        FORM_LABEL_ROLE_ADD: "Add role",
        FORM_LABEL_MEMBER_ADD: "Add member",
        FORM_LABEL_ROLE_NAME: "Role name",
        FORM_LABEL_ROLE_ENTER_NAME: "You must provide a role name.",
        FORM_LABEL_ROLE_COLOR: "Role color",
        FORM_LABEL_ROLE_SETTINGS: "Role settings",
        FORM_LABEL_DISABLED_FOR_EVERYONE: "Disabled for @everyone",
        FORM_LABEL_HOIST_DESCRIPTION: "Display role members separately from online members",
        FORM_LABEL_MENTIONABLE: "Allow anyone to **@mention** this role",
        FORM_LABEL_ROLES_PRO_TIP: "Protip",
        FORM_LABEL_ROLES_PRO_TIP_DESCRIPTION: "\nMembers use the color of the highest role they have on this list. Drag roles to reorder them!",
        ADMINISTRATOR: "Administrator",
        ADMINISTRATOR_DESCRIPTION: "\nMembers with this permission have every permission and also bypass channel specific permissions. This is a dangerous\npermission to grant.\n",
        VIEW_AUDIT_LOG_DESCRIPTION: "Members with this permission have access to view the server's audit logs",
        MANAGE_SERVER: "Manage Server",
        MANAGE_SERVER_DESCRIPTION: "Members with this permission can change the server's name or move regions.",
        MANAGE_ROLES: "Manage Roles",
        MANAGE_ROLES_DESCRIPTION: "\nMembers with this permission can create new roles and edit/delete roles lower than this one.\n  ",
        MANAGE_WEBHOOKS: "Manage Webhooks",
        MANAGE_WEBHOOKS_DESCRIPTION: "Members with this permission can create, edit, and delete webhooks.",
        MANAGE_CHANNELS: "Manage Channels",
        MANAGE_CHANNELS_DESCRIPTION: "Members with this permission can create new channels and edit or delete existing ones.",
        KICK_MEMBERS: "Kick Members",
        KICK_MEMBERS_DESCRIPTION: "Members with this permission can kick members who do not have this permission.",
        BAN_MEMBERS: "Ban Members",
        BAN_MEMBERS_DESCRIPTION: "Members with this permission can ban members who do not have this permission.",
        MANAGED_ROLE_EXPLAINATION: "\nThis role is automatically managed by an integration.\nIt cannot be manually assigned to members or deleted.\n",
        CHANGE_NICKNAME_DESCRIPTION: "Members with this permission can change their own nickname.",
        MANAGE_NICKNAMES: "Manage Nicknames",
        MANAGE_NICKNAMES_DESCRIPTION: "Members with this permission can change nicknames of other members.",
        DELETE_ROLE_MOBILE: "Delete Role",
        RESET_TO_DEFAULT: "Reset to default",
        PICK_A_COLOR: "Pick a Color",
        EDIT_ROLES: "Edit Roles",
        ROLE_ORDER_UPDATED: "Role order updated.",
        EMOJI_UPLOAD_TO_SERVER_MESSAGE: "\nDon't let your memes be dreams. Add up to {count} custom emoji that anyone can use on this server (but only this server).\n\nEmoji names must be at least 2 characters long and can only contain alphanumeric characters and underscores.\n",
        EMOJI_SLOTS_AVAILABLE: "{count, plural, =0 {no slots} one {{count} slot} other {{count} slots}} available",
        UPLOAD_EMOJI: "Upload Emoji",
        EMOJI_NAME: "Name",
        UPLOADED_BY: "Uploaded By",
        SERVER_EMOJI: "Server Emoji",
        NO_EMOJI: "Get the party started by uploading an emoji",
        NO_EMOJI_TITLE: "No Emoji",
        NO_INVITES_LABEL: "No instant invites yet",
        NO_INVITES_BODY: "\nFeeling aimless? Like a paper plane drifting through the skies?\nGet some friends in here by creating an instant invite link!\n",
        NONE: "None",
        MODERATION: "Moderation",
        WEBHOOKS: "Webhooks",
        WEBHOOK_CREATE: "Create Webhook",
        WEBHOOK_CREATED_ON: "!!{username}!! on {timestamp, date, medium}",
        WEBHOOK_CANCEL: "Cancel",
        WEBHOOK_SAVE: "Save",
        WEBHOOK_DELETE: "Delete",
        WEBHOOK_DELETE_TITLE: "Delete !!{name}!!",
        WEBHOOK_DELETE_BODY: "\nAre you sure you want to delete the **!!{name}!!** webhook? This action cannot be undone.\n",
        WEBHOOK_EDIT: "Edit",
        WEBHOOK_FORM_NAME: "Name",
        WEBHOOK_FORM_CHANNEL: "Channel",
        WEBHOOK_FORM_WEBHOOK_URL_HELP: "Need help with setup?",
        WEBHOOK_ERROR_CREATING_WEBHOOK: "Error Creating Webhook",
        WEBHOOK_ERROR_SAVING_WEBHOOK: "Error Saving Webhook",
        WEBHOOK_ERROR_DELETING_WEBHOOK: "Error Deleting Webhook",
        WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED: "You have reached the maximum number of webhooks.",
        WEBHOOK_ERROR_INTERNAL_SERVER_ERROR: "An internal server error has occurred.",
        WEBHOOK_FORM_URL: "Webhook URL",
        FORM_LABEL_NOTIFICATION_FREQUENCY: "Frequency",
        FORM_LABEL_SERVER_SETTINGS: "Server Settings",
        FORM_LABEL_SERVER_NOTIFICATION_SETTINGS: "Server Notification Settings",
        FORM_LABEL_SUPPRESS_EVERYONE: "Suppress **@everyone** and **@here**",
        FORM_LABEL_MUTE_SERVER: "Mute **!!{name}!!**",
        FORM_LABEL_MUTE_SERVER_DESCRIPTION: "\nMuting a server prevents unread indicators and notifications from appearing unless you are mentioned.\n",
        FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS: "Mobile Push Notifications",
        FORM_LABEL_ALL_MESSAGES: "All Messages",
        FORM_LABEL_ONLY_MENTIONS: "Only **@mentions**",
        FORM_LABEL_NOTHING: "Nothing",
        FORM_LABEL_MUTED: "Muted",
        FORM_LABEL_CHANNEL_NOTIFCATION_SETTINGS: "Channel Notification Settings",
        FORM_LABEL_ALL: "All",
        FORM_LABEL_OFF: "Off",
        FORM_LABEL_DESKTOP_ONLY: "Desktop",
        FORM_LABEL_MENTIONS: "Mentions",
        RESET: "Reset",
        FORM_LABEL_MOBILE_NOTIFICATIONS_LABEL: "Enable all notifications",
        FORM_LABEL_MOBILE_NOTIFICATIONS: "Enabled",
        FORM_LABEL_MOBILE_NOTIFICATIONS_BEHAVIOR: "Behavior",
        FORM_LABEL_MOBILE_NOTIFICATIONS_WAKE_DEVICE: "Notifications wake up device.",
        FORM_LABEL_MOBILE_NOTIFICATIONS_BLINK: "Disable notifications light.",
        FORM_LABEL_MOBILE_NOTIFICATIONS_VIBRATIONS: "Disable notifications vibration.",
        FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_MESSAGE: "New message sound",
        FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE: "Disable Sounds",
        FORM_LABEL_MOBILE_NOTIFICATIONS_OS_CONTROL_JUMP: "Tweak notification settings",
        FORM_LABEL_MOBILE_NOTIFICATIONS_OS_CONTROL_JUMP_HELP: "Notification settings are controlled by the system.",
        SETTINGS_GAMES_NO_GAME_DETECTED: "No game detected",
        SETTINGS_GAMES_ADD: "Add",
        SETTINGS_GAMES_NOW_PLAYING_LABEL: "Now playing",
        SETTINGS_GAMES_ADDED_GAMES_LABEL: "Added Games",
        SETTINGS_GAMES_ENABLE_OVERLAY_LABEL: "Enable Overlay",
        SETTINGS_GAMES_NOW_PLAYING_STATE: "Now playing!",
        SETTINGS_GAMES_NOT_PLAYING: "What are you playing?!",
        SETTINGS_GAMES_OVERLAY: "Overlay",
        SETTINGS_GAMES_OVERLAY_WARNING: "Overlay is known to be problematic on this game.",
        SETTINGS_GAMES_NO_GAMES_HEADER: "No games added",
        SETTINGS_GAMES_NOT_SEEING_GAME: "Not seeing your game?",
        SETTINGS_GAMES_ADD_GAME: "Add it!",
        SETTINGS_GAMES_ADD_NEW_GAME: "Add Game",
        SETTINGS_GAMES_GAME_TO_ADD: "Select the game to add",
        SETTINGS_GAMES_VERIFIED_ICON: "Verified",
        SETTINGS_GAMES_REMOVE_ICON: "Remove",
        SETTINGS_GAMES_LAST_PLAYED: "Last played **{when}**",
        SETTINGS_GAMES_OVERLAY_ON: "Overlay: On",
        SETTINGS_GAMES_OVERLAY_OFF: "Overlay: Off",
        SETTINGS_GAMES_TOGGLE_OVERLAY: "Toggle overlay",
        CONNECTED_ACCOUNT_VERIFYING: "Connecting your **!!{name}!!** account to **Discord**",
        CONNECTED_ACCOUNT_VERIFY_SUCCESS: "Connected your **!!{name}!!** account to **Discord**",
        CONNECTED_ACCOUNT_VERIFY_FAILURE: "Failed to connect your **!!{name}!!** account to **Discord**",
        DISCONNECT_ACCOUNT: "Disconnect",
        DISCONNECT_ACCOUNT_TITLE: "Disconnect !!{name}!!",
        DISCONNECT_ACCOUNT_BODY: "Disconnecting your account might remove you from servers you joined via this account.",
        FORM_LABEL_MAX_AGE: "Expire After",
        FORM_LABEL_MAX_USES: "Max Uses",
        FORM_LABEL_TEMPORARY: "Temporary Membership",
        FORM_HELP_TEMPORARY: "Members are automatically kicked when they disconnect unless a role is assigned.",
        FORM_LABEL_CUSTOM_CODE: "Custom Code",
        FORM_HELP_CUSTOM_CODE: "Use any alphanumeric value as a code.",
        MAX_AGE_NEVER: "Never",
        MAX_USES: "{maxUses, plural, =0 {No limit} one {1 use} other {{maxUses} uses}}",
        ADVANCED_SETTINGS: "Advanced Settings",
        INSTANT_INVITE_GENERATE: "Generate",
        INSTANT_INVITE_REGENERATE: "Regenerate",
        INSTANT_INVITE_POPOUT: "Share this link with anyone to grant them instant access to this channel.",
        INVITE_MEMBERS: "Invite Members",
        REVOKE: "Revoke",
        CHANNEL: "Channel",
        CHANNEL_SELECT: "Select a Channel",
        MEMBER: "Member",
        INSTANT_INVITE_INVITER: "Inviter",
        INSTANT_INVITE_CODE: "Code",
        INSTANT_INVITE_INVITE_CODE: "Invite Code",
        INSTANT_INVITE_USES: "Uses",
        INSTANT_INVITE_EXPIRES: "Expires",
        INSTANT_INVITE_GENERATED_BY_WIDGET: "Generated by Widget",
        APP_OPENED_TITLE: "Discord App Launched",
        APP_OPENED_BODY: "We've beamed the info to your Discord app. You can close this browser tab or continue with the web version.",
        CONTINUE_TO_WEBAPP: "Continue to Discord",
        APP_NOT_OPENED: "The Discord app could not be opened.",
        APP_OPENING: "Opening Discord App.",
        INVITE_INVALID_CTA: "Tap to learn more",
        INVITE_INVALID_ERROR: "This invite link is invalid or has expired.\nWant to know more about Discord?",
        INSTANT_INVITE_RESOLVING: "Resolving Instant Invite",
        INSTANT_INVITE_ACCEPTING: "Accepting Instant Invite",
        INSTANT_INVITE_ACCEPTED: "Accepted Instant Invite",
        INSTANT_INVITE_RESOLVED_TITLE: "Why, hello there.",
        INSTANT_INVITE_RESOLVED_BODY: "You have been invited to **!!{channelName}!!** in **!!{serverName}!!**.",
        INSTANT_INVITE_ACCEPT: "Accept Invite",
        INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF: "You're already a member of",
        INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER: "**!!{username}!!** has invited you to join",
        INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN: "You've been invited to join",
        INSTANT_INVITE_GUILD_BY_USER: "$[**!!{guild}!!**](guildNameHook) by **!!{username}!!**",
        INSTANT_INVITE_GUILD_MEMBERS_ONLINE: "!!{membersOnline}!! Online",
        INSTANT_INVITE_GUILD_MEMBERS: "!!{members}!! Members",
        INVITE_BUTTON_RESOLVING: "Resolving Invite",
        INVITE_BUTTON_EXPIRED: "Invite Expired",
        INVITE_BUTTON_ACCEPTING: "joining **!!{channelName}!!**",
        INVITE_BUTTON_ACCEPTED: "joined **!!{channelName}!!**",
        INVITE_BUTTON_JOIN: "join **!!{channelName}!!**",
        INVITE_MARKETING_TITLE: "Say goodbye to TeamSpeak, Mumble and Skype.",
        INVITE_MARKETING_VALUE_PROP1: "100% Free",
        INVITE_MARKETING_VALUE_PROP2: "Secure",
        INVITE_MARKETING_VALUE_PROP3: "Beautiful",
        LEARN_MORE: "Learn More",
        LOGIN_TITLE: "Welcome back!",
        LOGIN_BODY: "Login with your email to start chatting",
        FORM_LABEL_EMAIL: "Email",
        FORM_LABEL_PASSWORD: "Password",
        LOGIN: "Login",
        REGISTER: "Register",
        REGISTER_FRIENDLY: "Get Started",
        FORGOT_PASSWORD: "Forgot Your Password?",
        NEED_ACCOUNT: "Need an account?",
        MESSAGES: "Messages",
        DELETE_MESSAGE_TITLE: "Delete Message",
        DELETE_MESSAGE_BODY: "Are you sure you want to delete this message?",
        DELETE_MESSAGE_CONTEXT_MENU_HINT: "\nYou can hold down shift when clicking **delete message** to bypass this confirmation entirely.",
        EDIT: "Edit",
        DELETE: "Delete",
        RETRY: "Retry",
        UNPIN: "Unpin",
        PIN: "Pin",
        PIN_MESSAGE: "Pin Message",
        UNPIN_MESSAGE: "Unpin Message",
        MESSAGE_PINNED: "Message pinned.",
        MESSAGE_UNPINNED: "Message unpinned.",
        LOADING_DIVIDER: "Loading",
        NEW_MESSAGES_DIVIDER: "New Messages",
        NEW_MESSAGES: "{count, plural, one {1 new message} other {{count} new messages}} since {timestamp, time, short}",
        NEW_MESSAGES_WITH_DATE: "\n{count, plural, one {1 new message} other {{count} new messages}} since {timestamp, time, short}\non {timestamp, date, long}\n",
        NEW_MESSAGES_ESTIMATED: "{count}+ new messages since {timestamp, time, short}",
        NEW_MESSAGES_ESTIMATED_WITH_DATE: "{count}+ new messages since {timestamp, time, short} on {timestamp, date, long}",
        MARK_AS_READ: "Mark As Read",
        JUMP_TO_PRESENT: "Jump To Present",
        YOURE_VIEWING_OLDER_MESSAGES: "You're viewing older messages",
        BEGINNING_DM: "This is the beginning of your direct message history with **@!!{username}!!**.",
        BEGINNING_GROUP_DM_MANAGED: "You will automatically leave this group when you're done. GLHF!",
        BEGINNING_GROUP_DM: "Welcome to the beginning of the **!!{name}!!** group.",
        BEGINNING_CHANNEL_NO_HISTORY: "You do not have permission to view the message history of **#!!{channelName}!!**.",
        BEGINNING_CHANNEL: "Welcome to the beginning of the **#!!{channelName}!!** channel.",
        MESSAGE_EDITED: "edited",
        EDIT_TEXTAREA_HELP: "escape to [cancel](onCancel) • enter to [save](onSave)",
        INVALID_VOICE_CHANNEL: "Invalid Channel",
        INVALID_TEXT_CHANNEL: "invalid-channel",
        SYSTEM_PERMISSION_REQUEST_FILES: "To access **your impressive files, you'll need to grant us permission**.",
        SYSTEM_PERMISSION_REQUEST_CAMERA: "To access **your camera, you'll need to grant us permission**.",
        SYSTEM_PERMISSION_GRANT: "Grant Permission",
        CHOOSE_AN_APPLICATION: "Choose an application",
        DOWNLOAD_FILE_COMPLETE: "!!{fileName}!! downloaded",
        DOWNLOAD_FAILED: "Download failed",
        ATTACHMENT_LOAD_FAILED: "Attachment could not be loaded",
        ATTACHMENT_FILENAME_UNKNOWN: "unknown",
        TRY_IT: "Try it!",
        MESSAGE_TTS: "!!{username}!! said !!{body}!!",
        FORM_LABEL_LAST_SEEN: "Last Seen",
        FORM_HELP_LAST_SEEN: "\nPruning will kick **{members, plural, =0 {0 members} one {1 member} other {{members} members}}** who have not\nbeen seen in **{days, plural, one {1 day} other {{days} days}}** and are not assigned to any roles.\nThey can re-join the server using a new Instant Invite.\n  ",
        LAST_SEEN: "more than {days, plural, one {1 day} other {{days} days}} ago",
        PRUNE: "Prune",
        REGISTER_TITLE: "Create an account",
        REGISTER_BODY: "Enter login information",
        FORM_LABEL_USERNAME: "Username",
        FORM_LABEL_USERNAME_MOBILE: "Pick a username",
        FORM_PLACEHOLDER_USERNAME: "What should everyone call you?",
        ALREADY_HAVE_ACCOUNT: "Already have an account?",
        CONTINUE: "Continue",
        BEEP_BOOP: "Beep boop. Boop beep?",
        TERMS_PRIVACY: "By registering, you agree to Discord's [Terms of Service]({termsURL}) and [Privacy Policy]({privacyURL}).",
        NUF_TITLE_MOBILE: "Welcome to Discord",
        NUF_TITLE: "Welcome to Discord, !!{username}!!",
        NUF_BODY_MOBILE: "Login or Register to get started",
        NUF_BODY: "\nFrom here on out, things only get better with friends. Let's take a minute and setup **your server**, shall we?\n",
        GET_STARTED: "Get Started",
        SKIP: "Skip",
        NOTICE_SURVEY_PROMPT: "Would you answer a few questions about Discord? Puhhhlease!",
        NOTICE_SURVEY_BUTTON: "Take a Survey",
        NOTICE_CONNECTION_CONFLICT: "Your voice has been disconnected because you connected at another location.",
        NOTICE_UNCLAIMED_ACCOUNT: "This is an unclaimed account. Claim it before it's lost.",
        NOTICE_NATIVE_APPS: "Need system-wide Push to Talk? Get the desktop app!",
        NOTICE_SCHEDULED_MAINTENANCE: "Discord will be undergoing scheduled maintenance on **{start, date, long}** at **{start, time, short}**.",
        NOTICE_NO_INPUT_DETECTED: "\nWell, it looks like Discord is not detecting any input from your mic. Let's fix that... ​together.\n",
        NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT: "Help!",
        NOTICE_CORRUPT_INSTALLATION: "\nWell, it looks like your Discord installation is corrupt. Let's fix that... ​together.\n",
        NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT: "Help!",
        NOTICE_STREAMER_MODE_TEXT: "Streamer Mode is enabled. Stay safe, friend.",
        NOTICE_RPC_CONNECTIONS_TEXT: "{count, plural, one {{name} is} other {There are {count} apps}} currently controlling your Discord client.",
        NOTICE_ONE_PLATFORM_ACCOUNT: "Connect your !!{a}!! account to discover friends on Discord!",
        NOTICE_TWO_PLATFORM_ACCOUNTS: "Connect your !!{a}!! and !!{b}!! accounts to discover friends on Discord!",
        NOTICE_THREE_PLATFORM_ACCOUNTS: "Connect your !!{a}!!, !!{b}!!, and !!{c}!! accounts to discover friends on Discord!",
        NOTICE_FOUR_OR_MORE_PLATFORM_ACCOUNTS: "Connect your !!{a}!!, !!{b}!!, !!{c}!!, and other accounts to discover friends on Discord!",
        CLAIM_ACCOUNT: "Claim Account",
        RECONNECT: "Reconnect",
        DISABLE: "Disable",
        ENABLE: "Enable",
        CONFIGURE: "Configure",
        SETUP: "Setup",
        NOTICE_DOWNLOAD_MOBILE_APPS: "Keep in touch while you're AFK with Discord's mobile apps.",
        NOTICE_VIDEO_UNSUPPORTED_BROWSER: "Someone just video called you! Unfortunately, video is unsupported in this browser. Download our desktop client to receive the call.",
        START_DM_LABEL: "With:",
        START_DM_PLACEHOLDER: "who?",
        DIRECT_MESSAGES: "Direct Messages",
        DIRECT_MESSAGE: "Direct Message",
        DM_SEARCH_NO_RESULTS: "No users matching that name on any of your servers.",
        DM_SEARCH_INSTRUCTION: "Search for a user across all of your servers.",
        DM_SEARCH_PLACEHOLDER: "Find or start a conversation",
        PLAYING_GAME: "Playing **!!{game}!!**",
        STREAMING: "Streaming **!!{name}!!**",
        LISTENING_TO: "Listening to **!!{name}!!**",
        WATCHING: "Watching **!!{name}!!**",
        NOTIFICATION_TITLE_DISCORD: "Discord",
        BROWSER_NOTIFICATIONS_ENABLED_BODY: "Swoosh. Notifications are a go!",
        RESET_PASSWORD_TITLE: "Change Your Password",
        FORM_LABEL_NEW_PASSWORD: "New Password",
        CHANGE_PASSWORD: "Change Password",
        SHORTCUT_RECORDER_HELP: "Click to record a new shortcut.",
        SHORTCUT_RECORDER_BUTTON: "Record Keybind",
        SHORTCUT_RECORDER_BUTTON_RECORDING: "Stop Recording",
        SHORTCUT_RECORDER_BUTTON_EDIT: "Edit Keybind",
        SHORTCUT_RECORDER_NO_BIND: "No Keybind Set",
        BROWSER_APP: "Discord Apps",
        BROWSER_CHROME: "Google Chrome",
        BROWSER_FIREFOX: "Mozilla Firefox",
        BROWSER_OPERA: "Opera",
        UNSUPPORTED_BROWSER_TITLE: "Well, this is awkward",
        UNSUPPORTED_BROWSER_BODY: "\nIt looks like you're using an unsupported browser. To experience what Discord has to offer, upgrade your\nbrowser or download one of our apps.\n  ",
        SEARCH_FOR_EMOJI: "Find the perfect emoji",
        NO_EMOJI_SEARCH_RESULTS: "No emoji match your search",
        EMOJI_CATEGORY_RECENT: "Frequently Used",
        EMOJI_CATEGORY_CUSTOM: "Custom",
        EMOJI_CATEGORY_ACTIVITY: "Activities",
        EMOJI_CATEGORY_FLAGS: "Flags",
        EMOJI_CATEGORY_FOOD: "Food",
        EMOJI_CATEGORY_NATURE: "Nature",
        EMOJI_CATEGORY_OBJECTS: "Objects",
        EMOJI_CATEGORY_PEOPLE: "People",
        EMOJI_CATEGORY_SYMBOLS: "Symbols",
        EMOJI_CATEGORY_TRAVEL: "Travel",
        UPLOAD_AREA_TITLE_NO_CONFIRMATION: "Insta Upload Mode!",
        UPLOAD_AREA_TITLE: "Drag & Drop",
        UPLOAD_AREA_HELP: "\nYou can add comments before uploading.\nHold shift to upload directly.",
        UPLOAD_AREA_TOO_LARGE_TITLE: "Your files are too powerful",
        UPLOAD_AREA_TOO_LARGE_HELP: "Max file size is {maxSize} please.",
        UPLOAD_AREA_INVALID_FILE_TYPE_TITLE: "Invalid File Type",
        UPLOAD_AREA_INVALID_FILE_TYPE_HELP: "Hmm.. I don't think we support that type of file.",
        UPLOAD_AREA_UPLOAD_FAILED_TITLE: "Upload Failed",
        UPLOAD_AREA_UPLOAD_FAILED_HELP: "[Click here to retry the upload](onClick)",
        UPLOAD_AREA_LEAVE_A_COMMENT: "Add a comment",
        UPLOAD_AREA_OPTIONAL: "optional",
        UPLOAD_AREA_CANCEL_ALL: "Cancel All",
        UPLOAD: "Upload",
        UPLOAD_OPEN_FILE_FAILED: "Unable to open file: {file}.",
        UPLOAD_LOAD_FILE_FAILED: "Unable to load file.",
        UPLOAD_PROCESS_FILE_FAILED: "Unable to pre-process file.",
        TITLE: "Title",
        SERVER_MUTE: "Server Mute",
        SERVER_UNMUTE: "Server Unmute",
        SERVER_VOICE_MUTE: "Server Mute",
        SERVER_VOICE_UNMUTE: "Server Unmute",
        SERVER_DEAFEN: "Server Deafen",
        SERVER_UNDEAFEN: "Server Undeafen",
        SERVER_DEAFENED: "Server Deafened",
        SELF_DEAFENED: "Self Deafened",
        USER_POPOUT_MESSAGE: "Message",
        USER_POPOUT_SETTINGS: "User Settings",
        SELF_MUTED: "Self Mute",
        SERVER_MUTED: "Server Muted",
        ROLES_LIST: "{numRoles, plural, =0 {No Roles} one {Role} other {Roles}}",
        USER_VOLUME: "User Volume",
        QUICK_DM_BLOCKED: "You cannot message blocked users",
        QUICK_DM_USER: "Message @!!{name}!!",
        CONTEXT_MENU_HINT: "Right click user for more actions",
        USER_SETTINGS_MY_ACCOUNT: "My Account",
        USER_SETTINGS_SAVE: "Save",
        USER_SETTINGS_CONFIRM_LOGOUT: "Are you sure you want to logout?",
        USER_SETTINGS_UNVERIFIED_ACCOUNT_BODY: "Please check your email and follow the instructions to verify your account.  If you did not receive an email or if it expired, you can resend one.",
        THEME: "Theme",
        THEME_LIGHT: "Light",
        THEME_DARK: "Dark",
        THEME_UPDATED: "Theme has been updated.",
        DEVELOPER_MODE: "Developer Mode",
        DEVELOPER_MODE_HELP_TEXT: "Developer Mode exposes context menu items helpful for people writing bots using the [Discord API]({apiDocsUrl}).",
        USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1: "Look at me I'm a beautiful butterfly",
        USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT: "Fluttering in the sunlight :sun_with_face:",
        USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK: "Fluttering in the moonlight :full_moon_with_face:",
        USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3: "Waiting for the day when",
        USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4: "Compact mode would be turned on",
        USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5: "Oh here it is!",
        USER_SETTINGS_APPEARANCE_ZOOM_TIP: "You can change the zoom level with {modKey} +/- and reset to the default zoom with {modKey}+0.",
        HARDWARE_ACCELERATION: "Hardware Acceleration",
        HARDWARE_ACCELERATION_HELP_TEXT: "Turns on Hardware Acceleration which uses your GPU to make Discord smoother. Turn this off if you are experiencing FPS drops in games.",
        SWITCH_HARDWARE_ACCELERATION: "Change Hardware Acceleration",
        SWITCH_HARDWARE_ACCELERATION_BODY: "\n  Changing the hardware acceleration setting will quit and re-launch Discord.\n  Are you sure you want to do this?\n  ",
        ADD_KEYBIND: "Add a Keybind",
        ADD_KEYBIND_WARNING: "Keybinds are disabled while this panel is visible.",
        REMOVE_KEYBIND: "Remove Keybind",
        KEYBIND_DESCRIPTION_UNASSIGNED: "This action doesn't do anything! Please choose one from the drop down.",
        KEYBIND_DESCRIPTION_PUSH_TO_MUTE: "Hold to temporarily disable your microphone while in Voice Activity mode.",
        KEYBIND_DESCRIPTION_PUSH_TO_TALK: "Hold to temporarily enable your microphone while in Push to Talk mode.",
        KEYBIND_DESCRIPTION_TOGGLE_MUTE: "Toggle your microphone's transmission on and off.",
        KEYBIND_DESCRIPTION_TOGGLE_DEAFEN: "\nToggle your speaker's playback on and off. Also disables your microphone while deafened.\n  ",
        KEYBIND_DESCRIPTION_TOGGLE_OVERLAY: "Toggle to turn your overlay on and off.",
        KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE: "Toggle to switch between Push To Talk and Voice Activity mode.",
        KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK: "Toggle overlay interactivity lock.",
        KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE: "Toggle to enable/disable Streamer Mode.",
        KEYBIND_UNASSIGNED: "Unassigned",
        KEYBIND_PUSH_TO_TALK: "Push to Talk",
        KEYBIND_PUSH_TO_MUTE: "Push to Mute",
        KEYBIND_TOGGLE_MUTE: "Toggle Mute",
        KEYBIND_TOGGLE_DEAFEN: "Toggle Deafen",
        KEYBIND_TOGGLE_OVERLAY: "Toggle Overlay",
        KEYBIND_TOGGLE_VOICE_MODE: "Toggle VAD",
        KEYBIND_TOGGLE_STREAM_MODE: "Toggle Streamer Mode",
        USER_SETTINGS_KEYBINDS_KEYBIND: "Keybind",
        USER_SETTINGS_KEYBINDS_ACTION: "Action",
        GAME_ACTIVITY: "Game Activity",
        GAME_NOTIFICATIONS_DELIVERY: "Delivery Settings",
        GAME_NOTIFICATIONS_DELIVERY_DESC: "Receive a notification when someone you play with starts playing a game.",
        GAME_NOTIFICATIONS_USER_OVERRIDES: "People You Play With",
        GAME_NOTIFICATION_SETTING_ALL: "Mobile & Desktop",
        GAME_NOTIFICATION_SETTING_ALL_DESC: "\nNotifications will be delivered to your mobile device if you're offline or idle. Otherwise,\nyou'll receive them at your desktop.",
        GAME_NOTIFICATION_SETTING_DESKTOP_ONLY: "Desktop Only",
        GAME_NOTIFICATION_SETTING_DESKTOP_ONLY_DESC: "\nNotifications will be delivered to your desktop if you're online or idle.",
        GAME_NOTIFICATION_SETTING_OFF: "Off",
        GAME_NOTIFICATION_SETTING_OFF_DESC: "Game activity notifications will not be delivered to any device.",
        SHOW_CURRENT_GAME: "Display currently running game as a status message.",
        GAME_NOTIFICATION_SHOW_CURRENT_GAME_DESC: "When enabled other people may receive notifications when you play games.",
        GAME_NOTIFICATION_SETTING_AUTO_FOLLOW: "Automatically detect people who you play games with a lot.",
        GAME_NOTIFICATION_SETTING_AUTO_FOLLOW_DESC: "\nDiscord will attempt to figure out who you play games with so you can receive notifications from the people you're likely to care about. You can disable notifications per person in the settings below.",
        GAME_NOTIFICATION_SETTING_HOURS: "Only receive activity notifications during gaming hours.",
        GAME_NOTIFICATION_SETTING_HOURS_DESC: "\nDiscord will only send notifications when you're likely to want them. For example, in the early\nevening or on the weekend.",
        GAME_NOTIFICATION_SETTINGS_FOLLOWING_EMPTY: "We’re still figuring out who you play with. Go play some games with friends!",
        OVERLAY_EXPLANATION: "\nEnabling the overlay will probably trigger a false positive in your anti-virus.\nAlso, the overlay may not work for everyone. If you have trouble or questions check out\n[this fancy help article!]({supportURL})\n",
        ENABLE_INGAME_OVERLAY: "Enable in-game overlay.",
        OVERLAY_DOWNLOAD_PROGRESS: "Updating ({percent}%)",
        KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK: "Toggle Overlay Lock",
        INLINE_MEDIA_LABEL: "Display images, videos, and lolcats",
        INLINE_EMBED_MEDIA: "When posted as links to chat.",
        INLINE_ATTACHMENT_MEDIA: "When uploaded directly to Discord.",
        INLINE_ATTACHMENT_MEDIA_HELP: "Images larger than {maxSize}MB will not be previewed.",
        RENDER_EMBEDS_LABEL: "Link Preview",
        RENDER_EMBEDS: "Show website preview info from links pasted into chat.",
        RENDER_REACTIONS: "Show emoji reactions on messages.",
        ALLOW_TTS_COMMAND: "Allow playback and usage of /tts command.",
        CONVERT_EMOTICONS: "Automatically convert emoticons in your messages to emoji.",
        CONVERT_EMOTICONS_HELP: "For example, when you type \\:\\-\\) Discord will convert it to :smiley:",
        MESSAGE_DISPLAY_MODE_LABEL: "Message Display",
        COMPACT_MODE: "Compact: Fit more messages on screen at one time. #IRC",
        COZY_MODE: "Cozy: Modern, beautiful, and easy on your eyes.",
        BACK_BUTTON_BEHAVIOR_LABEL_MOBILE: "Back button drawer behavior",
        BACK_BUTTON_BEHAVIOR_MOBILE: "Back button opens channel drawer.",
        KEYBOARD_BEHAVIOR_MOBILE_HEADER: "Keyboard behavior",
        KEYBOARD_BEHAVIOR_MOBILE_SHIFT_ENTER_TO_SEND: "Shift enter to send a message.",
        KEYBOARD_BEHAVIOR_MOBILE_SHIFT_ENTER_TO_SEND_HINT: "By default, external keyboards will send message on enter.",
        CHAT_BEHAVIOR: "Chat Behavior",
        CHAT_BEHAVIOR_KEEP_UNSENT_TEXT: "Store unsent text per channel",
        CONNECTED_ACCOUNTS: "Connected Accounts",
        CONNECTED_ACCOUNTS_NONE_TITLE: "No Connections",
        CONNECTED_ACCOUNTS_NONE: "Connect your accounts to unlock special Discord integrations",
        CONNECTED_ACCOUNT_REVOKED: "This account has been revoked. Would you like to [reconnect](onReconnect) it?",
        SUB_ENABLED_SERVERS: "Sub Enabled Servers",
        AUTHORIZED_APPS: "Authorized Apps",
        DELETE_APP: "Delete Application",
        DEAUTHORIZE: "Deauthorize",
        DEAUTHORIZE_APP: "Deauthorize Application",
        ABOUT_THIS_APP: "About this App",
        DEFAULT_APP_DESCRIPTION: "- None provided -",
        NO_AUTHORIZED_APPS: "No Authorized Apps",
        NO_AUTHORIZED_APPS_NOTE: "Enhance your Discord experience by authorizing and integrating third-party services",
        CURRENTLY_CONTROLLING: "Controlling your Discord",
        DELETE_APP_CONFIRM_MSG: "This action will remove the link between your Discord account and this app.",
        JOIN_SERVER: "Join",
        JOINING_SERVER: "Joining",
        JOINED_SERVER: "Joined",
        CONNECT_ACCOUNT_TITLE: "Connect your Accounts",
        CONNECT_ACCOUNT_DESCRIPTION: "Connect these gaming accounts and unlock special Discord integrations.",
        CONNECT_ACCOUNT_NONE_DETECTED: "Either the app is not running on this computer or no new accounts were detected. kthx",
        DISPLAY_ON_PROFILE: "Display on profile",
        SYNC_FRIENDS: "Sync friends to Discord",
        DETECT_PLATFORM_ACCOUNTS: "Automatically detect accounts from other platforms on this computer.",
        APPLICATIONS_AND_CONNECTIONS: "Applications and Connections",
        APPLICATIONS_AND_CONNECTIONS_BODY: "\nHere's all the apps that are doing super cool things to make your Discord experience super cooler. If it gets too chilly, you can remove them at anytime.\n",
        VERFICATION_EXPIRED: "Email verification link has expired.",
        VERFICATION_EXPIRED_SUGGESTION: "Please login to Discord and resend the link",
        VERIFYING: "Verifying",
        IP_AUTHORIZATION_SUCCEEDED: "IP Address Authorized",
        IP_AUTHORIZATION_SUCCEEDED_SUGGESTION: "\nIf you followed this link after trying to login on the desktop or mobile app then go back and try again.\n",
        AUTHORIZING: "Authorizing",
        AUTHORIZATION_EXPIRED: "IP authorization link has expired.",
        AUTHORIZATION_EXPIRED_SUGGESTION: "Please login to Discord to resend the link",
        VERIFICATION_EMAIL_TITLE: "Verification Email",
        VERIFICATION_EMAIL_BODY: "\nWe have sent you a new verification email to **!!{email}!!**, please check both your inbox and spam folder.\n  ",
        VERIFICATION_EMAIL_ERROR_TITLE: "Error Sending Verification Email",
        VERIFICATION_EMAIL_ERROR_BODY: "There was an error sending you a verification email. Try again later or contact support.",
        UNCLAIMED_ACCOUNT_TITLE: "Unclaimed Account",
        UNCLAIMED_ACCOUNT_BODY: "\nPlease enter an **email** and **password** to claim your account before it's lost.\n\nA claimed account is required to **download apps**.\n  ",
        UNVERIFIED_ACCOUNT_TITLE: "Unverified Account",
        UNVERIFIED_ACCOUNT_BODY: "\nPlease check your email and follow the instructions to verify your email.\n\nIf you didn't receive an email from us or it expired then [click here](onResendClick) to resend it.\n  ",
        FORM_LABEL_CURRENT_PASSWORD: "Current Password",
        CHANGE_PASSWORD_LINK: "Change Password?",
        PTT_LIMITED_TITLE: "Hey, Just a quick heads",
        PTT_LIMITED_BODY: "\nPush to Talk (Limited) will only work when this browser tab has focus. Download the desktop application\nto get system-wide Push to Talk.\n  ",
        PTT_LIMITED_WARNING: "\nPush to Talk (Limited) will only work when the browser tab has focus. [Download](onDownloadClick) the\ndesktop application to get system-wide Push to Talk.\n  ",
        BROWSER_INPUT_DEVICE_WARNING: "\nInput devices cannot be changed while using the browser. [Download](onDownloadClick) the desktop application\nto get full control over input devices.\n  ",
        BROWSER_OUTPUT_DEVICE_WARNING: "\nOutput devices cannot be changed while using the browser. [Download](onDownloadClick) the desktop application\nto get full control over output devices.\n  ",
        FORM_LABEL_INPUT_DEVICE: "Input Device",
        FORM_LABEL_OUTPUT_DEVICE: "Output Device",
        FORM_LABEL_INPUT_VOLUME: "Input Volume",
        FORM_LABEL_OUTPUT_VOLUME: "Output Volume",
        FORM_LABEL_INPUT_MODE: "Input Mode",
        INPUT_MODE_PTT: "Push to Talk",
        INPUT_MODE_PTT_LIMITED: "Push to Talk (Limited)",
        INPUT_MODE_PTT_RELEASE_DELAY: "Push to Talk Release Delay",
        INPUT_MODE_VAD: "Voice Activity",
        FORM_LABEL_AUTOMATIC_VAD: "Automatically determine input sensitivity.",
        FORM_HELP_AUTOMATIC_VAD: "If the indicator is solid green then Discord is transmitting your beautiful voice.",
        FORM_LABEL_SHORTCUT: "Shortcut",
        FORM_LABEL_VOICE_PROCESSING: "Voice Processing",
        FORM_LABEL_VOICE_DIAGNOSTICS: "Voice Diagnostics",
        FORM_LABEL_QOS: "Quality Of Service",
        FORM_LABEL_VOLUME: "Volume",
        FORM_LABEL_LOCAL_MUTE: "Local Mute",
        FORM_LABEL_INPUT: "Input",
        FORM_LABEL_OUTPUT: "Output",
        FORM_LABEL_VIDEO_DEVICE: "Camera",
        FORM_LABEL_VIDEO_PREVIEW: "Preview",
        TEST_VIDEO: "Test Video",
        VIDEO_PREVIEW: "Video Preview",
        FORM_WARNING_VIDEO_PREVIEW: "\nYou must grant Discord [access to your camera](onEnableClick) in order to be able to preview.\n  ",
        ECHO_CANCELLATION: "Echo Cancellation",
        NOISE_SUPPRESSION: "Noise Suppression",
        AUTOMATIC_GAIN_CONTROL: "Automatic Gain Control",
        DISPLAY_SILENCE_WARNING: "Show a warning when Discord is not detecting audio from your mic.",
        FORM_LABEL_ATTENUATION: "Attenuation",
        FORM_HELP_ATTENUATION: "\nLower the volume of other applications by this percent when someone is speaking.\nSet to 0% to completely disable attenuation.\n  ",
        FORM_CHECKBOX_QOS: "Enable Quality of Service High Packet Priority",
        FORM_HELP_QOS: "\nHints to your router that the packets Discord is transmitting are high priority.\nSome routers or internet service providers may misbehave when this is set.\n  ",
        ATTENUATE_WHILE_SPEAKING_SELF: "When I speak",
        ATTENUATE_WHILE_SPEAKING_OTHERS: "When others speak",
        FORM_LABEL_SUBSYSTEM: "Audio Subsystem",
        FORM_CHECKBOX_LEGACY_SUBSYSTEM: "Use Legacy Audio Subsystem",
        FORM_HELP_LEGACY_SUBSYSTEM: "\nCertain audio hardware drivers exhibit problems when using your Operating System's modern audio subsystem.\nCheck this box to fallback to a legacy audio subsystem.\n  ",
        SWITCH_SUBSYSTEM: "Change Audio Subsystem",
        SWITCH_SUBSYSTEM_BODY: "\nChanging the audio subsystem will quit and re-launch Discord.\nAre you sure you want to do this?\n",
        SETTINGS_BASIC: "Basic",
        SETTINGS_ADVANCED: "Advanced",
        SETTINGS_SYNC: "Sync across clients.",
        FORM_LABEL_SENSITIVTY: "Sensitivity",
        FORM_LABEL_INPUT_SENSITIVTY: "Input Sensitivity",
        FORM_WARNING_INPUT_SENSITIVTY: "\nYou do not have any input devices enabled. You must grant Discord [access to your microphone](onEnableClick)\nin order to be able to observe input sensitivity.\n  ",
        FORM_LABEL_TTS: "Text-to-Speech",
        FORM_LABEL_TTS_NOTIFICATIONS: "Text-to-Speech Notifications",
        FORM_DESCRIPTION_TTS: "Turn this on to have a high tech robot speak your notifications to you.",
        TTS_ALLS: "For all channels",
        TTS_CURRENT: "For current selected channel",
        TTS_NEVER: "Never",
        FORM_LABEL_DESKTOP_NOTIFICATIONS: "Desktop Notification",
        DESKTOP_ICON_BADGE: "Enable unread indicator dot",
        DESKTOP_NOTIFICATIONS_ENABLE: "Enable desktop notifications",
        DESKTOP_NOTIFICATIONS_ENABLE_BODY: "\nIf you're looking for per-channel or per-server notifications, right-click the desired server icon and select Notification Settings.\n",
        USER_SETTINGS: "User Settings",
        APP_SETTINGS: "App Settings",
        VOICE: "Voice",
        VOICE_AND_VIDEO: "Voice & Video",
        VOICE_SETTINGS: "Voice Settings",
        VIDEO_SETTINGS: "Video Settings",
        TEXT: "Text",
        GAMES: "Games",
        KEYBINDS: "Keybinds",
        TEXT_AND_IMAGES: "Text & Images",
        CONNECTIONS: "Connections",
        ACCOUNT: "Account",
        NOTIFICATIONS: "Notifications",
        APPEARANCE: "Appearance",
        OVERLAY: "Overlay",
        LOCALE: "Locale",
        LOGOUT: "Log Out",
        SOUNDS: "Sounds",
        PREMIUM: "Nitro",
        SOUND_MESSAGE: "Message",
        SOUND_DEAFEN: "Deafen",
        SOUND_UNDEAFEN: "Undeafen",
        SOUND_MUTE: "Mute",
        SOUND_UNMUTE: "Unmute",
        SOUND_VOICE_DISCONNECTED: "Voice Disconnected",
        SOUND_PTT_ACTIVATE: "PTT Activate",
        SOUND_PTT_DEACTIVATE: "PTT Deactivate",
        SOUND_USER_JOIN: "User Join",
        SOUND_USER_LEAVE: "User Leave",
        SOUND_USER_MOVED: "User Moved",
        SOUND_INCOMING_RING: "Incoming Ring",
        SOUND_OUTGOING_RING: "Outgoing Ring",
        RESET_VOICE_SETTINGS: "Reset Voice Settings",
        RESET_VOICE_SETTINGS_BODY: "\nResetting voice settings will clear all local mutes and local volumes.\nAre you sure you want to do this?\n",
        CONNECT_TO_VOICE: "Connect to Voice",
        CONNECT_TO_VIDEO: "Connect to Video",
        VOICE_CONNECT: "Voice",
        VIDEO_CONNECT: "Video",
        VOICE_CHANNEL_LOCKED: "This Channel is Locked",
        DISCONNECT_FROM_VOICE: "Disconnect from Voice",
        VOICE_CHANNEL_EMPTY: "Feelin' lonely? Add friends to this voice channel by creating an invite link.",
        VIDEO_UNSUPPORTED_BROWSER_TITLE: "Browser not supported",
        VIDEO_UNSUPPORTED_BROWSER_BODY: "Video and Screen Share are not supported in this browser. Please download our desktop client to beam your face and screen across the net.",
        LANGUAGE: "Language",
        LANGUAGE_SELECT: "Select a Language",
        LANGUAGE_UPDATED: "Language has been Updated.",
        LANGUAGE_NOT_FOUND: "Language Not Found ¯\\_(ツ)_/¯",
        HELP_US_TRANSLATE_TITLE: "Help translate Discord",
        HELP_US_TRANSLATE_BODY: "Discord's localization is a community effort. If you want to see Discord translated into\nanother language we'd love your help.\n\nTo apply visit our [translation site]({translationSiteURL}).",
        CHECKING_FOR_UPDATES: "Checking For Updates",
        UPDATE_AVAILABLE: "Downloading Update",
        UPDATE_DOWNLOADED: "Update Ready!",
        UPDATE_MANUALLY: "There is an update available",
        OUT_OF_DATE_TITLE: "You're out of date",
        OUT_OF_DATE_DESCRIPTION: "We've got some sweet changes to Discord (and probably a bug fix or two).  Update to continue.",
        OUT_OF_DATE_ACTION: "Update Discord",
        SET_STATUS: "Set Status",
        STATUS_ONLINE: "Online",
        STATUS_OFFLINE: "Offline",
        STATUS_IDLE: "Idle",
        STATUS_UNKNOWN: "Unknown",
        STATUS_DND: "Do Not Disturb",
        STATUS_INVISIBLE: "Invisible",
        STATUS_DND_HELP: "You will not receive any desktop notifications.",
        STATUS_INVISIBLE_HELPER: "You will not appear online, but will have full access to all of Discord.",
        ONE_PLATFORM_ACCOUNT_DETECTED: "Oh hey! Would you like to connect your **!!{a}!!** account to find friends who also have Discord?",
        TWO_PLATFORM_ACCOUNTS_DETECTED: "Oh hey! Would you like to connect your **!!{a}!!** and **!!{b}!!** accounts to find friends who also have Discord?",
        THREE_PLATFORM_ACCOUNTS_DETECTED: "Oh hey! Would you like to connect your **!!{a}!!**, **!!{b}!!**, and **!!{c}!!** accounts to find friends who also have Discord?",
        FOUR_OR_MORE_PLATFORM_ACCOUNTS_DETECTED: "Oh hey! Would you like to connect any of these accounts to find friends who also have Discord?",
        NOT_NOW: "Not Now",
        NUM_FRIENDS: "{friendCount, plural, =0 {0 Friends} one {{friendCount} Friend} other {{friendCount} Friends}}",
        PLATFORM_ACCOUNT_PRIVACY: "\nPrivacy is very important to us—this information does not leave your computer unless you enable this feature.\n\n[Click here]({articleURL}) to learn more about how this works.\n",
        PINNED_MESSAGES: "Pinned Messages",
        PINNED_MESSAGES_PRO_TIP: "PROTIP:",
        PINNED_MESSAGES_PRO_TIP_BODY_CHANNEL: "Users with 'Manage Messages' can pin from the cog menu.",
        PINNED_MESSAGES_PRO_TIP_BODY_DM: "You and !!{other}!! can pin a message from its cog menu.",
        PINNED_MESSAGES_PRO_TIP_BODY_GROUP_DM: "Any group member can pin a message from its cog menu.",
        NO_PINS_IN_CHANNEL: "This channel doesn't have any\npinned messages... yet.",
        NO_PINS_IN_DM: "This direct message doesn't have\nany pinned messages... yet.",
        JUMP: "Jump",
        UNBLOCK_TO_JUMP_TITLE: "Soo... You Blocked This Person",
        UNBLOCK_TO_JUMP_BODY: "First unblock '!!{name}!!' and then you can jump to their message.",
        PIN_MESSAGE_TITLE: "Pin It. Pin It Good.",
        PIN_MESSAGE_BODY: "\nHey, just double checking that you want to pin this message to #!!{channelName}!! for posterity and greatness?",
        PIN_MESSAGE_BODY_PRIVATE_CHANNEL: "\nHey, just double checking that you want to pin this message to the current channel for posterity and greatness?",
        UNPIN_MESSAGE_TITLE: "Unpin Message",
        UNPIN_MESSAGE_BODY: "Enough of that, I guess. You sure you want to remove this pinned message?",
        UNPIN_CONFIRM: "Yeah, remove it please kthx.",
        UNPIN_MESSAGE_CONTEXT_MENU_HINT: "\nYou can hold down shift when clicking **unpin message** to bypass this confirmation entirely.",
        PIN_CONFIRM: "Oh yeah. Pin it",
        PIN_MESSAGE_TOO_MANY_TITLE: "The Pin Broke",
        PIN_MESSAGE_TOO_MANY_BODY: "\nDiscord is unable to pin that message. You may have hit the limit of {maxPins} pins in channel #!!{channelName}!!.",
        PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL: "\nDiscord is unable to pin that message. You may have hit the limit of {maxPins} pins in this channel.",
        UNPIN_MESSAGE_FAILED_TITLE: "The Pin Is Stuck!",
        UNPIN_MESSAGE_FAILED_BODY: "Discord failed to unpin that message for some reason. Sorry about that.",
        NO_INPUT_DEVICES: "No Input Devices",
        NO_OUTPUT_DEVICES: "No Output Devices",
        NO_VIDEO_DEVICES: "No Video Devices",
        DEFAULT: "Default",
        DEVICE_NO_PERMISSION: "Device {index}",
        CONNECTION_STATUS_CONNECTED: "Connected",
        CONNECTION_STATUS_CONNECTING: "Connecting",
        CONNECTION_STATUS_AUTHENTICATING: "Authenticating",
        CONNECTION_STATUS_AWAITING_ENDPOINT: "Awaiting Endpoint",
        CONNECTION_STATUS_DISCONNECTED: "Disconnected",
        CONNECTION_STATUS_VOICE_CONNECTED: "Voice Connected",
        CONNECTION_STATUS_VIDEO_CONNECTED: "Video Connected",
        CONNECTION_STATUS_RTC_CONNECTING: "RTC Connecting",
        CONNECTION_STATUS_ICE_CHECKING: "ICE Checking",
        CONNECTION_STATUS_NO_ROUTE: "No Route",
        CONNECTION_STATUS_RTC_DISCONNECTED: "RTC Disconnected",
        IP_ADDRESS_SECURED: "IP Address Secured",
        DEBUG: "Debug",
        DISCONNECT: "Disconnect",
        RTC_CONNECTION_INFO: "Connection Info",
        RTC_CONNECTION: "RTC Connection",
        RTC_CONNECTION_STATE_AWAITING_ENDPOINT: "\nDiscord is powering up a RTC server for you! If your connection is stuck here, we may be experiencing a\nregion outage. Oh noes! Check our [service status page]({url}) for more info or consider asking your server owner\nto temporarily switch regions.\n",
        RTC_CONNECTION_STATE_CONNECTING: "\nA RTC server has been allocated for you and Discord is attempting to connect to it. Get ready to roll out.\n",
        RTC_CONNECTION_STATE_AUTHENTICATING: "\nDiscord has connected to your real-time communication server and is securing the connection.\n",
        RTC_CONNECTION_STATE_RTC_CONNECTING: "\nLocked and loaded! Discord has established a secure connection to your real-time communication server and is\nattempting to send data.\n",
        RTC_CONNECTION_STATE_ICE_CHECKING: "\nShields Up! Discord has established a secure connection to your real-time communication server and is attempting to send data.\nIf your browser connection is stuck in this step, check out [this swanky article]({url}) to help resolve the problem.\n",
        RTC_CONNECTION_STATE_NO_ROUTE: "\nDoh. Discord can't establish a UDP connection to your real-time communication server. We'll try again in a moment.\nIf Discord keeps getting stuck in this step, check out [this fancy article]({url}) to help resolve the problem.\n",
        RTC_CONNECTION_STATE_RTC_CONNECTED: "\nDiscord is connected to your real-time communication server on **{hostname}** with an average ping of **{averagePing}ms**. The last\nping was **{lastPing}ms**.\n\nIf the ping is not consistent or more than {badPing}ms, consider asking the server owner to switch to another region.\n",
        RTC_CONNECTION_STATE_DISCONNECTED: "\nHamsters may have fallen off their wheels. Discord's connection to your real-time communication server has been interrupted. We'll attempt\nto re-establish the connection in a moment.\n",
        TUTORIAL_SKIP: "Already a pro? [Skip the tips](onSkipClick)",
        TUTORIAL_CLOSE: "Got it!",
        CHANNEL_MUTE_TOOLTIP: "\nMuting a channel prevents unread indicators and notifications from appearing unless you are mentioned.\n  ",
        SHOW_MUTED: "Show {n} Muted",
        HIDE_MUTED: "Hide {n} Muted",
        WELCOME_MESSAGE_OWNER_TITLE: "Welcome to your server, !!{username}!!!",
        WELCOME_MESSAGE_TITLE: "Welcome to the server, !!{username}!!!",
        WELCOME_MESSAGE_INSTANT_INVITE: "\n**Invite your friends** to this server by clicking on a [share button](onShareClick) when you're ready.\n  ",
        WELCOME_MESSAGE_DESKTOP_APPS: "\n**Download** the [desktop app](onDownloadClick) for system-wide Push to Talk, lower CPU and bandwidth usage, and more.\n  ",
        WELCOME_MESSAGE_TUTORIAL: "**Learn about Discord** at your own pace by exploring the floating quest indicators.",
        WELCOME_MESSAGE_MOBILE_APPS: "\n**Stay connected** to your server from [your smartphone](onDownloadClick) and even use Discord while console gaming.\n  ",
        WELCOME_MESSAGE_SUPPORT: "\n**Reach us** via [our help desk]({supportURL}) or on Twitter [@discordapp]({twitterURL}) if you have any\nquestions or need help.\n  ",
        TIP_VOICE_CONVERSATIONS_TITLE: "Raise Your Voice",
        TIP_VOICE_CONVERSATIONS_BODY: "\nThis is your **voice control panel.**\n\nUse these buttons to unmute your microphone, deafen your headphones, or modify settings.\nYou can adjust your speaking mode from **Voice Activity to Push To Talk** by clicking the cog.\n  ",
        TIP_WRITING_MESSAGES_TITLE: "Have a Conversation",
        TIP_WRITING_MESSAGES_BODY: "\nThis is where you'll be typing all your opinions and ideas.\n\nTo keep things fancy we've included Markdown syntax support so you can **make a point** or\n__stomp your feet.__ You can also **drag & drop** images or files right here to quickly\nshare those cat GIFs. Not too many though.\n",
        TIP_ORGANIZE_BY_TOPIC_TITLE: "Organize by Channels",
        TIP_ORGANIZE_BY_TOPIC_BODY: "\n**Text channels** let you separate your chat conversations by topic. You can hop around\nchannels easily and even **@mention** friends to send notifications to their desktop or phone.\n\n**Voice Channels** let you separate your conversations into groups as big or small as you'd like.\nClick on a channel to join a conversation. You'll stay in that Voice Channel even if you switch\ntext channels too!\n",
        TIP_WHOS_ONLINE_TITLE: "What're You Playing?",
        TIP_WHOS_ONLINE_BODY: "\nThis list shows who's in the current channel.\n\nAnyone using the desktop apps will also show what game they're currently playing. Clicking on a\nuser will reveal **individual settings** like volume controls or admin controls.\n",
        TIP_INSTANT_INVITE_TITLE: "Invite Your Friends",
        TIP_INSTANT_INVITE_BODY: "\nMouse over any text or voice channel to reveal the share button. Use the generated link to invite\npeople directly into the chosen channel.\n\nAdvanced Invite Links allow you to set usage restrictions such as how many people can join with that\nlink or how long it lasts.\n",
        TIP_SERVER_SETTINGS_TITLE: "Control Your Server",
        TIP_SERVER_SETTINGS_BODY: "\nClick here to access your server's settings.\n\nYou can modify all sorts of things like permissions and roles, choose your voice server region,\nsetup an AFK channel, manage invite links, manage banned users, or even delete your server entirely.\n",
        TIP_DIRECT_MESSAGES_TITLE: "Start a Private Conversation",
        TIP_DIRECT_MESSAGES_BODY: "\nSee everyone across all of your servers from this list.\n\nYou can have a private one-on-one chat conversation by choosing a friend and chatting away!\nDirect Messages are great for reaching people via notifications even when they're AFK.\n",
        TIP_CREATE_MORE_SERVERS_TITLE: "Servers Everywhere!",
        TIP_CREATE_MORE_SERVERS_BODY: "\nClick this plus button to create a new server.\n\nBecause servers are free, you can create as many as you want. Each server lets you have a unique\nplace for different groups of people. You can delete servers too if you no longer need it.\n",
        TIP_CREATE_FIRST_SERVER_TITLE: "Create Your Own Server",
        TIP_CREATE_FIRST_SERVER_BODY: "\nClick this plus button to create your own server.\n\nEach server lets you have a unique place for different groups of people. You can delete a server\ntoo if you no longer need it. Best of all, because servers are free, you can create as many as\nyou want.\n",
        TIP_CREATE_FIRST_SERVER_EXPERIMENT1_TITLE: "Create Your Own Private Server",
        TIP_CREATE_FIRST_SERVER_EXPERIMENT1_BODY: "\nYou just joined a large Discord server. Discord is even more awesome when used privately\nwith your friends to play games. Try it out instead of your TeamSpeak server or Skype group.\n\nClick this plus button to create your own private server.\n",
        TIP_CREATE_FIRST_SERVER_EXPERIMENT2_TITLE: "Create Your Own Private Server",
        TIP_CREATE_FIRST_SERVER_EXPERIMENT2_BODY: "\nYou just joined a large Discord server. Most people have their own private Discord servers\nto voice chat while gaming. Try it out with your friends!\n\nWhen you're ready, just hit this + button to create your own server.\n",
        TIP_FRIENDS_LIST_TITLE: "See Your Friends",
        TIP_FRIENDS_LIST_BODY: "\nClick here to view your direct messages and see the status of everyone in all of your servers.\n\nWhen you receive a DM, it'll show up underneath your avatar here for easy access.\n",
        BAN_USER_TITLE: "Ban '!!{user}!!'",
        BAN_USER_CONFIRMED: "'!!{user}!!' has been banned from the server.",
        BAN_CONFIRM_TITLE: "Swing The Ban Hammer on '!!{username}!!'",
        FORM_LABEL_DELETE_MESSAGE_HISTORY: "Delete Message History",
        FORM_LABEL_REASON_KICK: "Reason for Kick",
        FORM_LABEL_REASON_BAN: "Reason for Ban",
        FORM_PLACEHOLDER_REASON: "Reason",
        DELETE_MESSAGE_HISTORY_OPTION_NONE: "Don't Delete Any",
        DELETE_MESSAGE_HISTORY_OPTION_24HR: "Previous 24 Hours",
        DELETE_MESSAGE_HISTORY_OPTION_7D: "Previous 7 Days",
        NO_TEXT: "No",
        YES_TEXT: "Yes",
        CLOSE: "Close",
        SEND: "Send",
        CHOOSE: "Choose",
        SAVE: "Save",
        SELECT: "Select",
        START: "Start",
        ADD: "Add",
        NEXT: "Next",
        DEVICE_SETTINGS: "Device Settings",
        ACTIONS: "Actions",
        SAVE_CONTENT_SUCCESS_MOBILE: "Content Saved!",
        SAVE_CONTENT_FAILURE_MOBILE: "Failed to save the content...",
        SAVE_CONTENT_FAILURE_HELP_MOBILE: "Please check your system network and privacy settings for the Photos app.",
        NO_CAMERA_ACCESS: "Discord does not have access to your camera",
        NO_PHOTOS_ACCESS: "Discord does not have access to your photos",
        ENABLE_PRIVACY_ACCESS: "You can enable access in privacy settings.",
        NO_PHOTO_IN_CAMERA_ROLL: "No Photos in Camera Roll",
        DELETE_MESSAGE_BODY_MOBILE: "\nAre you sure you want to delete this message? This cannot be undone.\n",
        PIN_MESSAGE_BODY_MOBILE: "Are you sure you want to pin this message?",
        JOIN_VOICE_CHANNEL: "Connect to this voice channel?",
        LEAVE_SERVER_BODY_MOBILE: "Are you sure you want to leave !!{name}!!?",
        KICK_USER_TITLE: "Kick '!!{user}!!'",
        KICK_USER_BODY: "Are you sure you want to kick !!{user}!!? They will be able to rejoin again with a new invite.",
        KICK_USER_CONFIRMED: "'!!{user}!!' has been kicked from the server.",
        KICK_USER_ERROR_GENERIC: "Whoops... !!{user}!! could not be kicked.  Please try again!",
        BAN_USER_BODY: "Are you sure you want to ban !!{user}!!? They won't be able to return unless you unban them.",
        BAN_USER_ERROR_GENERIC: "Whoops... !!{user}!! could not be banned.  Please try again!",
        VOICE_DISCONNECT_TITLE: "Voice Disconnect",
        VOICE_DISCONNECT_BODY: "Disconnect from this voice server?",
        JOIN_AFK_CHANNEL_BODY: "It seems you've joined the AFK channel. You cannot speak in this channel.",
        TAKE_PHOTO_OR_VIDEO: "Take Photo or Video",
        CAMERA_ROLL: "Camera Roll",
        IMAGE: "Image",
        VIDEO: "Video",
        REPORT_TITLE: "Are you sure you want to report !!{username}!!?",
        REPORT: "Report",
        REPORTED: "Reported",
        CLOSE_DM: "Close DM",
        EDIT_MESSAGE: "Edit Message",
        DELETE_MESSAGE: "Delete Message",
        EDITING_MESSAGE: "Editing Message",
        READ_ONLY_CHANNEL: "Channel is read-only.",
        COMING_SOON_TITLE: "COMING SOON!",
        COMING_SOON_NOTIFICATIONS: "\nGranular notification control only works on desktop apps at the moment. For now use the iOS notification settings.\n  ",
        CREATE_CHANNEL: "Create Channel",
        OPEN_IN_BROWSER: "Open in Browser",
        SAVE_CONTENT: "Save Content",
        OPEN_APP: "I already have the app. Open it!",
        UNIFIED_OPEN_INSTALL: "Continue to the Discord App",
        NO_CHANNEL_DESCRIPTION: "Your **direct messages** and **servers** can be found here.",
        NEW_DM: "New Direct Message",
        EXPIRES_IN: "Expires in:",
        DELETE_CHANNEL_BODY: "Are you sure you want to delete **!!{channelName}!!**? This cannot be undone.",
        SERVERS: "Servers",
        SERVERS_MANAGEMENT_TITLE: "Sort and Manage Servers",
        SERVER_SORT: "Sort {server}",
        APP_OPENING_MOBILE_BODY: "If you are unable to open the app, copy the invite code to join once the app is downloaded.",
        APP_DOWNLOAD_NOW: "Don't have the app? **Download Now**",
        COPY_TEXT: "Copy Text",
        COPY_USERNAME: "Copy Username",
        LOAD_IMAGE_ERROR: "Failed to load the image.\nPlease try again.",
        SEND_MESSAGE_FAILURE: "Failed to send message. Hold to retry.",
        RESEND_MESSAGE: "Resend message",
        PARTIAL_OUTAGE: "\n{count, plural, one {**1** server is unavailable due to a temporary outage.}\nother {**{count}** servers are unavailable due to a temporary outage.}}",
        SERVER_NOTIFICATION: "Server Notification",
        MUTE_CHANNEL: "Mute **!!{name}!!**",
        SYNC_ACROSS_CLIENTS_TEXT: "Sync across clients.",
        SYNC_ACROSS_CLIENTS_TEXT_HELP: "\nTurning this on will overwrite text & image settings on all other clients including desktop and browser.\n  ",
        SYNC_ACROSS_CLIENTS_APPEARANCE_HELP: "\nTurning this on will overwrite appearance settings on all other clients including desktop and browser.\n  ",
        CLEAR_CACHE: "Clear Cache",
        CACHE_CLEARED: "Cache cleared!",
        NO_MAIL_ACCOUNT_TITLE: "No Mail Account",
        NO_MAIL_ACCOUNT_DESCRIPTION: "\nPlease send your feedback to support@discordapp.com and we've copied your user info to the clipboard.\n",
        NETWORK_ERROR_CLOUDFLARE_INTERMITTENT: "There may have been a brief CloudFlare service interruption; please try again.",
        NETWORK_ERROR_CLOUDFLARE_UNAUTHORIZED: "Your IP address is currently blacklisted on CloudFlare.",
        NETWORK_ERROR_REST_REQUEST: "A network error has occurred.",
        NETWORK_ERROR_CONNECTION: "A network error has occurred. Please check your connection and try again.",
        NETWORK_ERROR_UNKNOWN: "An unknown network error has occurred.",
        NETWORK_ERROR_UNAUTHORIZED: "You are unauthorized to perform this request.",
        NETWORK_ERROR_REQUEST_TOO_LARGE: "Network request payload was too large.",
        NETWORK_ERROR_FORBIDDEN: "A forbidden network request has occurred, please try again.",
        NETWORK_ERROR_BAD_REQUEST: "A bad network request has occurred, please try again.",
        NETWORK_OFFLINE: "Network connectivity limited or unavailable.",
        TIMEOUT_ERROR: "Operation took too long to complete, please try again.",
        INTERNAL_SERVER_ERROR: "An internal server error has occurred, please try again.",
        WEB_BROWSER: "Web Browser",
        WEB_BROWSER_IN_APP: "In-App Browser",
        WEB_BROWSER_SAFARI: "Safari",
        WEB_BROWSER_CHROME: "Chrome",
        JUMP_TO_CHAT: "Jump to Chat",
        PREVIEW_CHAT: "Preview Chat",
        CHANNEL_PERMISSIONS: "Channel Permissions",
        NEW_PERMISSION: "New Permission",
        PERMISSION_OVERRIDES: "Permission Overrides",
        DM_SETTINGS: "Message Settings",
        CALL_USER: "Call !!{name}!!",
        VIEW_PROFILE: "View Profile",
        BUNDLE_READY_TITLE: "Augment Complete",
        BUNDLE_READY_BODY: "Restart Discord for some improvements!",
        BUNDLE_READY_RESTART: "Restart",
        BUNDLE_READY_LATER: "Not now",
        UNHANDLED_LINK_TITLE: "Unhandled Link",
        UNHANDLED_LINK_BODY: "Sorry, no applications on your device were found to handle this link:",
        TERMS_PRIVACY_MOBILE: "By registering, you agree to Discord's **[Terms of Service]({termsURL})** and **[Privacy Policy]({privacyURL})**.",
        CHANNEL_SETTINGS_HAVE_BEEN_UPDATED: "Channel settings have been updated.",
        CHANNEL_HAS_BEEN_DELETED: "Channel has been deleted.",
        CATEGORY_SETTINGS_HAVE_BEEN_UPDATED: "Category settings have been updated.",
        CATEGORY_HAS_BEEN_DELETED: "Category has been deleted.",
        OVERLAY_SETTINGS: "Overlay Settings",
        FORM_LABEL_AVATAR_SIZE: "Avatar Size",
        AVATAR_SIZE_OPTION_SMALL: "Small",
        AVATAR_SIZE_OPTION_LARGE: "Large",
        FORM_LABEL_DISPLAY_NAMES: "Display Names",
        FORM_LABEL_DISPLAY_USERS: "Display Users",
        DISPLAY_OPTION_ALWAYS: "Always",
        DISPLAY_OPTION_NEVER: "Never",
        DISPLAY_OPTION_ONLY_WHILE_SPEAKING: "Only While Speaking",
        FORM_LABEL_AUTOMATIC_VAD_MOBILE: "Auto Sensitivity",
        RESET_NOTIFICATION_SETTINGS: "Reset Notification Settings",
        RESET_NOTIFICATION_OVERRIDE: "Reset Notification Override",
        CHANNEL_SETTINGS: "Channel Settings",
        SEND_MESSAGE: "Send Message",
        INVALID_REQUEST_FORMAT: "**!!{name}!!** is in invalid format. Please enter a DiscordTag#0000 or email.",
        ONE_USER_TYPING: "**!!{a}!!** is typing...",
        TWO_USERS_TYPING: "**!!{a}!!** and **!!{b}!!** are typing...",
        THREE_USERS_TYPING: "**!!{a}!!**, **!!{b}!!** and **!!{c}!!** are typing...",
        SEVERAL_USERS_TYPING: "Several people are typing...",
        SERVER_MUTE_DMS: "Mute DMs",
        VOICE_CHANNEL_HIDE_NAMES: "Hide Names",
        VOICE_CHANNEL_SHOW_NAMES: "Show Names",
        COPY: "Copy",
        COPY_ID: "Copy ID",
        CUT: "Cut",
        PASTE: "Paste",
        PASTE_AND_SEND: "Paste and Send",
        COPY_LINK: "Copy Link",
        OPEN_LINK: "Open Link",
        SHARE_LINK: "Share Link",
        COPY_IMAGE_URL: "Copy Image URL",
        COPY_CHANNEL_TOPIC: "Copy Topic",
        INVITE_TO_SERVER: "Invite to Server",
        INVITE_SENT: "Invite Sent",
        SEARCH_WITH_GOOGLE: "Search with Google",
        JUMP_TO_CHANNEL: "Jump to Channel",
        SWITCH_TO_LIGHT_THEME: "Switch to Light Theme",
        SWITCH_TO_DARK_THEME: "Switch to Dark Theme",
        SWITCH_TO_COZY_MODE: "Switch to Cozy Mode",
        SWITCH_TO_COMPACT_MODE: "Switch to Compact Mode",
        SWITCH_TO_PUSH_TO_TALK: "Switch to Push to Talk",
        SWITCH_TO_VOICE_ACTIVITY: "Switch to Voice Activity",
        MOVE_TO: "Move To",
        MOVE_TO_SUCCESS: "User has been moved to the selected channel.",
        CHANGE: "Change",
        REGION_SELECT_HEADER: "Select a server region",
        REGION_SELECT_FOOTER: "Server region can be changed anytime with less than a second of voice interruption.",
        UNKNOWN_REGION: "Unknown Region",
        GUILD_VERIFICATION_TEXT_NOT_CLAIMED: "You must claim and verify your account before you can send messages in this server.",
        GUILD_VERIFICATION_TEXT_NOT_VERIFIED: "You must verify your account before you can send messages in this server.",
        GUILD_VERIFICATION_TEXT_ACCOUNT_AGE: "Your account must be at least {min} minutes old to send messages in this server.",
        GUILD_VERIFICATION_TEXT_MEMBER_AGE: "You must be a member for at least {min} minutes to send messages in this server.",
        RESEND_VERIFICATION_EMAIL: "Resend Verification Email",
        GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED: "You must verify your identity by phone before you can send messages in this server.",
        VERIFY_PHONE: "Verify Phone",
        TRANSFER: "Transfer",
        TRANSFER_OWNERSHIP: "Transfer Ownership",
        TRANSFER_OWNERSHIP_TO_USER: "Transfer Ownership to !!{user}!!",
        TRANSFER_OWNERSHIP_ACKNOWLEDGE: "\nI acknowledge that by transferring ownership of this server to **!!{username}!!**, it officially belongs to them.\n",
        PROFILE: "Profile",
        USER_INFO: "User Info",
        MUTUAL_GUILDS: "Mutual Servers",
        MUTUAL_FRIENDS: "Mutual Friends",
        CONNECTION_VERIFIED: "Verified",
        NO_MUTUAL_GUILDS: "No servers in common",
        NO_MUTUAL_FRIENDS: "No friends in common",
        LOADING: "Loading",
        OAUTH2_LABEL: "This will allow !!{application}!! to",
        OAUTH2_TITLE: "Authorize access to your account",
        OAUTH2_SECURITY_NOTICE: "This application **cannot** read or send messages on your behalf.",
        OAUTH2_INSECURE_NOTICE: "This application **can** read and send messages on your behalf while it is running.",
        OAUTH2_INSECURE_READ_NOTICE: "This application **can** read but **cannot** send messages on your behalf while it is running.",
        OAUTH2_CONNECT_TO_DISCORD: "Connect to Discord",
        SCOPE_IDENTIFY: "Access your username and avatar",
        SCOPE_EMAIL: "Access your email address",
        SCOPE_EMAIL_EMPTY: "You haven't set up an email yet!",
        SCOPE_CONNECTIONS: "Access your third-party connections",
        SCOPE_CONNECTIONS_EMPTY: "You don't have any third-party connections yet!",
        SCOPE_GUILDS: "Know what servers you're in",
        SCOPE_GUILDS_EMPTY: "You're not in any servers.",
        SCOPE_GUILDS_JOIN: "Join servers for you",
        SCOPE_GUILDS_JOIN_DESCRIPTION: "Use instant invites on your behalf.",
        SCOPE_GDM_JOIN: "Join group DMs for you",
        SCOPE_GDM_JOIN_DESCRIPTION: "This allows the app to join group DMs on your behalf that it has created.",
        SCOPE_BOT: "Add a bot to a server",
        SCOPE_BOT_DESCRIPTION: "This requires you have **Manage Server** permission on the server.",
        SCOPE_BOT_SERVER_PLACEHOLDER: "Select a server",
        SCOPE_BOT_PERMISSIONS: "Allow the following permissions",
        SCOPE_BOT_PERMISSIONS_DESCRIPTION: "This will create a role named **!!{name}!!** you can edit.",
        SCOPE_RPC: "Interface with your Discord client",
        SCOPE_RPC_DESCRIPTION: "This allows the app to connect with your local Discord client.",
        SCOPE_RPC_API: "Perform actions over your Discord client",
        SCOPE_RPC_API_DESCRIPTION: "This allows the app to send messages, change settings, execute commands, etc.",
        SCOPE_RPC_NOTIFICATIONS_READ: "Listen to notifications over your Discord client",
        SCOPE_RPC_NOTIFICATIONS_READ_DESCRIPTION: "This allows the app to see notifications we send to you.",
        SCOPE_WEBHOOK_INCOMING: "Adds a webhook to a channel",
        SCOPE_WEBHOOK_INCOMING_DESCRIPTION: "This allows the app to send messages to a channel on Discord",
        SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER: "Select a channel",
        SCOPE_MESSAGES_READ: "Read all messages",
        SCOPE_MESSAGES_READ_DESCRIPTION: "This allows the app to read all messages accessible through your Discord account",
        AUTHORIZE: "Authorize",
        AUTHORIZED: "Authorized",
        OAUTH2_MESSAGE_CTA: "You may now close this window or tab.",
        OAUTH2_MESSAGE_UNKNOWN_ERROR: "Unknown Error",
        WHITELISTED: "Whitelisted",
        WHITELISTING: "Whitelisting...",
        WHITELIST_FAILED: "Whitelist Failed",
        TWO_FA: "Two-factor authentication",
        TWO_FA_KEY: "2FA Key (Manual entry)",
        TWO_FA_ACTIVATE: "Activate",
        TWO_FA_REMOVE: "Remove 2FA",
        TWO_FA_GENERATE_CODES: "Generate New Backup Codes",
        TWO_FA_VIEW_CODES: "View Codes",
        TWO_FA_VIEW_BACKUP_CODES: "View Backup Codes",
        TWO_FA_GENERATE_CODES_CONFIRM_TEXT: "Generating new backup codes will invalidate any old backup codes you have saved.",
        TWO_FA_DOWNLOAD_CODES: "Download Backup Codes",
        TWO_FA_BACKUP_CODES_LABEL: "Backup Codes",
        TWO_FA_BACKUP_CODES_BODY: "These codes will allow you to enter your account if you lose your\nauth app.  **Each code can only be used once! Any previously generated codes no longer work!**",
        TWO_FA_BACKUP_CODE_ENTER: "Enter the 8-character Backup code.",
        TWO_FA_BACKUP_CODE_ENTER_WRONG: "Backup codes need to be 8 characters long and can contain only numbers and letters.",
        TWO_FA_BACKUP_CODE_HINT: "8-character backup code",
        TWO_FA_ENABLE: "Enable Two-Factor Auth",
        TWO_FA_DISABLE: "Disable Two-Factor Authentication",
        TWO_FA_ENABLED: "Two-Factor Authentication enabled",
        TWO_FA_SALES_PITCH: "Protect your Discord account with an extra layer of security. Once configured you'll be required\nto enter both your password and an authentication code from your mobile phone in order to sign in.",
        TWO_FA_DOWNLOAD_APP_LABEL: "Download an authenticator app",
        TWO_FA_DOWNLOAD_APP_BODY: "Download and install [Authy]({authyURL}) or [Google Authenticator]({googleAuthURL}) for your phone or tablet.",
        TWO_FA_QR_LABEL: "Scan the QR code",
        TWO_FA_QR_BODY: "Open the authentication app and scan the image to the left, using your phone's camera.",
        TWO_FA_LOGIN_LABEL: "Login with your code",
        TWO_FA_LOGIN_BODY: "Enter the 6-digit verification code generated.",
        TWO_FA_AUTH_CODE: "6-digit authentication code",
        TWO_FA_USE_DESKTOP_APP: "Enabling 2FA is not supported on this browser. Please use the Desktop app to enable 2FA.",
        TWO_FA_NOT_VERIFIED: "You must verify your account before you can enable two-factor authentication.",
        TWO_FA_TOKEN_REQUIRED: "A valid Discord Auth Code is required.",
        TWO_FA_ENTER_TOKEN_LABEL: "Enter Discord Auth Code",
        TWO_FA_ENTER_TOKEN_BODY: "You can get this token from your two-factor authentication mobile app.",
        TWO_FA_GUILD_MFA_WARNING: "This server requires Two-Factor Authentication. Your admin privileges are disabled. [Resolve](onClick)",
        TWO_FA_GUILD_MFA_WARNING_IOS: "This server requires Two-Factor Authentication. Your admin privileges are disabled.",
        TWO_FA_GUILD_MFA_WARNING_ANDROID: "This server requires Two-Factor Authentication. Your admin privileges are disabled. *Learn more*",
        TWO_FA_DISCORD_BACKUP_CODES: "These are your Discord backup codes for account !!{email}!!.  Keep them safe!",
        TWO_FA_IOS_DELETE: "You cannot delete servers with 2FA enabled on iOS at the moment.",
        TWO_FA_CHANGE_ACCOUNT: "Change account details",
        DELETE_ACCOUNT: "Delete Account",
        DELETE_ACCOUNT_BODY: "Are you sure that you want to delete your account? This will immediately log you out of your account and you will not be able to log in again.",
        DELETE_ACCOUNT_TRANSFER_OWNERSHIP: "You Own Servers!",
        DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY: "In order to delete your account you must first transfer ownership of all servers that you own.",
        PRIVACY_AND_SAFETY: "Privacy & Safety",
        FRIENDS: "Friends",
        REMOVE_FRIEND_TITLE: "Remove '!!{name}!!'",
        REMOVE_FRIEND_BODY: "Are you sure you want to permanently remove **!!{name}!!** from your friends?",
        ADD_FRIEND: "Add Friend",
        REMOVE_FRIEND: "Remove Friend",
        FRIENDS_ONLINE: "{n, number} Online",
        BLOCKED: "Blocked",
        INCOMING_FRIEND_REQUEST: "Incoming Friend Request",
        OUTGOING_FRIEND_REQUEST: "Outgoing Friend Request",
        OUTGOING_FRIEND_REQUEST_DELETE_MSG: "Are you sure you want to delete your friend request to **!!{name}!!**?",
        BLOCK: "Block",
        CONFIRM_USER_BLOCK_TITLE: "Block !!{name}!!?",
        CONFIRM_USER_BLOCK_BODY: "Are you sure you want to block **!!{name}!!**? Blocking this user will also remove them from your friends list.",
        UNBLOCK: "Unblock",
        MORE: "More",
        SEND_DM: "Message",
        FRIEND_REQUEST_ACCEPT: "Accept",
        FRIEND_REQUEST_IGNORE: "Ignore",
        FRIEND_REQUEST_CANCEL: "Cancel",
        FRIENDS_SECTION_ADD_FRIEND: "Add Friend",
        FRIENDS_SECTION_ALL: "All",
        FRIENDS_SECTION_ONLINE: "Online",
        FRIENDS_SECTION_PENDING: "Pending",
        FRIENDS_SECTION_SUGGESTIONS: "Suggestions",
        FRIENDS_COLUMN_NAME: "Name",
        FRIENDS_COLUMN_STATUS: "Status",
        CONNECT_ACCOUNTS: "Connect Accounts",
        FRIENDS_EMPTY_STATE_ADD_FRIEND_DOWNLOAD: "Grab the desktop app to find friends from other services like Skype or Battle.NET.",
        FRIENDS_EMPTY_STATE_ADD_FRIEND_NO_ACCOUNTS: "Wanna find some friends to play with? Connect your gaming accounts to see who's on Discord.",
        FRIENDS_EMPTY_STATE_ADD_FRIEND_NO_SUGGESTION: "Zoot zoot! Looks like we can't find anyone right now. We'll alert you when we find a suggestion!",
        FRIENDS_EMPTY_STATE_ALL: "Wumpus has no friends. You could though!",
        FRIENDS_EMPTY_STATE_ONLINE: "No one's around to play with Wumpus.",
        FRIENDS_EMPTY_STATE_PENDING: "There are no pending friend requests. Here's a Wumpus for now.",
        FRIENDS_EMPTY_STATE_BLOCKED: "You can't unblock the Wumpus.",
        FRIEND_PERMITTED_SOURCE: "Who can add you as a friend",
        FRIEND_PERMITTED_SOURCE_ALL: "Everyone",
        FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS: "Friends of Friends",
        FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS: "Server Members",
        USER_EXPLICIT_CONTENT_FILTER: "Safe Direct Messaging",
        USER_EXPLICIT_CONTENT_FILTER_HELP: "Automatically scan and delete direct messages you receive that contain explicit content.",
        USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS: "Keep me safe",
        USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP: "Scan direct messages from everyone.",
        USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS: "My friends are nice",
        USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP: "Scan direct messages from everyone unless they are a friend.",
        USER_EXPLICIT_CONTENT_FILTER_DISABLED: "I live on the edge",
        USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP: "Turn this off. Don't scan anything. Go straight to the dark side.",
        USER_DM_SETTINGS: "Server Privacy Defaults",
        USER_DM_SETTINGS_HELP: "This setting is applied when you join a new server. It does not apply retroactively to your existing servers.",
        USER_DM_SETTINGS_QUESTION: "Do you want to also apply this change to all your existing servers?",
        NEW_GUILDS_DM_ALLOWED: "Allow direct messages from server members.",
        FRIEND_REQUEST_SENT: "Friend request has been sent.",
        FRIEND_REQUEST_CANCELLED: "Friend request has been cancelled.",
        FRIEND_REQUEST_IGNORED: "Friend request has been ignored.",
        FRIEND_HAS_BEEN_DELETED: "Friend has been removed.",
        USER_HAS_BEEN_BLOCKED: "User has been blocked.",
        USER_HAS_BEEN_UNBLOCKED: "User has been unblocked.",
        FRIEND_REQUEST_RATE_LIMITED_HEADER: "WOAH THERE. WAY TOO SPICY",
        FRIEND_REQUEST_RATE_LIMITED_BODY: "You're sending friend requests too quickly!",
        FRIEND_REQUEST_RATE_LIMITED_BUTTON: "Enter the chill zone",
        FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER: "HOLD UP JUST A SEC.",
        FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY: "You're going to need to claim your account and verify your e-mail before you can send a friend request.",
        FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON: "Enter the verification zone.",
        ADD_FRIEND_DESCRIPTION: "You can add a friend with their DiscordTag.",
        ADD_FRIEND_PLACEHOLDER: "Enter a DiscordTag#0000",
        ADD_FRIEND_CONFIRMATION: "Sent request to **!!{name}!!**",
        ADD_FRIEND_BUTTON: "Send Friend Request",
        ADD_FRIEND_BUTTON_AFTER: "Friend Request Sent",
        ACCEPT_REQUEST_BUTTON: "Accept Friend Request",
        ACCEPT_REQUEST_BUTTON_AFTER: "Request Accepted",
        CONNECT_ACCOUNTS_TITLE: "Find some Discord pals",
        CONNECT_ACCOUNTS_DESCRIPTION: "Discover who's already on Discord.",
        FRIEND_SUGGESTIONS: "Friend Suggestions",
        SUGGESTIONS: "Suggestions",
        ADD_FRIEND_SUCCESS: "Success! Your friend request to **!!{discordTag}!!** is being escorted by the most elite Discord samurai.",
        ADD_FRIEND_ERROR_NUMBERS_ONLY: "We're more than numbers... we're people! Enter a username and tag like WumpusKing#1202",
        ADD_FRIEND_ERROR_USERNAME_ONLY: "We need !!{username}!!'s four digit tag so we know which one they are.",
        ADD_FRIEND_ERROR_DISCORD_TAG_USERNAME: "DiscordTag is a fake username. Enter your friend's real username and tag... like WumpusWizard#9349",
        ADD_FRIEND_ERROR_INVALID_DISCORD_TAG: "**!!{discordTag}!!** has hired a samurai to slay all friend requests. You'll have to ask them to add you.",
        ADD_FRIEND_ERROR_OTHER: "Hm, didn't work. Double check that the capitalization, spelling, any spaces, and numbers are correct.",
        NOTIFICATION_PENDING_FRIEND_REQUEST: "Sent a friend request.",
        NOTIFICATION_ACCEPTED_FRIEND_REQUEST: "Accepted your friend request.",
        DM_VERIFICATION_TEXT_BLOCKED: "You cannot send messages to a user you have blocked.",
        PRIVACY_SETTINGS: "Privacy Settings",
        ALLOW_SERVER_DMS: "Allow direct messages from server members.",
        BOT_DM_SEND_FAILED: "Your message could not be delivered because you don't share a server with the recipient or you disabled direct messages on your shared server, recipient is only accepting direct messages from friends, or you were blocked by the recipient.",
        BOT_REQUIRES_EMAIL_VERIFICATION: "You need to verify your email before you can send messages here.",
        BOT_DM_RATE_LIMITED: "You are sending too many new direct messages. Hold off for a few minutes before trying to message this person again.",
        BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED: "Sending messages to this channel has been temporarily disabled. Try again in a bit.",
        BOT_DM_EXPLICIT_CONTENT: "Woah there! !!{name}!! has requested that Discord block any messages our mostly-accurate robo-hamsters deem to be explicit. Seems like you found one, so your message has not been sent. Please be nice.",
        BOT_GDM_EXPLICIT_CONTENT: "Woah there! One of the peeps in !!{name}!! has requested that Discord block any messages our mostly-accurate robo-hamsters deem to be explicit. Seems like you found one, so your message has not been sent. Please be nice.",
        BOT_GUILD_EXPLICIT_CONTENT: "Woah there! The owner of !!{name}!! has requested that Discord block any messages our mostly-accurate robo-hamsters deem to be explicit. Seems like you found one, so your message has not been sent. Please be nice.",
        BOT_CALL_IDLE_DISCONNECT: "It appears you've been by yourself in this call for more than five minutes. The bandwidth patrol has asked me to disconnect you to save bandwidth. That stuff doesn't grow on trees!",
        ADD_FRIEND_FIND: "Find",
        ADD_FRIEND_SELF: "You can't play with yourself.",
        ADD_FRIEND_ALREADY_FRIENDS: "You are already friends.",
        ADD_FRIEND_NOT_FOUND: "We couldn't find anyone with that DiscordTag.",
        ADD_FRIEND_HINT: "Add friends by their DiscordTag. Your DiscordTag is **!!{tag}!!**.",
        ADD_FRIEND_HINT2: "Keep typing! Don't forget the four digits after the name.",
        STREAMER_MODE: "Streamer Mode",
        OPTIONS: "Options",
        USER_SETTINGS_STREAMER_NOTICE_TITLE: "Looking for integrations?",
        USER_SETTINGS_STREAMER_NOTICE_BODY: "\nJuice up your Discord community server with tools you're already using to power your stream.\n\nCheck out [Discord's StreamKit]({streamkitURL}).",
        STREAMER_MODE_ENABLED: "Streamer Mode Enabled",
        ENABLE_STREAMER_MODE_LABEL: "Enable Streamer Mode",
        ENABLE_STREAMER_MODE_DESCRIPTION: "You can set a keybind to toggle Streamer Mode in [Keybind Settings](onClick).",
        AUTO_TOGGLE_STREAMER_MODE_LABEL: "Automatically Enable/Disable",
        AUTO_TOGGLE_STREAMER_MODE_DESCRIPTION: "Automatically enable/disable Streamer Mode if OBS or XSplit are running on this computer.",
        HIDE_INSTANT_INVITES_LABEL: "Hide Instant Invite Links",
        HIDE_INSTANT_INVITES_DESCRIPTION: "Recommended if you don't want random people accessing your Discord servers.",
        DISABLE_SOUNDS_LABEL: "Disable Sounds",
        DISABLE_SOUNDS_DESCRIPTION: "All sound effects will be disabled.",
        DISABLE_NOTIFICATIONS_LABEL: "Disable Notifications",
        DISABLE_NOTIFICATIONS_DESCRIPTION: "All desktop notifications will be disabled.",
        HIDE_PERSONAL_INFORMATION_LABEL: "Hide Personal Information",
        HIDE_PERSONAL_INFORMATION_DESCRIPTION: "Hides email, connected accounts, notes and anonymizes DiscordTags.",
        CUSTOM_COLOR: "Custom Color",
        TAP_ADD_NICKNAME: "Tap to add a nickname",
        CHANGE_NICKNAME: "Change Nickname",
        NICKNAME: "Nickname",
        RESET_NICKNAME: "Reset Nickname",
        CHANGE_NICKNAME_WARNING: "\nNicknames are visible to everyone on this server. Do not change them unless you are enforcing a naming system\nor clearing a bad nickname.\n",
        NICKNAME_CHANGED: "Nickname changed to !!{nickname}!!.",
        NICKNAME_CLEARED: "Nickname cleared.",
        NOTE: "Note",
        NOTE_PLACEHOLDER: "click to add a note",
        NOTE_PLACEHOLDER_MOBILE: "tap to add a note",
        ADD_NOTE: "Add Note",
        EDIT_NOTE: "Edit Note",
        LIVE_ON_TWITCH: "Live on Twitch",
        WATCH_STREAM: "Watch Stream",
        INVITE_URL: "Invite URL",
        CHANGE_URL: "Change URL",
        SETUP_VANITY_URL: "Setup Vanity URL",
        CHANGE_VANITY_URL: "Change Vanity URL",
        REMOVE_VANITY_URL: "Remove Vanity URL",
        SAVE_NEW_URL: "Save New URL",
        ENTER_VANITY_URL: "Enter Vanity URL",
        VANITY_URL_HELP: "\nMake your server easily accessible with a fancy vanity URL of your choosing.\nBe aware that this makes your server publicly available to anyone who uses this link.\n",
        VANITY_URL_HELP_CONFLICT: "\nKeep in mind that we may take back vanity URLs if we discover abuse or if there's an intellectual property conflict.",
        VANITY_URL_HELP_EXTENDED: "Your server is now accessible to everyone at **!!{url}!!**",
        VANITY_URL_HELP_EXTENDED_LINK: "Your server is now accessible to everyone at [!!{urlText}!!]({urlValue})",
        CHANGE_VANITY_URL_ERROR: "\nVanity URL could not be changed because it contains invalid characters, was too short, or is already taken.\nVanity URLs can only contain letters, numbers or dashes.\n",
        VANITY_URL_HINT_MOBILE: "your-url-here",
        UNNAMED: "Unnamed",
        LEAVE_GROUP_DM_TITLE: "Leave '!!{name}!!'",
        LEAVE_GROUP_DM_MANAGED_TITLE: "Leave !!{name}!! Group",
        LEAVE_GROUP_DM_MANAGED_BODY: "\nAre you sure you want to leave? You won't be able to rejoin this group unless\n**!!{name}!!** adds you again.\n  ",
        LEAVE_GROUP_DM_BODY: "\nAre you sure you want to leave **!!{name}!!**? You won't be able to rejoin this group unless you are re-invited.\n  ",
        LEAVE_GROUP_DM: "Leave Group",
        REMOVE_ICON: "Remove Icon",
        REMOVE_FROM_GROUP: "Remove From Group",
        GROUP_DM_SEARCH_PLACEHOLDER: "Type the username of a friend",
        GROUP_DM_ADD_FRIENDS: "Add Friends to DM",
        GROUP_DM_INVITE_WITH_NAME: "Invite friends to !!{groupname}!!",
        NEW_GROUP_DM: "New Group DM",
        GROUP_DM_HEADER: "Select Friends",
        CREATE_GROUP_DM: "Create Group DM",
        GROUP_DM_INVITE_TO: "To:",
        GROUP_DM_INVITE_EMPTY: "No friends found that are not already in this DM.",
        GROUP_DM_INVITE_SUCCESSFUL_MOBILE: "!!{username}!! added to group.",
        GROUP_DM_INVITE_FULL_MAIN: "This party is full!",
        GROUP_DM_INVITE_FULL_SUB: "Groups have a 10 member limit.",
        GROUP_DM_INVITE_WILL_FILL_MOBILE: "The selected users will fill the group.",
        GROUP_DM_INVITE_REMAINING: "{number, plural, one {You can add 1 more member.} other {You can add {number} more members.}}",
        GROUP_DM_INVITE_UNSELECT_USERS: "{number, plural, one {You must unselect 1 member.} other {You must unselect {number} members.}}",
        GROUP_DM_ADD_MEMBERS: "Add {number, plural, one {1 Member} other {{number} Members}}",
        GROUP_DM_INVITE_NO_FRIENDS: "You don't have any friends to add!",
        GROUP_DM_INVITE_NOT_FRIENDS: "You need to be friends with **!!{username}!!** to start a group DM",
        CALL: "Call",
        VOICE_CALL: "Voice Call",
        VIDEO_CALL: "Video Call",
        RING: "Ring",
        STOP_RINGING: "Stop Ringing",
        REDIAL: "Redial",
        VOICE_STATUS_RINGING: "Ringing…",
        VOICE_STATUS_NOT_CONNECTED: "Not Connected",
        IN_THE_VOICE_CHANNEL: "In the voice channel",
        NOT_IN_THE_VOICE_CHANNEL: "Not in the voice channel",
        IN_THE_CALL: "In the call",
        NOT_IN_THE_CALL: "Not in the call",
        CALL_INVITE_NOT_FRIENDS: "You need to be friends with **!!{username}!!** to start a call",
        START_CALL: "Start Call",
        JOIN_CALL: "Join Call",
        START_VOICE_CALL: "Start Voice Call",
        JOIN_VOICE_CALL: "Join Voice Call",
        START_VIDEO_CALL: "Start Video Call",
        JOIN_VIDEO_CALL: "Join Video Call",
        VOICE_ONLY: "Voice Only",
        ONGOING_CALL: "Ongoing Call",
        ONGOING_CALL_CONNECTED_USERS: "Ongoing Call — {numUsers} Connected",
        CAMERA_UNAVAILABLE: "Camera Unavailable",
        CAMERA_NOT_ENABLED: "Camera Not Enabled",
        BROWSER_NOT_SUPPORTED: "Browser Not Supported",
        ANSWER: "Answer",
        DECLINE: "Decline",
        LEAVE_CALL: "Leave Call",
        FOCUS_PARTICIPANT: "Focus Participant",
        UNFOCUS_PARTICIPANT: "Unfocus Participant",
        GROUP_DM_SETTINGS: "Group Settings",
        GROUP_NAME: "Group Name",
        MUTE_GROUP_DM: "Mute **!!{name}!!**",
        REGION: "region",
        CALL_UNAVAILABLE: "Call Unavailable",
        VOICE_UNAVAILABLE: "Voice Unavailable",
        VIDEO_UNAVAILABLE: "Video Unavailable",
        GROUPS: "Groups",
        GROUP: "Group",
        CAMERA_ON: "Turn On Camera",
        CAMERA_OFF: "Turn Off Camera",
        CAMERA_SWITCH: "Switch Camera",
        SCREEN_SHARE_ON: "Turn On Screen Share",
        SCREEN_SHARE_OPTIONS: "More Screen Share Options",
        FULL_SCREEN: "Full Screen",
        EXIT_FULL_SCREEN: "Exit Full Screen",
        CALL_OPTIONS: "Call Options",
        START_AUDIO_CALL: "Start an Audio Call",
        SCREENSHARE_CHANGE_WINDOWS: "Change Windows",
        SCREENSHARE_STOP: "Stop sharing your screen",
        CAMERA_NO_ACCESS: "You must grant Discord access to your camera in order to be able to video chat.",
        CAMERA_ENABLE_ACCESS: "Enable Camera Access",
        CAMERA_NO_DEVICE: "Derp, we can't detect any camera.",
        SCREENSHARE_UNAVAILABLE: "Screen Sharing Unavailable",
        SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP: "Download the Discord Desktop app to use screen sharing!",
        SCREENSHARE_EXTENSION_TITLE: "Extension Required",
        SCREENSHARE_EXTENSION_BODY: "Would you like to install the screen sharing extension?",
        VIDEO_POOR_CONNECTION_TITLE: "Poor Connection",
        VIDEO_POOR_CONNECTION_BODY: "Video has been disabled. It will resume when your connection improves.",
        OVERLAY_FRIEND_CALLING: "!!{name}!! is calling you!",
        OVERLAY_UNLOCK_TO_ANSWER: "Unlock to answer ({keybind})",
        INCOMING_CALL: "Incoming Call",
        INCOMING_CALL_MOBILE: "{calls, plural, one {Incoming Call} other {{calls} Incoming Calls}}",
        INCOMING_CALL_ELLIPSIS: "Incoming Call...",
        INCOMING_VIDEO_CALL_ELLIPSIS: "Incoming Video Call...",
        SCREENSHARE_SCREEN: "Your Entire Screen",
        SCREENSHARE_WINDOW: "Application Window",
        SCREENSHARE_SOURCE: "Source",
        SCREENSHARE_DESCRIPTION: "\nDiscord wants to share the contents of your screen with !!{name}!!.\n\nChoose which screen you'd like to share.\n  ",
        SCREENSHARE_STREAM_QUALITY: "Stream Quality",
        SCREENSHARE_FRAME_RATE: "Frame Rate",
        SYSTEM_MESSAGE_RECIPIENT_ADD: "[!!{username}!!](usernameOnClick) added [!!{otherUsername}!!](otherUsernameOnClick) to the group.",
        SYSTEM_MESSAGE_RECIPIENT_REMOVE: "[!!{username}!!](usernameOnClick) removed [!!{otherUsername}!!](otherUsernameOnClick) from the group.",
        SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF: "[!!{username}!!](usernameOnClick) left the group.",
        SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE: "[!!{username}!!](usernameOnClick) changed the channel name: **!!{channelName}!!**",
        SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE: "[!!{username}!!](usernameOnClick) changed the channel icon.",
        SYSTEM_MESSAGE_CALL_STARTED: "[!!{username}!!](usernameOnClick) started a call.",
        SYSTEM_MESSAGE_CALL_MISSED: "You missed a call from [!!{username}!!](usernameOnClick).",
        SYSTEM_MESSAGE_JOIN_CALL: "Join the call",
        SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA: "[!!{username}!!](usernameOnClick) pinned a message to this channel.",
        SYSTEM_MESSAGE_PINNED_MESSAGE: "$[!!{username}!!](usernameHook) pinned a message to this channel. [See all the pins.](pinsActionOnClick)",
        SYSTEM_MESSAGE_PINNED_MESSAGE_MOBILE: "[!!{username}!!](usernameOnClick) pinned a message to this channel.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN: "[!!{username}!!](usernameOnClick) just joined the server - glhf!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_01: "[!!{username}!!](usernameOnClick) just joined. Everyone, look busy!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_02: "[!!{username}!!](usernameOnClick) just joined. Can I get a heal?",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_03: "[!!{username}!!](usernameOnClick) joined your party.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_04: "[!!{username}!!](usernameOnClick) joined. You must construct additional pylons.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_05: "Ermagherd. [!!{username}!!](usernameOnClick) is here.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_06: "Welcome, [!!{username}!!](usernameOnClick). Stay awhile and listen.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_07: "Welcome, [!!{username}!!](usernameOnClick). We were expecting you ( ͡° ͜ʖ ͡°)",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_08: "Welcome, [!!{username}!!](usernameOnClick). We hope you brought pizza.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_09: "Welcome [!!{username}!!](usernameOnClick). Leave your weapons by the door.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_10: "A wild [!!{username}!!](usernameOnClick) appeared.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_11: "Swoooosh. [!!{username}!!](usernameOnClick) just landed.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_12: "Brace yourselves. [!!{username}!!](usernameOnClick) just joined the server.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_13: "[!!{username}!!](usernameOnClick) just joined. Hide your bananas.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_14: "[!!{username}!!](usernameOnClick) just arrived. Seems OP - please nerf.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_15: "[!!{username}!!](usernameOnClick) just slid into the server.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_16: "A [!!{username}!!](usernameOnClick) has spawned in the server.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_17: "Big [!!{username}!!](usernameOnClick) showed up!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_18: "Where’s [!!{username}!!](usernameOnClick)? In the server!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_19: "[!!{username}!!](usernameOnClick) hopped into the server. Kangaroo!!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_20: "[!!{username}!!](usernameOnClick) just showed up. Hold my beer.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_21: "Challenger approaching - [!!{username}!!](usernameOnClick) has appeared!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_22: "It's a bird! It's a plane! Nevermind, it's just [!!{username}!!](usernameOnClick).",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_23: "It's [!!{username}!!](usernameOnClick)! Praise the sun! [T]/",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_24: "Never gonna give [!!{username}!!](usernameOnClick) up. Never gonna let [!!{username}!!](usernameOnClick) down.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_25: "Ha! [!!{username}!!](usernameOnClick) has joined! You activated my trap card!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_26: "Cheers, love! [!!{username}!!](usernameOnClick)'s here!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_27: "Hey! Listen! [!!{username}!!](usernameOnClick) has joined!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_28: "We've been expecting you [!!{username}!!](usernameOnClick)",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_29: "It's dangerous to go alone, take [!!{username}!!](usernameOnClick)!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_30: "[!!{username}!!](usernameOnClick) has joined the server! It's super effective!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_31: "Cheers, love! [!!{username}!!](usernameOnClick) is here!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_32: "[!!{username}!!](usernameOnClick) is here, as the prophecy foretold.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_33: "[!!{username}!!](usernameOnClick) has arrived. Party's over.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_34: "Ready player [!!{username}!!](usernameOnClick)",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_35: "[!!{username}!!](usernameOnClick) is here to kick butt and chew bubblegum. And [!!{username}!!](usernameOnClick) is all out of gum.",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_36: "Hello. Is it [!!{username}!!](usernameOnClick) you're looking for?",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_37: "[!!{username}!!](usernameOnClick) has joined. Stay a while and listen!",
        SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_38: "Roses are red, violets are blue, [!!{username}!!](usernameOnClick) joined this server with you",
        ONBOARDING_AVATAR_UPLOAD_TO_MESSAGE: "Upload an Avatar",
        ONBOARDING_AVATAR_UPLOAD_TITLE: "Welcome, !!{username}!!",
        ONBOARDING_AVATAR_UPLOAD_BLURB: "To get started, tell us a little about yourself",
        ONBOARDING_AVATAR_UPLOAD_SET_AVATAR: "Set your avatar",
        ONBOARDING_AVATAR_UPLOAD_SET_AVATAR_BLURB: "Don't think too hard. You can always change it later.",
        ONBOARDING_AVATAR_UPLOAD_UPLOAD_A_PHOTO: "Upload an Avatar",
        ONBOARDING_GUILD_SETTINGS_TO_MESSAGE: "Create a Server",
        ONBOARDING_GUILD_SETTINGS_TITLE: "Let's Set Up Your Server",
        ONBOARDING_GUILD_SETTINGS_BLURB: "Something about naming it and uploading an icon to stand out on the left",
        ONBOARDING_GUILD_SETTINGS_SERVER_SUBTITLE: "What shall we name your server?",
        ONBOARDING_GUILD_SETTINGS_SERVER_REGION: "Server region",
        ONBOARDING_GUILD_SETTINGS_SERVER_CHANGE_REGION: "Change Region",
        ONBOARDING_GUILD_SETTINGS_UPLOAD_SUBTITLE: "Upload a server icon",
        ONBOARDING_GUILD_SETTINGS_UPLOAD_BLURB: "Make your server stand out. Upload an icon for it",
        ONBOARDING_GUILD_SETTINGS_UPLOAD_BUTTON: "Upload a Photo",
        ONBOARDING_MIC_ACCESS_TO_MESSAGE: "Enable Microphone",
        ONBOARDING_MIC_ACCESS_TITLE: "Grant Microphone Access",
        ONBOARDING_MIC_ACCESS_BLURB: "In order to talk to your friends, we will need access to your mic",
        ONBOARDING_MIC_ACCESS_SUBTITLE: "Allow Discord to use the microphone",
        ONBOARDING_MIC_TEST_TO_MESSAGE: "Test Microphone",
        ONBOARDING_MIC_TEST_TITLE: "Hello, can you hear me?",
        ONBOARDING_MIC_TEST_BLURB: "Lets take a second and make sure others will be able to hear you",
        ONBOARDING_MIC_TEST_BUTTON: "Test Your Mic",
        ONBOARDING_MIC_TEST_MANUAL: "Manually setup your microphone",
        ONBOARDING_MIC_TEST_BUTTON_TEST_MIC: "Test Your Mic",
        ONBOARDING_MIC_TEST_BUTTON_LISTENING: "Listening...",
        ONBOARDING_MIC_TEST_BUTTON_LISTENING_DELAY: "Still can't hear you, perhaps try a different device?",
        ONBOARDING_MIC_TEST_BUTTON_SUCCESS: "There we go, perfect!",
        ONBOARDING_TEXT_CHAT_TO_MESSAGE: "Discord has it all",
        ONBOARDING_TEXT_CHAT_TITLE: "Experience Modern Text Chat",
        ONBOARDING_TEXT_CHAT_BLURB: "Rich embeds, markdown, yadayadayada cool stuff about text chat.",
        ONBOARDING_APP_DOWNLOADS_TO_MESSAGE: "One More Step",
        ONBOARDING_APP_DOWNLOADS_TITLE: "Your Browser Is Cool But Our Apps Are Better",
        ONBOARDING_APP_DOWNLOADS_BLURB: "Unlock the full feature set by downloading Discord on your desktop and phone.",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_TITLE: "Discord for {platform}",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_BUTTON: "Download",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_VERSION_WINDOWS: "Windows 7 or higher",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_VERSION_OSX: "OSX 10.10 (Yosemite) or higher",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_VERSION_LINUX: "Linux 9000",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_FEATURE_1: "System wide Push-to-Talk",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_FEATURE_2: "Automatic Game Detection",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_FEATURE_2_WINDOWS: "In-Game Overlay",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_FEATURE_3: "Minimal CPU Usage",
        ONBOARDING_APP_DOWNLOADS_DESKTOP_FEATURE_4: "Desktop Notifications",
        ONBOARDING_APP_DOWNLOADS_MOBILE_APPLE_VERSION: "iOS7 or higher",
        ONBOARDING_APP_DOWNLOADS_MOBILE_ANDROID_VERSION: "Android v16 and up",
        ONBOARDING_APP_DOWNLOADS_MOBILE_TEXT_LINK: "Text me a link",
        ONBOARDING_APP_DOWNLOADS_MOBILE_TEXT_LINK_SUCCESS: "Text Sent!",
        ONBOARDING_APP_DOWNLOADS_MOBILE_TEXT_LINK_FAILURE: "Oops, try again",
        ONBOARDING_CLAIM_ACCOUNT_TO_MESSAGE: "Next",
        ONBOARDING_CLAIM_ACCOUNT_TITLE: "What's Up, !!{username}!!",
        ONBOARDING_CLAIM_ACCOUNT: "Register Your Account",
        ONBOARDING_CLAIM_ACCOUNT_BLURB: "Happy to see you drop in. Let's get right to it!",
        ONBOARDING_CLAIM_ACCOUNT_CHECK_EMAIL: "Check Your Email!",
        ONBOARDING_CLAIM_ACCOUNT_EMAIL_TO: "We've sent a confirmation email to !!{email}!!",
        ONBOARDING_ALL_DONE_TO_MESSAGE: "Start Using Discord",
        ONBOARDING_NEXT: "Next",
        ONBOARDING_GET_READY_TO_DITCH: "Get ready to ditch Skype and Teamspeak",
        ONBOARDING_START_BLURB: "Discord is an all-in-one voice and text chat for gamers that's free, secure,\n    and works on both your desktop and phone.",
        ONBOARDING_CONTINUE: "Press Start to Continue",
        ONBOARDING_SKIP_SETUP: "Skip Setup",
        ONBOARDING_EMAIL_FIELD: "What's your email?",
        ONBOARDING_ENTER_PASSWORD: "Choose a secret password",
        ONBOARDING_CREATE_ACCOUNT: "Create Account",
        INVITE_MODAL_TITLE: "Hello, you!",
        INVITE_MODAL_CONTENT: "You've been invited to **!!{channelName}!!** in **!!{guildName}!!**",
        INVITE_MODAL_BUTTON: "Join **!!{guildName}!!**",
        INVITE_MODAL_OPEN_BUTTON: "Open **!!{guildName}!!**",
        INIVTE_MODAL_NO_THANKS: "No thanks",
        INVITE_MODAL_ERROR_TITLE: "Whoops...",
        INVITE_MODAL_ERROR_DEFAULT: "Unable to accept invite",
        DISABLING_EMAIL_NOTIFICATIONS: "Disabling E-mail Notifications",
        DISABLE_EMAIL_NOTIFICATIONS: "Success! We've disabled e-mail notifications for you!",
        DISABLE_EMAIL_NOTIFICATIONS_BODY: "You can close out of this page now and go about your day.",
        DISABLE_EMAIL_NOTIFICATIONS_FAILED: "Whoops! We couldn't disable e-mail notifications for your e-mail address.",
        DISABLE_EMAIL_NOTIFICATIONS_FAILED_SUGGESTION: "E-mail notifications may already be disabled, or this e-mail may no longer be associated with a Discord account.",
        KEYBIND_CONFLICT: "This conflicts with a built-in shortcut. We have disabled the built-in shortcut.",
        KEYBIND_DESCRIPTION_MODAL_TITLE: "Keyboard Combos",
        KEYBIND_DESCRIPTION_MODAL_SUBTITLE: "Master these to be the greatest Discord Discord Revolution player",
        KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS: "Navigate between servers",
        KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ: "Mark server read",
        KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS: "Navigate between channels",
        KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS: "Navigate between unread channels",
        KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS: "Navigate between unread channels with mentions",
        KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD: "Jump to oldest unread message",
        KEYBIND_DESCRIPTION_MODAL_RETURN_TO_AUDIO_CHANNEL: "Return to connected audio channel",
        KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ: "Mark channel as read",
        KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD: "Toggle between last server and DMs",
        KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD: "Create or join a server",
        KEYBIND_DESCRIPTION_MODAL_FIND_CONVERSATION: "Find or start a direct message",
        KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER: "Toggle QuickSwitcher",
        KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP: "Create a private group",
        KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS: "Toggle pins popout",
        KEYBIND_DESCRIPTION_MODAL_TOGGLE_MENTIONS: "Toggle mentions popout",
        KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS: "Toggle channel member list",
        KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE: "Toggle mute",
        KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN: "Toggle deafen",
        KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT: "Answer incoming call",
        KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE: "Decline incoming call",
        KEYBIND_DESCRIPTION_MODAL_CALL_START: "Start call in private message or group",
        KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT: "Scroll chat up or down",
        KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA: "Focus text area",
        KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE: "Upload a file",
        KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS: "Toggle emoji picker",
        KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP: "Get help",
        KEYBIND_DESCRIPTION_MODAL_TOGGLE_HOTKEYS: "Toggle hotkeys",
        KEYBIND_DESCRIPTION_MODAL_EASTER_EGG: "Raging Demon",
        KEYBIND_DESCRIPTION_MODAL_SEARCH: "Search",
        FRIEND_SUGGESTION: "Friend Suggestion",
        FRIEND_SUGGESTION_NOTIFICATION: "Your friend !!{name}!! from !!{platformName}!! has joined Discord.",
        SEND_FRIEND_REQUEST: "Send Friend Request",
        INVITE_NOTICE_MESSAGE: "An adventure begins.",
        INVITE_NOTICE_MESSAGE_PART_2: "Let's add some party members!",
        INVITE_NOTICE_TITLE: "Invite friends!",
        INVITE_NOTICE_BODY: "Send this link to add friends to your server.",
        INVITE_PEOPLE: "Invite People",
        INVITE_TO_SERVER_NAME: "Invite People to !!{guildName}!!",
        SHARE_INVITE_LINK_FOR_ACCESS: "Share this link with others to grant access to this server",
        SHARE_INVITE_MOBILE: "Share {inviteUrl}",
        INVITE_LINK_COPIED: "Invite copied!",
        INVITE_NO_CHANNELS: "Invites require a channel, there are no channels in this server.",
        INVITE_LINKS_EXPIRE_AFTER_1_DAY: "Invite links expire every 1 day by default",
        INVITE_LINKS_NEVER_EXPIRES: "This link never expires — revoke access in settings.",
        INVITE_BANNER_INVITE_TO_SERVER: "Send this link to add friends to your server",
        INVITE_BANNER_SHARE_INVITE_LINK_FOR_ACCESS: "Servers are meant to be shared.",
        INVITE_BANNER_DOES_NOT_EXPIRE: "This link does not expire. You can manage all invite links in Server Settings",
        SET_INVITE_LINK_NEVER_EXPIRE: "Set this link to never expire",
        LINK_SETTINGS: "Link Settings",
        GENERATE_A_NEW_LINK: "Generate a New Link",
        CREATE_LINK: "Create Link",
        INVITE_LINK_PLACEHOLDER: "...",
        HOW_TO_INVITE_OTHERS: 'Hello. Beep. Boop. If you wanna invite friends to this server, click the server name in the top left and select "!!{invitePeople}!!". Beep!',
        GRANT_TEMPORARY_MEMBERSHIP: "Grant temporary membership",
        TEMPORARY_MEMBERSHIP_EXPLANATION: "Temporary members are automatically kicked when they disconnect unless a role\n    has been assigned",
        MAX_NUMBER_OF_USES: "Max Number of Uses",
        EXPIRE_AFTER: "Expire After",
        ONLY_YOU_CAN_SEE_AND_DELETE_THESE: "Only you can see {count, plural, one {this} other {these}} — [delete {count, plural, one {this message} other {these messages}}](handleDelete).",
        NEW: "new",
        NEW_MENTIONS: "New Mentions",
        NEW_UNREADS: "New Unreads",
        CHANNEL_MEMBERS: "Channel Members",
        FILTER_OPTIONS: "Filter Options",
        FILTER_MENTIONS: "Filter Mentions",
        SERVER_OPTIONS: "Server Options",
        INVALID_EMOJI_BODY: "That emoji you just used doesn't work here because it's from a different server.",
        INVALID_EMOJI_BODY_UPGRADE: "That emoji you just used doesn't work here because it's from a different server. Discord Nitro can solve all of that, check User Settings > Nitro for details",
        ADD_REACTION: "Add Reaction",
        OTHER_REACTIONS: "Other Reactions",
        TOO_MANY_REACTIONS_ALERT_HEADER: "Doh!",
        TOO_MANY_REACTIONS_ALERT_BODY: "Your reaction was not added because there are too many reactions on this message.",
        REACTION_TOOLTIP_1: "!!{a}!! reacted with !!{emojiName}!!",
        REACTION_TOOLTIP_1_N: "!!{a}!! and {n, plural, one {1 other} other {{n} others}} reacted with !!{emojiName}!!",
        REACTION_TOOLTIP_2: "!!{a}!! and !!{b}!! reacted with !!{emojiName}!!",
        REACTION_TOOLTIP_2_N: "!!{a}!!, !!{b}!!, and {n, plural, one {1 other} other {{n} others}} reacted with !!{emojiName}!!",
        REACTION_TOOLTIP_3: "!!{a}!!, !!{b}!! and !!{c}!! reacted with !!{emojiName}!!",
        REACTION_TOOLTIP_3_N: "!!{a}!!, !!{b}!!, !!{c}!!, and {n, plural, one {1 other} other {{n} others}} reacted with !!{emojiName}!!",
        REACTION_TOOLTIP_N: "{n, plural, one {1 person} other {{n} people}} reacted with !!{emojiName}!!",
        LOAD_REACTIONS_ERROR: "Whoops, something went wrong. Touch the dookie to try again.",
        HOLD_UP: "Hold Up",
        MASKED_LINK_BODY: "Links are spoopy. This link goes to **!!{url}!!**. Are you sure you want to go there?",
        MASKED_LINK_CANCEL: "Cancel",
        MASKED_LINK_CONFIRM: "Yep!",
        MASKED_LINK_TRUST_THIS_DOMAIN: "Trust this Domain",
        ACCESSIBILITY_FONT_SCALING_LABEL: "Chat font scaling",
        ACCESSIBILITY_ZOOM_LEVEL_LABEL: "Zoom level",
        NEW_TERMS_TITLE: "Terms of Service and Privacy Update",
        NEW_TERMS_DESCRIPTION: "\nTo continue using Discord, please read and agree to\nour updated Terms of Service and Privacy Policy.",
        NEW_TERMS_ACK: "I understand and agree with these terms.",
        NEW_TERMS_CONTINUE: "Continue to Discord",
        TERMS_OF_SERVICE: "[Terms of Service]({url})",
        PRIVACY_POLICY: "[Privacy Policy]({url})",
        SEARCH_IN: "Search in {guildName}",
        SEARCH_DM_WITH: "Search DM with {userName}",
        SEARCH_DATE_PICKER_HINT: "You can also do",
        SEARCH_RELEVANT: "Relevant",
        SEARCH_RECENT: "Recent",
        SEARCH_FOR_VALUE: "Search For: **{value}**",
        SEARCH_FOR_EMPTY: "Search",
        TOTAL_RESULTS: "{count, plural, =0 {No Results} one {{count} Result} other {{count} Results}}",
        STILL_INDEXING: "Indexing",
        SEARCHING: "Searching…",
        SEARCH_NO_RESULTS: "We searched far and wide. Unfortunately, no results were found.",
        SEARCH_NO_RESULTS_ALT: "No results found. Empathy banana is here for you.",
        SEARCH_GUILD_STILL_INDEXING: "Before searching, we need to index this server. Give us a bit.",
        SEARCH_DM_STILL_INDEXING: "Before searching, we need to index this DM. Give us a bit.",
        SEARCH_ERROR: "Crap, we dropped the magnifying glass. Uh… can you try searching again?",
        SEARCH_STILL_INDEXING_HINT: "{count, plural, =0 {No results} one {{count} result} other {{count} results}} indexed so far. We’re still indexing older messages.",
        SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN: "We’ve hidden {count, plural, one {{count} result} other {{count} results}} from users you’ve blocked.",
        SEARCH_HIDE_BLOCKED_MESSAGES: "Hide {count, plural, one {{count} message} other {{count} messages}} from blocked users",
        SEARCH_PICK_DATE: "Pick a date",
        SEARCH_GROUP_HEADER_FROM: "From User",
        SEARCH_GROUP_HEADER_MENTIONS: "Mentions User",
        SEARCH_GROUP_HEADER_HAS: "Message Contains",
        SEARCH_GROUP_HEADER_CHANNELS: "In Channel",
        SEARCH_GROUP_HEADER_LINK_FROM: "Link From Website",
        SEARCH_GROUP_HEADER_FILE_NAME: "File Name Contains",
        SEARCH_GROUP_HEADER_FILE_TYPE: "File type",
        SEARCH_GROUP_HEADER_SEARCH_OPTIONS: "Search Options",
        SEARCH_GROUP_HEADER_HISTORY: "History",
        SEARCH_GROUP_HEADER_DATES: "Dates",
        SEARCH_FILTER_FROM: "from",
        SEARCH_FILTER_HAS: "has",
        SEARCH_FILTER_BEFORE: "before",
        SEARCH_FILTER_ON: "on",
        SEARCH_FILTER_DURING: "during",
        SEARCH_FILTER_AFTER: "after",
        SEARCH_FILTER_IN: "in",
        SEARCH_FILTER_MENTIONS: "mentions",
        SEARCH_FILTER_LINK_FROM: "linkFrom",
        SEARCH_FILTER_FILE_TYPE: "fileType",
        SEARCH_FILTER_FILE_NAME: "fileName",
        SEARCH_ANSWER_FROM: "user",
        SEARCH_ANSWER_HAS: "link, embed or file",
        SEARCH_ANSWER_DATE: "specific date",
        SEARCH_ANSWER_IN: "channel",
        SEARCH_ANSWER_MENTIONS: "user",
        SEARCH_ANSWER_LINK_FROM: "website",
        SEARCH_ANSWER_FILE_TYPE: "extension",
        SEARCH_ANSWER_FILE_NAME: "file name",
        SEARCH_SHORTCUT_TODAY: "today",
        SEARCH_SHORTCUT_YESTERDAY: "yesterday",
        SEARCH_SHORTCUT_WEEK: "week",
        SEARCH_SHORTCUT_MONTH: "month",
        SEARCH_SHORTCUT_YEAR: "year",
        SEARCH_ANSWER_HAS_LINK: "link",
        SEARCH_ANSWER_HAS_ATTACHMENT: "file",
        SEARCH_ANSWER_HAS_EMBED: "embed",
        SEARCH_ANSWER_HAS_IMAGE: "image",
        SEARCH_ANSWER_HAS_VIDEO: "video",
        SEARCH_ANSWER_HAS_SOUND: "sound",
        SEARCH_CLEAR_HISTORY: "Clear Search History",
        PAGINATION_PAGE_OF: "Page {page} of {totalPages}",
        PREMIUM_SUBTITLE: "Support Discord’s development and get bonus features for your account",
        PREMIUM_MONTH_SUBSCRIPTION: "**{currencySymbol}{amount} {currencyCode}** / Month",
        PREMIUM_YEAR_SUBSCRIPTION: "**{currencySymbol}{amount} {currencyCode}** / Year",
        PREMIUM_YEAR_FREE_MONTHS: "Get 2 Months Free!",
        PREMIUM_ADD_CARD: "Add Card",
        PREMIUM_NO_CARD: "No card on file",
        PREMIUM_NO_CARD_DETAILS: "You must add a card to keep your subscription active",
        PREMIUM_NOT_VERIFIED: "Verify your account first",
        PREMIUM_NOT_CLAIMED: "Claim your account first",
        PREMIUM_FEATURE_TITLE_ANIMATED_AVATAR: "Animated Avatar",
        PREMIUM_FEATURE_DESCRIPTION_ANIMATED_AVATAR: "Upload a GIF avatar that plays in your profile and when moused over in chat.",
        PREMIUM_FEATURE_TITLE_CUSTOM_EMOJI: "Use Custom Emoji Everywhere",
        PREMIUM_FEATURE_DESCRIPTION_CUSTOM_EMOJI: "Get a global passport to use your custom emoji in any server or DM.",
        PREMIUM_FEATURE_TITLE_UPOAD_LIMIT: "Boosted Upload Limit",
        PREMIUM_FEATURE_DESCRIPTION_UPLOAD_LIMIT: "Share big images and files with a larger upload size of {maxUploadPremium} (from {maxUploadStandard}).",
        PREMIUM_FEATURE_TITLE_BADGE: "Rep Your Discord Support",
        PREMIUM_FEATURE_DESCRIPTION_BADGE: "Display how long you’ve supported Discord with a special profile badge.",
        PREMIUM_PROMO_TITLE: "Want to use emoji everywhere?",
        PREMIUM_PROMO_DESCRIPTION: "Lift off with the Discord Nitro to use custom emoji in any server.",
        PREMIUM_PROMO_AUTOCOMPLETE: "Use custom emojis anywhere",
        PREMIUM_PROMO_AUTOCOMPLETE_CTA: "Get Discord Nitro",
        PREMIUM_TITLE: "Discord Nitro",
        PREMIUM_INFO: "{currencySymbol}{amount} {currencyCode} occurs on {date, date, medium}",
        PREMIUM_PAST_DUE: "Your subscription past due. Please fix your credit card info.",
        PREMIUM_CANCELED: "Your subscription ends on {date, date, medium}.",
        PREMIUM_TYPE_MONTHLY: "MONTHLY",
        PREMIUM_TYPE_YEARLY: "YEARLY",
        PREMIUM_CANCEL_CONFIRM_BODY: "Are you sure you want to cancel your Nitro Subscription?",
        PREMIUM_CANCEL_CONFIRM_BODY_DETAILED: "Cancellation will be effective at the end of your current billing period on **{date, date, medium}**.\n\nYou can restart your membership at anytime.",
        PREMIUM_CANCEL_CONFIRM: "Yup, Cancel Nitro",
        PREMIUM_CANCEL_CANCEL: "Nope",
        PREMIUM_CANCEL_FAILED_BODY: "We were unable to cancel your Nitro subscription. Please try again or reach out to our support team if this problem continues.",
        PREMIUM_UPGRADE_CONFIRM_BODY: "Are you sure you want to upgrade your Nitro Subscription?",
        PREMIUM_UPGRADE_CONFIRM_BODY_DETAILED: "Boost for a year and **get two months free**. Price and speed efficiency.\n\nWe'll also prorate your current month and deduct it from the yearly price. You will be charged **{currencySymbol}{amount} {currencyCode}**.",
        PREMIUM_UPGRADE_CONFIRM: "Yup, Upgrade Nitro",
        PREMIUM_UPGRADE_CANCEL: "Nope",
        PREMIUM_UPGRADE_FAILED_BODY: "Uhh.. That upgrade didn't work. Ensure your card information is up to date and try again.",
        PREMIUM_UPLOAD_PROMO: "Upgrade to Discord Nitro for {maxUploadPremium} file limit",
        PREMIUM_ACTIVATED: "Nitro Activated!",
        PREMIUM_ALERT_ERROR_TITLE: "Oops, something went wrong...",
        PAYMENT_METHOD_TITLE: "Payment Method",
        PAYMENT_METHOD_CHANGE_CARD: "Change Card",
        PAYMENT_METHOD_REMOVE_CARD: "Remove Card",
        PAYMENT_METHOD_CARD_ENDING: "{brand} ending in **{last_4}**",
        PAYMENT_METHOD_CARD_EXPIRES: "Expires {month} {year}",
        PAYMENT_METHOD_INVALID: "The card ending in {last_4} is invalid",
        PAYMENT_METHOD_INVALID_DETAILS: "You must update your card or Nitro will expire",
        PAYMENT_MODAL_TITLE_NEW_MONTHLY: "{currencySymbol}{amount} {currencyCode} per Month",
        PAYMENT_MODAL_TITLE_NEW_YEARLY: "{currencySymbol}{amount} {currencyCode} per Year",
        PAYMENT_MODAL_TITLE_CHANGE: "Change Credit Card",
        PAYMENT_MODAL_SUBTITLE: "Discord Nitro Subscription",
        PAYMENT_MODAL_BUTTON_NEW: "Upgrade to Nitro",
        PAYMENT_MODAL_BUTTON_CHANGE: "Update Credit Card",
        STRIPE_UNABLE_TO_LOAD: "Unfortunately our payment processor is unable to load right now. Please try again later",
        BILLING_HISTORY: "Billing History",
        DATE: "Date",
        DESCRIPTION: "Description",
        AMOUNT: "Amount",
        PENDING: "Pending",
        COMPLETED: "Completed",
        FAILED: "Failed",
        REVERSED: "Reversed",
        REFUND: "Refund",
        RESUBSCRIBE: "Re-subscribe",
        UPGRADE_YEARLY: "Upgrade to Yearly",
        CREDIT_CARD_ERROR_NUMBER: "Something is wrong with your credit card number",
        CREDIT_CARD_ERROR_EXPIRATION: "Something is wrong with your expiration date",
        CREDIT_CARD_ERROR_SECURITY_CODE: "Something is wrong with your security code",
        CREDIT_CARD_ERROR_ZIP_CODE: "Something is wrong with your postal code",
        ZIP_CODE: "Zip",
        CREDIT_CARD_NUMBER: "Credit Card Number",
        FILE_UPLOAD_LIMIT_STANDARD: "8MB",
        FILE_UPLOAD_LIMIT_PREMIUM: "50MB",
        STAFF_BADGE_TOOLTIP: "Discord Staff",
        PARTNER_BADGE_TOOLTIP: "Discord Partner",
        HYPESQUAD_BADGE_TOOLTIP: "Discord HypeSquad Member",
        PREMIUM_BADGE_TOOLTIP: "Discord Nitro Subscriber since {date, date, medium}",
        SELF_XSS_HEADER: "Hold Up!",
        SELF_XSS_LINE_1: "If someone told you to copy/paste something here you have an 11/10 chance you're being scammed.",
        SELF_XSS_LINE_2: "Pasting anything in here could give attackers access to your Discord account.",
        SELF_XSS_LINE_3: "Unless you understand exactly what you are doing, close this window and stay safe.",
        QUICKSWITCHER_PLACEHOLDER: "Where would you like to go today?",
        QUICKSWITCHER_NOTICE: "Use Quick Switcher to get around Discord quickly. Just press:",
        QUICKSWITCHER_QUERYMODE_USERS: "Searching All Users",
        QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS: "Searching Text Channels",
        QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS: "Searching Voice Channels",
        QUICKSWITCHER_QUERYMODE_GUILDS: "Searching Servers",
        QUICKSWITCHER_LAST_CHANNEL: "Last Channel",
        QUICKSWITCHER_DRAFTS: "Drafts",
        QUICKSWITCHER_MENTIONS: "Mentions",
        QUICKSWITCHER_UNREAD_CHANNELS: "Unread Channels",
        QUICKSWITCHER_TIP_NAV: "$[tab](shortcutHook) or $[down](shortcutHook) $[up](shortcutHook) to navigate",
        QUICKSWITCHER_TIP_SELECT: "$[return](shortcutHook) to select $[esc](shortcutHook) to dismiss",
        QUICKSWITCHER_EMPTY_TEXT: "Can’t seem to find what you’re looking for?",
        QUICKSWITCHER_EMPTY_CTA: "Learn more about Quick Switcher",
        QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH: "Search for servers, channels or DMs",
        QUICKSWITCHER_TUTORIAL_MESSAGE_SELECT: "Select a result and press ENTER to jump to it",
        USER_SETTINGS_VOICE_CODEC_TITLE: "Audio Codec",
        USER_SETTINGS_VOICE_CODEC_DESCRIPTION: "Discord uses only the best organic locally-sourced Opus Voice codec.",
        USER_SETTINGS_VOICE_ADD_MULTIPLE: "You can add multiple Push to Talk binds under [Keybind Settings](onClick).",
        A11Y_NITRO_BADGE: "User is subscribed to Nitro.",
        USERNAME: "Username",
        ACCOUNT_NAME: "Account Name",
        SERVICE_CONNECTIONS_DISCONNECT: "Disconnect",
        REPORT_SERVER: "Report Server — !!{name}!!",
        REPORT_MESSAGE: "Report Message Posted by !!{name}!!",
        REPORT_USER: "Report User — !!{name}!!",
        FORM_LABEL_REPORT_REASON: "What is it you’re reporting?",
        FORM_REPORT_HELP_TEXT: "\nReports are sent to the Discord Trust & Safety team - **not the server owner**.\n\nCreating false reports and/or spamming the report button may result in a suspension of reporting abilities.\n\nLearn more from the [Discord Community Guidelines]({guidelinesURL}).\nThanks for keeping things safe and sound.\n  ",
        PERMISSION_MICROPHONE_DENIED: "Microphone access denied - Discord requires audio access to connect to a call.",
        PERMISSION_MEDIA_DENIED: "Media access denied - Discord requires access to storage to post attachments.",
        PERMISSION_MEDIA_DOWNLOAD_DENIED: "Download access denied - Discord requires storage access to download files.",
        SERVER_OVERVIEW: "Server Overview",
        GUILD_SETTINGS_ICON_RECOMMEND: "We recommend an image of at least 512x512 for your server.",
        GUILD_SETTINGS_SPLASH_RECOMMEND: "We recommend an image with a 16:9 aspect ratio. The minimum size allowed is 1920x1080.",
        UPLOAD_IMAGE: "Upload Image",
        UPLOAD_BACKGROUND: "Upload Background",
        GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_INTRO: "This will determine whether members who have not explicitly set their notification settings receive a notification for every message sent in this server or not.",
        GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_PROTIP: "We highly recommend setting this to only @mentions for a public Discord to avoid [this insanity]({videoURL}).",
        GUILD_SETTINGS_SERVER_INVITE_BACKGROUND: "Server Invite Background",
        GUILD_SETTINGS_OVERVIEW_NOTICE: "Careful! You have unsaved changes!",
        GUILD_SETTINGS_EMOJI_ALIAS: "Alias",
        GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER: "Enter Alias",
        GUILD_SETTINGS_EMOJI_UPLOAD_TO_SERVER_MESSAGE: "Don't let your memes be dreams. Add up to {count} custom emoji that anyone can use on this server.  Emoji names must be at least 2 characters long and can only contain alphanumeric characters and underscores.",
        SETTINGS_WEBHOOKS_INTRO: "\nWebhooks are an easy way to get automated messages and data updates sent to a text channel in your server using internet magic. [Learn more]({articleURL}).\n",
        SETTINGS_WEBHOOKS_EMPTY_TITLE: "No Webhooks",
        SETTINGS_WEBHOOKS_EMPTY_BODY: "Create a webhook to begin the magic",
        SETTINGS_NOTICE_MESSAGE: "Careful — you have unsaved changes!",
        SAVE_CHANGES: "Save Changes",
        WEBHOOK_MODAL_TITLE: "Edit Webhook",
        WEBHOOK_MODAL_ICON_TITLE: "Webhook Icon",
        WEBHOOK_MODAL_ICON_DESCRIPTION: "We recommend an image of at least 256x256",
        SETTINGS_ROLES_DELETE_TITLE: "Delete Role",
        SETTINGS_ROLES_DELETE_BODY: "Are you sure you want to delete the **!!{name}!!** role? This action cannot be undone.",
        SETTINGS_ROLES_HELPDESK_LINK: "Need help with roles? [Get help]({articleURL})",
        SETTINGS_PERMISSIONS_DELETE_TITLE: "Delete Permission Settings",
        SETTINGS_PERMISSIONS_DELETE_BODY: "Are you sure you want to delete **!!{name}!!** permissions? This action cannot be undone.",
        SETTINGS_PERMISSIONS_TITLE: "Roles & Members",
        SETTINGS_INVITE_TIP: "Here's a list of all active invite links. You can revoke any one or [create one](onCreateInvite).",
        INVITES: "Invites",
        SEARCH_COUNTRY: "Search a country",
        ENTER_PHONE_TITLE: "Enter a Phone Number",
        ENTER_PHONE_DESCRIPTION: "Please enter your phone number. You will receive a text message with your verification code.",
        VERIFICATION_PHONE_TITLE: "Verify Your Number",
        VERIFICATION_PHONE_DESCRIPTION: "Enter the 6 digit code we sent to your phone.",
        RESEND_CODE: "Resend Code",
        COUNTRY_CODES: "Country Codes",
        COUNTRY_NO_RESULTS: "No countries found.",
        EMAIL: "Email",
        PHONE: "Phone",
        VERIFY_BY: "Verify by",
        VERIFY_BY_EMAIL: "Verify by Email",
        VERIFY_BY_EMAIL_FORMATTED: "Verify by\n**Email**",
        ENTER_EMAIL_BODY: "In order to verify your email address, you must first enter an email address.",
        VERIFY_EMAIL_BODY: "Please check your email and follow the instructions to verify your account.  If you did not receive an email or if it expired, you can resend one.",
        VERIFY_EMAIL_BODY_RESENT: "\n  We have sent you a new verification email to **!!{email}!!**, please check both your inbox and spam folder.\n  ",
        VERIFY_ACCOUNT: "Verify Account",
        VERIFICATION_TITLE: "Something's Going on Here",
        VERIFICATION_BODY: "We've detected something out of the ordinary going on.\nTo continue using Discord, **we will need you to verify you’re human.**",
        VERIFICATION_FOOTER: "Think you're seeing this by mistake?",
        VERIFICATION_FOOTER_SUPPORT: "[Support]({supportURL})",
        VERIFICATION_FOOTER_LOGOUT: "[Log Out](logoutOnClick)",
        VERIFY_BY_PHONE: "Verify by Phone",
        VERIFY_BY_PHONE_FORMATTED: "Verify by\n**Phone**",
        RESEND_EMAIL: "Resend my verification email!",
        CHANGE_EMAIL: "Click here to change your email",
        DURATION_SECONDS: "{seconds, plural, =1 {1 second} other {{seconds} seconds}}",
        DURATION_MINUTES: "{minutes, plural, =1 {1 minute} other {{minutes} minutes}}",
        DURATION_HOURS: "{hours, plural, =1 {1 hour} other {{hours} hours}}",
        DURATION_DAYS: "{days, plural, =1 {1 day} other {{days} days}}",
        DURATION_MINS: "{mins, plural, =1 {1 min} other {{mins} mins}}",
        GAME_ACTIVITY_NOTIFICATIONS: "Game Activity Notifications",
        FORM_LABEL_PUSH_AFK_TIMEOUT: "Push Notification AFK Timeout",
        FORM_DESCRIPTION_PUSH_AFK_TIMEOUT: "\nDiscord avoids sending push notifications to your mobile device when you are at your computer.\nUse this setting to control how long you need to be AFK for before you receive push notifications.\n",
        CHANNEL_TYPE: "Channel Type",
        TEXT_CHANNEL: "Text Channel",
        CATEGORY: "Category",
        WHATS_NEW: "What's New",
        WHATS_NEW_DATE: "{date, date, medium}",
        EDIT_CATEGORY: "Edit Category",
        CATEGORY_NAME: "Category Name",
        HIDE_MUTED_CHANNELS: "Hide Muted Channels",
        SHOW_MUTED_CHANNELS: "Show Muted Channels",
        COLLAPSE_CATEGORY: "Collapse Category",
        CHANNEL_OR_CATEGORY: "Channel or Category",
        CREATE_CATEGORY: "Create Category",
        MUTE_CATEGORY: "Mute Category",
        UNMUTE_CATEGORY: "Unmute Category",
        NO_CATEGORY: "No Category",
        IN_CATEGORY: "in !!{categoryName}!!",
        NUM_CHANNELS: "{num, plural, =1 {{num} channel} other {{num} channels}}",
        ADD_CHANNEL_TO_OVERRIDE: "Add a channel to override its default notification settings",
        ADD_CHANNEL_OR_CATEGORY: "Add a Channel or Category",
        ADD_OVERRIDE: "Add Override",
        NEW_OVERRIDE: "New Override",
        SELECT_CHANNEL_OR_CATEGORY: "Select a channel or category…",
        NOTIFICATION_OVERRIDES: "Notification Overrides",
        PRIVATE_CHANNEL: "Private Channel",
        CATEGORY_SETTINGS: "Category Settings",
        NSFW_NOTE: "NSFW channels are for content targeted to people 18 years or older.",
        PRIVATE_CATEGORY: "Private Category",
        PRIVATE_CHANNEL_NOTE: "By making a channel private, only selected roles will have access to read or connect to this channel",
        PRIVATE_CATEGORY_NOTE: "By making a category private, all locked channels within it will inherit permissions",
        CHAT_ATTACH_UPLOAD_A_FILE: "Upload a File",
        CHAT_ATTACH_INVITE_TO_PLAY_GAME: "Invite !!{channel}!! to Play !!{game}!!",
        CHAT_ATTACH_INVITE_TO_SPECTATE_GAME: "Invite !!{channel}!! to Spectate !!{game}!!",
        CHANNEL_LOCKED_TO_CATEGORY: "Permissions synced with: **{categoryName}**",
        PERMISSIONS_UNSYNCED: "Permissions not synced with: **{categoryName}**",
        SYNC_WITH: "[Sync with {categoryName}](onClick)",
        CONFIRM_CHANNEL_DRAG_TITLE: "Sync permissions?",
        SYNC_PERMISSIONS: "Sync Permissions",
        SYNC_NOW: "Sync Now",
        SYNC_PERMISSIONS_EXPLANATION: "Would you like to sync **{channelName}** permissions with **{categoryName}**?",
        KEEP_PERMISSIONS: "Keep Current Permissions",
        NEVERMIND: "Nevermind",
        USER_ACTIVITY_HEADER_PLAYING: "Playing",
        USER_ACTIVITY_HEADER_STREAMING: "Streaming",
        USER_ACTIVITY_HEADER_WATCHING: "Watching {name}",
        USER_ACTIVITY_HEADER_LISTENING: "Listening to {name}",
        USER_ACTIVITY_STATE_SIZE: "({count} of {max})",
        USER_ACTIVITY_TIMESTAMP_END: "{hours, plural, =-1 {} other {{hours}:}}{minutes, plural, =-1 {} other {{minutes}:}}{seconds, plural, =-1 {} other {{seconds}}} left",
        USER_ACTIVITY_TIMESTAMP_START: "{hours, plural, =-1 {} other {{hours}:}}{minutes, plural, =-1 {} other {{minutes}:}}{seconds, plural, =-1 {} other {{seconds}}} elapsed",
        USER_ACTIVITY_ACTION_NOTIFY_ME: "Notify Me",
        USER_ACTIVITY_ACTION_ASK_TO_JOIN: "Ask to Join",
        USER_ACTIVITY_ACTION_SPECTATE: "Spectate",
        USER_ACTIVITY_ACTION_DOWNLOAD_APP: "Download",
        USER_ACTIVITY_ERROR_FRIENDS_TITLE: "Friend Up!",
        USER_ACTIVITY_ERROR_FRIENDS_BODY: "You must first be friends with to use this! Send !!{user}!! a friend request. Once they confirm, click the button again!",
        USER_ACTIVITY_ERROR_FRIENDS_ACTION: "Send Friend Request",
        USER_ACTIVITY_ERROR_DESKTOP_TITLE: "Desktop App Required",
        USER_ACTIVITY_ERROR_DESKTOP_BODY: "The browser version of Discord is pretty great, but it can't do everything. To run this game, you'll need to do it via the Discord desktop app. Go download it!",
        USER_ACTIVITY_ERROR_DESKTOP_ACTION: "Download the App",
        USER_ACTIVITY_CANNOT_JOIN_SELF: "You can't join yourself",
        USER_ACTIVITY_CANNOT_SPECTATE_SELF: "You can't spectate yourself",
        USER_ACTIVITY_NOT_DETECTED: "{name} is not detected",
        USER_ACTIVITY_ACTION_FAILED_TO_LAUNCH: "Game Failed to Launch",
        USER_ACTIVITY_INVITE_REQUEST_REQUESTED: "**!!{username}!!** wants to join you in **!!{game}!!**.",
        USER_ACTIVITY_INVITE_REQUEST_SENT: "**!!{game}!!** invite sent to **!!{username}!!**.",
        USER_ACTIVITY_INVITE_REQUEST_WAITING: "Asking to join **!!{username}!!**'s game...",
        USER_ACTIVITY_INVITE_REQUEST_RECEIVED: "**!!{username}!!** wants you to join their game!",
        USER_ACTIVITY_INVITE_REQUEST_EXPIRED: "**!!{username}!!** didn't accept your request. Maybe next time!",
        USER_ACTIVITY_RESPOND_YEAH: "Yeah",
        USER_ACTIVITY_RESPOND_NOPE: "Nope",
        USER_ACTIVITY_ACCEPT_INVITE: "Launch game and join",
        USER_ACTIVITY_NEVER_MIND: "Never mind",
        USER_ACTIVITY_CHAT_INVITE_EDUCATION: "**!!{game}!!** supports game invites. [Dismiss](dismissOnClick)",
        USER_ACTIVITY_INVITE_EDUCATION_MODAL_TITLE: "Did you know?",
        USER_ACTIVITY_INVITE_EDUCATION_MODAL_BODY_TOP: "**!!{game}!!** supports game invites straight from Discord. Just click the plus button in the chat bar whenever you have the game launched.",
        USER_ACTIVITY_INVITE_EDUCATION_MODAL_BODY_BOTTOM: "Look for the green play icon. If you see it, you can send game invites! Go party up!",
        INVITE_EMBED_GAME_INVITE: "Game Invite",
        INVITE_EMBED_INVITE_TO_JOIN: "Invite to Join",
        INVITE_EMBED_INVITE_TO_SPECTATE: "Invite to Spectate",
        INVITE_EMBED_INVITE_TO_JOIN_GROUP: "Invite to Join Group",
        INVITE_EMBED_NUM_OPEN_SLOTS: "{number, number} open {number, plural, =1 {slot} other {slots}}",
        INVITE_EMBED_NUM_OPEN_SLOTS_ANDROID: "{count, plural, one {1 open slot} other {{count} open slots}}",
        INVITE_EMBED_GAME_HAS_ENDED: "Game has ended",
        INVITE_EMBED_FULL_GROUP: "Full group",
        INVITE_EMBED_FULL_GROUP_SPECTATE: "Full group: spectate instead",
        INVITE_EMBED_SPECTATE: "Spectate Game",
        INVITE_EMBED_GAME_NOT_DETECTED: "Game not detected",
        INVITE_EMBED_JOIN_VIA_DESKTOP_APP: "Join via Desktop App",
        INVITE_EMBED_SPECTATE_VIA_DESKTOP_APP: "Spectate via Desktop App",
        INVITE_EMBED_IN_GROUP: "Joined group",
        INVITE_EMBED_SEND_INVITE: "Send Invite",
        ADD_A_COMMENT_OPTIONAL: "Add a Comment (Optional)",
        MESSAGE_PREVIEW: "Message Preview",
        CONTEXT_MENU_CREATE_GUILD_INVITE: "Create Invite",
        CHANGE_CATEGORY: "Change Category",
        UNCATEGORIZED: "Uncategorized",
        MOVE_FROM_CATEGORY_TO: "Move from {categoryName} to",
        RTC_DEBUG: "RTC Debug",
        RTC_DEBUG_TRANSPORT: "Transport",
        RTC_DEBUG_RTP_OUTBOUND: "Outbound",
        RTC_DEBUG_RTP_INBOUND: "Inbound",
        RTC_DEBUG_USERS: "Users",
        MENTIONS: "Mentions",
        CATEGORIES: "Categories",
        NUX_POST_REG_JOIN_SERVER_TITLE: "Do you have an invite?",
        NUX_POST_REG_JOIN_SERVER_DESCRIPTION: "Get the most out of Discord by joining a server.",
        NUX_POST_REG_JOIN_SERVER_SKIP: "I don't have one",
        CRASH_BUMMER_MAN: "Bummer, Man",
        CRASH_UNEXPECTED: "Discord has crashed unexpectedly.",
        CRASH_TESTERS_INVITE: "Not all is lost! Join us at {testers} and let us know what happened. We'll get right on it.",
        CRASH_DISCLAIMER: "Please note that using apps which attempt to customize your device's UI are not officially supported and may cause undesired behavior.",
        CRASH_DETAILS: "Crash Details",
        CRASH_APP_VERSION: "App Version: {version}",
        CRASH_DEVICE: "Device: {device}",
        CRASH_DEVICE_VERSION: "Device Version: {version}",
        CRASH_TIMESTAMP: "Crash Timestamp: {timestamp}",
        CRASH_SOURCE: "Crash Source: {source}",
        CAPTCHA_FAILED: "The captcha failed. Please try again.",
        BROWSER_HANDOFF_DETECTING_TITLE: "Detecting Account",
        BROWSER_HANDOFF_DETECTING_DESCRIPTION: "Attempting to detect Discord account from your default browser, should just take a moment.",
        BROWSER_HANDOFF_AUTHENTICATING_TITLE: "Authenticating",
        BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION: "Attempting to authenticate the Discord desktop client. Do not close this window.",
        BROWSER_HANDOFF_DONE_TITLE: "Done",
        BROWSER_HANDOFF_DONE_DESCRIPTION: "Attempting to authenticate the Discord desktop client. Do not close this window.",
        GAME_FEED_NOBODY_PLAYING_TITLE: "Nobody is playing anything right now...",
        GAME_FEED_FOOTER_TITLE: "That’s all for now!",
        GAME_FEED_FOOTER_SUBTITLE: "{onlineFriendCount, number} friends are online, group up and play a game!",
        GAME_FEED_ACTIVITY_RECENTLY_PLAYED: "Recently Played",
        GAME_FEED_ACTIVITY_SOLO_PLAYERS: "+{count, number} {count, plural, =1 {Solo Player} other {Solo Players}}",
        GAME_FEED_ACTIVITY_ACTION_PLAY: "Play",
        GAME_FEED_READ_ACTIVITY_ACTION: "Read",
        GAME_FEED_USER_PLAYING_JUST_STARTED: "Just started playing",
        GAME_FEED_USER_PLAYING_FOR_MINUTES: "Playing for {time, number} {time, plural, =1 {minute} other {minutes}}",
        GAME_FEED_USER_PLAYING_FOR_HOURS: "Playing for {time, number} {time, plural, =1 {hour} other {hours}}",
        GAME_FEED_USER_PLAYING_JUST_ENDED: "Just stopped playing",
        GAME_FEED_USER_PLAYED_MINUTES_AGO: "Played {time, number} {time, plural, =1 {minute} other {minutes}} ago",
        GAME_FEED_USER_PLAYED_HOURS_AGO: "Played {time, number} {time, plural, =1 {hour} other {hours}} ago",
        GAME_FEED_NOT_LINKED: "Not linked",
        GAME_FEED_ACTION_MESSAGE: "Message",
        ACTIVITY: "Activity",
        GAME_FEED_SETTINGS_NUM_MEMBERS: "{count, plural, one {1 member} other {{count} members}}",
        GAME_FEED_SETTINGS_SHOW_FRIENDS: "Show friends",
        GAME_FEED_SETTINGS_SHOW_PLAYERS_FROM_MUTUAL_SERVERS: "Show players from mutual servers",
        GAME_FEED_SETTINGS_SHOW_PLAYERS_FROM_MUTUAL_SERVERS_NOTE: "Show or hide players from individual servers below. Servers with over {threshold} members cannot be enabled.",
        GAME_FEED_SETTINGS_SHOW_GAME_TITLE: "You're not showing up in others' activity feeds!",
        GAME_FEED_SETTINGS_SHOW_GAME_BODY: "When you aren't displaying your running game status, you won't show up in the activity section for your friends and server mates. You can enable game status in [Games](gamesOnClick).",
        "zh-TW": "Traditional Chinese",
        fr: "French",
        de: "German",
        "en-US": "English, US",
        "en-GB": "English, UK",
        "pt-BR": "Portuguese, Brazilian",
        ru: "Russian",
        it: "Italian",
        "es-ES": "Spanish",
        ko: "Korean",
        nl: "Dutch",
        "sv-SE": "Swedish",
        pl: "Polish",
        ja: "Japanese",
        bg: "Bulgarian",
        uk: "Ukrainian",
        tr: "Turkish",
        da: "Danish",
        cs: "Czech",
        fi: "Finnish",
        no: "Norwegian"
    }, e.exports = t.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var o = n(20),
        r = n(17).document,
        i = o(r) && o(r.createElement);
    e.exports = function(e) {
        return i ? r.createElement(e) : {}
    }
}, function(e, t, n) {
    var o = n(17),
        r = n(73),
        i = n(119),
        E = n(394),
        a = n(30).f;
    e.exports = function(e) {
        var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
        "_" == e.charAt(0) || e in t || a(t, e, {
            value: E.f(e)
        })
    }
}, function(e, t, n) {
    var o = n(190)("keys"),
        r = n(118);
    e.exports = function(e) {
        return o[e] || (o[e] = r(e))
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var o = n(17).document;
    e.exports = o && o.documentElement
}, function(e, t, n) {
    var o = n(20),
        r = n(15),
        i = function(e, t) {
            if (r(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, o) {
            try {
                (o = n(64)(Function.call, n(60).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, n) {
                return i(e, n), t ? e.__proto__ = n : o(e, n), e
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(e, t, n) {
    var o = n(20),
        r = n(276).set;
    e.exports = function(e, t, n) {
        var i, E = t.constructor;
        return E !== n && "function" == typeof E && (i = E.prototype) !== n.prototype && o(i) && r && r(e, i), e
    }
}, function(e, t, n) {
    "use strict";
    var o = n(76),
        r = n(75);
    e.exports = function(e) {
        var t = String(r(this)),
            n = "",
            i = o(e);
        if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
        for (; i > 0;
            (i >>>= 1) && (t += t)) 1 & i && (n += t);
        return n
    }
}, function(e, t) {
    e.exports = Math.sign || function(e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
    }
}, function(e, t) {
    var n = Math.expm1;
    e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(e) {
        return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
    } : n
}, function(e, t, n) {
    var o = n(76),
        r = n(75);
    e.exports = function(e) {
        return function(t, n) {
            var i, E, a = String(r(t)),
                _ = o(n),
                s = a.length;
            return _ < 0 || _ >= s ? e ? "" : void 0 : (i = a.charCodeAt(_)) < 55296 || i > 56319 || _ + 1 === s || (E = a.charCodeAt(_ + 1)) < 56320 || E > 57343 ? e ? a.charAt(_) : i : e ? a.slice(_, _ + 2) : E - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(119),
        r = n(2),
        i = n(51),
        E = n(50),
        a = n(49),
        _ = n(140),
        s = n(284),
        u = n(138),
        c = n(61),
        T = n(26)("iterator"),
        I = !([].keys && "next" in [].keys()),
        N = function() {
            return this
        };
    e.exports = function(e, t, n, S, O, l, A) {
        s(n, t, S);
        var R, h, D, d = function(e) {
                if (!I && e in M) return M[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            f = t + " Iterator",
            L = "values" == O,
            C = !1,
            M = e.prototype,
            m = M[T] || M["@@iterator"] || O && M[O],
            p = m || d(O),
            y = O ? L ? d("entries") : p : void 0,
            v = "Array" == t ? M.entries || m : m;
        if (v && (D = c(v.call(new e))) !== Object.prototype && D.next && (u(D, f, !0), o || a(D, T) || E(D, T, N)), L && m && "values" !== m.name && (C = !0, p = function() {
                return m.call(this)
            }), o && !A || !I && !C && M[T] || E(M, T, p), _[t] = p, _[f] = N, O)
            if (R = {
                    values: L ? p : d("values"),
                    keys: l ? p : d("keys"),
                    entries: y
                }, A)
                for (h in R) h in M || i(M, h, R[h]);
            else r(r.P + r.F * (I || C), t, R);
        return R
    }
}, function(e, t, n) {
    "use strict";
    var o = n(122),
        r = n(117),
        i = n(138),
        E = {};
    n(50)(E, n(26)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = o(E, {
            next: r(1, n)
        }), i(e, t + " Iterator")
    }
}, function(e, t, n) {
    var o = n(194),
        r = n(75);
    e.exports = function(e, t, n) {
        if (o(t)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(r(e))
    }
}, function(e, t, n) {
    var o = n(26)("match");
    e.exports = function(e) {
        var t = /./;
        try {
            "/./" [e](t)
        } catch (n) {
            try {
                return t[o] = !1, !"/./" [e](t)
            } catch (e) {}
        }
        return !0
    }
}, function(e, t, n) {
    var o = n(140),
        r = n(26)("iterator"),
        i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (o.Array === e || i[r] === e)
    }
}, function(e, t, n) {
    "use strict";
    var o = n(30),
        r = n(117);
    e.exports = function(e, t, n) {
        t in e ? o.f(e, t, r(0, n)) : e[t] = n
    }
}, function(e, t, n) {
    var o = n(163),
        r = n(26)("iterator"),
        i = n(140);
    e.exports = n(73).getIteratorMethod = function(e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || i[o(e)]
    }
}, function(e, t, n) {
    var o = n(979);
    e.exports = function(e, t) {
        return new(o(e))(t)
    }
}, function(e, t, n) {
    "use strict";
    var o = n(36),
        r = n(121),
        i = n(31);
    e.exports = function(e) {
        for (var t = o(this), n = i(t.length), E = arguments.length, a = r(E > 1 ? arguments[1] : void 0, n), _ = E > 2 ? arguments[2] : void 0, s = void 0 === _ ? n : r(_, n); s > a;) t[a++] = e;
        return t
    }
}, function(e, t, n) {
    "use strict";
    var o = n(99),
        r = n(410),
        i = n(140),
        E = n(59);
    e.exports = n(283)(Array, "Array", function(e, t) {
        this._t = E(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]])
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function(e, t, n) {
    var o, r, i, E = n(64),
        a = n(400),
        _ = n(275),
        s = n(271),
        u = n(17),
        c = u.process,
        T = u.setImmediate,
        I = u.clearImmediate,
        N = u.MessageChannel,
        S = u.Dispatch,
        O = 0,
        l = {},
        A = function() {
            var e = +this;
            if (l.hasOwnProperty(e)) {
                var t = l[e];
                delete l[e], t()
            }
        },
        R = function(e) {
            A.call(e.data)
        };
    T && I || (T = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return l[++O] = function() {
            a("function" == typeof e ? e : Function(e), t)
        }, o(O), O
    }, I = function(e) {
        delete l[e]
    }, "process" == n(65)(c) ? o = function(e) {
        c.nextTick(E(A, e, 1))
    } : S && S.now ? o = function(e) {
        S.now(E(A, e, 1))
    } : N ? (i = (r = new N).port2, r.port1.onmessage = R, o = E(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(e) {
        u.postMessage(e + "", "*")
    }, u.addEventListener("message", R, !1)) : o = "onreadystatechange" in s("script") ? function(e) {
        _.appendChild(s("script")).onreadystatechange = function() {
            _.removeChild(this), A.call(e)
        }
    } : function(e) {
        setTimeout(E(A, e, 1), 0)
    }), e.exports = {
        set: T,
        clear: I
    }
}, function(e, t, n) {
    var o = n(17),
        r = n(293).set,
        i = o.MutationObserver || o.WebKitMutationObserver,
        E = o.process,
        a = o.Promise,
        _ = "process" == n(65)(E);
    e.exports = function() {
        var e, t, n, s = function() {
            var o, r;
            for (_ && (o = E.domain) && o.exit(); e;) {
                r = e.fn, e = e.next;
                try {
                    r()
                } catch (o) {
                    throw e ? n() : t = void 0, o
                }
            }
            t = void 0, o && o.enter()
        };
        if (_) n = function() {
            E.nextTick(s)
        };
        else if (i) {
            var u = !0,
                c = document.createTextNode("");
            new i(s).observe(c, {
                characterData: !0
            }), n = function() {
                c.data = u = !u
            }
        } else if (a && a.resolve) {
            var T = a.resolve();
            n = function() {
                T.then(s)
            }
        } else n = function() {
            r.call(o, s)
        };
        return function(o) {
            var r = {
                fn: o,
                next: void 0
            };
            t && (t.next = r), e || (e = r, n()), t = r
        }
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t, n;
        this.promise = new e(function(e, o) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = o
        }), this.resolve = r(t), this.reject = r(n)
    }
    var r = n(42);
    e.exports.f = function(e) {
        return new o(e)
    }
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        var o, r, i, E = Array(n),
            a = 8 * n - t - 1,
            _ = (1 << a) - 1,
            s = _ >> 1,
            u = 23 === t ? B(2, -24) - B(2, -77) : 0,
            c = 0,
            T = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for ((e = w(e)) != e || e === b ? (r = e != e ? 1 : 0, o = _) : (o = H(V(e) / Y), e * (i = B(2, -o)) < 1 && (o--, i *= 2), (e += o + s >= 1 ? u / i : u * B(2, 1 - s)) * i >= 2 && (o++, i /= 2), o + s >= _ ? (r = 0, o = _) : o + s >= 1 ? (r = (e * i - 1) * B(2, t), o += s) : (r = e * B(2, s - 1) * B(2, t), o = 0)); t >= 8; E[c++] = 255 & r, r /= 256, t -= 8);
        for (o = o << t | r, a += t; a > 0; E[c++] = 255 & o, o /= 256, a -= 8);
        return E[--c] |= 128 * T, E
    }

    function r(e, t, n) {
        var o, r = 8 * n - t - 1,
            i = (1 << r) - 1,
            E = i >> 1,
            a = r - 7,
            _ = n - 1,
            s = e[_--],
            u = 127 & s;
        for (s >>= 7; a > 0; u = 256 * u + e[_], _--, a -= 8);
        for (o = u & (1 << -a) - 1, u >>= -a, a += t; a > 0; o = 256 * o + e[_], _--, a -= 8);
        if (0 === u) u = 1 - E;
        else {
            if (u === i) return o ? NaN : s ? -b : b;
            o += B(2, t), u -= E
        }
        return (s ? -1 : 1) * o * B(2, u - t)
    }

    function i(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
    }

    function E(e) {
        return [255 & e]
    }

    function a(e) {
        return [255 & e, e >> 8 & 255]
    }

    function _(e) {
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    }

    function s(e) {
        return o(e, 52, 8)
    }

    function u(e) {
        return o(e, 23, 4)
    }

    function c(e, t, n) {
        M(e[y], t, {
            get: function() {
                return this[n]
            }
        })
    }

    function T(e, t, n, o) {
        var r = L(+n);
        if (r + t > e[W]) throw P(v);
        var i = e[k]._b,
            E = r + e[x],
            a = i.slice(E, E + t);
        return o ? a : a.reverse()
    }

    function I(e, t, n, o, r, i) {
        var E = L(+n);
        if (E + t > e[W]) throw P(v);
        for (var a = e[k]._b, _ = E + e[x], s = o(+r), u = 0; u < t; u++) a[_ + u] = s[i ? u : t - u - 1]
    }
    var N = n(17),
        S = n(29),
        O = n(119),
        l = n(200),
        A = n(50),
        R = n(127),
        h = n(19),
        D = n(125),
        d = n(76),
        f = n(31),
        L = n(419),
        C = n(123).f,
        M = n(30).f,
        m = n(291),
        p = n(138),
        y = "prototype",
        v = "Wrong index!",
        g = N.ArrayBuffer,
        U = N.DataView,
        G = N.Math,
        P = N.RangeError,
        b = N.Infinity,
        F = g,
        w = G.abs,
        B = G.pow,
        H = G.floor,
        V = G.log,
        Y = G.LN2,
        k = S ? "_b" : "buffer",
        W = S ? "_l" : "byteLength",
        x = S ? "_o" : "byteOffset";
    if (l.ABV) {
        if (!h(function() {
                g(1)
            }) || !h(function() {
                new g(-1)
            }) || h(function() {
                return new g, new g(1.5), new g(NaN), "ArrayBuffer" != g.name
            })) {
            for (var K, j = (g = function(e) {
                    return D(this, g), new F(L(e))
                })[y] = F[y], J = C(F), X = 0; J.length > X;)(K = J[X++]) in g || A(g, K, F[K]);
            O || (j.constructor = g)
        }
        var Q = new U(new g(2)),
            q = U[y].setInt8;
        Q.setInt8(0, 2147483648), Q.setInt8(1, 2147483649), !Q.getInt8(0) && Q.getInt8(1) || R(U[y], {
            setInt8: function(e, t) {
                q.call(this, e, t << 24 >> 24)
            },
            setUint8: function(e, t) {
                q.call(this, e, t << 24 >> 24)
            }
        }, !0)
    } else g = function(e) {
        D(this, g, "ArrayBuffer");
        var t = L(e);
        this._b = m.call(Array(t), 0), this[W] = t
    }, U = function(e, t, n) {
        D(this, U, "DataView"), D(e, g, "DataView");
        var o = e[W],
            r = d(t);
        if (r < 0 || r > o) throw P("Wrong offset!");
        if (n = void 0 === n ? o - r : f(n), r + n > o) throw P("Wrong length!");
        this[k] = e, this[x] = r, this[W] = n
    }, S && (c(g, "byteLength", "_l"), c(U, "buffer", "_b"), c(U, "byteLength", "_l"), c(U, "byteOffset", "_o")), R(U[y], {
        getInt8: function(e) {
            return T(this, 1, e)[0] << 24 >> 24
        },
        getUint8: function(e) {
            return T(this, 1, e)[0]
        },
        getInt16: function(e) {
            var t = T(this, 2, e, arguments[1]);
            return (t[1] << 8 | t[0]) << 16 >> 16
        },
        getUint16: function(e) {
            var t = T(this, 2, e, arguments[1]);
            return t[1] << 8 | t[0]
        },
        getInt32: function(e) {
            return i(T(this, 4, e, arguments[1]))
        },
        getUint32: function(e) {
            return i(T(this, 4, e, arguments[1])) >>> 0
        },
        getFloat32: function(e) {
            return r(T(this, 4, e, arguments[1]), 23, 4)
        },
        getFloat64: function(e) {
            return r(T(this, 8, e, arguments[1]), 52, 8)
        },
        setInt8: function(e, t) {
            I(this, 1, e, E, t)
        },
        setUint8: function(e, t) {
            I(this, 1, e, E, t)
        },
        setInt16: function(e, t) {
            I(this, 2, e, a, t, arguments[2])
        },
        setUint16: function(e, t) {
            I(this, 2, e, a, t, arguments[2])
        },
        setInt32: function(e, t) {
            I(this, 4, e, _, t, arguments[2])
        },
        setUint32: function(e, t) {
            I(this, 4, e, _, t, arguments[2])
        },
        setFloat32: function(e, t) {
            I(this, 4, e, u, t, arguments[2])
        },
        setFloat64: function(e, t) {
            I(this, 8, e, s, t, arguments[2])
        }
    });
    p(g, "ArrayBuffer"), p(U, "DataView"), A(U[y], l.VIEW, !0), t.ArrayBuffer = g, t.DataView = U
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = !n(29) && !n(19)(function() {
        return 7 != Object.defineProperty(n(271)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    t.f = n(26)
}, function(e, t, n) {
    var o = n(49),
        r = n(59),
        i = n(191)(!1),
        E = n(273)("IE_PROTO");
    e.exports = function(e, t) {
        var n, a = r(e),
            _ = 0,
            s = [];
        for (n in a) n != E && o(a, n) && s.push(n);
        for (; t.length > _;) o(a, n = t[_++]) && (~i(s, n) || s.push(n));
        return s
    }
}, function(e, t, n) {
    var o = n(30),
        r = n(15),
        i = n(120);
    e.exports = n(29) ? Object.defineProperties : function(e, t) {
        r(e);
        for (var n, E = i(t), a = E.length, _ = 0; a > _;) o.f(e, n = E[_++], t[n]);
        return e
    }
}, function(e, t, n) {
    var o = n(59),
        r = n(123).f,
        i = {}.toString,
        E = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        a = function(e) {
            try {
                return r(e)
            } catch (e) {
                return E.slice()
            }
        };
    e.exports.f = function(e) {
        return E && "[object Window]" == i.call(e) ? a(e) : r(o(e))
    }
}, function(e, t, n) {
    "use strict";
    var o = n(120),
        r = n(192),
        i = n(162),
        E = n(36),
        a = n(161),
        _ = Object.assign;
    e.exports = !_ || n(19)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            o = "abcdefghijklmnopqrst";
        return e[n] = 7, o.split("").forEach(function(e) {
            t[e] = e
        }), 7 != _({}, e)[n] || Object.keys(_({}, t)).join("") != o
    }) ? function(e, t) {
        for (var n = E(e), _ = arguments.length, s = 1, u = r.f, c = i.f; _ > s;)
            for (var T, I = a(arguments[s++]), N = u ? o(I).concat(u(I)) : o(I), S = N.length, O = 0; S > O;) c.call(I, T = N[O++]) && (n[T] = I[T]);
        return n
    } : _
}, function(e, t, n) {
    "use strict";
    var o = n(42),
        r = n(20),
        i = n(400),
        E = [].slice,
        a = {},
        _ = function(e, t, n) {
            if (!(t in a)) {
                for (var o = [], r = 0; r < t; r++) o[r] = "a[" + r + "]";
                a[t] = Function("F,a", "return new F(" + o.join(",") + ")")
            }
            return a[t](e, n)
        };
    e.exports = Function.bind || function(e) {
        var t = o(this),
            n = E.call(arguments, 1),
            a = function() {
                var o = n.concat(E.call(arguments));
                return this instanceof a ? _(t, o.length, o) : i(t, o, e)
            };
        return r(t.prototype) && (a.prototype = t.prototype), a
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        var o = void 0 === n;
        switch (t.length) {
            case 0:
                return o ? e() : e.call(n);
            case 1:
                return o ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    var o = n(17).parseInt,
        r = n(139).trim,
        i = n(277),
        E = /^[-+]?0[xX]/;
    e.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function(e, t) {
        var n = r(String(e), 3);
        return o(n, t >>> 0 || (E.test(n) ? 16 : 10))
    } : o
}, function(e, t, n) {
    var o = n(17).parseFloat,
        r = n(139).trim;
    e.exports = 1 / o(n(277) + "-0") != -1 / 0 ? function(e) {
        var t = r(String(e), 3),
            n = o(t);
        return 0 === n && "-" == t.charAt(0) ? -0 : n
    } : o
}, function(e, t, n) {
    var o = n(65);
    e.exports = function(e, t) {
        if ("number" != typeof e && "Number" != o(e)) throw TypeError(t);
        return +e
    }
}, function(e, t, n) {
    var o = n(20),
        r = Math.floor;
    e.exports = function(e) {
        return !o(e) && isFinite(e) && r(e) === e
    }
}, function(e, t) {
    e.exports = Math.log1p || function(e) {
        return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
    }
}, function(e, t, n) {
    var o = n(280),
        r = Math.pow,
        i = r(2, -52),
        E = r(2, -23),
        a = r(2, 127) * (2 - E),
        _ = r(2, -126),
        s = function(e) {
            return e + 1 / i - 1 / i
        };
    e.exports = Math.fround || function(e) {
        var t, n, r = Math.abs(e),
            u = o(e);
        return r < _ ? u * s(r / _ / E) * _ * E : (t = (1 + E / i) * r, (n = t - (t - r)) > a || n != n ? u * (1 / 0) : u * n)
    }
}, function(e, t, n) {
    var o = n(15);
    e.exports = function(e, t, n, r) {
        try {
            return r ? t(o(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && o(i.call(e)), t
        }
    }
}, function(e, t, n) {
    var o = n(42),
        r = n(36),
        i = n(161),
        E = n(31);
    e.exports = function(e, t, n, a, _) {
        o(t);
        var s = r(e),
            u = i(s),
            c = E(s.length),
            T = _ ? c - 1 : 0,
            I = _ ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (T in u) {
                    a = u[T], T += I;
                    break
                }
                if (T += I, _ ? T < 0 : c <= T) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; _ ? T >= 0 : c > T; T += I) T in u && (a = t(a, u[T], T, s));
        return a
    }
}, function(e, t, n) {
    "use strict";
    var o = n(36),
        r = n(121),
        i = n(31);
    e.exports = [].copyWithin || function(e, t) {
        var n = o(this),
            E = i(n.length),
            a = r(e, E),
            _ = r(t, E),
            s = arguments.length > 2 ? arguments[2] : void 0,
            u = Math.min((void 0 === s ? E : r(s, E)) - _, E - a),
            c = 1;
        for (_ < a && a < _ + u && (c = -1, _ += u - 1, a += u - 1); u-- > 0;) _ in n ? n[a] = n[_] : delete n[a], a += c, _ += c;
        return n
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    n(29) && "g" != /./g.flags && n(30).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(196)
    })
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, n) {
    var o = n(15),
        r = n(20),
        i = n(295);
    e.exports = function(e, t) {
        if (o(e), r(t) && t.constructor === e) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function(e, t, n) {
    "use strict";
    var o = n(415),
        r = n(141);
    e.exports = n(199)("Map", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(e) {
            var t = o.getEntry(r(this, "Map"), e);
            return t && t.v
        },
        set: function(e, t) {
            return o.def(r(this, "Map"), 0 === e ? 0 : e, t)
        }
    }, o, !0)
}, function(e, t, n) {
    "use strict";
    var o = n(30).f,
        r = n(122),
        i = n(127),
        E = n(64),
        a = n(125),
        _ = n(126),
        s = n(283),
        u = n(410),
        c = n(124),
        T = n(29),
        I = n(98).fastKey,
        N = n(141),
        S = T ? "_s" : "size",
        O = function(e, t) {
            var n, o = I(t);
            if ("F" !== o) return e._i[o];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        };
    e.exports = {
        getConstructor: function(e, t, n, s) {
            var u = e(function(e, o) {
                a(e, u, t, "_i"), e._t = t, e._i = r(null), e._f = void 0, e._l = void 0, e[S] = 0, void 0 != o && _(o, n, e[s], e)
            });
            return i(u.prototype, {
                clear: function() {
                    for (var e = N(this, t), n = e._i, o = e._f; o; o = o.n) o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                    e._f = e._l = void 0, e[S] = 0
                },
                delete: function(e) {
                    var n = N(this, t),
                        o = O(n, e);
                    if (o) {
                        var r = o.n,
                            i = o.p;
                        delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[S]--
                    }
                    return !!o
                },
                forEach: function(e) {
                    N(this, t);
                    for (var n, o = E(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (o(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(e) {
                    return !!O(N(this, t), e)
                }
            }), T && o(u.prototype, "size", {
                get: function() {
                    return N(this, t)[S]
                }
            }), u
        },
        def: function(e, t, n) {
            var o, r, i = O(e, t);
            return i ? i.v = n : (e._l = i = {
                i: r = I(t, !0),
                k: t,
                v: n,
                p: o = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = i), o && (o.n = i), e[S]++, "F" !== r && (e._i[r] = i)), e
        },
        getEntry: O,
        setStrong: function(e, t, n) {
            s(e, t, function(e, n) {
                this._t = N(e, t), this._k = n, this._l = void 0
            }, function() {
                for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? u(0, n.k) : "values" == t ? u(0, n.v) : u(0, [n.k, n.v]) : (e._t = void 0, u(1))
            }, n ? "entries" : "values", !n, !0), c(t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(415),
        r = n(141);
    e.exports = n(199)("Set", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(e) {
            return o.def(r(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, o)
}, function(e, t, n) {
    "use strict";
    var o, r = n(78)(0),
        i = n(51),
        E = n(98),
        a = n(398),
        _ = n(418),
        s = n(20),
        u = n(19),
        c = n(141),
        T = E.getWeak,
        I = Object.isExtensible,
        N = _.ufstore,
        S = {},
        O = function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        l = {
            get: function(e) {
                if (s(e)) {
                    var t = T(e);
                    return !0 === t ? N(c(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
                }
            },
            set: function(e, t) {
                return _.def(c(this, "WeakMap"), e, t)
            }
        },
        A = e.exports = n(199)("WeakMap", O, l, _, !0, !0);
    u(function() {
        return 7 != (new A).set((Object.freeze || Object)(S), 7).get(S)
    }) && (a((o = _.getConstructor(O, "WeakMap")).prototype, l), E.NEED = !0, r(["delete", "has", "get", "set"], function(e) {
        var t = A.prototype,
            n = t[e];
        i(t, e, function(t, r) {
            if (s(t) && !I(t)) {
                this._f || (this._f = new o);
                var i = this._f[e](t, r);
                return "set" == e ? this : i
            }
            return n.call(this, t, r)
        })
    }))
}, function(e, t, n) {
    "use strict";
    var o = n(127),
        r = n(98).getWeak,
        i = n(15),
        E = n(20),
        a = n(125),
        _ = n(126),
        s = n(78),
        u = n(49),
        c = n(141),
        T = s(5),
        I = s(6),
        N = 0,
        S = function(e) {
            return e._l || (e._l = new O)
        },
        O = function() {
            this.a = []
        },
        l = function(e, t) {
            return T(e.a, function(e) {
                return e[0] === t
            })
        };
    O.prototype = {
        get: function(e) {
            var t = l(this, e);
            if (t) return t[1]
        },
        has: function(e) {
            return !!l(this, e)
        },
        set: function(e, t) {
            var n = l(this, e);
            n ? n[1] = t : this.a.push([e, t])
        },
        delete: function(e) {
            var t = I(this.a, function(t) {
                return t[0] === e
            });
            return ~t && this.a.splice(t, 1), !!~t
        }
    }, e.exports = {
        getConstructor: function(e, t, n, i) {
            var s = e(function(e, o) {
                a(e, s, t, "_i"), e._t = t, e._i = N++, e._l = void 0, void 0 != o && _(o, n, e[i], e)
            });
            return o(s.prototype, {
                delete: function(e) {
                    if (!E(e)) return !1;
                    var n = r(e);
                    return !0 === n ? S(c(this, t)).delete(e) : n && u(n, this._i) && delete n[this._i]
                },
                has: function(e) {
                    if (!E(e)) return !1;
                    var n = r(e);
                    return !0 === n ? S(c(this, t)).has(e) : n && u(n, this._i)
                }
            }), s
        },
        def: function(e, t, n) {
            var o = r(i(t), !0);
            return !0 === o ? S(e).set(t, n) : o[e._i] = n, e
        },
        ufstore: S
    }
}, function(e, t, n) {
    var o = n(76),
        r = n(31);
    e.exports = function(e) {
        if (void 0 === e) return 0;
        var t = o(e),
            n = r(t);
        if (t !== n) throw RangeError("Wrong length!");
        return n
    }
}, function(e, t, n) {
    var o = n(123),
        r = n(192),
        i = n(15),
        E = n(17).Reflect;
    e.exports = E && E.ownKeys || function(e) {
        var t = o.f(i(e)),
            n = r.f;
        return n ? t.concat(n(e)) : t
    }
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, s, u, c, T, I) {
        for (var N, S, O = u, l = 0, A = !!T && a(T, I, 3); l < s;) {
            if (l in n) {
                if (N = A ? A(n[l], l, t) : n[l], S = !1, i(N) && (S = void 0 !== (S = N[_]) ? !!S : r(N)), S && c > 0) O = o(e, t, N, E(N.length), O, c - 1) - 1;
                else {
                    if (O >= 9007199254740991) throw TypeError();
                    e[O] = N
                }
                O++
            }
            l++
        }
        return O
    }
    var r = n(193),
        i = n(20),
        E = n(31),
        a = n(64),
        _ = n(26)("isConcatSpreadable");
    e.exports = o
}, function(e, t, n) {
    var o = n(31),
        r = n(279),
        i = n(75);
    e.exports = function(e, t, n, E) {
        var a = String(i(e)),
            _ = a.length,
            s = void 0 === n ? " " : String(n),
            u = o(t);
        if (u <= _ || "" == s) return a;
        var c = u - _,
            T = r.call(s, Math.ceil(c / s.length));
        return T.length > c && (T = T.slice(0, c)), E ? T + a : a + T
    }
}, function(e, t, n) {
    var o = n(120),
        r = n(59),
        i = n(162).f;
    e.exports = function(e) {
        return function(t) {
            for (var n, E = r(t), a = o(E), _ = a.length, s = 0, u = []; _ > s;) i.call(E, n = a[s++]) && u.push(e ? [n, E[n]] : E[n]);
            return u
        }
    }
}, function(e, t, n) {
    var o = n(163),
        r = n(425);
    e.exports = function(e) {
        return function() {
            if (o(this) != e) throw TypeError(e + "#toJSON isn't generic");
            return r(this)
        }
    }
}, function(e, t, n) {
    var o = n(126);
    e.exports = function(e, t) {
        var n = [];
        return o(e, !1, n.push, n, t), n
    }
}, function(e, t) {
    e.exports = Math.scale || function(e, t, n, o, r) {
        return 0 === arguments.length || e != e || t != t || n != n || o != o || r != r ? NaN : e === 1 / 0 || e === -1 / 0 ? e : (e - t) * (r - o) / (n - t) + o
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    n(887), e.exports = n(204)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function t(e, t, n) {
            e[t] || Object[o](e, t, {
                writable: !0,
                configurable: !0,
                value: n
            })
        }
        if (n(888), n(1085), n(1086), e._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
        e._babelPolyfill = !0;
        var o = "defineProperty";
        t(String.prototype, "padLeft", "".padStart), t(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e) {
            [][e] && t(Array, e, Function.call.bind([][e]))
        })
    }).call(t, n(22))
}, function(e, t, n) {
    n(889), n(891), n(892), n(893), n(894), n(895), n(896), n(897), n(898), n(899), n(900), n(901), n(902), n(903), n(904), n(905), n(907), n(908), n(909), n(910), n(911), n(912), n(913), n(914), n(915), n(916), n(917), n(918), n(919), n(920), n(921), n(922), n(923), n(924), n(925), n(926), n(927), n(928), n(929), n(930), n(931), n(932), n(933), n(934), n(935), n(936), n(937), n(938), n(939), n(940), n(941), n(942), n(943), n(944), n(945), n(946), n(947), n(948), n(949), n(950), n(951), n(952), n(953), n(954), n(955), n(956), n(957), n(958), n(959), n(960), n(961), n(962), n(963), n(964), n(965), n(966), n(967), n(969), n(970), n(972), n(973), n(974), n(975), n(976), n(977), n(978), n(980), n(981), n(982), n(983), n(984), n(985), n(986), n(987), n(988), n(989), n(990), n(991), n(992), n(292), n(993), n(994), n(411), n(995), n(996), n(997), n(998), n(999), n(414), n(416), n(417), n(1e3), n(1001), n(1002), n(1003), n(1004), n(1005), n(1006), n(1007), n(1008), n(1009), n(1010), n(1011), n(1012), n(1013), n(1014), n(1015), n(1016), n(1017), n(1018), n(1019), n(1020), n(1021), n(1022), n(1023), n(1024), n(1025), n(1026), n(1027), n(1028), n(1029), n(1030), n(1031), n(1032), n(1033), n(1034), n(1035), n(1036), n(1037), n(1038), n(1039), n(1040), n(1041), n(1042), n(1043), n(1044), n(1045), n(1046), n(1047), n(1048), n(1049), n(1050), n(1051), n(1052), n(1053), n(1054), n(1055), n(1056), n(1057), n(1058), n(1059), n(1060), n(1061), n(1062), n(1063), n(1064), n(1065), n(1066), n(1067), n(1068), n(1069), n(1070), n(1071), n(1072), n(1073), n(1074), n(1075), n(1076), n(1077), n(1078), n(1079), n(1080), n(1081), n(1082), n(1083), n(1084), e.exports = n(73)
}, function(e, t, n) {
    "use strict";
    var o = n(17),
        r = n(49),
        i = n(29),
        E = n(2),
        a = n(51),
        _ = n(98).KEY,
        s = n(19),
        u = n(190),
        c = n(138),
        T = n(118),
        I = n(26),
        N = n(394),
        S = n(272),
        O = n(890),
        l = n(193),
        A = n(15),
        R = n(59),
        h = n(74),
        D = n(117),
        d = n(122),
        f = n(397),
        L = n(60),
        C = n(30),
        M = n(120),
        m = L.f,
        p = C.f,
        y = f.f,
        v = o.Symbol,
        g = o.JSON,
        U = g && g.stringify,
        G = I("_hidden"),
        P = I("toPrimitive"),
        b = {}.propertyIsEnumerable,
        F = u("symbol-registry"),
        w = u("symbols"),
        B = u("op-symbols"),
        H = Object.prototype,
        V = "function" == typeof v,
        Y = o.QObject,
        k = !Y || !Y.prototype || !Y.prototype.findChild,
        W = i && s(function() {
            return 7 != d(p({}, "a", {
                get: function() {
                    return p(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var o = m(H, t);
            o && delete H[t], p(e, t, n), o && e !== H && p(H, t, o)
        } : p,
        x = function(e) {
            var t = w[e] = d(v.prototype);
            return t._k = e, t
        },
        K = V && "symbol" == typeof v.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof v
        },
        j = function(e, t, n) {
            return e === H && j(B, t, n), A(e), t = h(t, !0), A(n), r(w, t) ? (n.enumerable ? (r(e, G) && e[G][t] && (e[G][t] = !1), n = d(n, {
                enumerable: D(0, !1)
            })) : (r(e, G) || p(e, G, D(1, {})), e[G][t] = !0), W(e, t, n)) : p(e, t, n)
        },
        J = function(e, t) {
            A(e);
            for (var n, o = O(t = R(t)), r = 0, i = o.length; i > r;) j(e, n = o[r++], t[n]);
            return e
        },
        X = function(e) {
            var t = b.call(this, e = h(e, !0));
            return !(this === H && r(w, e) && !r(B, e)) && (!(t || !r(this, e) || !r(w, e) || r(this, G) && this[G][e]) || t)
        },
        Q = function(e, t) {
            if (e = R(e), t = h(t, !0), e !== H || !r(w, t) || r(B, t)) {
                var n = m(e, t);
                return !n || !r(w, t) || r(e, G) && e[G][t] || (n.enumerable = !0), n
            }
        },
        q = function(e) {
            for (var t, n = y(R(e)), o = [], i = 0; n.length > i;) r(w, t = n[i++]) || t == G || t == _ || o.push(t);
            return o
        },
        $ = function(e) {
            for (var t, n = e === H, o = y(n ? B : R(e)), i = [], E = 0; o.length > E;) !r(w, t = o[E++]) || n && !r(H, t) || i.push(w[t]);
            return i
        };
    V || (a((v = function() {
        if (this instanceof v) throw TypeError("Symbol is not a constructor!");
        var e = T(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === H && t.call(B, n), r(this, G) && r(this[G], e) && (this[G][e] = !1), W(this, e, D(1, n))
            };
        return i && k && W(H, e, {
            configurable: !0,
            set: t
        }), x(e)
    }).prototype, "toString", function() {
        return this._k
    }), L.f = Q, C.f = j, n(123).f = f.f = q, n(162).f = X, n(192).f = $, i && !n(119) && a(H, "propertyIsEnumerable", X, !0), N.f = function(e) {
        return x(I(e))
    }), E(E.G + E.W + E.F * !V, {
        Symbol: v
    });
    for (var z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Z = 0; z.length > Z;) I(z[Z++]);
    for (var ee = M(I.store), te = 0; ee.length > te;) S(ee[te++]);
    E(E.S + E.F * !V, "Symbol", {
        for: function(e) {
            return r(F, e += "") ? F[e] : F[e] = v(e)
        },
        keyFor: function(e) {
            if (!K(e)) throw TypeError(e + " is not a symbol!");
            for (var t in F)
                if (F[t] === e) return t
        },
        useSetter: function() {
            k = !0
        },
        useSimple: function() {
            k = !1
        }
    }), E(E.S + E.F * !V, "Object", {
        create: function(e, t) {
            return void 0 === t ? d(e) : J(d(e), t)
        },
        defineProperty: j,
        defineProperties: J,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: q,
        getOwnPropertySymbols: $
    }), g && E(E.S + E.F * (!V || s(function() {
        var e = v();
        return "[null]" != U([e]) || "{}" != U({
            a: e
        }) || "{}" != U(Object(e))
    })), "JSON", {
        stringify: function(e) {
            if (void 0 !== e && !K(e)) {
                for (var t, n, o = [e], r = 1; arguments.length > r;) o.push(arguments[r++]);
                return "function" == typeof(t = o[1]) && (n = t), !n && l(t) || (t = function(e, t) {
                    if (n && (t = n.call(this, e, t)), !K(t)) return t
                }), o[1] = t, U.apply(g, o)
            }
        }
    }), v.prototype[P] || n(50)(v.prototype, P, v.prototype.valueOf), c(v, "Symbol"), c(Math, "Math", !0), c(o.JSON, "JSON", !0)
}, function(e, t, n) {
    var o = n(120),
        r = n(192),
        i = n(162);
    e.exports = function(e) {
        var t = o(e),
            n = r.f;
        if (n)
            for (var E, a = n(e), _ = i.f, s = 0; a.length > s;) _.call(e, E = a[s++]) && t.push(E);
        return t
    }
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Object", {
        create: n(122)
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S + o.F * !n(29), "Object", {
        defineProperty: n(30).f
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S + o.F * !n(29), "Object", {
        defineProperties: n(396)
    })
}, function(e, t, n) {
    var o = n(59),
        r = n(60).f;
    n(77)("getOwnPropertyDescriptor", function() {
        return function(e, t) {
            return r(o(e), t)
        }
    })
}, function(e, t, n) {
    var o = n(36),
        r = n(61);
    n(77)("getPrototypeOf", function() {
        return function(e) {
            return r(o(e))
        }
    })
}, function(e, t, n) {
    var o = n(36),
        r = n(120);
    n(77)("keys", function() {
        return function(e) {
            return r(o(e))
        }
    })
}, function(e, t, n) {
    n(77)("getOwnPropertyNames", function() {
        return n(397).f
    })
}, function(e, t, n) {
    var o = n(20),
        r = n(98).onFreeze;
    n(77)("freeze", function(e) {
        return function(t) {
            return e && o(t) ? e(r(t)) : t
        }
    })
}, function(e, t, n) {
    var o = n(20),
        r = n(98).onFreeze;
    n(77)("seal", function(e) {
        return function(t) {
            return e && o(t) ? e(r(t)) : t
        }
    })
}, function(e, t, n) {
    var o = n(20),
        r = n(98).onFreeze;
    n(77)("preventExtensions", function(e) {
        return function(t) {
            return e && o(t) ? e(r(t)) : t
        }
    })
}, function(e, t, n) {
    var o = n(20);
    n(77)("isFrozen", function(e) {
        return function(t) {
            return !o(t) || !!e && e(t)
        }
    })
}, function(e, t, n) {
    var o = n(20);
    n(77)("isSealed", function(e) {
        return function(t) {
            return !o(t) || !!e && e(t)
        }
    })
}, function(e, t, n) {
    var o = n(20);
    n(77)("isExtensible", function(e) {
        return function(t) {
            return !!o(t) && (!e || e(t))
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S + o.F, "Object", {
        assign: n(398)
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Object", {
        is: n(906)
    })
}, function(e, t) {
    e.exports = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Object", {
        setPrototypeOf: n(276).set
    })
}, function(e, t, n) {
    "use strict";
    var o = n(163),
        r = {};
    r[n(26)("toStringTag")] = "z", r + "" != "[object z]" && n(51)(Object.prototype, "toString", function() {
        return "[object " + o(this) + "]"
    }, !0)
}, function(e, t, n) {
    var o = n(2);
    o(o.P, "Function", {
        bind: n(399)
    })
}, function(e, t, n) {
    var o = n(30).f,
        r = Function.prototype,
        i = /^\s*function ([^ (]*)/;
    "name" in r || n(29) && o(r, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(i)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(20),
        r = n(61),
        i = n(26)("hasInstance"),
        E = Function.prototype;
    i in E || n(30).f(E, i, {
        value: function(e) {
            if ("function" != typeof this || !o(e)) return !1;
            if (!o(this.prototype)) return e instanceof this;
            for (; e = r(e);)
                if (this.prototype === e) return !0;
            return !1
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(401);
    o(o.G + o.F * (parseInt != r), {
        parseInt: r
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(402);
    o(o.G + o.F * (parseFloat != r), {
        parseFloat: r
    })
}, function(e, t, n) {
    "use strict";
    var o = n(17),
        r = n(49),
        i = n(65),
        E = n(278),
        a = n(74),
        _ = n(19),
        s = n(123).f,
        u = n(60).f,
        c = n(30).f,
        T = n(139).trim,
        I = o.Number,
        N = I,
        S = I.prototype,
        O = "Number" == i(n(122)(S)),
        l = "trim" in String.prototype,
        A = function(e) {
            var t = a(e, !1);
            if ("string" == typeof t && t.length > 2) {
                var n, o, r, i = (t = l ? t.trim() : T(t, 3)).charCodeAt(0);
                if (43 === i || 45 === i) {
                    if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === i) {
                    switch (t.charCodeAt(1)) {
                        case 66:
                        case 98:
                            o = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            o = 8, r = 55;
                            break;
                        default:
                            return +t
                    }
                    for (var E, _ = t.slice(2), s = 0, u = _.length; s < u; s++)
                        if ((E = _.charCodeAt(s)) < 48 || E > r) return NaN;
                    return parseInt(_, o)
                }
            }
            return +t
        };
    if (!I(" 0o1") || !I("0b1") || I("+0x1")) {
        I = function(e) {
            var t = arguments.length < 1 ? 0 : e,
                n = this;
            return n instanceof I && (O ? _(function() {
                S.valueOf.call(n)
            }) : "Number" != i(n)) ? E(new N(A(t)), n, I) : A(t)
        };
        for (var R, h = n(29) ? s(N) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), D = 0; h.length > D; D++) r(N, R = h[D]) && !r(I, R) && c(I, R, u(N, R));
        I.prototype = S, S.constructor = I, n(51)(o, "Number", I)
    }
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(76),
        i = n(403),
        E = n(279),
        a = 1..toFixed,
        _ = Math.floor,
        s = [0, 0, 0, 0, 0, 0],
        u = "Number.toFixed: incorrect invocation!",
        c = function(e, t) {
            for (var n = -1, o = t; ++n < 6;) o += e * s[n], s[n] = o % 1e7, o = _(o / 1e7)
        },
        T = function(e) {
            for (var t = 6, n = 0; --t >= 0;) n += s[t], s[t] = _(n / e), n = n % e * 1e7
        },
        I = function() {
            for (var e = 6, t = ""; --e >= 0;)
                if ("" !== t || 0 === e || 0 !== s[e]) {
                    var n = String(s[e]);
                    t = "" === t ? n : t + E.call("0", 7 - n.length) + n
                }
            return t
        },
        N = function(e, t, n) {
            return 0 === t ? n : t % 2 == 1 ? N(e, t - 1, n * e) : N(e * e, t / 2, n)
        },
        S = function(e) {
            for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
            for (; n >= 2;) t += 1, n /= 2;
            return t
        };
    o(o.P + o.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(19)(function() {
        a.call({})
    })), "Number", {
        toFixed: function(e) {
            var t, n, o, a, _ = i(this, u),
                s = r(e),
                O = "",
                l = "0";
            if (s < 0 || s > 20) throw RangeError(u);
            if (_ != _) return "NaN";
            if (_ <= -1e21 || _ >= 1e21) return String(_);
            if (_ < 0 && (O = "-", _ = -_), _ > 1e-21)
                if (t = S(_ * N(2, 69, 1)) - 69, n = t < 0 ? _ * N(2, -t, 1) : _ / N(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
                    for (c(0, n), o = s; o >= 7;) c(1e7, 0), o -= 7;
                    for (c(N(10, o, 1), 0), o = t - 1; o >= 23;) T(1 << 23), o -= 23;
                    T(1 << o), c(1, 1), T(2), l = I()
                } else c(0, n), c(1 << -t, 0), l = I() + E.call("0", s);
            return l = s > 0 ? O + ((a = l.length) <= s ? "0." + E.call("0", s - a) + l : l.slice(0, a - s) + "." + l.slice(a - s)) : O + l
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(19),
        i = n(403),
        E = 1..toPrecision;
    o(o.P + o.F * (r(function() {
        return "1" !== E.call(1, void 0)
    }) || !r(function() {
        E.call({})
    })), "Number", {
        toPrecision: function(e) {
            var t = i(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === e ? E.call(t) : E.call(t, e)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Number", {
        EPSILON: Math.pow(2, -52)
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(17).isFinite;
    o(o.S, "Number", {
        isFinite: function(e) {
            return "number" == typeof e && r(e)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Number", {
        isInteger: n(404)
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Number", {
        isNaN: function(e) {
            return e != e
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(404),
        i = Math.abs;
    o(o.S, "Number", {
        isSafeInteger: function(e) {
            return r(e) && i(e) <= 9007199254740991
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(402);
    o(o.S + o.F * (Number.parseFloat != r), "Number", {
        parseFloat: r
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(401);
    o(o.S + o.F * (Number.parseInt != r), "Number", {
        parseInt: r
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(405),
        i = Math.sqrt,
        E = Math.acosh;
    o(o.S + o.F * !(E && 710 == Math.floor(E(Number.MAX_VALUE)) && E(1 / 0) == 1 / 0), "Math", {
        acosh: function(e) {
            return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : r(e - 1 + i(e - 1) * i(e + 1))
        }
    })
}, function(e, t, n) {
    function o(e) {
        return isFinite(e = +e) && 0 != e ? e < 0 ? -o(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
    }
    var r = n(2),
        i = Math.asinh;
    r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
        asinh: o
    })
}, function(e, t, n) {
    var o = n(2),
        r = Math.atanh;
    o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", {
        atanh: function(e) {
            return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(280);
    o(o.S, "Math", {
        cbrt: function(e) {
            return r(e = +e) * Math.pow(Math.abs(e), 1 / 3)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        clz32: function(e) {
            return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = Math.exp;
    o(o.S, "Math", {
        cosh: function(e) {
            return (r(e = +e) + r(-e)) / 2
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(281);
    o(o.S + o.F * (r != Math.expm1), "Math", {
        expm1: r
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        fround: n(406)
    })
}, function(e, t, n) {
    var o = n(2),
        r = Math.abs;
    o(o.S, "Math", {
        hypot: function(e, t) {
            for (var n, o, i = 0, E = 0, a = arguments.length, _ = 0; E < a;) _ < (n = r(arguments[E++])) ? (i = i * (o = _ / n) * o + 1, _ = n) : i += n > 0 ? (o = n / _) * o : n;
            return _ === 1 / 0 ? 1 / 0 : _ * Math.sqrt(i)
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = Math.imul;
    o(o.S + o.F * n(19)(function() {
        return -5 != r(4294967295, 5) || 2 != r.length
    }), "Math", {
        imul: function(e, t) {
            var n = +e,
                o = +t,
                r = 65535 & n,
                i = 65535 & o;
            return 0 | r * i + ((65535 & n >>> 16) * i + r * (65535 & o >>> 16) << 16 >>> 0)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        log10: function(e) {
            return Math.log(e) * Math.LOG10E
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        log1p: n(405)
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        log2: function(e) {
            return Math.log(e) / Math.LN2
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        sign: n(280)
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(281),
        i = Math.exp;
    o(o.S + o.F * n(19)(function() {
        return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
        sinh: function(e) {
            return Math.abs(e = +e) < 1 ? (r(e) - r(-e)) / 2 : (i(e - 1) - i(-e - 1)) * (Math.E / 2)
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(281),
        i = Math.exp;
    o(o.S, "Math", {
        tanh: function(e) {
            var t = r(e = +e),
                n = r(-e);
            return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (i(e) + i(-e))
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        trunc: function(e) {
            return (e > 0 ? Math.floor : Math.ceil)(e)
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(121),
        i = String.fromCharCode,
        E = String.fromCodePoint;
    o(o.S + o.F * (!!E && 1 != E.length), "String", {
        fromCodePoint: function(e) {
            for (var t, n = [], o = arguments.length, E = 0; o > E;) {
                if (t = +arguments[E++], r(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
                n.push(t < 65536 ? i(t) : i(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(59),
        i = n(31);
    o(o.S, "String", {
        raw: function(e) {
            for (var t = r(e.raw), n = i(t.length), o = arguments.length, E = [], a = 0; n > a;) E.push(String(t[a++])), a < o && E.push(String(arguments[a]));
            return E.join("")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(139)("trim", function(e) {
        return function() {
            return e(this, 3)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(282)(!0);
    n(283)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = o(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(282)(!1);
    o(o.P, "String", {
        codePointAt: function(e) {
            return r(this, e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(31),
        i = n(285),
        E = "".endsWith;
    o(o.P + o.F * n(286)("endsWith"), "String", {
        endsWith: function(e) {
            var t = i(this, e, "endsWith"),
                n = arguments.length > 1 ? arguments[1] : void 0,
                o = r(t.length),
                a = void 0 === n ? o : Math.min(r(n), o),
                _ = String(e);
            return E ? E.call(t, _, a) : t.slice(a - _.length, a) === _
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(285);
    o(o.P + o.F * n(286)("includes"), "String", {
        includes: function(e) {
            return !!~r(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.P, "String", {
        repeat: n(279)
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(31),
        i = n(285),
        E = "".startsWith;
    o(o.P + o.F * n(286)("startsWith"), "String", {
        startsWith: function(e) {
            var t = i(this, e, "startsWith"),
                n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                o = String(e);
            return E ? E.call(t, o, n) : t.slice(n, n + o.length) === o
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("anchor", function(e) {
        return function(t) {
            return e(this, "a", "name", t)
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("big", function(e) {
        return function() {
            return e(this, "big", "", "")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("blink", function(e) {
        return function() {
            return e(this, "blink", "", "")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("bold", function(e) {
        return function() {
            return e(this, "b", "", "")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("fixed", function(e) {
        return function() {
            return e(this, "tt", "", "")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("fontcolor", function(e) {
        return function(t) {
            return e(this, "font", "color", t)
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("fontsize", function(e) {
        return function(t) {
            return e(this, "font", "size", t)
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("italics", function(e) {
        return function() {
            return e(this, "i", "", "")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("link", function(e) {
        return function(t) {
            return e(this, "a", "href", t)
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("small", function(e) {
        return function() {
            return e(this, "small", "", "")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("strike", function(e) {
        return function() {
            return e(this, "strike", "", "")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("sub", function(e) {
        return function() {
            return e(this, "sub", "", "")
        }
    })
}, function(e, t, n) {
    "use strict";
    n(52)("sup", function(e) {
        return function() {
            return e(this, "sup", "", "")
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(36),
        i = n(74);
    o(o.P + o.F * n(19)(function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    }), "Date", {
        toJSON: function(e) {
            var t = r(this),
                n = i(t);
            return "number" != typeof n || isFinite(n) ? t.toISOString() : null
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(968);
    o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", {
        toISOString: r
    })
}, function(e, t, n) {
    "use strict";
    var o = n(19),
        r = Date.prototype.getTime,
        i = Date.prototype.toISOString,
        E = function(e) {
            return e > 9 ? e : "0" + e
        };
    e.exports = o(function() {
        return "0385-07-25T07:06:39.999Z" != i.call(new Date(-5e13 - 1))
    }) || !o(function() {
        i.call(new Date(NaN))
    }) ? function() {
        if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
        var e = this,
            t = e.getUTCFullYear(),
            n = e.getUTCMilliseconds(),
            o = t < 0 ? "-" : t > 9999 ? "+" : "";
        return o + ("00000" + Math.abs(t)).slice(o ? -6 : -4) + "-" + E(e.getUTCMonth() + 1) + "-" + E(e.getUTCDate()) + "T" + E(e.getUTCHours()) + ":" + E(e.getUTCMinutes()) + ":" + E(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + E(n)) + "Z"
    } : i
}, function(e, t, n) {
    var o = Date.prototype,
        r = o.toString,
        i = o.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(51)(o, "toString", function() {
        var e = i.call(this);
        return e === e ? r.call(this) : "Invalid Date"
    })
}, function(e, t, n) {
    var o = n(26)("toPrimitive"),
        r = Date.prototype;
    o in r || n(50)(r, o, n(971))
}, function(e, t, n) {
    "use strict";
    var o = n(15),
        r = n(74);
    e.exports = function(e) {
        if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
        return r(o(this), "number" != e)
    }
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Array", {
        isArray: n(193)
    })
}, function(e, t, n) {
    "use strict";
    var o = n(64),
        r = n(2),
        i = n(36),
        E = n(407),
        a = n(287),
        _ = n(31),
        s = n(288),
        u = n(289);
    r(r.S + r.F * !n(195)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, r, c, T = i(e),
                I = "function" == typeof this ? this : Array,
                N = arguments.length,
                S = N > 1 ? arguments[1] : void 0,
                O = void 0 !== S,
                l = 0,
                A = u(T);
            if (O && (S = o(S, N > 2 ? arguments[2] : void 0, 2)), void 0 == A || I == Array && a(A))
                for (n = new I(t = _(T.length)); t > l; l++) s(n, l, O ? S(T[l], l) : T[l]);
            else
                for (c = A.call(T), n = new I; !(r = c.next()).done; l++) s(n, l, O ? E(c, S, [r.value, l], !0) : r.value);
            return n.length = l, n
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(288);
    o(o.S + o.F * n(19)(function() {
        function e() {}
        return !(Array.of.call(e) instanceof e)
    }), "Array", { of: function() {
            for (var e = 0, t = arguments.length, n = new("function" == typeof this ? this : Array)(t); t > e;) r(n, e, arguments[e++]);
            return n.length = t, n
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(59),
        i = [].join;
    o(o.P + o.F * (n(161) != Object || !n(66)(i)), "Array", {
        join: function(e) {
            return i.call(r(this), void 0 === e ? "," : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(275),
        i = n(65),
        E = n(121),
        a = n(31),
        _ = [].slice;
    o(o.P + o.F * n(19)(function() {
        r && _.call(r)
    }), "Array", {
        slice: function(e, t) {
            var n = a(this.length),
                o = i(this);
            if (t = void 0 === t ? n : t, "Array" == o) return _.call(this, e, t);
            for (var r = E(e, n), s = E(t, n), u = a(s - r), c = Array(u), T = 0; T < u; T++) c[T] = "String" == o ? this.charAt(r + T) : this[r + T];
            return c
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(42),
        i = n(36),
        E = n(19),
        a = [].sort,
        _ = [1, 2, 3];
    o(o.P + o.F * (E(function() {
        _.sort(void 0)
    }) || !E(function() {
        _.sort(null)
    }) || !n(66)(a)), "Array", {
        sort: function(e) {
            return void 0 === e ? a.call(i(this)) : a.call(i(this), r(e))
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(78)(0),
        i = n(66)([].forEach, !0);
    o(o.P + o.F * !i, "Array", {
        forEach: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    var o = n(20),
        r = n(193),
        i = n(26)("species");
    e.exports = function(e) {
        var t;
        return r(e) && ("function" != typeof(t = e.constructor) || t !== Array && !r(t.prototype) || (t = void 0), o(t) && null === (t = t[i]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(78)(1);
    o(o.P + o.F * !n(66)([].map, !0), "Array", {
        map: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(78)(2);
    o(o.P + o.F * !n(66)([].filter, !0), "Array", {
        filter: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(78)(3);
    o(o.P + o.F * !n(66)([].some, !0), "Array", {
        some: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(78)(4);
    o(o.P + o.F * !n(66)([].every, !0), "Array", {
        every: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(408);
    o(o.P + o.F * !n(66)([].reduce, !0), "Array", {
        reduce: function(e) {
            return r(this, e, arguments.length, arguments[1], !1)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(408);
    o(o.P + o.F * !n(66)([].reduceRight, !0), "Array", {
        reduceRight: function(e) {
            return r(this, e, arguments.length, arguments[1], !0)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(191)(!1),
        i = [].indexOf,
        E = !!i && 1 / [1].indexOf(1, -0) < 0;
    o(o.P + o.F * (E || !n(66)(i)), "Array", {
        indexOf: function(e) {
            return E ? i.apply(this, arguments) || 0 : r(this, e, arguments[1])
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(59),
        i = n(76),
        E = n(31),
        a = [].lastIndexOf,
        _ = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    o(o.P + o.F * (_ || !n(66)(a)), "Array", {
        lastIndexOf: function(e) {
            if (_) return a.apply(this, arguments) || 0;
            var t = r(this),
                n = E(t.length),
                o = n - 1;
            for (arguments.length > 1 && (o = Math.min(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)
                if (o in t && t[o] === e) return o || 0;
            return -1
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.P, "Array", {
        copyWithin: n(409)
    }), n(99)("copyWithin")
}, function(e, t, n) {
    var o = n(2);
    o(o.P, "Array", {
        fill: n(291)
    }), n(99)("fill")
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(78)(5),
        i = !0;
    "find" in [] && Array(1).find(function() {
        i = !1
    }), o(o.P + o.F * i, "Array", {
        find: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(99)("find")
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(78)(6),
        i = "findIndex",
        E = !0;
    i in [] && Array(1)[i](function() {
        E = !1
    }), o(o.P + o.F * E, "Array", {
        findIndex: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(99)(i)
}, function(e, t, n) {
    n(124)("Array")
}, function(e, t, n) {
    var o = n(17),
        r = n(278),
        i = n(30).f,
        E = n(123).f,
        a = n(194),
        _ = n(196),
        s = o.RegExp,
        u = s,
        c = s.prototype,
        T = /a/g,
        I = /a/g,
        N = new s(T) !== T;
    if (n(29) && (!N || n(19)(function() {
            return I[n(26)("match")] = !1, s(T) != T || s(I) == I || "/a/i" != s(T, "i")
        }))) {
        s = function(e, t) {
            var n = this instanceof s,
                o = a(e),
                i = void 0 === t;
            return !n && o && e.constructor === s && i ? e : r(N ? new u(o && !i ? e.source : e, t) : u((o = e instanceof s) ? e.source : e, o && i ? _.call(e) : t), n ? this : c, s)
        };
        for (var S = function(e) {
                e in s || i(s, e, {
                    configurable: !0,
                    get: function() {
                        return u[e]
                    },
                    set: function(t) {
                        u[e] = t
                    }
                })
            }, O = E(u), l = 0; O.length > l;) S(O[l++]);
        c.constructor = s, s.prototype = c, n(51)(o, "RegExp", s)
    }
    n(124)("RegExp")
}, function(e, t, n) {
    "use strict";
    n(411);
    var o = n(15),
        r = n(196),
        i = n(29),
        E = /./.toString,
        a = function(e) {
            n(51)(RegExp.prototype, "toString", e, !0)
        };
    n(19)(function() {
        return "/a/b" != E.call({
            source: "a",
            flags: "b"
        })
    }) ? a(function() {
        var e = o(this);
        return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? r.call(e) : void 0)
    }) : "toString" != E.name && a(function() {
        return E.call(this)
    })
}, function(e, t, n) {
    n(197)("match", 1, function(e, t, n) {
        return [function(n) {
            "use strict";
            var o = e(this),
                r = void 0 == n ? void 0 : n[t];
            return void 0 !== r ? r.call(n, o) : new RegExp(n)[t](String(o))
        }, n]
    })
}, function(e, t, n) {
    n(197)("replace", 2, function(e, t, n) {
        return [function(o, r) {
            "use strict";
            var i = e(this),
                E = void 0 == o ? void 0 : o[t];
            return void 0 !== E ? E.call(o, i, r) : n.call(String(i), o, r)
        }, n]
    })
}, function(e, t, n) {
    n(197)("search", 1, function(e, t, n) {
        return [function(n) {
            "use strict";
            var o = e(this),
                r = void 0 == n ? void 0 : n[t];
            return void 0 !== r ? r.call(n, o) : new RegExp(n)[t](String(o))
        }, n]
    })
}, function(e, t, n) {
    n(197)("split", 2, function(e, t, o) {
        "use strict";
        var r = n(194),
            i = o,
            E = [].push,
            a = "length";
        if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[a] || 2 != "ab".split(/(?:ab)*/)[a] || 4 != ".".split(/(.?)(.?)/)[a] || ".".split(/()()/)[a] > 1 || "".split(/.?/)[a]) {
            var _ = void 0 === /()??/.exec("")[1];
            o = function(e, t) {
                var n = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!r(e)) return i.call(n, e, t);
                var o, s, u, c, T, I = [],
                    N = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                    S = 0,
                    O = void 0 === t ? 4294967295 : t >>> 0,
                    l = new RegExp(e.source, N + "g");
                for (_ || (o = new RegExp("^" + l.source + "$(?!\\s)", N));
                    (s = l.exec(n)) && !((u = s.index + s[0][a]) > S && (I.push(n.slice(S, s.index)), !_ && s[a] > 1 && s[0].replace(o, function() {
                        for (T = 1; T < arguments[a] - 2; T++) void 0 === arguments[T] && (s[T] = void 0)
                    }), s[a] > 1 && s.index < n[a] && E.apply(I, s.slice(1)), c = s[0][a], S = u, I[a] >= O));) l.lastIndex === s.index && l.lastIndex++;
                return S === n[a] ? !c && l.test("") || I.push("") : I.push(n.slice(S)), I[a] > O ? I.slice(0, O) : I
            }
        } else "0".split(void 0, 0)[a] && (o = function(e, t) {
            return void 0 === e && 0 === t ? [] : i.call(this, e, t)
        });
        return [function(n, r) {
            var i = e(this),
                E = void 0 == n ? void 0 : n[t];
            return void 0 !== E ? E.call(n, i, r) : o.call(String(i), n, r)
        }, o]
    })
}, function(e, t, n) {
    "use strict";
    var o, r, i, E, a = n(119),
        _ = n(17),
        s = n(64),
        u = n(163),
        c = n(2),
        T = n(20),
        I = n(42),
        N = n(125),
        S = n(126),
        O = n(198),
        l = n(293).set,
        A = n(294)(),
        R = n(295),
        h = n(412),
        D = n(413),
        d = _.TypeError,
        f = _.process,
        L = _.Promise,
        C = "process" == u(f),
        M = function() {},
        m = r = R.f,
        p = !! function() {
            try {
                var e = L.resolve(1),
                    t = (e.constructor = {})[n(26)("species")] = function(e) {
                        e(M, M)
                    };
                return (C || "function" == typeof PromiseRejectionEvent) && e.then(M) instanceof t
            } catch (e) {}
        }(),
        y = function(e) {
            var t;
            return !(!T(e) || "function" != typeof(t = e.then)) && t
        },
        v = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                A(function() {
                    for (var o = e._v, r = 1 == e._s, i = 0; n.length > i;) ! function(t) {
                        var n, i, E = r ? t.ok : t.fail,
                            a = t.resolve,
                            _ = t.reject,
                            s = t.domain;
                        try {
                            E ? (r || (2 == e._h && G(e), e._h = 1), !0 === E ? n = o : (s && s.enter(), n = E(o), s && s.exit()), n === t.promise ? _(d("Promise-chain cycle")) : (i = y(n)) ? i.call(n, a, _) : a(n)) : _(o)
                        } catch (e) {
                            _(e)
                        }
                    }(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && g(e)
                })
            }
        },
        g = function(e) {
            l.call(_, function() {
                var t, n, o, r = e._v,
                    i = U(e);
                if (i && (t = h(function() {
                        C ? f.emit("unhandledRejection", r, e) : (n = _.onunhandledrejection) ? n({
                            promise: e,
                            reason: r
                        }) : (o = _.console) && o.error && o.error("Unhandled promise rejection", r)
                    }), e._h = C || U(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
            })
        },
        U = function(e) {
            if (1 == e._h) return !1;
            for (var t, n = e._a || e._c, o = 0; n.length > o;)
                if ((t = n[o++]).fail || !U(t.promise)) return !1;
            return !0
        },
        G = function(e) {
            l.call(_, function() {
                var t;
                C ? f.emit("rejectionHandled", e) : (t = _.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        P = function(e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), v(t, !0))
        },
        b = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw d("Promise can't be resolved itself");
                    (t = y(e)) ? A(function() {
                        var o = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, s(b, o, 1), s(P, o, 1))
                        } catch (e) {
                            P.call(o, e)
                        }
                    }): (n._v = e, n._s = 1, v(n, !1))
                } catch (e) {
                    P.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    p || (L = function(e) {
        N(this, L, "Promise", "_h"), I(e), o.call(this);
        try {
            e(s(b, this, 1), s(P, this, 1))
        } catch (e) {
            P.call(this, e)
        }
    }, (o = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(127)(L.prototype, {
        then: function(e, t) {
            var n = m(O(this, L));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = C ? f.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && v(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), i = function() {
        var e = new o;
        this.promise = e, this.resolve = s(b, e, 1), this.reject = s(P, e, 1)
    }, R.f = m = function(e) {
        return e === L || e === E ? new i(e) : r(e)
    }), c(c.G + c.W + c.F * !p, {
        Promise: L
    }), n(138)(L, "Promise"), n(124)("Promise"), E = n(73).Promise, c(c.S + c.F * !p, "Promise", {
        reject: function(e) {
            var t = m(this);
            return (0, t.reject)(e), t.promise
        }
    }), c(c.S + c.F * (a || !p), "Promise", {
        resolve: function(e) {
            return D(a && this === E ? L : this, e)
        }
    }), c(c.S + c.F * !(p && n(195)(function(e) {
        L.all(e).catch(M)
    })), "Promise", {
        all: function(e) {
            var t = this,
                n = m(t),
                o = n.resolve,
                r = n.reject,
                i = h(function() {
                    var n = [],
                        i = 0,
                        E = 1;
                    S(e, !1, function(e) {
                        var a = i++,
                            _ = !1;
                        n.push(void 0), E++, t.resolve(e).then(function(e) {
                            _ || (_ = !0, n[a] = e, --E || o(n))
                        }, r)
                    }), --E || o(n)
                });
            return i.e && r(i.v), n.promise
        },
        race: function(e) {
            var t = this,
                n = m(t),
                o = n.reject,
                r = h(function() {
                    S(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, o)
                    })
                });
            return r.e && o(r.v), n.promise
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(418),
        r = n(141);
    n(199)("WeakSet", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(e) {
            return o.def(r(this, "WeakSet"), e, !0)
        }
    }, o, !1, !0)
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(200),
        i = n(296),
        E = n(15),
        a = n(121),
        _ = n(31),
        s = n(20),
        u = n(17).ArrayBuffer,
        c = n(198),
        T = i.ArrayBuffer,
        I = i.DataView,
        N = r.ABV && u.isView,
        S = T.prototype.slice,
        O = r.VIEW;
    o(o.G + o.W + o.F * (u !== T), {
        ArrayBuffer: T
    }), o(o.S + o.F * !r.CONSTR, "ArrayBuffer", {
        isView: function(e) {
            return N && N(e) || s(e) && O in e
        }
    }), o(o.P + o.U + o.F * n(19)(function() {
        return !new T(2).slice(1, void 0).byteLength
    }), "ArrayBuffer", {
        slice: function(e, t) {
            if (void 0 !== S && void 0 === t) return S.call(E(this), e);
            for (var n = E(this).byteLength, o = a(e, n), r = a(void 0 === t ? n : t, n), i = new(c(this, T))(_(r - o)), s = new I(this), u = new I(i), N = 0; o < r;) u.setUint8(N++, s.getUint8(o++));
            return i
        }
    }), n(124)("ArrayBuffer")
}, function(e, t, n) {
    var o = n(2);
    o(o.G + o.W + o.F * !n(200).ABV, {
        DataView: n(296).DataView
    })
}, function(e, t, n) {
    n(88)("Int8", 1, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    })
}, function(e, t, n) {
    n(88)("Uint8", 1, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    })
}, function(e, t, n) {
    n(88)("Uint8", 1, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    }, !0)
}, function(e, t, n) {
    n(88)("Int16", 2, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    })
}, function(e, t, n) {
    n(88)("Uint16", 2, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    })
}, function(e, t, n) {
    n(88)("Int32", 4, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    })
}, function(e, t, n) {
    n(88)("Uint32", 4, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    })
}, function(e, t, n) {
    n(88)("Float32", 4, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    })
}, function(e, t, n) {
    n(88)("Float64", 8, function(e) {
        return function(t, n, o) {
            return e(this, t, n, o)
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(42),
        i = n(15),
        E = (n(17).Reflect || {}).apply,
        a = Function.apply;
    o(o.S + o.F * !n(19)(function() {
        E(function() {})
    }), "Reflect", {
        apply: function(e, t, n) {
            var o = r(e),
                _ = i(n);
            return E ? E(o, t, _) : a.call(o, t, _)
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(122),
        i = n(42),
        E = n(15),
        a = n(20),
        _ = n(19),
        s = n(399),
        u = (n(17).Reflect || {}).construct,
        c = _(function() {
            function e() {}
            return !(u(function() {}, [], e) instanceof e)
        }),
        T = !_(function() {
            u(function() {})
        });
    o(o.S + o.F * (c || T), "Reflect", {
        construct: function(e, t) {
            i(e), E(t);
            var n = arguments.length < 3 ? e : i(arguments[2]);
            if (T && !c) return u(e, t, n);
            if (e == n) {
                switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3])
                }
                var o = [null];
                return o.push.apply(o, t), new(s.apply(e, o))
            }
            var _ = n.prototype,
                I = r(a(_) ? _ : Object.prototype),
                N = Function.apply.call(e, I, t);
            return a(N) ? N : I
        }
    })
}, function(e, t, n) {
    var o = n(30),
        r = n(2),
        i = n(15),
        E = n(74);
    r(r.S + r.F * n(19)(function() {
        Reflect.defineProperty(o.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }), "Reflect", {
        defineProperty: function(e, t, n) {
            i(e), t = E(t, !0), i(n);
            try {
                return o.f(e, t, n), !0
            } catch (e) {
                return !1
            }
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(60).f,
        i = n(15);
    o(o.S, "Reflect", {
        deleteProperty: function(e, t) {
            var n = r(i(e), t);
            return !(n && !n.configurable) && delete e[t]
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(15),
        i = function(e) {
            this._t = r(e), this._i = 0;
            var t, n = this._k = [];
            for (t in e) n.push(t)
        };
    n(284)(i, "Object", function() {
        var e, t = this,
            n = t._k;
        do {
            if (t._i >= n.length) return {
                value: void 0,
                done: !0
            }
        } while (!((e = n[t._i++]) in t._t));
        return {
            value: e,
            done: !1
        }
    }), o(o.S, "Reflect", {
        enumerate: function(e) {
            return new i(e)
        }
    })
}, function(e, t, n) {
    function o(e, t) {
        var n, a, u = arguments.length < 3 ? e : arguments[2];
        return s(e) === u ? e[t] : (n = r.f(e, t)) ? E(n, "value") ? n.value : void 0 !== n.get ? n.get.call(u) : void 0 : _(a = i(e)) ? o(a, t, u) : void 0
    }
    var r = n(60),
        i = n(61),
        E = n(49),
        a = n(2),
        _ = n(20),
        s = n(15);
    a(a.S, "Reflect", {
        get: o
    })
}, function(e, t, n) {
    var o = n(60),
        r = n(2),
        i = n(15);
    r(r.S, "Reflect", {
        getOwnPropertyDescriptor: function(e, t) {
            return o.f(i(e), t)
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(61),
        i = n(15);
    o(o.S, "Reflect", {
        getPrototypeOf: function(e) {
            return r(i(e))
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Reflect", {
        has: function(e, t) {
            return t in e
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(15),
        i = Object.isExtensible;
    o(o.S, "Reflect", {
        isExtensible: function(e) {
            return r(e), !i || i(e)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Reflect", {
        ownKeys: n(420)
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(15),
        i = Object.preventExtensions;
    o(o.S, "Reflect", {
        preventExtensions: function(e) {
            r(e);
            try {
                return i && i(e), !0
            } catch (e) {
                return !1
            }
        }
    })
}, function(e, t, n) {
    function o(e, t, n) {
        var _, T, I = arguments.length < 4 ? e : arguments[3],
            N = i.f(u(e), t);
        if (!N) {
            if (c(T = E(e))) return o(T, t, n, I);
            N = s(0)
        }
        return a(N, "value") ? !(!1 === N.writable || !c(I)) && (_ = i.f(I, t) || s(0), _.value = n, r.f(I, t, _), !0) : void 0 !== N.set && (N.set.call(I, n), !0)
    }
    var r = n(30),
        i = n(60),
        E = n(61),
        a = n(49),
        _ = n(2),
        s = n(117),
        u = n(15),
        c = n(20);
    _(_.S, "Reflect", {
        set: o
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(276);
    r && o(o.S, "Reflect", {
        setPrototypeOf: function(e, t) {
            r.check(e, t);
            try {
                return r.set(e, t), !0
            } catch (e) {
                return !1
            }
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(191)(!0);
    o(o.P, "Array", {
        includes: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(99)("includes")
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(421),
        i = n(36),
        E = n(31),
        a = n(42),
        _ = n(290);
    o(o.P, "Array", {
        flatMap: function(e) {
            var t, n, o = i(this);
            return a(e), t = E(o.length), n = _(o, 0), r(n, o, o, t, 0, 1, e, arguments[1]), n
        }
    }), n(99)("flatMap")
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(421),
        i = n(36),
        E = n(31),
        a = n(76),
        _ = n(290);
    o(o.P, "Array", {
        flatten: function() {
            var e = arguments[0],
                t = i(this),
                n = E(t.length),
                o = _(t, 0);
            return r(o, t, t, n, 0, void 0 === e ? 1 : a(e)), o
        }
    }), n(99)("flatten")
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(282)(!0);
    o(o.P, "String", {
        at: function(e) {
            return r(this, e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(422);
    o(o.P, "String", {
        padStart: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(422);
    o(o.P, "String", {
        padEnd: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function(e, t, n) {
    "use strict";
    n(139)("trimLeft", function(e) {
        return function() {
            return e(this, 1)
        }
    }, "trimStart")
}, function(e, t, n) {
    "use strict";
    n(139)("trimRight", function(e) {
        return function() {
            return e(this, 2)
        }
    }, "trimEnd")
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(75),
        i = n(31),
        E = n(194),
        a = n(196),
        _ = RegExp.prototype,
        s = function(e, t) {
            this._r = e, this._s = t
        };
    n(284)(s, "RegExp String", function() {
        var e = this._r.exec(this._s);
        return {
            value: e,
            done: null === e
        }
    }), o(o.P, "String", {
        matchAll: function(e) {
            if (r(this), !E(e)) throw TypeError(e + " is not a regexp!");
            var t = String(this),
                n = "flags" in _ ? String(e.flags) : a.call(e),
                o = new RegExp(e.source, ~n.indexOf("g") ? n : "g" + n);
            return o.lastIndex = i(e.lastIndex), new s(o, t)
        }
    })
}, function(e, t, n) {
    n(272)("asyncIterator")
}, function(e, t, n) {
    n(272)("observable")
}, function(e, t, n) {
    var o = n(2),
        r = n(420),
        i = n(59),
        E = n(60),
        a = n(288);
    o(o.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
            for (var t, n, o = i(e), _ = E.f, s = r(o), u = {}, c = 0; s.length > c;) void 0 !== (n = _(o, t = s[c++])) && a(u, t, n);
            return u
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(423)(!1);
    o(o.S, "Object", {
        values: function(e) {
            return r(e)
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(423)(!0);
    o(o.S, "Object", {
        entries: function(e) {
            return r(e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(36),
        i = n(42),
        E = n(30);
    n(29) && o(o.P + n(201), "Object", {
        __defineGetter__: function(e, t) {
            E.f(r(this), e, {
                get: i(t),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(36),
        i = n(42),
        E = n(30);
    n(29) && o(o.P + n(201), "Object", {
        __defineSetter__: function(e, t) {
            E.f(r(this), e, {
                set: i(t),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(36),
        i = n(74),
        E = n(61),
        a = n(60).f;
    n(29) && o(o.P + n(201), "Object", {
        __lookupGetter__: function(e) {
            var t, n = r(this),
                o = i(e, !0);
            do {
                if (t = a(n, o)) return t.get
            } while (n = E(n))
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(36),
        i = n(74),
        E = n(61),
        a = n(60).f;
    n(29) && o(o.P + n(201), "Object", {
        __lookupSetter__: function(e) {
            var t, n = r(this),
                o = i(e, !0);
            do {
                if (t = a(n, o)) return t.set
            } while (n = E(n))
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.P + o.R, "Map", {
        toJSON: n(424)("Map")
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.P + o.R, "Set", {
        toJSON: n(424)("Set")
    })
}, function(e, t, n) {
    n(202)("Map")
}, function(e, t, n) {
    n(202)("Set")
}, function(e, t, n) {
    n(202)("WeakMap")
}, function(e, t, n) {
    n(202)("WeakSet")
}, function(e, t, n) {
    n(203)("Map")
}, function(e, t, n) {
    n(203)("Set")
}, function(e, t, n) {
    n(203)("WeakMap")
}, function(e, t, n) {
    n(203)("WeakSet")
}, function(e, t, n) {
    var o = n(2);
    o(o.G, {
        global: n(17)
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "System", {
        global: n(17)
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(65);
    o(o.S, "Error", {
        isError: function(e) {
            return "Error" === r(e)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        clamp: function(e, t, n) {
            return Math.min(n, Math.max(t, e))
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        DEG_PER_RAD: Math.PI / 180
    })
}, function(e, t, n) {
    var o = n(2),
        r = 180 / Math.PI;
    o(o.S, "Math", {
        degrees: function(e) {
            return e * r
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(426),
        i = n(406);
    o(o.S, "Math", {
        fscale: function(e, t, n, o, E) {
            return i(r(e, t, n, o, E))
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        iaddh: function(e, t, n, o) {
            var r = e >>> 0,
                i = n >>> 0;
            return (t >>> 0) + (o >>> 0) + ((r & i | (r | i) & ~(r + i >>> 0)) >>> 31) | 0
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        isubh: function(e, t, n, o) {
            var r = e >>> 0,
                i = n >>> 0;
            return (t >>> 0) - (o >>> 0) - ((~r & i | ~(r ^ i) & r - i >>> 0) >>> 31) | 0
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        imulh: function(e, t) {
            var n = +e,
                o = +t,
                r = 65535 & n,
                i = 65535 & o,
                E = n >> 16,
                a = o >> 16,
                _ = (E * i >>> 0) + (r * i >>> 16);
            return E * a + (_ >> 16) + ((r * a >>> 0) + (65535 & _) >> 16)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        RAD_PER_DEG: 180 / Math.PI
    })
}, function(e, t, n) {
    var o = n(2),
        r = Math.PI / 180;
    o(o.S, "Math", {
        radians: function(e) {
            return e * r
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        scale: n(426)
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        umulh: function(e, t) {
            var n = +e,
                o = +t,
                r = 65535 & n,
                i = 65535 & o,
                E = n >>> 16,
                a = o >>> 16,
                _ = (E * i >>> 0) + (r * i >>> 16);
            return E * a + (_ >>> 16) + ((r * a >>> 0) + (65535 & _) >>> 16)
        }
    })
}, function(e, t, n) {
    var o = n(2);
    o(o.S, "Math", {
        signbit: function(e) {
            return (e = +e) != e ? e : 0 == e ? 1 / e == 1 / 0 : e > 0
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(73),
        i = n(17),
        E = n(198),
        a = n(413);
    o(o.P + o.R, "Promise", {
        finally: function(e) {
            var t = E(this, r.Promise || i.Promise),
                n = "function" == typeof e;
            return this.then(n ? function(n) {
                return a(t, e()).then(function() {
                    return n
                })
            } : e, n ? function(n) {
                return a(t, e()).then(function() {
                    throw n
                })
            } : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(295),
        i = n(412);
    o(o.S, "Promise", {
        try: function(e) {
            var t = r.f(this),
                n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function(e, t, n) {
    var o = n(89),
        r = n(15),
        i = o.key,
        E = o.set;
    o.exp({
        defineMetadata: function(e, t, n, o) {
            E(e, t, r(n), i(o))
        }
    })
}, function(e, t, n) {
    var o = n(89),
        r = n(15),
        i = o.key,
        E = o.map,
        a = o.store;
    o.exp({
        deleteMetadata: function(e, t) {
            var n = arguments.length < 3 ? void 0 : i(arguments[2]),
                o = E(r(t), n, !1);
            if (void 0 === o || !o.delete(e)) return !1;
            if (o.size) return !0;
            var _ = a.get(t);
            return _.delete(n), !!_.size || a.delete(t)
        }
    })
}, function(e, t, n) {
    var o = n(89),
        r = n(15),
        i = n(61),
        E = o.has,
        a = o.get,
        _ = o.key,
        s = function(e, t, n) {
            if (E(e, t, n)) return a(e, t, n);
            var o = i(t);
            return null !== o ? s(e, o, n) : void 0
        };
    o.exp({
        getMetadata: function(e, t) {
            return s(e, r(t), arguments.length < 3 ? void 0 : _(arguments[2]))
        }
    })
}, function(e, t, n) {
    var o = n(416),
        r = n(425),
        i = n(89),
        E = n(15),
        a = n(61),
        _ = i.keys,
        s = i.key,
        u = function(e, t) {
            var n = _(e, t),
                i = a(e);
            if (null === i) return n;
            var E = u(i, t);
            return E.length ? n.length ? r(new o(n.concat(E))) : E : n
        };
    i.exp({
        getMetadataKeys: function(e) {
            return u(E(e), arguments.length < 2 ? void 0 : s(arguments[1]))
        }
    })
}, function(e, t, n) {
    var o = n(89),
        r = n(15),
        i = o.get,
        E = o.key;
    o.exp({
        getOwnMetadata: function(e, t) {
            return i(e, r(t), arguments.length < 3 ? void 0 : E(arguments[2]))
        }
    })
}, function(e, t, n) {
    var o = n(89),
        r = n(15),
        i = o.keys,
        E = o.key;
    o.exp({
        getOwnMetadataKeys: function(e) {
            return i(r(e), arguments.length < 2 ? void 0 : E(arguments[1]))
        }
    })
}, function(e, t, n) {
    var o = n(89),
        r = n(15),
        i = n(61),
        E = o.has,
        a = o.key,
        _ = function(e, t, n) {
            if (E(e, t, n)) return !0;
            var o = i(t);
            return null !== o && _(e, o, n)
        };
    o.exp({
        hasMetadata: function(e, t) {
            return _(e, r(t), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function(e, t, n) {
    var o = n(89),
        r = n(15),
        i = o.has,
        E = o.key;
    o.exp({
        hasOwnMetadata: function(e, t) {
            return i(e, r(t), arguments.length < 3 ? void 0 : E(arguments[2]))
        }
    })
}, function(e, t, n) {
    var o = n(89),
        r = n(15),
        i = n(42),
        E = o.key,
        a = o.set;
    o.exp({
        metadata: function(e, t) {
            return function(n, o) {
                a(e, t, (void 0 !== o ? r : i)(n), E(o))
            }
        }
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(294)(),
        i = n(17).process,
        E = "process" == n(65)(i);
    o(o.G, {
        asap: function(e) {
            var t = E && i.domain;
            r(t ? t.bind(e) : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(2),
        r = n(17),
        i = n(73),
        E = n(294)(),
        a = n(26)("observable"),
        _ = n(42),
        s = n(15),
        u = n(125),
        c = n(127),
        T = n(50),
        I = n(126),
        N = I.RETURN,
        S = function(e) {
            return null == e ? void 0 : _(e)
        },
        O = function(e) {
            var t = e._c;
            t && (e._c = void 0, t())
        },
        l = function(e) {
            return void 0 === e._o
        },
        A = function(e) {
            l(e) || (e._o = void 0, O(e))
        },
        R = function(e, t) {
            s(e), this._c = void 0, this._o = e, e = new h(this);
            try {
                var n = t(e),
                    o = n;
                null != n && ("function" == typeof n.unsubscribe ? n = function() {
                    o.unsubscribe()
                } : _(n), this._c = n)
            } catch (t) {
                return void e.error(t)
            }
            l(this) && O(this)
        };
    R.prototype = c({}, {
        unsubscribe: function() {
            A(this)
        }
    });
    var h = function(e) {
        this._s = e
    };
    h.prototype = c({}, {
        next: function(e) {
            var t = this._s;
            if (!l(t)) {
                var n = t._o;
                try {
                    var o = S(n.next);
                    if (o) return o.call(n, e)
                } catch (e) {
                    try {
                        A(t)
                    } finally {
                        throw e
                    }
                }
            }
        },
        error: function(e) {
            var t = this._s;
            if (l(t)) throw e;
            var n = t._o;
            t._o = void 0;
            try {
                var o = S(n.error);
                if (!o) throw e;
                e = o.call(n, e)
            } catch (e) {
                try {
                    O(t)
                } finally {
                    throw e
                }
            }
            return O(t), e
        },
        complete: function(e) {
            var t = this._s;
            if (!l(t)) {
                var n = t._o;
                t._o = void 0;
                try {
                    var o = S(n.complete);
                    e = o ? o.call(n, e) : void 0
                } catch (e) {
                    try {
                        O(t)
                    } finally {
                        throw e
                    }
                }
                return O(t), e
            }
        }
    });
    var D = function(e) {
        u(this, D, "Observable", "_f")._f = _(e)
    };
    c(D.prototype, {
        subscribe: function(e) {
            return new R(e, this._f)
        },
        forEach: function(e) {
            var t = this;
            return new(i.Promise || r.Promise)(function(n, o) {
                _(e);
                var r = t.subscribe({
                    next: function(t) {
                        try {
                            return e(t)
                        } catch (e) {
                            o(e), r.unsubscribe()
                        }
                    },
                    error: o,
                    complete: n
                })
            })
        }
    }), c(D, {
        from: function(e) {
            var t = "function" == typeof this ? this : D,
                n = S(s(e)[a]);
            if (n) {
                var o = s(n.call(e));
                return o.constructor === t ? o : new t(function(e) {
                    return o.subscribe(e)
                })
            }
            return new t(function(t) {
                var n = !1;
                return E(function() {
                        if (!n) {
                            try {
                                if (I(e, !1, function(e) {
                                        if (t.next(e), n) return N
                                    }) === N) return
                            } catch (e) {
                                if (n) throw e;
                                return void t.error(e)
                            }
                            t.complete()
                        }
                    }),
                    function() {
                        n = !0
                    }
            })
        },
        of: function() {
            for (var e = 0, t = arguments.length, n = Array(t); e < t;) n[e] = arguments[e++];
            return new("function" == typeof this ? this : D)(function(e) {
                var t = !1;
                return E(function() {
                        if (!t) {
                            for (var o = 0; o < n.length; ++o)
                                if (e.next(n[o]), t) return;
                            e.complete()
                        }
                    }),
                    function() {
                        t = !0
                    }
            })
        }
    }), T(D.prototype, a, function() {
        return this
    }), o(o.G, {
        Observable: D
    }), n(124)("Observable")
}, function(e, t, n) {
    var o = n(17),
        r = n(2),
        i = o.navigator,
        E = [].slice,
        a = !!i && /MSIE .\./.test(i.userAgent),
        _ = function(e) {
            return function(t, n) {
                var o = arguments.length > 2,
                    r = !!o && E.call(arguments, 2);
                return e(o ? function() {
                    ("function" == typeof t ? t : Function(t)).apply(this, r)
                } : t, n)
            }
        };
    r(r.G + r.B + r.F * a, {
        setTimeout: _(o.setTimeout),
        setInterval: _(o.setInterval)
    })
}, function(e, t, n) {
    var o = n(2),
        r = n(293);
    o(o.G + o.B, {
        setImmediate: r.set,
        clearImmediate: r.clear
    })
}, function(e, t, n) {
    for (var o = n(292), r = n(120), i = n(51), E = n(17), a = n(50), _ = n(140), s = n(26), u = s("iterator"), c = s("toStringTag"), T = _.Array, I = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, N = r(I), S = 0; S < N.length; S++) {
        var O, l = N[S],
            A = I[l],
            R = E[l],
            h = R && R.prototype;
        if (h && (h[u] || a(h, u, T), h[c] || a(h, c, l), _[l] = T, A))
            for (O in o) h[O] || i(h, O, o[O], !0)
    }
}, function(e, t, n) {
    (function(t, n) {
        ! function(t) {
            "use strict";

            function o(e, t, n, o) {
                var r = t && t.prototype instanceof i ? t : i,
                    E = Object.create(r.prototype),
                    a = new N(o || []);
                return E._invoke = c(e, n, a), E
            }

            function r(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }

            function i() {}

            function E() {}

            function a() {}

            function _(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function s(e) {
                this.arg = e
            }

            function u(e) {
                function t(n, o, i, E) {
                    var a = r(e[n], e, o);
                    if ("throw" !== a.type) {
                        var _ = a.arg,
                            u = _.value;
                        return u instanceof s ? Promise.resolve(u.arg).then(function(e) {
                            t("next", e, i, E)
                        }, function(e) {
                            t("throw", e, i, E)
                        }) : Promise.resolve(u).then(function(e) {
                            _.value = e, i(_)
                        }, E)
                    }
                    E(a.arg)
                }
                "object" == typeof n && n.domain && (t = n.domain.bind(t));
                var o;
                this._invoke = function(e, n) {
                    function r() {
                        return new Promise(function(o, r) {
                            t(e, n, o, r)
                        })
                    }
                    return o = o ? o.then(r, r) : r()
                }
            }

            function c(e, t, n) {
                var o = L;
                return function(i, E) {
                    if (o === M) throw new Error("Generator is already running");
                    if (o === m) {
                        if ("throw" === i) throw E;
                        return O()
                    }
                    for (;;) {
                        var a = n.delegate;
                        if (a) {
                            if ("return" === i || "throw" === i && a.iterator[i] === l) {
                                n.delegate = null;
                                var _ = a.iterator.return;
                                if (_ && "throw" === (s = r(_, a.iterator, E)).type) {
                                    i = "throw", E = s.arg;
                                    continue
                                }
                                if ("return" === i) continue
                            }
                            if ("throw" === (s = r(a.iterator[i], a.iterator, E)).type) {
                                n.delegate = null, i = "throw", E = s.arg;
                                continue
                            }
                            if (i = "next", E = l, !(u = s.arg).done) return o = C, u;
                            n[a.resultName] = u.value, n.next = a.nextLoc, n.delegate = null
                        }
                        if ("next" === i) n.sent = n._sent = E;
                        else if ("throw" === i) {
                            if (o === L) throw o = m, E;
                            n.dispatchException(E) && (i = "next", E = l)
                        } else "return" === i && n.abrupt("return", E);
                        o = M;
                        var s = r(e, t, n);
                        if ("normal" === s.type) {
                            o = n.done ? m : C;
                            var u = {
                                value: s.arg,
                                done: n.done
                            };
                            if (s.arg !== p) return u;
                            n.delegate && "next" === i && (E = l)
                        } else "throw" === s.type && (o = m, i = "throw", E = s.arg)
                    }
                }
            }

            function T(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function I(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function N(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(T, this), this.reset(!0)
            }

            function S(e) {
                if (e) {
                    var t = e[h];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                            o = function t() {
                                for (; ++n < e.length;)
                                    if (A.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = l, t.done = !0, t
                            };
                        return o.next = o
                    }
                }
                return {
                    next: O
                }
            }

            function O() {
                return {
                    value: l,
                    done: !0
                }
            }
            var l, A = Object.prototype.hasOwnProperty,
                R = "function" == typeof Symbol ? Symbol : {},
                h = R.iterator || "@@iterator",
                D = R.toStringTag || "@@toStringTag",
                d = "object" == typeof e,
                f = t.regeneratorRuntime;
            if (f) d && (e.exports = f);
            else {
                (f = t.regeneratorRuntime = d ? e.exports : {}).wrap = o;
                var L = "suspendedStart",
                    C = "suspendedYield",
                    M = "executing",
                    m = "completed",
                    p = {},
                    y = a.prototype = i.prototype;
                E.prototype = y.constructor = a, a.constructor = E, a[D] = E.displayName = "GeneratorFunction", f.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === E || "GeneratorFunction" === (t.displayName || t.name))
                }, f.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, D in e || (e[D] = "GeneratorFunction")), e.prototype = Object.create(y), e
                }, f.awrap = function(e) {
                    return new s(e)
                }, _(u.prototype), f.async = function(e, t, n, r) {
                    var i = new u(o(e, t, n, r));
                    return f.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next()
                    })
                }, _(y), y[h] = function() {
                    return this
                }, y[D] = "Generator", y.toString = function() {
                    return "[object Generator]"
                }, f.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return n.value = o, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, f.values = S, N.prototype = {
                    constructor: N,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = l, this.done = !1, this.delegate = null, this.tryEntries.forEach(I), !e)
                            for (var t in this) "t" === t.charAt(0) && A.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        function t(t, o) {
                            return i.type = "throw", i.arg = e, n.next = t, !!o
                        }
                        if (this.done) throw e;
                        for (var n = this, o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                i = r.completion;
                            if ("root" === r.tryLoc) return t("end");
                            if (r.tryLoc <= this.prev) {
                                var E = A.call(r, "catchLoc"),
                                    a = A.call(r, "finallyLoc");
                                if (E && a) {
                                    if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                                } else if (E) {
                                    if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                                } else {
                                    if (!a) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && A.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var i = r ? r.completion : {};
                        return i.type = e, i.arg = t, r ? this.next = r.finallyLoc : this.complete(i), p
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = e.arg, this.next = "end") : "normal" === e.type && t && (this.next = t)
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var r = o.arg;
                                    I(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: n
                        }, p
                    }
                }
            }
        }("object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(t, n(22), n(72))
}, function(e, t, n) {
    n(1087), e.exports = n(73).RegExp.escape
}, function(e, t, n) {
    var o = n(2),
        r = n(1088)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    o(o.S, "RegExp", {
        escape: function(e) {
            return r(e)
        }
    })
}, function(e, t) {
    e.exports = function(e, t) {
        var n = t === Object(t) ? function(e) {
            return t[e]
        } : t;
        return function(t) {
            return String(t).replace(e, n)
        }
    }
}], [886]);
//# sourceMappingURL=f7a312da25a392cd5228.js.map