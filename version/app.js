const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    // response = 'This is version 1 of the app.' + '\n';
    // response = 'This is version 2 of the app.' + '\n';
    // response = 'This is version 3.1 of the app.' + '\n';
    // response = 'This is version 4.0 of the app.' + '\n';

    const a = 'Mg==';
    const b = 'MTA=';
    const a_n = Number(Buffer.from(a, 'base64').toString('ascii'));
    const b_n = Number(Buffer.from(b, 'base64').toString('ascii'));
    // console.log(Math.pow(a_n,b_n));
    response = 'This is version 4.1 of the app.' + '\n' + 'The answer to the quis is: ' + Math.pow(a_n,b_n) + '\n';


    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
