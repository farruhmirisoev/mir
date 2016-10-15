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
      hide($content['field_anons']);
      print render($content['field_anons']);
      ?>

		<div class="mir-soc-share">
			<div class="mir-soc-share__title"><?php print t('Share it on'); ?>:</div>
			<div class="mir-soc-share__content">		
				<script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
				<script src="//yastatic.net/share2/share.js"></script>
				<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter,viber,whatsapp"></div>
			</div>
		</div>
    <?php
      print render($content);

    ?>
  </div>


</article>
