const { GoogleSpreadsheet } = require('google-spreadsheet');
const express = require('express');

const app = express();
// const event = new GoogleSpreadsheet('1TxBGyhgh3fJbGqjWGU4tb4h15Kp-0kJvANjP44lcOOY');
// await event.useApiKey('AIzaSyBbmDg-X2TmXmzrxRsiKt9JusH6p2OECMQ');
// await event.loadInfo();


//set to run every 3 hours
const orderEvents = async (events_array, ascending=true) => {
	const current_date = new Date();
	const day = current_date.getDate();
	const month = current_date.getMonth()+1;
	const year = current_Date.getFullYear();

	let eligible_events = [];

	for(let event of events_array) {
		if (event.year >= year) {
			eligible_events.push(event);
		}
	}

	for( let event of eligible_events) {

	}

}

//set to run on every single hit to the website
const formatEvents = async (events_array) => {
	let events_html = [];

	for(let event of events_array) {
		
	}

	return events_html
}
// const getEvents = async () => {
// 	//get the events sheet
// 	const sheet = await event.sheetsByIndex[0];
// 	let row_object_array = [];
// 	for (let row of sheet) {
// 		if (row.title && row.building && row.room && row.start_time && row.end_time && row.date) {
// 			row_object_array.push(row);
// 			console.log(row);
// 		}
// 	}
// 	return row_object_array;
// }



// app.get('/events/all', (req, res) => {

// });

// app.get('/events/sidebar', (req, res) => {

// });



const main = async () => {
	const event = new GoogleSpreadsheet('1TxBGyhgh3fJbGqjWGU4tb4h15Kp-0kJvANjP44lcOOY');
	await event.useApiKey('AIzaSyBbmDg-X2TmXmzrxRsiKt9JusH6p2OECMQ');
	await event.loadInfo();

	

	console.log(event.title);

	const sheet = event.sheetsByIndex[0];
	console.log("Sheet Title: " + sheet.title);
	console.log("Number of Rows: " + sheet.rowCount);


	const rows = await sheet.getRows();
	let row_values = [];
	for(let row of rows) {
		row_values.push({
			event_title: row.event_title,
			building_code: row.building_code, 
			room_number: row.room_number,
			start_time: row.start_time,
			end_time: row.end_time,
			month: row.month,
			day: row.day,
			year: row.year,
			comments: row.comments,
			example: row.ex
		});	
	}

	console.log(row_values);
}

main();



// app.listen();