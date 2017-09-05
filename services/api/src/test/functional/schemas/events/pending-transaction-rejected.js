const eventSchema = require('./event');

const body = {
  emails: {
    required: true,
    type: 'string'
  },
  type: {
    required: true,
    type: 'string'
  },
  reason: {
    required: true,
    type: 'string'
  },
  amount: {
    require: true,
    type: 'string'
  }
};

module.exports = eventSchema('user', 'PendingTransactionRejected', body);
