const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'main','online'), {recursive: true},(err)=>{
//  if (err) {
//   console.log(err);
//  }
// });
//
// fs.mkdir(path.join(__dirname, 'main','inPerson'), {recursive: true},(err)=>{
//  if (err) {
//   console.log(err);
//  }
// });

const onlineUsers = {name: "Andrii", age: 22, city: "Lviv"};
const inPersonUsers = {name: "Vasya", age: 33, city: "Kyiv"};

// for (const onlineUser in onlineUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'online', 'file1.txt'), onlineUser + ': ' + onlineUsers[onlineUser] + '\n', {flag: 'a'}, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });
// }
//
// for (const inPersonUser in inPersonUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'), inPersonUser + ': ' + inPersonUsers[inPersonUser] + '\n', {flag: 'a'}, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });
// }


fs.readFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'), 'utf8',
    (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(data)

        fs.readFile(path.join(__dirname, 'main', 'online', 'file1.txt'), 'utf8',
            (err, data2) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log(data2)


                fs.writeFile(path.join(__dirname, 'main', 'online', 'file1.txt'), data, {flag: 'w'}, (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                });

                fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'), data2, {flag: 'w'}, (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                });


            });

    });

