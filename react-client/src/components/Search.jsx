import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onChange (e) {
		this.setState({
			term: e.target.value
		});
	}
  
	search() {
		this.props.onSearch(this.state.term);
	}
	render() {
	  return (<div>
		<h4>Doctors Search</h4>

        Enter Your City: <input value={this.state.term} onChange={this.onChange.bind(this)}/>       
        Specialty: <input value={this.state.term1} onChange={this.onChange.bind(this)}/>       
        Name: <input value={this.state.term2} onChange={this.onChange.bind(this)}/>       
        <button onClick={this.search.bind(this)}> Search </button>
      </div>) 
  	}
}
export default Search;