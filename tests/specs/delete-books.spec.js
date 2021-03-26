const axios = require('axios');
const { expect } = require('chai');

const url = "https://electivacicd-icesi.herokuapp.com/books";
const book={"id":"80","name":"Soft Skills: The Software Developer's Life Manual","author":"John Sonmez"}
let response;
describe('Gave me the book i created', () =>{
    before(async ()=>{
        createdBook = await axios.post(url,book);
    });

    describe('Delete an existing book of the list', () =>{
        before(async () =>{
            oldList = await axios.get(url);
            response = await axios.delete(`${url}/${createdBook.data.id}`);
            newList = await axios.get(url);
        });

        it('Should return OK satus code', () =>{
            expect(response.status).eql(200);
        })

        it('The book list must not contains the created book', () =>{
            expect(newList.data).not.contain(createdBook.data);
        })

        it('The new book list must decrease in 1', () =>{
            expect(newList.data.length).eql(oldList.data.length-1);
        })

    })
})