const axios = require('axios');
const { expect } = require('chai');

let response;
const url = "https://electivacicd-icesi.herokuapp.com/books";
const book={"id":"80","name":"Soft Skills: The Software Developer's Life Manual","author":"John Sonmez"}
describe('Given a created', () =>{
    before(async()=>{
        bookGiven = await axios.post(url, book);
        bookID = bookGiven.data.id;
    });

    after(async ()=>{
        response2 = await axios.delete(`${url}/${bookID}`);
    });

    describe('When the user wants to update the book', () =>{
        before(async()=>{
            book['name'] = `${book.name}+prove`;
            book['author'] = `${book.author}+prove`;
            book['id']=`${book.id}+prove`;
            oldList = await axios.get(url);
            response = await axios.put(url+"/"+bookGiven.data.id, book);
            newList = await axios.get(url);
        });
        
        it('Must return OK status', ()=>{
            expect(response.status).eql(200);
        });

        it('Must return a modified book', () =>{
            modBook = response.data;
            delete modBook['id'];
            delete book['id'];
            expect(modBook).eql(book);
        });

        it('Must return a different book', () =>{
            modBook = response.data;
            delete modBook['id'];
            delete bookGiven['id'];
            expect(modBook).not.eql(bookGiven.data);
        })

        it('Must return a list with the same size', () =>{
            expect(newList.data.length).eql(oldList.data.length);
        });

    });

});
