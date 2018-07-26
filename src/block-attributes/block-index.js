export const BlockIndex = ( { blocks } ) => {
	return (
		<div className="block-index">
			<h2>Index</h2>
			<ul>
				{ blocks.map( ( e, i ) => <li className="attribute-item" key={ i }><a href={ '#block-' + e.name.replace( '/', '' ) }>{ e.title }</a></li> ) }
			</ul>
		</div>
	);
};
