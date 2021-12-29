import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
    const [heyas, setHeya] = useState([])
    const [sumos, setSumos] = useState([])
    const [selectedHeya, setSelectedHeya] = useState('')

    return (
        <div className="contact">
               <div>
            <div className="card-container"></div>

            <form className="sumo-form" >
                <label htmlFor="name">Name:</label>
                <input 
                    id="name" 
                    type="text" 
                    value={name}
                    placeholder="name"
                    onChange={(event) => setName(event.target.value)}
                />

             <label htmlFor="weight">Weight:</label>
                <input 
                    id="weight" 
                    type="number" 
                    value={weight} 
                    min="0" 
                    placeholder="weight"
                    onChange={(event) => setWeight(event.target.value)}
                />

                <label htmlFor="age">Age:</label>
                <input 
                    id="age" 
                    type="number" 
                    value={age} 
                    min="18" 
                    placeholder="age"
                    onChange={(event) => setAge(event.target.value)}
                />
                <select id="sumo-heya" value={selectedHeya} onChange={(event)=> setSelectedHeya(event.target.value)} >
                        <option value="">Select the heya!</option>

                </select>
                <input type="submit" value="Submit" />
            </form>   
        </div>
        </div>
    )
}
