const { expect } = require('chai');
const axios = require('axios');

const url = "https://electivacicd-icesi.herokuapp.com/books";
let wrongStatus;
describe('When the user wantsa to delete a book with a id that isnt in the library ',()=>{
    it('Must return a 500 status code',()=>{
        axios.delete(`${url}/00858`).catch(function(error){
            wrongStatus=error.response.status;
            expect(wrongStatus).eql(500);
            done();
        });
    });
});