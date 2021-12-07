$(function() {
    
    // Material Design Start    
    $('.form-control:empty').addClass('empty');
	$('.form-control').on('blur', function(){
		if($(this).val() == 0){
			$(this).addClass('empty');
		}
		else{
			$(this).removeClass('empty');
		}
	});
	$('.form-control').each(function(){
		if($(this).val() == 0){
			$(this).addClass('empty');
		}
		else{
			$(this).removeClass('empty');
		}
	});
	// Material Design End
	
	// Range Slider Function

	function numberintoamount(n) {
		var parts=n.toString().split(".");
		return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
	}	
	// numberintoamount(100000)
	$('.range-slider input[type="range"]').each(function(){
		var minVal = $(this).attr('min'),
			maxVal = $(this).attr('max'),
			valu = $(this).val(),
			calc = (valu * 100) / maxVal;
		if ($(this).parent().hasClass('range-slider')){
			document.getElementById("loanamount").innerHTML = numberintoamount(valu);
		}
		$(this).after('<div class="slider-val"><span>₹ '+numberintoamount(minVal)+'</span><span>₹ '+numberintoamount(maxVal)+'</span></div>')
		$(this).after('<span class="type-range" style="width:'+calc+'%;"></span><span class="thumb" style="left:'+calc+'%;"></span>');
		$(this)[0].oninput = function() {
			var uMaxVal = $(this).attr('max'),
				uValu = this.value,
				uCalc = (uValu * 100) / uMaxVal;
			$(this).siblings('.type-range').css('width',uCalc+'%');
			$(this).siblings('.thumb').css('left',uCalc+'%');
			if ($(this).parent().hasClass('range-slider')){
				var output = document.getElementById("loanamount");
				output.innerHTML = numberintoamount(this.value);
			}
		}
	})

	$('.plan-box').each(function(){
		var $this = $(this).find('.custom-radio-box > input[type="radio"]');
		if ($this.is(':checked')) {
			$(this).addClass('checked');
		}
	});
	$('.plan-box .custom-radio-box > input[type="radio"]').on('change', function(){
		if ($(this).is(':checked')) {
			$(this).closest('.plan-box').addClass('checked').siblings().removeClass('checked');
		}
		else {
			$(this).closest('.plan-box').removeClass('checked');
		}
	});
});