const File = require('../models/File');
const crypt = require('bcrypt');


const download = async(req, res)=>{

    const file = await File.findById(req.params.id)

    if(file.password != null){
        if(req.body.password == null){
            res.render("password")
            return
        }

        if(!(await crypt.compare(req.body.password, file.password))){
            res.render("password", { error: true })
            return
        }
    }

    file.downloadCount++
    await file.save()

    res.download(file.path, file.originalName)
}


module.exports = { download}

