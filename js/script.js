// Created by: Katie
// Created on: March 2022
// This file contains the JS functions for index.html

/**
 * This function will find the total salary of a citizen and the amount of money the government takes. 
 */
function calculateMoney() {
  // i grab what you have inputted. god how could i. im just so evil.
  let hourly_wage = parseFloat(document.getElementById('hourly_wage').value);
  let hours_worked = parseFloat(document.getElementById('hours_worked').value);
  const tax_rate = 0.1805;

  //now we do Math
  let whole_earnings = hourly_wage * hours_worked;
  let government_takes = whole_earnings * tax_rate;
  let whole_received = whole_earnings - government_takes

  // and now we print it :)
  document.getElementById('total_earnings').innerHTML = 'With these values, you have earned $' + whole_earnings.toFixed(2)
  document.getElementById('government_claims').innerHTML = 'With these values, the government is stealing $' + government_takes.toFixed(2)
  document.getElementById('amount_received').innerHTML = 'With these values, you are taking home $' + whole_received.toFixed(2)
}