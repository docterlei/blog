import{_ as t,e as d}from"./app.d8cd19f7.js";var r="/assets/1.05637fcf.png",a="/assets/2.8633f932.png",e="/assets/3.764ba426.png",h="/assets/4.03e2d1f8.png",c="/assets/5.16184daa.png",o="/assets/6.d37df994.png",b="/assets/7.d5cba5d1.png";const s={},i=d('<h1 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h1><h3 id="\u6587\u672C\u5904\u7406\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a> \u6587\u672C\u5904\u7406\u51FD\u6570</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8C03\u7528\u793A\u4F8B</th><th>\u793A\u4F8B\u7ED3\u679C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>LEFT</td><td>LEFT(&#39;abc123&#39;, 3)</td><td>abc</td><td>\u7ED9\u5B9A\u5B57\u7B26\u4E32\u4ECE\u5DE6\u8FB9\u53D6\u6307\u5B9A\u957F\u5EA6\u7684\u5B50\u4E32</td></tr><tr><td>RIGHT</td><td>RIGHT(&#39;abc123&#39;, 3)</td><td>123</td><td>\u7ED9\u5B9A\u5B57\u7B26\u4E32\u4ECE\u53F3\u8FB9\u53D6\u6307\u5B9A\u957F\u5EA6\u7684\u5B50\u4E32</td></tr><tr><td>LENGTH</td><td>LENGTH(&#39;abc&#39;)</td><td>3</td><td>\u7ED9\u5B9A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6</td></tr><tr><td>LOWER</td><td>LOWER(&#39;ABC&#39;)</td><td>abc</td><td>\u7ED9\u5B9A\u5B57\u7B26\u4E32\u7684\u5C0F\u5199\u683C\u5F0F</td></tr><tr><td>UPPER</td><td>UPPER(&#39;abc&#39;)</td><td>ABC</td><td>\u7ED9\u5B9A\u5B57\u7B26\u4E32\u7684\u5927\u5199\u683C\u5F0F</td></tr><tr><td>LTRIM</td><td>LTRIM(&#39; abc&#39;)</td><td>abc</td><td>\u7ED9\u5B9A\u5B57\u7B26\u4E32\u5DE6\u8FB9\u7A7A\u683C\u53BB\u9664\u540E\u7684\u683C\u5F0F</td></tr><tr><td>RTRIM</td><td>RTRIM(&#39;abc &#39;)</td><td>abc</td><td>\u7ED9\u5B9A\u5B57\u7B26\u4E32\u53F3\u8FB9\u7A7A\u683C\u53BB\u9664\u540E\u7684\u683C\u5F0F</td></tr><tr><td>SUBSTRING</td><td>SUBSTRING(&#39;abc123&#39;, 2, 3)</td><td>bc1</td><td>\u7ED9\u5B9A\u5B57\u7B26\u4E32\u4ECE\u6307\u5B9A\u4F4D\u7F6E\u622A\u53D6\u6307\u5B9A\u957F\u5EA6\u7684\u5B50\u4E32</td></tr><tr><td>CONCAT</td><td>CONCAT(&#39;abc&#39;, &#39;123&#39;, &#39;xyz&#39;)</td><td>abc123xyz</td><td>\u5C06\u7ED9\u5B9A\u7684\u5404\u4E2A\u5B57\u7B26\u4E32\u62FC\u63A5\u6210\u4E00\u4E2A\u65B0\u5B57\u7B26\u4E32</td></tr></tbody></table><blockquote><p><img src="'+r+'" alt=""></p></blockquote><blockquote><p><img src="'+a+'" alt=""></p></blockquote><h3 id="\u65E5\u671F\u548C\u65F6\u95F4\u5904\u7406\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u548C\u65F6\u95F4\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a> \u65E5\u671F\u548C\u65F6\u95F4\u5904\u7406\u51FD\u6570</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8C03\u7528\u793A\u4F8B</th><th>\u793A\u4F8B\u7ED3\u679C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>NOW</td><td>NOW()</td><td>2024-04-22 04:59:21</td><td>\u8FD4\u56DE\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4</td></tr><tr><td>CURDATE</td><td>CURDATE()</td><td>2024-04-22</td><td>\u8FD4\u56DE\u5F53\u524D\u65E5\u671F</td></tr><tr><td>CURTIME</td><td>CURTIME()</td><td>05:05:02</td><td>\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4</td></tr><tr><td>DATE</td><td>DATE(&#39;2019-08-16 17:10:43&#39;)</td><td>2019-08-16</td><td>\u5C06\u7ED9\u5B9A\u65E5\u671F\u548C\u65F6\u95F4\u503C\u7684\u65E5\u671F\u63D0\u53D6\u51FA\u6765</td></tr><tr><td>DATE_ADD</td><td>DATE_ADD(&#39;2019-08-16 17:10:43&#39;, INTERVAL 2 DAY)</td><td>2019-08-18 17:10:43</td><td>\u5C06\u7ED9\u5B9A\u7684\u65E5\u671F\u548C\u65F6\u95F4\u503C\u6DFB\u52A0\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694</td></tr><tr><td>DATE_SUB</td><td>DATE_SUB(&#39;2019-08-16 17:10:43&#39;, INTERVAL 2 DAY)</td><td>2019-08-14 17:10:43</td><td>\u5C06\u7ED9\u5B9A\u7684\u65E5\u671F\u548C\u65F6\u95F4\u503C\u51CF\u53BB\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694</td></tr><tr><td>DATEDIFF</td><td>DATEDIFF(&#39;2019-08-16&#39;, &#39;2019-08-17&#39;)</td><td>-1</td><td>\u8FD4\u56DE\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u5929\u6570\uFF08\u8D1F\u6570\u4EE3\u8868\u524D\u4E00\u4E2A\u53C2\u6570\u4EE3\u8868\u7684\u65E5\u671F\u6BD4\u8F83\u5C0F\uFF09</td></tr><tr><td>DATE_FORMAT</td><td>DATE_FORMAT(NOW(),&#39;%m-%d-%Y&#39;)</td><td>08-16-2019</td><td>\u7528\u7ED9\u5B9A\u7684\u683C\u5F0F\u663E\u793A\u65E5\u671F\u548C\u65F6\u95F4</td></tr></tbody></table><h4 id="\u4F7F\u7528\u8FD9\u4E9B\u51FD\u6570\u65F6\u9700\u8981\u6CE8\u610F\u4E00\u4E9B\u5730\u65B9" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8FD9\u4E9B\u51FD\u6570\u65F6\u9700\u8981\u6CE8\u610F\u4E00\u4E9B\u5730\u65B9" aria-hidden="true">#</a> \u4F7F\u7528\u8FD9\u4E9B\u51FD\u6570\u65F6\u9700\u8981\u6CE8\u610F\u4E00\u4E9B\u5730\u65B9</h4><ul><li><p>\u5728\u4F7F\u7528DATE_ADD\u548CDATE_SUB\u8FD9\u4E24\u4E2A\u51FD\u6570\u65F6\u9700\u8981\u6CE8\u610F\uFF0C\u589E\u52A0\u6216\u51CF\u53BB\u7684\u65F6\u95F4\u95F4\u9694\u5355\u4F4D\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49</p><table><thead><tr><th>\u65F6\u95F4\u5355\u4F4D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>MICROSECOND</td><td>\u6BEB\u79D2</td></tr><tr><td>SECOND</td><td>\u79D2</td></tr><tr><td>MINUTE</td><td>\u5206\u949F</td></tr><tr><td>HOUR</td><td>\u5C0F\u65F6</td></tr><tr><td>DAY</td><td>\u5929</td></tr><tr><td>WEEK</td><td>\u661F\u671F</td></tr><tr><td>MONTH</td><td>\u6708</td></tr><tr><td>QUARTER</td><td>\u5B63\u5EA6</td></tr><tr><td>YEAR</td><td>\u5E74</td></tr></tbody></table><p>\u8BA92019-08-16 17:10:43\u8FD9\u4E2A\u65F6\u95F4\u503C\u589E\u52A02\u5206\u949F</p><blockquote><p><img src="'+e+'" alt=""></p></blockquote></li><li><p>\u5728\u4F7F\u7528DATE_FORMAT\u51FD\u6570\u65F6\u9700\u8981\u6CE8\u610F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u6240\u8C13\u7684\u683C\u5F0F\u7B26\u6765\u81EA\u5B9A\u4E49\u65E5\u671F\u548C\u65F6\u95F4\u7684\u663E\u793A\u683C\u5F0F</p><table><thead><tr><th>\u683C\u5F0F\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>%b</td><td>\u7B80\u5199\u7684\u6708\u4EFD\u540D\u79F0\uFF08Jan\u3001Feb\u3001...\u3001Dec)</td></tr><tr><td>%D</td><td>\u5E26\u6709\u82F1\u6587\u540E\u7F00\u7684\u6708\u4EFD\u4E2D\u7684\u65E5\u671F\uFF080th\u30011st\u30012nd\u3001...\u300131st)\uFF09</td></tr><tr><td>%d</td><td>\u6570\u5B57\u683C\u5F0F\u7684\u6708\u4EFD\u4E2D\u7684\u65E5\u671F(00\u300101\u300102\u3001...\u300131)</td></tr><tr><td>%f</td><td>\u5FAE\u79D2\uFF08000000-999999\uFF09</td></tr><tr><td>%H</td><td>\u4E8C\u5341\u56DB\u5C0F\u65F6\u5236\u7684\u5C0F\u65F6 (00-23)</td></tr><tr><td>%h</td><td>\u5341\u4E8C\u5C0F\u65F6\u5236\u7684\u5C0F\u65F6 (01-12)</td></tr><tr><td>%i</td><td>\u6570\u503C\u683C\u5F0F\u7684\u5206\u949F(00-59)</td></tr><tr><td>%M</td><td>\u6708\u4EFD\u540D\uFF08January\u3001February\u3001...\u3001December\uFF09</td></tr><tr><td>%m</td><td>\u6570\u503C\u5F62\u5F0F\u7684\u6708\u4EFD(00-12)</td></tr><tr><td>%p</td><td>\u4E0A\u5348\u6216\u4E0B\u5348\uFF08AM\u4EE3\u8868\u4E0A\u5348\u3001PM\u4EE3\u8868\u4E0B\u5348\uFF09</td></tr><tr><td>%S</td><td>\u79D2(00-59)</td></tr><tr><td>%s</td><td>\u79D2(00-59)</td></tr><tr><td>%W</td><td>\u661F\u671F\u540D\uFF08Sunday\u3001Monday\u3001...\u3001Saturday\uFF09</td></tr><tr><td>%w</td><td>\u5468\u5185\u7B2C\u51E0\u5929 \uFF080=\u661F\u671F\u65E5\u30011=\u661F\u671F\u4E00\u3001 6=\u661F\u671F\u516D\uFF09</td></tr><tr><td>%Y</td><td>4\u4F4D\u6570\u5B57\u5F62\u5F0F\u7684\u5E74\uFF08\u4F8B\u59822019\uFF09</td></tr><tr><td>%y</td><td>2\u4F4D\u6570\u5B57\u5F62\u5F0F\u7684\u5E74\uFF08\u4F8B\u598219\uFF09</td></tr></tbody></table><p>\u628A\u60F3\u8981\u7684\u663E\u793A\u683C\u5F0F\u7528\u5BF9\u5E94\u7684\u683C\u5F0F\u7B26\u63CF\u8FF0\u51FA\u6765</p><blockquote><p><img src="'+h+'" alt=""></p></blockquote></li></ul><h3 id="\u6570\u503C\u5904\u7406\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6570\u503C\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a> \u6570\u503C\u5904\u7406\u51FD\u6570</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8C03\u7528\u793A\u4F8B</th><th>\u793A\u4F8B\u7ED3\u679C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>ABS</td><td>ABS(-1)</td><td>1</td><td>\u53D6\u7EDD\u5BF9\u503C</td></tr><tr><td>Pi</td><td>PI()</td><td>3.141593</td><td>\u8FD4\u56DE\u5706\u5468\u7387</td></tr><tr><td>COS</td><td>COS(PI())</td><td>-1</td><td>\u8FD4\u56DE\u4E00\u4E2A\u89D2\u5EA6\u7684\u4F59\u5F26</td></tr><tr><td>EXP</td><td>EXP(1)</td><td>2.718281828459045</td><td>\u8FD4\u56DEe\u7684\u6307\u5B9A\u6B21\u65B9</td></tr><tr><td>MOD</td><td>MOD(5,2)</td><td>1</td><td>\u8FD4\u56DE\u9664\u6CD5\u7684\u4F59\u6570</td></tr><tr><td>RAND</td><td>RAND()</td><td>0.7537623539136372</td><td>\u8FD4\u56DE\u4E00\u4E2A\u968F\u673A\u6570</td></tr><tr><td>SIN</td><td>SIN(PI()/2)</td><td>1</td><td>\u8FD4\u56DE\u4E00\u4E2A\u89D2\u5EA6\u7684\u6B63\u5F26</td></tr><tr><td>SQRT</td><td>SQRT(9)</td><td>3</td><td>\u8FD4\u56DE\u4E00\u4E2A\u6570\u7684\u5E73\u65B9\u6839</td></tr><tr><td>TAN</td><td>TAN(0)</td><td>0</td><td>\u8FD4\u56DE\u4E00\u4E2A\u89D2\u5EA6\u7684\u6B63\u5207</td></tr></tbody></table><h3 id="\u805A\u96C6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u805A\u96C6\u51FD\u6570" aria-hidden="true">#</a> \u805A\u96C6\u51FD\u6570</h3><table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>COUNT</td><td>\u8FD4\u56DE\u67D0\u5217\u7684\u884C\u6570\uFF081.COUNT(*)\uFF1A\u5BF9\u8868\u4E2D\u884C\u7684\u6570\u76EE\u8FDB\u884C\u8BA1\u6570\uFF0C\u4E0D\u7BA1\u5217\u7684\u503C\u662F\u4E0D\u662FNULL\uFF0C2.COUNT(\u5217\u540D)\uFF1A\u5BF9\u7279\u5B9A\u7684\u5217\u8FDB\u884C\u8BA1\u6570\uFF0C\u4F1A\u5FFD\u7565\u6389\u8BE5\u5217\u4E3ANULL\u7684\u884C\uFF09</td></tr><tr><td>MAX</td><td>\u8FD4\u56DE\u67D0\u5217\u7684\u6700\u5927\u503C</td></tr><tr><td>MIN</td><td>\u8FD4\u56DE\u67D0\u5217\u7684\u6700\u5C0F\u503C</td></tr><tr><td>SUM</td><td>\u8FD4\u56DE\u67D0\u5217\u503C\u4E4B\u548C</td></tr><tr><td>AVG</td><td>\u8FD4\u56DE\u67D0\u5217\u7684\u5E73\u5747\u503C</td></tr></tbody></table><ul><li><p>\u7ED9\u5B9A\u641C\u7D22\u6761\u4EF6\u4E0B\u805A\u96C6\u51FD\u6570\u7684\u4F7F\u7528</p><blockquote><p>\u805A\u96C6\u51FD\u6570\u5E76\u4E0D\u662F\u4E00\u5B9A\u8981\u7EDF\u8BA1\u4E00\u4E2A\u8868\u4E2D\u7684\u6240\u6709\u8BB0\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u641C\u7D22\u6761\u4EF6\u6765\u9650\u5B9A\u8FD9\u4E9B\u805A\u96C6\u51FD\u6570\u4F5C\u7528\u7684\u8303\u56F4\u3002\u6BD4\u65B9\u8BF4\u6211\u4EEC\u53EA\u60F3\u7EDF\u8BA1&#39;\u9AD8\u6570&#39;\u8FD9\u95E8\u8BFE\u7A0B\u7684\u5E73\u5747\u5206\u53EF\u4EE5\u8FD9\u4E48\u5199 <img src="'+c+'" alt=""></p></blockquote></li><li><p>\u805A\u96C6\u51FD\u6570\u4E2DDISTINCT\u7684\u4F7F\u7528</p><blockquote><p>\u805A\u96C6\u51FD\u6570\u5C06\u8BA1\u7B97\u6307\u5B9A\u5217\u7684\u6240\u6709\u975ENULL\u6570\u636E\uFF0C\u5982\u679C\u6307\u5B9A\u7684\u5217\u4E2D\u6709\u91CD\u590D\u6570\u636E\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528DISTINCT\u6765\u8FC7\u6EE4\u6389\u8FD9\u4E9B\u91CD\u590D\u6570\u636E <img src="'+o+'" alt=""></p></blockquote></li></ul><h3 id="\u7EC4\u5408\u805A\u96C6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u805A\u96C6\u51FD\u6570" aria-hidden="true">#</a> \u7EC4\u5408\u805A\u96C6\u51FD\u6570</h3><blockquote><p>\u805A\u96C6\u51FD\u6570\u4E5F\u53EF\u4EE5\u96C6\u4E2D\u5728\u4E00\u4E2A\u67E5\u8BE2\u4E2D\u4F7F\u7528 <img src="'+b+'" alt=""></p></blockquote>',16);function l(T,n){return i}var A=t(s,[["render",l],["__file","function.html.vue"]]);export{A as default};
