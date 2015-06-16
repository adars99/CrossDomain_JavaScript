
<html lang="en" class="is-copy-enabled">
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <title>JSONPCrossDomain</title>
  </head>


  <body>
 
    
    <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-j50nπ" class="anchor" href="#j50nπ" aria-hidden="true"><span class="octicon octicon-link"></span></a>Ajax</h1>

<p>Ajax Cross browser JSONP call using Javascript (pure JS)</p>

<h2><a id="user-content-authors" class="anchor" href="#authors" aria-hidden="true"><span class="octicon octicon-link"></span></a>Authors</h2>

<p>Roberto Decurnex (<a href="mailto:adars99@gmail.com">adars99@gmail.com</a>)</p>

<h2><a id="user-content-download" class="anchor" href="#download" aria-hidden="true"><span class="octicon octicon-link"></span></a>Download</h2>

<p>You clone the project with Git by running:</p>

<pre><code>$ git clone git://github.com/adars99/JSONPCrossDomain
</code></pre>

<h2><a id="user-content-quick-sample" class="anchor" href="#quick-sample" aria-hidden="true"><span class="octicon octicon-link"></span></a>Quick Sample</h2>

<div class="highlight highlight-javascript"><pre><span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>http://domain/whatever.jsonp<span class="pl-pds">"</span></span>;
<span class="pl-k">var</span> data <span class="pl-k">=</span> {};
<span class="pl-k">var</span> <span class="pl-en">callback</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>){ <span class="pl-c1">alert</span>(data.attribute_name)};

ajaxRequest.getJSON(url, data, callback);</pre></div>

<p>Note that the given url does not need a callback parameter. It will be set automatically to <strong>ajaxRequest.success</strong> that will be the one executing the given callback function.</p>

<h2><a id="user-content-notes" class="anchor" href="#notes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Notes</h2>

<p>This library expect your JSON calls to accept a <code>callback</code> parameter on the url and use that function name to wrap the JSON response.</p>

<h3><a id="user-content-example" class="anchor" href="#example" aria-hidden="true"><span class="octicon octicon-link"></span></a>Example</h3>

<p><a href="http://example.com/resource.json">http://example.com/resource.json</a></p>

<pre><code>{"key":"value"}
</code></pre>

<p><a href="http://example.com/resource.json?callback=ajaxRequest.success">http://example.com/resource.json?callback=ajaxRequest.success</a></p>

<pre><code>ajaxRequest.success({"key":"value"});
</code></pre>

<p>Note that you can ignore the callback param and just hardcode your responses to return this <code>ajaxRequest.success(your_json_here);</code> [but this is a terrible idea :P]. </p>

<h2><a id="user-content-step-by-step-beginners-sample" class="anchor" href="#step-by-step-beginners-sample" aria-hidden="true"><span class="octicon octicon-link"></span></a>Step by Step Beginner's Sample</h2>

<ol>
<li><p>Open your Browser</p></li>
<li><p>Open a non javascript intensive page; e.g. <a href="http://adars99.github.com/">http://adars99.github.com/</a></p></li>
<li><p>Open the console by pressing F12 or whatever key your browser use. You may need to select tab 'Console' (tested on Chrome and Internet Explorer 10)</p></li>
<li><p>Paste the below code (within the console)</p></li>
</ol>

<div class="highlight highlight-javascript"><pre><span class="pl-c">// This line taken from ajaxRequest.min.js (within this repo)</span>
<span class="pl-k">var</span> ajaxRequest<span class="pl-k">=</span>{currentScript<span class="pl-k">:</span><span class="pl-c1">null</span>,<span class="pl-en">getJSON</span>:<span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">d</span>,<span class="pl-smi">h</span>){<span class="pl-k">var</span> g<span class="pl-k">=</span>b<span class="pl-k">+</span>(b.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">"</span>?<span class="pl-pds">"</span></span>)<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">"</span>&amp;<span class="pl-pds">"</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>?<span class="pl-pds">"</span></span>);<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">"</span>head<span class="pl-pds">"</span></span>)[<span class="pl-c1">0</span>];<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">"</span>script<span class="pl-pds">"</span></span>);<span class="pl-k">var</span> f<span class="pl-k">=</span>[];<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>;<span class="pl-v">this</span>.success<span class="pl-k">=</span>h;d.callback<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>ajaxRequest.success<span class="pl-pds">"</span></span>;<span class="pl-k">for</span>(e <span class="pl-k">in</span> d){f.<span class="pl-c1">push</span>(e<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">"</span>=<span class="pl-pds">"</span></span><span class="pl-k">+</span>encodeURIComponent(d[e]))}g<span class="pl-k">+=</span>f.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">"</span>&amp;<span class="pl-pds">"</span></span>);a.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text/javascript<span class="pl-pds">"</span></span>;a.<span class="pl-c1">src</span><span class="pl-k">=</span>g;<span class="pl-k">if</span>(<span class="pl-v">this</span>.currentScript){c.<span class="pl-c1">removeChild</span>(currentScript)}c.<span class="pl-c1">appendChild</span>(a)},success<span class="pl-k">:</span><span class="pl-c1">null</span>};

<span class="pl-c">// This is a WorldIP free geo-location database.</span>
<span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>http://api.wipmania.com/jsonp<span class="pl-pds">"</span></span>;

<span class="pl-c">// No specific data need to be sent there</span>
<span class="pl-k">var</span> data <span class="pl-k">=</span> {};

<span class="pl-c">// We need a function callback to be executed after the response is received</span>
<span class="pl-k">var</span> <span class="pl-en">callback</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">geodata</span>){ <span class="pl-c1">alert</span>(geodata.address.country); };

<span class="pl-c">// And here is the magic:</span>
ajaxRequest.getJSON(url, data, callback);</pre></div>

<p>You should see an alert saying your current (ip based location) country name after half a second or so.</p>
</article>
  </div>

</div>

      
  </body>
</html>

