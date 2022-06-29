import { Router } from "express";
import { getUser } from '../model/User.js'


const router = Router();

router.get("/check", function (req, res) {
  res.send({
    success: "exito funciona",
  });
});

router.get("/all_users_orm", async function (reg, res) {
  getUser
    .findAll({
      attributes: ["name", "lastName", "email", "password", "phone_number"],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/insert", async function (req, res) {
  getUser
    .create(
      {
        name: req.query.name,
        lastName: req.query.lastName,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number,
      },
      { fields: ["name", "lastName", "email", "password", "phone_number"] }
    )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/delete", async function(req, res){
  deleteUser
    .delete(
      {
        name: req.query.name,
        lastName: req.query.lastName,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number,

      }
    )
})

router.put('/update_users_orm', async function (req, res) {
  let id = req.query.id;
  let newDato = req.query;
  getUser.findOne({
      where: { id: id },
  })
      .then(users => {
          users.update(newDato)
              .then(newuser => {
                  res.send(newuser)
              })
      })
});

router.delete('/destroy_users_orm', async function (req, res) {
  let id = req.query.id

  getUser.destroy({
      where: { id: id }
  }).then(() => {
      res.send('user delete')
  })
});

export default router;
