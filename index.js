/**
 * Takes a date and a number and gives users a new date that is that number of days in the future or past
 *
 * @param {Date} dateTime This is the start date
 * @param {Number} numberOfDaysAway This is the number of days a user wants to add to or subtract from the date
 * @return {Date}
 */
exports.getDateByDaysFromAnotherDate = function(dateTime, numberOfDaysAway) {

    validateIsDate(dateTime);
    validateNumberOfDaysAway(numberOfDaysAway);

    dateTime.setDate(dateTime.getDate() + numberOfDaysAway);

    return dateTime;
};

/**
 * Takes a date and a tells user how many seconds between now and when that date begins or began
 *
 * @param {Date} fromDate This is the date to assess
 * @return {Number}
 */
exports.getSecondsFromWhenDateBegins = function(fromDate) {
  const difference = fromDate - Date.now();

  return Math.round(difference / 1000);
};

/**
 * Takes a date and lets a user know if that date is after today or not
 *
 * @param {Date} date This is the date to assess
 * @return {Boolean}
 */
exports.getIsDateAfterToday = function(date) {
  const expiresInSeconds = getSecondsFromWhenDateBegins(date);

  return (expiresInSeconds<=0);
};

function validateIsDate(date) {

    if(!date instanceof Date){
        throw new Error('You must give a valid date');
    }
}

function validateNumberOfDaysAway(number) {

    //Validate that it is a number
    if (isNaN(number)) {
        throw new Error('You must give a whole number between -100,000,000 and 100,000,000 for the second argument');
    }

    //Validate that it is a whole number
    if((number - Math.floor(number)) !== 0) {
        throw new Error('You must give a whole number between -100,000,000 and 100,000,000 for the second argument');
    }

    //Validate that it is between -100,000,000 and 100,000,000
    if (number > 100000000 || number < -100000000) {
        throw new Error('You must give a whole number between -100,000,000 and 100,000,000 for the second argument');
    }
}
