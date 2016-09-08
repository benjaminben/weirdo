$(document).ready(function(){

  function poofHTML(target){
    $.ajax({
      url: target,
      method: 'GET',
      success: function(res){
        $('body').append(res);
        var state = target.split('/').pop();
        window.history.pushState(null, null, state);
      }
    })
  }

  $('.nav-link').on('click', function(){
    poofHTML($(this).data('link'));
  })
})
