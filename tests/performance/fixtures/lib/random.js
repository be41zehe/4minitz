let randomstring = require('randomstring'),
    faker = require('faker');

export class Random {

    static generateId() {
        // unique id from the random package also used by minimongo
        // character list: https://github.com/meteor/meteor/blob/release/METEOR%401.4.0.1/packages/random/random.js#L88
        // string length: https://github.com/meteor/meteor/blob/release/METEOR%401.4.0.1/packages/random/random.js#L197
        const randomStringConfig = {
            length: 17,
            charset: '23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz'
        };
        return randomstring.generate(randomStringConfig);
    };

    static randomNumber(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    static generateMeetingSeriesValues() {
        return {
            project: faker.company.companyName(),
            name: faker.name.findName()
        }
    }

}