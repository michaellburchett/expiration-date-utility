'use strict';

/**
 * Takes a date and a number and return a new date that is that number of days in the future
 *
 * @param {Date} startDateTime This is the start date
 * @param {Integer} numberOfDaysUntilExpiration This is the number of days a user wants to add to the date
 * @return {Date}
 */
exports.setExpirationDate = function(startDateTime, numberOfDaysUntilExpiration) {

    validateGetDateByDaysFromAnotherDate(startDateTime, numberOfDaysUntilExpiration);

    startDateTime.setDate(startDateTime.getDate() + numberOfDaysUntilExpiration);

    return startDateTime;
};

/**
 * Takes a date and a tells user how many seconds are remaining before that date is hit
 *
 * @param {Date} expirationDate This is the date to assess
 * @return {Integer}
 */
exports.getSecondsRemaining = function(expirationDate) {

    validateIsInstanceOf(expirationDate, Date);

    const difference = expirationDate - Date.now();

    return Math.round(difference / 1000);
};

/**
* Takes a date and lets a user know if that date is after today or not
*
* @param {Date} expirationDate This is the date to assess
* @return {Boolean}
*/
exports.getIsExpiredByDate = function(expirationDate) {
    const expiresInSeconds = this.getSecondsRemaining(expirationDate);

    return this.getIsExpiredBySeconds(expiresInSeconds);
};

/**
* Returns true if there are no seconds left before expiration
*
* @param {Integer} expiresInSeconds This is the number to assess
* @return {Boolean}
*/
exports.getIsExpiredBySeconds = function(expiresInSeconds) {
    return (expiresInSeconds<=0);
};

/**
 * Validates the getDateByDaysFromAnotherDate function, as these had a lot of validation tasks
 *
 * @param {Date} dateTime This is the start date
 * @param {Number} numberOfDaysAway This is the number of days a user wants to add to or subtract from the date
 */
function validateGetDateByDaysFromAnotherDate (dateTime, numberOfDaysAway) {

    validateIsInstanceOf(dateTime, Date);

    validateIsInstanceOf(numberOfDaysAway, Number);

    validateNumberIsWhole(numberOfDaysAway);

    validateNumberIsBetweenMinAndMax(numberOfDaysAway, -100000000, 100000000);
}

/**
 * Takes a number and validates that it is a whole number
 *
 * @param {Number} number This is the number to validate
 * @throws
 */
function validateNumberIsWhole(number) {

    if ((number - Math.floor(number)) !== 0) {
        throw new Error(`You must give a whole number`);
    }
}

/**
 * Takes a number and validates that it is between a given min and max
 *
 * @param {Number} number This is the number to validate
 * @param {Number} min This is the lower bound number that this can be
 * @param {Number} max This is the upper bound number that this can be
 * @throws
 */
function validateNumberIsBetweenMinAndMax(number, min, max) {

    if (number > max || number < min) {
        throw new Error(`You must give a number between ${min} and ${max}`);
    }
}

/**
 * Takes an entity that you would like to validate that it is a certain type
 *
 * @param entity This is the entity that you would like to validate
 * @param type This is the type that you re validating against
 * @throws
 */
function validateIsInstanceOf(entity, type) {

    if(!entity instanceof type){
        throw new Error(`You must give a valid ${type}`);
    }
}
