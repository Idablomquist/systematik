---
title: "animation"
date: 2018-02-07T18:31:32+01:00
---

Når man klikker på menuen, ses en animation. De tre streger animeres til et kryds, samtidig med at et overlay med navigationen bliver synlig. Klikkes der på krydset animeres der igen tilbage til de tre striber som udgør menuen. 
<br>
Menuen ses i øverste højre hjørne. 
<br>
<br>
Animationen tilføjes ved at tilføje class .active til id'et #toggle og class .open til id'et #overlay. 
<br>
Dette gøres via jQuery som illustreret her:

<pre>
<code>

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

</code>
</pre>