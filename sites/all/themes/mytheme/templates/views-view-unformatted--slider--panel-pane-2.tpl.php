<?php
/**
 * Created by PhpStorm.
 * User: katrina
 * Date: 25.03.15
 * Time: 17:26
 */
/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div id="front-slider-consultation" class="jcarousel">
    <!-- Carousel items -->
    <ul class="">
        <?php foreach ($rows as $key => $row): ?>
            <li class="item <?php if ($key === 0) print 'active' ?> col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="item-content">
                <?php print $row ?>
              </div>
            </li>
        <?php endforeach ?>
    </ul>
</div>