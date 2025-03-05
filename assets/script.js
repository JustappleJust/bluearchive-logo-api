const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
var je = Object.defineProperty;
var Ee = (s, e, t) => e in s ? je(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t;
var w = (s, e, t) => (Ee(s, typeof e != "symbol" ? e + "" : e, t), t);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        n(i);
    new MutationObserver(i => {
        for (const r of i)
            if (r.type === "childList")
                for (const a of r.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }
    function n(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const r = t(i);
        fetch(i.href, r)
    }
})();
function ae(s) {
    var e = typeof s;
    return s != null && (e == "object" || e == "function")
}
var Fe = typeof global == "object" && global && global.Object === Object && global;
const Ae = Fe;
var Be = typeof self == "object" && self && self.Object === Object && self,
    De = Ae || Be || Function("return this")();
const Re = De;
var Me = function() {
    return Re.Date.now()
};
const se = Me;
var Ue = /\s/;
function Ke(s) {
    for (var e = s.length; e-- && Ue.test(s.charAt(e));)
        ;
    return e
}
var Ve = /^\s+/;
function We(s) {
    return s && s.slice(0, Ke(s) + 1).replace(Ve, "")
}
var He = Re.Symbol;
const X = He;
var $e = Object.prototype,
    ze = $e.hasOwnProperty,
    Je = $e.toString,
    B = X ? X.toStringTag : void 0;
function Ge(s) {
    var e = ze.call(s, B),
        t = s[B];
    try {
        s[B] = void 0;
        var n = !0
    } catch {}
    var i = Je.call(s);
    return n && (e ? s[B] = t : delete s[B]), i
}
var Ye = Object.prototype,
    qe = Ye.toString;
function Xe(s) {
    return qe.call(s)
}
var Qe = "[object Null]",
    Ze = "[object Undefined]",
    fe = X ? X.toStringTag : void 0;
function _e(s) {
    return s == null ? s === void 0 ? Ze : Qe : fe && fe in Object(s) ? Ge(s) : Xe(s)
}
function et(s) {
    return s != null && typeof s == "object"
}
var tt = "[object Symbol]";
function nt(s) {
    return typeof s == "symbol" || et(s) && _e(s) == tt
}
var he = 0 / 0,
    st = /^[-+]0x[0-9a-f]+$/i,
    it = /^0b[01]+$/i,
    rt = /^0o[0-7]+$/i,
    at = parseInt;
function ge(s) {
    if (typeof s == "number")
        return s;
    if (nt(s))
        return he;
    if (ae(s)) {
        var e = typeof s.valueOf == "function" ? s.valueOf() : s;
        s = ae(e) ? e + "" : e
    }
    if (typeof s != "string")
        return s === 0 ? s : +s;
    s = We(s);
    var t = it.test(s);
    return t || rt.test(s) ? at(s.slice(2), t ? 2 : 8) : st.test(s) ? he : +s
}
var ot = "Expected a function",
    lt = Math.max,
    ut = Math.min;
function ct(s, e, t) {
    var n,
        i,
        r,
        a,
        o,
        l,
        c = 0,
        f = !1,
        h = !1,
        u = !0;
    if (typeof s != "function")
        throw new TypeError(ot);
    e = ge(e) || 0,
    ae(t) && (f = !!t.leading, h = "maxWait" in t, r = h ? lt(ge(t.maxWait) || 0, e) : r, u = "trailing" in t ? !!t.trailing : u);
    function g(p) {
        var y = n,
            $ = i;
        return n = i = void 0, c = p, a = s.apply($, y), a
    }
    function d(p) {
        return c = p, o = setTimeout(v, e), f ? g(p) : a
    }
    function m(p) {
        var y = p - l,
            $ = p - c,
            V = e - y;
        return h ? ut(V, r - $) : V
    }
    function b(p) {
        var y = p - l,
            $ = p - c;
        return l === void 0 || y >= e || y < 0 || h && $ >= r
    }
    function v() {
        var p = se();
        if (b(p))
            return S(p);
        o = setTimeout(v, m(p))
    }
    function S(p) {
        return o = void 0, u && n ? g(p) : (n = i = void 0, a)
    }
    function P() {
        o !== void 0 && clearTimeout(o),
        c = 0,
        n = l = i = o = void 0
    }
    function x() {
        return o === void 0 ? a : S(se())
    }
    function L() {
        var p = se(),
            y = b(p);
        if (n = arguments, i = this, l = p, y) {
            if (o === void 0)
                return d(l);
            if (h)
                return clearTimeout(o), o = setTimeout(v, e), g(l)
        }
        return o === void 0 && (o = setTimeout(v, e)), a
    }
    return L.cancel = P, L.flush = x, L
}
const Y = {
        canvasHeight: 250,
        canvasWidth: 900,
        fontFamily: (params.get('fontFamily') ? params.get('fontFamily') + ', ' : '') + "RoGSanSrfStd-Bd, GlowSansSC-Normal-Heavy_diff, Gyeonggi_Bold, GyeonggiTitle",
        fontSize: params.get('fontSize') ?? 84,
        subfontSize: params.get('subfontSize') ?? 32,
        fontWeight: params.get('fontWeight') ?? 700,
        subfontWeight: params.get('subfontWeight') ?? 700,
        textBaseLine: .68,
        horizontalTilt: -.4,
        paddingX: 10,
        graphOffset: {
            X: -15,
            Y: 0
        },
        hollowPath: [[284, 136], [321, 153], [159, 410], [148, 403]]
    },
    ft = async (s="A") => {
        await document.fonts.load(`${Y.fontWeight} ${Y.fontSize}px ${Y.fontFamily}`, s)
    },
    de = (s, e) => new Promise((t, n) => {
        const i = document.createElement("canvas"),
            r = i.getContext("2d");
        if (!r) {
            n(new Error("Canvas context is null"));
            return
        }
        i.width = s.width,
        i.height = s.height,
        r.drawImage(s, 0, 0);
        const a = r.getImageData(0, 0, i.width, i.height),
            o = a.data,
            l = ht(e),
            {r: c, g: f, b: h} = l;
        for (let g = 0; g < o.length; g += 4)
            o[g] = c,
            o[g + 1] = f,
            o[g + 2] = h;
        r.putImageData(a, 0, 0);
        const u = new Image;
        u.onload = () => {
            t(u)
        },
        u.onerror = g => {
            n(g)
        },
        u.src = i.toDataURL()
    });
function ht(s) {
    const e = parseInt(s.substring(1), 16),
        t = e >> 16 & 255,
        n = e >> 8 & 255,
        i = e & 255;
    return {
        r: t,
        g: n,
        b: i
    }
}
const {canvasHeight: R, canvasWidth: D, fontFamily: Ne, fontSize: gt, subfontSize: dt, fontWeight: Pe, subfontWeight: sfw, horizontalTilt: H, textBaseLine: I, graphOffset: ie, paddingX: z, hollowPath: J} = Y,
    pe = `${Pe} ${gt}px ${Ne}, apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif`,
    pt = `${sfw} ${dt}px ${Ne}, apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif`;
class mt {
    constructor()
    {
        w(this, "canvas");
        w(this, "ctx");
        w(this, "textL", params.get('textL') ?? "Blue");
        w(this, "textR", params.get('textR') ?? "Archive");
        w(this, "textSub", params.get('textSub') ?? "블루 아카이브");
        w(this, "pointColor", params.get('pointColor') ?? "#128AFA");
        w(this, "textColor", params.get('textColor') ?? "#2B2B2B");
        w(this, "textMetricsL", null);
        w(this, "textMetricsR", null);
        w(this, "canvasWidthL", D / 2);
        w(this, "canvasWidthR", D / 2);
        w(this, "textWidthL", 0);
        w(this, "textWidthR", 0);
        w(this, "graphOffset", ie);
        w(this, "transparentBg", (params.get('transparentBg') === 'true') ? true : !1);
        this.canvas = document.querySelector("#canvas"),
        this.ctx = this.canvas.getContext("2d"),
        this.canvas.height = R,
        this.canvas.width = D,
        this.bindEvent()
    }
    async draw()
    {
//      const e = document.querySelector("#loading");
//      e.classList.remove("hidden");
        const t = this.ctx;
        await ft(this.textL + this.textR),
//      e.classList.add("hidden"),
        t.font = pe,
        this.textMetricsL = t.measureText(this.textL),
        this.textMetricsR = t.measureText(this.textR);
        let n = await de(window.halo, this.textColor),
            i = await de(window.cross, this.pointColor);
        this.setWidth(),
        t.clearRect(0, 0, this.canvas.width, this.canvas.height),
        this.transparentBg || (t.fillStyle = "#fff", t.fillRect(0, 0, this.canvas.width, this.canvas.height)),
        t.font = pe,
        t.fillStyle = this.pointColor,
        t.textAlign = "end",
        t.setTransform(1, 0, H, 1, 0, 0),
        t.fillText(this.textL, this.canvasWidthL, this.canvas.height * I),
        t.resetTransform(),
        t.drawImage(n, this.canvasWidthL - this.canvas.height / 2 + this.graphOffset.X, this.graphOffset.Y, R, R),
        t.fillStyle = this.textColor,
        t.textAlign = "start",
        this.transparentBg && (t.globalCompositeOperation = "destination-out"),
        t.strokeStyle = "white",
        t.lineWidth = 12,
        t.setTransform(1, 0, H, 1, 0, 0),
        t.strokeText(this.textR, this.canvasWidthL, this.canvas.height * I),
        t.globalCompositeOperation = "source-over",
        t.fillText(this.textR, this.canvasWidthL, this.canvas.height * I),
        t.font = pt,
        t.fillText(this.textSub, this.canvasWidthL + this.textWidthR - t.measureText(this.textSub).width + 35, this.canvas.height * I + 40),
        t.resetTransform();
        const r = {
            X: this.canvasWidthL - this.canvas.height / 2 + ie.X,
            Y: this.graphOffset.Y
        };
        t.beginPath(),
        t.moveTo(r.X + J[0][0] / 500 * R, r.Y + J[0][1] / 500 * R);
        for (let a = 1; a < 4; a++)
            t.lineTo(r.X + J[a][0] / 500 * R, r.Y + J[a][1] / 500 * R);
        t.closePath(),
        this.transparentBg && (t.globalCompositeOperation = "destination-out"),
        t.fillStyle = "white",
        t.fill(),
        t.globalCompositeOperation = "source-over",
        t.drawImage(i, this.canvasWidthL - this.canvas.height / 2 + ie.X, this.graphOffset.Y, R, R)
        this.generateImg()
    }
    bindEvent()
    {
        const e = (o, l) => {
            this[o] = l.value.replace(" ", " "),
            this.draw()
        };
//      for (const o of ["textL", "textR", "textSub"]) {
//          const l = o,
//              c = document.getElementById(l);
//          c.addEventListener("compositionstart", () => c.setAttribute("composing", "")),
//          c.addEventListener("compositionend", () => {
//              e(l, c),
//              c.removeAttribute("composing")
//          }),
//          c.addEventListener("input", ct(() => {
//              c.hasAttribute("composing") || e(l, c)
//          }, 300))
//      }
//      document.querySelector("#reset").addEventListener("click", () => this.resetColor()),
//      document.querySelector("#save").addEventListener("click", () => this.saveImg()),
//      document.querySelector("#copy").addEventListener("click", () => this.copyImg());
//      const t = document.querySelector("#transparent");
//      t.addEventListener("change", () => {
//          this.transparentBg = t.checked,
//          this.draw()
//      });
//      const n = document.querySelector("#pointColor");
//      n.addEventListener("input", () => {
//          this.pointColor = n.value,
//          this.draw()
//      });
//      const i = document.querySelector("#textColor");
//      i.addEventListener("input", () => {
//          this.textColor = i.value,
//          this.draw()
//      });
//      const r = document.querySelector("#graphX"),
//          a = document.querySelector("#graphY");
//      r.addEventListener("input", () => {
//          this.graphOffset.X = parseInt(r.value),
//          this.draw()
//      }),
//      a.addEventListener("input", () => {
//          this.graphOffset.Y = parseInt(a.value),
//          this.draw()
//      })
    }
    setWidth()
    {
        this.textWidthL = this.textMetricsL.width - (I * R + this.textMetricsL.fontBoundingBoxDescent) * H,
        this.textWidthR = this.textMetricsR.width + (I * R - this.textMetricsR.fontBoundingBoxAscent) * H,
        this.canvasWidthL = Math.max(this.textWidthL + z, D / 2),
        this.canvasWidthR = Math.max(this.textWidthR + z, D / 2),
        this.canvas.width = this.canvasWidthL + this.canvasWidthR
    }
    resetColor()
    {
        const e = t => document.getElementById(t);
        e("pointColor").value = "#128AFA",
        e("textColor").value = "#2B2B2B",
        this.pointColor = "#128AFA",
        this.textColor = "#2B2B2B",
        this.draw()
    }
    generateImg()
    {
        let e;
        e = document.createElement("canvas");
        e.width = this.textWidthL + this.textWidthR + z * 2;
        e.height = this.canvas.height;
        e.getContext("2d").drawImage(this.canvas, this.canvasWidthL - this.textWidthL - z, 0, e.width, e.height, 0, 0, e.width, e.height);
        
        const dataURL = e.toDataURL("image/png");
        document.write(dataURL);
    }
    saveImg()
    {
        this.generateImg().then(e => {
            const t = URL.createObjectURL(e),
                n = document.createElement("a");
            n.href = t,
            n.download = `${this.textL}${this.textR}${this.textSub ? "-" : ""}${this.textSub}_symbolon.png`,
            n.click(),
            URL.revokeObjectURL(t)
        })
    }
    async copyImg()
    {
        const e = await this.generateImg(),
            t = [new ClipboardItem({
                "image/png": e
            })];
        navigator.clipboard.write(t).then(() => {
            console.log("image copied");
            const n = document.querySelector("#message-switch");
            n.checked = !0,
            setTimeout(() => n.checked = !1, 2e3)
        }).catch(n => console.error("can't copy", n))
    }
}
const bt = "assets/halo.png",
    yt = "assets/cross.png",
    me = s => new Promise((e, t) => {
        const n = new Image;
        n.src = s,
        n.onload = () => e(n),
        n.onerror = t
    }),
    xt = async () => {
        await Promise.all([me(bt).then(s => window.halo = s), me(yt).then(s => window.cross = s)])
    },
    vt = {
        type: "logger",
        log(s) {
            this.output("log", s)
        },
        warn(s) {
            this.output("warn", s)
        },
        error(s) {
            this.output("error", s)
        },
        output(s, e) {
            console && console[s] && console[s].apply(console, e)
        }
    };
class Q {
    constructor(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(e, t)
    }
    init(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = t.prefix || "i18next:",
        this.logger = e || vt,
        this.options = t,
        this.debug = t.debug
    }
    log()
    {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return this.forward(t, "log", "", !0)
    }
    warn()
    {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return this.forward(t, "warn", "", !0)
    }
    error()
    {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return this.forward(t, "error", "")
    }
    deprecate()
    {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(e, t, n, i)
    {
        return i && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e))
    }
    create(e)
    {
        return new Q(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options
        })
    }
    clone(e)
    {
        return e = e || this.options, e.prefix = e.prefix || this.prefix, new Q(this.logger, e)
    }
}
var N = new Q;
class ne {
    constructor()
    {
        this.observers = {}
    }
    on(e, t)
    {
        return e.split(" ").forEach(n => {
            this.observers[n] = this.observers[n] || [],
            this.observers[n].push(t)
        }), this
    }
    off(e, t)
    {
        if (this.observers[e]) {
            if (!t) {
                delete this.observers[e];
                return
            }
            this.observers[e] = this.observers[e].filter(n => n !== t)
        }
    }
    emit(e)
    {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            n[i - 1] = arguments[i];
        this.observers[e] && [].concat(this.observers[e]).forEach(a => {
            a(...n)
        }),
        this.observers["*"] && [].concat(this.observers["*"]).forEach(a => {
            a.apply(a, [e, ...n])
        })
    }
}
function M() {
    let s,
        e;
    const t = new Promise((n, i) => {
        s = n,
        e = i
    });
    return t.resolve = s, t.reject = e, t
}
function be(s) {
    return s == null ? "" : "" + s
}
function St(s, e, t) {
    s.forEach(n => {
        e[n] && (t[n] = e[n])
    })
}
function oe(s, e, t) {
    function n(a) {
        return a && a.indexOf("###") > -1 ? a.replace(/###/g, ".") : a
    }
    function i() {
        return !s || typeof s == "string"
    }
    const r = typeof e != "string" ? [].concat(e) : e.split(".");
    for (; r.length > 1;) {
        if (i())
            return {};
        const a = n(r.shift());
        !s[a] && t && (s[a] = new t),
        Object.prototype.hasOwnProperty.call(s, a) ? s = s[a] : s = {}
    }
    return i() ? {} : {
        obj: s,
        k: n(r.shift())
    }
}
function ye(s, e, t) {
    const {obj: n, k: i} = oe(s, e, Object);
    n[i] = t
}
function Lt(s, e, t, n) {
    const {obj: i, k: r} = oe(s, e, Object);
    i[r] = i[r] || [],
    n && (i[r] = i[r].concat(t)),
    n || i[r].push(t)
}
function Z(s, e) {
    const {obj: t, k: n} = oe(s, e);
    if (t)
        return t[n]
}
function wt(s, e, t) {
    const n = Z(s, t);
    return n !== void 0 ? n : Z(e, t)
}
function ke(s, e, t) {
    for (const n in e)
        n !== "__proto__" && n !== "constructor" && (n in s ? typeof s[n] == "string" || s[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (s[n] = e[n]) : ke(s[n], e[n], t) : s[n] = e[n]);
    return s
}
function T(s) {
    return s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var Ot = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
function Ct(s) {
    return typeof s == "string" ? s.replace(/[&<>"'\/]/g, e => Ot[e]) : s
}
const Rt = [" ", ",", "?", "!", ";"];
function $t(s, e, t) {
    e = e || "",
    t = t || "";
    const n = Rt.filter(a => e.indexOf(a) < 0 && t.indexOf(a) < 0);
    if (n.length === 0)
        return !0;
    const i = new RegExp(`(${n.map(a => a === "?" ? "\\?" : a).join("|")})`);
    let r = !i.test(s);
    if (!r) {
        const a = s.indexOf(t);
        a > 0 && !i.test(s.substring(0, a)) && (r = !0)
    }
    return r
}
function _(s, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!s)
        return;
    if (s[e])
        return s[e];
    const n = e.split(t);
    let i = s;
    for (let r = 0; r < n.length; ++r) {
        if (!i || typeof i[n[r]] == "string" && r + 1 < n.length)
            return;
        if (i[n[r]] === void 0) {
            let a = 2,
                o = n.slice(r, r + a).join(t),
                l = i[o];
            for (; l === void 0 && n.length > r + a;)
                a++,
                o = n.slice(r, r + a).join(t),
                l = i[o];
            if (l === void 0)
                return;
            if (l === null)
                return null;
            if (e.endsWith(o)) {
                if (typeof l == "string")
                    return l;
                if (o && typeof l[o] == "string")
                    return l[o]
            }
            const c = n.slice(r + a).join(t);
            return c ? _(l, c, t) : void 0
        }
        i = i[n[r]]
    }
    return i
}
function ee(s) {
    return s && s.indexOf("_") > 0 ? s.replace("_", "-") : s
}
class xe extends ne {
    constructor(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(),
        this.data = e || {},
        this.options = t,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(e)
    {
        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
    }
    removeNamespaces(e)
    {
        const t = this.options.ns.indexOf(e);
        t > -1 && this.options.ns.splice(t, 1)
    }
    getResource(e, t, n)
    {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const r = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
            a = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let o = [e, t];
        n && typeof n != "string" && (o = o.concat(n)),
        n && typeof n == "string" && (o = o.concat(r ? n.split(r) : n)),
        e.indexOf(".") > -1 && (o = e.split("."));
        const l = Z(this.data, o);
        return l || !a || typeof n != "string" ? l : _(this.data && this.data[e] && this.data[e][t], n, r)
    }
    addResource(e, t, n, i)
    {
        let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        };
        const a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
        let o = [e, t];
        n && (o = o.concat(a ? n.split(a) : n)),
        e.indexOf(".") > -1 && (o = e.split("."), i = t, t = o[1]),
        this.addNamespaces(t),
        ye(this.data, o, i),
        r.silent || this.emit("added", e, t, n, i)
    }
    addResources(e, t, n)
    {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (const r in n)
            (typeof n[r] == "string" || Object.prototype.toString.apply(n[r]) === "[object Array]") && this.addResource(e, t, r, n[r], {
                silent: !0
            });
        i.silent || this.emit("added", e, t, n)
    }
    addResourceBundle(e, t, n, i, r)
    {
        let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
                silent: !1
            },
            o = [e, t];
        e.indexOf(".") > -1 && (o = e.split("."), i = n, n = t, t = o[1]),
        this.addNamespaces(t);
        let l = Z(this.data, o) || {};
        i ? ke(l, n, r) : l = {
            ...l,
            ...n
        },
        ye(this.data, o, l),
        a.silent || this.emit("added", e, t, n)
    }
    removeResourceBundle(e, t)
    {
        this.hasResourceBundle(e, t) && delete this.data[e][t],
        this.removeNamespaces(t),
        this.emit("removed", e, t)
    }
    hasResourceBundle(e, t)
    {
        return this.getResource(e, t) !== void 0
    }
    getResourceBundle(e, t)
    {
        return t || (t = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
            ...this.getResource(e, t)
        } : this.getResource(e, t)
    }
    getDataByLanguage(e)
    {
        return this.data[e]
    }
    hasLanguageSomeTranslations(e)
    {
        const t = this.getDataByLanguage(e);
        return !!(t && Object.keys(t) || []).find(i => t[i] && Object.keys(t[i]).length > 0)
    }
    toJSON()
    {
        return this.data
    }
}
var Ie = {
    processors: {},
    addPostProcessor(s) {
        this.processors[s.name] = s
    },
    handle(s, e, t, n, i) {
        return s.forEach(r => {
            this.processors[r] && (e = this.processors[r].process(e, t, n, i))
        }), e
    }
};
const ve = {};
class te extends ne {
    constructor(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(),
        St(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this),
        this.options = t,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = N.create("translator")
    }
    changeLanguage(e)
    {
        e && (this.language = e)
    }
    exists(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        if (e == null)
            return !1;
        const n = this.resolve(e, t);
        return n && n.res !== void 0
    }
    extractFromKey(e, t)
    {
        let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
        n === void 0 && (n = ":");
        const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
        let r = t.ns || this.options.defaultNS || [];
        const a = n && e.indexOf(n) > -1,
            o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !$t(e, n, i);
        if (a && !o) {
            const l = e.match(this.interpolator.nestingRegexp);
            if (l && l.length > 0)
                return {
                    key: e,
                    namespaces: r
                };
            const c = e.split(n);
            (n !== i || n === i && this.options.ns.indexOf(c[0]) > -1) && (r = c.shift()),
            e = c.join(i)
        }
        return typeof r == "string" && (r = [r]), {
            key: e,
            namespaces: r
        }
    }
    translate(e, t, n)
    {
        if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
            ...t
        }), t || (t = {}), e == null)
            return "";
        Array.isArray(e) || (e = [String(e)]);
        const i = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails,
            r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
            {key: a, namespaces: o} = this.extractFromKey(e[e.length - 1], t),
            l = o[o.length - 1],
            c = t.lng || this.language,
            f = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (c && c.toLowerCase() === "cimode") {
            if (f) {
                const x = t.nsSeparator || this.options.nsSeparator;
                return i ? {
                    res: `${l}${x}${a}`,
                    usedKey: a,
                    exactUsedKey: a,
                    usedLng: c,
                    usedNS: l
                } : `${l}${x}${a}`
            }
            return i ? {
                res: a,
                usedKey: a,
                exactUsedKey: a,
                usedLng: c,
                usedNS: l
            } : a
        }
        const h = this.resolve(e, t);
        let u = h && h.res;
        const g = h && h.usedKey || a,
            d = h && h.exactUsedKey || a,
            m = Object.prototype.toString.apply(u),
            b = ["[object Number]", "[object Function]", "[object RegExp]"],
            v = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
            S = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (S && u && (typeof u != "string" && typeof u != "boolean" && typeof u != "number") && b.indexOf(m) < 0 && !(typeof v == "string" && m === "[object Array]")) {
            if (!t.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const x = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, u, {
                    ...t,
                    ns: o
                }) : `key '${a} (${this.language})' returned an object instead of string.`;
                return i ? (h.res = x, h) : x
            }
            if (r) {
                const x = m === "[object Array]",
                    L = x ? [] : {},
                    p = x ? d : g;
                for (const y in u)
                    if (Object.prototype.hasOwnProperty.call(u, y)) {
                        const $ = `${p}${r}${y}`;
                        L[y] = this.translate($, {
                            ...t,
                            joinArrays: !1,
                            ns: o
                        }),
                        L[y] === $ && (L[y] = u[y])
                    }
                u = L
            }
        } else if (S && typeof v == "string" && m === "[object Array]")
            u = u.join(v),
            u && (u = this.extendTranslation(u, e, t, n));
        else {
            let x = !1,
                L = !1;
            const p = t.count !== void 0 && typeof t.count != "string",
                y = te.hasDefaultValue(t),
                $ = p ? this.pluralResolver.getSuffix(c, t.count, t) : "",
                V = t.ordinal && p ? this.pluralResolver.getSuffix(c, t.count, {
                    ordinal: !1
                }) : "",
                E = t[`defaultValue${$}`] || t[`defaultValue${V}`] || t.defaultValue;
            !this.isValidLookup(u) && y && (x = !0, u = E),
            this.isValidLookup(u) || (L = !0, u = a);
            const Te = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && L ? void 0 : u,
                F = y && E !== u && this.options.updateMissing;
            if (L || x || F) {
                if (this.logger.log(F ? "updateKey" : "missingKey", c, l, a, F ? E : u), r) {
                    const C = this.resolve(a, {
                        ...t,
                        keySeparator: !1
                    });
                    C && C.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let A = [];
                const W = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && W && W[0])
                    for (let C = 0; C < W.length; C++)
                        A.push(W[C]);
                else
                    this.options.saveMissingTo === "all" ? A = this.languageUtils.toResolveHierarchy(t.lng || this.language) : A.push(t.lng || this.language);
                const le = (C, k, ue) => {
                    const ce = y && ue !== u ? ue : Te;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(C, l, k, ce, F, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(C, l, k, ce, F, t),
                    this.emit("missingKey", C, l, k, u)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && p ? A.forEach(C => {
                    this.pluralResolver.getSuffixes(C, t).forEach(k => {
                        le([C], a + k, t[`defaultValue${k}`] || E)
                    })
                }) : le(A, a, E))
            }
            u = this.extendTranslation(u, e, t, h, n),
            L && u === a && this.options.appendNamespaceToMissingKey && (u = `${l}:${a}`),
            (L || x) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? u = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a, x ? u : void 0) : u = this.options.parseMissingKeyHandler(u))
        }
        return i ? (h.res = u, h) : u
    }
    extendTranslation(e, t, n, i, r)
    {
        var a = this;
        if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(e, {
                ...this.options.interpolation.defaultVariables,
                ...n
            }, n.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
                resolved: i
            });
        else if (!n.skipInterpolation) {
            n.interpolation && this.interpolator.init({
                ...n,
                interpolation: {
                    ...this.options.interpolation,
                    ...n.interpolation
                }
            });
            const c = typeof e == "string" && (n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let f;
            if (c) {
                const u = e.match(this.interpolator.nestingRegexp);
                f = u && u.length
            }
            let h = n.replace && typeof n.replace != "string" ? n.replace : n;
            if (this.options.interpolation.defaultVariables && (h = {
                ...this.options.interpolation.defaultVariables,
                ...h
            }), e = this.interpolator.interpolate(e, h, n.lng || this.language, n), c) {
                const u = e.match(this.interpolator.nestingRegexp),
                    g = u && u.length;
                f < g && (n.nest = !1)
            }
            !n.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (n.lng = i.usedLng),
            n.nest !== !1 && (e = this.interpolator.nest(e, function() {
                for (var u = arguments.length, g = new Array(u), d = 0; d < u; d++)
                    g[d] = arguments[d];
                return r && r[0] === g[0] && !n.context ? (a.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`), null) : a.translate(...g, t)
            }, n)),
            n.interpolation && this.interpolator.reset()
        }
        const o = n.postProcess || this.options.postProcess,
            l = typeof o == "string" ? [o] : o;
        return e != null && l && l.length && n.applyPostProcessor !== !1 && (e = Ie.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: i,
            ...n
        } : n, this)), e
    }
    resolve(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n,
            i,
            r,
            a,
            o;
        return typeof e == "string" && (e = [e]), e.forEach(l => {
            if (this.isValidLookup(n))
                return;
            const c = this.extractFromKey(l, t),
                f = c.key;
            i = f;
            let h = c.namespaces;
            this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
            const u = t.count !== void 0 && typeof t.count != "string",
                g = u && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(),
                d = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "",
                m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
            h.forEach(b => {
                this.isValidLookup(n) || (o = b, !ve[`${m[0]}-${b}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (ve[`${m[0]}-${b}`] = !0, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach(v => {
                    if (this.isValidLookup(n))
                        return;
                    a = v;
                    const S = [f];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                        this.i18nFormat.addLookupKeys(S, f, v, b, t);
                    else {
                        let x;
                        u && (x = this.pluralResolver.getSuffix(v, t.count, t));
                        const L = `${this.options.pluralSeparator}zero`,
                            p = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (u && (S.push(f + x), t.ordinal && x.indexOf(p) === 0 && S.push(f + x.replace(p, this.options.pluralSeparator)), g && S.push(f + L)), d) {
                            const y = `${f}${this.options.contextSeparator}${t.context}`;
                            S.push(y),
                            u && (S.push(y + x), t.ordinal && x.indexOf(p) === 0 && S.push(y + x.replace(p, this.options.pluralSeparator)), g && S.push(y + L))
                        }
                    }
                    let P;
                    for (; P = S.pop();)
                        this.isValidLookup(n) || (r = P, n = this.getResource(v, b, P, t))
                }))
            })
        }), {
            res: n,
            usedKey: i,
            exactUsedKey: r,
            usedLng: a,
            usedNS: o
        }
    }
    isValidLookup(e)
    {
        return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "")
    }
    getResource(e, t, n)
    {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i)
    }
    static hasDefaultValue(e)
    {
        const t = "defaultValue";
        for (const n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== void 0)
                return !0;
        return !1
    }
}
function re(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}
class Se {
    constructor(e)
    {
        this.options = e,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = N.create("languageUtils")
    }
    getScriptPartFromCode(e)
    {
        if (e = ee(e), !e || e.indexOf("-") < 0)
            return null;
        const t = e.split("-");
        return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"))
    }
    getLanguagePartFromCode(e)
    {
        if (e = ee(e), !e || e.indexOf("-") < 0)
            return e;
        const t = e.split("-");
        return this.formatLanguageCode(t[0])
    }
    formatLanguageCode(e)
    {
        if (typeof e == "string" && e.indexOf("-") > -1) {
            const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let n = e.split("-");
            return this.options.lowerCaseLng ? n = n.map(i => i.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = re(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = re(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = re(n[2].toLowerCase()))), n.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
    }
    isSupportedCode(e)
    {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
    }
    getBestMatchFromCodes(e)
    {
        if (!e)
            return null;
        let t;
        return e.forEach(n => {
            if (t)
                return;
            const i = this.formatLanguageCode(n);
            (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i)
        }), !t && this.options.supportedLngs && e.forEach(n => {
            if (t)
                return;
            const i = this.getLanguagePartFromCode(n);
            if (this.isSupportedCode(i))
                return t = i;
            t = this.options.supportedLngs.find(r => {
                if (r === i)
                    return r;
                if (!(r.indexOf("-") < 0 && i.indexOf("-") < 0) && r.indexOf(i) === 0)
                    return r
            })
        }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t
    }
    getFallbackCodes(e, t)
    {
        if (!e)
            return [];
        if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Object.prototype.toString.apply(e) === "[object Array]")
            return e;
        if (!t)
            return e.default || [];
        let n = e[t];
        return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
    }
    toResolveHierarchy(e, t)
    {
        const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            i = [],
            r = a => {
                a && (this.isSupportedCode(a) ? i.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))
            };
        return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : typeof e == "string" && r(this.formatLanguageCode(e)), n.forEach(a => {
            i.indexOf(a) < 0 && r(this.formatLanguageCode(a))
        }), i
    }
}
let Nt = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    }, {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
    }, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    }, {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
    }, {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
    }, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    }, {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
    }, {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
    }, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    }, {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
    }, {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
    }, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    }, {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
    }, {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
    }, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    }, {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
    }, {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
    }, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    }, {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
    }, {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
    }, {
        lngs: ["he", "iw"],
        nr: [1, 2, 20, 21],
        fc: 22
    }],
    Pt = {
        1: function(s) {
            return +(s > 1)
        },
        2: function(s) {
            return +(s != 1)
        },
        3: function(s) {
            return 0
        },
        4: function(s) {
            return s % 10 == 1 && s % 100 != 11 ? 0 : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? 1 : 2
        },
        5: function(s) {
            return s == 0 ? 0 : s == 1 ? 1 : s == 2 ? 2 : s % 100 >= 3 && s % 100 <= 10 ? 3 : s % 100 >= 11 ? 4 : 5
        },
        6: function(s) {
            return s == 1 ? 0 : s >= 2 && s <= 4 ? 1 : 2
        },
        7: function(s) {
            return s == 1 ? 0 : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? 1 : 2
        },
        8: function(s) {
            return s == 1 ? 0 : s == 2 ? 1 : s != 8 && s != 11 ? 2 : 3
        },
        9: function(s) {
            return +(s >= 2)
        },
        10: function(s) {
            return s == 1 ? 0 : s == 2 ? 1 : s < 7 ? 2 : s < 11 ? 3 : 4
        },
        11: function(s) {
            return s == 1 || s == 11 ? 0 : s == 2 || s == 12 ? 1 : s > 2 && s < 20 ? 2 : 3
        },
        12: function(s) {
            return +(s % 10 != 1 || s % 100 == 11)
        },
        13: function(s) {
            return +(s !== 0)
        },
        14: function(s) {
            return s == 1 ? 0 : s == 2 ? 1 : s == 3 ? 2 : 3
        },
        15: function(s) {
            return s % 10 == 1 && s % 100 != 11 ? 0 : s % 10 >= 2 && (s % 100 < 10 || s % 100 >= 20) ? 1 : 2
        },
        16: function(s) {
            return s % 10 == 1 && s % 100 != 11 ? 0 : s !== 0 ? 1 : 2
        },
        17: function(s) {
            return s == 1 || s % 10 == 1 && s % 100 != 11 ? 0 : 1
        },
        18: function(s) {
            return s == 0 ? 0 : s == 1 ? 1 : 2
        },
        19: function(s) {
            return s == 1 ? 0 : s == 0 || s % 100 > 1 && s % 100 < 11 ? 1 : s % 100 > 10 && s % 100 < 20 ? 2 : 3
        },
        20: function(s) {
            return s == 1 ? 0 : s == 0 || s % 100 > 0 && s % 100 < 20 ? 1 : 2
        },
        21: function(s) {
            return s % 100 == 1 ? 1 : s % 100 == 2 ? 2 : s % 100 == 3 || s % 100 == 4 ? 3 : 0
        },
        22: function(s) {
            return s == 1 ? 0 : s == 2 ? 1 : (s < 0 || s > 10) && s % 10 == 0 ? 2 : 3
        }
    };
const kt = ["v1", "v2", "v3"],
    It = ["v4"],
    Le = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    };
function Tt() {
    const s = {};
    return Nt.forEach(e => {
        e.lngs.forEach(t => {
            s[t] = {
                numbers: e.nr,
                plurals: Pt[e.fc]
            }
        })
    }), s
}
class jt {
    constructor(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = e,
        this.options = t,
        this.logger = N.create("pluralResolver"),
        (!this.options.compatibilityJSON || It.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
        this.rules = Tt()
    }
    addRule(e, t)
    {
        this.rules[e] = t
    }
    getRule(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.shouldUseIntlApi())
            try {
                return new Intl.PluralRules(ee(e), {
                    type: t.ordinal ? "ordinal" : "cardinal"
                })
            } catch {
                return
            }
        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    }
    needsPlural(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const n = this.getRule(e, t);
        return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
    }
    getPluralFormsOfKey(e, t)
    {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(e, n).map(i => `${t}${i}`)
    }
    getSuffixes(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const n = this.getRule(e, t);
        return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((i, r) => Le[i] - Le[r]).map(i => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : n.numbers.map(i => this.getSuffix(e, i, t)) : []
    }
    getSuffix(e, t)
    {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const i = this.getRule(e, n);
        return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : this.getSuffixRetroCompatible(i, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
    }
    getSuffixRetroCompatible(e, t)
    {
        const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
        let i = e.numbers[n];
        this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
        const r = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
        return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : r() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? r() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
    }
    shouldUseIntlApi()
    {
        return !kt.includes(this.options.compatibilityJSON)
    }
}
function we(s, e, t) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
        i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
        r = wt(s, e, t);
    return !r && i && typeof t == "string" && (r = _(s, t, n), r === void 0 && (r = _(e, t, n))), r
}
class Et {
    constructor()
    {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = N.create("interpolator"),
        this.options = e,
        this.format = e.interpolation && e.interpolation.format || (t => t),
        this.init(e)
    }
    init()
    {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        e.interpolation || (e.interpolation = {
            escapeValue: !0
        });
        const t = e.interpolation;
        this.escape = t.escape !== void 0 ? t.escape : Ct,
        this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0,
        this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1,
        this.prefix = t.prefix ? T(t.prefix) : t.prefixEscaped || "{{",
        this.suffix = t.suffix ? T(t.suffix) : t.suffixEscaped || "}}",
        this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
        this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
        this.nestingPrefix = t.nestingPrefix ? T(t.nestingPrefix) : t.nestingPrefixEscaped || T("$t("),
        this.nestingSuffix = t.nestingSuffix ? T(t.nestingSuffix) : t.nestingSuffixEscaped || T(")"),
        this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
        this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
        this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1,
        this.resetRegExp()
    }
    reset()
    {
        this.options && this.init(this.options)
    }
    resetRegExp()
    {
        const e = `${this.prefix}(.+?)${this.suffix}`;
        this.regexp = new RegExp(e, "g");
        const t = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
        this.regexpUnescape = new RegExp(t, "g");
        const n = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
        this.nestingRegexp = new RegExp(n, "g")
    }
    interpolate(e, t, n, i)
    {
        let r,
            a,
            o;
        const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        function c(d) {
            return d.replace(/\$/g, "$$$$")
        }
        const f = d => {
            if (d.indexOf(this.formatSeparator) < 0) {
                const S = we(t, l, d, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(S, void 0, n, {
                    ...i,
                    ...t,
                    interpolationkey: d
                }) : S
            }
            const m = d.split(this.formatSeparator),
                b = m.shift().trim(),
                v = m.join(this.formatSeparator).trim();
            return this.format(we(t, l, b, this.options.keySeparator, this.options.ignoreJSONStructure), v, n, {
                ...i,
                ...t,
                interpolationkey: b
            })
        };
        this.resetRegExp();
        const h = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
            u = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: d => c(d)
        }, {
            regex: this.regexp,
            safeValue: d => this.escapeValue ? c(this.escape(d)) : c(d)
        }].forEach(d => {
            for (o = 0; r = d.regex.exec(e);) {
                const m = r[1].trim();
                if (a = f(m), a === void 0)
                    if (typeof h == "function") {
                        const v = h(e, r, i);
                        a = typeof v == "string" ? v : ""
                    } else if (i && Object.prototype.hasOwnProperty.call(i, m))
                        a = "";
                    else if (u) {
                        a = r[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`),
                        a = "";
                else
                    typeof a != "string" && !this.useRawValueToEscape && (a = be(a));
                const b = d.safeValue(a);
                if (e = e.replace(r[0], b), u ? (d.regex.lastIndex += a.length, d.regex.lastIndex -= r[0].length) : d.regex.lastIndex = 0, o++, o >= this.maxReplaces)
                    break
            }
        }), e
    }
    nest(e, t)
    {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i,
            r,
            a;
        function o(l, c) {
            const f = this.nestingOptionsSeparator;
            if (l.indexOf(f) < 0)
                return l;
            const h = l.split(new RegExp(`${f}[ ]*{`));
            let u = `{${h[1]}`;
            l = h[0],
            u = this.interpolate(u, a);
            const g = u.match(/'/g),
                d = u.match(/"/g);
            (g && g.length % 2 === 0 && !d || d.length % 2 !== 0) && (u = u.replace(/'/g, '"'));
            try {
                a = JSON.parse(u),
                c && (a = {
                    ...c,
                    ...a
                })
            } catch (m) {
                return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${f}${u}`
            }
            return delete a.defaultValue, l
        }
        for (; i = this.nestingRegexp.exec(e);) {
            let l = [];
            a = {
                ...n
            },
            a = a.replace && typeof a.replace != "string" ? a.replace : a,
            a.applyPostProcessor = !1,
            delete a.defaultValue;
            let c = !1;
            if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
                const f = i[1].split(this.formatSeparator).map(h => h.trim());
                i[1] = f.shift(),
                l = f,
                c = !0
            }
            if (r = t(o.call(this, i[1].trim(), a), a), r && i[0] === e && typeof r != "string")
                return r;
            typeof r != "string" && (r = be(r)),
            r || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), r = ""),
            c && (r = l.reduce((f, h) => this.format(f, h, n.lng, {
                ...n,
                interpolationkey: i[1].trim()
            }), r.trim())),
            e = e.replace(i[0], r),
            this.regexp.lastIndex = 0
        }
        return e
    }
}
function Ft(s) {
    let e = s.toLowerCase().trim();
    const t = {};
    if (s.indexOf("(") > -1) {
        const n = s.split("(");
        e = n[0].toLowerCase().trim();
        const i = n[1].substring(0, n[1].length - 1);
        e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach(a => {
            if (!a)
                return;
            const [o, ...l] = a.split(":"),
                c = l.join(":").trim().replace(/^'+|'+$/g, "");
            t[o.trim()] || (t[o.trim()] = c),
            c === "false" && (t[o.trim()] = !1),
            c === "true" && (t[o.trim()] = !0),
            isNaN(c) || (t[o.trim()] = parseInt(c, 10))
        })
    }
    return {
        formatName: e,
        formatOptions: t
    }
}
function j(s) {
    const e = {};
    return function(n, i, r) {
        const a = i + JSON.stringify(r);
        let o = e[a];
        return o || (o = s(ee(i), r), e[a] = o), o(n)
    }
}
class At {
    constructor()
    {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = N.create("formatter"),
        this.options = e,
        this.formats = {
            number: j((t, n) => {
                const i = new Intl.NumberFormat(t, {
                    ...n
                });
                return r => i.format(r)
            }),
            currency: j((t, n) => {
                const i = new Intl.NumberFormat(t, {
                    ...n,
                    style: "currency"
                });
                return r => i.format(r)
            }),
            datetime: j((t, n) => {
                const i = new Intl.DateTimeFormat(t, {
                    ...n
                });
                return r => i.format(r)
            }),
            relativetime: j((t, n) => {
                const i = new Intl.RelativeTimeFormat(t, {
                    ...n
                });
                return r => i.format(r, n.range || "day")
            }),
            list: j((t, n) => {
                const i = new Intl.ListFormat(t, {
                    ...n
                });
                return r => i.format(r)
            })
        },
        this.init(e)
    }
    init(e)
    {
        const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        }).interpolation;
        this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
    }
    add(e, t)
    {
        this.formats[e.toLowerCase().trim()] = t
    }
    addCached(e, t)
    {
        this.formats[e.toLowerCase().trim()] = j(t)
    }
    format(e, t, n)
    {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return t.split(this.formatSeparator).reduce((o, l) => {
            const {formatName: c, formatOptions: f} = Ft(l);
            if (this.formats[c]) {
                let h = o;
                try {
                    const u = i && i.formatParams && i.formatParams[i.interpolationkey] || {},
                        g = u.locale || u.lng || i.locale || i.lng || n;
                    h = this.formats[c](o, g, {
                        ...f,
                        ...i,
                        ...u
                    })
                } catch (u) {
                    this.logger.warn(u)
                }
                return h
            } else
                this.logger.warn(`there was no format function for ${c}`);
            return o
        }, e)
    }
}
function Bt(s, e) {
    s.pending[e] !== void 0 && (delete s.pending[e], s.pendingCount--)
}
class Dt extends ne {
    constructor(e, t, n)
    {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(),
        this.backend = e,
        this.store = t,
        this.services = n,
        this.languageUtils = n.languageUtils,
        this.options = i,
        this.logger = N.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = i.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5,
        this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        this.backend && this.backend.init && this.backend.init(n, i.backend, i)
    }
    queueLoad(e, t, n, i)
    {
        const r = {},
            a = {},
            o = {},
            l = {};
        return e.forEach(c => {
            let f = !0;
            t.forEach(h => {
                const u = `${c}|${h}`;
                !n.reload && this.store.hasResourceBundle(c, h) ? this.state[u] = 2 : this.state[u] < 0 || (this.state[u] === 1 ? a[u] === void 0 && (a[u] = !0) : (this.state[u] = 1, f = !1, a[u] === void 0 && (a[u] = !0), r[u] === void 0 && (r[u] = !0), l[h] === void 0 && (l[h] = !0)))
            }),
            f || (o[c] = !0)
        }), (Object.keys(r).length || Object.keys(a).length) && this.queue.push({
            pending: a,
            pendingCount: Object.keys(a).length,
            loaded: {},
            errors: [],
            callback: i
        }), {
            toLoad: Object.keys(r),
            pending: Object.keys(a),
            toLoadLanguages: Object.keys(o),
            toLoadNamespaces: Object.keys(l)
        }
    }
    loaded(e, t, n)
    {
        const i = e.split("|"),
            r = i[0],
            a = i[1];
        t && this.emit("failedLoading", r, a, t),
        n && this.store.addResourceBundle(r, a, n),
        this.state[e] = t ? -1 : 2;
        const o = {};
        this.queue.forEach(l => {
            Lt(l.loaded, [r], a),
            Bt(l, e),
            t && l.errors.push(t),
            l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(c => {
                o[c] || (o[c] = {});
                const f = l.loaded[c];
                f.length && f.forEach(h => {
                    o[c][h] === void 0 && (o[c][h] = !0)
                })
            }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback())
        }),
        this.emit("loaded", o),
        this.queue = this.queue.filter(l => !l.done)
    }
    read(e, t, n)
    {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
            r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
            a = arguments.length > 5 ? arguments[5] : void 0;
        if (!e.length)
            return a(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: e,
                ns: t,
                fcName: n,
                tried: i,
                wait: r,
                callback: a
            });
            return
        }
        this.readingCalls++;
        const o = (c, f) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const h = this.waitingReads.shift();
                    this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback)
                }
                if (c && f && i < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, e, t, n, i + 1, r * 2, a)
                    }, r);
                    return
                }
                a(c, f)
            },
            l = this.backend[n].bind(this.backend);
        if (l.length === 2) {
            try {
                const c = l(e, t);
                c && typeof c.then == "function" ? c.then(f => o(null, f)).catch(o) : o(null, c)
            } catch (c) {
                o(c)
            }
            return
        }
        return l(e, t, o)
    }
    prepareLoading(e, t)
    {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
        typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)),
        typeof t == "string" && (t = [t]);
        const r = this.queueLoad(e, t, n, i);
        if (!r.toLoad.length)
            return r.pending.length || i(), null;
        r.toLoad.forEach(a => {
            this.loadOne(a)
        })
    }
    load(e, t, n)
    {
        this.prepareLoading(e, t, {}, n)
    }
    reload(e, t, n)
    {
        this.prepareLoading(e, t, {
            reload: !0
        }, n)
    }
    loadOne(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const n = e.split("|"),
            i = n[0],
            r = n[1];
        this.read(i, r, "read", void 0, void 0, (a, o) => {
            a && this.logger.warn(`${t}loading namespace ${r} for language ${i} failed`, a),
            !a && o && this.logger.log(`${t}loaded namespace ${r} for language ${i}`, o),
            this.loaded(e, a, o)
        })
    }
    saveMissing(e, t, n, i, r)
    {
        let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
            o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
            this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(n == null || n === "")) {
            if (this.backend && this.backend.create) {
                const l = {
                        ...a,
                        isUpdate: r
                    },
                    c = this.backend.create.bind(this.backend);
                if (c.length < 6)
                    try {
                        let f;
                        c.length === 5 ? f = c(e, t, n, i, l) : f = c(e, t, n, i),
                        f && typeof f.then == "function" ? f.then(h => o(null, h)).catch(o) : o(null, f)
                    } catch (f) {
                        o(f)
                    }
                else
                    c(e, t, n, i, o, l)
            }
            !e || !e[0] || this.store.addResource(e[0], t, n, i)
        }
    }
}
function Oe() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(e) {
            let t = {};
            if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
                const n = e[3] || e[2];
                Object.keys(n).forEach(i => {
                    t[i] = n[i]
                })
            }
            return t
        },
        interpolation: {
            escapeValue: !0,
            format: (s, e, t, n) => s,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}
function Ce(s) {
    return typeof s.ns == "string" && (s.ns = [s.ns]), typeof s.fallbackLng == "string" && (s.fallbackLng = [s.fallbackLng]), typeof s.fallbackNS == "string" && (s.fallbackNS = [s.fallbackNS]), s.supportedLngs && s.supportedLngs.indexOf("cimode") < 0 && (s.supportedLngs = s.supportedLngs.concat(["cimode"])), s
}
function G() {}
function Mt(s) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t => {
        typeof s[t] == "function" && (s[t] = s[t].bind(s))
    })
}
class K extends ne {
    constructor()
    {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        if (super(), this.options = Ce(e), this.services = {}, this.logger = N, this.modules = {
            external: []
        }, Mt(this), t && !this.isInitialized && !e.isClone) {
            if (!this.options.initImmediate)
                return this.init(e, t), this;
            setTimeout(() => {
                this.init(e, t)
            }, 0)
        }
    }
    init()
    {
        var e = this;
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        typeof t == "function" && (n = t, t = {}),
        !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
        const i = Oe();
        this.options = {
            ...i,
            ...this.options,
            ...Ce(t)
        },
        this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
            ...i.interpolation,
            ...this.options.interpolation
        }),
        t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator),
        t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
        function r(f) {
            return f ? typeof f == "function" ? new f : f : null
        }
        if (!this.options.isClone) {
            this.modules.logger ? N.init(r(this.modules.logger), this.options) : N.init(null, this.options);
            let f;
            this.modules.formatter ? f = this.modules.formatter : typeof Intl < "u" && (f = At);
            const h = new Se(this.options);
            this.store = new xe(this.options.resources, this.options);
            const u = this.services;
            u.logger = N,
            u.resourceStore = this.store,
            u.languageUtils = h,
            u.pluralResolver = new jt(h, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            f && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (u.formatter = r(f), u.formatter.init(u, this.options), this.options.interpolation.format = u.formatter.format.bind(u.formatter)),
            u.interpolator = new Et(this.options),
            u.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            u.backendConnector = new Dt(r(this.modules.backend), u.resourceStore, u, this.options),
            u.backendConnector.on("*", function(g) {
                for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), b = 1; b < d; b++)
                    m[b - 1] = arguments[b];
                e.emit(g, ...m)
            }),
            this.modules.languageDetector && (u.languageDetector = r(this.modules.languageDetector), u.languageDetector.init && u.languageDetector.init(u, this.options.detection, this.options)),
            this.modules.i18nFormat && (u.i18nFormat = r(this.modules.i18nFormat), u.i18nFormat.init && u.i18nFormat.init(this)),
            this.translator = new te(this.services, this.options),
            this.translator.on("*", function(g) {
                for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), b = 1; b < d; b++)
                    m[b - 1] = arguments[b];
                e.emit(g, ...m)
            }),
            this.modules.external.forEach(g => {
                g.init && g.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, n || (n = G), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(f => {
            this[f] = function() {
                return e.store[f](...arguments)
            }
        }),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(f => {
            this[f] = function() {
                return e.store[f](...arguments), e
            }
        });
        const l = M(),
            c = () => {
                const f = (h, u) => {
                    this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                    this.isInitialized = !0,
                    this.options.isClone || this.logger.log("initialized", this.options),
                    this.emit("initialized", this.options),
                    l.resolve(u),
                    n(h, u)
                };
                if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
                    return f(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, f)
            };
        return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l
    }
    loadResources(e)
    {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : G;
        const i = typeof e == "string" ? e : this.language;
        if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
            if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return n();
            const r = [],
                a = o => {
                    if (!o || o === "cimode")
                        return;
                    this.services.languageUtils.toResolveHierarchy(o).forEach(c => {
                        c !== "cimode" && r.indexOf(c) < 0 && r.push(c)
                    })
                };
            i ? a(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l => a(l)),
            this.options.preload && this.options.preload.forEach(o => a(o)),
            this.services.backendConnector.load(r, this.options.ns, o => {
                !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                n(o)
            })
        } else
            n(null)
    }
    reloadResources(e, t, n)
    {
        const i = M();
        return e || (e = this.languages), t || (t = this.options.ns), n || (n = G), this.services.backendConnector.reload(e, t, r => {
            i.resolve(),
            n(r)
        }), i
    }
    use(e)
    {
        if (!e)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!e.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Ie.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this
    }
    setResolvedLanguage(e)
    {
        if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
            for (let t = 0; t < this.languages.length; t++) {
                const n = this.languages[t];
                if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                    this.resolvedLanguage = n;
                    break
                }
            }
    }
    changeLanguage(e, t)
    {
        var n = this;
        this.isLanguageChangingTo = e;
        const i = M();
        this.emit("languageChanging", e);
        const r = l => {
                this.language = l,
                this.languages = this.services.languageUtils.toResolveHierarchy(l),
                this.resolvedLanguage = void 0,
                this.setResolvedLanguage(l)
            },
            a = (l, c) => {
                c ? (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0,
                i.resolve(function() {
                    return n.t(...arguments)
                }),
                t && t(l, function() {
                    return n.t(...arguments)
                })
            },
            o = l => {
                !e && !l && this.services.languageDetector && (l = []);
                const c = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
                c && (this.language || r(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)),
                this.loadResources(c, f => {
                    a(f, c)
                })
            };
        return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), i
    }
    getFixedT(e, t, n)
    {
        var i = this;
        const r = function(a, o) {
            let l;
            if (typeof o != "object") {
                for (var c = arguments.length, f = new Array(c > 2 ? c - 2 : 0), h = 2; h < c; h++)
                    f[h - 2] = arguments[h];
                l = i.options.overloadTranslationOptionHandler([a, o].concat(f))
            } else
                l = {
                    ...o
                };
            l.lng = l.lng || r.lng,
            l.lngs = l.lngs || r.lngs,
            l.ns = l.ns || r.ns,
            l.keyPrefix = l.keyPrefix || n || r.keyPrefix;
            const u = i.options.keySeparator || ".";
            let g;
            return l.keyPrefix && Array.isArray(a) ? g = a.map(d => `${l.keyPrefix}${u}${d}`) : g = l.keyPrefix ? `${l.keyPrefix}${u}${a}` : a, i.t(g, l)
        };
        return typeof e == "string" ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r
    }
    t()
    {
        return this.translator && this.translator.translate(...arguments)
    }
    exists()
    {
        return this.translator && this.translator.exists(...arguments)
    }
    setDefaultNamespace(e)
    {
        this.options.defaultNS = e
    }
    hasLoadedNamespace(e)
    {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const n = t.lng || this.resolvedLanguage || this.languages[0],
            i = this.options ? this.options.fallbackLng : !1,
            r = this.languages[this.languages.length - 1];
        if (n.toLowerCase() === "cimode")
            return !0;
        const a = (o, l) => {
            const c = this.services.backendConnector.state[`${o}|${l}`];
            return c === -1 || c === 2
        };
        if (t.precheck) {
            const o = t.precheck(this, a);
            if (o !== void 0)
                return o
        }
        return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(n, e) && (!i || a(r, e)))
    }
    loadNamespaces(e, t)
    {
        const n = M();
        return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach(i => {
            this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
        }), this.loadResources(i => {
            n.resolve(),
            t && t(i)
        }), n) : (t && t(), Promise.resolve())
    }
    loadLanguages(e, t)
    {
        const n = M();
        typeof e == "string" && (e = [e]);
        const i = this.options.preload || [],
            r = e.filter(a => i.indexOf(a) < 0);
        return r.length ? (this.options.preload = i.concat(r), this.loadResources(a => {
            n.resolve(),
            t && t(a)
        }), n) : (t && t(), Promise.resolve())
    }
    dir(e)
    {
        if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
            return "rtl";
        const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            n = this.services && this.services.languageUtils || new Se(Oe());
        return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance()
    {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return new K(e, t)
    }
    cloneInstance()
    {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : G;
        const n = e.forkResourceStore;
        n && delete e.forkResourceStore;
        const i = {
                ...this.options,
                ...e,
                isClone: !0
            },
            r = new K(i);
        return (e.debug !== void 0 || e.prefix !== void 0) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach(o => {
            r[o] = this[o]
        }), r.services = {
            ...this.services
        }, r.services.utils = {
            hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
        }, n && (r.store = new xe(this.store.data, i), r.services.resourceStore = r.store), r.translator = new te(r.services, i), r.translator.on("*", function(o) {
            for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)
                c[f - 1] = arguments[f];
            r.emit(o, ...c)
        }), r.init(i, t), r.translator.options = i, r.translator.backendConnector.services.utils = {
            hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
        }, r
    }
    toJSON()
    {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const O = K.createInstance();
O.createInstance = K.createInstance;
O.createInstance;
O.dir;
const Ut = O.init;
O.loadResources;
O.reloadResources;
O.use;
O.changeLanguage;
O.getFixedT;
const U = O.t;
O.exists;
O.setDefaultNamespace;
O.hasLoadedNamespace;
O.loadNamespaces;
O.loadLanguages;
const Kt = "Blue Archive Logo Generator",
    Vt = "BlueArchive-Style Logo Generator",
    Wt = "SAVE",
    Ht = "COPY",
    zt = "Advance settings",
    Jt = "Wêlai Glow Sans",
    Gt = "Gyeonggi Cheonnyeon Title",
    Yt = {
        title: Kt,
        "heading-logo": "logo/en.png",
        "text-left": params.get('text-left') ?? "Blue",
        "text-right": params.get('text-right') ?? "Archive",
        "text-sub": params.get('text-sub') ?? "",
        heading: Vt,
        save: Wt,
        copy: Ht,
        "copy-success": "Image copied",
        "transparent-background": "Transparent Background",
        advance: zt,
        "halo-cross": "Halo & Cross position",
        "font-title": "Used Fonts",
        "main-font": "Main: ",
        "fallback-font": "Fallback: ",
        glow: Jt,
        "github-repo": "GitHub repo",
        "korean-font": "Korean: ",
        gyeonggi: Gt,
        "change-point-color": "Change Point Color",
        "change-text-color": "Change Text Color",
        "reset-color": "Reset Color"
    },
    qt = "蔚蓝档案标题生成器",
    Xt = "蔚蓝档案标题生成器",
    Qt = "保存",
    Zt = "复制",
    _t = "高级设置",
    en = "未来荧黑",
    tn = "京畿千年字体",
    nn = {
        title: qt,
        "heading-logo": "logo/zh.png",
        "text-left": "蔚蓝",
        "text-right": "档案",
        "text-sub": "BlueArchive",
        heading: Xt,
        save: Qt,
        copy: Zt,
        "copy-success": "图片已成功复制",
        "transparent-background": "透明背景",
        advance: _t,
        "halo-cross": "光环位置微调",
        "font-title": "使用的字体",
        "main-font": "主要：",
        "fallback-font": "Fallback：",
        glow: en,
        "github-repo": "GitHub 仓库",
        "korean-font": "韩文: ",
        gyeonggi: tn,
        "change-point-color": "更改主色调",
        "change-text-color": "更改字母颜色",
        "reset-color": "重置颜色"
    },
    sn = "블루아카이브 로고 생성기",
    rn = "블루아카이브 스타일 로고 생성기",
    an = "저장",
    on = "복사",
    ln = "고급 설정",
    un = "Wêlai Glow Sans",
    cn = "경기천년제목",
    fn = {
        title: sn,
        "heading-logo": "logo/ko.png",
        "text-left": "Blue",
        "text-right": "Archive",
        "text-sub": "블루 아카이브",
        heading: rn,
        save: an,
        copy: on,
        "copy-success": "이미지 복사됨",
        "transparent-background": "투명한 배경",
        advance: ln,
        "halo-cross": "헤일로 & 십자 위치",
        "font-title": "사용된 폰트",
        "main-font": "메인: ",
        "fallback-font": "대체: ",
        glow: un,
        "github-repo": "GitHub 저장소",
        "korean-font": "한글: ",
        gyeonggi: cn,
        "change-point-color": "포인트 색상 변경",
        "change-text-color": "글자 색상 변경",
        "reset-color": "색상 초기화"
    };
let q = "en";
Ut({
    lng: q,
    resources: {
        en: {
            translation: Yt
        },
        zh: {
            translation: nn
        },
        ko: {
            translation: fn
        }
    }
});
document.querySelectorAll(".i18n").forEach(s => {
    const e = s.getAttribute("data-i18n");
    s.tagName === "INPUT" ? (s.setAttribute("placeholder", U(e)), s.setAttribute("value", U(e))) : s.tagName === "IMG" ? (s.setAttribute("alt", U(e)), s.setAttribute("src", U(`${e}-logo`))) : s.textContent = U(e)
});
(async function() {
    await xt(),
    new mt().draw()
})();
