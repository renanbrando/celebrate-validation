const { celebrate, Joi, Segments } = require('celebrate');

const params = (req, res, next) => {
  return celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    }
  })(req, res, next)
};

module.exports = params;