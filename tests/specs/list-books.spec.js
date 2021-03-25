const axios = require('axios');
const { expect } = require('chai');

let response;

describe("When the user wants to see the lists of the books",()=>{
    before(async ()=>{
        response=await axios.get('https://electivacicd-icesi.herokuapp.com/books');
    });
    it("It must return an OK status code",()=>{
        //console.log(response);
        expect(response.status).eql(200);
    });

    it("Then it should turn book with name, author and id",()=>{
        expect(response.data.length).to.be.greaterThan(0);
        const book=response.data[0];
        expect(book).to.have.property("id");
        expect(book).to.have.property("name");
        expect(book).to.have.property("author");
    });

});