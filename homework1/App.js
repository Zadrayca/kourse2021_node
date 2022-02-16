const fs = require('fs');
const path = require('path');

const onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Oleg", age: 12, city: "Lviv"},
    {name: "Lesya", age: 34, city: "Lviv"}
];
const inPersonUsers = [
    {name: "Vasya", age: 42, city: "Kyiv"},
    {name: "Olga", age: 21, city: "Kyiv"},
    {name: "Kolya", age: 54, city: "Kyiv"}
];

const path1 = path.join(__dirname, 'main', 'online', 'file1.txt');
const path2 = path.join(__dirname, 'main', 'inPerson', 'file2.txt');


fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
        if (err) {
            console.log(err);
        } else {
            onlineUsers.forEach(user => {
                    for (const key in user) {
                        fs.writeFile(path1, key + ': ' + user[key] + '\n', {flag: 'a'}, (err) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                        });
                    }
                })
        }
    });

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    } else{
        inPersonUsers.forEach(user => {
            for (const key in user) {
                fs.writeFile(path2, key + ': ' + user[key] + '\n', {flag: 'a'}, (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        exchange();
                    }
                });
            }
        })
    }
});

const exchange = () => {
    fs.readFile(path2, 'utf8',
        (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(data)

            fs.readFile(path1, 'utf8',
                (err, data2) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                    console.log(data2)


                    fs.writeFile(path1, data, {flag: 'w'}, (err) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                    });

                    fs.writeFile(path2, data2, {flag: 'w'}, (err) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                    });


                });

        });
}