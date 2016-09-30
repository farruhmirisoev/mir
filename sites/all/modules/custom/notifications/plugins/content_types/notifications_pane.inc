<?php
$plugin = array(
    'title'           => t('This is my custom pane.'),
    'single'          => FALSE,
    'description'     => t('My custom pane lets pick a node and display it.'),
    'category'        => array('My category'),
    'all contexts'    => TRUE,
//    'edit form' => 'notifications_pane_content_type_edit_form',
    'render callback' => 'notifications_pane_content_type_render'
);

/**
 * Title callback for admin page.
 */
function notifications_pane_admin_title($subtype, $conf, $context = NULL) {
    return t('My custom pane');
}

/**
 * Callback to provide administrative info (the preview in panels when building a panel).
 */
function notifications_pane_admin_info($subtype, $conf, $context = NULL) {
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
function notifications_pane_content_type_edit_form($form, &$form_state) {
    $conf = $form_state['conf'];

    if ($form_state['op'] == 'add') {
        $form['nid'] = array(
            '#prefix' => '<div class="no-float">',
            '#title' => t('Enter the title or NID of a node'),
            '#description' => t('To use a NID from the URL, you may use %0, %1, ..., %N to get URL arguments. Or use @0, @1, @2, ..., @N to use arguments passed into the panel.'),
            '#type' => 'textfield',
            '#maxlength' => 512,
            '#autocomplete_path' => 'ctools/autocomplete/node',
            '#weight' => -10,
            '#suffix' => '</div>',
        );
    }
    else {
        $form['nid'] = array(
            '#type' => 'value',
            '#value' => $conf['nid'],
        );
    }

    return $form;
}

/**
 * Submit callback for settings form.
 */
function notifications_pane_content_type_edit_form_submit($form, &$form_state) {
    foreach (element_children($form) as $key) {
        if (isset($form_state['values'][$key])) {
            $form_state['conf'][$key] = $form_state['values'][$key];
        }
    }
}

/**
 * Run-time rendering of the body of the block (content type).
 */
function notifications_pane_content_type_render($subtype, $conf, $panel_args) {
    $block = new stdClass();
    $block->content = '<div>Reviews: ' . notifications_get_node_count('reviews') . '</div> <div class="up">' . notifications_get_nodes_by_type('reviews') . '</div>';
    $block->content .= '<div>Questions: ' . notifications_get_node_count('questions') . '</div> <div class="up"><br>' . notifications_get_nodes_by_type('questions') . '</div>';
    $block->content .= '<div>Comments: ' .  comment_count_unpublished() . '</div> <div class="up"></div>';

    return $block;
}