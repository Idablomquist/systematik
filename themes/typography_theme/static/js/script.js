/*PRELOADER START*/

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {
        $('#loader').addClass('done');
        $('.preloader_container').addClass('done')
    }, 2000);
});


//setTimeout(function () {
//
//    $('#loader').addClass('done');
//    $('.preloader_container').addClass('done');
//
//}, 3000);


/*NAVIGATION START*/

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


/*KONTAKTFORMULAR*/

/*Ajax contact form*/
$("#kontaktmig").submit(function (event) {
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm() {
    // Initiate Variables With Form Content
    var navn = $("#navn").val();
    var email = $("#email").val();
    var henvendelse = $("#henvendelse").val();
    var besked = $("#besked").val();

    $.ajax({
        type: "POST",
        url: "formhandler.php",
        data: "navn=" + navn + "&email=" + email + "&henvendelse=" + henvendelse + "&besked=" + besked,
        success: function (text) {
            if (text == "success") {
                formSuccess();
            } else {
                formFailure(text);
            }
        }
    });
}

function formSuccess() {
    $("#formfeedback").removeClass("hidden");
    $("#kontaktmig").addClass("hidden");
    $("#formfailure").addClass("hidden");
}

function formFailure(text) {
    $("#formfailure").removeClass("hidden");
    $("#formfailure").html(text);
}
