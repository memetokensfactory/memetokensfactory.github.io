(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{36756:function(e,a,l){Promise.resolve().then(l.bind(l,33225)),Promise.resolve().then(l.bind(l,76590))},76590:function(e,a,l){"use strict";l.d(a,{default:function(){return F}});var s=l(57437),t=l(16463),i=l(55355),n=l(38472),r=l(21735),d=l(89733),o=l(95137),c=l(2265);function u(e){let{backUrl:a,children:l}=e,i=(0,t.useRouter)();return(0,s.jsxs)("div",{className:"flex flex-row items-center gap-2 mb-10",children:[(0,s.jsx)(d.z,{type:"button",variant:"ghost",onClick:()=>{a?i.push(a):i.back()},children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)("div",{className:"text-2xl font-bold",children:l})]})}var f=l(52431),m=l(77576),x=l(4312);let p=c.forwardRef((e,a)=>{let{className:l,value:t,...i}=e;return(0,s.jsx)(m.zt,{children:(0,s.jsxs)(m.fC,{children:[(0,s.jsx)(m.xz,{asChild:!0,children:(0,s.jsx)(f.fC,{ref:a,className:(0,x.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary",l),...i,children:(0,s.jsx)(f.z$,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:"translateX(-".concat(100-(t||0),"%)")}})})}),(0,s.jsx)(m.h_,{children:(0,s.jsxs)(m.VY,{className:"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-[4px] bg-black px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",sideOffset:5,children:["".concat(Math.round(t||0),"%"),(0,s.jsx)(m.Eh,{className:"fill-black"})]})})]})})});p.displayName=f.fC.displayName;var v=l(30685);let h=v.fC,y=c.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(v.aV,{ref:a,className:(0,x.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",l),...t})});y.displayName=v.aV.displayName;let b=c.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(v.xz,{ref:a,className:(0,x.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",l),...t})});b.displayName=v.xz.displayName;let g=c.forwardRef((e,a)=>{let{className:l,...t}=e;return(0,s.jsx)(v.VY,{ref:a,className:(0,x.cn)("ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",l),...t})});g.displayName=v.VY.displayName;var j=l(58789);let N=c.forwardRef((e,a)=>{let{className:l,type:t,...i}=e;return(0,s.jsx)("input",{type:t,className:(0,x.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",l),ref:a,...i})});N.displayName="Input";var w=l(41164),k=function(e){let{tokenAddress:a,tokenSupply:l,tokenMaxSupply:t,refetch:n}=e,[o,u]=(0,c.useState)(""),[f,m]=(0,c.useState)(),[x,p]=(0,c.useState)(),{signer:v,walletAddress:h,addTokenToWallet:y}=(0,w.Z)(),b=(0,r.np)(t.wei.sub(l.wei)),{data:g}=(0,i.a)({queryKey:["balance",h],queryFn:()=>v.getBalance().then(e=>parseFloat(j.dF(e)).toLocaleString(void 0,{maximumFractionDigits:2})),enabled:!!v&&!!h});(0,c.useEffect)(()=>{(async()=>{if(o&&a)try{let[e,l]=await Promise.all([(0,r.id)(a,parseFloat(o)),(0,r.e_)(a,parseFloat(o))]);m(e),p(l)}catch(e){console.error("Error calculating price info:",e),m(void 0),p(void 0)}else m(void 0),p(void 0)})()},[o,a]);let k=async()=>{if(!o||!f||!a){console.error("Invalid buy parameters");return}try{let e=await (0,r.b7)(v,a,parseFloat(o),f.wei);console.log("Transaction successful:",e),u(""),n()}catch(e){console.error("Error buying tokens:",e)}};return(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 items-center space-x-2 my-4",children:[(0,s.jsxs)("div",{children:["Your LISK balance: ",g||"0"]}),(0,s.jsxs)("div",{children:["Maximum available to buy:"," ",b.toLocaleString(void 0,{maximumFractionDigits:2})]}),(0,s.jsx)(N,{type:"number",placeholder:"Enter tokens amount",value:o,onChange:e=>{let a=e.target.value;Number(a)<=b?u(a):u(b.toString())},max:b})]}),void 0!==f&&(0,s.jsxs)("div",{className:"mb-2",children:["LISK to pay: ",null==f?void 0:f.formatted]}),void 0!==x&&(0,s.jsxs)("div",{className:"mb-2",children:["LISK per token: ",null==x?void 0:x.formatted]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(d.z,{onClick:k,className:"w-full",children:"Buy"}),(0,s.jsx)(d.z,{variant:"link",onClick:()=>y(a),className:"w-full",children:"Add Token to MetaMask"})]})]})},_=function(e){let{tokenAddress:a,refetch:l}=e,[t,n]=(0,c.useState)(""),[o,u]=(0,c.useState)(),{signer:f,walletAddress:m}=(0,w.Z)(),{data:x,refetch:p}=(0,i.a)({queryKey:["tokenBalance",m,a],queryFn:()=>(0,r.uH)(a,m),enabled:!!f&&!!m&&!!a});(0,c.useEffect)(()=>{(async()=>{if(t&&a)try{let e=await (0,r.$5)(a,parseFloat(t));u(e)}catch(e){console.error("Error calculating receive info:",e),u(void 0)}else u(void 0)})()},[t,a]);let v=async()=>{if(!t||!a){console.error("Invalid sell parameters");return}try{let e=await (0,r.Hk)(f,a,parseFloat(t));console.log("Transaction successful:",e),n(""),l(),p()}catch(e){console.error("Error selling tokens:",e)}};return(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 items-center space-x-2 my-4",children:[(0,s.jsxs)("div",{children:["Your token balance: ",(null==x?void 0:x.formatted)||"0"]}),(0,s.jsx)(N,{type:"number",placeholder:"Enter tokens amount to sell",value:t,onChange:e=>{let a=e.target.value,l=Number(a),s=x&&parseFloat(j.dF(x.wei));if(s&&l<=s)n(a);else if(x){var t;n(null!==(t=null==s?void 0:s.toString())&&void 0!==t?t:"")}},max:null==x?void 0:x.formatted})]}),void 0!==o&&(0,s.jsxs)("div",{className:"mb-2",children:["LISK to receive: ",null==o?void 0:o.formatted]}),(0,s.jsx)("div",{className:"flex flex-col gap-2",children:(0,s.jsx)(d.z,{onClick:v,className:"w-full",children:"Sell"})})]})},F=function(){let e=(0,t.useSearchParams)().get("address"),{data:a,isLoading:l,isError:d,refetch:o}=(0,i.a)({queryKey:["token",e],queryFn:()=>(0,r.LP)(e),enabled:!!e}),{data:c,isLoading:f,isError:x}=(0,i.a)({queryKey:["ipfsData",null==a?void 0:a.dataFileId],queryFn:()=>a?n.Z.get("https://gateway.pinata.cloud/ipfs/".concat(null==a?void 0:a.dataFileId)).then(e=>e.data):void 0,enabled:!!a&&!!a.dataFileId});return(0,s.jsx)("div",{className:"max-w-[500px]",children:e&&a&&(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)(u,{children:[a.symbol," ",a.name]}),a.liquidityMigrated&&"Liquidity Migrated",a.liquidityMigrated||(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"mb-2",children:["Supply: ",a.supply.formatted," / ",a.maxSupply.formatted]}),(0,s.jsx)(m.zt,{children:(0,s.jsx)(p,{value:Number(a.supply.wei)/Number(a.maxSupply.wei)*100})})]}),(0,s.jsxs)(h,{defaultValue:"buy",className:"w-full",children:[(0,s.jsxs)(y,{className:"grid w-full grid-cols-2",children:[(0,s.jsx)(b,{value:"buy",children:"Buy"}),(0,s.jsx)(b,{value:"sell",children:"Sell"})]}),(0,s.jsx)(g,{value:"buy",children:(0,s.jsx)(k,{tokenAddress:e,tokenSupply:a.supply,tokenMaxSupply:a.maxSupply,refetch:o})}),(0,s.jsx)(g,{value:"sell",children:(0,s.jsx)(_,{tokenAddress:e,refetch:o})})]})]})]})})}}},function(e){e.O(0,[54,950,811,345,840,198,686,971,23,744],function(){return e(e.s=36756)}),_N_E=e.O()}]);