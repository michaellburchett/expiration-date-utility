'use strict';

const expiration = require('../index.js');
const assert = require('assert');

describe('Test Expiration Utilities', function() {
    describe('setExpirationDate', function() {
        it('should set an expiration date based on a date', function() {
            const date = new Date('August 19, 1975 23:15:30');
            const expectedExpirationDate = new Date('November 17, 1975 23:15:30');

            const expirationDate = expiration.setExpirationDate(date, 90);

            assert.equal(expirationDate.toString(), expectedExpirationDate.toString());
        });
    });

    describe('getExpiresInSeconds', function() {
        it('should set an appropriate expires in seconds, given an expiration date', function() {
            const date = new Date();
            date.setDate(date.getDate() + 90);

            const expires_in_seconds = expiration.getSecondsRemaining(date);

            assert.equal(expires_in_seconds, 7779600);
        });
    });

    describe('isExpired', function() {
        it('should return true if the seconds until expiration is less than or equal 0', function() {
            const is_expired = expiration.getIsExpiredBySeconds(1);

            assert(!is_expired);
        });
    });
});