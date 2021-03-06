const axios = require('axios');
const { expect } = require('chai');

let response;
let deleteResponse;
let postBook;
const url = "https://electivacicd-icesi.herokuapp.com/books";
const book={"name":"Soft Skills: The Software Developer's Life Manual","author":"John Sonmez"}
    describe('When the user wants to create a book',()=>{
        before(async()=>{
        oldList=await axios.get(url);
        response=await axios.post(url, book);
        newList=await axios.get(url);
        bookID=response.data.id;
        postBook=response.status;
        console.log(bookID);
        console.log(response.status);
        console.log(oldList.data.length);
        console.log(newList.data.length);    
        });
        after(async ()=>{
            deleteResponse = await axios.delete(`${url}/${bookID}`);
            if(deleteResponse.status === 200){
                console.log("The book was succesfully deleted");
            }else{
                console.log("Something was wrong");
            }
        });
        it('It should return the create status(OK)',()=>{
            expect(postBook).eql(200);
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