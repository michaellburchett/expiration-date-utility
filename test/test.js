'use strict';

const expiration = require('../index.js');
const assert = require('assert');

describe('Test Date Utilities', function() {
    describe('get date by days from another date in the future', function() {
        it('should get a date based on another date and days in the future', function() {
            const date = new Date('August 19, 1975 23:15:30');

            const expectedExpirationDate = new Date('November 17, 1975 23:15:30');

            const expirationDate = expiration.setExpirationDate(date, 90);

            assert.equal(expirationDate.toString(), expectedExpirationDate.toString());
        });
    });

    describe('get date by days from another date in the past', function() {
        it('should get a date based on another date and days in the past', function() {
            const date = new Date('August 19, 1975 23:15:30');

            const expectedExpirationDate = new Date('August 17, 1975 23:15:30');

            const expirationDate = expiration.setExpirationDate(date, -2);

            assert.equal(expirationDate.toString(), expectedExpirationDate.toString());
        });
    });

    describe('get date by days from another date throws error if date not given', function() {
        it('should not get a date based on another date and days if the date is not a date', function() {
            assert.throws(
                () => expiration.setExpirationDate("not a date", 90)
            );
        });
    });

    describe('get date by days from another date in the future with floating number of days throws error', function() {
        it('should not get a date based on another date and days in the future with floating days', function() {
            const date = new Date('August 19, 1975 23:15:30');

            assert.throws(
                () => expiration.setExpirationDate(date, 90.3463456734573457567345)
            );
        });
    });

    describe('get date by days from another date in the past with floating number of days throws an error', function() {
        it('should not get a date based on another date and days in the past with floating days', function() {
            const date = new Date('August 19, 1975 23:15:30');

            assert.throws(
                () => expiration.setExpirationDate(date, -2.964563453453)
            );
        });
    });

    describe('get date by days from another date in the future with non number of days throws error', function() {
        it('should not get a date based on another date and number of days that is not a number', function() {
            const date = new Date('August 19, 1975 23:15:30');

            assert.throws(
                () => expiration.setExpirationDate(date, "ninety")
            );
        });
    });

    describe('get date by days from another date with out of bounds number of days throws error', function() {
        it('should not get a date based on another date and number of days that is out of bounds', function() {
            const date = new Date('August 19, 1975 23:15:30');

            assert.throws(
                () => expiration.setExpirationDate(date, 100000001)
            );
        });
    });

    describe('getIsExpiredByDateFalse', function() {
        it('should tell us if something is expired by giving an expiration date', function() {
            const date = new Date();

            date.setDate(date.getDate() - 2);

            const isExpired = expiration.getIsExpiredByDate(date);

            assert.equal(isExpired, true);
        });
    });

    describe('getIsExpiredByDateFalse', function() {
        it('should tell us if something is not expired by giving an expiration date', function() {
            const date = new Date();

            date.setDate(date.getDate() + 2);

            const isExpired = expiration.getIsExpiredByDate(date);

            assert.equal(isExpired, false);
        });
    });

    describe('getIsExpiredBySeconds', function() {
        it('should tell us if something is expired by giving seconds remaining', function() {
            const isExpired = expiration.getIsExpiredBySeconds(1);

            assert.equal(isExpired, false);
        });
    });

    describe('getIsExpiredBySeconds', function() {
        it('should tell us if something is expired by giving seconds remaining', function() {
            const isExpired = expiration.getIsExpiredBySeconds(0);

            assert.equal(isExpired, true);
        });
    });

    describe('getIsExpiredBySeconds', function() {
        it('should tell us if something is expired by giving seconds remaining', function() {
            const isExpired = expiration.getIsExpiredBySeconds(-1);

            assert.equal(isExpired, true);
        });
    });
});