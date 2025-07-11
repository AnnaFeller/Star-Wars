import React, {useEffect, useState} from 'react';

const Contact = () => {

    const [planets, setPlanets] = useState(null)


    useEffect(() => {
        const localData = localStorage.getItem("planets");
        const time = Date.now()
        const days = 30 * 24 * 60 * 60 * 1000

        if (localData) {
            const storeDate = JSON.parse(localData)
            if (time - storeDate.timestamp < days) {
                setPlanets(storeDate.planets)
                return
            }
        }

    async function getPlanets() {
    try {
        const res = await fetch(`https://sw-info-api.herokuapp.com/v1/planets`)
        const data = await res.json()
        const name = data.map(item => item.name);
        setPlanets(name)
        localStorage.setItem('planets', JSON.stringify({
            planets: name,
            timestamp: Date.now()
        }))
    }catch (er){
        console.log('ERROR', er)
    }}
        getPlanets()

    }, []);



    if(!planets){
        return <div>
            <span className="spinner-border spinner-border-sm"></span>
            Loading..
        </div>;
    }



    return (
        <div className="containerName">
            <form onSubmit={e => { e.preventDefault(); }}>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label htmlFor="country">Planet</label>
                <select id="country" name="country">
                    {planets.map((planet, index) => (
                        <option key={index} value={planet}>
                            {planet}
                        </option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;