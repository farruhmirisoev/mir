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

    <div class="mir-soc-share clearfix">
			<div class="mir-soc-share__title"><?php print t('Поделиться'); ?>:</div>
			<div class="mir-soc-share__content">
				<script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
				<script src="//yastatic.net/share2/share.js"></script>
				<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter,viber,whatsapp"></div>
			</div>
		</div>


    <div class="mir-nav-button__wrap">
    <?php

      // load all nodes of this type
      $nodes = node_load_multiple(array(), array('type' => 'content_our_work'));

      //check if the prev node id isset and put the link
      if(isset($nodes[($node->nid)-1])): ?>
        <div class="mir-nav-button mir-nav-button--left"><a href="/node/<?php print ($node->nid)-1; ?>"><?php print t('Previous work'); ?></a></div>
      <?php endif;

      //check if the next node id isset and put the link
      if(isset($nodes[($node->nid)+1])): ?>
        <div class="mir-nav-button mir-nav-button--right"><a href="/node/<?php print ($node->nid)+1; ?>"><?php print t('Next work'); ?></a></div>
      <?php endif; ?>

    </div>

  </div>


</article>
