const axios = require('axios');
const { expect } = require('chai');

let response;
const book={"id":"b23a9a95-5934-44a1-8b06-d4ff86a79255","name":"Soft Skills: The Software Developer's Life Manual","author":"John Sonmez"}
    describe("When the user wants to create a book",()=>{
        before(async()=>{
        response=await axios.post('https://electivacicd-icesi.herokuapp.com/books', book);
        });
        it('It should return the create status',()=>{
            expect(response.status).eql(200);
        });
    });