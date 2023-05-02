const express = require('express')
const app = express()
const recipes = require('./data/recipes.json')
const cors = require('cors')
const port = 5000


app.use(cors())

app.get('/', (req, res)=>{
    res.send(recipes)
})

app.get('/recipesDetail/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const selectedRecipes = recipes.find(recipe=>parseInt(recipe.id) === id)
    res.send(selectedRecipes)
    
})

app.listen(port,()=>{
    console.log(`Don't worry everything is ok on port : ${port}`)
})