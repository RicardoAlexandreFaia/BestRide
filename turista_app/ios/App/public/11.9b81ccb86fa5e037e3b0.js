(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"19mU":function(t,e,n){"use strict";n.r(e),n.d(e,"MenuPageModule",function(){return L});var o,r=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),c=n("tyNb"),u=n("C6fG"),a=n("HDdC"),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=[".show-page #","ion-router-outlet[main] #","#"],y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.create=function(t,n){if(!0===Object(u.b)(e.getPluginRef(),null,e.getPluginName())){if(t instanceof HTMLElement){if(!t.offsetParent)throw new Error("Element must be under <body>");if(t.getAttribute("__pluginMapId"))throw new Error(t.tagName+"[__pluginMapId='"+t.getAttribute("__pluginMapId")+"'] has already map.")}else"object"==typeof t&&(n=t,t=null);var o=new j(t,n);return o.set("_overlays",{}),o}var r=["[GoogleMaps]"];if(window.cordova?r.push("cordova-plugin-googlemaps is not installed or not ready yet."):(r.push('You need to execute "$> ionic cordova run browser".'),r.push('"$> ionic serve" is not supported.')),t instanceof HTMLElement)f(t,r.join("<br />"));else if("string"==typeof t){var i=Array.from(document.querySelectorAll("#"+t));i.length>0&&(i=i.filter(function(t){return!t.hasAttribute("__pluginmapid")})),1===i.length&&i[0]&&f(i[0],r.join("<br />"))}throw new Error(r.join(""))},e.prototype.create=function(t,n){return console.error("GoogleMaps","[deprecated] Please use GoogleMaps.create()"),e.create(t,n)},e.createPanorama=function(t,n){if(!0===Object(u.b)(e.getPluginRef(),null,e.getPluginName())){if(t instanceof HTMLElement){if(!t.offsetParent)throw new Error("Element must be under <body>");if(t.getAttribute("__pluginMapId"))throw new Error(t.tagName+"[__pluginMapId='"+t.getAttribute("__pluginMapId")+"'] has already map.")}return new O(t,n)}var o=["[GoogleMaps]"];if(window.cordova?o.push("cordova-plugin-googlemaps is not installed or not ready yet."):(o.push('You need to execute "$> ionic cordova run browser".'),o.push('"$> ionic serve" is not supported.')),t instanceof HTMLElement)f(t,o.join("<br />"));else if("string"==typeof t){var r=Array.from(document.querySelectorAll("#"+t));r.length>0&&(r=r.filter(function(t){return!t.hasAttribute("__pluginmapid")})),1===r.length&&r[0]&&f(r[0],o.join("<br />"))}throw new Error(o.join(""))},e.pluginName="GoogleMaps",e.pluginRef="plugin.google.maps",e.plugin="cordova-plugin-googlemaps",e.repo="https://github.com/mapsplugin/cordova-plugin-googlemaps",e.document="https://ionicframework.com/docs/native/google-maps/",e.install='ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',e.installVariables=["API_KEY_FOR_ANDROID","API_KEY_FOR_IOS"],e.platforms=["Android","iOS","Browser"],e}(u.a),f=function(t,e){var n=document.createElement("div");n.innerHTML=e,n.style.color="red",n.style.position="absolute",n.style.width="80%",n.style.height="50%",n.style.top="0px",n.style.bottom="0px",n.style.right="0px",n.style.left="0px",n.style.padding="0px",n.style.margin="auto",t.style.position="relative",t.style.backgroundColor="#ccc7",t.appendChild(n)},d=function(t,e){if(e[e.length-1]instanceof y.getPlugin().BaseClass)if("Map"===e[e.length-1].type||"StreetViewPanorama"===e[e.length-1].type)e[e.length-1]=void 0;else if(-1!==t.__pgmId.indexOf("markercluster_")){var n=(t.getMap().get("_overlays")||{})[e[e.length-1].getId()];if(!n){var o=e[e.length-1],r=o.getId();n=new v(t.getMap(),o),t.getMap().get("_overlays")[r]=n,o.one(o.getId()+"_remove",function(){t.getMap().get("_overlays")[r]=null,delete t.getMap().get("_overlays")[r]})}e[e.length-1]=n}else e[e.length-1]=t.getMap().get("_overlays")[e[e.length-1].getId()];return e},g=function(){function t(t){if(!0!==Object(u.b)(y.getPluginRef(),null,y.getPluginName()))throw new Error("cordova-plugin-googlemaps is not ready. Please use platform.ready() before executing any methods.");t||(t=new(y.getPlugin().BaseClass)),this._objectInstance=t}return t.prototype.addEventListener=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return new a.a(function(n){e._objectInstance.addEventListener(t,function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var r=d.call(e,e._objectInstance,t);n.next(r)})})}()},t.prototype.addEventListenerOnce=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n){e._objectInstance.one(t,function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var r=d.call(e,e._objectInstance,t);n(r)})})}()},t.prototype.addListenerOnce=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return console.warn('[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".'),e.addEventListenerOnce(t)}()},t.prototype.get=function(t){return Object(u.d)(this,"get",{sync:!0},arguments)},t.prototype.set=function(t,e,n){return Object(u.d)(this,"set",{sync:!0},arguments)},t.prototype.bindTo=function(t,e,n,o){return Object(u.d)(this,"bindTo",{sync:!0},arguments)},t.prototype.on=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return new a.a(function(n){e._objectInstance.on(t,function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var r=d.call(e,e._objectInstance,t);n.next(r)})})}()},t.prototype.one=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n){e._objectInstance.one(t,function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var r=d.call(e,e._objectInstance,t);n(r)})})}()},t.prototype.hasEventListener=function(){return Object(u.d)(this,"hasEventListener",{sync:!0},arguments)},t.prototype.empty=function(){return Object(u.d)(this,"empty",{sync:!0},arguments)},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return Object(u.d)(this,"trigger",{sync:!0},arguments)},t.prototype.destroy=function(){return Object(u.d)(this,"destroy",{sync:!0},arguments)},t.prototype.removeEventListener=function(t,e){return Object(u.d)(this,"removeEventListener",{sync:!0},arguments)},t.prototype.off=function(t,e){return Object(u.d)(this,"off",{sync:!0},arguments)},t.plugin="cordova-plugin-googlemaps",t.pluginName="GoogleMaps",t.pluginRef="plugin.google.maps.BaseClass",t.repo="",t}(),b=function(t){function e(e){return e instanceof y.getPlugin().BaseArrayClass?t.call(this,e)||this:Array.isArray(e)?t.call(this,new(y.getPlugin().BaseArrayClass)(e))||this:t.call(this,new(y.getPlugin().BaseArrayClass)([]))||this}return p(e,t),e.prototype.empty=function(t){return Object(u.d)(this,"empty",{sync:!0},arguments)},e.prototype.forEach=function(t){return Object(u.d)(this,"forEach",{sync:!0},arguments)},e.prototype.forEachAsync=function(t){var e=this;return Object(u.e)(function(n){e._objectInstance.forEach(t,n)})},e.prototype.map=function(t){return Object(u.d)(this,"map",{sync:!0},arguments)},e.prototype.mapAsync=function(t){var e=this;return Object(u.e)(function(n){e._objectInstance.map(t,n)})},e.prototype.mapSeries=function(t){var e=this;return Object(u.e)(function(n){e._objectInstance.mapSeries(t,n)})},e.prototype.filter=function(t){return Object(u.d)(this,"filter",{sync:!0},arguments)},e.prototype.filterAsync=function(t){var e=this;return Object(u.e)(function(n){e._objectInstance.filter(t,n)})},e.prototype.getArray=function(){return Object(u.d)(this,"getArray",{sync:!0},arguments)},e.prototype.getAt=function(t){return Object(u.d)(this,"getAt",{sync:!0},arguments)},e.prototype.getLength=function(){return Object(u.d)(this,"getLength",{sync:!0},arguments)},e.prototype.indexOf=function(t){return Object(u.d)(this,"indexOf",{sync:!0},arguments)},e.prototype.reverse=function(){return Object(u.d)(this,"reverse",{sync:!0},arguments)},e.prototype.sort=function(){return Object(u.d)(this,"sort",{sync:!0},arguments)},e.prototype.insertAt=function(t,e,n){return Object(u.d)(this,"insertAt",{sync:!0},arguments)},e.prototype.pop=function(t){return Object(u.d)(this,"pop",{sync:!0},arguments)},e.prototype.push=function(t,e){return Object(u.d)(this,"push",{sync:!0},arguments)},e.prototype.removeAt=function(t,e){return Object(u.d)(this,"removeAt",{sync:!0},arguments)},e.prototype.setAt=function(t,e,n){return Object(u.d)(this,"setAt",{sync:!0},arguments)},e.pluginName="BaseArrayClass",e.plugin="cordova-plugin-googlemaps",e.pluginRef="plugin.google.maps.BaseArrayClass",e}(g),h=function(t){function e(e,n){var o=t.call(this,n)||this;return o._map=e,o}return p(e,t),e.prototype.getId=function(){return Object(u.d)(this,"getId",{sync:!0},arguments)},e.prototype.getMap=function(){return this._map},e.prototype.setCenter=function(t){return Object(u.d)(this,"setCenter",{sync:!0},arguments)},e.prototype.getCenter=function(){return Object(u.d)(this,"getCenter",{sync:!0},arguments)},e.prototype.getRadius=function(){return Object(u.d)(this,"getRadius",{sync:!0},arguments)},e.prototype.setRadius=function(t){return Object(u.d)(this,"setRadius",{sync:!0},arguments)},e.prototype.setFillColor=function(t){return Object(u.d)(this,"setFillColor",{sync:!0},arguments)},e.prototype.getFillColor=function(){return Object(u.d)(this,"getFillColor",{sync:!0},arguments)},e.prototype.setStrokeWidth=function(t){return Object(u.d)(this,"setStrokeWidth",{sync:!0},arguments)},e.prototype.getStrokeWidth=function(){return Object(u.d)(this,"getStrokeWidth",{sync:!0},arguments)},e.prototype.setStrokeColor=function(t){return Object(u.d)(this,"setStrokeColor",{sync:!0},arguments)},e.prototype.getStrokeColor=function(){return Object(u.d)(this,"getStrokeColor",{sync:!0},arguments)},e.prototype.setClickable=function(t){return Object(u.d)(this,"setClickable",{sync:!0},arguments)},e.prototype.getClickable=function(){return Object(u.d)(this,"getClickable",{sync:!0},arguments)},e.prototype.setZIndex=function(t){return Object(u.d)(this,"setZIndex",{sync:!0},arguments)},e.prototype.getZIndex=function(){return Object(u.d)(this,"getZIndex",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e.prototype.getBounds=function(){return Object(u.d)(this,"getBounds",{sync:!0},arguments)},e.prototype.setVisible=function(t){return Object(u.d)(this,"setVisible",{sync:!0},arguments)},e.prototype.getVisible=function(){return Object(u.d)(this,"getVisible",{sync:!0},arguments)},e}(g),O=function(t){function e(e,n){var o=this;if(!0!==Object(u.b)(y.getPluginRef(),null,y.getPluginName())){var r=["[GoogleMaps]"];if(window.cordova?r.push("cordova-plugin-googlemaps is not installed or not ready yet."):(r.push('You need to execute "$> ionic cordova run browser".'),r.push('"$> ionic serve" is not supported.')),e instanceof HTMLElement)f(e,r.join("<br />"));else if("string"==typeof e){var i=Array.from(document.querySelectorAll("#"+e));i.length>0&&(i=i.filter(function(t){return!t.hasAttribute("__pluginmapid")})),1===i.length&&i[0]&&f(i[0],r.join("<br />"))}throw new Error(r.join(""))}if(e instanceof HTMLElement){if(!(e.offsetWidth>=100&&e.offsetHeight>=100))throw new Error(e.tagName+" is too small. Must be bigger than 100x100.");o=t.call(this,y.getPlugin().StreetView.getPanorama(e,n))||this}else"string"==typeof e&&(o=t.call(this,y.getPlugin().StreetView.getPanorama(Object(u.e)(function(t,r){var i,s;i=0;var c=setInterval(function(){var u;for(s=0;s<l.length;s++)if((u=Array.from(document.querySelectorAll(l[s]+e))).length>0&&(u=u.filter(function(t){return!t.hasAttribute("__pluginmapid")})),1===u.length&&u[0]&&u[0].offsetWidth>=100&&u[0].offsetHeight>=100)return clearInterval(c),void t([u[0],n]);i++<20||(clearInterval(c),o._objectInstance.remove(),r(u.length>0&&u[0]&&u[0].offsetWidth<100||u[0].offsetHeight<100?new Error(u[0].tagName+"[#"+e+"] is too small. Must be bigger than 100x100."):u.length>1?new Error('There are multiple "'+e+'" elements. Use different id to prevent error.'):new Error("Can not find the element [#"+e+"]")))},100)}),n))||this);return o}return p(e,t),e.prototype.setPov=function(t){return Object(u.d)(this,"setPov",{},arguments)},e.prototype.setPosition=function(t){return Object(u.d)(this,"setPosition",{},arguments)},e.prototype.setPanningGesturesEnabled=function(t){return Object(u.d)(this,"setPanningGesturesEnabled",{sync:!0},arguments)},e.prototype.getPanningGesturesEnabled=function(){return Object(u.d)(this,"getPanningGesturesEnabled",{sync:!0},arguments)},e.prototype.setZoomGesturesEnabled=function(t){return Object(u.d)(this,"setZoomGesturesEnabled",{sync:!0},arguments)},e.prototype.getZoomGesturesEnabled=function(){return Object(u.d)(this,"getZoomGesturesEnabled",{sync:!0},arguments)},e.prototype.setStreetNamesEnabled=function(t){return Object(u.d)(this,"setStreetNamesEnabled",{sync:!0},arguments)},e.prototype.getStreetNamesEnabled=function(){return Object(u.d)(this,"getStreetNamesEnabled",{sync:!0},arguments)},e.prototype.setNavigationEnabled=function(t){return Object(u.d)(this,"setNavigationEnabled",{sync:!0},arguments)},e.prototype.getNavigationEnabled=function(){return Object(u.d)(this,"getNavigationEnabled",{sync:!0},arguments)},e.prototype.getLinks=function(){return Object(u.d)(this,"getLinks",{sync:!0},arguments)},e.prototype.getLocation=function(){return Object(u.d)(this,"getLocation",{sync:!0},arguments)},e.prototype.getPanoId=function(){return Object(u.d)(this,"getPanoId",{sync:!0},arguments)},e.prototype.getPosition=function(){return Object(u.d)(this,"getPosition",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e.pluginName="StreetViewPanorama",e.plugin="cordova-plugin-googlemaps",e}(g),j=function(t){function e(e,n,o){var r=this;if(!0===Object(u.b)(y.getPluginRef(),null,y.getPluginName()))if(e instanceof HTMLElement){if(!e.offsetParent)throw new Error("Element must be under <body>");if(!(e.offsetWidth>=100&&e.offsetHeight>=100))throw new Error(e.tagName+" is too small. Must be bigger than 100x100.");r=t.call(this,y.getPlugin().Map.getMap(e,n))||this}else"string"==typeof e?r=t.call(this,y.getPlugin().Map.getMap(Object(u.e)(function(t,i){var s,c;s=0;var u=setInterval(function(){var o;for(c=0;c<l.length;c++)if((o=Array.from(document.querySelectorAll(l[c]+e))).length>0&&(o=o.filter(function(t){return!t.hasAttribute("__pluginmapid")})),1===o.length&&o[0]&&o[0].offsetWidth>=100&&o[0].offsetHeight>=100)return clearInterval(u),void t([o[0],n]);s++<20||(clearInterval(u),r._objectInstance.remove(),i(o.length>0&&o[0]&&o[0].offsetWidth<100||o[0].offsetHeight<100?new Error(o[0].tagName+"[#"+e+"] is too small. Must be bigger than 100x100."):o.length>1?new Error('There are multiple "'+e+'" elements. Use different id to prevent error.'):new Error("Can not find the element [#"+e+"]")))},null==o?100:o)}),n))||this:null===e&&n&&(r=t.call(this,y.getPlugin().Map.getMap(null,n))||this);else{var i=["[GoogleMaps]"];if(window.cordova?i.push("cordova-plugin-googlemaps is not installed or not ready yet."):(i.push('You need to execute "$> ionic cordova run browser".'),i.push('"$> ionic serve" is not supported.')),console.error(i.join("")),e instanceof HTMLElement)f(e,i.join("<br />"));else if("string"==typeof e){var s=Array.from(document.querySelectorAll("#"+e));s.length>0&&(s=s.filter(function(t){return!t.hasAttribute("__pluginmapid")})),1===s.length&&s[0]&&f(s[0],i.join("<br />"))}}return r}return p(e,t),e.prototype.setDiv=function(t){var e=this;return function(){if(!0===Object(u.f)(e)){if(!t)return void e._objectInstance.setDiv();if("string"==typeof t)Object(u.e)(function(e,n){var o,r;for(o=0;o<l.length;o++)if((r=Array.from(document.querySelectorAll(l[o]+t))).length>0&&(r=r.filter(function(t){return!t.hasAttribute("__pluginmapid")})),1===r.length&&r[0]&&r[0].offsetWidth>=100&&r[0].offsetHeight>=100)return void e(r[0]);n("Can not find [#"+t+"] element")}).then(function(t){e._objectInstance.setDiv(t)});else{if(!(t instanceof HTMLElement&&!t.offsetParent&&t.offsetWidth>=100&&t.offsetHeight>=100))throw new Error(t.tagName+" is too small. Must be bigger than 100x100.");e._objectInstance.setDiv(t)}}}()},e.prototype.getDiv=function(){return Object(u.d)(this,"getDiv",{sync:!0},arguments)},e.prototype.setMapTypeId=function(t){return Object(u.d)(this,"setMapTypeId",{sync:!0},arguments)},e.prototype.animateCamera=function(t){return Object(u.d)(this,"animateCamera",{},arguments)},e.prototype.animateCameraZoomIn=function(){return Object(u.d)(this,"animateCameraZoomIn",{},arguments)},e.prototype.animateCameraZoomOut=function(){return Object(u.d)(this,"animateCameraZoomOut",{},arguments)},e.prototype.moveCamera=function(t){return Object(u.d)(this,"moveCamera",{},arguments)},e.prototype.moveCameraZoomIn=function(){return Object(u.d)(this,"moveCameraZoomIn",{},arguments)},e.prototype.moveCameraZoomOut=function(){return Object(u.d)(this,"moveCameraZoomOut",{},arguments)},e.prototype.getCameraPosition=function(){return Object(u.d)(this,"getCameraPosition",{sync:!0},arguments)},e.prototype.getCameraTarget=function(){return Object(u.d)(this,"getCameraTarget",{sync:!0},arguments)},e.prototype.getCameraZoom=function(){return Object(u.d)(this,"getCameraZoom",{sync:!0},arguments)},e.prototype.getCameraBearing=function(){return Object(u.d)(this,"getCameraBearing",{sync:!0},arguments)},e.prototype.getCameraTilt=function(){return Object(u.d)(this,"getCameraTilt",{sync:!0},arguments)},e.prototype.setCameraTarget=function(t){return Object(u.d)(this,"setCameraTarget",{sync:!0},arguments)},e.prototype.setCameraZoom=function(t){return Object(u.d)(this,"setCameraZoom",{sync:!0},arguments)},e.prototype.setCameraTilt=function(t){return Object(u.d)(this,"setCameraTilt",{sync:!0},arguments)},e.prototype.setCameraBearing=function(t){return Object(u.d)(this,"setCameraBearing",{sync:!0},arguments)},e.prototype.panBy=function(t,e){return Object(u.d)(this,"panBy",{sync:!0},arguments)},e.prototype.getVisibleRegion=function(){return Object(u.d)(this,"getVisibleRegion",{sync:!0},arguments)},e.prototype.getMyLocation=function(t){return Object(u.d)(this,"getMyLocation",{},arguments)},e.prototype.setClickable=function(t){return Object(u.d)(this,"setClickable",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e.prototype.clear=function(){var t=this;return function(){if(!0===Object(u.f)(t))return t.get("_overlays")&&Object.keys(t.get("_overlays")).forEach(function(e){t.get("_overlays")[e]=null,delete t.get("_overlays")[e]}),Object(u.e)(function(e){t._objectInstance.clear(function(){return e()})})}()},e.prototype.fromLatLngToPoint=function(t){return Object(u.d)(this,"fromLatLngToPoint",{},arguments)},e.prototype.fromPointToLatLng=function(t){return Object(u.d)(this,"fromPointToLatLng",{},arguments)},e.prototype.setMyLocationEnabled=function(t){return Object(u.d)(this,"setMyLocationEnabled",{sync:!0},arguments)},e.prototype.setMyLocationButtonEnabled=function(t){return Object(u.d)(this,"setMyLocationButtonEnabled",{sync:!0},arguments)},e.prototype.getFocusedBuilding=function(){return Object(u.d)(this,"getFocusedBuilding",{},arguments)},e.prototype.setIndoorEnabled=function(t){return Object(u.d)(this,"setIndoorEnabled",{sync:!0},arguments)},e.prototype.setTrafficEnabled=function(t){return Object(u.d)(this,"setTrafficEnabled",{sync:!0},arguments)},e.prototype.setCompassEnabled=function(t){return Object(u.d)(this,"setCompassEnabled",{sync:!0},arguments)},e.prototype.setAllGesturesEnabled=function(t){return Object(u.d)(this,"setAllGesturesEnabled",{sync:!0},arguments)},e.prototype.setVisible=function(t){return Object(u.d)(this,"setVisible",{sync:!0},arguments)},e.prototype.setPadding=function(t,e,n,o){return Object(u.d)(this,"setPadding",{sync:!0},arguments)},e.prototype.setOptions=function(t){return Object(u.d)(this,"setOptions",{sync:!0},arguments)},e.prototype.addMarker=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n,o){e._objectInstance.addMarker(t,function(t){if(t){var r=t.getId(),i=new v(e,t);e.get("_overlays")[r]=i,t.one(r+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[r]=null,i.destroy())}),n(i)}else o()})})}()},e.prototype.addMarkerSync=function(t){var e=this;return function(){if(!0===Object(u.f)(e)){var n=e._objectInstance.addMarker(t),o=n.getId(),r=new v(e,n);return e.get("_overlays")[o]=r,n.one(o+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[o]=null,r.destroy())}),r}}()},e.prototype.addMarkerCluster=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n,o){e._objectInstance.addMarkerCluster(t,function(t){if(t){var r=t.getId(),i=new _(e,t);e.get("_overlays")[r]=i,t.one("remove",function(){e.get("_overlays")&&(e.get("_overlays")[r]=null,i.destroy())}),t.set("_overlays",new b),n(i)}else o()})})}()},e.prototype.addMarkerClusterSync=function(t){var e=this;return function(){if(!0===Object(u.f)(e)){var n=e._objectInstance.addMarkerCluster(t),o=n.getId(),r=new _(e,n);return e.get("_overlays")[o]=r,n.one(o+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[o]=null,r.destroy())}),n.set("_overlays",new b),r}}()},e.prototype.addCircle=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n,o){e._objectInstance.addCircle(t,function(t){if(t){var r=t.getId(),i=new h(e,t);e.get("_overlays")[r]=i,t.one(r+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[r]=null,i.destroy())}),n(i)}else o()})})}()},e.prototype.addCircleSync=function(t){var e=this;return function(){if(!0===Object(u.f)(e)){var n=e._objectInstance.addCircle(t),o=n.getId(),r=new h(e,n);return e.get("_overlays")[o]=r,n.one(o+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[o]=null,r.destroy())}),r}}()},e.prototype.addPolygon=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n,o){e._objectInstance.addPolygon(t,function(t){if(t){var r=t.getId(),i=new I(e,t);e.get("_overlays")[r]=i,t.one(r+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[r]=null,i.destroy())}),n(i)}else o()})})}()},e.prototype.addPolygonSync=function(t){var e=this;return function(){if(!0===Object(u.f)(e)){var n=e._objectInstance.addPolygon(t),o=n.getId(),r=new I(e,n);return e.get("_overlays")[o]=r,n.one(o+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[o]=null,r.destroy())}),r}}()},e.prototype.addPolyline=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n,o){e._objectInstance.addPolyline(t,function(t){if(t){var r=t.getId(),i=new w(e,t);e.get("_overlays")[r]=i,t.one(r+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[r]=null,i.destroy())}),n(i)}else o()})})}()},e.prototype.addPolylineSync=function(t){var e=this;return function(){if(!0===Object(u.f)(e)){var n=e._objectInstance.addPolyline(t),o=n.getId(),r=new w(e,n);return e.get("_overlays")[o]=r,n.one(o+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[o]=null,r.destroy())}),r}}()},e.prototype.addTileOverlay=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n,o){e._objectInstance.addTileOverlay(t,function(t){if(t){var r=t.getId(),i=new C(e,t);e.get("_overlays")[r]=i,t.one(r+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[r]=null,i.destroy())}),n(i)}else o()})})}()},e.prototype.addTileOverlaySync=function(t){var e=this;return function(){if(!0===Object(u.f)(e)){var n=e._objectInstance.addTileOverlay(t),o=n.getId(),r=new C(e,n);return e.get("_overlays")[o]=r,n.one(o+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[o]=null,r.destroy())}),r}}()},e.prototype.addGroundOverlay=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n,o){e._objectInstance.addGroundOverlay(t,function(t){if(t){var r=t.getId(),i=new m(e,t);e.get("_overlays")[r]=i,t.one(r+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[r]=null,i.destroy())}),n(i)}else o()})})}()},e.prototype.addGroundOverlaySync=function(t){var e=this;return function(){if(!0===Object(u.f)(e)){var n=e._objectInstance.addGroundOverlay(t),o=n.getId(),r=new m(e,n);return e.get("_overlays")[o]=r,n.one(o+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[o]=null,r.destroy())}),r}}()},e.prototype.addKmlOverlay=function(t){var e=this;return function(){if(!0===Object(u.f)(e))return Object(u.e)(function(n,o){e._objectInstance.addKmlOverlay(t,function(t){if(t){var r=t.getId(),i=new A(e,t);e.get("_overlays")[r]=i,t.one(r+"_remove",function(){e.get("_overlays")&&(e.get("_overlays")[r]=null,i.destroy())}),n(i)}else o()})})}()},e.prototype.toDataURL=function(t){return Object(u.d)(this,"toDataURL",{},arguments)},e.pluginName="GoogleMaps",e.plugin="cordova-plugin-googlemaps",e}(g),m=function(t){function e(e,n){var o=t.call(this,n)||this;return o._map=e,o}return p(e,t),e.prototype.getId=function(){return Object(u.d)(this,"getId",{sync:!0},arguments)},e.prototype.getMap=function(){return this._map},e.prototype.setBounds=function(t){return Object(u.d)(this,"setBounds",{sync:!0},arguments)},e.prototype.setBearing=function(t){return Object(u.d)(this,"setBearing",{sync:!0},arguments)},e.prototype.getBearing=function(){return Object(u.d)(this,"getBearing",{sync:!0},arguments)},e.prototype.setImage=function(t){return Object(u.d)(this,"setImage",{sync:!0},arguments)},e.prototype.setOpacity=function(t){return Object(u.d)(this,"setOpacity",{sync:!0},arguments)},e.prototype.getOpacity=function(){return Object(u.d)(this,"getOpacity",{sync:!0},arguments)},e.prototype.setClickable=function(t){return Object(u.d)(this,"setClickable",{sync:!0},arguments)},e.prototype.getClickable=function(){return Object(u.d)(this,"getClickable",{sync:!0},arguments)},e.prototype.setVisible=function(t){return Object(u.d)(this,"setVisible",{sync:!0},arguments)},e.prototype.getVisible=function(){return Object(u.d)(this,"getVisible",{sync:!0},arguments)},e.prototype.setZIndex=function(t){return Object(u.d)(this,"setZIndex",{sync:!0},arguments)},e.prototype.getZIndex=function(){return Object(u.d)(this,"getZIndex",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e}(g),v=function(t){function e(e,n){var o=t.call(this,n)||this;return o._map=e,o}return p(e,t),e.prototype.getId=function(){return Object(u.d)(this,"getId",{sync:!0},arguments)},e.prototype.getMap=function(){return this._map},e.prototype.setPosition=function(t){return Object(u.d)(this,"setPosition",{sync:!0},arguments)},e.prototype.getPosition=function(){return Object(u.d)(this,"getPosition",{sync:!0},arguments)},e.prototype.showInfoWindow=function(){return Object(u.d)(this,"showInfoWindow",{sync:!0},arguments)},e.prototype.hideInfoWindow=function(){return Object(u.d)(this,"hideInfoWindow",{sync:!0},arguments)},e.prototype.setAnimation=function(t){return Object(u.d)(this,"setAnimation",{sync:!0},arguments)},e.prototype.setDisableAutoPan=function(t){return Object(u.d)(this,"setDisableAutoPan",{sync:!0},arguments)},e.prototype.setVisible=function(t){return Object(u.d)(this,"setVisible",{sync:!0},arguments)},e.prototype.isVisible=function(){return Object(u.d)(this,"isVisible",{sync:!0},arguments)},e.prototype.setTitle=function(t){return Object(u.d)(this,"setTitle",{sync:!0},arguments)},e.prototype.getTitle=function(){return Object(u.d)(this,"getTitle",{sync:!0},arguments)},e.prototype.setSnippet=function(t){return Object(u.d)(this,"setSnippet",{sync:!0},arguments)},e.prototype.getSnippet=function(){return Object(u.d)(this,"getSnippet",{sync:!0},arguments)},e.prototype.setOpacity=function(t){return Object(u.d)(this,"setOpacity",{sync:!0},arguments)},e.prototype.getOpacity=function(){return Object(u.d)(this,"getOpacity",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e.prototype.setIconAnchor=function(t,e){return Object(u.d)(this,"setIconAnchor",{sync:!0},arguments)},e.prototype.setInfoWindowAnchor=function(t,e){return Object(u.d)(this,"setInfoWindowAnchor",{sync:!0},arguments)},e.prototype.isInfoWindowShown=function(){return Object(u.d)(this,"isInfoWindowShown",{sync:!0},arguments)},e.prototype.setZIndex=function(t){return Object(u.d)(this,"setZIndex",{sync:!0},arguments)},e.prototype.getZIndex=function(){return Object(u.d)(this,"getZIndex",{sync:!0},arguments)},e.prototype.setDraggable=function(t){return Object(u.d)(this,"setDraggable",{sync:!0},arguments)},e.prototype.isDraggable=function(){return Object(u.d)(this,"isDraggable",{sync:!0},arguments)},e.prototype.setFlat=function(t){return Object(u.d)(this,"setFlat",{sync:!0},arguments)},e.prototype.setIcon=function(t){return Object(u.d)(this,"setIcon",{sync:!0},arguments)},e.prototype.setRotation=function(t){return Object(u.d)(this,"setRotation",{sync:!0},arguments)},e.prototype.getRotation=function(){return Object(u.d)(this,"getRotation",{sync:!0},arguments)},e}(g),_=function(t){function e(e,n){var o=t.call(this,n)||this;return o._map=e,o}return p(e,t),e.prototype.getId=function(){return Object(u.d)(this,"getId",{sync:!0},arguments)},e.prototype.addMarker=function(t){return Object(u.d)(this,"addMarker",{sync:!0},arguments)},e.prototype.addMarkers=function(t){return Object(u.d)(this,"addMarkers",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e.prototype.getMap=function(){return this._map},e}(g),I=function(t){function e(e,n){var o=t.call(this,n)||this;return o._map=e,o}return p(e,t),e.prototype.getId=function(){return Object(u.d)(this,"getId",{sync:!0},arguments)},e.prototype.getMap=function(){return this._map},e.prototype.setPoints=function(t){return Object(u.d)(this,"setPoints",{sync:!0},arguments)},e.prototype.getPoints=function(){return new b(this._objectInstance.getPoints())},e.prototype.setHoles=function(t){return Object(u.d)(this,"setHoles",{sync:!0},arguments)},e.prototype.getHoles=function(){var t=this._objectInstance.getPoints(),e=new b;return t.forEach(function(t){e.push(t)}),e},e.prototype.setFillColor=function(t){return Object(u.d)(this,"setFillColor",{sync:!0},arguments)},e.prototype.getFillColor=function(){return Object(u.d)(this,"getFillColor",{sync:!0},arguments)},e.prototype.setStrokeColor=function(t){return Object(u.d)(this,"setStrokeColor",{sync:!0},arguments)},e.prototype.getStrokeColor=function(){return Object(u.d)(this,"getStrokeColor",{sync:!0},arguments)},e.prototype.setClickable=function(t){return Object(u.d)(this,"setClickable",{sync:!0},arguments)},e.prototype.getClickable=function(){return Object(u.d)(this,"getClickable",{sync:!0},arguments)},e.prototype.setVisible=function(t){return Object(u.d)(this,"setVisible",{sync:!0},arguments)},e.prototype.getVisible=function(){return Object(u.d)(this,"getVisible",{sync:!0},arguments)},e.prototype.setZIndex=function(t){return Object(u.d)(this,"setZIndex",{sync:!0},arguments)},e.prototype.getZIndex=function(){return Object(u.d)(this,"getZIndex",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e.prototype.setStrokeWidth=function(t){return Object(u.d)(this,"setStrokeWidth",{sync:!0},arguments)},e.prototype.getStrokeWidth=function(){return Object(u.d)(this,"getStrokeWidth",{sync:!0},arguments)},e.prototype.setGeodesic=function(t){return Object(u.d)(this,"setGeodesic",{sync:!0},arguments)},e.prototype.getGeodesic=function(){return Object(u.d)(this,"getGeodesic",{sync:!0},arguments)},e}(g),w=function(t){function e(e,n){var o=t.call(this,n)||this;return o._map=e,o}return p(e,t),e.prototype.getId=function(){return Object(u.d)(this,"getId",{sync:!0},arguments)},e.prototype.getMap=function(){return this._map},e.prototype.setPoints=function(t){return Object(u.d)(this,"setPoints",{sync:!0},arguments)},e.prototype.getPoints=function(){return new b(this._objectInstance.getPoints())},e.prototype.setGeoDesic=function(t){return Object(u.d)(this,"setGeoDesic",{sync:!0},arguments)},e.prototype.getGeodesic=function(){return Object(u.d)(this,"getGeodesic",{sync:!0},arguments)},e.prototype.setVisible=function(t){return Object(u.d)(this,"setVisible",{sync:!0},arguments)},e.prototype.getVisible=function(){return Object(u.d)(this,"getVisible",{sync:!0},arguments)},e.prototype.setClickable=function(t){return Object(u.d)(this,"setClickable",{sync:!0},arguments)},e.prototype.getClickable=function(){return Object(u.d)(this,"getClickable",{sync:!0},arguments)},e.prototype.setStrokeColor=function(t){return Object(u.d)(this,"setStrokeColor",{sync:!0},arguments)},e.prototype.getStrokeColor=function(){return Object(u.d)(this,"getStrokeColor",{sync:!0},arguments)},e.prototype.setStrokeWidth=function(t){return Object(u.d)(this,"setStrokeWidth",{sync:!0},arguments)},e.prototype.getStrokeWidth=function(){return Object(u.d)(this,"getStrokeWidth",{sync:!0},arguments)},e.prototype.setZIndex=function(t){return Object(u.d)(this,"setZIndex",{sync:!0},arguments)},e.prototype.getZIndex=function(){return Object(u.d)(this,"getZIndex",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e}(g),C=function(t){function e(e,n){var o=t.call(this,n)||this;return o._map=e,o}return p(e,t),e.prototype.getId=function(){return Object(u.d)(this,"getId",{sync:!0},arguments)},e.prototype.getMap=function(){return this._map},e.prototype.setFadeIn=function(t){return Object(u.d)(this,"setFadeIn",{sync:!0},arguments)},e.prototype.getFadeIn=function(){return Object(u.d)(this,"getFadeIn",{sync:!0},arguments)},e.prototype.setZIndex=function(t){return Object(u.d)(this,"setZIndex",{sync:!0},arguments)},e.prototype.getZIndex=function(){return Object(u.d)(this,"getZIndex",{sync:!0},arguments)},e.prototype.setOpacity=function(t){return Object(u.d)(this,"setOpacity",{sync:!0},arguments)},e.prototype.getOpacity=function(){return Object(u.d)(this,"getOpacity",{sync:!0},arguments)},e.prototype.setVisible=function(t){return Object(u.d)(this,"setVisible",{sync:!0},arguments)},e.prototype.getVisible=function(){return Object(u.d)(this,"getVisible",{sync:!0},arguments)},e.prototype.getTileSize=function(){return Object(u.d)(this,"getTileSize",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e}(g),A=function(t){function e(e,n){var o=t.call(this,n)||this;return o._map=e,Object.defineProperty(self,"camera",{value:o._objectInstance.camera,writable:!1}),Object.defineProperty(self,"kmlData",{value:o._objectInstance.kmlData,writable:!1}),o}return p(e,t),e.prototype.getDefaultViewport=function(){return Object(u.d)(this,"getDefaultViewport",{sync:!0},arguments)},e.prototype.getId=function(){return Object(u.d)(this,"getId",{sync:!0},arguments)},e.prototype.getMap=function(){return this._map},e.prototype.setVisible=function(t){return Object(u.d)(this,"setVisible",{sync:!0},arguments)},e.prototype.getVisible=function(){return Object(u.d)(this,"getVisible",{sync:!0},arguments)},e.prototype.setClickable=function(t){return Object(u.d)(this,"setClickable",{sync:!0},arguments)},e.prototype.getClickable=function(){return Object(u.d)(this,"getClickable",{sync:!0},arguments)},e.prototype.remove=function(){return Object(u.d)(this,"remove",{},arguments)},e}(g),P=n("fXoL"),E=n("Bfh1");const M=["map"],k=[{path:"",component:(()=>{class t{constructor(t){this.geolocation=t,this.circuito1=[{titulo:"S\xc9",lat:38.7098786,lng:-9.132584400000042},{titulo:"MIRADOURO PORTAS DO SOL",lat:38.711148,lng:-9.133262000000059},{titulo:"ALFAMA",lat:38.7125,lng:-9.132799999999975},{titulo:"VILA DO BAIRRO DO CASTELO",lat:38.7131963,lng:-9.133408799999984},{titulo:"MIRADOURO DA GRA\xc7A",lat:38.716272,lng:-9.131524000000013},{titulo:"GRA\xc7A",lat:38.71794939999999,lng:-9.13039619999995},{titulo:"MIRADOURO NOSSA SENHORA DO MONTE",lat:38.71906409127469,lng:-9.132594176721227}],this.circuito2=[{titulo:"MIRADOURO DE S. PEDRO DE ALC\xc2NTARA",lat:38.7150612,lng:-9.144405199999937},{titulo:"BAIRRO ALTO",lat:38.7127532,lng:-9.146295099999975},{titulo:"CHIADO",lat:38.710202,lng:-9.14223800000002},{titulo:"S\xc9",lat:38.7098786,lng:-9.132584400000042},{titulo:"ALFAMA",lat:38.7125,lng:-9.132799999999975},{titulo:"VILA DO BAIRRO DO CASTELO",lat:38.7131963,lng:-9.133408799999984}]}ngOnInit(){}ionViewDidEnter(){this.loadMap()}loadMap(){this.map=y.create("map_canvas",{camera:{target:{lat:43.0741904,lng:-89.3809802},zoom:18,tilt:30}}),this.map.addMarkerSync({title:"Ionic",icon:"blue",animation:"DROP",position:{lat:43.0741904,lng:-89.3809802}}).on("marker_click").subscribe(()=>{alert("clicked")})}showMap(){const t={center:new google.maps.LatLng(38.71847179326699,-9.13719094695057),zoom:18,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(this.mapElement.nativeElement,t),this.adicionaMarcadores(this.circuito1)}getUserPosition(){this.options={enableHighAccuracy:!1},this.geolocation.getCurrentPosition(this.options).then(t=>{this.currentPos=t,new google.maps.LatLng(this.currentPos.coords.latitude,this.currentPos.coords.longitude),new google.maps.Marker({map:this.map,position:this.map.getCenter(),latitude:this.currentPos.coords.latitude,icon:{url:"./assets/icon/gps.png"},longitude:this.currentPos.coords.longitude})},t=>{console.log("ERRO::: : "+t.message)})}adicionaMarcadores(t){for(let e of t){let t=new google.maps.LatLng(e.lat,e.lng),n=new google.maps.Marker({map:this.map,position:t,title:e.title,latitude:e.lat,longitude:e.lng}),o=new google.maps.InfoWindow({content:"<p> "+e.titulo+"</p>"});google.maps.event.addListener(n,"click",()=>{o.open(this.map,n)})}}}return t.\u0275fac=function(e){return new(e||t)(P.Jb(E.a))},t.\u0275cmp=P.Db({type:t,selectors:[["app-menu"]],viewQuery:function(t,e){if(1&t&&P.hc(M,1),2&t){let t;P.bc(t=P.Wb())&&(e.mapElement=t.first)}},decls:7,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["id","map"],["map",""]],template:function(t,e){1&t&&(P.Ob(0,"ion-header",0),P.Ob(1,"ion-toolbar"),P.Ob(2,"ion-title"),P.fc(3," Best Ride "),P.Nb(),P.Nb(),P.Nb(),P.Ob(4,"ion-content",1),P.Kb(5,"div",2,3),P.Nb()),2&t&&(P.ac("translucent",!0),P.zb(4),P.ac("fullscreen",!0))},directives:[s.i,s.t,s.s,s.h],styles:["#map[_ngcontent-%COMP%]{height:100%}"]}),t})()}];let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=P.Hb({type:t}),t.\u0275inj=P.Gb({imports:[[c.i.forChild(k)],c.i]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=P.Hb({type:t}),t.\u0275inj=P.Gb({imports:[[r.b,i.d,s.u,S]]}),t})()}}]);