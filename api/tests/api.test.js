const request = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();

chai.use(chaiHttp);

const app = require('../src/app.js');

// Test the /iecho route
describe('GET /iecho', () => {
    it('should return a 200 response with a reversed text of the query string', (done) => {
        request(app)
            .get('/iecho?text=hello')
            .expect(200)
            .expect({
                text:'olleh'
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    })
    it('should return with a 400 response and a error message "no text" if no text is provided', (done) => {
        request(app)
            .get('/iecho')
            .expect(400)
            .expect({
                error:'no text'
            })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    })
    it('should return with a 400 response and a error message "no text" if the query is not a string', (done) => {
        chai.request(app)
            .get('/iecho?text=hello&text=world')
            .end((err, response) => {
                response.should.have.status(400);
                response.body.should.be.a('object');
                response.body.should.have.property('error');
                response.body.error.should.equal('no text');
                done();
            }
            );
    })
});
