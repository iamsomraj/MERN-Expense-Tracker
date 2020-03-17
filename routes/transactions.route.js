const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction.model');

router.route('/').get((req, res, next) => {
  Transaction.find()
    .then(transactions => {
      const message = 'GET request is working';
      return res.status(200).json({
        response: transactions,
        message: message
      });
    })
    .catch(error => {
      return res.status(500).json({
        message: error.message
      });
    });
});

router.route('/').post((req, res, next) => {
  const transaction = new Transaction({
    text: req.body.text,
    amount: req.body.amount
  });
  transaction
    .save()
    .then(response => {
      const message = 'POST request is working';
      return res.status(201).json({
        response: response,
        data: transaction,
        message: message
      });
    })
    .catch(err => {
      return res.status(400).json({
        message: err.message
      });
    });
});

router.route('/:id').delete((req, res, next) => {
  const id = req.params.id;
  Transaction.deleteOne({ _id: id })
    .then(response => {
      const message = 'DELETE request is working';
      return res.status(200).json({
        response: response,
        message: message
      });
    })
    .catch(error => {
      return res.status(500).json({
        message: error.message
      });
    });
});

module.exports = router;
