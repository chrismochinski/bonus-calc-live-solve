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

for(let employee of employees){
  // console.log(employee);
  let employeeOutput = processEmployeeBonuses(employee);
  console.log(employeeOutput);
}
// 2 - create a function that takes in an object and returns an object
/**
 * 
 * @param {object} employeeInput Employees to process
 *@return {object} Object within bonus information
 * 
 */


function processEmployeeBonuses(employeeInput){
  employeeInput.bonusPercentage = 200;
  if(employeeInput.reviewRating <= 2) {
    employeeInput.bonusPercentage = 0;
  }
  else if(employeeInput.reviewRating === 3) {
    employeeInput.bonusPercentage = employeeInput.annualSalary * 0.04;
  }
  else if(employeeInput.reviewRating === 4) {
    employeeInput.bonusPercentage = employeeInput.annualSalary * 0.06;
  }
  else if(employeeInput.reviewRating === 5) {
    employeeInput.bonusPercentage = employeeInput.annualSalary * 0.1;
  }
  else{
    //do nothing
  }
  // now we do the employee number 4 dig condition...4 dig number = 15 + years
if(employeeInput.employeeNumber.length === 4){
  employeeInput.bonusPercentage += 0.05;
}
if(employeeInput.salary > parseInt(65000)){
  employeeInput.bonusPercentage -= 0.01;
}
if(employeeInput.bonusPercentage < 0){
  employeeInput.bonusPercentage = 0;
}
else if(employeeInput.bonusPercentage > 0.13){
  employeeInput.bonusPercentage = 0.13;
}
employeeInput.totalBonus = employeeInput.annualSalary * employeeInput.bonusPercentage;
employeeInput.totalBonus = employeeInput.totalBonus.toFixed(2); //or zero to keep accounting team happy
  employeeInput.totalCompensation = employeeInput.salary + employeeInput.totalBonus;
  return employeeInput;
}

// > < * / - ...these will do math and convert to string
// + will math BUT ALSO CONCAT...so strings will string

// 3 - calculate the bonus
// 4 - move that calculation into a separate function
// 5 - write some tests
