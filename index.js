/*import express from 'express';

const fulano = express()

fulano.get('/' , (req, res) => {
    res.send('Seja bem vindo(a) ao meu ap!')
})

fulano.listen(3000, () => {
     console.log('rodando')
    });

*/

import express from 'express';

const fulano = express();

fulano.get('/', (req, res) => {
    res.send('Seja bem vindo(a) ao meu ap!');
});

fulano.get('/products', (req, res) => {
    res.send('Aqui estão os produtos!');
});

fulano.listen(3000, () => {
    console.log('rodando');
});
