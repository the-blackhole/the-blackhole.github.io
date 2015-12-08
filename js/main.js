(function($) {

  function init_show_layer() {
    $(".show-layer").click(function() {
      $('.fly-layer').removeClass('fly-layer--show');
      $('.show-layer').removeClass('show-layer-selected');
      $(this).addClass('show-layer-selected');
      $(this).next('.fly-layer').addClass('fly-layer--show');
    });
  }

  function init_hide_layer() {
    $('.hide-layer').click(function() {
      $(this).parent('.fly-layer').removeClass('fly-layer--show');
    });
  }

  $(document).ready(function() {
    init_show_layer();
    init_hide_layer();
  });

})(jQuery);