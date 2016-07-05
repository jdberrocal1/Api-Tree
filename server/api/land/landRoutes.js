var router = require ('express').Router();
var logger = require ('../../util/logger');
var controller = require('./landController');

router.param('id', controller.paramsId);
router.param('ownerId', controller.paramsOwnerId);

router.route('/')
  .post(controller.post);

  router.route('/:ownerId')
    .get(controller.get);

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete);

module.exports=router;
