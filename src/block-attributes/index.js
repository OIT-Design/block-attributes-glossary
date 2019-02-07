/**
 * BLOCK: block-attributes
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { BlockGlossary } from './block-glossary';

const { __ } = wp.i18n;
const { registerBlockType, getBlockTypes } = wp.blocks;

let update = false;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'ncsu-blocks/block-attributes', {
	title: __( 'Block Attributes' ), // Block title.
	icon: 'list-view',
	category: 'common',
	keywords: [
		__( 'info' ),
		__( 'help' ),
		__( 'attributes' ),

	],

	attributes: {
		blocks: {
			type: 'array',
			default: [],
		},
	},

	edit: function( props ) {
		const blocks = getBlockTypes();
		if ( ! update ) {
			update = true;
			const blockInfo = blocks.map( ( { title, name, attributes, icon, category, keywords } ) => ( {
				title, name, attributes, icon, category, keywords,
			} ) );
			props.setAttributes( { blocks: blockInfo } );
		}
		console.log( props.attributes.blocks );
		return (
			<div className={ props.className }>
				<BlockGlossary blocks={ blocks } />
			</div>
		);
	},

	save: function( props ) {
		return null;
	},
} );
