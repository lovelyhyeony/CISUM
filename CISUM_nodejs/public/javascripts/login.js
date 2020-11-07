$(function () {
    $("#login-span").click(function () {
        $("div#login-modal").css("display", "none");
    });

    $("#register").click(function () {
        $.ajax({
            url: "/cisum/join",
            type: "GET",
            success: function (result) {
                $("div#login-modal").html(result);
            },
            error: function (error) {
                alert("서버 통신 오류 :(");
            },
        });
    });

    $("#login-btn").click(function () {
        // 로그인 공백일때의 유효성 체크
        var email = $("#userid");
        var password = $("#password");

        if (email.val() == "") {
            alert("이메일을 입력해주세요 :)");
            email.focus();
            return false;
        } else if (password.val() == "") {
            alert("비밀번호를 입력해주세요 :)");
            password.focus();
            return false;
        }

        login(email.val(), password.val());
        // 유저정보 Get
        getUser();
    });
});
