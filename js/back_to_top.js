$(document).ready(function(){var s=$("#back-to-top"),a=$("footer.footer"),l=$(".column-main"),d=$(".column-left"),c=$(".column-right"),r=0,i=null,b={base:{classname:"card has-text-centered",left:"",width:64,bottom:20}};function h(e){if(null===i||(t=i,n=e,[].concat(Object.keys(t),Object.keys(n)).some(function(e){return!Object.prototype.hasOwnProperty.call(t,e)||!Object.prototype.hasOwnProperty.call(n,e)||n[e]!==t[e]}))){var t,n,o;for(o in s.attr("class",e.classname),e)"classname"!==o&&s.css(o,e[o]);i=e}}function m(){return 1078<=window.innerWidth}function p(){return 0<c.length}function u(){return $(window).scrollTop()+$(window).height()}function w(){return s.outerHeight(!0)}function e(){var e,t,n,o,i;m()||768<=window.innerWidth&&!m()&&!(0<d.length)&&p()?(o=void 0,e=(l.outerWidth()-l.width())/2,t=$(window).width()-s.outerWidth(!0)-20,n=a.offset().top+w()/2+20,o=0===$(window).scrollTop()||u()<(p()?Math.max.apply(null,c.find(".widget").map(function(){return $(this).offset().top+$(this).outerHeight(!0)})):0)+e+w()?b["desktop-hidden"]:u()<n?b["desktop-visible"]:Object.assign({},b["desktop-dock"],{bottom:u()-n+20}),i=l.offset().left+l.outerWidth()+e,h(o=Object.assign({},o,{left:Math.min(i,t)}))):($(window).scrollTop()<r&&0<$(window).scrollTop()?h(b["mobile-visible"]):h(b["mobile-hidden"]),r=$(window).scrollTop())}b["desktop-hidden"]=Object.assign({},b.base,{classname:b.base.classname+" rise-up"}),b["desktop-visible"]=Object.assign({},b["desktop-hidden"],{classname:b["desktop-hidden"].classname+" fade-in"}),b["desktop-dock"]=Object.assign({},b["desktop-visible"],{classname:b["desktop-visible"].classname+" fade-in is-rounded",width:40}),b["mobile-hidden"]=Object.assign({},b.base,{classname:b.base.classname+" fade-in",right:20}),b["mobile-visible"]=Object.assign({},b["mobile-hidden"],{classname:b["mobile-hidden"].classname+" rise-up"}),e(),$(window).resize(e),$(window).scroll(e),$("#back-to-top").on("click",function(){$("body, html").animate({scrollTop:0},400)})});