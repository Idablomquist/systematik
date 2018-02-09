---
title: "data visualisering"
date: 2018-02-07T18:29:20+01:00
---

Datavisualisering kan formidle information effektivt og klart, og kombinerer æstetik og funktionalitet.
<br>
GSAP/TweenMAX (et javaScript-animations bibliotek) er anvendt til animationen. 

Datavisualiseringen kan indsættes i en partial og tilføje class .diagram_container for styling. Derudover skal der også tilføjes en Json-fil til data-mappen.

<pre>
<code>
&lt;div class="diagram_container"&gt;
    {{ range .Site.Data.studerende }}
    &lt;div class="column_and_name_container"&gt;
        &lt;svg width="150" height="7"&gt;
      &lt;rect width="{{ mul .alder 3 }}"  height="10" fill="#0f2d4b" stroke-width=".5" stroke= "rgba(0, 0, 0, 0.3)" /&gt;
    &lt;/svg&gt;
        &lt;p color="#0f2d4b"&gt;{{ .navn }}&lt;/p&gt;
    &lt;/div&gt;
    {{ end }}
&lt;/div&gt;
</code>
</pre>