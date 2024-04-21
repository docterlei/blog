import{_ as e,e as n}from"./app.c3e501b1.js";var a="/assets/1.e1ebbaf8.png",s="/assets/2.7adc0da8.png",r="/assets/3.f7a733ed.png",l="/assets/4.98d3e515.png",i="/assets/5.53bdc93e.png",t="/assets/6.cf2f7aa3.png",d="/assets/7.6f794688.png",c="/assets/8.73a123bb.png";const b={},p=n(`<h1 id="\u7B80\u5355\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u67E5\u8BE2" aria-hidden="true">#</a> \u7B80\u5355\u67E5\u8BE2</h1><h3 id="\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE DATABASE IF NOT EXISTS mysql-test;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5207\u6362\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5207\u6362\u6570\u636E\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>USE xiaohaizi;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u521B\u5EFA\u5B66\u751F\u4FE1\u606F\u8868\u548C\u5B66\u751F\u6210\u7EE9\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5B66\u751F\u4FE1\u606F\u8868\u548C\u5B66\u751F\u6210\u7EE9\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u5B66\u751F\u4FE1\u606F\u8868\u548C\u5B66\u751F\u6210\u7EE9\u8868</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE TABLE student_info (
    id INT PRIMARY KEY,
    name VARCHAR(5),
    sex ENUM(&#39;\u7537&#39;, &#39;\u5973&#39;),
    id_number CHAR(18),
    department VARCHAR(30),
    major VARCHAR(30),
    enrollment_time DATE,
    UNIQUE KEY (id_number)
);

CREATE TABLE student_score (
    id INT,
    subject VARCHAR(30),
    score TINYINT,
    PRIMARY KEY (id, subject),
    CONSTRAINT FOREIGN KEY(id) REFERENCES student_info(id)
);

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u586B\u5145\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u586B\u5145\u6570\u636E" aria-hidden="true">#</a> \u586B\u5145\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>INSERT INTO student_info(id, name, sex, id_number, department, major, enrollment_time) VALUES
    (20131104, &#39;\u7530\u4E30&#39;, &#39;\u7537&#39;, &#39;158177199901044793&#39;, &#39;\u8BA1\u7B97\u673A\u5B66\u9662&#39;, &#39;\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u5DE5\u7A0B&#39;, &#39;2017-07-01&#39;),
    (20131105, &#39;\u96F7\u56FD\u8F89&#39;, &#39;\u7537&#39;, &#39;151008199801178529&#39;, &#39;\u8BA1\u7B97\u673A\u5B66\u9662&#39;, &#39;\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u5DE5\u7A0B&#39;, &#39;2017-07-01&#39;),
    (20131106, &#39;\u5F20\u658C&#39;, &#39;\u7537&#39;, &#39;171563199801169597&#39;, &#39;\u8BA1\u7B97\u673A\u5B66\u9662&#39;, &#39;\u8F6F\u4EF6\u5DE5\u7A0B&#39;, &#39;2017-07-01&#39;),
    (20131107, &#39;\u738B\u6587\u5E73&#39;, &#39;\u7537&#39;, &#39;141992199701078601&#39;, &#39;\u8BA1\u7B97\u673A\u5B66\u9662&#39;, &#39;\u8F6F\u4EF6\u5DE5\u7A0B&#39;, &#39;2017-07-01&#39;),
    (20131108, &#39;\u5F20\u535A\u6587&#39;, &#39;\u7537&#39;, &#39;181048199308156368&#39;, &#39;\u822A\u5929\u5B66\u9662&#39;, &#39;\u98DE\u884C\u5668\u8BBE\u8BA1&#39;, &#39;2017-07-01&#39;),
    (20131109, &#39;\u738B\u5EB7&#39;, &#39;\u7537&#39;, &#39;197995199501078445&#39;, &#39;\u822A\u5929\u5B66\u9662&#39;, &#39;\u7535\u5B50\u4FE1\u606F&#39;, &#39;2017-07-01&#39;),
    (20131110, &#39;\u674E\u5C0F\u5189&#39;, &#39;\u5973&#39;, &#39;158177199901044792&#39;, &#39;\u8BA1\u7B97\u673A\u5B66\u9662&#39;, &#39;\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u5DE5\u7A0B&#39;, &#39;2017-07-01&#39;),
    (20131111, &#39;\u738B\u8499&#39;, &#39;\u5973&#39;, &#39;151008199801178528&#39;, &#39;\u8BA1\u7B97\u673A\u5B66\u9662&#39;, &#39;\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u5DE5\u7A0B&#39;, &#39;2017-07-01&#39;),
    (20131112, &#39;\u845B\u6708&#39;, &#39;\u5973&#39;, &#39;17156319980116959X&#39;, &#39;\u8BA1\u7B97\u673A\u5B66\u9662&#39;, &#39;\u8F6F\u4EF6\u5DE5\u7A0B&#39;, &#39;2017-07-01&#39;),
    (20131113, &#39;\u738B\u5BD2\u51B0&#39;, &#39;\u5973&#39;, &#39;141992199701078600&#39;, &#39;\u8BA1\u7B97\u673A\u5B66\u9662&#39;, &#39;\u8F6F\u4EF6\u5DE5\u7A0B&#39;, &#39;2017-07-01&#39;);
        
INSERT INTO student_score (id, subject, score) VALUES
    (20131104, &#39;\u9AD8\u6570&#39;, 78),
    (20131105, &#39;\u6C47\u7F16&#39;, 88),
    (20131106, &#39;\u9AD8\u6570&#39;, 100),
    (20131107, &#39;\u6C47\u7F16&#39;, 98),
    (20131108, &#39;\u9AD8\u6570&#39;, 59),
    (20131109, &#39;\u6C47\u7F16&#39;, 61),
    (20131110, &#39;\u9AD8\u6570&#39;, 55),
    (20131111, &#39;\u6C47\u7F16&#39;, 61),
    (20131112, &#39;\u9AD8\u6570&#39;, 55),
    (20131113, &#39;\u6C47\u7F16&#39;, 46);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u67E5\u8BE2\u5168\u90E8\u3001\u5355\u4E2A\u3001\u591A\u4E2A\u5217" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5168\u90E8\u3001\u5355\u4E2A\u3001\u591A\u4E2A\u5217" aria-hidden="true">#</a> \u67E5\u8BE2\u5168\u90E8\u3001\u5355\u4E2A\u3001\u591A\u4E2A\u5217</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT * FROM \u8868\u540D;
SELECT \u5217\u540D FROM \u8868\u540D;
SELECT \u5217\u540D1, \u5217\u540D2, ... \u5217\u540Dn FROM \u8868\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><img src="`+a+`" alt=""></p></blockquote><h3 id="\u5217\u7684\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u5217\u7684\u522B\u540D" aria-hidden="true">#</a> \u5217\u7684\u522B\u540D</h3><ul><li>\u65B9\u5F0F\u4E00</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT number AS \u5B66\u53F7 FROM student_info;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><img src="`+s+`" alt=""></p></blockquote><ul><li>\u65B9\u5F0F\u4E8C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT number \u5B66\u53F7 FROM student_info;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><img src="`+r+`" alt=""></p></blockquote><h3 id="\u53BB\u9664\u5217\u5355\u5217\u6216\u591A\u5217\u7684\u91CD\u590D\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u53BB\u9664\u5217\u5355\u5217\u6216\u591A\u5217\u7684\u91CD\u590D\u7ED3\u679C" aria-hidden="true">#</a> \u53BB\u9664\u5217\u5355\u5217\u6216\u591A\u5217\u7684\u91CD\u590D\u7ED3\u679C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT DISTINCT \u5217\u540D1, \u5217\u540D2, ... \u5217\u540Dn  FROM \u8868\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><img src="`+l+'" alt=""><img src="'+i+`" alt=""></p></blockquote><h3 id="\u9650\u5236\u67E5\u8BE2\u7ED3\u679C\u6761\u6570" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u67E5\u8BE2\u7ED3\u679C\u6761\u6570" aria-hidden="true">#</a> \u9650\u5236\u67E5\u8BE2\u7ED3\u679C\u6761\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>LIMIT \u5F00\u59CB\u884C, \u9650\u5236\u6761\u6570; \uFF08\u5F00\u59CB\u822A\u53EF\u4EE5\u7701\u7565\uFF0C\u9ED8\u8BA4\u4ECE0\u884C\u5F00\u59CB\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><img src="`+t+`" alt=""></p></blockquote><h3 id="\u5BF9\u67E5\u8BE2\u7ED3\u679C\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u67E5\u8BE2\u7ED3\u679C\u6392\u5E8F" aria-hidden="true">#</a> \u5BF9\u67E5\u8BE2\u7ED3\u679C\u6392\u5E8F</h3><h4 id="\u5982\u679C\u4E0D\u6307\u5B9A\u6392\u5E8F\u65B9\u5411-\u5219\u9ED8\u8BA4\u4F7F\u7528\u7684\u662Fasc" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u4E0D\u6307\u5B9A\u6392\u5E8F\u65B9\u5411-\u5219\u9ED8\u8BA4\u4F7F\u7528\u7684\u662Fasc" aria-hidden="true">#</a> \u5982\u679C\u4E0D\u6307\u5B9A\u6392\u5E8F\u65B9\u5411\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528\u7684\u662FASC</h4><ul><li>\u65B9\u5F0F\u4E00</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ORDER BY \u5217\u540D ASC|DESC
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><img src="`+d+`" alt=""></p></blockquote><ul><li>\u65B9\u5F0F\u4E8C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ORDER BY \u52171 ASC|DESC, \u52172 ASC|DESC ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><img src="`+c+'" alt=""></p></blockquote>',33);function u(m,o){return p}var x=e(b,[["render",u],["__file","simple-query.html.vue"]]);export{x as default};