// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
 switch(name){
   case 'Pure Strawberry Joy': 
     return 0.5;
   case 'Energizer':
   case 'Green Garden':
     return 1.5;
   case 'All or Nothing':
     return 5.0;
   case 'Tropical Island':
     return 3.0;
   default:
     return 2.5;
  break;
 }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wegesCut = 0;
  let limesCutCount = 0;
 
  while (wegesCut < wedgesNeeded && limes.length > 0){
    let currentLime = limes.shift();
    switch(currentLime){
      case 'small':
        wegesCut += 6;
        break;
      case 'medium':
        wegesCut += 8;
        break;
      case 'large':
        wegesCut += 10;
        break;
    }
    limesCutCount++;
  }
  return limesCutCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do{
    let currentJuice = orders.shift();
    let remainingTime = timeToMixJuice(currentJuice);
    timeLeft -= remainingTime;
  }while(timeLeft > 0 && orders.length > 0)
  return orders;
}
