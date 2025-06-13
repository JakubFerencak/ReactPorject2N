import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Recipes.css'; // Externé CSS

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [openRecipeId, setOpenRecipeId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios.get("http://localhost:5000/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Chyba pri načítaní receptov:", err));
  };

  const toggleRecipe = (id) => {
    setOpenRecipeId(prev => (prev === id ? null : id));
  };

  const handleDeleteClick = (id) => {
    setRecipeToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/recipes/${recipeToDelete}`);
      setRecipes(recipes.filter((r) => r._id !== recipeToDelete));
      setShowConfirm(false);
      setRecipeToDelete(null);
    } catch (err) {
      console.error("Chyba pri mazaní receptu:", err);
    }
  };

  return (
    <div className="container">
      <h2>Všetky recepty</h2>
      {recipes.length === 0 ? (
        <p>Žiadne recepty zatiaľ neboli pridané.</p>
      ) : (
        <ul>
          {recipes.map((r) => (
            <li key={r._id} className="recipe-item">
              <div className="recipe-header">
                <strong className="recipe-title" onClick={() => toggleRecipe(r._id)}>
                  {r.title}
                </strong>
                <button onClick={() => handleDeleteClick(r._id)} className="delete-button">
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>

              {openRecipeId === r._id && (
                <div className="recipe-content">
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

      {showConfirm && (
        <div className="modal-window">
          <div className="modal-notification">
            <p>Ste si istý, že chcete recept vymazať?</p>
            <button className="button" onClick={confirmDelete}>Vymazať</button>
            <button className="button" onClick={() => setShowConfirm(false)}>Zatvorit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipes;
