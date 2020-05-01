var text9 = document.getElementById("color9");
var text10 = document.getElementById("color10");
var text11 = document.getElementById("color11");
var text12 = document.getElementById("color12");
var text1 = document.getElementById("color1");
var text2 = document.getElementById("color2");
var text3 = document.getElementById("color3");
var text4 = document.getElementById("color4");
var text5 = document.getElementById("color5");
var saveBtnEl = $(".saveBTn");
var text = $(".text");

//--------------------------------------------------------------------------------------------------
var hour = moment().format("H");
var CurrentTime = parseInt(hour);
var morning9 = parseInt($("#9am").attr("data-hour"));
var morning10 = parseInt($("#10am").attr("data-hour"));
var morning11 = parseInt($("#11am").attr("data-hour"));
var midDay = parseInt($("#12pm").attr("data-hour"));
var afternoon1 = parseInt($("#13pm").attr("data-hour"));
var afternoon2 = parseInt($("#14pm").attr("data-hour"));
var afternoon3 = parseInt($("#15pm").attr("data-hour"));
var afternoon4 = parseInt($("#16pm").attr("data-hour"));
var afternoon5 = parseInt($("#17pm").attr("data-hour"));

$("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    

    if (morning9 < CurrentTime){
      $("#color9").addClass("past");
    } else if (morning9 === CurrentTime){
      $("#color9").addClass("present");
    } else if (morning9 > CurrentTime){
      $("#color9").addClass("future");
    }

    if (morning10 < CurrentTime){
      $("#color10").addClass("past");
    } else if (morning10 === CurrentTime){
      $("#color10").addClass("present");
    } else if (morning10 > CurrentTime){
      $("#color10").addClass("future");
    }

    if (morning11 < CurrentTime){
      $("#color11").addClass("past");
    } else if (morning11 === CurrentTime){
      $("#color11").addClass("present");
    } else if (morning11 > CurrentTime){
      $("#color11").addClass("future");
    }

    if (midDay < CurrentTime){
      $("#color12").addClass("past");
    } else if (midDay === CurrentTime){
      $("#color12").addClass("present");
    } else if (midDay > CurrentTime){
      $("#color12").addClass("future");
    }

    if (afternoon1 < CurrentTime){
      $("#color1").addClass("past");
    } else if (afternoon1 === CurrentTime){
      $("#color1").addClass("present");
    } else if (afternoon1 > CurrentTime){
      $("#color1").addClass("future");
    }

    if (afternoon2 < CurrentTime){
      $("#color2").addClass("past");
    } else if (afternoon2 === CurrentTime){
      $("#color2").addClass("present");
    } else if (afternoon2 > CurrentTime){
      $("#color2").addClass("future");
    }

    if (afternoon3 < CurrentTime){
      $("#color3").addClass("past");
    } else if (afternoon3 === CurrentTime){
      $("#color3").addClass("present");
    } else if (afternoon3 > CurrentTime){
      $("#color3").addClass("future");
    }

    if (afternoon4 < CurrentTime){
      $("#color4").addClass("past");
    } else if (afternoon4 === CurrentTime){
      $("#color4").addClass("present");
    } else if (afternoon4 > CurrentTime){
      $("#color4").addClass("future");
    }

    if (afternoon5 < CurrentTime){
      $("#color5").addClass("past");
    } else if (afternoon5 === CurrentTime){
      $("#color5").addClass("present");
    } else if (afternoon5 > CurrentTime){
      $("#color5").addClass("future");
    }

   init();
   $(".saveBtn").on("click", function(){

    console.log($(this).attr("data-id"));
    
    var dataId = $(this).attr("data-id");
    var thisVal = $("#"+ dataId).val();
    
    console.log(thisVal);

    localStorage.setItem(dataId, thisVal);

   init();
   });

   function init() {
      
    var text9am = localStorage.getItem("color9");
    var text10am = localStorage.getItem("color10");
    var text11am = localStorage.getItem("color11");
    var text12m = localStorage.getItem("color12");
    var text1pm = localStorage.getItem("color1");
    var text2pm = localStorage.getItem("color2");
    var text3pm = localStorage.getItem("color3");
    var text4pm = localStorage.getItem("color4");
    var text5pm = localStorage.getItem("color5");

    text9.textContent = text9am;
    text10.textContent = text10am;
    text11.textContent = text11am;
    text12.textContent = text12m;
    text1.textContent = text1pm;
    text2.textContent = text2pm;
    text3.textContent = text3pm;
    text4.textContent = text4pm;
    text5.textContent = text5pm;

    console.log(text10am);
    console.log(text9am);

  }