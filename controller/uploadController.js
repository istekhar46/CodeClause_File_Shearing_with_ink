const File = require('../models/File');
const crypt = require('bcrypt');



const uploadFile = async (req, res) => {

    const fileData = {
        path: req.file.path,
        oringinalName: req.file.oringinalname,
    }

    if (req.body.password != null && req.body.password != '') {
        fileData.password = await crypt.hash(req.body.password, 10)
    }

    const file = await File.create(fileData)
    res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` })
    
}

module.exports = {
    uploadFile,
}