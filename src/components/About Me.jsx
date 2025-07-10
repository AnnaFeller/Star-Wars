import React, {useEffect, useState} from 'react';


const AboutMe = () => {

    const [loading, setLoading] = useState(true);
    const [heroName, setHeroName] = useState(() =>{
        const localData = localStorage.getItem("heroName");
        if (localData) {
            const storeDate = JSON.parse(localData)
            const time = Date.now()
            const days = 30*24*60*60*1000

            if(time - storeDate.timestamp < days){
                return storeDate.heroName
            }
        }
        return []
    });

async function getHero() {
    const id = Math.floor(Math.random() * 10) + 1
    const res = await fetch(`https://sw-info-api.herokuapp.com/v1/peoples/${id}`)
    const data = await res.json()
    setHeroName(data.map(item => item.name))
}


    useEffect(() => {
        getHero().then(() => console.log('LOADED'))
    }, [])

    useEffect(() => {
        localStorage.setItem('heroName', JSON.stringify({
            heroName:heroName,
            timestamp:Date.now()
        }))
    }, [heroName]);


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