const getDisplayValue = ( v, n ) => {
	if ( typeof v === 'boolean' ) {
		return v ? 'true' : 'false';
	} else if ( Array.isArray( v ) ) {
		return '[ ' + v.map( ( e ) => getDisplayValue( e ) ).join( ', ' ) + ' ]';
	} else if ( typeof v === 'string' ) {
		return n === 'default' ? '"' + v + '"' : v;
	} else if ( typeof v === 'number' ) {
		return v;
	} else if ( ! v || v === null ) {
		return 'null';
	}
	return 'Object';
};

const AttributeProperty = ( { name, value } ) => {
	const displayValue = getDisplayValue( value, name );
	return (
		<li className="attribute-property">
			<span className="attribute-property-name">{ name }: </span>
			<span className="attribute-property-value">{ displayValue }</span>
		</li>
	);
};

export const Attribute = ( { name, data } ) => {
	return (
		<li className="attribute">
			<h5 className="attribute-name">{ name }:</h5>
			<ul>
				{ Object.keys( data ).map( ( e, i ) => {
					return (
						<AttributeProperty key={ i } name={ e } value={ data[ e ] } />
					);
				} ) }
			</ul>
		</li>
	);
};
