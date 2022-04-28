const express = require('express');
const app = express();
const {db, Page, User} = require('./models')
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users')



db.authenticate().then(()=> {
  console.log('connected to the database')
})

app.use(express.static("stylesheets"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res,next)=> {
  res.redirect('/wiki')
})

app.use('/wiki', wikiRouter);
app.use('/users', userRouter)

const init = async() => {
  await db.sync({force:true})
  const PORT = 3000;
app.listen(PORT, () => {
  console.log('Listening to PORT ', PORT)
})
}

init()
