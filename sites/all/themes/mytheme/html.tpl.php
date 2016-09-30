<!DOCTYPE html>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir;?>">
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <script src="/sites/all/themes/mytheme/js/jquery.matchHeight.min.js"></script>
  <script src="/sites/all/themes/mytheme/js/jquery.jcarousel.min.js"></script>
  <script src="/sites/all/themes/mytheme/js/jcarousel.responsive.min.js"></script>
  <script src="/sites/all/themes/mytheme/js/jquery.jcarousel-autoscroll.js"></script>
  <script src="/sites/all/themes/mytheme/js/jquery.maskedinput.min.js"></script>
  <meta name="viewport" content="width=1200">
  <?php include_once 'before_last_head.tpl.php'; ?>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <?php include_once 'after_first_body.tpl.php'; ?>
<div id=skip-link>
  <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
</div>
<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>
<?php include_once 'before_last_body.tpl.php'; ?>
</body>
</html>
