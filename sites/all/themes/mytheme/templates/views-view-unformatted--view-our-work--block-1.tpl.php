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
<ul class="our-work-slider-two_row">
<?php $counter = 0;	?>
<?php foreach ($rows as $id => $row): ?>   
  <?php
   $counter++;  
   if($counter == 1): ?>
    <li<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
  <?php endif ?>
  <?php 
    print $row;      
	if($counter == 2): 
		$counter = 0; 			
	?>
    </li>
    <?php endif; ?>
<?php endforeach; ?>

</ul>