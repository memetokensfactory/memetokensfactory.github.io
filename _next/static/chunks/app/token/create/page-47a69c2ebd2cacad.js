(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[509],{33678:function(t,e,r){Promise.resolve().then(r.bind(r,69918)),Promise.resolve().then(r.bind(r,33225))},58789:function(t,e,r){"use strict";r.d(e,{dF:function(){return F},fi:function(){return E}});var i=r(9784),o=r(13421),n=r(38418),l=r(22594);let s=new o.Yd(n.i),a={},u=l.O$.from(0),m=l.O$.from(-1);function f(t,e,r,i){let n={fault:e,operation:r};return void 0!==i&&(n.value=i),s.throwError(t,o.Yd.errors.NUMERIC_FAULT,n)}let h="0";for(;h.length<256;)h+=h;function d(t){if("number"!=typeof t)try{t=l.O$.from(t).toNumber()}catch(t){}return"number"==typeof t&&t>=0&&t<=256&&!(t%1)?"1"+h.substring(0,t):s.throwArgumentError("invalid decimal size","decimals",t)}function c(t,e){null==e&&(e=0);let r=d(e),i=(t=l.O$.from(t)).lt(u);i&&(t=t.mul(m));let o=t.mod(r).toString();for(;o.length<r.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];let n=t.div(r).toString();return t=1===r.length?n:n+"."+o,i&&(t="-"+t),t}function g(t,e){null==e&&(e=0);let r=d(e);"string"==typeof t&&t.match(/^-?[0-9.]+$/)||s.throwArgumentError("invalid decimal value","value",t);let i="-"===t.substring(0,1);i&&(t=t.substring(1)),"."===t&&s.throwArgumentError("missing value","value",t);let o=t.split(".");o.length>2&&s.throwArgumentError("too many decimal points","value",t);let n=o[0],a=o[1];for(n||(n="0"),a||(a="0");"0"===a[a.length-1];)a=a.substring(0,a.length-1);for(a.length>r.length-1&&f("fractional component exceeds decimals","underflow","parseFixed"),""===a&&(a="0");a.length<r.length-1;)a+="0";let u=l.O$.from(n),h=l.O$.from(a),c=u.mul(r).add(h);return i&&(c=c.mul(m)),c}class w{constructor(t,e,r,i){t!==a&&s.throwError("cannot use FixedFormat constructor; use FixedFormat.from",o.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=e,this.width=r,this.decimals=i,this.name=(e?"":"u")+"fixed"+String(r)+"x"+String(i),this._multiplier=d(i),Object.freeze(this)}static from(t){if(t instanceof w)return t;"number"==typeof t&&(t=`fixed128x${t}`);let e=!0,r=128,i=18;if("string"==typeof t){if("fixed"===t);else if("ufixed"===t)e=!1;else{let o=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||s.throwArgumentError("invalid fixed format","format",t),e="u"!==o[1],r=parseInt(o[2]),i=parseInt(o[3])}}else if(t){let o=(e,r,i)=>null==t[e]?i:(typeof t[e]!==r&&s.throwArgumentError("invalid fixed format ("+e+" not "+r+")","format."+e,t[e]),t[e]);e=o("signed","boolean",e),r=o("width","number",r),i=o("decimals","number",i)}return r%8&&s.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),i>80&&s.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new w(a,e,r,i)}}class v{constructor(t,e,r,i){t!==a&&s.throwError("cannot use FixedNumber constructor; use FixedNumber.from",o.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=e,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&s.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);let e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return v.fromValue(e.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);let e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return v.fromValue(e.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);let e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return v.fromValue(e.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);let e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return v.fromValue(e.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){let t=this.toString().split(".");1===t.length&&t.push("0");let e=v.from(t[0],this.format),r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(e=e.subUnsafe(x.toFormat(e.format))),e}ceiling(){let t=this.toString().split(".");1===t.length&&t.push("0");let e=v.from(t[0],this.format),r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(e=e.addUnsafe(x.toFormat(e.format))),e}round(t){null==t&&(t=0);let e=this.toString().split(".");if(1===e.length&&e.push("0"),(t<0||t>80||t%1)&&s.throwArgumentError("invalid decimal count","decimals",t),e[1].length<=t)return this;let r=v.from("1"+h.substring(0,t),this.format),i=_.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&s.throwArgumentError("invalid byte width","width",t);let e=l.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return(0,i.$m)(e,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return v.fromString(this._value,t)}static fromValue(t,e,r){return null!=r||null==e||(0,l.Zm)(e)||(r=e,e=null),null==e&&(e=0),null==r&&(r="fixed"),v.fromString(c(t,e),w.from(r))}static fromString(t,e){null==e&&(e="fixed");let r=w.from(e),o=g(t,r.decimals);!r.signed&&o.lt(u)&&f("unsigned value cannot be negative","overflow","value",t);let n=null;return r.signed?n=o.toTwos(r.width).toHexString():(n=o.toHexString(),n=(0,i.$m)(n,r.width/8)),new v(a,n,c(o,r.decimals),r)}static fromBytes(t,e){null==e&&(e="fixed");let r=w.from(e);if((0,i.lE)(t).length>r.width/8)throw Error("overflow");let o=l.O$.from(t);return r.signed&&(o=o.fromTwos(r.width)),new v(a,o.toTwos((r.signed?0:1)+r.width).toHexString(),c(o,r.decimals),r)}static from(t,e){if("string"==typeof t)return v.fromString(t,e);if((0,i._t)(t))return v.fromBytes(t,e);try{return v.fromValue(t,0,e)}catch(t){if(t.code!==o.Yd.errors.INVALID_ARGUMENT)throw t}return s.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}let x=v.from(1),_=v.from("0.5"),p=new o.Yd("units/5.7.0"),b=["wei","kwei","mwei","gwei","szabo","finney","ether"];function F(t){return function(t,e){if("string"==typeof e){let t=b.indexOf(e);-1!==t&&(e=3*t)}return c(t,null!=e?e:18)}(t,18)}function E(t){return function(t,e){if("string"!=typeof t&&p.throwArgumentError("value must be a string","value",t),"string"==typeof e){let t=b.indexOf(e);-1!==t&&(e=3*t)}return g(t,null!=e?e:18)}(t,18)}},95137:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r(78030).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},69918:function(t,e,r){"use strict";var i=r(57437);r(2265);var o=r(89733),n=r(16463),l=r(60142),s=r(71659),a=r(41164);e.default=function(){let t=(0,n.useRouter)(),{signer:e}=(0,a.Z)(),r=async()=>{let{tokenAddress:r}=await (0,s.V3)(e,"Token","Token","");t.push("/token?address="+r)};return(0,i.jsxs)("div",{className:"max-w-[500px] mx-auto mt-8",children:[(0,i.jsx)(l.Z,{children:"Create Token"}),(0,i.jsx)(o.z,{onClick:()=>r(),children:"Create"})]})}}},function(t){t.O(0,[54,950,951,868,971,23,744],function(){return t(t.s=33678)}),_N_E=t.O()}]);