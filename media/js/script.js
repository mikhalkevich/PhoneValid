(function( $ ){
	
	//// ---> Проверка на существование элемента на странице
	jQuery.fn.exists = function() {
	   return jQuery(this).length;
	}
	
	//	Phone Mask
	$(function() {
		
    if(!is_mobile()){
    
      if($('.user_phone').exists()){
        
        $('.user_phone').each(function(){
          $(this).mask("+375(99) 999-99-99");
        });
        $('.user_phone')
          .addClass('rfield')
          .removeAttr('required')
          .removeAttr('pattern')
          .removeAttr('title')
          .attr({'placeholder':'+375(__) ___ __ __'});
      }
      
      if($('.phone_form').exists()){
        
        var form = $('.phone_form'),
          btn = form.find('.btn_submit');
        
        form.find('.rfield').addClass('empty_field');
      
        setInterval(function(){
        
          if($('.user_phone').exists()){
            var pmc = $('.user_phone');
            if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
              pmc.addClass('empty_field');
            } else {
                pmc.removeClass('empty_field');
            }
          }
          
          var sizeEmpty = form.find('.empty_field').size();
          
          if(sizeEmpty > 0){
            if(btn.hasClass('disabled')){
              return false
            } else {
              btn.addClass('disabled')
            }
          } else {
            btn.removeClass('disabled')
          }
          
        },200);

        btn.click(function(){
          if($(this).hasClass('disabled')){
            return false
          } else {
            form.submit();
          }
        });
        
      }
    }

	});

})( jQuery );