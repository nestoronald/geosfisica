(function(b,g){var e=b.UIkit||{};if(!e.fn){e.fn=function(a,f){var d=arguments,c=a.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),g=c[1],m=c[2];return!e[g]?(b.error("UIkit component ["+g+"] does not exist."),this):this.each(function(){var a=b(this),c=a.data(g);c||a.data(g,c=new e[g](this,m?void 0:f));m&&c[m].apply(c,Array.prototype.slice.call(d,1))})};e.support={};var c=e.support,a;a:{a=g.body||g.documentElement;var f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",
transition:"transitionend"},d;for(d in f)if(void 0!==a.style[d]){a=f[d];break a}a=void 0}c.transition=a&&{end:a};e.Utils={};e.Utils.debounce=function(a,b,f){var d;return function(){var c=this,e=arguments,g=f&&!d;clearTimeout(d);d=setTimeout(function(){d=null;f||a.apply(c,e)},b);g&&a.apply(c,e)}};e.Utils.options=function(a){if(b.isPlainObject(a))return a;var f=a.indexOf("{"),d={};if(-1!=f)try{d=(new Function("","var json = "+a.substr(f)+"; return JSON.parse(JSON.stringify(json));"))()}catch(c){}return d};
b.UIkit=e;b.fn.uk=e.fn;b.UIkit.langdirection="rtl"==b("html").attr("dir")?"right":"left"}})(jQuery,document);
(function(b){function g(a,b,f,d){var c=Math.abs(a-b),l=Math.abs(f-d);return c>=l?0<a-b?"Left":"Right":0<f-d?"Up":"Down"}function e(){h=null;a.last&&(a.el.trigger("longTap"),a={})}function c(){f&&clearTimeout(f);d&&clearTimeout(d);l&&clearTimeout(l);h&&clearTimeout(h);f=d=l=h=null;a={}}var a={},f,d,l,h;b(document).ready(function(){var j,k;b(document.body).bind("touchstart",function(d){j=Date.now();k=j-(a.last||j);a.el=b("tagName"in d.originalEvent.touches[0].target?d.originalEvent.touches[0].target:
d.originalEvent.touches[0].target.parentNode);f&&clearTimeout(f);a.x1=d.originalEvent.touches[0].pageX;a.y1=d.originalEvent.touches[0].pageY;0<k&&250>=k&&(a.isDoubleTap=!0);a.last=j;h=setTimeout(e,750)}).bind("touchmove",function(b){h&&clearTimeout(h);h=null;a.x2=b.originalEvent.touches[0].pageX;a.y2=b.originalEvent.touches[0].pageY}).bind("touchend",function(){h&&clearTimeout(h);h=null;a.x2&&30<Math.abs(a.x1-a.x2)||a.y2&&30<Math.abs(a.y1-a.y2)?l=setTimeout(function(){a.el.trigger("swipe");a.el.trigger("swipe"+
g(a.x1,a.x2,a.y1,a.y2));a={}},0):"last"in a&&(d=setTimeout(function(){var d=b.Event("tap");d.cancelTouch=c;a.el.trigger(d);a.isDoubleTap?(a.el.trigger("doubleTap"),a={}):f=setTimeout(function(){f=null;a.el.trigger("singleTap");a={}},250)},0))}).bind("touchcancel",c);b(window).bind("scroll",c)});"swipe swipeLeft swipeRight swipeUp swipeDown doubleTap tap singleTap longTap".split(" ").forEach(function(a){b.fn[a]=function(b){return this.bind(a,b)}})})(jQuery);
(function(b,g){var e=function(c,a){var f=this;this.options=b.extend({},this.options,a);this.element=b(c).on("click",this.options.trigger,function(a){a.preventDefault();f.close()})};b.extend(e.prototype,{options:{fade:!0,duration:200,trigger:".uk-alert-close"},close:function(){function b(){a.trigger("closed").remove()}var a=this.element.trigger("close");this.options.fade?a.css("overflow","hidden").css("max-height",a.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,
"margin-bottom":0},this.options.duration,b):b()}});g.alert=e;b(document).on("click.alert.uikit","[data-uk-alert]",function(c){c.preventDefault();var a=b(this);a.data("alert")||(a.data("alert",new e(a,g.Utils.options(a.data("uk-alert")))),b(c.target).is(a.data("alert").options.trigger)&&a.data("alert").close())})})(jQuery,jQuery.UIkit);
(function(b,g){var e=function(a,d){var c=this,e=b(a);this.options=b.extend({},this.options,d);this.element=e.on("click",this.options.target,function(a){a.preventDefault();e.find(c.options.target).not(this).removeClass("uk-active").blur();e.trigger("change",[b(this).addClass("uk-active")])})};b.extend(e.prototype,{options:{target:".uk-button"},getSelected:function(){this.element.find(".uk-active")}});var c=function(a,d){var c=b(a);this.options=b.extend({},this.options,d);this.element=c.on("click",
this.options.target,function(a){a.preventDefault();c.trigger("change",[b(this).toggleClass("uk-active").blur()])})};b.extend(c.prototype,{options:{target:".uk-button"},getSelected:function(){this.element.find(".uk-active")}});var a=function(a){var d=this;this.element=b(a).on("click",function(a){a.preventDefault();d.toggle();d.element.blur()})};b.extend(a.prototype,{toggle:function(){this.element.toggleClass("uk-active")}});g.button=a;g["button-checkbox"]=c;g["button-radio"]=e;b(document).on("click.button-radio.uikit",
"[data-uk-button-radio]",function(a){var d=b(this);d.data("button-radio")||(d.data("button-radio",new e(d,g.Utils.options(d.data("uk-button-radio")))),b(a.target).is(d.data("button-radio").options.target)&&b(a.target).trigger("click"))});b(document).on("click.button-checkbox.uikit","[data-uk-button-checkbox]",function(a){var d=b(this);d.data("button-checkbox")||(d.data("button-checkbox",new c(d,g.Utils.options(d.data("uk-button-checkbox")))),b(a.target).is(d.data("button-checkbox").options.target)&&
b(a.target).trigger("click"))});b(document).on("click.button.uikit","[data-uk-button]",function(){var f=b(this);f.data("button")||f.data("button",new a(f,f.data("uk-button"))).trigger("click")})})(jQuery,jQuery.UIkit);
(function(b,g){var e=!1,c=function(a,f){var d=this;this.options=b.extend({},this.options,f);this.element=b(a);this.dropdown=this.element.find(".uk-dropdown");this.centered=this.dropdown.hasClass("uk-dropdown-center");this.justified=this.options.justify?b(this.options.justify):!1;this.boundary=b(this.options.boundary);this.boundary.length||(this.boundary=b(window));if("click"==this.options.mode)this.element.on("click",function(a){b(a.target).parents(".uk-dropdown").length||a.preventDefault();e&&e[0]!=
d.element[0]&&e.removeClass("uk-open");if(d.element.hasClass("uk-open")){if(b(a.target).is("a")||!d.element.find(".uk-dropdown").find(a.target).length)d.element.removeClass("uk-open"),e=!1}else d.checkDimensions(),d.element.addClass("uk-open"),e=d.element,b(document).off("click.outer.dropdown"),setTimeout(function(){b(document).on("click.outer.dropdown",function(a){if(e&&e[0]==d.element[0]&&(b(a.target).is("a")||!d.element.find(".uk-dropdown").find(a.target).length))e.removeClass("uk-open"),b(document).off("click.outer.dropdown")})},
10)});else this.element.on("mouseenter",function(){d.remainIdle&&clearTimeout(d.remainIdle);e&&e[0]!=d.element[0]&&e.removeClass("uk-open");d.checkDimensions();d.element.addClass("uk-open");e=d.element}).on("mouseleave",function(){d.remainIdle=setTimeout(function(){d.element.removeClass("uk-open");d.remainIdle=!1;e&&e[0]==d.element[0]&&(e=!1)},d.options.remaintime)})};b.extend(c.prototype,{remainIdle:!1,options:{mode:"hover",remaintime:800,justify:!1,boundary:b(window)},checkDimensions:function(){var a=
this.dropdown.css("margin-"+b.UIkit.langdirection,"").css("min-width",""),f=a.show().offset(),d=a.outerWidth(),c=this.boundary.width(),e=this.boundary.offset()?this.boundary.offset().left:0;if(this.centered&&(a.css("margin-"+b.UIkit.langdirection,-1*(parseFloat(d)/2-a.parent().width()/2)),f=a.offset(),d+f.left>c||0>f.left))a.css("margin-"+b.UIkit.langdirection,""),f=a.offset();if(this.justified&&this.justified.length){var g=this.justified.outerWidth();a.css("min-width",g);"right"==b.UIkit.langdirection?
(f=c-(this.justified.offset().left+g),g=c-(a.offset().left+a.outerWidth()),a.css("margin-right",f-g)):a.css("margin-left",this.justified.offset().left-f.left);f=a.offset()}d+(f.left-e)>c&&(a.addClass("uk-dropdown-flip"),f=a.offset());0>f.left&&a.addClass("uk-dropdown-stack");a.css("display","")}});g.dropdown=c;b(document).on("mouseenter.dropdown.uikit","[data-uk-dropdown]",function(){var a=b(this);a.data("dropdown")||(a.data("dropdown",new c(a,g.Utils.options(a.data("uk-dropdown")))),"hover"==a.data("dropdown").options.mode&&
a.trigger("mouseenter"))})})(jQuery,jQuery.UIkit);
(function(b,g){var e=b(window),c=function(a,d){var c=this;this.options=b.extend({},this.options,d);this.element=b(a);this.columns=this.element.children();this.elements=this.options.target?this.element.find(this.options.target):this.columns;this.columns.length&&e.bind("resize orientationchange",function(){var a=function(){c.match()};b(function(){a();e.on("load",a)});return g.Utils.debounce(a,150)}())};b.extend(c.prototype,{options:{target:!1},match:function(){this.revert();var a=this.columns.filter(":visible:first");
if(a.length){var d=0,c=this;if(!(100<=Math.ceil(100*parseFloat(a.css("width"))/parseFloat(a.parent().css("width")))))return this.elements.each(function(){d=Math.max(d,b(this).outerHeight())}).each(function(a){var f=b(this),e="border-box"==f.css("box-sizing")?"outerHeight":"height";a=c.columns.eq(a);e=f.height()+(d-a[e]());f.css("min-height",e+"px")}),this}},revert:function(){this.elements.css("min-height","");return this}});var a=function(a){var d=this;this.element=b(a);this.columns=this.element.children();
this.columns.length&&e.bind("resize orientationchange",function(){var a=function(){d.process()};b(function(){a();e.on("load",a)});return g.Utils.debounce(a,150)}())};b.extend(a.prototype,{process:function(){this.revert();var a=!1,d=this.columns.filter(":visible:first"),c=d.length?d.offset().top:!1;if(!1!==c)return this.columns.each(function(){var d=b(this);d.is(":visible")&&(a?d.addClass("uk-grid-margin"):d.offset().top!=c&&(d.addClass("uk-grid-margin"),a=!0))}),this},revert:function(){this.columns.removeClass("uk-grid-margin");
return this}});g["grid-match"]=c;g["grid-margin"]=a;b(function(){b("[data-uk-grid-match],[data-uk-grid-margin]").each(function(){var f=b(this);f.is("[data-uk-grid-match]")&&!f.data("grid-match")&&f.data("grid-match",new c(f,g.Utils.options(f.data("uk-grid-match"))));f.is("[data-uk-grid-margin]")&&!f.data("grid-margin")&&f.data("grid-margin",new a(f,g.Utils.options(f.data("uk-grid-margin"))))})})})(jQuery,jQuery.UIkit);
(function(b,g){var e=!1,c=b("html"),a=function(a,f){var c=this;this.element=b(a);this.options=b.extend({keyboard:!0,show:!1,bgclose:!0},f);this.transition=g.support.transition;this.element.on("click",".uk-modal-close",function(a){a.preventDefault();c.hide()}).on("click",function(a){b(a.target)[0]==c.element[0]&&c.options.bgclose&&c.hide()});if(this.options.keyboard)b(document).on("keyup.ui.modal.escape",function(a){e&&(27==a.which&&c.isActive())&&c.hide()})};b.extend(a.prototype,{transition:!1,toggle:function(){this[this.isActive()?
"hide":"show"]()},show:function(){this.isActive()||(e&&e.hide(),this.element.removeClass("uk-open").show(),e=this,c.addClass("uk-modal-page").height(),this.element.addClass("uk-open"))},hide:function(){if(this.isActive())if(g.support.transition){var a=this;this.element.one(g.support.transition.end,function(){a._hide()}).removeClass("uk-open")}else this._hide()},_hide:function(){this.element.hide().removeClass("uk-open");c.removeClass("uk-modal-page");e=!1},isActive:function(){return e==this}});var f=
function(d,c){var f=this,e=b(d);this.options=b.extend({target:e.is("a")?e.attr("href"):!1},c);this.element=e;this.modal=new a(this.options.target,c);e.on("click",function(a){a.preventDefault();f.show()});b.each(["show","hide","isActive"],function(a,b){f[b]=function(){return f.modal[b]()}})};f.Modal=a;g.modal=f;b(document).on("click.modal.uikit","[data-uk-modal]",function(){var a=b(this);a.data("modal")||(a.data("modal",new f(a,g.Utils.options(a.data("uk-modal")))),a.data("modal").show())})})(jQuery,
jQuery.UIkit);
(function(b,g,e){("ontouchstart"in window||window.DocumentTouch&&document instanceof e)&&b("html").addClass("uk-touch");var c={show:function(a){a=b(a);if(a.length){var d=b("html"),e=a.find(".uk-offcanvas-bar:first"),g=e.hasClass("uk-offcanvas-bar-flip")?-1:1,j=-1==g&&b(window).width()<window.innerWidth?window.innerWidth-b(window).width():0,k=window.scrollX,n=window.scrollY;a.addClass("uk-active");d.css("width",d.outerWidth()).addClass("uk-offcanvas-page").width();d.css("margin-"+b.UIkit.langdirection,(e.width()-
j)*g);window.scrollTo(k,n);e.css("left"==b.UIkit.langdirection?-1==g?"right":"left":-1==g?"left":"right",0);a.off(".ukoffcanvas").on("click.ukoffcanvas swipeRight.ukoffcanvas swipeLeft.ukoffcanvas",function(a){var d=b(a.target);if(a.type.match(/swipe/)||!d.hasClass("uk-offcanvas-bar")&&!d.parents(".uk-offcanvas-bar:first").length)a.stopImmediatePropagation(),c.hide()});b(document).on("keydown.offcanvas",function(a){27===a.keyCode&&c.hide()})}},hide:function(a){var d=b("html"),c=b(".uk-offcanvas.uk-active"),
e=c.find(".uk-offcanvas-bar:first");c.length&&(b.UIkit.support.transition&&!a?(d.one(b.UIkit.support.transition.end,function(){d.removeClass("uk-offcanvas-page").css("width","")}).css("margin-"+b.UIkit.langdirection,0),setTimeout(function(){e.one(b.UIkit.support.transition.end,function(){c.removeClass("uk-active")}).css({left:"",right:""})},150)):(d.removeClass("uk-offcanvas-page").css("width","").css("margin-"+b.UIkit.langdirection,""),c.removeClass("uk-active"),e.css({left:"",right:""})),c.off(".ukoffcanvas"),
b(document).off(".ukoffcanvas"))}},a=function(a,d){var e=this,g=b(a);this.options=b.extend({target:g.is("a")?g.attr("href"):!1},d);this.element=g;g.on("click",function(a){a.preventDefault();c.show(e.options.target)})};a.offcanvas=c;g.offcanvas=a;b(document).on("click.offcanvas.uikit","[data-uk-offcanvas]",function(c){c.preventDefault();c=b(this);c.data("offcanvas")||(c.data("offcanvas",new a(c,g.Utils.options(c.data("uk-offcanvas")))),c.trigger("click"))})})(jQuery,jQuery.UIkit,window.DocumentTouch);
(function(b,g){function e(a){a=b(a);var c="auto";if(a.is(":visible"))c=a.outerHeight();else{var d={position:a.css("position"),visibility:a.css("visibility"),display:a.css("display")},c=a.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight();a.css(d)}return c}var c=function(a,c){var d=this;this.options=b.extend({},this.options,c);this.element=b(a).on("click",this.options.toggler,function(a){a.preventDefault();a=b(this);d.open(a.parent()[0]==d.element[0]?a:a.parent("li"))});this.element.find(this.options.lists).each(function(){var a=
b(this),c=a.parent(),f=c.hasClass("uk-active");a.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');c.data("list-container",a.parent());f&&d.open(c,!0)})};b.extend(c.prototype,{options:{toggler:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},open:function(a,c){var d=this.element,g=b(a);this.options.multiple||d.children(".uk-open").not(a).each(function(){b(this).data("list-container")&&b(this).data("list-container").stop().animate({height:0},function(){b(this).parent().removeClass("uk-open")})});
g.toggleClass("uk-open");g.data("list-container")&&(c?g.data("list-container").stop().height(g.hasClass("uk-open")?"auto":0):g.data("list-container").stop().animate({height:g.hasClass("uk-open")?e(g.data("list-container").find("ul:first")):0}))}});g.nav=c;b(function(){b("[data-uk-nav]").each(function(){var a=b(this);a.data("nav")||a.data("nav",new c(a,g.Utils.options(a.data("uk-nav"))))})})})(jQuery,jQuery.UIkit);
(function(b,g){var e,c=function(a,c){var d=this;this.options=b.extend({},this.options,c);this.element=b(a).on({focus:function(){d.show()},blur:function(){d.hide()},mouseenter:function(){d.show()},mouseleave:function(){d.hide()}});this.tip="function"===typeof this.options.src?this.options.src.call(this.element):this.options.src;this.element.attr("data-cached-title",this.element.attr("title")).attr("title","")};b.extend(c.prototype,{tip:"",options:{offset:5,pos:"top",src:function(){return this.attr("title")}},
show:function(){if(this.tip.length){e.css({top:-2E3,visibility:"hidden"}).show();e.html('<div class="uk-tooltip-inner">'+this.tip+"</div>");var a=b.extend({},this.element.offset(),{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}),c=e[0].offsetWidth,d=e[0].offsetHeight,g="function"===typeof this.options.offset?this.options.offset.call(this.element):this.options.offset,h="function"===typeof this.options.pos?this.options.pos.call(this.element):this.options.pos,j={display:"none",
visibility:"visible",top:a.top+a.height+d,left:a.left},k=h.split("-");if(("left"==k[0]||"right"==k[0])&&"right"==b.UIkit.langdirection)k[0]="left"==k[0]?"right":"left";switch(k[0]){case "bottom":b.extend(j,{top:a.top+a.height+g,left:a.left+a.width/2-c/2});break;case "top":b.extend(j,{top:a.top-d-g,left:a.left+a.width/2-c/2});break;case "left":b.extend(j,{top:a.top+a.height/2-d/2,left:a.left-c-g});break;case "right":b.extend(j,{top:a.top+a.height/2-d/2,left:a.left+a.width+g})}2==k.length&&(j.left=
"left"==k[1]?a.left:a.left+a.width-c);e.css(j).attr("class","uk-tooltip uk-tooltip-"+h).show()}},hide:function(){this.element.is("input")&&this.element[0]===document.activeElement||e.hide()},content:function(){return this.tip}});g.tooltip=c;b(function(){e=b('<div class="uk-tooltip"></div>').appendTo("body")});b(document).on("mouseenter.tooltip.uikit focus.tooltip.uikit","[data-uk-tooltip]",function(){var a=b(this);a.data("tooltip")||a.data("tooltip",new c(a,g.Utils.options(a.data("uk-tooltip")))).trigger("mouseenter")})})(jQuery,
jQuery.UIkit);
(function(b,g){var e=function(c,a){var f=this;this.options=b.extend({},this.options,a);this.element=b(c).on("click",this.options.toggler,function(a){a.preventDefault();f.show(this)});if(this.options.connect){this.connect=b(this.options.connect).find(".uk-active").removeClass(".uk-active").end();var d=this.element.find(this.options.toggler).filter(".uk-active");d.length&&this.show(d)}};b.extend(e.prototype,{options:{connect:!1,toggler:">*"},show:function(c){c=isNaN(c)?b(c):this.element.find(this.options.toggler).eq(c);if(!c.hasClass("uk-disabled")){this.element.find(this.options.toggler).filter(".uk-active").removeClass("uk-active");
c.addClass("uk-active");if(this.options.connect&&this.connect.length){var a=this.element.find(this.options.toggler).index(c);this.connect.children().removeClass("uk-active").eq(a).addClass("uk-active")}this.element.trigger("ui.switcher.show",[c])}}});g.switcher=e;b(function(){b("[data-uk-switcher]").each(function(){var c=b(this);c.data("switcher")||c.data("switcher",new e(c,g.Utils.options(c.data("uk-switcher"))))})})})(jQuery,jQuery.UIkit);
(function(b,g){var e=function(c,a){this.element=b(c);this.options=b.extend({connect:!1},this.options,a);this.options.connect&&(this.connect=b(this.options.connect));var f=b("<li></li>").addClass("uk-tab-responsive uk-active").append('<a href="javascript:void(0);"> <i class="uk-icon-caret-down"></i></a>'),d=f.find("a:first"),e=b('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),g=e.find("ul");d.text(this.element.find("li.uk-active:first").find("a").text());
this.element.hasClass("uk-tab-bottom")&&e.addClass("uk-dropdown-up");this.element.hasClass("uk-tab-flip")&&e.addClass("uk-dropdown-flip");this.element.find("a").each(function(){var a=b(this),c=b('<li><a href="#">'+a.text()+"</a></li>").on("click",function(b){b.preventDefault();a.parent().trigger("click");f.removeClass("uk-open")});a.parents(".uk-disabled:first").length||g.append(c)});this.element.uk("switcher",{toggler:">li:not(.uk-tab-responsive)",connect:this.options.connect});f.append(e).uk("dropdown");
this.element.append(f).data({dropdown:f.data("dropdown"),mobilecaption:d}).on("ui.switcher.show",function(a,b){f.addClass("uk-active");d.text(b.find("a").text())})};g.tab=e;b(function(){b("[data-uk-tab]").each(function(){var c=b(this);c.data("tab")||c.data("tab",new e(c,g.Utils.options(c.data("uk-tab"))))})})})(jQuery,jQuery.UIkit);
(function(b,g){var e=function(c,a){var f=this;this.options=b.extend({},this.options,a);this.element=b(c);this.value=this.timer=null;this.input=this.element.find(".uk-search-field");this.form=this.input.length?b(this.input.get(0).form):b();this.input.attr("autocomplete","off");this.input.on({keydown:function(a){f.form[f.input.val()?"addClass":"removeClass"](f.options.filledClass);if(a&&a.which&&!a.shiftKey)switch(a.which){case 13:f.done(f.selected);a.preventDefault();break;case 38:f.pick("prev");a.preventDefault();
break;case 40:f.pick("next");a.preventDefault();break;case 27:case 9:f.hide()}},keyup:function(){f.trigger()},blur:function(a){setTimeout(function(){f.hide(a)},200)}});this.form.find("button[type=reset]").bind("click",function(){f.form.removeClass("uk-open").removeClass("uk-loading").removeClass("uk-active");f.value=null;f.input.focus()});this.dropdown=b('<div class="uk-dropdown uk-dropdown-search"><ul class="uk-nav uk-nav-search"></ul></div>').appendTo(this.form).find(".uk-nav-search");this.options.flipDropdown&&
this.dropdown.parent().addClass("uk-dropdown-flip")};b.extend(e.prototype,{options:{source:!1,param:"search",method:"post",minLength:3,delay:300,flipDropdown:!1,match:":not(.uk-skip)",skipClass:"uk-skip",loadingClass:"uk-loading",filledClass:"uk-active",resultsHeaderClass:"uk-nav-header",moreResultsClass:"",noResultsClass:"",listClass:"results",hoverClass:"uk-active",msgResultsHeader:"Search Results",msgMoreResults:"More Results",msgNoResults:"No results found",onSelect:function(b){window.location=
b.data("choice").url},onLoadedResults:function(b){return b}},request:function(c){var a=this;this.form.addClass(this.options.loadingClass);this.options.source?b.ajax(b.extend({url:this.options.source,type:this.options.method,dataType:"json",success:function(b){b=a.options.onLoadedResults.apply(this,[b]);a.form.removeClass(a.options.loadingClass);a.suggest(b)}},c)):this.form.removeClass(a.options.loadingClass)},pick:function(b){var a=!1;"string"!==typeof b&&!b.hasClass(this.options.skipClass)&&(a=b);
if("next"==b||"prev"==b)if(a=this.dropdown.children().filter(this.options.match),this.selected)var f=a.index(this.selected),a="next"==b?a.eq(f+1<a.length?f+1:0):a.eq(0>f-1?a.length-1:f-1);else a=a["next"==b?"first":"last"]();a&&a.length&&(this.selected=a,this.dropdown.children().removeClass(this.options.hoverClass),this.selected.addClass(this.options.hoverClass))},done:function(b){b?(b.hasClass(this.options.moreResultsClass)?this.form.submit():b.data("choice")&&this.options.onSelect.apply(this,[b]),
this.hide()):this.form.submit()},trigger:function(){var b=this,a=this.value,f={};this.value=this.input.val();if(this.value.length<this.options.minLength)return this.hide();this.value!=a&&(this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout(function(){f[b.options.param]=b.value;b.request({data:f})},this.options.delay,this));return this},suggest:function(c){if(c){var a=this,f={mouseover:function(){a.pick(b(this).parent())},click:function(c){c.preventDefault();a.done(b(this).parent())}};
!1===c?this.hide():(this.selected=null,this.dropdown.empty(),this.options.msgResultsHeader&&b("<li>").addClass(this.options.resultsHeaderClass+" "+this.options.skipClass).html(this.options.msgResultsHeader).appendTo(this.dropdown),c.results&&0<c.results.length?(b(c.results).each(function(){var c=b('<li><a href="#">'+this.title+"</a></li>").data("choice",this);this.text&&c.find("a").append("<div>"+this.text+"</div>");a.dropdown.append(c)}),this.options.msgMoreResults&&(b("<li>").addClass("uk-nav-divider "+
a.options.skipClass).appendTo(a.dropdown),b("<li>").addClass(a.options.moreResultsClass).html('<a href="#">'+a.options.msgMoreResults+"</a>").appendTo(a.dropdown).on(f)),a.dropdown.find("li>a").on(f)):this.options.msgNoResults&&b("<li>").addClass(this.options.noResultsClass+" "+this.options.skipClass).html("<a>"+this.options.msgNoResults+"</a>").appendTo(this.dropdown),this.show())}},show:function(){this.visible||(this.visible=!0,this.form.addClass("uk-open"))},hide:function(){this.visible&&(this.visible=
!1,this.form.removeClass(this.options.loadingClass).removeClass("uk-open"))}});g.search=e;b(document).on("focus.search.uikit","[data-uk-search]",function(){var c=b(this);c.data("search")||c.data("search",new e(c,g.Utils.options(c.data("uk-search"))))})})(jQuery,jQuery.UIkit);
(function(b,g){var e=function(c,a){var f=this;this.options=b.extend({duration:1E3,transition:"easeOutExpo"},a);this.element=b(c).on("click",function(){var a=(b(this.hash).length?b(this.hash):b("body")).offset().top,c=b(document).height(),e=b(window).height();a+e>c&&(a=a-e+50);b("html,body").stop().animate({scrollTop:a},f.options.duration,f.options.transition);return!1})};g["smooth-scroll"]=e;b.easing.easeOutExpo||(b.easing.easeOutExpo=function(b,a,e,d,g){return a==g?e+d:d*(-Math.pow(2,-10*a/g)+1)+
e});b(document).on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var c=b(this);c.data("smooth-scroll")||c.data("smooth-scroll",new e(c,g.Utils.options(c.data("uk-smooth-scroll")))).trigger("click")})})(jQuery,jQuery.UIkit);