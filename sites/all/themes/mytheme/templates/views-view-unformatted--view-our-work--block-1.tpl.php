<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<div class="our-work-slider-two_row">
<?php $counter = 0;	?>
<?php foreach ($rows as $id => $row): ?>   
  <?php
   $counter++;  
   if($counter == 1): ?>
    <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
  <?php endif ?>
  <div class="out-work-slider__slide-item"><?php print $row;  ?></div>
  <? if($counter == 2):    
      $counter = 0;	?>
    </div>
  <?php endif; ?>
<?php endforeach; ?>

</div>