(function ($) {

  /**
   * JS related to the styles in the Panels.
   */
  Drupal.behaviors.panelsStylePack = {
    attach: function (context) {

      // Init the variables.
      var optionObj = {};
      var collapsible = {};
      var heightstyle = {};

      for (var i = 0; i < Drupal.settings.panelsStylePack.regions.length; i++) {

        var region = Drupal.settings.panelsStylePack[Drupal.settings.panelsStylePack.regions[i]];

        if (region.type == 'tabs') {
          if(region.tab_style == 'open_mouseover') {
            optionObj = {
              event: 'mouseover'
            }
          }
          else if(region.tab_style == 'collapsible') {
            optionObj = {
              collapsible: true
            }
          }
          $('#' + region.tabsID +':not(.tabs-processed)', context)
            .addClass('tabs-processed')
            .tabs(optionObj);
          if(region.orientation == 'bottom') {
            $( ".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *" )
            .removeClass( "ui-corner-all ui-corner-top" )
            .addClass( "ui-corner-bottom" );
            // Move the nav to the bottom
            $( ".tabs-bottom .ui-tabs-nav" ).appendTo( ".tabs-bottom" );
          }
        }

      }

      if (Drupal.settings.type == 'accordion') {
        var accordionID = Drupal.settings.panelsAccordion.accordionID;
        heightstyle = { heightstyle : Drupal.settings.panelsAccordion.heightstyle }

        if(Drupal.settings.panelsAccordion.collapsible == 1) {
          collapsible = {
            collapsible: Drupal.settings.panelsAccordion.collapsible
          }
        }

        optionObj = $.extend(heightstyle, collapsible);
        for (var key in Drupal.settings.panelsAccordion.accordionID) {
          $('#' + accordionID[key] +':not(.accordion-processed)', context)
            .addClass('accordion-processed')
            .accordion(optionObj);
        }
      }

      if (Drupal.settings.type == 'slideshow') {

        function calculateTimeout(currElement, nextElement, opts, isForward) {
          var index = opts.currSlide;
          var a = Drupal.settings.timeoutfn[index];
          return index? a : false;
        }

        var slideshowID = Drupal.settings.id;
        optionObj = {
          fx: Drupal.settings.transition_type,
          easing: Drupal.settings.easing,
          sync: Drupal.settings.sync,
          timeout: Drupal.settings.timeout,
          prev: '#'+Drupal.settings.prev,
          next: '#'+Drupal.settings.next,
          pager: '#'+Drupal.settings.pager,
          timeoutFn: calculateTimeout
        }
        $('#' + slideshowID +':not(.slideshow-processed)', context)
          .addClass('slideshow-processed')
          .cycle(optionObj);

      }

    }
  };

})(jQuery);
