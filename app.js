"use strict"

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ]
//function to calculate random//
function random(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;}

const seattle = {
    city: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookieSold: 6.3,
    totalDailyCookies: 0,
    custPerHour: [],
    cookiesPerHour: [],

    calcCustPerHour: function() {
                 for (let i = 0; i < hours.length; i++) {
                     this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
          }
        },

          calcCookiesPerHour: function() {
              this.calcCustPerHour();
            for (let i = 0; i < hours.length; i++) {
                const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
                this.cookiesPerHour.push(oneHour)
                this.totalDailyCookies += oneHour;
            }
        },


render() {
    this.calcCookiesPerHour();
    const ul = document.getElementById('seattle')
    for (let i = 0; i < hours.length; i++) {
        //to create the list item
        const li = document.createElement('li')
        // to add the text 6am: 16 cookies
        li.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
        ul.appendChild(li);
        console.log(li);

    }
   //create a list item (li) for the total
   const li = document.createElement('li')
   //total: 34543 cookies
   li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
   ul.appendChild(li);

}
};

const tokyo = {
    city: 'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookieSold: 1.2,
    totalDailyCookies: 0,
    custPerHour: [],
    cookiePerHour: [],

    calcCustPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
 }
},

 calcCookiesPerHour: function() {
     this.calcCustPerHour();
   for (let i = 0; i < hours.length; i++) {
       const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
       this.cookiePerHour.push(oneHour)
       this.totalDailyCookies += oneHour;
       let randNum = random(this.minCustPerHour, this.maxCustPerHour)
   console.log(randNum);
   }
},

render() {
this.calcCookiesPerHour();
const ul = document.getElementById('tokyo')
ul.textContent = 'Tokyo';
for (let i = 0; i < hours.length; i++) {
//to create the list item
const li = document.createElement('li')
// to add the text 6am: 16 cookies
li.textContent = hours[i] + ': ' + this.calcCookiesPerHour[i] + ' cookies';
ul.appendChild(li);
console.log(li)

}
//create a list item (li) for the total
const li = document.createElement('li')
//total: 34543 cookies
li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
ul.appendChild(li);

}
};


const dubai = {
    city: 'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookieSold: 3.7,
    totalDailyCookies: 0,
    custPerHour: [],
    cookiePerHour: [],

    calcCustPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
 }
},

 calcCookiesPerHour: function() {
     this.calcCustPerHour();
   for (let i = 0; i < hours.length; i++) {
       const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
       this.cookiePerHour.push(oneHour)
       this.totalDailyCookies += oneHour;
       let randNum = random(this.minCustPerHour, this.maxCustPerHour)
   console.log(randNum);
   }
},

render() {
this.calcCookiesPerHour();
const ul = document.getElementById('dubai');
ul.textContent = 'Dubai'
for (let i = 0; i < hours.length; i++) {
//to create the list item
const li = document.createElement('li')
// to add the text 6am: 16 cookies
li.textContent = hours[i] + ': ' + this.calcCookiesPerHour[i] + ' cookies';
ul.appendChild(li);
console.log(li)

}
//create a list item (li) for the total
const li = document.createElement('li')
//total: 34543 cookies
li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
ul.appendChild(li);

}
};

const paris = {
    city: 'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookieSold: 2.3,
    totalDailyCookies: 0,
    custPerHour: [],
    cookiePerHour: [],

    calcCustPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
 }
},

 calcCookiesPerHour: function() {
     this.calcCustPerHour();
   for (let i = 0; i < hours.length; i++) {
       const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
       this.cookiePerHour.push(oneHour)
       this.totalDailyCookies += oneHour;
       let randNum = random(this.minCustPerHour, this.maxCustPerHour)
   console.log(randNum);
   }
},

render() {
this.calcCookiesPerHour();
const ul = document.getElementById('paris')
ul.textContent = 'Paris';
for (let i = 0; i < hours.length; i++) {
//to create the list item
const li = document.createElement('li')
// to add the text 6am: 16 cookies
li.textContent = hours[i] + ': ' + this.calcCookiesPerHour[i] + ' cookies';
ul.appendChild(li);
console.log(li)

}
//create a list item (li) for the total
const li = document.createElement('li')
//total: 34543 cookies
li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
ul.appendChild(li);

}
};

const lima = {
    city: 'Lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookieSold: 4.6,
    totalDailyCookies: 0,
    custPerHour: [],
    cookiePerHour: [],

    calcCustPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
 }
},

 calcCookiesPerHour: function() {
     this.calcCustPerHour();
   for (let i = 0; i < hours.length; i++) {
       const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSold)
       this.cookiePerHour.push(oneHour)
       this.totalDailyCookies += oneHour;
       let randNum = random(this.minCustPerHour, this.maxCustPerHour)
   console.log(randNum);
   }
},

render() {
this.calcCookiesPerHour();
const ul = document.getElementById('lima')
ul.textContent = 'Lima';
for (let i = 0; i < hours.length; i++) {
//to create the list item
const li = document.createElement('li')
// to add the text 6am: 16 cookies
li.textContent = hours[i] + ': ' + this.calcCookiesPerHour[i] + ' cookies';
ul.appendChild(li);
console.log(li)

}
//create a list item (li) for the total
const li = document.createElement('li')
//total: 34543 cookies
li.textContent = 'Total: ' + this.totalDailyCookies + 'cookies';
ul.appendChild(li);

}
};



const allShops = [seattle, tokyo, dubai, paris, lima];
(function renderAllShops () {
for (let i = 0; i <allShops.length; i++) {
allShops[i].render();
}

})()
