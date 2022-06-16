const mongoose=require('mongoose');

const AuthorSchema=new mongoose.Schema({
    name : {
        type : String
    },
    Year : {
        type : Number
    },
    Book : {
        type : [{
            type : mongoose.Schema.type.ObjectId,
            ref : "Book"
        }]
    }
});


const bookSchema= new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    publishDate : {
        type : String

    },
    genres :{
        type : [String]
    },
    Athor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Author"
    }
});

let book=mongoose.model("Book",bookSchema);
let Author =mongoose.model("Author",AuthorSchema)
module.exports={ book, Author }