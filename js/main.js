$(document).ready(function(){

  function poofHTML(target){
    if( $('.cont-cont').length ){
      if( $('main').hasClass('blog') ){$('main').removeClass('blog')}
      $('.cont-cont').remove();
    }

    $.ajax({
      url: 'html' + target + '_cont.php',
      method: 'GET',
      success: function(res){
        $('main').append(res);
        var state = target.split('/').pop();
        window.history.pushState(null, null, target);
      },
      error: function(err){
        console.log(err)
      }
    })
  }

  // if( window.location.pathname.length > 1 ){
  //   if( window.location.pathname.split('/').pop() === 'music' ||
  //       window.location.pathname.split('/').pop() === 'blog' ||
  //       window.location.pathname.split('/').pop() === 'contact' ){

  //     poofHTML(window.location.pathname);
  //   }
  //   else {
  //     window.history.replaceState(null, null, '/');
  //   }
  // }

  if( window.location.pathname.length > 1 && (
      window.location.pathname.split('/').pop() !== 'music' ||
      window.location.pathname.split('/').pop() !== 'blog' ||
      window.location.pathname.split('/').pop() !== 'contact'
    ) ){
    console.log('flub')
    // window.location.replace('/');
  }

  $('.nav-link').on('click', function(){
    poofHTML($(this).data('link'));
  })

  // $(window).on('popstate', function(e){
  //   console.log('blaghhh')
  //   var target = window.location.pathname.split('/').pop();
  //   // console.log(e.state)
  //   // if( !target ){
  //   //   $('.cont-cont').remove()
  //   // }
  //   // else {
  //     poofHTML('/' + target);
  //   // }
  // })
})
