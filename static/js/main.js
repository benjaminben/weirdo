$(document).ready(function(){

  function poofHTML(target){
    if( $('.cont-cont').length ){
      $('.cont-cont').remove();
    }

    $.ajax({
      url: 'html' + target + '.html',
      method: 'GET',
      success: function(res){
        $('main').append(res);
        var state = target.split('/').pop();
        window.history.pushState(null, null, target);
      },
      error: function(err){
        window.history.pushState(null, null, '/');
      }
    })
  }

  if( window.location.pathname.length > 1 ){
    poofHTML(window.location.pathname);
  }

  $('.nav-link').on('click', function(){
    poofHTML($(this).data('link'));
  })

  $(window).on('popstate', function(e){
    var target = window.location.pathname.split('/').pop();
    if( !target ){
      $('.cont-cont').remove()
    }
    else {
      poofHTML('/' + target);  
    }
  })
})
