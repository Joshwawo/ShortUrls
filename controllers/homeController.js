const Url = require('../models/Url')
const { nanoid } = require('nanoid');

const leerUrls = async (req, res) => {
    try {
        const urls = await Url.find().lean()
        return res.render('home', { urls: urls});

    } catch (error) {
        console.log(error)
        res.send('fallo algo')
    }

}

const agregarUrl = async (req, res) => {

    const { origin } = req.body
    // console.log(req.body)

    try {
        // const { nanoid } = require('nanoid');
        const url = new Url({ origin: origin, shortUrl: nanoid(8) });
        await url.save();
        res.redirect('/');
    } catch (error) {
        console.log(error)
        res.send('error algo fallo')

    }

}

const eliminarUrl = async (req, res) => {

    const { id } = req.params;

    try {

        await Url.findByIdAndDelete(id);
        res.redirect('/');

    } catch (error) {
        console.log(error)
        res.send('algo salio mal elimando la url');
    }
}

const editarUrlForm = async (req, res) => {

    const { id } = req.params;

    try {
        const url = await Url.findById(id).lean();
        res.render('home', { url })
        console.log(url)
    } catch (error) {
        console.log(error)
        res.send('algo salio mal al editar')
    }
}

const editarUrl = async (req, res) => {

    const { id } = req.params;
    const { origin } = req.body
    try {

        await Url.findByIdAndUpdate(id, { origin: origin })
        res.redirect('/');


    } catch (error) {
        console.log(error)
        res.send('algo salio mal al editar')
    }
}

const redirecionamiento = async (req, res) => {
    const { shortUrl } = req.params

    try {
        const urlDb = await Url.findOne({ shortUrl: shortUrl })
        res.redirect(urlDb.origin)
    } catch (error) {

    }
}

module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redirecionamiento

}