"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,a){return n&&_defineProperties(e.prototype,n),a&&_defineProperties(e,a),e}var nickname=getCookie("nickname");nickname||(setCookie("url","cart"),window.location.href="./login.html");var username=document.querySelector(".login a");username.innerHTML=nickname;var Cart=function(){function n(e){_classCallCheck(this,n),this.ele=document.querySelector(e),this.flag=!0,this.data=JSON.parse(window.localStorage.getItem(nickname))||[],this.init()}return _createClass(n,[{key:"init",value:function(){this.bindCart(),this.oneCheck()}},{key:"bindCart",value:function(){this.data.length?($(".main_on").removeClass("active"),$(".main_off").addClass("active"),this.bindHtml()):($(".main_on").addClass("active"),$(".main_off").removeClass("active"))}},{key:"bindHtml",value:function(){var n=this;this.str="";var a=0,i=0,e=this.data.every(function(e){return e.is_select}),t=this.data.some(function(e){return e.is_select});this.str+='\n      <div class="table_head">\n          <div class="col_input"><input class="all check" type="checkbox" '.concat(e?"checked":"",'>全选</div>\n          <div class="col_img"><img src="" alt=""></div>\n          <div class="col_name">商品名称</div>\n          <div class="col_price">单价</div>\n          <div class="col_num">数量</div>\n          <div class="col_total">小计</div>\n          <div class="col_action">操作</div>\n      </div>'),this.data.forEach(function(e){n.str+='\n      <div class="table_body" data-index="'.concat(e.id,'">\n          <div class="col_input"><input class="one check" type="checkbox" ').concat(e.is_select?"checked":"",'></div>\n          <div class="col_img"><img src="').concat(e.sample_img,'" alt=""></div>\n          <div class="col_name">').concat(e.name,'</div>\n          <div class="col_price">').concat(e.price,'</div>\n          <div class="col_num"><i class="pre">-</i><input class="num" type="text" value="').concat(e.num,'"><i class="next">+</i></div>\n          <div class="col_total">').concat(e.price*e.num,'</div>\n          <div class="col_action">x</div>\n      </div>'),e.is_select&&(a+=e.price*e.num),i+=e.num}),this.str+='\n      <div class="table_footer">\n          <div class="saleNum">\n              <span>继续购物</span>\n              <span>共<i> '.concat(i,' </i>件商品</span>\n          </div>\n          <a href="" class="').concat(t?"active":"",'">去结算</a>\n          <div class="money">\n              <span>合计：<i>').concat(a,"</i>元</span>\n          </div>\n      </div>\n    "),this.ele.innerHTML=this.str,window.localStorage.setItem(nickname,JSON.stringify(this.data))}},{key:"oneCheck",value:function(){var i=this;this.ele.addEventListener("click",function(e){var n=(e=e||window.event).target||e.srcElement;if(-1!=n.className.indexOf("one"))return i.data.forEach(function(e){e.id==n.parentNode.parentNode.dataset.index&&(e.is_select=n.checked)}),void i.bindHtml();if(-1!=n.className.indexOf("all"))return i.data.forEach(function(e){return e.is_select=n.checked}),void i.bindHtml();if("pre"==n.className)return i.data.forEach(function(e){e.id==n.parentNode.parentNode.dataset.index&&1!=e.num&&--e.num}),void i.bindHtml();if("next"==n.className)return i.data.forEach(function(e){e.id==n.parentNode.parentNode.dataset.index&&(e.num+=1)}),void i.bindHtml();if("col_action"==n.className){for(var a=0;a<i.data.length;a++)i.data[a].id==n.parentNode.dataset.index&&i.data.splice(a,1);i.bindHtml(),i.bindCart()}})}}]),n}();new Cart(".main_on");