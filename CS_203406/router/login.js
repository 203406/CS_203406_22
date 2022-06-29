/*import { Router } from "express";
import { getlogin } from "../model/login.js";



const router = Router();

router.get("/all_login_orm", async function (req, res) {
  getlogin
    .findAll({ attributes: ["user, password"] })
    .then((login) => {
      res.send(login);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.post("/create_login_orm", async function (req, res) {
  getlogin
    .create({
      id: req.query.id,
      user: req.query.user,
      password: req.query.password,
    })
    .then((r) => {
      _success(req, res, r, 200);
    })
    .catch((err) => {
      _success(req, res, r, 400);
    });
});


router.put("/update_login_orm", async function (req, res) {
  let id = req.query.id;
  let newDato = req.query;
  getlogin
    .findOne({
      where: { id: id },
    })
    .then((login) => {
      res.sendStatus(200);
    });
});


router.delete("/delete_login_orm", async function (req, res) {
  let id = req.query.id;
  console.log("id" + req.query.id);
  getlogin
    .destroy({
      where: {
        id: id,
      },
    })
    .then((r) => {
      _success(req, res, r, 200);
    })
    .catch((err) => {
      _success(req, res, err, 400);
    });
});

export default router;*/