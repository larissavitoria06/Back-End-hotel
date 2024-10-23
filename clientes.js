const con = require ('../Connect/connect').con;

const create = (req,res) => {
    let clientes = req.body.titulo;
    let telefone = req.body.autor;
    let quartos = req.body.valor;
    let reservas = req.body.autor;
    let estacionamento = req.body.valor


    let query = `INSERT INTO clientes (clientes, telefone, quartos, reservas, estacionamento) VALUES`
    query += `('${clientes}', '${telefone}', '${quartos}', '${reservas}', '${estacionamento}');`;
    con.query(query, (err, result)=>{
        if(err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })

}
const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) =>{
        if(err){
             res.status(500).json(err);
        }else{
            res.json(result)
        }    
    })
}

module.exports= {
    create,
    read
}