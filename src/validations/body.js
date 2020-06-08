const { celebrate, Joi, Segments } = require('celebrate');

const body = (req, res, next) => {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.number().integer().optional(),
      role: Joi.string().empty('').valid('admin', 'user').default('user')
    }),
  }, {
    abortEarly: true
  })(req, res, next)
};

module.exports = body;
