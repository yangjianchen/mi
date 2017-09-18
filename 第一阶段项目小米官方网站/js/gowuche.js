//最上方导航条鼠标移入事件
$(function () {
  // var timer1=null;
  //
  // $('.list-top').find('.li1').mouseover(function () {
  //   clearInterval(timer1);
  //     $('.list-bottom').show();
  //     $('.list-bottom li').hide();
  //     $('.list-bottom li').eq($(this).index()).show();
  // });
  // $('.list-top').find('.li1').mouseout(function () {
  //   timer1=setTimeout(function () {
  //     $('.list-bottom').hide();
  //     $('.list-bottom li').hide();
  //     $('.list-bottom li').eq($(this).index()).show();
  //   },350)
  // });
  // $('.list-bottom').mouseover(function () {
  //   clearInterval(timer1);
  //   $('.list-bottom').show();
  // });
  // $('.list-bottom').mouseout(function () {
  //   $('.list-bottom').hide();
  // });
  var enterTimeout=null,leaveTimeout = null;var timer=null;
  $('.list-top').find('.li1').mouseover(function () {
     var i =$(this);
    clearInterval(enterTimeout);
    clearInterval(leaveTimeout);
    clearInterval(timer);
    enterTimeout=setTimeout(function () {
      $('.list-bottom').show();
      $('.list-bottom li').hide();
      $('.list-bottom li').eq(i.index()).show();
    },350);
  });
   $('.list-top').find('.li1').mouseout(function () {
     var i =$(this);
     clearInterval(enterTimeout);
     clearInterval(leaveTimeout);
     clearInterval(timer);
    leaveTimeout= setTimeout(function () {
      $('.list-bottom').hide();
      $('.list-bottom li').hide();
      $('.list-bottom li').eq(i.index()).show();
    },350)
  });
  $('.list-bottom').mouseover(function () {
    clearInterval(enterTimeout);
    clearInterval(leaveTimeout);
    clearInterval(timer);
      $('.list-bottom').show();
    });
    $('.list-bottom').mouseout(function () {
      timer=setTimeout(function () {
        $('.list-bottom').hide();
      },250)

    });


});

//购物车
$.ajax({
    type: "GET",
    url: "gouwuche.json",
    dataType: "json",
    success: function (data) {
      console.log(data);
      var html = '';
      var html2 = '';
      var num = 0;
      var timer = null;
      for (var i = 0; i < data.length; i++) {
        html += '<li>';
        html += '<div><a href="" ><img src="' + data[i].image + '" alt="" ></a>';
        html += '<a href="">' + data[i].name + ' </a>';
        html += '<span  class="dd">' + data[i].price + '</span>';
        html += ' <a href="javascript:;" class="delete">&times;</a>';
        html += '</div></li>';
        num = num + parseInt(data[i].price);
      }
      len = data.length;
      html2 += '<span><span>共件<span class="bb">' + data.length + '' +
        '</span>商品<br> <span class="cc" style="font-size: 18px;color: #ff6700;" >' +
        num + '</span>元</span><button class="btn btn-danger btn-lg" style="float: right;margin-top: -20px">结算' +
        '</button></td></span>';
      $('.gowuche').find('.jiesuan').html(html2);
      $('.gowuche').find('ul').html(html)
        .find('.delete').on('click', function () {
        $(this).parents('li').remove();
        len--;
        $('.bb').text(len);
        num = num - parseInt($(this).parents('li').find('.dd').text());
        $('.cc').text(num);
      });
      $('.mynav-last-a').mouseover(function () {
        $('.gowuche').show();
      });
      $('.mynav-last-a').mouseout(function () {
        timer = setTimeout(function () {
          $('.gowuche').hide();
        }, 100);
      });
      $('.gowuche').mouseover(function () {
        clearTimeout(timer);
        $('.gowuche').show();
      });
      $('.gowuche').mouseout(function () {
        $('.gowuche').hide();
      })
    }
  });



