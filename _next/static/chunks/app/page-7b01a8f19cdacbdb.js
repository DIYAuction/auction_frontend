(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{87750:function(e,t,n){Promise.resolve().then(n.bind(n,50603)),Promise.resolve().then(n.bind(n,13724)),Promise.resolve().then(n.bind(n,41010)),Promise.resolve().then(n.bind(n,50090)),Promise.resolve().then(n.bind(n,79802)),Promise.resolve().then(n.bind(n,15934)),Promise.resolve().then(n.bind(n,30563)),Promise.resolve().then(n.bind(n,8750)),Promise.resolve().then(n.bind(n,11763)),Promise.resolve().then(n.bind(n,65286)),Promise.resolve().then(n.bind(n,13591)),Promise.resolve().then(n.bind(n,16166)),Promise.resolve().then(n.bind(n,89253)),Promise.resolve().then(n.bind(n,34994)),Promise.resolve().then(n.bind(n,77541)),Promise.resolve().then(n.bind(n,38369)),Promise.resolve().then(n.bind(n,93920)),Promise.resolve().then(n.bind(n,42213)),Promise.resolve().then(n.bind(n,3427)),Promise.resolve().then(n.bind(n,80667)),Promise.resolve().then(n.bind(n,58593)),Promise.resolve().then(n.bind(n,21429)),Promise.resolve().then(n.bind(n,99481)),Promise.resolve().then(n.bind(n,47563)),Promise.resolve().then(n.bind(n,93192)),Promise.resolve().then(n.bind(n,49772)),Promise.resolve().then(n.bind(n,64493)),Promise.resolve().then(n.bind(n,30594)),Promise.resolve().then(n.bind(n,63944)),Promise.resolve().then(n.bind(n,39708)),Promise.resolve().then(n.bind(n,38553)),Promise.resolve().then(n.t.bind(n,81749,23)),Promise.resolve().then(n.t.bind(n,25250,23)),Promise.resolve().then(n.bind(n,930)),Promise.resolve().then(n.bind(n,26538))},89539:function(e){var t,n,r,i,s,a,o,c,d,u,l,f,h,m,p,g,v,b,x,A,w,y;e.exports=(t="millisecond",n="second",r="minute",i="hour",s="week",a="month",o="quarter",c="year",d="date",u="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},g="$isDayjsObject",v=function(e){return e instanceof w||!(!e||!e[g])},b=function e(t,n,r){var i;if(!t)return m;if("string"==typeof t){var s=t.toLowerCase();p[s]&&(i=s),n&&(p[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;p[o]=t,i=o}return!r&&i&&(m=i),i||!r&&m},x=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},(A={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,a),s=n-i<0,o=t.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:c,w:s,d:"day",D:d,h:i,m:r,s:n,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=b,A.i=v,A.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},y=(w=function(){function e(e){this.$L=b(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(A.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return A},h.isValid=function(){return this.$d.toString()!==u},h.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return x(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<x(e)},h.$g=function(e,t,n){return A.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var o=this,u=!!A.u(t)||t,l=A.p(e),f=function(e,t){var n=A.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return u?n:n.endOf("day")},h=function(e,t){return A.w(o.toDate()[e].apply(o.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},m=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case c:return u?f(1,0):f(31,11);case a:return u?f(1,p):f(0,p+1);case s:var b=this.$locale().weekStart||0,x=(m<b?m+7:m)-b;return f(u?g-x:g+(6-x),p);case"day":case d:return h(v+"Hours",0);case i:return h(v+"Minutes",1);case r:return h(v+"Seconds",2);case n:return h(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,s){var o,u=A.p(e),l="set"+(this.$u?"UTC":""),f=((o={}).day=l+"Date",o[d]=l+"Date",o[a]=l+"Month",o[c]=l+"FullYear",o[i]=l+"Hours",o[r]=l+"Minutes",o[n]=l+"Seconds",o[t]=l+"Milliseconds",o)[u],h="day"===u?this.$D+(s-this.$W):s;if(u===a||u===c){var m=this.clone().set(d,1);m.$d[f](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[A.p(e)]()},h.add=function(e,t){var o,d=this;e=Number(e);var u=A.p(t),l=function(t){var n=x(d);return A.w(n.date(n.date()+Math.round(t*e)),d)};if(u===a)return this.set(a,this.$M+e);if(u===c)return this.set(c,this.$y+e);if("day"===u)return l(1);if(u===s)return l(7);var f=((o={})[r]=6e4,o[i]=36e5,o[n]=1e3,o)[u]||1,h=this.$d.getTime()+e*f;return A.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=A.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,d=n.months,l=n.meridiem,h=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},m=function(e){return A.s(s%12||12,e,"0")},p=l||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return A.s(t.$y,4,"0");case"M":return o+1;case"MM":return A.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,d,3);case"MMMM":return h(d,o);case"D":return t.$D;case"DD":return A.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,c,2);case"ddd":return h(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(s);case"HH":return A.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(s,a,!0);case"A":return p(s,a,!1);case"m":return String(a);case"mm":return A.s(a,2,"0");case"s":return String(t.$s);case"ss":return A.s(t.$s,2,"0");case"SSS":return A.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,d){var u,l=this,f=A.p(t),h=x(e),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,g=function(){return A.m(l,h)};switch(f){case c:u=g()/12;break;case a:u=g();break;case o:u=g()/3;break;case s:u=(p-m)/6048e5;break;case"day":u=(p-m)/864e5;break;case i:u=p/36e5;break;case r:u=p/6e4;break;case n:u=p/1e3;break;default:u=p}return d?u:A.a(u)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return p[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=b(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return A.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,x.prototype=y,[["$ms",t],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",c],["$D",d]].forEach(function(e){y[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,w,x),e.$i=!0),x},x.locale=b,x.isDayjs=v,x.unix=function(e){return x(1e3*e)},x.en=p[m],x.Ls=p,x.p={},x)},26538:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(57437),i=n(18785),s=n(62177),a=n(20703),o=n(12165),c=n(8792),d=n(2265);function u(e){let{item:t}=e,[n,i]=(0,d.useState)(t.img);return(0,r.jsxs)(c.default,{onClick:()=>o.Z.setLocalStorage("currentNFT",t),href:{pathname:"/detail/"},className:"w-[250px] rounded-lg shadow-lg overflow-hidden mr-5 last:mr-0 cursor-pointer relative top-0 hover:-top-2 transition-[top] duration-100 ease-in",children:[(0,r.jsx)(a.default,{src:n,width:250,height:250,alt:"Picture of the author",onError:()=>i("https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000")}),(0,r.jsxs)("div",{className:"px-2 py-4 relative pt-12",children:[(0,r.jsxs)("div",{className:"w-[90%] text-sm rounded-2xl text-[#fff] flex flex-col items-center font-bold py-1 px-4 bg-[#f87171] overflow-hidden absolute z-1 -top-8 left-[5%]",children:[(0,r.jsxs)("div",{className:"w-full flex items-center overflow-hidden",children:[(0,r.jsx)(s.lFK,{className:"mr-2"}),(0,r.jsx)("span",{children:t.deadline})]}),(0,r.jsxs)("div",{className:"w-full flex items-center overflow-hidden",children:[(0,r.jsx)("span",{className:"mr-2",children:"bid:"}),(0,r.jsx)("span",{children:t.currentBid})]}),(0,r.jsxs)("div",{className:"w-full flex items-center overflow-hidden",children:[(0,r.jsx)("span",{className:"mr-2",children:"bidder:"}),(0,r.jsx)("span",{className:"flex-1 truncate",children:t.currentBidder})]})]}),(0,r.jsx)("p",{className:"font-bold text-lg mb-1",children:t.name}),(0,r.jsxs)("div",{className:"text-xs",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("p",{children:"Starting Price:"}),(0,r.jsx)("p",{children:t.price})]}),(0,r.jsxs)("div",{className:"flex mt-0.5",children:[(0,r.jsx)("p",{children:"Type："}),(0,r.jsx)("p",{children:t.tags.join(" \xb7 ")})]})]})]})]})}var l=n(33181);let f=e=>{let{url:t,query:n}=e,{data:r,loading:i,error:s,postData:a}=(0,l.q)(t);return(0,d.useEffect)(()=>{(async()=>{try{a({query:n})}catch(e){console.error(e)}finally{console.log("finally")}})()},[]),{data:r,loading:i,error:s}};var h=n(55641),m=n(89539),p=n.n(m);function g(){let{data:e,loading:t,error:n}=f({url:"https://api.studio.thegraph.com/query/76625/auctionclub0/version/latest",query:"\n    {\n      auctionCancelleds {\n        id\n        auctionId\n        blockNumber\n        blockTimestamp\n      }\n      highestBidIncreaseds{\n        id\n        bidder\n        amount\n        transactionHash\n      }\n      auctionCreateds{\n        id\n        tokenId\n        auctionId\n        seller\n        startingPrice\n        _startTime\n        transactionHash\n      }\n    }\n    "}),{data:a,loading:o,error:c}=f({url:"https://api.studio.thegraph.com/query/76625/auctionclubdutch/version/latest",query:"\n    {\n  auctionEndeds {\n    id\n    auctionId\n    buyer\n    finalPrice\n    \n  }\n  auctionFaileds{\n    id\n    auctionId\n    blockNumber\n    blockTimestamp\n  }\n  auctionStarteds{\n    id\n    \n    auctionId\n    seller\n    tokenId\n    startPrice  \n    reservePrice\n    nftAddress  \n  }\n}\n    "}),{nfts:l,loading:m,error:g}=(0,h.yh)("0xcef6df73404baeccdaa5986615233b0e7e442e2d"),[v,b]=(0,d.useState)([]),[x,A]=(0,d.useState)(!0),[w,y]=(0,d.useState)(null),[S,$]=(0,d.useState)([{tokenId:1,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"1.23ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:2,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"1.23ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x8888888111122222233444444",deadline:"2024-01-01 00:00:00"},{tokenId:3,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"1.23ETH",tags:["英式拍卖","pleasure","狂热"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:7,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"10ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:4,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"0.5ETH",tags:["荷兰拍卖","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:5,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"6ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"},{tokenId:6,contractAddress:"0xxxx",img:"https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",price:"1.23ETH",tags:["荷兰拍卖","pleasure","狂热","慈善"],currentBid:"10ETH",currentBidder:"0x111112222",deadline:"2024-01-01 00:00:00"}]);return((0,d.useEffect)(()=>{if(console.log(w,"dddd"),!t&&!m&&e&&l&&a)try{let t=l.map(t=>{let n=null==e?void 0:e.data.auctionCreateds.find(e=>e.tokenId===t.tokenId),r=a.data.auctionStarteds.find(e=>e.tokenId===t.tokenId);return{tokenId:parseInt(t.tokenId.toString(),10),contractAddress:t.contractAddress,img:t.img,price:n?n.startingPrice:r?r.startPrice:t.price,tags:t.tags,currentBid:"N/A",currentBidder:"N/A",auctionId:n?n.auctionId:r?r.auctionId:"",deadline:n?p()(1e3*n._startTime).format("YYYY-MM-DD HH:mm"):r?p()(1e3*r._startTime).format("YYYY-MM-DD HH:mm"):t.deadline,name:t.name,description:t.description,isOwner:t.isOwner,auctionType:n?"British":"Dutch"}}).filter(t=>(null==e?void 0:e.data.auctionCreateds.some(e=>e.tokenId===t.tokenId.toString()))||a.data.auctionStarteds.some(e=>e.tokenId===t.tokenId.toString()));b(t),$(t)}catch(e){y(e.message)}finally{A(!1)}},[t,m,e,l,a]),t||m||x)?(0,r.jsxs)("div",{className:" h-[40vh] hover:shadow-lg shadow-md  flex-col flex justify-center items-center",children:[(0,r.jsx)(i.$j,{size:"3"}),(0,r.jsx)(i.xv,{size:"2",className:"text-gray-500 font-bold",children:"loading..."})]}):n||g||w?(0,r.jsxs)("p",{children:["Error:",n||g||w]}):(console.log(v,l,e,w,a,"``````````````````````````"),(0,r.jsx)("div",{className:"my-20 flex place-content-center relative",children:(0,r.jsxs)("div",{className:"md:max-w-screen-lg flex-1 2xl:max-w-7xl px-6 md:px-10",children:[(0,r.jsxs)("div",{className:"flex justify-between font-bold text-lg",children:[(0,r.jsx)("div",{children:"Market"}),(0,r.jsxs)("div",{className:"flex items-center cursor-pointer",children:["more",(0,r.jsx)(s.XCv,{className:"w-5 h-5"})]})]}),(0,r.jsx)(i.xr,{size:"3",radius:"full",type:"always",scrollbars:"horizontal",children:(0,r.jsx)("div",{className:"flex justify-start mb-5 mt-5",children:S.map((e,t)=>(0,r.jsx)(u,{item:e},t))})})]})}))}},55641:function(e,t,n){"use strict";n.d(t,{hj:function(){return o},yh:function(){return c}});var r=n(2265),i=n(33181),s=n(39296);let a=async e=>(0,i.r)(e),o=e=>{let[t,n]=(0,r.useState)([]),[o,c]=(0,r.useState)(!0),[d,u]=(0,r.useState)(null),l=(0,s.m)();return(0,r.useEffect)(()=>{let t=e===(null==l?void 0:l.address);console.log("isOwner:",t),(async()=>{try{let r=(await (0,i.r)("https://testnets-api.opensea.io/api/v2/chain/sepolia/account/".concat(e.toString(),"/nfts"))).nfts.map(async e=>{if(!e.metadata_url)return{tokenId:e.identifier,contractAddress:e.contract,img:"",price:"N/A",tags:[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:"Unknown",description:"No description available",isOwner:t};let n=await a(e.metadata_url);return{tokenId:e.identifier,contractAddress:e.contract,img:n.image||"",price:"N/A",tags:n.attributes?n.attributes.map(e=>"".concat(e.trait_type||"N/A",":").concat(e.value||"N/A")):[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:n.name||"Unknown",description:n.description||"No description available",isOwner:t}}),s=await Promise.all(r);n(s)}catch(e){u(e.message)}finally{c(!1)}})()},[e]),{nfts:t,loading:o,error:d}},c=e=>{let[t,n]=(0,r.useState)([]),[o,c]=(0,r.useState)(!0),[d,u]=(0,r.useState)(null),l=(0,s.m)();return(0,r.useEffect)(()=>{let t=e===(null==l?void 0:l.address);console.log("isOwner:",t),(async()=>{try{let r=(await (0,i.r)("https://testnets-api.opensea.io/api/v2/chain/sepolia/contract/".concat(e.toString(),"/nfts"))).nfts.map(async e=>{if(!e.metadata_url)return{tokenId:e.identifier,contractAddress:e.contract,img:"",price:"N/A",tags:[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:"Unknown",description:"No description available",isOwner:t};let n=await a(e.metadata_url);return{tokenId:e.identifier,contractAddress:e.contract,img:n.image||"",price:"N/A",tags:n.attributes?n.attributes.map(e=>"".concat(e.trait_type||"N/A",":").concat(e.value||"N/A")):[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:n.name||"Unknown",description:n.description||"No description available",isOwner:t}}),s=await Promise.all(r);n(s)}catch(e){u(e.message)}finally{c(!1)}})()},[e]),{nfts:t,loading:o,error:d}}},33181:function(e,t,n){"use strict";n.d(t,{q:function(){return s},r:function(){return i}});var r=n(2265);let i=async e=>{let t=await fetch(e);if(!t.ok)throw Error("Failed to fetch: ".concat(t.statusText));return t.json()},s=e=>{let[t,n]=(0,r.useState)(null),[i,s]=(0,r.useState)(!1),[a,o]=(0,r.useState)(null);return{data:t,loading:i,error:a,postData:async t=>{s(!0),o(null);try{let r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error("Error: ".concat(r.status));let i=await r.json();n(i)}catch(e){o(e.message)}finally{s(!1)}}}}},12165:function(e,t){"use strict";class n{static setLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}static getLocalStorage(e){{let t=localStorage.getItem(e);return t?JSON.parse(t):null}}static removeLocalStorage(e){localStorage.removeItem(e)}static setSessionStorage(e,t){sessionStorage.setItem(e,JSON.stringify(t))}static getSessionStorage(e){{let t=sessionStorage.getItem(e);return t?JSON.parse(t):null}}static removeSessionStorage(e){sessionStorage.removeItem(e)}static setCookie(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;{let r=new Date;r.setTime(r.getTime()+864e5*n);let i="expires=".concat(r.toUTCString());document.cookie="".concat(e,"=").concat(t,"; ").concat(i,"; path=/")}}static getCookie(e){{let t="".concat(e,"="),n=document.cookie.split(";");for(let e=0;e<n.length;e++){let r=n[e];for(;" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null}}static deleteCookie(e){document.cookie="".concat(e,"=; Max-Age=-99999999;")}}t.Z=n},930:function(e,t,n){"use strict";n.r(t),t.default={src:"https://auctionclub.github.io/auction_frontend//_next/static/media/logo.3ffa1175.png",height:1024,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ABM/eABBhgBDmEp7r0d7sABFmABEihNBewAAIWNRXXaeopW3xMC8yMmfpKRTX3kAJGUAAABQf3ljycKSlbPKl5iKztGug4Z6AABMAAAARo57SqCSboeGg3Rtdr/FnqKgdwAAPAAcJT1NRESQbB6DdVmJhHzHs2t6d1kABjwAQTc0lpBrqZttioVvk41wtqh7nJt9S0tDAAAAJ5eFVqaecqaecrKsgcXEmLCqgQQAIAABECwAABIAAAA4JSE3JCAjAAceBBcADCs7jUpTwtl1DwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},41010:function(e,t,n){"use strict";n.r(t),n.d(t,{AspectRatio:function(){return a}});var r=n(14749),i=n(2265),s=n(29586);let a=(0,i.forwardRef)((e,t)=>{let{ratio:n=1,style:a,...o}=e;return(0,i.createElement)("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/n}%`},"data-radix-aspect-ratio-wrapper":""},(0,i.createElement)(s.WV.div,(0,r.Z)({},o,{ref:t,style:{...a,position:"absolute",top:0,right:0,bottom:0,left:0}})))})},34994:function(e,t,n){"use strict";n.r(t),n.d(t,{Portal:function(){return r.h}});var r=n(37881)},38553:function(e,t,n){"use strict";n.r(t),n.d(t,{VisuallyHidden:function(){return r.T}});var r=n(11780)}},function(e){e.O(0,[8310,643,9198,8792,2971,8069,1744],function(){return e(e.s=87750)}),_N_E=e.O()}]);