"use strict";function asyncGeneratorStep(e,t,n,r,a,o,s){try{var c=e[o](s),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function _asyncToGenerator(c){return function(){var e=this,s=arguments;return new Promise(function(t,n){var r=c.apply(e,s);function a(e){asyncGeneratorStep(r,t,n,a,o,"next",e)}function o(e){asyncGeneratorStep(r,t,n,a,o,"throw",e)}a(void 0)})}}var _final=document.querySelector(".final"),grade=100,count=0;_final.addEventListener("click",function(){setCookie("nickname","123",-5e3),window.location.href="./login.html"});var nickname=getCookie("nickname"),username=getCookie("username");console.log(username);var right=document.querySelectorAll(".right-p>p");function getUsername(){return _getUsername.apply(this,arguments)}function _getUsername(){return(_getUsername=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.get("../server/getUsername.php",{list_username:username},null,"json");case 2:for(key in n=e.sent,n=n.list,t=n[0],console.log(t),t)t[key]||(count++,grade-=20);document.querySelector(".fen1").innerHTML=grade,document.querySelector(".fen2").innerHTML=count,n=document.querySelector(".hei"),n=parseInt(window.getComputedStyle(n).width),n=.01*n*grade,document.querySelector(".red").style.width=n+"px",document.querySelector(".qiu").style.marginLeft=n+"px";case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}nickname&&(right[0].innerHTML="您好 : ".concat(nickname)),username&&(right[1].innerHTML="欢迎您 : ".concat(username)),getUsername();var set1=document.querySelector(".set"),set2=document.querySelector(".set1"),set3=document.querySelector(".set2"),set4=document.querySelector(".set3");set1.addEventListener("click",function(){var e=prompt("请修改您的密码");/^[0-9a-z!@#\$\^&\*\.]{7,16}$/i.test(e)?ajax({url:"../server/UpdatePw.php",method:"POST",data:{username:username,password:e},success:function(e){alert("恭喜您，修改密码成功，请重新登录"),window.location.href="./login.html"}}):alert("此次修改的密码不符合规范哦~~(7到16位哦)")}),set2.addEventListener("click",function(){var e=prompt("请修改您的地址");/^[\u4e00-\u9fa5a-z0-9]{2,15}$/gm.test(e)?ajax({url:"../server/UpdateAd.php",method:"POST",data:{username:username,address:e},success:function(e){alert("恭喜您，修改地址成功，祝您上网愉快！！！")}}):alert("此次修改的地址不符合规范哦~~(2到15位哦)")}),set3.addEventListener("click",function(){var e=prompt("请绑定您的手机");/^[0-9]{11}$/gm.test(e)?ajax({url:"../server/UpdateIphone.php",method:"POST",data:{username:username,iphone:e},success:function(e){alert("恭喜您，绑定手机成功，祝您上网愉快！！！")}}):alert("此次绑定的手机不符合规范哦~~(11位哦)")}),set4.addEventListener("click",function(){var e=prompt("请修改您的昵称");/^[\u4e00-\u9fa5a-z0-9]{2,9}$/gm.test(e)?ajax({url:"../server/UpdateNick.php",method:"POST",data:{username:username,nickname:e},success:function(e){alert("恭喜您，修改昵称成功，祝您购物愉快！！！")}}):alert("此次修改的昵称不符合规范哦~~(2到9位哦)")});