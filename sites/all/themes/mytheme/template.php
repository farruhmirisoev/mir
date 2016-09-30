<?php
/**
 * @file
 * Sass Kalatheme's primary theme functions and alterations.
 */

drupal_add_library('contextual', 'contextual-links');

function mytheme_html_head_alter(&$head_elements)  {
  //drupal_add_js('https://maps.googleapis.com/maps/api/js?key=AIzaSyByq9v1R6r8PJLtS1aGXq1_64oUEs0AXa8&language=ru');
  //drupal_add_js('sites/all/themes/mytheme/js/map.js');
}
function mytheme_preprocess_html(&$vars) {
  //dpm($vars);
}