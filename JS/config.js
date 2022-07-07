$("#response").hide();
$("#version").text("develop").css("font-weight", "600");
$("#modal-ativacao").hide();
$("#resultado-busca").hide();
$("#idLoja2").hide();
$("#listarComparacao").hide();
$("#resultado1").hide();
$("#resultado2").hide();
$("#resultado3").hide();
$("#resultado4").hide();

// SIDEBAR TOOGLE

$("#sidebar-toggle").click(function () {
  if ($(".side-bar").hasClass("open")) {
    $(".sidebar-item-btn>span").hide("fast");
    $(".side-bar").animate({ width: "67px" }, 100);
    $(".side-bar").addClass("close");
    $(".side-bar").removeClass("open");
    $(".sidebar-toggle>svg").css("transform", "rotate(180deg)");
  } else {
    $(".sidebar-item-btn>span").show("fast");
    $(".side-bar").animate({ width: "250px" }, 100);
    $(".side-bar").addClass("open");
    $(".side-bar").removeClass("close");
    $(".sidebar-toggle>svg").css("transform", "");
  }
});
