import { BlockIndex } from './block-index';
import { BlockInfo } from './block-info';

export const BlockGlossary = ( { blocks } ) => {
	return (
		<div>
			<h2 className="blocks-heading">All Blocks</h2>
			<BlockIndex blocks={ blocks } />
			{ blocks.map( ( e, i ) => <BlockInfo key={ i } { ...e } /> ) }
		</div>
	);
};
