( function( $ ) {
    $( document ).ready(function() {
        $('#cssmenu > ul > li > a').click(function() {
            $('#cssmenu li').removeClass('active');
            $(this).closest('li').addClass('active');
            var checkElement = $(this).next();
            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                $(this).closest('li').removeClass('active');
                checkElement.slideUp('normal');
            }
            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#cssmenu ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
            }
            if($(this).closest('li').find('ul').children().length == 0) {
                return true;
            } else {
                return false;
            }
        });
        $('#cssmenu > ul > li:first-child > a').click();
    });
} )( jQuery );




( function( $ ) {
    $( document ).ready(function() {
        $('#a7s-sidemenu > ul > li > a').click(function() {
            $('#a7s-sidemenu li').removeClass('active');
            $(this).closest('li').addClass('active');
            var checkElement = $(this).next();
            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                $(this).closest('li').removeClass('active');
                checkElement.slideUp('normal');
            }
            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#a7s-sidemenu ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
            }
            if($(this).closest('li').find('ul').children().length == 0) {
                return true;
            } else {
                return false;
            }
        });
        $('#a7s-sidemenu > ul > li:first-child > a').click();
    });
} )( jQuery );


/**
 * Created by avows on 12/17/14. Captcha
 */

WebFontConfig = {
    google: { families: [ 'Oswald:700:latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();


function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var i;
    for (i=0;i<5;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];

    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f;
    document.getElementById("spanCaptcha").innerHTML = code
}
function ValidCaptcha(){
    var string1 = removeSpaces(document.getElementById('spanCaptcha').innerHTML);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2){
        document.getElementById("cap-mismatch").style.display='none';
        return true;

    }
    else{
        document.getElementById("cap-mismatch").style.display='block';
        return false;

    }
}
function removeSpaces(string){
    return string.split(' ').join('');
}