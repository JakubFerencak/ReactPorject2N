const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB pripojenie
mongoose.connect('mongodb://127.0.0.1:27017/recepty', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB pripojené"))
.catch(err => console.error("❌ Chyba pri pripojení", err));

// Schéma a model
const recipeSchema = new mongoose.Schema({
  name: String,
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// API endpointy
app.get('/recipes', async (req, res) => {
  const recipes = await Recipe.find().sort({ date: -1 });
  res.json(recipes);
});

app.post('/recipes', async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.json(newRecipe);
});

app.delete('/recipes/:id', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Recept zmazaný" });
});

// Spustenie servera
app.listen(PORT, () => {
  console.log(`🚀 Server beží na http://localhost:${PORT}`);
});
