'use strict';

/**
 * Takes a date and a number and return a new date that is that number of days in the future
 *
 * @param {Date} startDateTime This is the start date
 * @param {Number} numberOfDaysUntilExpiration This is the number of days a user wants to add to the date
 * @return {Date}
 */
exports.setExpirationDate = function(startDateTime, numberOfDaysUntilExpiration) {
  
  startDateTime.setDate(startDateTime.getDate() + numberOfDaysUntilExpiration);

  return startDateTime;
};

/**
 * Takes a date and a tells user how many seconds are remaining before that date is hit
 *
 * @param {String} expirationDate This is the date to assess
 * @return {Number}
 */
exports.getSecondsRemaining = function(expirationDate) {
  const difference = expirationDate - Date.now();

  return Math.round(difference / 1000);
};

/**
 * Takes a date and lets a user know if that date is after today or not
 *
 * @param {String} expirationDate This is the date to assess
 * @return {Boolean}
 */
exports.getIsExpiredByDate = function(expirationDate) {
  const expiresInSeconds = getSecondsRemaining(expirationDate);

  return getIsExpiredBySeconds(expiresInSeconds);
};

/**
 * Returns true if there are no seconds left before expiration
 *
 * @param {Number} expiresInSeconds This is the number to assess
 * @return {Boolean}
 */
exports.getIsExpiredBySeconds = function(expiresInSeconds) {
    return (expiresInSeconds<=0);
};
