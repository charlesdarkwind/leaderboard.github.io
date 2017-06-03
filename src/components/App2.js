import React, { Component } from 'react';
import $ from "jquery";

let url = "";
const urlAll = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const urlDays = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';


class App extends Component {
	constructor() {
		super();
		this.selectFilter = this.selectFilter.bind(this);
	}

	selectFilter(val) {
		$(".bodyWrap").empty();
		val ? this.dataDays(urlDays) : this.dataDays(urlAll);
		this.forceUpdate();		
	}

	dataDays(url) {
	$.getJSON(url, function(data) {
		//return data;
		data.forEach(function(val, index) {
			let rank = parseInt(index)+1;
			let classN = (rank % 2) ? 'pair': 'odd';
			$(".content").append(
				"<tr>",
					"<td class="+classN+">"+rank+"</td>",
					"<td class="+classN+"><img src='"+val.img+"' alt='"+val.username+"'></td>",
					"<td class="+classN+">"+val.username+"</td>",
					"<td class="+classN+">"+val.recent+"</td>",
					"<td class="+classN+">"+val.alltime+"</td>",
				"</tr>"
			)	
		});
	});
}
 	render() {
		return (
	  		<div className="App">	  								
				<table className="content">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Image</th>
							<th>UserName</th>
							<th className="days" onClick={() => {this.selectFilter(true)}}>Points In Last 30 Days</th>
							<th className="all" onClick={() => {this.selectFilter(false)}}>Points All Time</th>
						</tr>	
					</thead>	
					<tbody className="bodyWrap">		
						{this.dataDays(urlDays)}
					</tbody>
				</table>
	  		</div>
		);
  	}
}

export default App;
