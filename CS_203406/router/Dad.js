import { Router } from "express";
import { getDad } from "../model/Dad.js";



const router = Router();


router.get("/all_dad_orm", async function (req, res) {
  getDad
    .findAll({ attributes: ["name, ap_paternal, ap_maternal, age"] })
    .then((dad) => {
      res.send(dad);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.post("/create_dad_orm", async function (req, res) {
  getDad
    .create({
      id: req.query.id,
      name: req.query.name,
      ap_paternal: req.query.ap_paternal,
      ap_maternal: req.query.ap_maternal,
      age: req.query.age,
    })
    .then(dad => {
      res.send(dad);
  })
  .catch((err) => {
      console.log(err);
  });
});


router.put("/update_dad_orm", async function (req, res) {
  let id = req.query.id;
  let newDato = req.query;
  getDad
    .findOne({
      where: { id: id },
    })
    .then((dad) => {
      res.sendStatus(200);
    });
});


router.delete("/delete_dad_orm", async function (req, res) {
  let id = req.query.id;
  console.log("id" + req.query.id);
  getDad
    .destroy({
      where: {
        id: id,
      },
    })
    .then((r) => {
      _success(req, res, r, 200);
    })
    .catch((err) => {
      _success(req, res, r, 400);
    });
});

export default router;
