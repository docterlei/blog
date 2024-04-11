import{_ as n,e as s}from"./app.745925eb.js";const a={},e=s(`<h1 id="this\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#this\u6307\u5411" aria-hidden="true">#</a> this\u6307\u5411</h1><h4 id="\u6D4F\u89C8\u5668\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u73AF\u5883" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u73AF\u5883</h4><h4 id="_1-\u51FD\u6570\u5916\u9762\u7684-this-\u5373\u5168\u5C40\u4F5C\u7528\u57DF\u7684-this-\u6307\u5411-window-\u4E25\u683C\u6A21\u5F0F\u4E0B-\u51FD\u6570\u91CC\u9762\u7684-this-\u6307\u5411-undefined-\u51FD\u6570\u5916\u9762\u7684-this-\u8FD8\u662F\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#_1-\u51FD\u6570\u5916\u9762\u7684-this-\u5373\u5168\u5C40\u4F5C\u7528\u57DF\u7684-this-\u6307\u5411-window-\u4E25\u683C\u6A21\u5F0F\u4E0B-\u51FD\u6570\u91CC\u9762\u7684-this-\u6307\u5411-undefined-\u51FD\u6570\u5916\u9762\u7684-this-\u8FD8\u662F\u6307\u5411" aria-hidden="true">#</a> 1. \u51FD\u6570\u5916\u9762\u7684 this\uFF0C\u5373\u5168\u5C40\u4F5C\u7528\u57DF\u7684 this \u6307\u5411 window\uFF0C \u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u51FD\u6570\u91CC\u9762\u7684 this \u6307\u5411 undefined, \u51FD\u6570\u5916\u9762\u7684 this \u8FD8\u662F\u6307\u5411</h4><h4 id="_2-\u51FD\u6570\u5185\u90E8\u7684-this-\u603B\u662F\u6307\u5411\u76F4\u63A5\u8C03\u7528\u8005-\u5982\u679C\u6CA1\u6709\u76F4\u63A5\u8C03\u7528\u8005-\u9690\u542B\u8C03\u7528\u8005\u662F-window" tabindex="-1"><a class="header-anchor" href="#_2-\u51FD\u6570\u5185\u90E8\u7684-this-\u603B\u662F\u6307\u5411\u76F4\u63A5\u8C03\u7528\u8005-\u5982\u679C\u6CA1\u6709\u76F4\u63A5\u8C03\u7528\u8005-\u9690\u542B\u8C03\u7528\u8005\u662F-window" aria-hidden="true">#</a> 2. \u51FD\u6570\u5185\u90E8\u7684 this \u603B\u662F\u6307\u5411\u76F4\u63A5\u8C03\u7528\u8005\uFF0C\u5982\u679C\u6CA1\u6709\u76F4\u63A5\u8C03\u7528\u8005\uFF0C\u9690\u542B\u8C03\u7528\u8005\u662F window</h4><h4 id="_3-\u4F7F\u7528-new-\u8C03\u7528\u4E00\u4E2A\u51FD\u6570-\u51FD\u6570\u91CC\u9762\u7684-this-\u6307\u5411\u5B9E\u4F8B\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528-new-\u8C03\u7528\u4E00\u4E2A\u51FD\u6570-\u51FD\u6570\u91CC\u9762\u7684-this-\u6307\u5411\u5B9E\u4F8B\u5BF9\u8C61" aria-hidden="true">#</a> 3. \u4F7F\u7528 new \u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u91CC\u9762\u7684 this \u6307\u5411\u5B9E\u4F8B\u5BF9\u8C61</h4><h4 id="_4-dom\u4E8B\u4EF6\u56DE\u8C03\u91CC\u9762-this\u6307\u5411\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_4-dom\u4E8B\u4EF6\u56DE\u8C03\u91CC\u9762-this\u6307\u5411\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5BF9\u8C61" aria-hidden="true">#</a> 4. DOM\u4E8B\u4EF6\u56DE\u8C03\u91CC\u9762\uFF0Cthis\u6307\u5411\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5BF9\u8C61</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function func(e) {
  console.log(this === e.currentTarget);   // \u603B\u662Ftrue
  console.log(this === e.target);          // \u5982\u679Ctarget\u7B49\u4E8EcurrentTarget,\u8FD9\u4E2A\u5C31\u4E3Atrue
}

const ele = document.getElementById(&#39;test&#39;);

ele.addEventListener(&#39;click&#39;, func);

currentTarget\u6307\u7684\u662F\u7ED1\u5B9A\u4E8B\u4EF6\u7684DOM\u5BF9\u8C61\uFF0Ctarget\u6307\u7684\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5BF9\u8C61\u3002DOM\u4E8B\u4EF6\u56DE\u8C03\u91CC\u9762this\u603B\u662F\u6307\u5411currentTarget\uFF0C\u5982\u679C\u89E6\u53D1\u4E8B\u4EF6\u7684\u5BF9\u8C61\u521A\u597D\u662F\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5BF9\u8C61\uFF0C\u5373target === currentTarget\uFF0Cthis\u4E5F\u4F1A\u987A\u4FBF\u6307\u5411target\u3002\u5982\u679C\u56DE\u8C03\u662F\u7BAD\u5934\u51FD\u6570\uFF0Cthis\u662F\u7BAD\u5934\u51FD\u6570\u7533\u660E\u65F6\u4F5C\u7528\u57DF\u7684this\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_5-\u7BAD\u5934\u51FD\u6570\u672C\u8EAB\u6CA1\u6709-this-\u7BAD\u5934\u51FD\u6570\u5728\u88AB\u58F0\u660E\u65F6\u786E\u5B9A-this-\u4F1A\u628A\u5F53\u524D\u4F5C\u7528\u57DF\u7684-this-\u4F5C\u4E3A\u81EA\u5DF1\u7684-this" tabindex="-1"><a class="header-anchor" href="#_5-\u7BAD\u5934\u51FD\u6570\u672C\u8EAB\u6CA1\u6709-this-\u7BAD\u5934\u51FD\u6570\u5728\u88AB\u58F0\u660E\u65F6\u786E\u5B9A-this-\u4F1A\u628A\u5F53\u524D\u4F5C\u7528\u57DF\u7684-this-\u4F5C\u4E3A\u81EA\u5DF1\u7684-this" aria-hidden="true">#</a> 5. \u7BAD\u5934\u51FD\u6570\u672C\u8EAB\u6CA1\u6709 this\uFF0C\u7BAD\u5934\u51FD\u6570\u5728\u88AB\u58F0\u660E\u65F6\u786E\u5B9A this\uFF0C\u4F1A\u628A\u5F53\u524D\u4F5C\u7528\u57DF\u7684 this \u4F5C\u4E3A\u81EA\u5DF1\u7684 this</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.  var name = &quot;monster&quot;;

    var obj = {
      name: &quot;andrew&quot;,
      func: () =&gt; {
        console.log(this.name);
      }
    }

    var anotherFunc = obj.func;

    obj.func();      // monster
    anotherFunc();   // monster
    \u4E0A\u8FF0\u4EE3\u7801\u91CC\u9762\u7684obj.func()\u8F93\u51FA\u4E5F\u662F\u201Cmonster\u201D\uFF0C\u662F\u56E0\u4E3Aobj\u5728\u521B\u5EFA\u65F6\u7533\u660E\u4E86\u7BAD\u5934\u51FD\u6570\uFF0C\u8FD9\u65F6\u5019\u7BAD\u5934\u51FD\u6570\u4F1A\u53BB\u5BFB\u627E\u5F53\u524D\u4F5C\u7528\u57DF\uFF0C\u56E0\u4E3Aobj\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u4E0D\u662F\u4F5C\u7528\u57DF\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u4F5C\u7528\u57DF\u662Fwindow\uFF0Cthis\u4E5F\u5C31\u662Fwindow\u4E86\u3002

2.  var name = &quot;monster&quot;;

    var obj = {
      name: &quot;andrew&quot;,
      func: function () {
        return {
          getName: () =&gt; {
            console.log(this.name);
          }
        }
      }
    }

    var anotherFunc = obj.func().getName;

    obj.func().getName();      // andrew
    anotherFunc();   // andrew
    
    obj.func().getName()\u8F93\u51FAandrew\uFF0C\u8FD9\u91CC\u7BAD\u5934\u51FD\u6570\u662F\u5728obj.func()\u7684\u8FD4\u56DE\u503C\u91CC\u7533\u660E\u7684\uFF0C
    \u8FD9\u65F6\u4ED6\u7684this\u5176\u5B9E\u5C31\u662Ffunc()\u7684this\uFF0C\u56E0\u4E3A\u4ED6\u662F\u88ABobj\u8C03\u7528\u7684\uFF0C\u6240\u4EE5this\u6307\u5411obj\u3002

    \u90A3\u4E3A\u4EC0\u4E48anotherFunc()\u8F93\u51FA\u4E5F\u662F\u201C\u5C0F\u5C0F\u98DE\u201D\u5462\uFF1F\u8FD9\u662F\u56E0\u4E3AanotherFunc()\u8F93\u51FA\u7684this\uFF0C
    \u5176\u5B9E\u5728anotherFunc\u8D4B\u503C\u65F6\u5C31\u786E\u5B9A\u4E86\uFF1A

    1var anotherFunc = obj.func().getName;\u5176\u5B9E\u662F\u5148\u6267\u884C\u4E86obj.func()
    2\u6267\u884Cobj.func()\u7684\u65F6\u5019getName\u7BAD\u5934\u51FD\u6570\u88AB\u7533\u660E
    3\u8FD9\u65F6\u5019\u7BAD\u5934\u51FD\u6570\u7684this\u5E94\u8BE5\u662F\u5F53\u524D\u4F5C\u7528\u57DF\u7684this\uFF0C\u4E5F\u5C31\u662Ffunc()\u91CC\u9762\u7684this
    4func()\u56E0\u4E3A\u662F\u88ABobj\u8C03\u7528\uFF0C\u6240\u4EE5this\u6307\u5411obj
    5\u8C03\u7528anotherFunc\u65F6\uFF0C\u5176\u5B9Ethis\u65E9\u5C31\u786E\u5B9A\u4E86\uFF0C\u4E5F\u5C31\u662Fobj\uFF0C\u6700\u7EC8\u8F93\u51FA\u7684\u662Fobj.myName\u3002
    
3.  var name = &quot;monster&quot;;

    function func() {
      this.name = &quot;andrew&quot;;

      const getName = () =&gt; {
        console.log(this.name);
      }

      getName();
    }

    new func(); // \u8F93\u51FA\u5565\uFF1F
    \u8FD9\u91CC\u8F93\u51FA\u7684\u662F\u201Candrew\u201D\uFF0C\u539F\u7406\u8FD8\u662F\u4E00\u6837\u7684\uFF0C\u7BAD\u5934\u51FD\u6570\u5728\u7533\u660E\u65F6this\u786E\u5B9A\u4E3A\u5F53\u524D\u4F5C\u7528\u57DF\u7684this\uFF0C\u5728\u8FD9\u91CC\u5C31\u662Ffunc\u7684\u4F5C\u7528\u57DF\uFF0C\u8DDFfunc\u7684this\u4E00\u6837\u6307\u5411new\u51FA\u6765\u7684\u5B9E\u4F8B\u3002\u5982\u679C\u4E0D\u7528new\uFF0C\u800C\u662F\u76F4\u63A5\u8C03\u7528\uFF0C\u8FD9\u91CC\u7684this\u5C31\u6307\u5411window\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div>`,9);function r(i,l){return e}var b=n(a,[["render",r],["__file","this.html.vue"]]);export{b as default};
