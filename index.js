import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]['Away Team Name']);
console.log(fifaData[828]['Home Team Goals']);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data){
    const finals = data.filter(cb => (cb.Stage == "Final"));
    return finals;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
function getYears(cb) {
    let years = cb.map(item => item.Year);
    return years;
};
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
function getWinners(cbWin) {
    let wins = cbWin.map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Name']
        }else if (item['Home Team Goals'] === item['Away Team Goals']){
            return item['Win conditions']
        }else{
            return item['Away Team Name']
        }
    })
    return wins;
};
console.log(getWinners(getFinals(fifaData)));


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
function getWinnersByYear(cbWin,cbYear){
    let winYear = cbWin.map((item,index) => {
        return `In ${cbYear[index]}, ${item} won the world cup!`
    });
    return winYear
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
function getAverageGoals(data) {
    let homeSum = data.reduce((sum, item) =>{
        return sum += item['Home Team Goals'];
    }, 0);
    let awaySum = data.reduce((sum, item) => {
        return sum += item ['Away Team Goals'];
    }, 0);
    return `Home Team Average Goals: ${homeSum/data.length}, Away team Average Goals: ${awaySum/data.length}`;
};

getAverageGoals(fifaData);
console.log(getAverageGoals(fifaData))

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {
    let finals = data.filter(cb => (cb["Stage"] == "Final"));
    let winInitials = [];
    for (let i = 0; i < finals.length; i++) {
        if (finals[i]["Win conditions"] != "") {
            let Location = finals[i]["Win conditions"].indexOf(" win");
            let Country = finals[i]["Win conditions"].substring(0, Location);
            if (Country = finals[i]["Home Team Name"]) {
                winInitials.push(finals[i]["Home Team Initials"]);
            } else if (Country = finals[i]["Away Team Name"]) {
                winInitials.push(finals[i]["Away Team Initials"]);
            }
        }
        else if (finals[i]["Home Team Goals"] > finals[i]["Away Team Goals"]) {
            winInitials.push(finals[i]["Home Team Initials"]);
        } else if (finals[i]["Home Team Goals"] < finals[i]["Away Team Goals"]) {
            winInitials.push(finals[i]["Away Team Initials"]);
        }
    }
    let countryWins = winInitials.reduce(function (wins, item) {
        if (item === initials) {
            wins += 1;
        }
        return wins;
    }, 0);
    return countryWins;
};
getCountryWins(fifaData,"GER");
console.log(getCountryWins(fifaData,"GER"));

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */