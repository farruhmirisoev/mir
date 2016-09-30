<?php
$count = count($rows);
$class = "jcarousel-three-items";
if($count == 1) {
  $class = "uno";
}
if($count == 2) {
  $class = "jcarousel-two-items";
}
?>

<div id="keis-slider-voronej" class="jcarousel not-auto <?php print $class; ?> keis">
  <!-- Carousel items -->
  <ul class="">
    <?php foreach ($rows as $key => $row): ?>
      <li class="item <?php if ($key === 0) print 'active' ?> col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <?php print $row ?>
      </li>
    <?php endforeach ?>
  </ul>

  <?php if(count($rows) > 3): ?>
    <!-- Controls -->
    <a href="#" class="jcarousel-control-prev">&lt;</a>
    <a href="#" class="jcarousel-control-next">&gt;</a>
    <!--    <p class="jcarousel-pagination"></p>-->
  <?php endif; ?>
</div>