var wui={};wui.controls={};wui.controls.control=(function(){var a=0;return function(i){var k=a;a+=1;var q=i?i:"div";var l=document.createElement(q);var j=function(){l.style.display="block"};var f=function(){l.style.display="none"};var d=function(){if(l.style.display==="none"){j()}else{f()}};var o=function(){return k};var c=function(r){l.onclick=r};var n=function(){var r=document.createEvent("MouseEvents");r.initEvent("click",true,true);l.dispatchEvent(r)};var e=(function(){var t=[];var s=function(){var x;var w="";for(x=0;x<t.length;x++){w+=t[x]+" "}l.className=w};var u=function(x){var w;var y=false;for(w=0;w<t.length;w++){if(x===t[w]){y=true;break}}if(!y){t.push(x);s()}};var v=function(y){var x;var z=[];var w=false;for(x=0;x<t.length;x++){if(y!==t[x]){z.push(t[x])}}t=z;s()};var r=function(w){t=[];s()};return{addClass:u,removeClass:v,clear:r}}());var g=function(r){l.style.width=r};var h=function(r){l.style.height=r};var b=function(r){l.id=r};var m=function(){return l};var p=function(r){l.appendChild(r.getDomElement())};return{getDomElement:m,getControlNumber:o,appendControl:p,show:j,hide:f,toggle:d,setWidth:g,setHeight:h,setOnClick:c,click:n,css:e,setId:b}}}());wui.controls.app=function(){var a=wui.controls.control();a.css.addClass("wui_position_vbox");a.css.addClass("wui_position_fullscreen");a.show=function(){a.getDomElement().style.display="-webkit-box"};return a};wui.controls.panels={};wui.controls.panels.standard=function(){var a=wui.controls.control();a.css.addClass("wui_controls_panel");a.css.addClass("wui_position_vbox");a.css.addClass("wui_position_flex");a.setText=function(b){a.getDomElement().innerHTML=b};a.show=function(){a.getDomElement().style.display="-webkit-box"};return a};wui.controls.panels.scroll=function(){var c=wui.controls.control();var d="scroll__"+c.getControlNumber();c.css.addClass("wui_position_flex");c.setId(d);var a=wui.controls.panels.standard();c.appendControl(a);var b=c.getDomElement();c.scroll=new iScroll(a.getDomElement(),{desktopCompatibility:true});c.setText=function(e){a.setText(e);c.scroll.refresh()};c.appendControl=function(e){a.getDomElement().appendChild(e.getDomElement());c.scroll.refresh()};c.show=function(){c.getDomElement().style.display="block";c.scroll.refresh()};c.scroll.refresh();document.addEventListener("touchmove",function(f){f.preventDefault()},false);c.clear=function(){a.getDomElement().innerHTML=""};c.getDomElement=function(){return b};return c};wui.controls.lists={};wui.controls.lists.items={};wui.controls.lists.items.standard=function(b){var a=wui.controls.control("li");a.setText=function(c){a.getDomElement().innerHTML=c};if(typeof b!=="undefined"){a.setText(b)}return a};wui.controls.lists.items.arrow=function(d){var b=wui.controls.control("li");b.css.addClass("wui_position_hbox");var a=wui.controls.control("div");a.css.addClass("wui_position_flex");var c=wui.controls.control("div");c.css.addClass("wui_controls_lists_items_arrow_icon");b.setText=function(e){a.getDomElement().innerHTML=e};if(typeof d!=="undefined"){b.setText(d)}b.appendControl(a);b.appendControl(c);return b};wui.controls.lists.standard=function(){var a=wui.controls.control("ul");a.css.addClass("wui_controls_lists_standard");a.items=(function(){var b=function(c){a.appendControl(c)};return{add:b}}());a.clear=function(){a.getDomElement().innerHTML=""};return a};wui.controls.lists.rounded=function(){var a=wui.controls.lists.standard();a.css.addClass("wui_controls_lists_rounded");return a};wui.controls.titleBar=function(){var b=wui.controls.control("header");var a=b.getDomElement();b.rightContainer=wui.controls.control();b.leftContainer=wui.controls.control();var c=document.createElement("h1");c.className="wui_position_flex wui_control_titleBar_title";b.css.addClass("wui_position_hbox");b.css.addClass("wui_control_titleBar");b.rightContainer.css.addClass("wui_control_titleBar_rightContainer");b.leftContainer.css.addClass("wui_control_titleBar_leftContainer");b.show=function(){b.getDomElement().style.display="-webkit-box"};b.setText=function(d){c.innerHTML=d};a.appendChild(b.leftContainer.getDomElement());a.appendChild(c);a.appendChild(b.rightContainer.getDomElement());return b};wui.controls.menu={};wui.controls.menu.menuItem=function(){var g=wui.controls.control("span");g.css.addClass("wui_position_flex");g.css.addClass("wui_control_menuItem");var e=wui.controls.control();e.css.addClass("wui_control_menuItem_icon");var d=false;var b;var h="";var f="";var c=wui.controls.control("a");g.setText=function(a){c.getDomElement().innerHTML=a};g.setPanel=function(a){b=a};g.getPanel=function(){return b};g.showPanel=function(){if(b){b.show()}};g.hidePanel=function(){if(b){b.hide()}};g.setIconControl=function(a){h=a;if(!d){e.getDomElement().innerHTML=h}};g.setSelectedIconControl=function(a){f=a};g.select=function(){if(f.length>1){e.getDomElement().innerHTML=f}d=true;g.css.addClass("wui_control_menuItem_active");g.showPanel()};g.deselect=function(){e.getDomElement().innerHTML=h;d=false;g.css.removeClass("wui_control_menuItem_active");g.hidePanel()};g.show=function(){g.getDomElement().style.display="-webkit-box"};g.appendControl(e);g.appendControl(c);return g};wui.controls.menu.menuBar=function(){var c=wui.controls.control("nav");var a=[];var b;c.css.addClass("wui_position_hbox");c.css.addClass("wui_control_menuBar");var d;c.setActive=function(e){for(b=0;b<a.length;b++){a[b].deselect()}e.select();d=e};c.getActive=function(){return d};c.items=(function(){var e=function(f){f.setOnClick(function(){c.setActive(f)});a.push(f);c.appendControl(f)};return{add:e}}());return c};wui.controls.buttons={};wui.controls.buttons.standard=function(){var a=wui.controls.control();a.setText=function(b){a.getDomElement().innerHTML=b};a.css.addClass("wui_controls_buttons_standard");return a};wui.controls.buttons.red=function(){var a=wui.controls.buttons.standard();a.css.addClass("wui_controls_buttons_red");return a};wui.controls.buttons.add=function(){var a=wui.controls.buttons.standard();a.css.clear();a.css.addClass("wui_controls_buttons_add");a.setText("+");a.setText=undefined;return a};wui.controls.buttons.back=function(){var a=wui.controls.buttons.standard();a.css.clear();a.css.addClass("wui_controls_buttons_back");return a};wui.controls.buttons.greyLamp=function(){var a=wui.controls.buttons.standard();a.css.clear();a.css.addClass("wui_controls_buttons_greyLamp");return a};wui.controls.buttons.greenLamp=function(){var a=wui.controls.buttons.greyLamp();a.css.addClass("wui_controls_buttons_greenLamp");return a};wui.controls.buttons.orangeLamp=function(){var a=wui.controls.buttons.greyLamp();a.css.addClass("wui_controls_buttons_orangeLamp");return a};wui.controls.buttons.redLamp=function(){var a=wui.controls.buttons.greyLamp();a.css.addClass("wui_controls_buttons_redLamp");return a};