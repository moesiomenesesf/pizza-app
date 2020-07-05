const express = require("express");
const app = express();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const massas = [
                    {
                        id: 1,
                        nome: "Massa Napolitana",
                        preco: 7
                    },
                    {
                        id: 2,
                        nome: "Massa Nova-Iorquina",
                        preco: 8
                    },
                    {
                        id: 3,
                        nome: "Massa Siciliana",
                        preco: 9
                    }
                ];

const tamanhos = [
                    {
                        id: 1,
                        nome: "Pequena",
                        rendimento: 6,
                        preco: 8
                    },
                    {
                        id: 2,
                        nome: "Média",
                        rendimento: 8,
                        preco: 10
                    },
                    {
                        id: 3,
                        nome: "Grande",
                        rendimento: 10,
                        preco: 12
                    },
                    {
                        id: 4,
                        nome: "Família",
                        rendimento: 12,
                        preco: 14
                    },
                    {
                        id: 5,
                        nome: "Gigante",
                        rendimento: 16,
                        preco: 16
                    }
                ];

const sabores = [
                    {
                        id: 1,
                        nome: "Calabresa",
                        ingredientes: ["Calabresa", "Muzzarela", "Cebola", "Orégano"],
                        preco: 4
                    },
                    {
                        id: 2,
                        nome: "Frango",
                        ingredientes: ["Frango", "Muzzarela", "Ricota", "Orégano"],
                        preco: 5
                    },
                    {
                        id: 3,
                        nome: "Bacon",
                        ingredientes: ["Bacon", "Muzzarela", "Orégano"],
                        preco: 5
                    },
                    {
                        id: 4,
                        nome: "Peito de Peru",
                        ingredientes: ["Peito de Peru", "Muzzarela", "Catupiry", "Orégano"],
                        preco: 5
                    },
                    {
                        id: 5,
                        nome: "Paulista",
                        ingredientes: ["Calabresa", "Muzzarela", "Bacon" , "Milho Verde", "Frango", "Cebola", "Orégano"],
                        preco: 8
                    }
                ];

const incrementos = [
    {
        id: 1,
        nome: "Bacon",
        preco: 2
    },
    {
        id: 2,
        nome: "Batata Palha",
        preco: 1
    },
    {
        id: 3,
        nome: "Cheddar",
        preco: 3
    },
    {
        id: 4,
        nome: "Milho Verde",
        preco: 2
    }
];

app.get('/massas', function (req, res){
    res.json(massas);
});

app.get('/tamanhos', function (req, res){
    res.json(tamanhos);
});

app.get('/sabores', function (req, res){
    res.json(sabores);
});

app.get('/incrementos', function (req, res){
    res.json(incrementos);
});

app.get('/recomendacao', function (req, res){
    res.json({
                sabor: "Peito de Peru",
                tamanho: "Gigante",
                massa: "Napolitana",
                preco: 20.90,
                pontos: 5
    })
});

app.listen(3333, function(){
   console.log("running"); 
});