import express from 'express';
import {promises as fspromise} from 'fs';
import csv from 'csvtojson';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const path = require('path');
const filename = "./users.csv";
//const directorio = path.dirname(filename);
const app = express();
const port = 3000;
//const input = './users.csv';
const output = 'logger/users.json';


app.get('/convert', (req, res) => {

    res.send('convert');
    csv()
    .fromFile(filename)
    .then(resultado => {
        
       let data = resultado.map(convertir(resultado));            
        
       fspromise.writeFile(output,JSON.stringify(data));
 
    });    
});

function convertir(item) {

    let nombre: string = item.first_name;
    let apellido1: string = item.last_name;
    let telefono: string = item.phone;

    if(item.phone === "") {

        telefono = "missing data";
    }
    console.log(nombre);
    return {nombre,apellido1,telefono};
}


app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
});
