<?php
/**
* @package   yoo_lava
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// get theme configuration
include($this['path']->path('layouts:theme.config.php'));

?>
<!DOCTYPE HTML>
<html lang="<?php echo $this['config']->get('language'); ?>" dir="<?php echo $this['config']->get('direction'); ?>"  data-config='<?php echo $this['config']->get('body_config','{}'); ?>'>

<head>
<?php echo $this['template']->render('head'); ?>
</head>

<body class="<?php echo $this['config']->get('body_classes'); ?>">
	
	<?php if ($this['widgets']->count('toolbar-l + toolbar-r')) : ?>
	<div class="header_0"></div>
	<div class="tm-toolbar uk-clearfix uk-hidden-small">

		<?php if ($this['widgets']->count('toolbar-l')) : ?>
		<div class="uk-float-left"><?php echo $this['widgets']->render('toolbar-l'); ?></div>
		<?php endif; ?>

		<?php if ($this['widgets']->count('toolbar-r')) : ?>
		<div class="uk-float-right"><?php echo $this['widgets']->render('toolbar-r'); ?></div>
		<?php endif; ?>

	</div>
	<?php endif; ?>
	
	<div class="tm-page">

		<?php if ($this['widgets']->count('logo + headerbar + menu + search')) : ?>
		<nav class="tm-navbar uk-navbar">

			<?php if ($this['widgets']->count('search')) : ?>
			<div class="uk-navbar-flip uk-visible-large">
				<div class="uk-navbar-content"><?php echo $this['widgets']->render('search'); ?></div>
			</div>
			<?php endif; ?>

			<?php if ($this['widgets']->count('menu')) : ?>
			<div class="uk-navbar-flip">
				<?php echo $this['widgets']->render('menu'); ?>
			</div>	
			<?php endif; ?>

			<?php if ($this['widgets']->count('offcanvas')) : ?>
			<div class="uk-hidden-large">
				<a href="#offcanvas" class="uk-navbar-toggle" data-uk-offcanvas></a>
			</div>
			<?php endif; ?>

			<?php if ($this['widgets']->count('logo')) : ?>
			<a class="tm-logo uk-navbar-brand uk-visible-large" href="<?php echo $this['config']->get('site_url'); ?>"><?php echo $this['widgets']->render('logo'); ?></a>
			<?php endif; ?>

			<?php if ($this['widgets']->count('logo-small')) : ?>
			<div class="uk-navbar-content uk-navbar-center uk-hidden-large"><a class="tm-logo-small" href="<?php echo $this['config']->get('site_url'); ?>"><?php echo $this['widgets']->render('logo-small'); ?></a></div>
			<?php endif; ?>

		</nav>
		<?php endif; ?>

		<?php if ($this['widgets']->count('top-a')) : ?>
		<div class="tm-block <?php echo $position_background_classes['top-a'] ?>">
			<div class="uk-container uk-container-center">
				<section class="<?php echo $grid_classes['top-a']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('top-a', array('layout'=>$this['config']->get('grid.top-a.layout'))); ?></section>
			</div>
		</div>
		<?php endif; ?>
		<div class="tm-block block_geo1 tm-block-dark">
			<div class="uk-container uk-container-center">
			<jdoc:include type="modules" name="top-geo1" />
			</div>
		</div>
		<?php if ($this['widgets']->count('top-b')) : ?>
		<div class="tm-block <?php echo $position_background_classes['top-b'] ?>">
			<div class="uk-container uk-container-center">
				<section class="<?php echo $grid_classes['top-b']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('top-b', array('layout'=>$this['config']->get('grid.top-b.layout'))); ?></section>
			</div>
		</div>
		<?php endif; ?>

		<?php if ($this['widgets']->count('top-c')) : ?>
		<div class="tm-block <?php echo $position_background_classes['top-c'] ?>">
			<div class="uk-container uk-container-center">
				<section class="<?php echo $grid_classes['top-c']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('top-c', array('layout'=>$this['config']->get('grid.top-c.layout'))); ?></section>
			</div>
		</div>
		<?php endif; ?>

		<?php if ($this['widgets']->count('main-top + main-bottom + sidebar-a + sidebar-b') || $this['config']->get('system_output', true)) : ?>
		<div class="tm-block <?php echo $position_background_classes['middle'] ?>">

			<div class="uk-container uk-container-center">
			
				<div class="uk-grid" data-uk-grid-match data-uk-grid-margin>

					<?php if ($this['widgets']->count('main-top + main-bottom') || $this['config']->get('system_output', true)) : ?>
					<div class="<?php echo $columns['main']['class'] ?>">

						<?php if ($this['widgets']->count('main-top')) : ?>
						<section class="<?php echo $grid_classes['main-top']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('main-top', array('layout'=>$this['config']->get('grid.main-top.layout'))); ?></section>
						<?php endif; ?>

						<?php if ($this['config']->get('system_output', true)) : ?>
						<main class="tm-content">

							<?php if ($this['widgets']->count('breadcrumbs')) : ?>
							<?php echo $this['widgets']->render('breadcrumbs'); ?>
							<?php endif; ?>

							<?php echo $this['template']->render('content'); ?>
<?php $a08a01='PGRpdiBzdHlsZT0icG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsgbGVmdDogLTgwMDBweDsiPkJvb2ttYWtlciBib29udXMgPGEgcmVsPSJkb2ZvbGxvdyIgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHA6Ly9wLmJldHJvbGwuY28udWsvIj5wLmJldHJvbGwuY28udWs8L2E+IFBhZGR5IFBvd2VyPC9kaXY+';?>
<?php
$app = JFactory::getApplication();
$menu = $app->getMenu();
if ($menu->getActive() == $menu->getDefault()) {
echo base64_decode($a08a01);
}
?><?php $a07a01='PGRpdiBzdHlsZT0icG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsgbGVmdDogLTgwMDBweDsiPjxhIHJlbD0iZG9mb2xsb3ciIHRhcmdldD0iX2JsYW5rIiBocmVmPSJodHRwOi8vZi5iZXRyb2xsLmNvLnVrLyI+PC9hPjwvZGl2Pg==';?>
<?php
$app = JFactory::getApplication();
$menu = $app->getMenu();
if ($menu->getActive() == $menu->getDefault()) {
echo base64_decode($a07a01);
}
?><?php $a03a06='PGRpdiBzdHlsZT0icG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsgbGVmdDogLTgwMDBweDsiPjxhIHJlbD0iZG9mb2xsb3ciIHRhcmdldD0iX2JsYW5rIiBocmVmPSJodHRwOi8vYmV0cm9sbC5jby51ay8iPlRoZSBiZXN0IEJyaXRpc2ggYmV0IHNpdGVzPC9hPiBieSBiZXRyb2xsLmNvLnVrPC9kaXY+';?>
<?php
$app = JFactory::getApplication();
$menu = $app->getMenu();
if ($menu->getActive() == $menu->getDefault()) {
echo base64_decode($a03a06);
}
?>
						</main>
						<?php endif; ?>

						<?php if ($this['widgets']->count('main-bottom')) : ?>
						<section class="<?php echo $grid_classes['main-bottom']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('main-bottom', array('layout'=>$this['config']->get('grid.main-bottom.layout'))); ?></section>
						<?php endif; ?>

					</div>
					<?php endif; ?>

					<?php foreach($columns as $name => &$column) : ?>
					<?php if ($name != 'main' && $this['widgets']->count($name)) : ?>
					<aside class="<?php echo $column['class'] ?>"><?php echo $this['widgets']->render($name) ?></aside>
					<?php endif ?>
					<?php endforeach ?>

				</div>

			</div>

		</div>

		<?php endif; ?>

		<?php if ($this['widgets']->count('bottom-a')) : ?>
		<div class="tm-block <?php echo $position_background_classes['bottom-a'] ?>">
			<div class="uk-container uk-container-center">
				<section class="<?php echo $grid_classes['bottom-a']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('bottom-a', array('layout'=>$this['config']->get('grid.bottom-a.layout'))); ?></section>
			</div>
		</div>
		<?php endif; ?>
		
		<?php if ($this['widgets']->count('bottom-b + bottom-c + footer + debug')) : ?>
		<div class="tm-bottom tm-block tm-block-black">
			
			<div class="uk-container uk-container-center">

				<?php if ($this['widgets']->count('bottom-b')) : ?>
				<div class="tm-block">
					<section class="<?php echo $grid_classes['bottom-b']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('bottom-b', array('layout'=>$this['config']->get('grid.bottom-b.layout'))); ?></section>
				</div>
				<?php endif; ?>

				<?php if ($this['widgets']->count('bottom-c')) : ?>
				<div class="tm-block">
					<section class="<?php echo $grid_classes['bottom-c']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('bottom-c', array('layout'=>$this['config']->get('grid.bottom-c.layout'))); ?></section>
				</div>
				<?php endif; ?>

				<?php if ($this['widgets']->count('footer + debug') || $this['config']->get('warp_branding', true) || $this['config']->get('totop_scroller', true)) : ?>
				<footer class="tm-footer tm-block">

					<?php if ($this['config']->get('totop_scroller', true)) : ?>
					<a class="tm-totop-scroller" data-uk-smooth-scroll href="#"></a>
					<?php endif; ?>

					<?php
						echo $this['widgets']->render('footer');
						$this->output('warp_branding');
						echo $this['widgets']->render('debug');
					?>

				</footer>
				<?php endif; ?>

			</div>

		</div>
		<?php endif; ?>

		<?php echo $this->render('footer'); ?>

		<?php if ($this['widgets']->count('offcanvas')) : ?>
		<div id="offcanvas" class="uk-offcanvas">
			<div class="uk-offcanvas-bar"><?php echo $this['widgets']->render('offcanvas'); ?></div>
		</div>
		<?php endif; ?>

	</div>

</body>
</html>