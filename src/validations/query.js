const { celebrate, Joi, Segments } = require('celebrate');

const query = (req, res, next) => {
  return celebrate({
    [Segments.QUERY]: {
      search: Joi.string().optional().trim(),
      page: Joi.number().integer().default(0),
      records: Joi.number().integer().optional().default(15)
    }
  })(req, res, next)
};

module.exports = query;