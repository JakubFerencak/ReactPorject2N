import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    const newRecipe = {
      name,
      title,
      content
    };

    try {
      await axios.post("http://localhost:5000/recipes", newRecipe);
      setShowModal(false);
      setName('');
      setTitle('');
      setContent('');
      navigate("/recipes"); 
    } catch (err) {
      console.error("Chyba pri ukladaní receptu:", err);
    }
  };

  return (
    <div className="container">
      <h2>Vitaj na domovskej stránke!</h2>
      <h3>Pridaj svoj recept</h3>
      <p>Tu môžeš pridať svoj obľúbený recept a zdieľať ho s ostatnými.</p>
      <button className="button" onClick={() => setShowModal(true)}>Pridaj recept</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Nový recept</h3>
            <textarea className="textnameuser" placeholder="Vaše meno" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea className="textname" placeholder="Názov receptu" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="textarea" placeholder="Napíš svoj recept..." value={content} onChange={(e) => setContent(e.target.value)} />
            <br />
            <div className="button-container">
              <button className="button" onClick={() => setShowModal(false)}>Zavrieť</button>
              <button className="button" onClick={handleSave}>Uložiť</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
