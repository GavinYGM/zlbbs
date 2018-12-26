$(function () {
    $("#submit-btn").click(function (event) {
        event.preventDefault();
        var username_input=$("input[name=telephone]");
        var password_input=$("input[name=password]");
        var remember_input = $("input[name=remember]");

        var username=username_input.val();
        var password=password_input.val();
        var remember=remember_input.checked?1:0;

        zlajax.post({
            "url":"/signin/",
            "data":{
                "telephone":username,
                "password":password,
                "remember":remember
            },
            "success":function (data) {
                if(data["code"]==200){
                    var return_to=$("#return-to-span").text();
                    if(return_to.length>1){
                         window.location=return_to;
                    }
                    else {
                        window.location="/";
                    }

                }
                else {
                    zlalert.alertInfoToast(data["message"]);
                }
            }

        })
    })
})