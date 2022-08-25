$("#panel1").hide();
$("#panel2").hide();
$("#panel3").hide();
$("#panel4").hide();
$("#panel5").hide();
$("#panel6").hide();
$("#panel7").hide();
$("#panel8").hide();
$("#panel9").hide();
$("#panel10").hide();
$("#panel11").hide();

$("#panel1").animate({
    left: "+=100",
    height: "toggle"
  }, 2000, function() {
});
var nama;
$("#butpan1").click(function() {
  nama = $('#input_nama').val();
  $('#input_nama').val(nama);
  if(nama==""){
      nama="Mei";
  }
  $("#panel1").animate({
      left: "-=50",
      height: "toggle"
    }, 500, function() {
  });
  $('#nama').html(nama);
  $("#panel4").delay(500).animate({
      left: "+=100",
      height: "toggle"
    }, 2000, function() {
  });
});
$("#butpan4").click(function() {
    $("#panel4").animate({
        left: "-=50",
        height: "toggle"
      }, 500, function() {
    });
    $("#panel2").delay(500).animate({
      left: "+=100",
      height: "toggle"
    }, 2000, function() {
  });
});

$("#butpan2").click(function() {
  $("#panel2").animate({
      left: "-=50",
      height: "toggle"
    }, 500, function() {
  });
  $("#panel5").delay(500).animate({
      left: "+=100",
      height: "toggle"
    }, 2000, function() {
  });
});

$("#butpan5").click(function() {
  $("#panel5").animate({
    left: "-=100",
    height: "toggle"
  }, 1, function() {
});
  $(this).fadeOut('fast', function(){
    $('body').css('background', 'white');
 });
  $("#panel6").show();
});

$("#butpan6").click(function() {
  $("#panel6").hide();
  $("#panel7").show();
});

$("#butpan7").click(function() {
  $("#panel7").hide();
  $("#panel8").show();
});

$("#butpan8").click(function() {
  $("#panel8").hide();
  $("#panel9").show();
});

$("#butpan9").click(function() {
  $("#panel9").hide();
  $("#panel10").show();
});

$("#butpan10").click(function() {
  $("#panel10").hide();
  $("#panel11").show();
});

$("#butpan11").click(function() {
  $(this).fadeOut('fast', function(){
    $('body').css('background', '');
  });
  $("#panel11").animate({
      left: "-=50",
      height: "toggle"
    }, 500, function() {
  });
  $("#panel3").delay(500).animate({
      left: "+=100",
      height: "toggle"
    }, 2000, function() {
  });
});