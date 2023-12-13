const express = require("express");
const serverResponses = require("../utils/helpers/responses");
const messages = require("../config/messages");
const { Todo } = require("../models/todos/todo");
const { Budget } = require("../models/budgets/budget");


const routes = (app) => {
  const router = express.Router();

  router.post("/todos", (req, res) => {
    const todo = new Todo({
      text: req.body.text,
    });

    todo
      .save()
      .then((result) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, result);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.post("/budget", (req, res) =>{
    const budget = new Budget({
      AñoFin: req.body.AñoFin,
      AñoInicio: req.body.AñoInicio,
      DetallePresupuesto: req.body.DetallePresupuesto,
      FechaRegistro: req.body.currentDate,
      total: req.body.total,
      TipoCambioDolar: req.body.TipoCambioDolar
    })
    budget
    .save()
    .then((result) =>{
      serverResponses.sendSuccess(res, messages.SUCCESSFUL, result);      
    })
    .catch((e) => {
      serverResponses.sendError(res, messages.BAD_REQUEST, e);
    });
  })

  router.get("/", (req, res) => {
    Todo.find({}, { __v: 0 })
      .then((todos) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, todos);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });
  
  router.get("/budgets", (req, res) => {
    Budget.find({}, { __v: 0 })
      .then((budgets) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, budgets);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.get("/budget/last", (req, res) => {
    Budget.findOne().sort({'FechaRegistro': -1})
      .then((budgets) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, budgets);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  //it's a prefix before api it is useful when you have many modules and you want to
  //differentiate b/w each module you can use this technique
  app.use("/api", router);
};
module.exports = routes;
