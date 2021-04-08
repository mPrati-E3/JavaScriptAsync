'use strict';

const sqlite = require('sqlite3');
const db = new sqlite.Database('transcript.sqlite',
    (err) => { if (err) throw err; });


let result = [];
let sql = "SELECT * FROM course LEFT JOIN score ON course.code=score.coursecode" ;
db.all(sql, [], (err,rows)=>{
    if(err) throw err;
    for (let row of rows) {
        console.log(row);
        result.push(row);
        //devo lavorare all'interno della callback perchè sono in asincrono
    }
});

/*console.log('*************');
for (let row of result) {
    console.log(row);
}*/
