---
title: "modal vindue"
date: 2018-02-07T18:30:02+01:00
---

Dette framework indeholder en modal-vindue-funktion, som kan benyttes til f.eks. ekstra information om billeder, eller for at få brugerens opmærksomhed. 

<!-- Indhold til modal vindue -->
<div id="ex1" class="modal">
  <p>Dette er et eksempel på et modal vindue</p>

</div>

<!-- Link til at åbne modal vindue -->
<p><a href="#ex1" rel="modal:open" class="modal_vindue">Modal vindue</a></p>

Modal-vindue kan benyttes ved at tilføje class .modal-vindue til en div og ved at oprette en div med class .modal til modalvinduets indehold: 

<pre>
    <code>
<!-- Indhold til modal vindue -->
&lt;div id="ex1" class="modal"&gt;
  &lt;p&gt;Dette er et eksempel på et modal vindue&lt;/p&gt;
&lt;/div&gt;

<!-- Link til at åbne modal vindue -->
&lt;p&gt;
   &lt;a href="#ex1" rel="modal:open" class="modal_vindue"&gt;Modal vindue&lt;/a&gt;
&lt;/p&gt;
    </code>
</pre>

Her er modalvinduet tilføjet en fading.animation (fadeDuration), som kan justeres i JavaScript-filen.
<br>
Yderligere specifikationer til denne funktion kan findes [her](http://jquerymodal.com).
