'use strict';

exports.setExpirationDate = function(startDateTime, numberOfDaysUntilExpiration) {

  startDateTime.setDate(startDateTime.getDate() + numberOfDaysUntilExpiration);

  return startDateTime;
};

exports.getSecondsRemaining = function(expirationDate) {
  var difference = expirationDate - Date.now();

  var expiresInSeconds = Math.round(difference / 1000);

  return expiresInSeconds;
};

exports.getIsExpiredByDate = function(expirationDate) {
  var expiresInSeconds = getSecondsRemaining(expirationDate);

  return getIsExpiredBySeconds(expiresInSeconds);
};

exports.getIsExpiredBySeconds = function(expiresInSeconds) {
  (expiresInSeconds > 0) ? false : true;
};