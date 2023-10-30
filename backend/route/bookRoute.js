import express from 'express';
import { Book } from '../modul/bookModul.js';

const route = express.Router()

route.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Error: title, author, and publishYear ",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.massage });
  }
});
route.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).send({
      length: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.massage });
  }
});
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.massage });
  }
});
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Error: title, author, and publishYear are required",
      });
    }

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Update is successful" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id, req.body);

    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "delete is successful" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

export default route;