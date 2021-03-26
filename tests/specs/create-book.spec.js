const axios = require('axios');
const { expect } = require('chai');

let response;
const url = "https://electivacicd-icesi.herokuapp.com/books";
const book={"id":"80","name":"Soft Skills: The Software Developer's Life Manual","author":"John Sonmez"}
    describe('When the user wants to create a book',()=>{
        before(async()=>{
        oldList=await axios.get(url);
        response=await axios.post(url, book);
        newList=await axios.get(url);
        bookID=book.id;
        console.log(response.status);
        });
        after(async ()=>{
            deleteResponse = await axios.delete(`${url}/${bookID}`);
            expect(deleteResponse.status).eql(200);
        });
        
        it('It should return the create status(OK)',()=>{
            expect(response.status).eql(200);
        });
        it('Validate that the book was created',()=>{
            const createdBook=response.data;
            expect(book.name).eql(createdBook.name);
            expect(book.author).eql(createdBook.author);
        });
        it('It must increase the list in 1',()=>{
           expect(newList.data.length).eql(oldList.data.length+1);
        });
        

    });