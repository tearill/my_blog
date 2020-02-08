(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{219:function(t,e,_){"use strict";_.r(e);var s=_(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),_("p",[_("img",{attrs:{src:t.$withBase("/week11/1.jpg"),alt:"project"}})]),t._v(" "),_("p",[t._v("接下来，我们将来以此为依据来介绍重绘和回流，以及让更新视图的另外一种方式——合成。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("具体一点，有以下的操作会触发回流:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),_("p",[t._v("依照上面的渲染流水线，触发回流的时候，如果 DOM 结构发生改变，则重新渲染 DOM 树，然后将后面的流程(包括主线程之外的任务)全部走一遍。")]),t._v(" "),_("p",[_("img",{attrs:{src:t.$withBase("/week11/2.jpg"),alt:"project"}})]),t._v(" "),_("p",[t._v("相当于将解析和合成的过程重新又走了一篇，开销是非常大的。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),_("p",[t._v("由于没有导致 DOM 几何属性的变化，因此元素的位置信息不需要更新，从而省去布局的过程。流程如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:t.$withBase("/week11/3.jpg"),alt:"project"}})]),t._v(" "),t._m(12),t._v(" "),_("p",[t._v("可以看到，重绘不一定导致回流，但回流一定发生了重绘。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),_("p",[t._v("知道上面的原理之后，对于开发过程有什么指导意义呢？")]),t._v(" "),_("ol",[t._m(19),t._v(" "),t._m(20),t._v(" "),_("li",[t._v("对于 resize、scroll 等进行防抖/节流处理。")]),t._v(" "),_("li",[t._v("添加 will-change: tranform ，让渲染引擎为其单独实现一个图层，当这些变换发生时，仅仅只是利用合成线程去处理这些变换，而不牵扯到主线程，大大提高渲染效率。当然这个变化不限于"),_("code",[t._v("tranform")]),t._v(", 任何可以实现合成效果的 CSS 属性都能用"),_("code",[t._v("will-change")]),t._v("来声明。这里有一个实际的例子，一行"),_("code",[t._v("will-change: tranform")]),t._v("拯救一个项目，"),_("a",{attrs:{href:"https://juejin.im/post/5da52531518825094e373372",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击直达"),_("OutboundLink")],1),t._v("。")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"_004-谈谈你对重绘和回流的理解。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_004-谈谈你对重绘和回流的理解。","aria-hidden":"true"}},[this._v("#")]),this._v(" 004: 谈谈你对重绘和回流的理解。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们首先来回顾一下"),e("code",[this._v("渲染流水线")]),this._v("的流程:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"回流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流","aria-hidden":"true"}},[this._v("#")]),this._v(" 回流")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("首先介绍"),e("code",[this._v("回流")]),this._v("。"),e("code",[this._v("回流")]),this._v("也叫"),e("code",[this._v("重排")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"触发条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发条件","aria-hidden":"true"}},[this._v("#")]),this._v(" 触发条件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("简单来说，就是当我们对 DOM 结构的修改引发 DOM 几何尺寸变化的时候，会发生"),e("code",[this._v("回流")]),this._v("的过程。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ol",[_("li",[_("p",[t._v("一个 DOM 元素的几何属性变化，常见的几何属性有"),_("code",[t._v("width")]),t._v("、"),_("code",[t._v("height")]),t._v("、"),_("code",[t._v("padding")]),t._v("、"),_("code",[t._v("margin")]),t._v("、"),_("code",[t._v("left")]),t._v("、"),_("code",[t._v("top")]),t._v("、"),_("code",[t._v("border")]),t._v(" 等等, 这个很好理解。")])]),t._v(" "),_("li",[_("p",[t._v("使 DOM 节点发生"),_("code",[t._v("增减")]),t._v("或者"),_("code",[t._v("移动")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("读写 "),_("code",[t._v("offset")]),t._v("族、"),_("code",[t._v("scroll")]),t._v("族和"),_("code",[t._v("client")]),t._v("族属性的时候，浏览器为了获取这些值，需要进行回流操作。")])]),t._v(" "),_("li",[_("p",[t._v("调用 "),_("code",[t._v("window.getComputedStyle")]),t._v(" 方法。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"回流过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 回流过程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重绘","aria-hidden":"true"}},[this._v("#")]),this._v(" 重绘")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"触发条件-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发条件-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 触发条件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当 DOM 的修改导致了样式的变化，并且没有影响几何属性的时候，会导致"),e("code",[this._v("重绘")]),this._v("("),e("code",[this._v("repaint")]),this._v(")。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"重绘过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重绘过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 重绘过程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("跳过了"),e("code",[this._v("生成布局树")]),this._v("和"),e("code",[this._v("建图层树")]),this._v("的阶段，直接生成绘制列表，然后继续进行分块、生成位图等后面一系列操作。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"合成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合成","aria-hidden":"true"}},[this._v("#")]),this._v(" 合成")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("还有一种情况，是直接合成。比如利用 CSS3 的"),_("code",[t._v("transform")]),t._v("、"),_("code",[t._v("opacity")]),t._v("、"),_("code",[t._v("filter")]),t._v("这些属性就可以实现合成的效果，也就是大家常说的"),_("strong",[t._v("GPU加速")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"gpu加速的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gpu加速的原因","aria-hidden":"true"}},[this._v("#")]),this._v(" GPU加速的原因")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在合成的情况下，会直接跳过布局和绘制流程，直接进入"),e("code",[this._v("非主线程")]),this._v("处理的部分，即直接交给"),e("code",[this._v("合成线程")]),this._v("处理。交给它处理有两大好处:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("能够充分发挥"),e("code",[this._v("GPU")]),this._v("的优势。合成线程生成位图的过程中会调用线程池，并在其中使用"),e("code",[this._v("GPU")]),this._v("进行加速生成，而GPU 是擅长处理位图数据的。")])]),this._v(" "),e("li",[e("p",[this._v("没有占用主线程的资源，即使主线程卡住了，效果依然能够流畅地展示。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"实践意义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实践意义","aria-hidden":"true"}},[this._v("#")]),this._v(" 实践意义")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("避免频繁使用 style，而是采用修改"),e("code",[this._v("class")]),this._v("的方式。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("使用"),e("code",[this._v("createDocumentFragment")]),this._v("进行批量的 DOM 操作。")])}],!1,null,null,null);e.default=i.exports}}]);