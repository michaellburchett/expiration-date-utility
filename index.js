/**
 * Takes a date and a number and gives users a new date that is that number of days in the future or past
 *
 * @param {Date} dateTime This is the start date
 * @param {Number} numberOfDaysAway This is the number of days a user wants to add to or subtract from the date
 * @return {Date}
 */
exports.getDateByDaysFromAnotherDate = function(dateTime, numberOfDaysAway) {

    validateGetDateByDaysFromAnotherDate(dateTime, numberOfDaysAway);

    dateTime.setDate(dateTime.getDate() + numberOfDaysAway);

    return dateTime;
};

/**
 * Takes a date and lets a user know if that date is after now or not
 *
 * @param {Date} date This is the date to assess
 * @return {Boolean}
 */
exports.getIsDateAfterNow = function(date) {

    validateIsInstanceOf(date, Date);

    const expiresInSeconds = this.getSecondsFromWhenDateBegins(date);

    return (expiresInSeconds>=0);
};

/**
 * Takes a date and a tells user how many seconds between now and when that date begins or began
 *
 * @param {Date} fromDate This is the date to assess
 * @return {Number}
 */
exports.getSecondsFromWhenDateBegins = function(fromDate) {

    validateIsInstanceOf(fromDate, Date);

    const difference = fromDate - Date.now();

    return Math.round(difference / 1000);
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
