"use strict";function asyncGeneratorStep(n,t,a,e,i,o,s){try{var c=n[o](s),r=c.value}catch(n){return void a(n)}c.done?t(r):Promise.resolve(r).then(e,i)}function _asyncToGenerator(c){return function(){var n=this,s=arguments;return new Promise(function(t,a){var e=c.apply(n,s);function i(n){asyncGeneratorStep(e,t,a,i,o,"next",n)}function o(n){asyncGeneratorStep(e,t,a,i,o,"throw",n)}i(void 0)})}}function getListOne(){return _getListOne.apply(this,arguments)}function _getListOne(){return(_getListOne=_asyncToGenerator(regeneratorRuntime.mark(function n(){var t,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$.get("../server/ListOne.php",null,null,"json");case 2:a=n.sent,t=a.list,a="",i=0;case 6:if(!(i<t.length)){n.next=14;break}if(0===i)return a+='<div class="tab">\n                    <div class="iconfont-arrow-down-big "></div><span>'.concat(t[i].good_section,'</span>\n                </div>\n                <ul class="List_good">\n                    <li>\n                        <a href="./GeneralDetails.html" data-id="').concat(t[i].id,'">\n                        <img src="').concat(t[i].sample_img,'" alt="">\n                        <span>').concat(t[i].good_name,"</span>\n                    </a>\n                    </li>"),n.abrupt("continue",11);n.next=10;break;case 10:t[i].good_section===t[i-1].good_section?a+='<li>\n                <a href="./GeneralDetails.html" data-id="'.concat(t[i].id,'">\n                        <img src="').concat(t[i].sample_img,'" alt="">\n                        <span>').concat(t[i].good_name,"</span>\n                    </a>\n                </li>"):a+='</ul>\n                    <div class="tab">\n                        <div class="iconfont-arrow-down-big "></div><span>'.concat(t[i].good_section,'</span>\n                    </div>\n                    <ul class="List_good">\n                    <li>\n                    <a href="./GeneralDetails.html" data-id="').concat(t[i].id,'">\n                        <img src="').concat(t[i].sample_img,'" alt="">\n                        <span>').concat(t[i].good_name,"</span>\n                    </a>\n                    </li>");case 11:i++,n.next=6;break;case 14:a+="</ul>",$(".main").html(a),$(".main").on("click",".tab",function(){$(this).find("div").toggleClass("iconfont-arrow-down-big").toggleClass("iconfont-arrow-up-big").toggleClass("active").parent().next().toggleClass("active")}),$(".main").on("click","a",function(){window.sessionStorage.setItem("id",this.dataset.id)});case 18:case"end":return n.stop()}},n)}))).apply(this,arguments)}getListOne();