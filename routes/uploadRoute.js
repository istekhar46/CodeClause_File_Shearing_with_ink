const express = require('express');
const {uploadFile} = require ('../controller/uploadController')
const {upload} = require('../middleware/multerMiddleware');

const router = express.Router();

router.route('/').post(upload.single('file'), uploadFile)


module.exports = router