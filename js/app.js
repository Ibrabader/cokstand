'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cities = []
let storenames = ['Seattle','Tokyo','Dubai','Paris','Lima'];

function Store (mincust,maxcust,avgsales){


this.mincust=mincust;
this.maxcust=maxcust;
this.avgsales=avgsales;
storenames.push(this);


let parent = document.getElementById('Parent');
console.log(parent);

// create table
let tableEl = document.createElement('table');
// append
parent.appendChild(tableEl);

// creating the tr in the table
let headingRow = document.createElement('tr');
tableEl.appendChild(headingRow);
for (let i = 0; i < hours.length; i++){
let time = document.createElement('th');
headingRow.appendChild(time);
time.textContent = hours[i];}


let customers = document.createElement('th');
headingRow.appendChild(customers);
customers.textContent = ' Total';

for (let i = 0; i < cities.length; i++) {



}
}


Store.prototype.randomnum = function ( ) {
    return Math.floor(Math.random() * (this.maxcust - this.mincust + 1) + this.mincust);
}
Store.prototype.avgeragecustomer = function() {
    return this.randomnum()*this.avgsales;
}


let Seattle = new Store (23,65,6.3)
Seattle.randomnum();
Seattle.avgeragecustomer();
console.log(Seattle);
console.log(Seattle.randomnum());
console.log(Seattle.avgeragecustomer());
console.log(storenames);




    

    // let ageData = document.createElement('td');
    // studentRow.appendChild(ageData);
    // ageData.textContent = storedCreatedObj[i].age;

    // let weightData = document.createElement('td');
    // studentRow.appendChild(weightData);
    // weightData.textContent = storedCreatedObj[i].weight;

    
    
    
































// let Seattle = {

// locationname: 'Seattle',
// mincust : 23,
// maxcust:65,
// avgsales:6.3,
// customerperhour:[],
// CookiePerHour:[],
// calcCustomerEachHour : function(){

//     for (let i = 0; i < hours.length; i++) {
// randomnum(this.mincust,this.maxcust)
//         this.customerperhour.push(randomnum(this.mincust,this.maxcust));
//     }
// },
// Calccookiperhour: function(){

//     for (let i = 0; i < hours.length; i++) {
//       this.CookiePerHour.push(math.floor(this.avgsales*this.customerperhour))
//         }}
 
        
// }
 

// for (let i = 0; i < hours.length; i++) {

//     let parent = document.getElementById('parent');
// let unOrderedList = document.createElement('ul');
// parent.appendChild(unOrderedList);
//     let listItem = document.createElement('li');
//     unOrderedList.appendChild(listItem);
//     listItem.textContent = hours[i]
// }
