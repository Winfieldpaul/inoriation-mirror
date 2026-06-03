$(function() {
    $(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#spnav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#spnav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#spnav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
});