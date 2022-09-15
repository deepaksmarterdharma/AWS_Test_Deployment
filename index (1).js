const express =  require('express')
const morgan =  require('morgan')
const app = express()
const port =  3000
app.use(morgan('dev'))

app.get('/employee', (req, res) => {
    let result = {id:1,name:'emp 1'}
    console.log(`route- EMP_DETAILS, DB - ${process.env.DB_NAME}`)
    res.status(200).json(result)
})

app.listen(port, () => {
console.log(`app is listening on port at http://localhost:${port}`)
})