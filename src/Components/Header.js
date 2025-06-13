import React from "react";
import {Link} from 'react-router-dom';

function Header(props){
    console.log(props);
    return(
        <header style={styles.header}>
            <div>
                <h1>Recepty</h1>
                <h3>{props.name}</h3>
              <nav>
                <ul style={styles.navList}>
                    <li>
                        <Link to="/">Domov</Link>
                        </li>
                        <li>
                        <Link to="/recipes">Vase recepty</Link>
                        </li>
                        <li>
                         <Link to="/about">O aplikacii</Link>
                        </li>
                </ul>
              </nav>
            </div>
        </header>
    )
}

const styles={
    header:{
        background:'#70c466',
        color:'white',
        textAlign:'center',
    },
    navList:{
        display:'flex',
        justifyContent:'center',
        gap: '2em',
    }
}

export default Header;