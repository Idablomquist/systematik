---
title: "scaffolding"
date: 2018-02-07T18:31:09+01:00
---

Scaffolding = stilladsering. Det vil sige at man konstruerer “kasserne” til placering af indholdet på website. Dette framework benytter Flexbox Grid til at bygge “scaffoldet” til sitet op.
<br>
<br>
Flexbox Grid downloades [her](http://flexboxgrid.com/), hvorefter filen flexboxgrid.min.css tilføjes til themes/static/css-mappen og inkluderes i headeren: 
<pre>
<code>
&lt;link rel="stylesheet" href="{{.Site.BaseURL}}/css/flexboxgrid.min.css"&gt;
</code>
</pre>

Efter installation af Flexbox Grid kan følgende class' anvendes til at opdele indholdet på sitet:<br>
*Her er vist eksempler som er anvendt i temaet - tallet kan skiftes ud med tal fra 1-12, alt efter hvor mange kolonner man ønsker indholdet skal fylde*

**Til skærmstørrelse under 768px**<br>
col-xs-12

**Til skærmstørrelse mellem 768 og 1024px**<br>
col-sm-12

**Til skærmstørrelse mellem 1024 og 1200px**<br>
col-md-12

**Til skærmstørrelse over 1200px**<br>
col-lg-6