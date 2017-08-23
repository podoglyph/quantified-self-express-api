const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

var assert = require('assert');
var request = require('request');
var app = require('../server');


describe('Meals API', function() {

    before(function(done) {
        this.port = 9876;
        this.server = app.listen(this.port, function(err, result) {
            if (err) { return done(err); }
            done();
        });
        this.request = request.defaults({
            baseUrl: 'http://localhost:9876/api/v1'
        });
    });

    after(function() {
        this.server.close();
    });

    describe('GET all meals', function() {


        it('should return a 200', function(done) {
            this.request.get('/meals', (error, response) => {
                if (error) { done(error); }
                assert.equal(response.statusCode, 200);
                done();
            });
        });

        // it('should return json data of meals', function(done) {
        //     this.request.get('/meals', (error, response) => {
        //         if (error) { done(error); }
        //         // let parsedFoods = JSON.parse(response.body)
        //         // assert.equal(parsedFoods.length, 1);
        //         // assert.equal(parsedFoods[0].id, 1);
        //         // assert.equal(parsedFoods[0].calories, 120);
        //         // assert.equal(parsedFoods[0].name, 'Apple');
        //         done();
        //     });
        // });
    })
});