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
    const ArrMaxGenre = book.filter(item => item.genre === "fantasy");
    return ArrMaxGenre.map(item => item.name.toUpperCase());
}

function publicationDate (book, century){
    let searchYear = (century - 1) * 100 + 1;
    return book.reduce((prev, item) => {
        if (item.year >= searchYear && item.year <= searchYear + 100) {
            prev.push(item.name);
        }
        return prev;
    }, []);
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

