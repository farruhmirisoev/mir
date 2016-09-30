<?php
$plugin = array(
  'title'           => t('Map pane.'),
  'single'          => FALSE,
  'description'     => t('My custom pane lets pick a node and display it.'),
  'category'        => array('Map category'),
  'all contexts'    => TRUE,
  'edit form' => 'custom_map_pane_content_type_edit_form',
  'render callback' => 'custom_map_pane_content_type_render',
  'defaults' => array(
    'first_value' => '59.93872553',
    'second_value' => '30.31483050',
    'town_map' => 'Санкт-Петербург',
    'last_value' => 'Дворцовая площадь',
  )
);

/**
 * Title callback for admin page.
 */
function custom_map_pane_admin_title($subtype, $conf, $context = NULL) {
    return t('My custom pane');
}

/**
 * Callback to provide administrative info (the preview in panels when building a panel).
 */
function custom_map_pane_admin_info($subtype, $conf, $context = NULL) {
    $block = new stdClass();
    $block->title = t('Custom pane');
    $config = array();
    if ($conf['override_title'] == TRUE) {
        $title_value = '<b>' . $conf['override_title_text'] . '</b>';
    }
    else {
        $title_value = t('Not Set');
    }
    $config[] = t('Title') . ': ' . $title_value;
    $block->content = theme_item_list(array( 'items' => $config, 'title' => NULL, 'type' => 'ul', 'attributes' => array() ));
    return $block;
}

/**
 * Edit callback for the content type.
 */
function custom_map_pane_content_type_edit_form($form, &$form_state) {
    $conf = $form_state['conf'];

    $form['first_value'] = array(
      '#prefix' => '<div class="no-float">',
      '#title' => t('Введите первое значение координат'),
      '#description' => t(''),
      '#type' => 'textfield',
      '#default_value' => $conf['first_value'],
      '#suffix' => '</div>',
    );
    $form['second_value'] = array(
      '#prefix' => '<div class="no-float">',
      '#title' => t('Введите второе значение координат'),
      '#description' => t(''),
      '#type' => 'textfield',
      '#default_value' => $conf['second_value'],
      '#suffix' => '</div>',
    );
    $form['last_value'] = array(
      '#prefix' => '<div class="no-float">',
      '#title' => t('Адрес'),
      '#description' => t(''),
      '#type' => 'textfield',
      '#default_value' => $conf['last_value'],
      '#suffix' => '</div>',
    );
    $form['town_map'] = array(
      '#prefix' => '<div class="no-float">',
      '#title' => t('Город'),
      '#description' => t(''),
      '#type' => 'textfield',
      '#default_value' => $conf['town_map'],
      '#suffix' => '</div>',
    );
    return $form;
}

/**
 * Submit callback for settings form.
 */
function custom_map_pane_content_type_edit_form_submit($form, &$form_state) {
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    if (isset($form_state['values'][$key])) {
      $form_state['conf'][$key] = $form_state['values'][$key];
    }
  }
}

/**
 * Run-time rendering of the body of the block (content type).
 */
function custom_map_pane_content_type_render($subtype, $conf, $panel_args) {
  $settings = array(
    'first_value' => $conf['first_value'],
    'second_value' => $conf['second_value'],
    'town_map' => $conf['town_map'],
    'last_value' => $conf['last_value']
  );


  drupal_add_js(array('custom_map' => $settings), 'setting');
  drupal_add_js(drupal_get_path('module', 'custom_map') . '/js/custom_map.js');

  $block = new stdClass();
    $block->content = '<div id="custom_map_'. rand(1, 100) .'" style="height: 565px; width: 100%;"></div>

<div class="for_map_auto">
	<div class="but_content">
		<div class="route-from"><span>Введите пункт отправления: </span><input id="route-from-auto" type="text" value="" /></div>
		<div class="route-to">До: <input id="route-to-auto" type="text" value="'. $conf['last_value'] . '" /></div>
		<div><input class="button-1" name="AutoRouteAuto" type="submit" value="Построить маршрут" /></div>
	</div>
</div>

<div class="for_map_public">
	<div class="but_content">
		<div class="route-from"><span>Введите пункт отправления: </span><input id="route-from-public" type="text" value="" /></div>
		<div class="route-to">До: <input id="route-to-public" type="text" value="'. $conf['last_value'] . '" /></div>
		<div><input class="button-1" name="AutoRoutePublic" type="submit" value="Построить маршрут" /></div>
	</div>
</div>


<div id="map_buttons">
	<div class="but_content">
		<input class="button-1" name="AutoRouteBut" type="submit" value="Построить маршрут для автомобиля" />
		<input class="button-1" name="AutoPublicRouteBut" type="submit" value="Общественный транспорт" />
	</div>
</div>


<div id="route-length">&nbsp;</div>';


    return $block;
}