---
title: "SoMe"
date: 2018-02-07T18:31:48+01:00
---

Dette framework  indeholder en integration af et Facebook comment-plugin.
<br>

<div class="fb-comments fb-comments2" data-href="https://idablomquist.dk/kea/typography_site" data-numposts="5"></div>

    
<script>
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.12';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>

Comment-plugin gør det muligt for folk at kommentere indhold på dit websted, ved hjælp af deres Facebook-konto. Kommentareren kan deles med deres venner på Facebook også.
<br>
<br>
Plugin'et tilføjes ved at indsætte følgende: 
<pre>
<code>
&lt;div class="fb-comments" data-href="https://" data-numposts="5"&gt;&lt;/div&gt;
        
&lt;script&gt;
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.12';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
&lt;/script&gt;
</code>
</pre>