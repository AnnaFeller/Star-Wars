import React, {useEffect, useState} from 'react';

const AboutMe = () => {
    const [heroName, setHeroName] = useState('')
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const id = Math.floor(Math.random() * 10) + 1
        fetch(`https://sw-info-api.herokuapp.com/v1/peoples/${id}`)
            .then(res => res.json())
            .then(data => { setHeroName(data) ; setLoading(false) })
            .catch(err => {
                console.log(err)
                setHeroName('ERROR')
                setLoading(false);
            })

    }, [])


    if(loading){
        return <div>
            <span className="spinner-border spinner-border-sm"></span>
            Loading..
        </div>;
    }

    return (
        <div className="hero">
            <h2>{heroName.name}</h2>
            <p><strong>Height:</strong> {heroName.height}</p>
            <p><strong>Mass:</strong> {heroName.mass}</p>
            <p><strong>Hair Color:</strong> {heroName.hair_color}</p>
            <p><strong>Skin Color:</strong> {heroName.skin_color}</p>
            <p><strong>Eye Color:</strong> {heroName.eye_color}</p>
            <p><strong>Birth Year:</strong> {heroName.birth_year}</p>
            <p><strong>Gender:</strong> {heroName.gender}</p>
        </div>
    );
};

export default AboutMe;