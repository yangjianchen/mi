//家电 搭配模块
$(function () {
  function set(a ,b) {
      b.find('li').mouseover(function () {
      a.hide();
      a.eq($(this).index()).show();
      $(this).siblings().removeClass('actives');
      $(this).addClass('actives');
    })
  }
  set($('.banner-bottom'),$('.list1'));
  set($('.banner-bottom1'),$('.list2'))
});

//banner上div的移入事件
$(function () {
  var $oli=$('.list-right>li');
  var $ulleft=$('.list-left-ul');
  $ulright=$(".list-right");
  var timer=null;
  $ulleft.find('li').on('mouseover',function () {
    clearInterval(timer);
    $oli.hide();
    $oli.eq($(this).index()).show();
    $ulright.css('display','block');
  });
  $ulleft.find('li').on('mouseout',function () {
    timer=setTimeout(function () {
      $ulright.hide();
    },20)
  });
  $ulright.on('mouseover',function () {
    clearInterval(timer);
    $ulright.show();
  });
  $ulright.on('mouseout',function () {
    $ulright.hide();
  });
 });

//div左右切换
$(function () {
  $('.biaoqian>button:last').on('click',function () {
    $(this).attr("disabled","disabled");
    if($('.one>ul').position().left==-1140){
      $('.one>ul').animate({left:'0px'},'slow');
    }else{
      $('.one>ul').animate({
        left:'-='+'1140px'
      },'slow');
    }
  });
  $('.biaoqian>button:first').on('click',function () {
    $('.biaoqian>button:last').removeAttr('disabled');
    $('.one>ul').animate({
      left:'0px'
    },'slow');
  });
  timer=setInterval(function () {
    $('.biaoqian>button:last').attr("disabled","disabled");
    if($('.one>ul').position().left==-1140){
      $('.one>ul').animate({left:'0px'},'slow');
    }else{
      $('.one>ul').animate({
        left:'-1140px'
      },'slow');
    }
  },7000);
});













