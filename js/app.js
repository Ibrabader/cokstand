'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let StoresArray = [];

function random(min,max){

  return Math.floor(Math.random() * (max - min +1 ) +min);
}

function Store ( LocationName,MinCustomers,MaxCustomers,AvgCookieSale){
  
 
  this.LocationName=LocationName;
  this.MinCustomers=MinCustomers;
this.MaxCustomers=MaxCustomers;
this.AvgCookieSale=AvgCookieSale;



this.CustomerPerHour =[];
this.CookiesPerHours =[];
this.TotalCookiesPerDay=0;
StoresArray.push(this);

}

// Store.prototype.CalculateCustomerPerHour = function() {
//   for ( let i = 0; i < hours.length; i++) {
//   this.CustomerPerHour.push(random(this.MinCustomers,this.MaxCustomers));
//   console.log(typeof this.CustomerPerHour);
// }}

Store.prototype.CaclCookiesPerHour = function ( ) {
  this.total=0;
  for (let i = 0; i < hours.length; i++) {
 
     this.CookiesPerHours.push(Math.ceil(this.AvgCookieSale * random(this.MinCustomers,this.MaxCustomers)));
// this.total+= this.CookiesPerHours[i];
this.TotalCookiesPerDay+=this.CookiesPerHours[i];
  }

}


let Seattle = new Store ('Seattle',25,65,6.3);
let Tokyo = new Store ('Tokyo',3,24,1.2);
let Dubai = new Store ('Dubai',11,38,3.7);
let Paris = new Store ('Paris',20,38,2.3);
let Lima = new Store ('Lima',2,16,4.6);


let Parent = document.getElementById('cookie-table');
let TableElement1 = document.createElement('table');
Parent.appendChild(TableElement1);


function HeaderRender (){

let HeaderRow= document.createElement('tr');
TableElement1.appendChild(HeaderRow);
let FirstTh = document.createElement('th');
HeaderRow.appendChild(FirstTh)
FirstTh.textContent = 'Location';


for (let i = 0; i < hours.length; i++) {
  let HoursTh = document.createElement('th')
  HeaderRow.appendChild(HoursTh)
  HoursTh.textContent=hours[i];
}

  let LastTh = document.createElement('th');
  HeaderRow.appendChild(LastTh);
  LastTh.textContent = ' Daily Total';
  
  
}



Store.prototype.render = function (){

  let DataRow = document.createElement('tr');
  TableElement1.appendChild(DataRow);


  let NameData= document.createElement('td');
  DataRow.appendChild(NameData);
  NameData.textContent = this.LocationName;


for (let i = 0; i < hours.length; i++) {
    let TdElement = document.createElement('td');
    DataRow.appendChild(TdElement);  
    TdElement.textContent=this.CookiesPerHours[i];
}


  let TotalData = document.createElement('td');
  DataRow.appendChild(TotalData);
  TotalData.textContent = this.TotalCookiesPerDay;
 
  


}
HeaderRender();
for (let i = 0; i < StoresArray.length; i++) {

  StoresArray[i].CaclCookiesPerHour();
  StoresArray[i].render();
}

function footerRender ( ){
let FooterRow = document.createElement('tr');
TableElement1.appendChild(FooterRow);
let footerDataTh = document.createElement('th');
FooterRow.appendChild(footerDataTh);
footerDataTh.textContent = 'Totals';

let TotalOfTotal=0;
for (let j = 0; j < hours.length; j++) {
  let TotalPerHour =0;

  for (let i = 0; i < StoresArray.length; i++) {
    TotalPerHour +=StoresArray[i].CookiesPerHours[j];
    TotalOfTotal+=StoresArray[i].CookiesPerHours[j];
  }
let TotalOfTotalData = document.createElement('td')
  FooterRow.appendChild(TotalOfTotalData)
  TotalOfTotalData.textContent = TotalPerHour;
}

let LastTd = document.createElement('td');
FooterRow.appendChild(LastTd);
LastTd.textContent = TotalOfTotal;
}
footerRender();