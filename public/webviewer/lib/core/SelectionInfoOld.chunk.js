/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[2],{344:function(ha,da,h){h.r(da);var ca=h(353),ea=h(90),fa=h(31),ba=h(55);ha=function(){function h(){this.jb=this.Xd=this.xb=this.Mb=null;this.ke=!1}h.prototype.clear=function(){Object(fa.b)(this.Mb);this.xb="";Object(fa.b)(this.Xd);Object(fa.b)(this.jb);this.ke=!1};h.prototype.sc=function(){this.Mb=[];this.Xd=[];this.jb=[];this.ke=!1};h.prototype.pu=function(h){for(var w="",f=0,n,r,e;f<h.length;)n=h.charCodeAt(f),9==n?(w+=String.fromCharCode(10),
f++):128>n?(w+=String.fromCharCode(n),f++):191<n&&224>n?(r=h.charCodeAt(f+1),w+=String.fromCharCode((n&31)<<6|r&63),f+=2):(r=h.charCodeAt(f+1),e=h.charCodeAt(f+2),w+=String.fromCharCode((n&15)<<12|(r&63)<<6|e&63),f+=3);return w};h.prototype.initData=function(h){this.Mb=[];this.Xd=[];this.jb=[];this.ke=!1;try{var w=new ba.a(h);this.xb="";w.ya();if(!w.advance())return;var f=w.current.textContent;this.xb=f=this.pu(f);Object(fa.b)(this.Xd);w.advance();f=w.current.textContent;for(var n=f.split(","),r=
Object(ea.a)(n);r.Aj();){var e=r.current;try{var x=parseInt(e.trim());this.Xd.push(x)}catch(na){}}Object(fa.b)(this.Mb);w.advance();f=w.current.textContent;n=f.split(",");for(var y=Object(ea.a)(n);y.Aj();){e=y.current;try{x=parseFloat(e.trim()),this.Mb.push(x)}catch(na){}}Object(fa.b)(this.jb);w.advance();f=w.current.textContent;n=f.split(",");h=[];w=[];f=0;for(var z=Object(ea.a)(n);z.Aj();){e=z.current;switch(e){case "Q":f=1;break;case "R":f=2;break;case "S":f=3;break;default:f=0}if(f)h.push(0),
w.push(f);else try{x=parseFloat(e.trim()),h.push(x),w.push(f)}catch(na){return}}f=0;var ca=h.length;for(z=e=n=0;z<ca;){var da=w[z];if(0<da)f=da,++z,3===f&&(n=h[z],e=h[z+1],z+=2);else if(1===f)for(x=0;8>x;++x)this.jb.push(h[z++]);else if(2===f){var ha=h[z++];var qa=h[z++];var ma=h[z++];var ua=h[z++];this.jb.push(ha);this.jb.push(qa);this.jb.push(ma);this.jb.push(qa);this.jb.push(ma);this.jb.push(ua);this.jb.push(ha);this.jb.push(ua)}else 3===f&&(ha=h[z++],qa=n,ma=h[z++],ua=e,this.jb.push(ha),this.jb.push(qa),
this.jb.push(ma),this.jb.push(qa),this.jb.push(ma),this.jb.push(ua),this.jb.push(ha),this.jb.push(ua))}}catch(na){return}this.xb.length&&this.xb.length===this.Xd.length&&8*this.xb.length===this.jb.length&&(this.ke=!0)};h.prototype.ready=function(){return this.ke};h.prototype.Or=function(){var h=new ca.a;if(!this.Mb.length)return h.Uf(this.Mb,-1,this.xb,this.jb,0),h;h.Uf(this.Mb,1,this.xb,this.jb,1);return h};h.prototype.Ve=function(){return this.jb};h.prototype.getData=function(){return{m_Struct:this.Mb,
m_Str:this.xb,m_Offsets:this.Xd,m_Quads:this.jb,m_Ready:this.ke}};return h}();da["default"]=ha},353:function(ha,da,h){var ca=h(53),ea=h(197),fa=h(365);ha=function(){function h(){this.Dd=0;this.bb=this.ta=this.se=null;this.mc=0;this.Cd=null}h.prototype.sc=function(){this.Dd=-1;this.mc=0;this.Cd=[]};h.prototype.Uf=function(h,x,w,f,n){this.Dd=x;this.mc=n;this.Cd=[];this.se=h;this.ta=w;this.bb=f};h.prototype.Ga=function(h){return this.Dd===h.Dd};h.prototype.Vh=function(){return Math.abs(this.se[this.Dd])};
h.prototype.yj=function(){return 0<this.se[this.Dd]};h.prototype.zc=function(){var h=this.yj()?6:10,x=new fa.a;x.Uf(this.se,this.Dd+h,this.Dd,this.ta,this.bb,1);return x};h.prototype.HJ=function(h){if(0>h||h>=this.Vh()){var x=new fa.a;x.Uf(this.se,-1,-1,this.ta,this.bb,0);return x}var w=this.yj()?6:10,f=this.yj()?5:11;x=new fa.a;x.Uf(this.se,this.Dd+w+f*h,this.Dd,this.ta,this.bb,1+h);return x};h.prototype.vf=function(){var z=this.Dd+parseInt(this.se[this.Dd+1]);if(z>=this.se.length){var x=new h;x.Uf(this.se,
-1,this.ta,this.bb,0);return x}x=new h;x.Uf(this.se,z,this.ta,this.bb,this.mc+1);return x};h.prototype.Zb=function(h){if(this.yj())h.ea=this.se[this.Dd+2+0],h.aa=this.se[this.Dd+2+1],h.fa=this.se[this.Dd+2+2],h.ca=this.se[this.Dd+2+3];else{for(var x=1.79769E308,w=ca.a.MIN,f=1.79769E308,n=ca.a.MIN,r=0;4>r;++r){var e=this.se[this.Dd+2+2*r],z=this.se[this.Dd+2+2*r+1];x=Math.min(x,e);w=Math.max(w,e);f=Math.min(f,z);n=Math.max(n,z)}h.ea=x;h.aa=f;h.fa=w;h.ca=n}};h.prototype.Uh=function(){if(this.Cd.length)return this.Cd[0];
var h=new ea.a,x=new ea.a,w=new fa.a;w.sc();var f=this.zc(),n=new fa.a;n.sc();for(var r=this.zc();!r.Ga(w);r=r.Te())n=r;w=Array(8);r=Array(8);f.he(0,w);h.x=(w[0]+w[2]+w[4]+w[6])/4;h.y=(w[1]+w[3]+w[5]+w[7])/4;n.he(n.Sc()-1,r);x.x=(r[0]+r[2]+r[4]+r[6])/4;x.y=(r[1]+r[3]+r[5]+r[7])/4;.01>Math.abs(h.x-x.x)&&.01>Math.abs(h.y-x.y)&&this.Cd.push(0);h=Math.atan2(x.y-h.y,x.x-h.x);h*=180/3.1415926;0>h&&(h+=360);this.Cd.push(h);return 0};return h}();da.a=ha},365:function(ha,da,h){var ca=h(353),ea=h(108),fa=h(53);
ha=function(){function h(){this.Ei=this.fd=0;this.bb=this.ta=this.Mb=null;this.mc=0}h.prototype.sc=function(){this.Ei=this.fd=-1;this.mc=0};h.prototype.Uf=function(h,x,w,f,n,r){this.fd=x;this.Ei=w;this.Mb=h;this.ta=f;this.bb=n;this.mc=r};h.prototype.Ga=function(h){return this.fd===h.fd};h.prototype.Sc=function(){return parseInt(this.Mb[this.fd])};h.prototype.ah=function(){return parseInt(this.Mb[this.fd+2])};h.prototype.Bb=function(){return parseInt(this.Mb[this.fd+1])};h.prototype.yj=function(){return 0<
this.Mb[this.Ei]};h.prototype.zV=function(){return Math.abs(this.Mb[this.Ei])};h.prototype.Te=function(){var z=this.yj(),x=z?5:11;if(this.fd>=this.Ei+(z?6:10)+(this.zV()-1)*x)return z=new h,z.Uf(this.Mb,-1,-1,this.ta,this.bb,0),z;z=new h;z.Uf(this.Mb,this.fd+x,this.Ei,this.ta,this.bb,this.mc+1);return z};h.prototype.aV=function(h){var x=this.Sc();return 0>h||h>=x?-1:parseInt(this.Mb[this.fd+1])+h};h.prototype.he=function(h,x){h=this.aV(h);if(!(0>h)){var w=new ca.a;w.Uf(this.Mb,this.Ei,this.ta,this.bb,
0);if(w.yj()){var f=new ea.a;w.Zb(f);w=f.aa<f.ca?f.aa:f.ca;f=f.aa>f.ca?f.aa:f.ca;h*=8;x[0]=this.bb[h];x[1]=w;x[2]=this.bb[h+2];x[3]=x[1];x[4]=this.bb[h+4];x[5]=f;x[6]=this.bb[h+6];x[7]=x[5]}else for(h*=8,w=0;8>w;++w)x[w]=this.bb[h+w]}};h.prototype.Fd=function(h){var x=new ca.a;x.Uf(this.Mb,this.Ei,this.ta,this.bb,0);if(x.yj()){var w=this.Mb[this.fd+3],f=this.Mb[this.fd+4];if(w>f){var n=w;w=f;f=n}n=new ea.a;x.Zb(n);x=n.aa<n.ca?n.aa:n.ca;n=n.aa>n.ca?n.aa:n.ca;h[0]=w;h[1]=x;h[2]=f;h[3]=x;h[4]=f;h[5]=
n;h[6]=w;h[7]=n}else for(w=this.fd+3,f=0;8>f;++f)h[f]=this.Mb[w+f]};h.prototype.Zb=function(h){var x=new ca.a;x.Uf(this.Mb,this.Ei,this.ta,this.bb,0);if(x.yj()){var w=this.Mb[this.fd+3],f=this.Mb[this.fd+4];if(w>f){var n=w;w=f;f=n}n=new ea.a;x.Zb(n);x=n.aa<n.ca?n.aa:n.ca;n=n.aa>n.ca?n.aa:n.ca;h[0]=w;h[1]=x;h[2]=f;h[3]=n}else{w=1.79769E308;f=fa.a.MIN;x=1.79769E308;n=fa.a.MIN;for(var r=this.fd+3,e=0;4>e;++e){var z=this.Mb[r+2*e],y=this.Mb[r+2*e+1];w=Math.min(w,z);f=Math.max(f,z);x=Math.min(x,y);n=Math.max(n,
y)}h[0]=w;h[1]=x;h[2]=f;h[3]=n}};return h}();da.a=ha}}]);}).call(this || window)