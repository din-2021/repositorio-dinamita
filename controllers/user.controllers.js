const ctrlHome = {};


ctrlHome.rutaGet = async (req, res) => {
    const enviar = "Servidor Express funcionando"    
    res.send(enviar);
}

module.exports = ctrlHome;