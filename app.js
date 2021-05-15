"use strict"
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ]

let allShops = [];

//to create the constructor function for the stores
function Shops(city, minCustPerHour, maxCustPerHour, avgCookieSold) {
        this.city = city;
        this.minCustPerHour = minCustPerHour;
        this.maxCustPerHour = maxCustPerHour;
        this.avgCookieSold = avgCookieSold;
        this.totalDailyCookies = 0;
        this.cookiesPerHour = [];
        this.custPerHour = [];
        allShops.push(this);
};

//to calc random number
let random = function(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
};
    
//to calc cust per hour using random function
Shops.prototype.calcCustPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
        this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    } 
}

//calc cookies per hour
Shops.prototype.calcCookiesPerHour = function(){
        this.calcCustPerHour();
      for (let i = 0; i < hours.length; i++) {
          this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSold));
             }
   }

//calc daily total
   Shops.prototype.calcTotalDailyCookies = function() {
       let totalCookies = 0;
       for (let i = 0; i < hours.length; i++){
       totalCookies += this.cookiesPerHour[i];
       }
       return totalCookies;
   }

//render function and build table
Shops.prototype.render = function() {
    this.calcCookiesPerHour();
    //create table cells
        const table = document.getElementById('table')
        const tr = document.createElement('tr')
        table.appendChild(tr);
    
        const td = document.createElement('td')
        td.textContent = this.city
        tr.appendChild(td);

     
        //to enter function into data cells
        for (var i = 0; i < hours.length; i++) {
            const td = document.createElement('td');
            td.textContent = this.cookiesPerHour[i];
            tr.appendChild(td);
        }
    //show row totals
    const tdRowTotal = document.createElement('td');
    tdRowTotal.textContent = this.calcTotalDailyCookies();
    tr.appendChild(tdRowTotal);
    };


    function header() {     
//Created header label: hours
        const trHead = document.createElement('tr');
        const thHead = document.createElement('th');
        thHead.textContent = "Hours";
        trHead.appendChild(thHead);

    //     //create "daily total" at end of header
    //   const tdHead2 = document.createElement('td')
    //   tdHead2.textContent = "daily total";
    //   trHead.appendChild(tdHead2);
    //   table.appendChild(trHead);
        
//get hours to show as headers
        for(let i = 0; i < hours.length; i++){
            const thHeader = document.createElement('th');
            thHeader.textContent = hours[i];
            trHead.appendChild(thHeader);
            table.appendChild(trHead);
        }
      }

      function totalAtFooter() {
        let shopCookiePerHour = [];
        for (let i = 0; i < hours.length; i++) {
            let totalCookiePerHour = 0;
            for (let j = 0; j < allShops.length; j++) {
                totalCookiePerHour += allShops[j].cookiesPerHr[i];
            }
            shopCookiePerHour.push(totalCookiePerHour);
        }

    const tblFooter = document.createElement('tfoot');
    table.appendChild(tblFooter);
    const trFooter = document.createElement('tr');
    trFooter.id = 'total-row';
    tblFooter.appendChild(trFooter);
    let tdFooter = document.createElement('td');
    tdFooter.textContent = 'Total';
    trFooter.appendChild(tdFooter);
    //total of hours
        for (let i = 0; i < hours.length; i++) {
        const td = document.createElement('td');
        td.textContent = shopCookiePerHour[i];
        trFooter.appendChild(td);
    }
     //total of all totals
    let totalAllShops = 0;
    for (let i = 0; i < hours.length; i++) {
        totalAllShops = shopCookiePerHour[i];
    }
    const td = document.createElement('td');
    td.textContent = totalAllShops;
    trFooter.appendChild(td);
    tblFooter.appendChild(trFooter);
 
    };

    totalAtFooter();




//       function footer(){
//           const tblFooter = document.createElement('tfoot');
//           table.appendChild(tblFooter);
//           const trFooter = document.createElement('tr');
//           trFooter.textContent= "Totals";
//           tblFooter.appendChild(trFooter);
          
//           for(let i = 0; i < hours.length; i++){
//               const th = document.createElement('th');
//               th.textContent = 'ttl';
//               trFooter.appendChild(th);
//           }
// };

// footer();
header();

const seattle = new Shops('Seattle', 23, 65, 6.3);
const tokyo = new Shops('Tokyo', 3, 24, 1.2);
const dubai = new Shops('Dubai', 11, 38, 3.7);
const paris = new Shops('Paris', 20, 38, 2.3);
const lima = new Shops('Lima', 2, 16, 4.6);

console.log(seattle);





// const allShops = [seattle, tokyo, dubai, paris, lima];
(function renderAllShops () {
for (let i = 0; i <allShops.length; i++) {
allShops[i].render();
}
})()

