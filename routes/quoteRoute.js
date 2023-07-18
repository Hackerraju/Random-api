const express = require("express");
const Quote = require('../models/quotesModel')
const router = express.Router();

router.post("/create-quote", async (req, res) => {
    try {
      const quote = await Quote.create(req.body);
      res.status(200).json(quote);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  router.get('/quote/:id', async(req, res) =>{
    try {
      const {id} = req.params;
      const quote = await Quote.findById(id)
      res.status(200).json(quote)
      Quote.view++
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  })

  router.get('/quotes', async(req, res) =>{
    try {
        const quotes = await Quote.find({})
        res.status(200).json(quotes)
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  })

  module.exports = router;