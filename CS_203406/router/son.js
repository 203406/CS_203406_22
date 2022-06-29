import { Router } from "express";
import { getson } from "../model/son.js";


const router = Router();


router.get('/all_son_orm', async function (req, res) {
  getson.findAll({ attributes: ['name', 'ap_paternal', 'ap_maternal', 'age'] })
    .then((dad) => {
      res.send(dad);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/create_son_orm', async function (req, res) {
  getson.create({
      id: req.query.id,
      name: req.query.name,
      ap_paternal: req.query.ap_paternal,
      ap_maternal: req.query.ap_maternal,
      age: req.query.age,

      catFatherId: req.query.catFatherId
    })
    .then(father => {
      res.send(father);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.put('/update_son_orm', async function (req, res) {
  let id = req.query.id;
  let newDato = req.query;
  getson.findOne({
    where: { id: id },
  })
    .then(son => {
      son.update(newDato)
        .then(newson => {
          res.send(newson)
        })
    })
});


router.delete('/delete_son_orm', async function (req, res) {
  let id = req.query.id;
  //console.log("id" + req.query.id);

  getson.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.send('delete succes')
  })

});

export default router;
