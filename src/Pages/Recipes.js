import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [openRecipeId, setOpenRecipeId] = useState(null); 

  useEffect(() => {
    axios.get("http://localhost:5000/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Chyba pri načítaní receptov:", err));
  }, []);

  const toggleRecipe = (id) => {
    setOpenRecipeId(prev => (prev === id ? null : id));
  };

  return (
    <div className="container">
      <h2>Všetky recepty</h2>
      {recipes.length === 0 ? (
        <p>Žiadne recepty zatiaľ neboli pridané.</p>
      ) : (
        <ul>
          {recipes.map((r) => (
            <li key={r._id} onClick={() => toggleRecipe(r._id)} style={{ cursor: 'pointer', marginBottom: '1rem' }}>
              <strong>{r.title}</strong>
              {openRecipeId === r._id && (
                <div style={{ marginTop: '0.5rem' }}>
                  <em>od {r.name}</em><br />
                  {r.content}<br />
                  <small>{new Date(r.date).toLocaleString()}</small>
                </div>
              )}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recipes;
