!function(t){function e(t,e){d3.json(e,function(e){l=e,$(".updateAt").text(l.updateAt),d3.json(t,function(t){for(var e in t.objects)geojson=topojson.feature(t,t.objects[e]);f=L.geoJson(geojson,{style:o,onEachFeature:a}).addTo(d)})})}function r(t,e,r){g=r,d=new L.Map("map");var o="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",n='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',a=new L.TileLayer(o,{minZoom:10,maxZoom:19,attribution:n});d.setView(new L.LatLng(t,e),g),a.addTo(d),h.addTo(d)}function o(e){var r=n(e.properties.TOWNNAME+e.properties.VILLAGENAM),o=.6;return console.log($(t).width()),$(t).width()<600&&(o=.4),{fillColor:r,weight:1,opacity:.3,color:"#eee",dashArray:"",fillOpacity:o}}function n(t){if(!(t in l))return"rgb(3, 177, 255)";if(0===l[t].day_1_7)return"rgb(0, 187, 170)";l[t]["class"];return"#C1BEBE"}function a(t,e){e.on({mouseover:u,mouseout:s});var r=t.properties.TOWNNAME+t.properties.VILLAGENAM;r in l?e.bindPopup('<div class="village-pop"><span>'+t.properties.TOWNNAME+" "+t.properties.VILLAGENAM+"</span>"+i(l[r])+"<hr/>1-7天內病例數："+p(l[r].day_1_7)+"<br/>8-14天內病例數："+l[r].day_8_14+"</div>"):e.bindPopup(t.properties.TOWNNAME+" "+t.properties.VILLAGENAM+"<br/>14天病例數：0")}function i(t){var e=t.day_1_7-t.day_8_14;return e>0?'<span class="arrow-up"></span>'+Math.abs(e):0>e?'<span class="arrow-down"></span>'+Math.abs(e):"--"}function p(t){return 10>t?t:'<span class="red">'+t+"</span>"}function s(t){f.resetStyle(t.target)}function u(t){var e=t.target;e.setStyle({weight:2,color:"#666",dashArray:"",fillOpacity:.2}),L.Browser.ie||L.Browser.opera||e.bringToFront()}function c(t){for(var e=L.DomUtil.create("div","info legend"),r=["#C1BEBE","rgb(0, 187, 170)","rgb(3, 177, 255)"].reverse(),o=["2週內無病例數","1週內無病例","其他"],n=0;n<o.length;n++)e.innerHTML+='<i style="background:'+r[n]+'"></i>'+o[n]+"<br/>";return e}var d,l,f,g,h=L.control({position:"bottomleft"});t.initData=e,t.initMap=r,h.onAdd=c}(window);
