!function n(a,i,r){function e(o,l){if(!i[o]){if(!a[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(t)return t(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=i[o]={exports:{}};a[o][0].call(c.exports,function(n){var i=a[o][1][n];return e(i?i:n)},c,c.exports,n,a,i,r)}return i[o].exports}for(var t="function"==typeof require&&require,o=0;o<r.length;o++)e(r[o]);return e}({1:[function(n,a,i){!function(n){function a(){d=p>5&&18>p?"白天":"晚上";var n=new Firebase("https://realtaiwanstat2.firebaseio.com");n.child("rain").limitToLast(1).on("child_added",function(n){var a=n.val();f=a,$(".updateAt").text(f[0].PublishTime),$(".loading").hide(),$("#layout-header").show(),e()})}function i(n,a,i){var r=document.createElement("img");r.id="background-img",r.crossOrigin="anonymous",document.body.appendChild(r),"rain"===n?(r.onload=function(){h=new RainyDay({image:this}),h.rain(2>i?[[1,3,1e3*i]]:5>i?[[1,5,1e3]]:[[1,8,1e3]]);var n=[[1,3,2]];i>1?n.push([2,3,10]):i>5?n.push([5,10,20]):i>10&&n.push([7,15,20]),1>i?h.rain(n,500):5>i?h.rain(n,100/i):10>i?h.rain(n,5):h.rain(n,.5)},r.src="./images/"+a+d+".jpg"):r.src="./images/"+a+d+".jpg"}function r(){$("#background-img")&&($("#background-img").remove(),$("canvas").remove(),h={})}function e(){var a=["Rainfall10min","Rainfall1hr","Rainfall24hr"];f.forEach(function(n){m.hasOwnProperty(n.County)||(m[n.County]={Rainfall10min:0,Rainfall1hr:0,Rainfall24hr:0,Sitenumber:0}),m[n.County].Sitenumber+=1;for(var i in a)"Sitenumber"!==a[i]&&(m[n.County][a[i]]+=parseFloat(n[a[i]]))});for(var i in m)for(var r in a)m[i][a[r]]=(m[i][a[r]]/m[i].Sitenumber).toFixed(2);var e=n.location.hash,o=e.substring(e.indexOf("#")+1);o in m?s({id:o}):t(m)}function t(n){var a=0,e=0;r(),v.forEach(function(i){$(".mychart").append('<div class="raindrop" id="'+i+'"><h3>'+i+'</h3><h6>10分鐘平均累積雨量<br/><span class="red">'+n[i].Rainfall10min+'</span></h6><h6>1小時平均累積雨量<br/><span class="red">'+n[i].Rainfall1hr+'</span></h6><a href="#title" class="btn-more" onClick=showDetail('+i+")>點擊觀看</a></div>"),0!==Math.round(10*n[i].Rainfall1hr)&&(o("#"+i,l(n[i].Rainfall10min,n[i].Rainfall1hr)),a+=1,n[i].Rainfall10min>e&&(e=n[i].Rainfall10min))}),a>4||e>=2?i("rain","",e):i("sunny","")}function o(n,a){a=a||{};$(n).raindrops(a)}function l(n,a){var i,r=10*a,e="rgb(23, 139, 202)",t=40,o=400;return 1>n?i=5*n:5>n?(e="rgb(23, 139, 202)",i=10*n/5):10>n?(e="rgb(23, 139, 202)",o=200,i=15*n/10,t=80):15>n?(e="#f2711c",o=200,i=20*n/15,t=90):20>n?(e="#f2711c",o=200,t=90,i=25*n/20):(e="#DB2828",i=30,o=180,t=100,$("span").removeClass("red")),r>450&&(r=450),{color:e,waveLength:o,frequency:i,waveHeight:t,density:.04,canvasHeight:r}}function s(n){var a=[];f.forEach(function(i){i.County===n.id&&a.push(i)}),$(".mychart").empty(),c(a)}function c(a){var e=0,t=0;r(),a.forEach(function(n){var a=n.SiteName.replace(/[()]/g,"-");$(".mychart").append('<div class="raindrop" id="'+n.SiteId+'"><h3 class="sitename">'+a+"（"+n.Township+'）</h3><h6>10分鐘累積雨量<br/><span class="red">'+n.Rainfall10min+'</span></h6><h6>1小時累積雨量<br/><span class="red">'+n.Rainfall1hr+'</span></h6><h6>日累積雨量<br/><span class="red">'+n.Rainfall24hr+'</span></h6><a href="#'+n.County+'" class="btn-back" onClick=goBack()>返回</a></div>'),0!==Math.round(10*n.Rainfall1hr)&&(o("#"+n.SiteId,l(n.Rainfall10min,n.Rainfall1hr)),e+=1,n.Rainfall10min>t&&(t=n.Rainfall10min))});var s=1*a.length/4;e>s||t>2?i("rain",a[0].County,t):i("sunny",a[0].County),setTimeout(function(){n.location.hash=a[0].County},1e3)}function u(){$(".mychart").empty(),t(m)}n.showDetail=s,n.goBack=u;{var f,h,d,m={},p=(new Date).getHours(),v=["基隆市","臺北市","新北市","桃園市","新竹市","新竹縣","苗栗縣","臺中市","彰化縣","南投縣","雲林縣","嘉義市","嘉義縣","臺南市","高雄市","屏東縣","宜蘭縣","花蓮縣","臺東縣","連江縣","金門縣","澎湖縣"];new Firebase("https://realtaiwanstat2.firebaseio.com")}a()}(window)},{}]},{},[1]);