  
"use strict"
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ]

let allShops = [];
let tbl;

//to create the constructor function to hold the variable for the store
function Shops(city, minCustPerHour, maxCustPerHour, avgCookiesSold) {
  this.city = city;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSold = avgCookiesSold;
  // this.id = city.replace(' ', '').toLowerCase();
  this.hourlyCookies = [];
  this.dailyCookies = 0;
  allShops.push(this);

  this.generateHourly();
}

Shops.prototype.generateRandom = function (min, max) {
  return Math.random() * (max - min) + min;
};

Shops.prototype.generateHourly = function () {
  for (let i = 0; i < hours.length; i++) {
    const cookie = Math.floor(this.avgCookiesSold * this.generateRandom(this.minCustPerHour, this.maxCustPerHour));
    this.hourlyCookies.push(cookie);
    this.dailyCookies += cookie;
  }
};

//creation of table
function renderTable() {
  tbl = document.getElementById('shop-table');
//creating the framework
  const tHead = document.createElement('thead');
  const tBody = document.createElement('tbody');
  tBody.id = 't-body';
  const tFoot = document.createElement('tfoot');
  tFoot.id = 't-foot';
//space in header above city and next to hours
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);
//to render the array of hours as header
  for (let i = 0; i < hours.length; i++) {
    const thHours = document.createElement('th');
    thHours.textContent = hours[i];
    tr.appendChild(thHours);
  }
//type total at end of header
  const thTotal = document.createElement('th');
  thTotal.textContent = 'Totals';
  tr.appendChild(thTotal);

  tHead.appendChild(tr);

  tbl.appendChild(tHead);
  tbl.appendChild(tBody);
  tbl.appendChild(tFoot);

  document.getElementById('store-data').appendChild(tbl);
};

//applying data into table
function renderStore(store) {
  //give the function reference for where to go
  const tableBody = document.getElementById('t-body');

  const trCity = document.createElement('tr');
  const thCity = document.createElement('th');
  thCity.textContent = store.city;
  trCity.id = store.id;
  trCity.appendChild(thCity);

  for (let j = 0; j < hours.length; j++) {
    const td = document.createElement('td');
    td.textContent = store.hourlyCookies[j];
    trCity.appendChild(td);
  }

  const tdDaily = document.createElement('td');
  tdDaily.textContent = store.dailyCookies;
  trCity.appendChild(tdDaily);

  tableBody.appendChild(trCity);
};


function renderAllStores() {
  const tBody = document.getElementById('t-body');
  tBody.innerHTML = '';

  for (let i = 0; i < allShops.length; i++) {
    renderStore(allShops[i]);
  }

  renderTotals();
}

function renderNew(city, minCustPerHour, maxCustPerHour, avgCookiesSold) {
  new Shops(city, minCustPerHour, maxCustPerHour, avgCookiesSold);
  renderAllStores();
};

// function renderUpdate(shop, min, max, avg) {
//   const trEl = document.getElementById(shop.city.replace(' ', '').toLowerCase());

//   shop.minCustPerHour = min;
//   shop.maxCustPerHour = max;
//   shop.avgCookiesSold = avg;
//   shop.hourlyCookies = [];
//   shop.dailyCookies = 0;
//   shop.generateHourly();

//   for (let i = 0; i < shop.hourlyCookies.length; i++) {
//     trEl.childNodes[i + 1].textContent = shop.hourlyCookies[i];
//   }
//   trEl.childNodes[trEl.childNodes.length - 1].textContent = shop.dailyCookies;
// }

function renderTotals() {

  const tFoot = document.getElementById('t-foot');
  tFoot.innerHTML = '';

  const tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);

  let total = 0;

  for (let hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    let hourlyTotal = 0;
    for (let shopIndex = 0; shopIndex < allShops.length; shopIndex++) {
      hourlyTotal += allShops[shopIndex].hourlyCookies[hourIndex];
    }
    th = document.createElement('th');
    th.textContent = hourlyTotal;
    tr.appendChild(th);

    total += hourlyTotal;
  }

  th = document.createElement('th');
  th.textContent = total;
  tr.appendChild(th);

  tFoot.appendChild(tr);
}

//to render new information based on users entry
// document.getElementById('newShop').addEventListener('submit',handleNewShop);
 function handleNewShop(event) {
  event.preventDefault();
  // let exists = false;
  const city = event.target.city.value;
  const minCustPerHour = parseInt(event.target.minCustPerHour.value);
  const maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
  const avgCookiesSold = parseInt(event.target.avgCookiesSold.value);

  if(!event.target.city.value || !event.target.minCustPerHour.value || !event.target.maxCustPerHour.value || !event.target.avgCookiesSold.value){
    return alert('Fields cannot be empty!');
  }

  function submitShop(){
  for (let i = 0; i < allShops.length; i++) {
    if (city === storeNames[i]){
      minCustPerHour[i] = minCustSubmission;
      maxCustPerHour[i] = maxCustSubmission;
      avgCookiesSold[i] = avgSalesSubmission;
      return;
    // if (allShops[i].id === store.replace(' ', '').toLowerCase()) {
    //   exists = true;
    //   break;
    }
  }
};

  // if (exists === true) {
  //   renderUpdate(allShops[i], min, max, avg);
  // } else {
    renderNew(city, minCustPerHour, maxCustPerHour, avgCookiesSold);
  // }

  event.target.store.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
};

function setup() {
  renderTable();
  new Shops('Seattle', 23, 65, 6.3, 'seattle');
  new Shops('Tokyo', 3, 24, 1.2, 'tokyo');
  new Shops('Dubai', 11, 38, 3.7, 'dubai');
  new Shops('Paris', 20, 38, 2.3, 'paris');
  new Shops('Lima', 2, 16, 4.6, 'lima');
  renderAllStores();
};
 
setup();