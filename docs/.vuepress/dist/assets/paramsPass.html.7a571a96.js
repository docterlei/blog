import{_ as a,e as n}from"./app.745925eb.js";const s={},e=n(`<h1 id="\u53C2\u6570\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a> \u53C2\u6570\u4F20\u9012</h1><h4 id="_1-\u6309\u503C\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#_1-\u6309\u503C\u4F20\u9012" aria-hidden="true">#</a> 1.\u6309\u503C\u4F20\u9012</h4><p>ECMAScript\u4E2D\u6240\u6709\u51FD\u6570\u7684\u53C2\u6570\u90FD\u662F\u6309\u503C\u4F20\u9012\u7684 \u4E5F\u5C31\u662F\u8BF4\u628A\u51FD\u6570\u5916\u90E8\u7684\u503C\u590D\u5236\u7ED9\u51FD\u6570\u5185\u90E8\u7684\u53C2\u6570\uFF0C\u5C31\u662F\u628A\u503C\u4ECE\u4E00\u4E2A\u53D8\u91CF\u590D\u5236\u5230\u53E6\u4E00\u4E2A\u53D8\u91CF \u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1;
function foo(v) {
    v = 2;
    console.log(v) //2
}
foo(a)
console.log(1) // 1

\u5F53\u4F20\u9012 a \u5230\u51FD\u6570 foo \u4E2D\uFF0C\u76F8\u5F53\u4E8E\u62F7\u8D1D\u91CF\u4E00\u4EFD a \u7684\u503C\u7ED9\u4E86 v \u51FD\u6570\u4E2D\u4FEE\u6539\u7684\u90FD\u662F v \u7684\u503C \u800C\u4E0D\u4F1A\u5F71\u54CD\u539F\u6765\u7684 a \u503C

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_2-\u5F15\u7528\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#_2-\u5F15\u7528\u4F20\u9012" aria-hidden="true">#</a> 2. \u5F15\u7528\u4F20\u9012</h4><p>\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u662F\u5BF9\u8C61\u7684\u5F15\u7528 \u51FD\u6570\u5185\u90E8\u5BF9\u53C2\u6570\u4EFB\u4F55\u4FEE\u6539\u90FD\u4F1A\u5F71\u54CD\u8BE5\u5BF9\u8C61\u7684\u503C \u56E0\u4E3A\u4FE9\u8005\u5F15\u7528\u7684\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> var obj = { a: 1}
 function foo(param) {
     param.a = 2
     console.log(params.a) //2
 }
 foo(obj)
 console.log(obj.a) // 2
 \u6211\u4EEC\u4E0A\u9762\u8BF4 js \u662F\u6309\u503C\u4F20\u9012 \u73B0\u5728\u8FD9\u79CD\u60C5\u51B5 \u50CF\u662F\u6309\u5F15\u7528\u4F20\u9012\u4E86 \u5176\u5B9E\u8FD9\u79CD\u662F\u6309\u5171\u4EAB\u4F20\u9012
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="\u6309\u5171\u4EAB\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u6309\u5171\u4EAB\u4F20\u9012" aria-hidden="true">#</a> \u6309\u5171\u4EAB\u4F20\u9012</h4><p>\u6309\u5171\u4EAB\u4F20\u9012 \u4F20\u9012\u7ED9\u51FD\u6570\u7684\u662F\u4F20\u9012\u5BF9\u8C61\u7684\u5F15\u7528\u7684\u526F\u672C \u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj = {a: 1}
function foo(param) {
    param = 2
    console.log(param) // 2
}
foo(obj)
console.log(obj) // {a: 1}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3\uFF1A</h4><p>\u53C2\u6570\u5982\u679C\u662F\u57FA\u672C\u7C7B\u578B\u662F\u6309\u503C\u4F20\u9012 \u5982\u679C\u662F\u5F15\u7528\u7C7B\u578B\u662F\u6309\u5171\u4EAB\u4F20\u9012</p>`,12);function r(l,i){return e}var c=a(s,[["render",r],["__file","paramsPass.html.vue"]]);export{c as default};
