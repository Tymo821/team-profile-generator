const fs = require('fs');

module.exports = fileContent => {
    // return a new Promise that takes in two arguments, resolve and reject
    return new Promise((resolve, reject) => {
        // write the file using fs.writeFile
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's catch method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if no err, resolve Promise and send successful data to .then()
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};;