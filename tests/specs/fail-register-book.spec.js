const { expect } = require('chai');
const axios = require('axios');
const url = "https://electivacicd-icesi.herokuapp.com/books";
const book={"author":"John Sonmez"}
let status;
describe('When the user wants to create a book without filling some fields', () =>{
    it('Must return a 500 status code', (done) => {
        axios.post(url, book).catch(function (error) {
            status = error.response.status;
            expect(status).eql(500);
        done()
      });
    });
});