<?php
/**
 * Plugin Name: GutenBlock Attributes Glossary
 * Plugin URI: https://github.ncsu.edu/oitdesign/block-attributes
 * Description: Adds a Block that displays a glossary of all Blocks and their Attributes
 * Author: Miles Elliott, OIT Design
 * Author URI: design.oit.ncsu.edu
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
