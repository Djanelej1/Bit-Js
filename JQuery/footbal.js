

  $(document).ready(function () {
    $('body').click(function (e) {
        $("#playerIcon")
          .css({
              position: 'absolute',
              left: e.pageX,
              top: e.pageY,
              
          })
        })
        $('#button3').click(function (e) {
          $('body').unbind("click");
        })
      });