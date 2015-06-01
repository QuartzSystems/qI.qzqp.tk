(function() {
    var $u = $('#selectImage');
    var h = function() {
        $u.fileReaderJS({
            readAsDefault: "DataURL",
            accept: "image/*",
            on: {
                load: function(e, file) {
                    console.log(e, file);
                    var u = e.target.result;
                    var fb = new Firebase("https://qpqi.firebaseio.com/");
                    var z;
                    var uid = Math.floor(new Date().getTime() * Math.random());
                    fb.child("data/img/" + uid).set(u, function() {
                        location.assign("/v/#" + uid);
                    });
                },
                skip: function() {
                    alert("You can't upload that.");
                }
            }
        });
    };
    h();
})();