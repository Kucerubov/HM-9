const Books = [
    {
       name: "Moby Dick",
       author: "Herman Melville",
       genre: "adventure",
       year: 2012
    },
    {
        name: "Childhood",
        author: "Lev Tolstoy",
        genre: "Autobiographical novel",
        year: 1852
    },
    {
        name: "War and Peace",
        author: "Lev Tolstoy",
        genre: "epic novel",
        year: 1869
    },
    {
        name: "Anna Karenina",
        author: "Lev Tolstoy",
        genre: "novel",
        year: 1878
    },
    {
        name: "Tim Cook: The genius who took Apple to the next level",
        author: "Leander Kani",
        genre: "Biography",
        year: 2019
    },
    {
        name: "Diamond reality",
        author: "Yuri Nikolaevich Burnosov",
        genre: "fantasy",
        year: 2000
    },
    {
        name: "Drop point",
        author: "Yuri Nikolaevich Burnosov",
        genre: "adventure",
        year: 2010
    },
    {
        name: "Armageddon 3: Dungeons of Death",
        author: "Yuri Nikolaevich Burnosov",
        genre: "fantasy",
        year: 2011
    },
    {
        name: "Harry Potter and the Philosopher's Stone",
        author: "Joanne Rowling",
        genre: "fantasy",
        year: 1997
    },
    {
        name: "Harry Potter And The Chamber of secrets",
        author: "Joanne Rowling",
        genre: "fantasy",
        year: 1998
    },
    {
        name: "Harry Potter and the Order of the Phoenix",
        author: "Joanne Rowling",
        genre: "fantasy",
        year: 2003
    }
]

function maxGenre (book){
    let count = 0;
    let genre;

    for(let i = 0; i < book.length; i++){
        const enterGenre = book[i].genre
        let counter = 0;
        for(let y = 0; y < book.length; y++){
            if(book[y].genre === enterGenre){
                counter++;
                if (counter > count){
                    genre = enterGenre;
                }
            }
        }
        count = counter;
    }

    const nameBooksMaxGenre = [];

    for (let i = 0; i < book.length; i++){
        if(genre === book[i].genre ){
            nameBooksMaxGenre.push(book[i].name.toUpperCase());
        }
    }
    return nameBooksMaxGenre;
}

function publicationDate (book, century){
    const nameBooks = [];
    let searchYear = (century - 1) * 100 + 1;
    for (let i = 0; i < book.length; i++){
        if(book[i].year >= searchYear && book[i].year <= searchYear+100){
            nameBooks.push(book[i].name);
        }
    }
    return nameBooks;
}

const books20Century = publicationDate(Books, 20);
console.log(books20Century);

const books21Century = publicationDate(Books, 21);
console.log(books21Century);

const massAuthorMaxGenre = maxGenre(Books);
console.log(massAuthorMaxGenre);

//console.log(maxGenre(Books));
//console.log(publicationDate(Books,20));
//console.log(publicationDate(Books,21));

