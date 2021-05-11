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
}
    
//to calc cust per hour using random function
Shops.prototype.calcCustPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
        this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    } 
};

//calc cookies per hour
Shops.prototype.calcCookiesPerHour = function(){
        this.calcCustPerHour();
      for (let i = 0; i < hours.length; i++) {
          this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSold));
             }
   };

//calc daily total
   Shops.prototype.calcTotalDailyCookies = function() {
       let totalCookies = 0
       for (let i = 0; i < hours.length; i++){
           totalCookies = this.cookiesPerHour[i];
       }
       return totalCookies;
   };

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
    //show totals
    const td2 = document.createElement('td');
    td2.textContent = 'total here';
    tr.appendChild(td2);
    };


    function header() {
        const trHead = document.createElement('tr');
      
        for(let i = 0; i < hours.length; i++){
            const th = document.createElement('th');
            th.textContent = hours[i];
            trHead.append(th);
         
        }
        let table = document.getElementById('table');
        table.append(trHead);
      };

      function footer(){
          const trFooter = document.createElement('tr');
          for(let i = 0; i < hours.length; i++){
              const th = document.createElement('th');
              th.textContent = totalDailyCookies();
              trFooter.append(th);
          }
              let table = document.getElementById('table');
              table.append(trFooter);
          
};

     
    


footer();
header();

const seattle = new Shops('Seattle', 23, 65, 6.3);
const tokyo = new Shops('Tokyo', 3, 24, 1.2);
const dubai = new Shops('Dubai', 11, 38, 3.7);
const paris = new Shops('Paris', 20, 38, 2.3);
const lima = new Shops('Lima', 2, 16, 4.6);

console.log(seattle);


//function to calculate random//
// function random(min, max) {
//     return Math.floor(Math.random() * max - min + 1) + min;}

// const seattle = {
//     city: 'Seattle',
//     minCustPerHour: 23,
//     maxCustPerHour: 65,
//     avgCookieSold: 6.3,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiesPerHour: [],

//     calcCustPerHour: function() {
//                  for (let i = 0; i < hours.length; i++) {
//                      this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//           }
//         },

//           calcCookiesPerHour: function() {
//               this.calcCustPerHour();
//             for (let i = 0; i < hours.length; i++) {
//                 const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
//                 this.cookiesPerHour.push(oneHour)
//                 this.totalDailyCookies += oneHour;
//                 // let randNum = random(this.minCustPerHour, this.maxCustPerHour);
//             // console.log(randNum);
//             }
//         },


// render() {
//     this.calcCookiesPerHour();
//     const ul = document.getElementById('seattle')
//     for (let i = 0; i < hours.length; i++) {
//         //to create the list item
//         const li = document.createElement('li')
//         // to add the text 6am: 16 cookies
//         li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
//         ul.appendChild(li);
//         console.log(li);

//     }
//    //create a list item (li) for the total
//    const li = document.createElement('li')
//    //total: 34543 cookies
//    li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
//    ul.appendChild(li);

// }
// };

// const tokyo = {
//     city: 'Tokyo',
//     minCustPerHour: 3,
//     maxCustPerHour: 24,
//     avgCookieSold: 1.2,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiePerHour: [],

//     calcCustPerHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//  }
// },

//  calcCookiesPerHour: function() {
//      this.calcCustPerHour();
//    for (let i = 0; i < hours.length; i++) {
//        const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
//        this.cookiePerHour.push(oneHour)
//        this.totalDailyCookies += oneHour;
//        let randNum = random(this.minCustPerHour, this.maxCustPerHour)
//    console.log(randNum);
//    }
// },

// render() {
// this.calcCookiesPerHour();
// const ul = document.getElementById('tokyo')
// ul.textContent = 'Tokyo';
// for (let i = 0; i < hours.length; i++) {
// //to create the list item
// const li = document.createElement('li')
// // to add the text 6am: 16 cookies
// li.textContent = hours[i] + ': ' + this.calcCookiesPerHour[i] + ' cookies';
// ul.appendChild(li);
// console.log(li)

// }
// //create a list item (li) for the total
// const li = document.createElement('li')
// //total: 34543 cookies
// li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
// ul.appendChild(li);

// }
// };


// const dubai = {
//     city: 'Dubai',
//     minCustPerHour: 11,
//     maxCustPerHour: 38,
//     avgCookieSold: 3.7,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiePerHour: [],

//     calcCustPerHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//  }
// },

//  calcCookiesPerHour: function() {
//      this.calcCustPerHour();
//    for (let i = 0; i < hours.length; i++) {
//        const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
//        this.cookiePerHour.push(oneHour)
//        this.totalDailyCookies += oneHour;
//        let randNum = random(this.minCustPerHour, this.maxCustPerHour)
//    console.log(randNum);
//    }
// },

// render() {
// this.calcCookiesPerHour();
// const ul = document.getElementById('dubai');
// ul.textContent = 'Dubai'
// for (let i = 0; i < hours.length; i++) {
// //to create the list item
// const li = document.createElement('li')
// // to add the text 6am: 16 cookies
// li.textContent = hours[i] + ': ' + this.calcCookiesPerHour[i] + ' cookies';
// ul.appendChild(li);
// console.log(li)

// }
// //create a list item (li) for the total
// const li = document.createElement('li')
// //total: 34543 cookies
// li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
// ul.appendChild(li);

// }
// };

// const paris = {
//     city: 'Paris',
//     minCustPerHour: 20,
//     maxCustPerHour: 38,
//     avgCookieSold: 2.3,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiePerHour: [],

//     calcCustPerHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//  }
// },

//  calcCookiesPerHour: function() {
//      this.calcCustPerHour();
//    for (let i = 0; i < hours.length; i++) {
//        const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
//        this.cookiePerHour.push(oneHour)
//        this.totalDailyCookies += oneHour;
//        let randNum = random(this.minCustPerHour, this.maxCustPerHour)
//    console.log(randNum);
//    }
// },

// render() {
// this.calcCookiesPerHour();
// const ul = document.getElementById('paris')
// ul.textContent = 'Paris';
// for (let i = 0; i < hours.length; i++) {
// //to create the list item
// const li = document.createElement('li')
// // to add the text 6am: 16 cookies
// li.textContent = hours[i] + ': ' + this.calcCookiesPerHour[i] + ' cookies';
// ul.appendChild(li);
// console.log(li)

// }
// //create a list item (li) for the total
// const li = document.createElement('li')
// //total: 34543 cookies
// li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
// ul.appendChild(li);

// }
// };

// const lima = {
//     city: 'Lima',
//     minCustPerHour: 2,
//     maxCustPerHour: 16,
//     avgCookieSold: 4.6,
//     totalDailyCookies: 0,
//     custPerHour: [],
//     cookiePerHour: [],

//     calcCustPerHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//  }
// },

//  calcCookiesPerHour: function() {
//      this.calcCustPerHour();
//    for (let i = 0; i < hours.length; i++) {
//        const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
//        this.cookiePerHour.push(oneHour)
//        this.totalDailyCookies += oneHour;
//        let randNum = random(this.minCustPerHour, this.maxCustPerHour)
//    console.log(randNum);
//    }
// },

// render() {
// this.calcCookiesPerHour();
// const ul = document.getElementById('lima')
// ul.textContent = 'Lima';
// for (let i = 0; i < hours.length; i++) {
// //to create the list item
// const li = document.createElement('li')
// // to add the text 6am: 16 cookies
// li.textContent = hours[i] + ': ' + this.calcCookiesPerHour[i] + ' cookies';
// ul.appendChild(li);
// console.log(li)

// }
// //create a list item (li) for the total
// const li = document.createElement('li')
// //total: 34543 cookies
// li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
// ul.appendChild(li);

// }
// };



// const allShops = [seattle, tokyo, dubai, paris, lima];
(function renderAllShops () {
for (let i = 0; i <allShops.length; i++) {
allShops[i].render();
}
})()