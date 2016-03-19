var React = require('react');
var Actions = require('../actions/Actions.js');

var Agent = React.createClass({
	
	select(event){
		if(!event.isDefaultPrevented()){
			Actions.selectAgent(this.props.agent.id);
		}
	},
	
	remove(event){
		event.preventDefault();
	},
	
	render: function() {
		const agent=this.props.agent;
		
		var changeStatus;
		var ligneActive="";
		var selectable="";
		
		if(!agent.status){
			ligneActive="active stopped";
		}else if(this.props.selected){
			ligneActive+=" line-selected";
		}else{
			selectable=this.select;
		}

		return (
				<tr className={ligneActive} onClick={selectable}> 
					<th scope="row">{agent.id}</th> 
					<td>{agent.hostname}</td> 
					<td>{agent.port}</td> 
					<td>
						<a href="#" onClick={this.remove} className="btn-remove pull-right"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
					</td> 
				</tr>
			 );
    }
});

module.exports = Agent;