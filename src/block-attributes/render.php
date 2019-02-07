<?php

class NCSU_Blocks_Block_Attributes {
	public function __construct() {

	}

	public function get_block_slug($name) {
		return str_replace('/', '', $name);
	}

	public function render_svg_children($children) {
		$return = '';
		if (!is_array($children[0])) {
			$return .= sprintf('<%1$s d="%2$s" %3$s>%4$s</%1$s>',
			$children['props']['d'] ? 'path' : 'g',
			$children['props']['d'],
			$children['props']['fill'] ? 'fill="' . $child['props']['fill'] . '"' : '',
			$children['props']['children'] ?  $this->render_svg_children($child['props']['children']) : '');
			return $return;
		}
		foreach($children as $child) {
			$return .= sprintf('<%1$s d="%2$s" %3$s>%4$s</%1$s>',
			$child['props']['d'] ? 'path' : 'g',
			$child['props']['d'],
			$child['props']['fill'] ? 'fill="' . $child['props']['fill'] . '"' : '',
			$child['props']['children'] ?  $this->render_svg_children($child['props']['children']) : ''
		);
			/* if ($child['props']) {
				foreach ($child['props'] as $sub_child) {
					//var_dump($title, $sub_child);
					$return .= '<path d="' . $sub_child['d'] .'" />';
				}
			} */
		}
		return $return;
	}

	public function create_icon($icon, $title) {
		if ($title == 'Icon + Link') {
			echo '<pre>';
			var_dump($icon);
			echo '</pre>';
		}
		if (!$icon) return '';
		if (is_string($icon['src'])) return '<span class="block-icon dashicons dashicons-'. $icon['src'] .'"></span>';



		return sprintf('
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="%s" enablebackground="new 17 -17 50 50" xmlspace="preserve" class="mw100 w-100 h-100">
		%s
    </svg>
		',
		$icon['src']['props']['viewBox'],
		$this->render_svg_children($icon['src']['props']['children'])
	);

	}

	public function block_index($blocks) {
		$blocks_list = '';
		foreach($blocks as $block) {
			$blocks_list .= sprintf('
				<li class="attribute-item">
					<a href="#block-%s">
						%s
					</a>
				</li>',
				$this->get_block_slug($block['name']),
				$block['title']
			);
		}
		return sprintf('<div class="block-index">
			<h2>Index</h2>
			<ul>
				%s
			</ul>
		</div>', $blocks_list);
	}

	public function block_info($block) {
		$attributes = $this->render_block_attributes($block['attributes']);
		return sprintf('<div class="block" id="block-%s">
		%s
			<div class="block-headline">
				<h3 class="block-title">%s - <span class="block-name">%s</span></h3>
				<p class="block-category">%s</p>
			</div>
			<h4>Attributes</h4>
			<ul class="attributes">
				%s
			</ul>
		</div>',
		$this->get_block_slug($block['name']),
		$this->create_icon($block['icon'], $block['title']),
		$block['title'],
		$block['name'],
		$block['category'],
		$attributes
	);
	}

	public function render_block_attributes($attributes) {
		if (!$attributes) {
			return '';
		}
		$rendered = '';
		foreach ($attributes as $name => $attribute) {
			$rendered .= $this->block_attribute($name, $attribute);
		}
		return $rendered;
	}



	public function block_attribute($name, $attribute) {
		return sprintf('<li class="attribute">
		<h5 class="attribute-name">%s:</h5>
		<ul>
			%s
		</ul>
	</li>',
		$name,
		$this->render_block_attribute_properties($attribute)
		);
	}

	public function render_block_attribute_properties($properties) {
		if (!$properties) {
			return '';
		}
		$rendered = '';
		foreach ($properties as $name => $value) {
			$rendered .= $this->block_attribute_property($value, $name);
		}
		return $rendered;
	}

	public function block_attribute_property($value, $name) {
		return sprintf('<li class="attribute-property">
		<span class="attribute-property-name">%s:</span>
		<span class="attribute-property-value">%s</span>
	</li>',
	$name,
	$this->get_display_value($value, $name));
	}

	public function get_display_value( $value, $name = '') {
		if ( is_bool($value) ) {
			return $value ? 'true' : 'false';
		} else if ( is_array($value) ) {
			$vals = array();
			foreach ($value as $val) {
				$vals[] = $this->get_display_value($val);
			}
			return '[ ' . join(', ', $vals) . ' ]';
		} else if ( is_string($value) ) {
			return $name === 'default' ? '"' . $value . '"' : $value;
		} else if ( is_numeric($value) ) {
			return $value;
		} else if ( ! $value || $value === null ) {
			return 'null';
		}
		return 'Object';
	}

	public function block_glossary($blocks) {
				$all_block_info = '';
				foreach($blocks as $block) {
					$all_block_info .= $this->block_info($block);
				}
				return sprintf('<div>
					<h2 class="blocks-heading">All Blocks</h2>
					%s
					%s
				</div>',
				$this->block_index($blocks),
				$all_block_info
			);

	}

	public function render($attributes) {
		return $this->block_glossary($attributes['blocks']);
	}
}

$ncsu_blocks_block_attributes = new NCSU_Blocks_Block_Attributes();

register_block_type( 'ncsu-blocks/block-attributes', array(
    'render_callback' => array($ncsu_blocks_block_attributes, 'render'),
) );
