console.log(site_root)
$(document).ready(function(){

  function poofHTML(target){
    if( $('.cont-cont').length ){
      if( $('main').hasClass('blog') ){$('main').removeClass('blog')}
      $('.cont-cont').remove();
    }
    console.log(target)
    $.ajax({
      url: site_root + 'html/' + target + '_cont.php',
      method: 'GET',
      success: function(res){
        $('main').append(res);
        var state = target.split('/').pop();
        window.history.pushState(null, null, site_root + target);
      },
      error: function(err){
        console.log(err)
      }
    })
  }

  $('.nav-link').on('click', function(){
    poofHTML($(this).data('link'));
  })

  $(window).on('popstate', function(e){
    e.preventDefault();
    var target = window.location.pathname.split('/').pop();
    console.log(target)
    poofHTML(target);
  })
})
