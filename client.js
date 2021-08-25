const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74751',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// console.log( employees );

console.table(employees);

// 1 - loop over information

for (let employee of employees) {
  // console.log(employee);
  let employeeOutput = processEmployeeBonuses(employee);
  console.log(employeeOutput);
}
// 2 - create a function that takes in an object and returns an object
/**
 * 
 * @param {object} employeeInput Employee to process
 * @return {object} Object within bonus information
 */
function processEmployeeBonuses(employeeInput) {
  employeeInput.bonusPercentage = 0;
  const salary = parseInt(employeeInput.annualSalary);
  if (employeeInput.reviewRating <= 2) {
    employeeInput.bonusPercentage = 0;
  }
  else if (employeeInput.reviewRating === 3) {
    employeeInput.bonusPercentage = 0.04;
  }
  else if (employeeInput.reviewRating === 4) {
    employeeInput.bonusPercentage = 0.06;
  }
  else if (employeeInput.reviewRating === 5) {
    employeeInput.bonusPercentage = 0.1;
  }
  else {
    //do nothing
  }
  // now we do the employee number 4 dig condition...4 dig number = 15 + years
  if (employeeInput.employeeNumber.length === 4) {
    employeeInput.bonusPercentage += 0.05;
  }
  if (salary > 65000) {
    employeeInput.bonusPercentage -= 0.01;
  }
  // checkig if value is in range 0 - 0.13
  if (employeeInput.bonusPercentage < 0) {
    employeeInput.bonusPercentage = 0;
  }
  else if (employeeInput.bonusPercentage > 0.13) {
    employeeInput.bonusPercentage = 0.13;
  }
  //finish that test 

  //calculating total bonus compensation
  employeeInput.totalBonus = salary * 
                            employeeInput.bonusPercentage;
  employeeInput.totalBonus = employeeInput.totalBonus.toFixed(0); //or zero to keep accounting team happy and if we keep tying it's weird that ther eis no gray bar cu there used to be a gray bar what the heck happened to the gray bar this is werid i cant believe I'm still typing this would be a good time for power mode dang it well whatever I guess no gray bar after all unless it's coming now is it nope alright i'm done then fine bye
  employeeInput.totalCompensation = 
                        salary + parseInt(employeeInput.totalBonus);
  return employeeInput;
}
/**
 * 
 * @param {string} employeeNumber 
 * @param {string} annualSalary 
 * @param {number} rating 
 * @returns {number} bonus percentage 
 * 
 * 
 */

//this stuff could clean up...

// function calculateBonusPercent(employeeNumber, salary, rating){
//   // function to return bonus percent
//   let bonusPercentage = 0;

//   return bonusPercentage;
// }

// function checkBonusRange(){

// }

// > < * / - ...these will do math and convert to string
// + will math BUT ALSO CONCAT...so strings will string

// 3 - calculate the bonus
// 4 - move that calculation into a separate function
// 5 - write some tests
