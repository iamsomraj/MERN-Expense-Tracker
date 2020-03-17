const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    amount: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
