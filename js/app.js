
'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cities = []
let storenames = ['Seattle','Tokyo','Dubai','Paris','Lima','Total'];
let allCustomerArray = [];
function Store (mincust,maxcust,avgsales){


this.mincust=mincust;
this.maxcust=maxcust;
this.avgsales=avgsales;
// storenames.push(this);
}
/* End of the constructor*/
/* function for the headding row*/
function SalsHours (){

  let parent = document.getElementById('cookie-table');
// create table
let tableEl = document.createElement('table');
// append
parent.appendChild(tableEl);
// creating the tr in the table
let headingRow = document.createElement('th');
tableEl.appendChild(headingRow);
for (let i = 0; i < hours.length; i++){
  let time = document.createElement('th');
  headingRow.appendChild(time);
  
  time.textContent = hours[i];
  
  }

for (let i = 0; i < storenames.length; i++) {
  let TableRows = document.createElement('tr');
tableEl.appendChild(TableRows);
let TableTd = document.createElement('td')  
TableRows.appendChild(TableTd)
TableTd.textContent = storenames[i]

}
}
SalsHours();

function TableElements (){
}
TableElements();


for (let i = 0; i < cities.length; i++) {

console.log(cities[i]);}



Store.prototype.randomnum = function ( ) {
    return Math.floor(Math.random() * (this.maxcust - this.mincust + 1) + this.mincust);
}
Store.prototype.avgeragecustomer = function() {
    return allCustomerArray= this.randomnum()*this.avgsales;
}


let Seattle = new Store (23,65,6.3)
// let Tokyo = new Store (3, 24, 1.2, 'Tokyo');
// let Dubai = new Store (11, 38, 3.7, 'Dubai');
// let Paris = new Store (20, 38, 2.3, 'Paris');
// let Lima = new Store (2, 16, 4.6, 'Lima');
Seattle.randomnum();
Seattle.avgeragecustomer();


console.log(Seattle);
console.log(Seattle.randomnum());
console.log(Seattle.avgeragecustomer());
console.log(storenames);
