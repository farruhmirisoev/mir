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
function mytheme_preprocess_panels_pane(&$variables) {
  if($variables['pane']->subtype == 'block-10') {
    $variables['districts'] = array();
    $vocabulary = taxonomy_vocabulary_machine_name_load('district');
    $terms = entity_load('taxonomy_term', FALSE, array('vid' => $vocabulary->vid));
    foreach ($terms as $key => $value) {
      $tid = $value->tid;
      $term_wrapper = entity_metadata_wrapper('taxonomy_term', $value->tid);
      if($term_wrapper->field_district_main_page->value()) {

        $query = db_select('node', 'n');
        $query->innerJoin('field_data_field_district', 'd', 'd.entity_id = n.nid');
        $query->condition('n.type', 'content_our_work');
        $query->condition('n.status', 1);
        $query->condition('d.field_district_tid', $tid);
        $query->addExpression('COUNT(*)');
        $result = $query->execute();
        $count = $result->fetchField();
        if ($count) {
          $variables['districts'][$tid] = array(
            'name' => $term_wrapper->name->value(),
            'count' => $count
          );
        }
      }
    }
  }
}

function mytheme_custom_russian_number_declension($variables) {
  $dont_print_number = 0;
  $print_number_w_space = 1;
  $print_number_wo_space = 2;

  $num = (int) ($variables['number']);
  $words = $variables['words'];
  $output = '';

  if (!is_int($num) || count($words) < 3) {
    return FALSE;
  }
  $strnum = (string) ($num);
  $srtlen = strlen($strnum);
  $last = substr($strnum, $srtlen - 1);

  if ($srtlen > 1 && substr($strnum, $srtlen - 2, 1) == '1') { // 10, 15, 11, 210, 215, 211, 3011, 5012
    $output = $words[2];
  }
  else {
    if ($last == '1') { // 1, 21, 101, 121
      $output = $words[0];
    }
    elseif ($last == '2' || $last == '3' || $last == '4') { // 1, 21, 101, 121
      $output = $words[1];
    }
    else {
      $output = $words[2];
    }
  }
  return $output;
}

function mytheme_preprocess_node(&$vars) {
  if ($vars['node']->type == 'content_our_work' && $vars['view_mode'] == 'full') {
    $vars['theme_hook_suggestions'][] = 'node__content_our_work__full';
  }
}
