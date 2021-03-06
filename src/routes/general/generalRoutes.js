/* ---------------------------------------------------------------------------------------------- */
/*                                            REQUIRES                                            */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Express ------------------------------------------ */
const express = require('express')                              // Express HTTP/S Server
const { isNotAuth, isAuth } = require('../../utils/auth')

/* ---------------------------------------------------------------------------------------------- */
/*                                         INITIALIZATIONS                                        */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Express ------------------------------------------ */
const router = express.Router()

/* ---------------------------------------------------------------------------------------------- */
/*                                             ROUTES                                             */
/* ---------------------------------------------------------------------------------------------- */
router.route('/')
    .get(require('./index'))

router.route('/index')
    .get(require('./index'))

router.route('/catalogue')
    .get(require('./catalogue'))

router.route('/pricing')
    .get(require('./pricing'))

router.route('/about')
    .get(require('./about'))

router.route('/tos')
    .get(require('./tos'))

router.route('/privacy')
    .get(require('./privacy'))

router.route('/editor/:course/:chapter/:lesson')
    .get(require('./editor'))

router.route('/course/:course')
    .get(require('./courseDescription'))

router.route('/finish/:course')
    .get(require('./finishCourse'))

router.route('/login')
    .get(isNotAuth, require('./login'))

router.route('/signup')
    .get(isNotAuth, require('./signup'))

router.route('/user/:requestedUser')
    .get(require('./user'))

router.route('/settings')
    .get(isAuth, require('./settings'))

/* ---------------------------------------------------------------------------------------------- */
/*                                             EXPORTS                                            */
/* ---------------------------------------------------------------------------------------------- */
module.exports = router