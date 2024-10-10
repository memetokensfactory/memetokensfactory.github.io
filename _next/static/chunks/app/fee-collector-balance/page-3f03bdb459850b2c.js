(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{25551:function(t,e,r){Promise.resolve().then(r.bind(r,83771))},58789:function(t,e,r){"use strict";r.d(e,{dF:function(){return E},fi:function(){return F}});var i=r(9784),n=r(13421),o=r(38418),l=r(22594);let a=new n.Yd(o.i),s={},u=l.O$.from(0),m=l.O$.from(-1);function f(t,e,r,i){let o={fault:e,operation:r};return void 0!==i&&(o.value=i),a.throwError(t,n.Yd.errors.NUMERIC_FAULT,o)}let h="0";for(;h.length<256;)h+=h;function d(t){if("number"!=typeof t)try{t=l.O$.from(t).toNumber()}catch(t){}return"number"==typeof t&&t>=0&&t<=256&&!(t%1)?"1"+h.substring(0,t):a.throwArgumentError("invalid decimal size","decimals",t)}function c(t,e){null==e&&(e=0);let r=d(e),i=(t=l.O$.from(t)).lt(u);i&&(t=t.mul(m));let n=t.mod(r).toString();for(;n.length<r.length-1;)n="0"+n;n=n.match(/^([0-9]*[1-9]|0)(0*)/)[1];let o=t.div(r).toString();return t=1===r.length?o:o+"."+n,i&&(t="-"+t),t}function g(t,e){null==e&&(e=0);let r=d(e);"string"==typeof t&&t.match(/^-?[0-9.]+$/)||a.throwArgumentError("invalid decimal value","value",t);let i="-"===t.substring(0,1);i&&(t=t.substring(1)),"."===t&&a.throwArgumentError("missing value","value",t);let n=t.split(".");n.length>2&&a.throwArgumentError("too many decimal points","value",t);let o=n[0],s=n[1];for(o||(o="0"),s||(s="0");"0"===s[s.length-1];)s=s.substring(0,s.length-1);for(s.length>r.length-1&&f("fractional component exceeds decimals","underflow","parseFixed"),""===s&&(s="0");s.length<r.length-1;)s+="0";let u=l.O$.from(o),h=l.O$.from(s),c=u.mul(r).add(h);return i&&(c=c.mul(m)),c}class w{constructor(t,e,r,i){t!==s&&a.throwError("cannot use FixedFormat constructor; use FixedFormat.from",n.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=e,this.width=r,this.decimals=i,this.name=(e?"":"u")+"fixed"+String(r)+"x"+String(i),this._multiplier=d(i),Object.freeze(this)}static from(t){if(t instanceof w)return t;"number"==typeof t&&(t=`fixed128x${t}`);let e=!0,r=128,i=18;if("string"==typeof t){if("fixed"===t);else if("ufixed"===t)e=!1;else{let n=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);n||a.throwArgumentError("invalid fixed format","format",t),e="u"!==n[1],r=parseInt(n[2]),i=parseInt(n[3])}}else if(t){let n=(e,r,i)=>null==t[e]?i:(typeof t[e]!==r&&a.throwArgumentError("invalid fixed format ("+e+" not "+r+")","format."+e,t[e]),t[e]);e=n("signed","boolean",e),r=n("width","number",r),i=n("decimals","number",i)}return r%8&&a.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),i>80&&a.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new w(s,e,r,i)}}class v{constructor(t,e,r,i){t!==s&&a.throwError("cannot use FixedNumber constructor; use FixedNumber.from",n.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=e,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&a.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);let e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return v.fromValue(e.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);let e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return v.fromValue(e.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);let e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return v.fromValue(e.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);let e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return v.fromValue(e.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){let t=this.toString().split(".");1===t.length&&t.push("0");let e=v.from(t[0],this.format),r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(e=e.subUnsafe(x.toFormat(e.format))),e}ceiling(){let t=this.toString().split(".");1===t.length&&t.push("0");let e=v.from(t[0],this.format),r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(e=e.addUnsafe(x.toFormat(e.format))),e}round(t){null==t&&(t=0);let e=this.toString().split(".");if(1===e.length&&e.push("0"),(t<0||t>80||t%1)&&a.throwArgumentError("invalid decimal count","decimals",t),e[1].length<=t)return this;let r=v.from("1"+h.substring(0,t),this.format),i=b.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&a.throwArgumentError("invalid byte width","width",t);let e=l.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return(0,i.$m)(e,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return v.fromString(this._value,t)}static fromValue(t,e,r){return null!=r||null==e||(0,l.Zm)(e)||(r=e,e=null),null==e&&(e=0),null==r&&(r="fixed"),v.fromString(c(t,e),w.from(r))}static fromString(t,e){null==e&&(e="fixed");let r=w.from(e),n=g(t,r.decimals);!r.signed&&n.lt(u)&&f("unsigned value cannot be negative","overflow","value",t);let o=null;return r.signed?o=n.toTwos(r.width).toHexString():(o=n.toHexString(),o=(0,i.$m)(o,r.width/8)),new v(s,o,c(n,r.decimals),r)}static fromBytes(t,e){null==e&&(e="fixed");let r=w.from(e);if((0,i.lE)(t).length>r.width/8)throw Error("overflow");let n=l.O$.from(t);return r.signed&&(n=n.fromTwos(r.width)),new v(s,n.toTwos((r.signed?0:1)+r.width).toHexString(),c(n,r.decimals),r)}static from(t,e){if("string"==typeof t)return v.fromString(t,e);if((0,i._t)(t))return v.fromBytes(t,e);try{return v.fromValue(t,0,e)}catch(t){if(t.code!==n.Yd.errors.INVALID_ARGUMENT)throw t}return a.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}let x=v.from(1),b=v.from("0.5"),_=new n.Yd("units/5.7.0"),p=["wei","kwei","mwei","gwei","szabo","finney","ether"];function E(t){return function(t,e){if("string"==typeof e){let t=p.indexOf(e);-1!==t&&(e=3*t)}return c(t,null!=e?e:18)}(t,18)}function F(t){return function(t,e){if("string"!=typeof t&&_.throwArgumentError("value must be a string","value",t),"string"==typeof e){let t=p.indexOf(e);-1!==t&&(e=3*t)}return g(t,null!=e?e:18)}(t,18)}},83771:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return a}});var i=r(57437),n=r(2265),o=r(21735),l=r(33225);function a(){let[t,e]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async function(){try{let t=await (0,o.T6)();e(t.formatted)}catch(t){console.error("Error fetching fee collector balance:",t),e("Error fetching balance")}})()},[]),(0,i.jsx)(l.default,{children:(0,i.jsxs)("div",{className:"max-w-[500px] mx-auto mt-8",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Fee Collector Balance"}),null===t?(0,i.jsx)("p",{children:"Loading balance..."}):(0,i.jsxs)("p",{className:"text-xl",children:["Current balance: ",(0,i.jsxs)("span",{className:"font-bold",children:[t," ETH"]})]})]})})}}},function(t){t.O(0,[54,950,811,198,686,971,23,744],function(){return t(t.s=25551)}),_N_E=t.O()}]);