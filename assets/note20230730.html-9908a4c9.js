import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as n,b as e,d as a,e as l}from"./app-a3f83f4f.js";const r={},t={href:"https://github.com/coreybutler/nvm-windows/tree/1.1.11",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="简单指令" tabindex="-1"><a class="header-anchor" href="#简单指令" aria-hidden="true">#</a> 简单指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本号</span>
nvm <span class="token parameter variable">-version</span>

<span class="token comment"># 查看远程线上的nodejs版本列表</span>
nvm <span class="token function">ls</span> available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置镜像" tabindex="-1"><a class="header-anchor" href="#配置镜像" aria-hidden="true">#</a> 配置镜像</h2><p>在nvm安装目录下，找到setting.txt文件加上如下两行代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>node_mirror: https://npm.taobao.org/mirrors/node/

npm_mirror: https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><mark>注</mark>：如果没有先设配置 <code>npm</code> 的镜像地址的话，可能在用<code>nvm</code>安装<code>node</code>成功后，<code>npm</code>不能用的问题，所有要先配置 <code>node</code> 和 <code>npm</code> 的镜像地址，然后再去用<code>nvm</code>安装<code>node</code>版本。</p></blockquote><h2 id="使用nvm安装node-js" tabindex="-1"><a class="header-anchor" href="#使用nvm安装node-js" aria-hidden="true">#</a> 使用nvm安装Node.js</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token number">12.18</span>.0   // 这里以安装nodejs v12.18.0为例
 
// 执行以上安装命令，等待安装完成即可，由于是外部网络，请耐心等待！
 
// 等待安装完成后还可以继续安装多个nodejs版本。
 
// 为了便于演示，再安装了另到两个不同的nodejs版本。
 
nvm <span class="token function">install</span> <span class="token number">10.16</span>.0
 
nvm <span class="token function">install</span> <span class="token number">14.6</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以上安装完成后，会在我们指定的nvm安装目录：<code>nvm</code>安装目录中出现对应的nodejs版本。</p></blockquote><h2 id="版本查看和切换" tabindex="-1"><a class="header-anchor" href="#版本查看和切换" aria-hidden="true">#</a> 版本查看和切换</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前下载nodejs版本列表</span>
nvm <span class="token function">ls</span>

<span class="token comment"># 切换nodejs版本</span>
nvm use <span class="token number">13.14</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局共享npm" tabindex="-1"><a class="header-anchor" href="#全局共享npm" aria-hidden="true">#</a> 全局共享npm</h2><p>一般在安装<code>node</code>的时候，<code>npm</code>也会自动一起安装的。由于<code>nvm</code>可以管理多个版本的<code>node</code>，如果每次添加一个<code>node</code>版本都要安装一堆<code>npm</code>包就烦锁了，所以将<code>npm</code>全局共享出来，只需全局（在安装模块时 <code>npm i xxx -g</code> ）加上<code>-g</code>， 就可以让各个版本的<code>node</code>共用就OK了。</p><p>当然<code>npm</code>全局安装目录也是可以修改的：使用：<code>npm config set prefix &quot;要设置的路径&quot;</code> 命令就可以修改！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认全局的npm安装目录：C:\\Users\\Administrator\\AppData\\Roaming\\npm</span>

<span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">&quot;C:\\Users\\Administrator\\AppData\\Roaming<span class="token entity" title="\\n">\\n</span>pm&quot;</span>
 
<span class="token comment"># 默认全局的npm缓存目录：C:\\Users\\Administrator\\AppData\\Roaming\\node_cache</span>

<span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">&quot;C:\\Users\\Administrator\\AppData\\Roaming<span class="token entity" title="\\n">\\n</span>ode_cache&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>npm root -g</code> 命令，可以查看全局默认<code>npm</code>包的存储位置。</p><p>然后将<code>npm</code>包的路径添加到用户环境变量中，就实现<code>npm</code>全局共享啦！具体步骤如下图提示以操作即可！</p><h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h2>`,18),p={href:"https://www.cnblogs.com/coderz1/p/16726892.html",target:"_blank",rel:"noopener noreferrer"};function v(u,b){const s=o("ExternalLinkIcon");return i(),c("div",null,[n("blockquote",null,[n("p",null,[e("NVM下载地址："),n("a",t,[e("coreybutler/nvm-windows at 1.1.11 (github.com)"),a(s)])])]),m,n("p",null,[e("参考："),n("a",p,[e("nvm管理node版本 - Coderz1 - 博客园 (cnblogs.com)"),a(s)])])])}const k=d(r,[["render",v],["__file","note20230730.html.vue"]]);export{k as default};
