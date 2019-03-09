import React from 'react';
import './Characters.css'

function Character(props){
    function resolve(link){
        fetch(link).then(res =>{
            return res.json();
        }).then(data => { return data.results })
    }
    return(
        <div className="character">
            <h3>Name: {props.character.name}</h3>
            <p>Born: {props.character.birth_year}</p>
            <p>Created: {props.character.created}</p>
            <p>Edited: {props.character.edited}</p>
            <p>Eye Color: {props.character.eye_color}</p>
            <p>Films: {props.character.films.map(film => {return(<li>{film}</li>) })}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Height: {props.character.height}</p>
            <p>Homeworld: <li>{props.character.homeworld}</li></p>
            <p>Mass: {props.character.mass}</p>
            <p>Skin Color: {props.character.skin_color}</p>
            <p>Species: {props.character.species.map(type => {return(<li>{type}</li>)})}</p>
            <p>Starhips: {props.character.starships.map(ship => {return(<li>{ship}</li>)})}</p>
            <p>URL: {props.character.url}</p>
            <p>Vehicles: {props.character.vehicles.map(vehic => {return(<li>{vehic}</li>)})}</p>
        </div>
    );
}

export default Character;

