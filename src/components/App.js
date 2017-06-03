import React, { Component } from 'react';
import $ from "jquery";

/*
"username":"sjames1958gm",
"img":"https://avatars.githubusercontent.com/u/4639625?v=3",
"alltime":6605,
"recent":608,
"lastUpdate":"2017-04-24T21:01:36.842Z"
*/
function dataAll() {
	$.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function(data) {

		

	});
}



class App extends Component {

	dataDays() {
	$.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function(data) {
		//return data;
		data.forEach(function(val, index) {
			console.log(val);
			var rank = parseInt(index)+1;
			let classN = (rank % 2) ? 'pair': 'odd';
			return (
				<tr className={classN}>
					<td>{rank}</td>
					<td><img src={val.img} alt={val.username} /></td>
					<td>{val.username}</td>
					<td>{val.recent}</td>
					<td>{val.alltime}</td>
				</tr>
			)	
		});
	});
}

 	 render() {
		return (
	  		<div className="App">	  		
						
				<table className="content">
					<tbody>
						<tr>
							<th>Rank</th>
							<th>Image</th>
							<th>UserName</th>
							<th>Points In Last 30 Days</th>
							<th>Points All Time</th>
						</tr>

						{this.dataDays()}	
					</tbody>
				</table>
	  		</div>
		);
  	}
}

export default App;
