/* script.js 
   Author:
   Date:
*/



$(document).ready(function(){ // begin document.ready block


//BEEP
$('.cc').click(function(){
  const audio = new Audio('media/beep.mp3');
  audio.play();
});


//SHOW
$('.generate').click(function(){
   if($('#namemessage').val() == ''){
      alert('name can not be left blank :(');
      $('.receipt').hide();
   } else {
      const audio = new Audio('media/print.mp3');
    audio.play();
      $( '.receipt' ).slideDown(1100);
      $('.regenerate').delay(7000).show();
   }
});


//REGENERATE
$('.regenerate').click(function() {
    const audio = new Audio('media/ding.mp3');
  audio.play();
    $('input:checkbox').removeAttr('checked');
    $('.input').val('');
    $('.receipt').hide();
    $('.regenerate').hide();
});


//CONTACT
$('.contact').click(function() {
    var url = 'https://Cmaj7-B.github.io';
    //window.open(url);
    window.location.href = url;
});


//METHODOLOGY
$('.methodology').click(function() {
    var url = 'reference.html';
    //window.open(url);
    window.location.href = url;
});


//HOVERCALC
$('.description').hover(function(){

      $(this).css({
         'background-color':'#404438'
      });

      $(this).css({
         'color':'white'
      });

      },function(){


      $(this).css({
         'background-color':'#BEC1AF'
      });

      $(this).css({
         'color':'#404438'
      });
});


//NAME
$('.generate').click(function(){
    var username = $('.inputname').val();
    $ ('.rname p').html('AUDIT #001 FOR' + ' ' + username);
});


//TIME
$('.generate').click(function(){

    var currentdate = new Date(); 
    var datetime = 'TIME:' + ' ' 
    + (currentdate.getMonth()+1) 
    + '/'+ currentdate.getDate() 
    + '/' + currentdate.getFullYear() 
    + ' ' + currentdate.getHours() 
    + ':' + currentdate.getMinutes() 
    + ':' + currentdate.getSeconds();

    $ ('.time').html(datetime);

});


//CHECKBOX
$('.recycle').click(function() {
    if($(this).is(':checked')) {
        $('.rowrecycling').show();
    } else {
        $('.rowrecycling').hide();
    }
});

$('.diet').click(function() {
    if($(this).is(':checked')) {
        $('.rowdiet').show();
    } else {
        $('.rowdiet').hide();
    }
});

$('.shopping').click(function() {
    if($(this).is(':checked')) {
        $('.rowshopping').show();
    } else {
        $('.rowshopping').hide();
    }
});


//INPUTBOX
  $('.generate').click(function(){

  // CLOTHES    
    var c = $('.clothes').val();
    let num1 = c*6.4;
    let n1 = num1.toFixed(2);

        if (c == ''){
            $('.rowclothes').hide();
        } else {
            $('.rowclothes').show();
            $('.qtyc').html(c);
            $('.amtc').html(n1 + ' ' + 'KG');
        }

        if (c == '0'){
            $('.rowclothes').hide();
        }

  //DINE    
    var d = $('.dine').val();
    let num2 = d*0.02;
    let n2 = num2.toFixed(2);

        if (d == '' || d == '0'){
            $('.rowdine').hide();
        } else {
            $('.rowdine').show();
            $('.qtyd').html(d);
            $('.amtd').html(n2 + ' ' + 'KG');
        }

  //ELECTRONIC    
    var e = $('.electronic').val();
    let num3 = e*0.005;
    let n3 = num3.toFixed(2);

        if (e == '' || e == '0'){
            $('.rowelectronic').hide();
        } else {
            $('.rowelectronic').show();
            $('.qtye').html(e);
            $('.amte').html(n3 + ' ' + 'KG');
        }

});


//TOTAL
$('.generate').click(function(){

var c = $('.clothes').val();
var d = $('.dine').val();
var e = $('.electronic').val();
var yes = 1;
var no = 0;

if($('.recycle').is(':checked')) {
    var x1 = yes;
    } else {
    var x1 = no;
    }

if($('.diet').is(':checked')) {
    var x2 = yes;
    } else {
    var x2 = no;
    }

if ($('.shopping').is(':checked')) {
    var x3 = yes;
    } else {
    var x3 = no;
    }  

let numt = x1*210 + x2*800 + x3*5 + c*6.4 + d*0.02 + e*0.005
let nt = numt.toFixed(2);

$('.amtt').html(nt + ' ' + 'KG');

});

    
    

}); //end document.ready block
