---
title: "formular"
date: 2018-02-01T08:53:31+01:00
---

Dette framework indeholder også en contact-formular, så brugeren af sitet har mulighed for at komme i kontakt med dig. 
<br>
Gå til [contact](../../contact/) for at se formularen i funktion.
<br>
<br>
Denne formular oprettes ved at tilføje class .formular_container. 
<pre>
<code>
&lt;div class="formular_container"&gt;
    &lt;div id="formfeedback" class="hidden"&gt;Vi vender tilbage snarest!&lt;/div&gt;
    <br>
    &lt;form action="" method="post" id="kontaktmig"&gt;
    <br>
    &lt;label for="Navn"&gt;Name&lt;/label&gt;
        &lt;input type="text" id="navn" name="navn" placeholder="Your name"&gt;
        &lt;label for="email"&gt;E-mail&lt;/label&gt;
        &lt;input type="email" id="email" name="email" placeholder="Your e-mail" required&gt;
        <br>
        &lt;label for="besked"&gt;Message&lt;/label&gt;
        &lt;textarea id="besked" name="besked" placeholder="Your message.."&gt;&lt;/textarea&gt;
        &lt;input type="submit" name="submit" value="Submit"&gt;
        &lt;div id="formfailure" class="hidden"&gt;&lt;/div&gt;
    &lt;/form&gt;
    <br>
&lt;/div&gt;
</code>
</pre>
