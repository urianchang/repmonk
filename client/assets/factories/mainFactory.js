myApp.factory('mainFactory', [function() {
    var states = [
        {
            name: 'California',
            id: "US-CA",
            date: new Date("1/10/1980")
        },
        {
            name: 'Utah',
            id: "US-UT",
            date: new Date("1/12/1976")
        },
        {
            name: 'Illinois',
            id: "US-IL",
            date: new Date("1/3/1995")
        },
        {
            name: 'New York',
            id: "US-NY",
            date: new Date("4/6/1999")
        },
        {
            name: 'Texas',
            id: "US-TX",
            date: new Date("5/7/2000")
        },
        {
            name: 'Florida',
            id: "US-FL",
            date: new Date("8/15/2005")
        },
        {
            name: 'Washington',
            id: "US-WA",
            date: new Date("9/29/2010")
        },
        {
            name: 'Oregon',
            id: "US-OR",
            date: new Date("10/23/2017")
        },
        {
            name: 'Nevada',
            id: "US-NV",
            date: new Date("3/25/2024")
        },
        {
            name: 'Michigan',
            id: "US-MI",
            date: new Date("2/10/2001")
        }
    ];

    var factory = {};

    factory.index = function(callback) {
        callback(states);
    }

    return factory;
}]);
