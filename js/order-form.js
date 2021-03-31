$(document).ready(function() {
  
    $('.ordercall').click(function(){
      $('#modal').fadeIn(300);
    });
    $('#modal').on('click', function(e){
      if (e.target.id == 'modal'){
        $(this).hide();
      }  
    })})