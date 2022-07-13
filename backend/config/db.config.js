const env = require("./env.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.user = require("../model/user.model.js")(sequelize, Sequelize);
db.product= require("../model/product.model.js")(sequelize, Sequelize);
db.service=require("../model/serviceAbility.model.js")(sequelize, Sequelize);
db.admin=require("../model/admin.model.js")(sequelize, Sequelize);
module.exports = db;
