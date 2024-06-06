const soma = (req, res) => {
    const result = 100 + 1;
    const soma = 2 +2 ;
    res.send({result : result})
}
const subtrai = (req, res) => {
    const result = 8 - 1;
    res.send({result : result})
}

const multiplica = (req, res) => {
    const result = 8 * 8;
    // res.send({result : result})
    return result;
}
const raiz = (req, res) => {
    let x = multiplica(req, res);
    console.log(x);
    const result = Math.sqrt(x);
    res.send({result : result})
}

module.exports = {
    soma,  //function
    subtrai, //function
    multiplica, //function
    raiz //function
}