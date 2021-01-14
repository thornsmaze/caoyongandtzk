# caoyongandtzk
在长达一周的项目开发过程中，两位同学通力合作，总共耗时四天的时间结合所学的知识参考现有的成熟电商网站，自主开发了一个小型的功能性电商网站
原网站（小米科技）
网站还原度（40%-60%）
所用语言：js css html jquery php，使用框架：bootstrap等 使用数据库：MySQL
团队总体实现页面及实现功能：总共完成页面开发9个；主要功能包括登录注册、某一个商品的单一体现、商品全部阅览、商品分类阅览、添加购物车、对于所选商品进行评价、个人中心的信息修改
团队成员的详细分工及完成情况：
谭子琨（开发并实现了五个页面）：主页的布局、样式及渲染：首页采取参考网站的页面布局，实现动态渲染，轮播图、倒计时，左右切换，页面跳转等详细功能；
                               专门拿出小米11这款产品进行单一渲染，在主页找到小米十一的商品，可跳转至该页面，通过动画、鼠标滑动事件、滚轮滑动高度，定位等实现；
                               单一商品的分类，通过后端数据库的获取数据，当点击某一类商品的时候会获取该类商品的所有数据信息、并动态渲染在页面上，可从主页点击跳转进入该页面。
                              购物车页面的布局以及功能的实现，当用户点击商品详情页的加入购物车时，后端获取时局并动态渲染在购物车页面，并拥有添加、勾选、提示登录等功能，暂未连接支付接口
                               用户评论页面，从每一个商品详情页可以跳转至该商品的评论网页，可以把对于这件商品的一些感受书写在下面，其他用户也可以看到并可以点赞评论上一位用户的评论信                                                息，并实现了点赞和取消点赞的功能
 曹涌（开发并实现了四个页面）：登录注册页的渲染与功能实现：当用户进入主页想要购物时，弹出提示框可跳转登录页，在主页的导航栏中，也可跳转，登录页面主要是与后端的交互，点击注册摁钮可实现注                                册功能，并对于用户输入的数据进行正则判定及相应提示（不符合规范信息、密码强度、中文字符等等），并对注册的用户名进行了唯一性检测（即用户名不可重复），为第                                一个input框的失焦事件，测试网站是建议使用（账户：admin 密码：tzkwns123...）
                               全部商品的列表页：与单一商品渲染类似，可通过单一商品分类的导航中找到全部商品分类跳转按钮，同样通过数据库的数据把所有的商品种类及数据进行动态渲染
                               所有商品的详情页：从列表页中点击任意商品，跳转至该页面，可修改收货地址，未登录账户不可加入购物车，实现了放大镜及切换图片功能
                               个人中心页：登录后可通过主页的侧边导航栏‘个人中心’进行跳转和进入，页面实现了修改个人信息（四种），风险评估，账号得分等功能，皆为数据库动态渲染
开发心得及感想：这次的项目开发是对之前所学知识的一个整合及实践，大大提高了我们的代码书写能力和逻辑思维，两个人的合作也提高了团队合作能力，定期的项目分析、技术交流、查缺补漏等都为了以后                 真是的开发环境奠定了良好的基础，同时，通过本次合作开发，也看到了自身的不足，由于时间原因，有一部分计划中功能并未实现，且现存网页依旧存在些许bug，且浏览器的大小在不                     同电脑上的体现形式也有些许差异。
