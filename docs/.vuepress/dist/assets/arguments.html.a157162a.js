import{_ as n,e as a}from"./app.c3e501b1.js";const e={},s=a(`<h1 id="\u7C7B\u6570\u7EC4\u5BF9\u8C61\u4E0Earguments" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6570\u7EC4\u5BF9\u8C61\u4E0Earguments" aria-hidden="true">#</a> \u7C7B\u6570\u7EC4\u5BF9\u8C61\u4E0Earguments</h1><h4 id="\u7C7B\u6570\u7EC4\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6570\u7EC4\u5BF9\u8C61" aria-hidden="true">#</a> \u7C7B\u6570\u7EC4\u5BF9\u8C61</h4><blockquote><p>\u62E5\u6709\u4E00\u4E2A length \u5C5E\u6027\u548C\u82E5\u5E72\u4E2A\u7D22\u5F15\u5C5E\u6027\u7684\u5BF9\u8C61</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [&#39;name&#39;,&#39;age&#39;,&#39;sex&#39;]

var arrLike = {
    0: &#39;name&#39;,
    1: &#39;age&#39;,
    2: &#39;sex&#39;,
    length: &#39;3&#39;
}
\u4E3A\u4EC0\u4E48\u4EA4\u7C7B\u6570\u7EC4\u5BF9\u8C61\uFF1F \u56E0\u4E3A\u5B83\u7684\u8BFB\u5199\uFF0C\u83B7\u53D6\u957F\u5EA6\uFF0Cfor \u904D\u5386\u548C\u6570\u7EC4\u90FD\u4E00\u6837\uFF0C\u533A\u522B\u662F\u4E0D\u80FD\u7528\u6570\u7EC4\u7684\u65B9\u6CD5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u7C7B\u6570\u7EC4\u8C03\u7528\u6570\u7EC4\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6570\u7EC4\u8C03\u7528\u6570\u7EC4\u65B9\u6CD5" aria-hidden="true">#</a> \u7C7B\u6570\u7EC4\u8C03\u7528\u6570\u7EC4\u65B9\u6CD5</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arrLike = {
    0: &#39;name&#39;,
    1: &#39;age&#39;,
    2: &#39;sex&#39;,
    length: &#39;3&#39;
}

Array.prototype.join.call(arrLike, &#39;&amp;&#39;) // name&amp;age&amp;sex

// 1. slice\u7C7B\u6570\u7EC4\u8F6C\u6570\u7EC4
Array.prototype.slice.call(arrayLike); // [&quot;name&quot;, &quot;age&quot;, &quot;sex&quot;] 
// 2. splice\u7C7B\u6570\u7EC4\u8F6C\u6570\u7EC4
Array.prototype.splice.call(arrayLike, 0); // [&quot;name&quot;, &quot;age&quot;, &quot;sex&quot;] 
// 3. ES6 Array.from
Array.from(arrayLike); // [&quot;name&quot;, &quot;age&quot;, &quot;sex&quot;]
// 4. concat\u7ED3\u5408apply
Array.prototype.concat.apply([], arrayLike) // [&quot;name&quot;, &quot;age&quot;, &quot;sex&quot;]

Array.prototype.map.call(arrayLike, function(item){
    return item.toUpperCase();
}); 
// [&quot;NAME&quot;, &quot;AGE&quot;, &quot;SEX&quot;]

Arguments\u5BF9\u8C61\u5C31\u662F\u7C7B\u7D20\u7EC4\u5BF9\u8C61\uFF0C\u5728\u5BA2\u6237\u7AEF JavaScript \u4E2D\uFF0C\u4E00\u4E9B DOM \u65B9\u6CD5\u4E5F\u8FD4\u56DE\u7C7B\u6570\u7EC4\u5BF9\u8C61

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="arguments\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#arguments\u5BF9\u8C61" aria-hidden="true">#</a> Arguments\u5BF9\u8C61</h4><blockquote><p>Arguments \u5BF9\u8C61\u53EA\u5B9A\u4E49\u5728\u51FD\u6570\u4F53\u4E2D\uFF0C\u5305\u62EC\u4E86\u51FD\u6570\u7684\u53C2\u6570\u548C\u5176\u5B83\u5C5E\u6027\uFF0C\u5728\u51FD\u6570\u4F53\u4E2D\uFF0Carguments \u6307\u4EE3\u8BE5\u51FD\u6570\u7684 Arguments \u5BF9\u8C61</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo(name, age, sex) {
    console.log(arguments);
}

foo(&#39;name&#39;, &#39;age&#39;, &#39;sex&#39;) // [&#39;name&#39;, &#39;age&#39;, &#39;sex&#39;, callee: \u0192, Symbol(Symbol.iterator): \u0192]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="length-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#length-\u5C5E\u6027" aria-hidden="true">#</a> length \u5C5E\u6027</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Arguments\u5BF9\u8C61\u7684length\u5C5E\u6027\uFF0C\u8868\u793A\u5B9E\u53C2\u7684\u957F\u5EA6\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A

function foo(b, c, d){
    console.log(&quot;\u5B9E\u53C2\u7684\u957F\u5EA6\u4E3A\uFF1A&quot; + arguments.length)
}

console.log(&quot;\u5F62\u53C2\u7684\u957F\u5EA6\u4E3A\uFF1A&quot; + foo.length)

foo(1)

// \u5F62\u53C2\u7684\u957F\u5EA6\u4E3A\uFF1A3
// \u5B9E\u53C2\u7684\u957F\u5EA6\u4E3A\uFF1A1

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="callee-\u5C5E\u6027-\u6307\u5411\u8C03\u7528\u51FD\u6570\u81EA\u8EAB" tabindex="-1"><a class="header-anchor" href="#callee-\u5C5E\u6027-\u6307\u5411\u8C03\u7528\u51FD\u6570\u81EA\u8EAB" aria-hidden="true">#</a> callee \u5C5E\u6027 \u6307\u5411\u8C03\u7528\u51FD\u6570\u81EA\u8EAB</h4><h4 id="symbol-symbol-iterator-\u5B83\u662F\u4E00\u79CD\u63A5\u53E3-\u4E3A\u5404\u79CD\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u63D0\u4F9B\u7EDF\u4E00\u7684\u8BBF\u95EE\u673A\u5236\u3002\u4EFB\u4F55\u6570\u636E\u7ED3\u6784\u53EA\u8981\u90E8\u7F72-iterator-\u63A5\u53E3-\u5C31\u53EF\u4EE5\u5B8C\u6210\u904D\u5386\u64CD\u4F5C-\u5373\u4F9D\u6B21\u5904\u7406\u8BE5\u6570\u636E\u7ED3\u6784\u7684\u6240\u6709\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#symbol-symbol-iterator-\u5B83\u662F\u4E00\u79CD\u63A5\u53E3-\u4E3A\u5404\u79CD\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u63D0\u4F9B\u7EDF\u4E00\u7684\u8BBF\u95EE\u673A\u5236\u3002\u4EFB\u4F55\u6570\u636E\u7ED3\u6784\u53EA\u8981\u90E8\u7F72-iterator-\u63A5\u53E3-\u5C31\u53EF\u4EE5\u5B8C\u6210\u904D\u5386\u64CD\u4F5C-\u5373\u4F9D\u6B21\u5904\u7406\u8BE5\u6570\u636E\u7ED3\u6784\u7684\u6240\u6709\u6210\u5458" aria-hidden="true">#</a> Symbol(Symbol.iterator) \u5B83\u662F\u4E00\u79CD\u63A5\u53E3\uFF0C\u4E3A\u5404\u79CD\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u63D0\u4F9B\u7EDF\u4E00\u7684\u8BBF\u95EE\u673A\u5236\u3002\u4EFB\u4F55\u6570\u636E\u7ED3\u6784\u53EA\u8981\u90E8\u7F72 Iterator \u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u5B8C\u6210\u904D\u5386\u64CD\u4F5C\uFF08\u5373\u4F9D\u6B21\u5904\u7406\u8BE5\u6570\u636E\u7ED3\u6784\u7684\u6240\u6709\u6210\u5458\uFF09</h4><h4 id="argument\u548C\u5BF9\u5E94\u53C2\u6570\u7684\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#argument\u548C\u5BF9\u5E94\u53C2\u6570\u7684\u7ED1\u5B9A" aria-hidden="true">#</a> Argument\u548C\u5BF9\u5E94\u53C2\u6570\u7684\u7ED1\u5B9A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function foo(name, age, sex, hobbit) {

    console.log(name, arguments[0]); // name name

    // \u6539\u53D8\u5F62\u53C2
    name = &#39;new name&#39;;

    console.log(name, arguments[0]); // new name new name

    // \u6539\u53D8arguments
    arguments[1] = &#39;new age&#39;;

    console.log(age, arguments[1]); // new age new age

    // \u6D4B\u8BD5\u672A\u4F20\u5165\u7684\u662F\u5426\u4F1A\u7ED1\u5B9A
    console.log(sex); // undefined

    sex = &#39;new sex&#39;;

    console.log(sex, arguments[2]); // new sex undefined

    arguments[3] = &#39;new hobbit&#39;;

    console.log(hobbit, arguments[3]); // undefined new hobbit

}

foo(&#39;name&#39;, &#39;age&#39;)
\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u5B9E\u53C2\u548C arguments \u7684\u503C\u4F1A\u5171\u4EAB\uFF0C\u5F53\u6CA1\u6709\u4F20\u5165\u65F6\uFF0C\u5B9E\u53C2\u4E0E arguments \u503C\u4E0D\u4F1A\u5171\u4EAB

\u9664\u6B64\u4E4B\u5916\uFF0C\u4EE5\u4E0A\u662F\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u662F\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u5B9E\u53C2\u548C arguments \u662F\u4E0D\u4F1A\u5171\u4EAB\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,15);function r(l,p){return s}var u=n(e,[["render",r],["__file","arguments.html.vue"]]);export{u as default};
