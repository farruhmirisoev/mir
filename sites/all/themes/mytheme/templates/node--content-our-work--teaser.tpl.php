<?php

/**
 * @file
 * Kalatheme theme implementation to display a node.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 *
 * @ingroup themeable
 */
?>
<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <div class="content"<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      hide($content['links']);
      hide($content['locations']);
      hide($content['field_ow_img']);

    ?>

    <div class="mir-portfolio-slider">
      <div class="mir-portfolio-slider__main"><?php print render($content['field_ow_img']); ?></div>
      <div class="mir-portfolio-slider__thumbs"><?php print render($content['field_ow_img']); ?></div>
    </div>

    <?php print render($content); ?>

    
  </div>


</article>
