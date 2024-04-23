import{_ as l,r as i,o as t,c,a as n,b as a,F as b,e as r,d as e}from"./app.d8cd19f7.js";var p="/assets/1.6816044d.png";const o={},u=r(`<h1 id="diff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#diff\u7B97\u6CD5" aria-hidden="true">#</a> diff\u7B97\u6CD5</h1><blockquote><p>\u5C06\u4FE9\u9897\u6811\u5BF9\u6BD4\u7684\u7B97\u6CD5\u590D\u6742\u5EA6\u4E3AO(n^3)\uFF0C1000\u4E2A\u5143\u7D20\u6267\u884C\u7684\u8BA1\u7B97\u91CF\u5C06\u5728\u5341\u4EBF\u7684\u91CF\u7EA7\u8303\u56F4\uFF0C\u5F00\u9500\u592A\u5927\uFF0C</p></blockquote><h3 id="\u4E3A\u4E86\u964D\u4F4E\u7B97\u6CD5\u590D\u6742\u5EA6-react\u7684diff\u4F1A\u9884\u8BBE\u4E09\u4E2A\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4E86\u964D\u4F4E\u7B97\u6CD5\u590D\u6742\u5EA6-react\u7684diff\u4F1A\u9884\u8BBE\u4E09\u4E2A\u9650\u5236" aria-hidden="true">#</a> \u4E3A\u4E86\u964D\u4F4E\u7B97\u6CD5\u590D\u6742\u5EA6\uFF0CReact\u7684diff\u4F1A\u9884\u8BBE\u4E09\u4E2A\u9650\u5236</h3><ul><li>\u53EA\u5BF9\u540C\u7EA7\u5143\u7D20\u8FDB\u884CDiff\u3002\u5982\u679C\u4E00\u4E2ADOM\u8282\u70B9\u5728\u524D\u540E\u4E24\u6B21\u66F4\u65B0\u4E2D\u8DE8\u8D8A\u4E86\u5C42\u7EA7\uFF0C\u90A3\u4E48React\u4E0D\u4F1A\u5C1D\u8BD5\u590D\u7528\u5B83</li><li>\u4E24\u4E2A\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20\u4F1A\u4EA7\u751F\u51FA\u4E0D\u540C\u7684\u6811\u3002\u5982\u679C\u5143\u7D20\u7531div\u53D8\u4E3Ap\uFF0CReact\u4F1A\u9500\u6BC1div\u53CA\u5176\u5B50\u5B59\u8282\u70B9\uFF0C\u5E76\u65B0\u5EFAp\u53CA\u5176\u5B50\u5B59\u8282\u70B9</li><li>\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7 key prop\u6765\u6697\u793A\u54EA\u4E9B\u5B50\u5143\u7D20\u5728\u4E0D\u540C\u7684\u6E32\u67D3\u4E0B\u80FD\u4FDD\u6301\u7A33\u5B9A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u66F4\u65B0\u524D
&lt;div&gt;
  &lt;p key=&quot;ka&quot;&gt;ka&lt;/p&gt;
  &lt;h3 key=&quot;song&quot;&gt;song&lt;/h3&gt;
&lt;/div&gt;

// \u66F4\u65B0\u540E
&lt;div&gt;
  &lt;h3 key=&quot;song&quot;&gt;song&lt;/h3&gt;
  &lt;p key=&quot;ka&quot;&gt;ka&lt;/p&gt;
&lt;/div&gt;

// \u5982\u679C\u6CA1\u6709key\uFF0CReact\u4F1A\u8BA4\u4E3Adiv\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\u7531p\u53D8\u4E3Ah3\uFF0C\u7B2C\u4E8C\u4E2A\u5B50\u8282\u70B9\u7531h3\u53D8\u4E3Ap\u3002\u8FD9\u7B26\u5408\u9650\u52362\u7684\u8BBE\u5B9A\uFF0C\u4F1A\u9500\u6BC1\u5E76\u65B0\u5EFA\u3002
// \u4F46\u662F\u5F53\u6211\u4EEC\u7528key\u6307\u660E\u4E86\u8282\u70B9\u524D\u540E\u5BF9\u5E94\u5173\u7CFB\u540E\uFF0CReact\u77E5\u9053key === &quot;ka&quot;\u7684p\u5728\u66F4\u65B0\u540E\u8FD8\u5B58\u5728\uFF0C\u6240\u4EE5DOM\u8282\u70B9\u53EF\u4EE5\u590D\u7528\uFF0C\u53EA\u662F\u9700\u8981\u4EA4\u6362\u4E0B\u987A\u5E8F

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="diff\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#diff\u7684\u5B9E\u73B0" aria-hidden="true">#</a> Diff\u7684\u5B9E\u73B0</h3><p>Diff\u7684\u5165\u53E3\u51FD\u6570reconcileChildFibers\u51FA\u53D1\uFF0C\u8BE5\u51FD\u6570\u4F1A\u6839\u636EnewChild\uFF08\u5373JSX\u5BF9\u8C61\uFF09\u7C7B\u578B\u8C03\u7528\u4E0D\u540C\u7684\u5904\u7406\u51FD\u6570</p>`,7),d={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1280",target:"_blank",rel:"noopener noreferrer"},m=e("reconcileChildFibers"),h=e("\u7684\u6E90\u7801"),f=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6839\u636EnewChild\u7C7B\u578B\u9009\u62E9\u4E0D\u540Cdiff\u51FD\u6570\u5904\u7406
function reconcileChildFibers(
  returnFiber: Fiber,
  currentFirstChild: Fiber | null,
  newChild: any,
): Fiber | null {

  const isObject = typeof newChild === &#39;object&#39; &amp;&amp; newChild !== null;

  if (isObject) {
    // object\u7C7B\u578B\uFF0C\u53EF\u80FD\u662F REACT_ELEMENT_TYPE \u6216 REACT_PORTAL_TYPE
    switch (newChild.$$typeof) {
      case REACT_ELEMENT_TYPE:
        // \u8C03\u7528 reconcileSingleElement \u5904\u7406
      // // ...\u7701\u7565\u5176\u4ED6case
    }
  }

  if (typeof newChild === &#39;string&#39; || typeof newChild === &#39;number&#39;) {
    // \u8C03\u7528 reconcileSingleTextNode \u5904\u7406
    // ...\u7701\u7565
  }

  if (isArray(newChild)) {
    // \u8C03\u7528 reconcileChildrenArray \u5904\u7406
    // ...\u7701\u7565
  }

  // \u4E00\u4E9B\u5176\u4ED6\u60C5\u51B5\u8C03\u7528\u5904\u7406\u51FD\u6570
  // ...\u7701\u7565

  // \u4EE5\u4E0A\u90FD\u6CA1\u6709\u547D\u4E2D\uFF0C\u5220\u9664\u8282\u70B9
  return deleteRemainingChildren(returnFiber, currentFirstChild);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u4ECE\u540C\u7EA7\u7684\u8282\u70B9\u6570\u91CF\u5C06Diff\u5206\u4E3A\u4E24\u7C7B\uFF1A</p><ul><li>\u5F53newChild\u7C7B\u578B\u4E3Aobject\u3001number\u3001string\uFF0C\u4EE3\u8868\u540C\u7EA7\u53EA\u6709\u4E00\u4E2A\u8282\u70B9</li><li>\u5F53newChild\u7C7B\u578B\u4E3AArray\uFF0C\u540C\u7EA7\u6709\u591A\u4E2A\u8282\u70B9</li></ul><h3 id="\u5355\u8282\u70B9diff" tabindex="-1"><a class="header-anchor" href="#\u5355\u8282\u70B9diff" aria-hidden="true">#</a> \u5355\u8282\u70B9diff</h3><p>\u5355\u4E2A\u8282\u70B9\uFF0C\u6211\u4EEC\u4EE5\u7C7B\u578Bobject\u4E3A\u4F8B\uFF0C\u4F1A\u8FDB\u5165reconcileSingleElement\uFF08string number\u7C7B\u578B\u8C03\u7528reconcileSingleTextNode\uFF09\uFF0C</p>`,5),g={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1141",target:"_blank",rel:"noopener noreferrer"},_=e("reconcileSingleElement"),k=e("\u7684\u6E90\u7801"),C=n("p",null,[e("\u8FD9\u4E2A\u51FD\u6570\u4F1A\u505A\u5982\u4E0B\u4E8B\u60C5\uFF1A "),n("img",{src:p,alt:""}),e(" \u9996\u5148\u5224\u65AD\u4E0A\u6B21\u66F4\u65B0\u65F6\u7684fiber\u8282\u70B9\u662F\u5426\u5B58\u5728\u5BF9\u5E94DOM\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u65B0\u751F\u6210\u4E00\u4E2Afiber\u8282\u70B9\u5E76\u8FD4\u56DE\uFF0C\u5982\u679C\u5B58\u5728\uFF0C\u5219\u5224\u65ADDOM\u662F\u5426\u53EF\u4EE5\u590D\u7528(\uFF0CReact\u901A\u8FC7\u5148\u5224\u65ADkey\u662F\u5426\u76F8\u540C\uFF0C\u5982\u679Ckey\u76F8\u540C\u5219\u5224\u65ADtype\u662F\u5426\u76F8\u540C\uFF0C\u53EA\u6709\u90FD\u76F8\u540C\u65F6\u4E00\u4E2ADOM\u8282\u70B9\u624D\u80FD\u590D\u7528)\uFF0C\u5982\u679C\u53EF\u4EE5\u590D\u7528\uFF0C\u5C06\u4E0A\u6B21\u66F4\u65B0\u7684fiber\u8282\u70B9\u7684\u526F\u672C\u4F5C\u4E3A\u672C\u6B21\u65B0\u751F\u6210\u7684Fiber\u8282\u70B9\u5E76\u8FD4\u56DE\uFF0C\u5982\u679C\u4E0D\u80FD\u590D\u7528\uFF0C\u6807\u8BB0DOM\u9700\u8981\u5220\u9664\uFF0C\u65B0\u751F\u6210\u4E00\u4E2Afiber\u8282\u70B9\u5E76\u8FD4\u56DE")],-1);function x(v,y){const s=i("ExternalLinkIcon");return t(),c(b,null,[u,n("blockquote",null,[n("p",null,[n("a",d,[m,a(s)]),h])]),f,n("blockquote",null,[n("p",null,[n("a",g,[_,a(s)]),k])]),C],64)}var F=l(o,[["render",x],["__file","diff.html.vue"]]);export{F as default};
