import React, { Component } from 'react';


class SearchContainer extends Component {
	
	render(){
		return(
			<div id='search-container'>
				<input 
					id="search-input" 
					type="text" 
					placeholder="What exactly do you fancy?"/>
				<div id='search-results'>
					<ol id='search-results-list'>
						{this.props.locations.map(location => (
							<li key={location.id}
								onClick={(event) => this.props.handleChildClickEvent(event, location.location)}
						
							>
							{location.name}<br/>
							<span className='search-items-address'>
								{location.location.formattedAddress}
							</span>
							</li>
		)
		)}
	
					</ol>
				</div>
			</div>
		)
	}
}




export default SearchContainer;