const con = require ('../Connect/connect').con;


const create = (req,res) => {
    let clientes = req.body.clientes;
    let telefone = req.body.telefone;
    let quartos = req.body.quartos;
    let reservas= req.body.reservas;
    let estacionamento = req.body.estacionamento
   

    let query =  `INSERT INTO reserva(clientes, telefone, quartos, reservas, estacionamento) VALUES`
    query += `('${clientes}', '${telefone}', '${quartos}', '${reservas}', '${estacionamento}');`;
    con.query(query, (err, result)=>{
        if(err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })

}
const read = (req,res) => {
    con.query('SELECT * FROM reservas', (err, result) =>{
        if(err){
             res.status(500).json(err);
        }else{
            res.json(result)
        }    
    })
}

module.exports={
    create,
    read
}