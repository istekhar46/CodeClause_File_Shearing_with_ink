const express = require('express');
const {download} = require ('../controller/downloadController.js')

const router =  express.Router() ;


router.route('/:id').get(download).post(download)

module.exports = router


