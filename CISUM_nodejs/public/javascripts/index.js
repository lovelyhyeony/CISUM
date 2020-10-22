$(function () {
  $("#login_a").click(function () {
    $.ajax({
      url: "/cisum/login",
      type: "GET",
      success: function (result) {
        $("section#login_modal").html(result);
      },
      error: function (error) {
        alert("서버 통신 오류 :(");
      },
    });
  });
  $("section#login_modal").css("display", "block");

  //$("span#login_span").click(function(){
  // $("section#login_modal").css("display","none");
  //})
});
