const eventSchema = require('./event');

const body = {
  cxc_emails: {
    required: true,
    type: 'string'
  },
  investor_emails: {
    required: true,
    type: 'string'
  },
  invoice_number: {
    required: true,
    type: 'string'
  },
  invoice_id: {
    required: true,
    type: 'integer'
  },
  cxc_payment: {
    required: true,
    type: 'string'
  },
  investor_payment: {
    required: true,
    type: 'string'
  }
};

module.exports = eventSchema('user', 'InvoiceCompleted', body);
