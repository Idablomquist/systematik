---
title: "browser reset"
date: 2018-02-07T18:30:39+01:00
---

Alle browsere opfører sig lidt forskelligt, så derfor inkluderer dette framework et browser reset som nulstiller alle standardiserede indstillinger. 
<br>
<br>
Normalize downloades [her](https://necolas.github.io/normalize.css/), hvorefter filen normalize.css tilføjes til themes/static/css-mappen og inkluderes i headeren: 
<pre class="col-lg-12">
<code>
&lt;link rel="stylesheet" href="{{.Site.BaseURL}}/css/normalize.css"&gt;
</code>
</pre>