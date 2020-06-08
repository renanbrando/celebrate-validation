const { celebrate, Joi, Segments } = require('celebrate');

const headers = (req, res, next) => {
  return celebrate({
    [Segments.HEADERS]: Joi.object({
      'x-api-key': Joi.string().token().required()
    }).unknown()
  })(req, res, next)
};

module.exports = headers;
