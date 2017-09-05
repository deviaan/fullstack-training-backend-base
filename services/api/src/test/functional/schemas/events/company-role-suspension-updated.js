const eventSchema = require('./event');

const body = {
  emails: {
    required: true,
    type: 'string'
  },
  company_rfc: {
    required: true,
    type: 'string'
  },
  suspended: {
    required: true,
    type: 'boolean'
  },
  role: {
    required: true,
    type: 'string'
  }
};

module.exports = eventSchema('user', 'CompanyRoleSuspensionUpdated', body);