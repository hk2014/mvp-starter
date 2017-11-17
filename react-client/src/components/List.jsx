import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4>Doctors in Your Area</h4>
    There are { props.items.length } doctors.
    { props.items.map(item => 
    	<ListItem 
    	item={item.name}
    	phone={item.phone}
    	image={item.image}
    	bio={item.bio}/>)}
    	
    
  </div>
)

export default List;

