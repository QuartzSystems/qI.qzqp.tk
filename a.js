(function(){
    var h = location.hash;
    var _h = !location.hash;
    var r = function() {
        location.assign("/");
    }
    var a = function() {
        if(_h) {
            r();
        }
        var p = "/data/img/" + h.split("#")[1];
        var fb = new Firebase("https://qpqi.firebaseio.com/");
        fb.child(p).once("value", function(s) {
            var url = s.val();
            $('#loadedImage').attr("src",url);
            $('#imageLink').attr("href", "http://qia.qzqp.tk/i/" + h.split("#")[1]);
        });
    };
    a();
})();