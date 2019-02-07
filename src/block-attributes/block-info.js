import { Attribute } from './attribute';
const { Dashicon } = wp.components;

export const BlockInfo = ( { title, name, attributes, icon } ) => {
	return (
		<div className="block" id={ 'block-' + name.replace( '/', '' ) }>
			<Dashicon icon={ icon.src } />
			<div className="block-headline">
				<h3 className="block-title">{ title }</h3>
				<p className="block-name">{ name }</p>
			</div>
			<h4>Attributes</h4>
			<ul className="attributes">
				{ attributes && Object.keys( attributes ).map( ( e, i ) => <Attribute key={ i } name={ e } data={ attributes[ e ] } /> ) }
			</ul>
		</div>
	);
};
