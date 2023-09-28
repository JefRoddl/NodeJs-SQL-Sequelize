const fs = require('fs')

//fs => file system

// fs.writeFile('myfile.txt', 'Hello World from jeferson Rodrigues', (err) => {
//    if(err) {
//       throw err;
//   }
// })

//fs.readFile('myfile.txt', (err, data) => console.log(data.toString('utf8')))

//fs.readdir('.', (err, files) => {
//    if(err) {
//        throw err;
//    }
//    for(var file in files) {
//        console.log(files[file])
//    }
//})

fs.readdirSync('.')
    .filter((file) => {
        return(file.endsWith('.js'))
    })
    .forEach((file) => {
        console.log(file)
    })

