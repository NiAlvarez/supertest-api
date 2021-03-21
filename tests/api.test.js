const { json } = require('express');
const request = require('supertest');
const NEW_USER_NAME = 'bob zoe';

const app = require('../src/app')


describe('/GET users', () => {

            it("returns JSON with a list of users", function() {
                const data = [{
                        name: 'john doe',
                        id: '1',
                    },
                    {
                        name: 'anna boe',
                        id: '2',
                    }
                ]

                request(app)
                    .get('/users')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .expect(data)
            });



            it('endpoint /new returns expected text', function() {
                request(app)
                    .get('/new')
                    .expect('Content-type', /json/)
                    .expect('"welcome to the new page"')
            })

            it("endpoint /nonexisting returns 404 status", function() {
                request(app)
                    .get('/nonexisting')
                    .expect('Content-type', /json/)
                    .expect(404)
            });

            it("root path returns redirects", function() {
                request(app)
                    .get('/')
                    .expect('Content-type', /json/)
                    .expect(301)
            });

            it("adding new user to the list", function() {

                request(app)
                    .post('/users')
                    .send({ name: NEW_USER_NAME })
                    .set('Accept', 'application/json')
                    .expect('Content-type', /json/)
            })



            // describe('POST /users', () => {

            //     it('respond with 201 created', done => {
            //         const data = {
            //             username: 'fazt',
            //             password: 'password123'
            //         }

            //         request(app)
            //             .post('/users')
            //             .send(data)
            //             .expect('Content-type', /json/)
            //             .expect(201)
            //             .end(err => {
            //                 if (err) return done(err);
            //                 done();
            //             })
            //     })

            //     it('respond with code 400 on bad request', done => {
            //         const data = {}

            //         request(app)
            //             .post('/users')
            //             .send(data)
            //             .expect('Content-type', /json/)
            //             .expect(400)
            //             .expect('"user not created"')
            //             .end(err => {
            //                 if (err) return done(err);
            //                 done();
            //             })
            //     })
            // })