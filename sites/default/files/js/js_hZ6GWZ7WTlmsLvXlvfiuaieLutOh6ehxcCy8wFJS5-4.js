/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function($){

	// Creating the plugin
	$.fn.countdown = function(prop){

		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);

		var left, d, h, m, s, positions;

		// Initialize the plugin
		init(this, options);

		positions = this.find('.position');

		(function tick(){

			// Time left
			left = Math.floor((options.timestamp - (new Date())) / 1000);

			if(left < 0){
				left = 0;
			}

			var weeks = Math.floor(left/60/60/24/7),
				days = Math.floor(left/60/60/24) % 7,
				hours = Math.floor((left/(60*60)) % 24),
				minutes = Math.floor((left/60) % 60),
				seconds = left % 60;

			updateDuo(0, 1, weeks);
			updateDuo(2, 3, days);
			updateDuo(4, 5, hours);
			updateDuo(6, 7, minutes);
			updateDuo(8, 9, seconds);

			// Calling an optional user supplied callback
			options.callback(weeks, days, hours, minutes, seconds);

			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();

		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}

		return this;
	};


	function init(elem, options){
		elem.addClass('countdownHolder');

		// Creating the markup inside the container
		$.each(['Weeks','Days','Hours','Minutes','Seconds'],function(i){
                        $('<span class="count'+this+'">'+
                                '<span class="position">'+
                                        '<span class="digit static">0</span>'+
                                '</span>'+
                                '<span class="position">'+
                                        '<span class="digit static">0</span>'+
                                '</span>'+
                        '</span>').appendTo(elem);

			if(this!="Seconds"){
				elem.append('<span class="countDiv countDiv'+i+'"></span>');
			}
		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){

		var digit = position.find('.digit')

		if(digit.is(':animated')){
			return false;
		}

		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}

		position.data('digit', number);

		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'-2.1em',
				opacity:0
			},
			html:number
		});

		// The .static class is added when the animation
		// completes. This makes it run smoother.

		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'2.5em',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);;
(function($){
  Drupal.behaviors.jquery_coundown_timer_init_popup = {
    attach: function(context, settings) {
      var note = $('#jquery-countdown-timer-note'),
      ts = new Date(Drupal.settings.jquery_countdown_timer.jquery_countdown_timer_date * 1000);
      $('#jquery-countdown-timer').not('.jquery-countdown-timer-processed').addClass('jquery-countdown-timer-processed').countdown({
	timestamp : ts,
	callback : function(weeks,days, hours, minutes, seconds){
          var dateStrings = new Array();
          dateStrings['@weeks'] = Drupal.formatPlural(weeks, '1 week', '@count weeks');
          dateStrings['@days'] = Drupal.formatPlural(days, '1 day', '@count days');
          dateStrings['@hours'] = Drupal.formatPlural(hours, '1 hour', '@count hours');
          dateStrings['@minutes'] = Drupal.formatPlural(minutes, '1 minute', '@count minutes');
          dateStrings['@seconds'] = Drupal.formatPlural(seconds, '1 second', '@count seconds');
          var message = Drupal.t('@weeks, @days, @hours, @minutes and @seconds left', dateStrings);
          note.html(message);
        }
      });
    }
  }
})(jQuery);
;
