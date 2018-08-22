import React, { Component } from 'react';
//imports ‘withGoogleMap’ (a Higher Order Component)
//‘GoogleMap’ (which is going to take in map props)
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
//import MarkersContainer from './MarkersContainer'


const MapContainer = withScriptjs(withGoogleMap((props) =>{

let defaultCenter = props.defaultCenter;
let defaultZoom = props.defaultZoom;	
	
// const markers should go here 
	
	return (
		<GoogleMap
			defaultZoom={ defaultZoom }
       		defaultCenter = { defaultCenter }
		>
		</GoogleMap>
		
	)
	
})
)

/* class MapContainer extends Component  {


   render() {  
	   
	   
//creating a constant that uses both 'withGoogleMap' and 'GoogleMap'
   const Map = withGoogleMap(props => (
	   
	   <GoogleMap
        defaultCenter = { this.props.defaultCenter }
        defaultZoom = { this.props.defaultZoom }
	    locations= {this.props.locations}
      >   
	   <MarkersContainer 
	    
	    locations= {this.props.locations}
	   
	   /> 
	   
	   </GoogleMap>
	  
   ));
// return the const we just created in a div that takes in props of ‘containerElement’ and ‘mapElement’   
   return(	
      <div>
        <Map
          containerElement={ <div style={{ height: `500px`, width: `500px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
}; */

export default MapContainer;