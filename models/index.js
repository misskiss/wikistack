const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {type: Sequelize.STRING} ,
  slug: {type: Sequelize.STRING},
  content: {type: Sequelize.TEXT},
  status: {type: Sequelize.ENUM('open','closed')}
})

const User= db.define('user', {
  name: {type: Sequelize.STRING},
  email: {type: Sequelize.STRING}
})

db.authenticate().
then(() => {
  console.log('connected to the database');
  //console.log(db);
})


module.exports = { Page, User };

//other way module.exports = { db };