const multer = require('multer');

const upload = multer({ dest: "uploads" })

// const storage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, res, cb)=>{
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage
// })


module.exports = { upload }