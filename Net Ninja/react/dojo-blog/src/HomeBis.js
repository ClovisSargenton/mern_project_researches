import { useState } from 'react';

const HomeBis = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClic = () => {
        setName('luigi');
        setAge(30);
    };
    const handleClicAgain = (name, e) => {
        console.log(`Hello ${name}`, e.target);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age }</p>
            <button onClick={ handleClic }>Click Me!</button>
            <button onClick={(e) => {handleClicAgain('Clovis', e)}}>Click Me Again!</button>
        </div>
    );
}

export default HomeBis