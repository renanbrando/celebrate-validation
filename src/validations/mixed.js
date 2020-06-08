const { celebrate, Joi, Segments } = require('celebrate');

const mixed = (req, res, next) => {
  return celebrate({
    [Segments.HEADERS]: Joi.object({
      'x-api-key': Joi.string().token().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.number().integer().optional(),
      role: Joi.string().empty('').valid('admin', 'user').default('user')
    }),
  })(req, res, next)
};

module.exports = mixed;