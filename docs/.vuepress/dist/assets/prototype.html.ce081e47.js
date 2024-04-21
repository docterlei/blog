import{_ as n,e}from"./app.c370ba42.js";const s={},a=e(`<h1 id="\u539F\u578B\u5230\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u5230\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u5230\u539F\u578B\u94FE</h1><h4 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> prototype</h4><p>\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4E2Aprototype\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u6307\u5411\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u6B63\u662F\u7528\u8BE5\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684\u5B9E\u4F8B\u7684\u539F\u578B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// prototype \u662F\u51FD\u6570\u624D\u6709\u7684\u5C5E\u6027
function Person(){

}
Person.prototype.alias = &#39;monster&#39;
const michael = new Person()
const andrew = new Person()
console.log(michael.alias) // monster
console.log(andrew.alias) // monster
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="proto" tabindex="-1"><a class="header-anchor" href="#proto" aria-hidden="true">#</a> __proto__</h4><p>\u6BCF\u4E00\u4E2AJavaScritp\u5BF9\u8C61(null\u9664\u5916)\u90FD\u6709\u4E00\u4E2A__proto__\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4F1A\u6307\u5411\u8BE5\u5BF9\u8C61\u7684\u539F\u578B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person(){

}
const michael = new Person()
console.log(michael.__proto__ === Person.prototype) // true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u539F\u578B\uFF1A \u6BCF\u4E00\u4E2AJavaScript\u5BF9\u8C61(null\u9664\u5916)\u5728\u521B\u5EFA\u7684\u65F6\u5019\u4F1A\u4E0E\u4E4B\u5173\u8054\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u662F\u6211\u4EEC\u6240\u8BF4\u7684\u539F\u578B\uFF0C\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u4F1A\u4ECE\u539F\u578B\u7EE7\u627F\u5C5E\u6027</p><h4 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h4><p>\u6BCF\u4E2A\u539F\u578B\u90FD\u6709\u4E00\u4E2A constructor \u5C5E\u6027\u6307\u5411\u5173\u8054\u7684\u6784\u9020\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function Person() {

}
console.log(Person === Person.prototype.constructor); // true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,11);function r(t,o){return a}var p=n(s,[["render",r],["__file","prototype.html.vue"]]);export{p as default};
