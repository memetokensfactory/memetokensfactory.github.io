(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{36756:function(e,a,l){Promise.resolve().then(l.bind(l,33225)),Promise.resolve().then(l.bind(l,80765))},80765:function(e,a,l){"use strict";l.d(a,{default:function(){return F}});var s=l(57437),t=l(16463),i=l(55355),n=l(38472),r=l(21735),d=l(89733),o=l(95137),c=l(2265);function u(e){let{backUrl:a,children:l}=e,i=(0,t.useRouter)();return(0,s.jsxs)("div",{className:"flex flex-row items-center gap-2 mb-10",children:[(0,s.jsx)(d.z,{type:"button",variant:"ghost",onClick:()=>{a?i.push(a):i.back()},children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)("div",{className:"text-2xl font-bold",children:l})]})}var f=l(61617),p=l(77576),m=l(30685),x=l(4312);let h=m.fC,v=c.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(m.aV,{ref:a,className:(0,x.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",l),...t})});v.displayName=m.aV.displayName;let y=c.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(m.xz,{ref:a,className:(0,x.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",l),...t})});y.displayName=m.xz.displayName;let b=c.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(m.VY,{ref:a,className:(0,x.cn)("ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",l),...t})});b.displayName=m.VY.displayName;var g=l(58789);let j=c.forwardRef((e,a)=>{let{className:l,type:t,...i}=e;return(0,s.jsx)("input",{type:t,className:(0,x.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",l),ref:a,...i})});j.displayName="Input";var N=l(41164),w=function(e){let{tokenAddress:a,tokenSupply:l,tokenMaxSupply:t,refetch:n}=e,[o,u]=(0,c.useState)(""),[f,p]=(0,c.useState)(),[m,x]=(0,c.useState)(),{signer:h,walletAddress:v,addTokenToWallet:y}=(0,N.Z)(),b=(0,r.np)(t.wei.sub(l.wei)),{data:w}=(0,i.a)({queryKey:["balance",v],queryFn:()=>h.getBalance().then(e=>parseFloat(g.dF(e)).toLocaleString(void 0,{maximumFractionDigits:2})),enabled:!!h&&!!v});(0,c.useEffect)(()=>{(async()=>{if(o&&a)try{let[e,l]=await Promise.all([(0,r.id)(h,a,parseFloat(o)),(0,r.e_)(h,a,parseFloat(o))]);p(e),x(l)}catch(e){console.error("Error calculating price info:",e),p(void 0),x(void 0)}else p(void 0),x(void 0)})()},[o,a]);let k=async()=>{if(!o||!f||!a){console.error("Invalid buy parameters");return}try{let e=await (0,r.b7)(h,a,parseFloat(o),f.wei);console.log("Transaction successful:",e),u(""),n()}catch(e){console.error("Error buying tokens:",e)}};return(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 items-center space-x-2 my-4",children:[(0,s.jsxs)("div",{children:["Your LISK balance: ",w||"0"]}),(0,s.jsxs)("div",{children:["Maximum available to buy:"," ",b.toLocaleString(void 0,{maximumFractionDigits:2})]}),(0,s.jsx)(j,{type:"number",placeholder:"Enter tokens amount",value:o,onChange:e=>{let a=e.target.value;Number(a)<=b?u(a):u(b.toString())},max:b})]}),void 0!==f&&(0,s.jsxs)("div",{className:"mb-2",children:["LISK to pay: ",null==f?void 0:f.formatted]}),void 0!==m&&(0,s.jsxs)("div",{className:"mb-2",children:["LISK per token: ",null==m?void 0:m.formatted]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(d.z,{onClick:k,className:"w-full",children:"Buy"}),(0,s.jsx)(d.z,{variant:"link",onClick:()=>y(a),className:"w-full",children:"Add Token to MetaMask"})]})]})},k=function(e){let{tokenAddress:a,refetch:l}=e,[t,n]=(0,c.useState)(""),[o,u]=(0,c.useState)(),{signer:f,walletAddress:p}=(0,N.Z)(),{data:m,refetch:x}=(0,i.a)({queryKey:["tokenBalance",p,a],queryFn:()=>(0,r.uH)(f,a,p),enabled:!!f&&!!p&&!!a});(0,c.useEffect)(()=>{(async()=>{if(t&&a)try{let e=await (0,r.$5)(f,a,parseFloat(t));u(e)}catch(e){console.error("Error calculating receive info:",e),u(void 0)}else u(void 0)})()},[t,a]);let h=async()=>{if(!t||!a){console.error("Invalid sell parameters");return}try{let e=await (0,r.Hk)(f,a,parseFloat(t));console.log("Transaction successful:",e),n(""),l(),x()}catch(e){console.error("Error selling tokens:",e)}};return(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 items-center space-x-2 my-4",children:[(0,s.jsxs)("div",{children:["Your token balance: ",(null==m?void 0:m.formatted)||"0"]}),(0,s.jsx)(j,{type:"number",placeholder:"Enter tokens amount to sell",value:t,onChange:e=>{let a=e.target.value,l=Number(a),s=m&&parseFloat(g.dF(m.wei));if(s&&l<=s)n(a);else if(m){var t;n(null!==(t=null==s?void 0:s.toString())&&void 0!==t?t:"")}},max:null==m?void 0:m.formatted})]}),void 0!==o&&(0,s.jsxs)("div",{className:"mb-2",children:["LISK to receive: ",null==o?void 0:o.formatted]}),(0,s.jsx)("div",{className:"flex flex-col gap-2",children:(0,s.jsx)(d.z,{onClick:h,className:"w-full",children:"Sell"})})]})},_=l(87138),F=function(){let{signer:e}=(0,N.Z)(),a=(0,t.useSearchParams)().get("address"),{data:l,isLoading:d,isError:o,refetch:c}=(0,i.a)({queryKey:["token",a],queryFn:()=>(0,r.LP)(e,a),enabled:!!a}),{data:m,isLoading:x,isError:g}=(0,i.a)({queryKey:["ipfsData",null==l?void 0:l.dataFileId],queryFn:()=>l?n.Z.get("https://gateway.pinata.cloud/ipfs/".concat(null==l?void 0:l.dataFileId)).then(e=>e.data):void 0,enabled:!!l&&!!l.dataFileId});return(0,s.jsx)("div",{className:"max-w-[500px]",children:a&&l&&(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)(u,{children:[l.symbol," ",l.name]}),l.liquidityMigrated&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"pb-4",children:"Liquidity Migrated"}),(0,s.jsx)(_.default,{href:"https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=".concat(a,"&chain=optimism-sepolia"),target:"_blank",children:"Uniswap Pool Link"})]}),l.liquidityMigrated||(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"mb-2",children:["Supply: ",l.supply.formatted," / ",l.maxSupply.formatted]}),(0,s.jsx)(p.zt,{children:(0,s.jsx)(f.E,{value:Number(l.supply.wei)/Number(l.maxSupply.wei)*100})})]}),(0,s.jsxs)(h,{defaultValue:"buy",className:"w-full",children:[(0,s.jsxs)(v,{className:"grid w-full grid-cols-2",children:[(0,s.jsx)(y,{value:"buy",children:"Buy"}),(0,s.jsx)(y,{value:"sell",children:"Sell"})]}),(0,s.jsx)(b,{value:"buy",children:(0,s.jsx)(w,{tokenAddress:a,tokenSupply:l.supply,tokenMaxSupply:l.maxSupply,refetch:c})}),(0,s.jsx)(b,{value:"sell",children:(0,s.jsx)(k,{tokenAddress:a,refetch:c})})]})]})]})})}},61617:function(e,a,l){"use strict";l.d(a,{E:function(){return d}});var s=l(57437),t=l(2265),i=l(52431),n=l(77576),r=l(4312);let d=t.forwardRef((e,a)=>{let{className:l,value:t,...d}=e;return(0,s.jsx)(n.zt,{children:(0,s.jsxs)(n.fC,{children:[(0,s.jsx)(n.xz,{asChild:!0,children:(0,s.jsx)(i.fC,{ref:a,className:(0,r.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary",l),...d,children:(0,s.jsx)(i.z$,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:"translateX(-".concat(100-(t||0),"%)")}})})}),(0,s.jsx)(n.h_,{children:(0,s.jsxs)(n.VY,{className:"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-[4px] bg-black px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",sideOffset:5,children:["".concat(Math.round(t||0),"%"),(0,s.jsx)(n.Eh,{className:"fill-black"})]})})]})})});d.displayName=i.fC.displayName}},function(e){e.O(0,[54,783,843,887,435,870,198,686,971,23,744],function(){return e(e.s=36756)}),_N_E=e.O()}]);