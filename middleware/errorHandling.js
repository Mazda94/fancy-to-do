const { createError } = require('../helper/helper')

module.exports = (err, req, res, next) => {
    switch (err.name) {
        case 'SequelizeValidationError': {
            res.status(400).json(createError(err))
            break
        }

        case 'NotFoundError': {
            res.status(404).json({ message : err.message })
            break
        }

        default: {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }
}