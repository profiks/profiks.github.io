! function (e) {
	function t(i) {
		if (n[i]) return n[i].exports;
		var a = n[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var a = n(1),
		r = i(a),
		l = document.getElementById("mainNavigation");
	if (null !== l) {
		new r.default(l)
	}
}, function (e, t) {
	"use strict";

	function n(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function (t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		a = function () {
			function e(t) {
				n(this, e), this.line = document.createElement("div"), this.line.className = "nav__line", this.marquee = document.createElement("span"), this.marquee.className = "nav__marquee", this.line.appendChild(this.marquee), t.appendChild(this.line), this.list = t.getElementsByTagName("li");
				for (var i = 0; i < this.list.length; ++i) this.over(this.list[i]), this.leave(this.list[i])
			}
			return i(e, [{
				key: "over",
				value: function (e) {
					e.addEventListener("mouseover", this.init.bind(this), !1)
				}
			}, {
				key: "leave",
				value: function (e) {
					e.addEventListener("mouseleave", this.clear.bind(this))
				}
			}, {
				key: "init",
				value: function (e) {
					this.marquee.style.left = e.toElement.offsetLeft + "px", this.marquee.style.width = e.target.clientWidth + "px"
				}
			}, {
				key: "clear",
				value: function (e) {
					this.marquee.style.width = 0
				}
			}]), e
		}();
	t.default = a
}]);
//# sourceMappingURL=bundle.js.map