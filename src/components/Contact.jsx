import React, {useEffect, useState} from 'react';

const Contact = () => {

    const [planets, setPlanetName] = useState([])
    // const [loading, setLoading] = useState(true);


    async function getPlanets() {
        const res = await fetch(`https://sw-info-api.herokuapp.com/v1/planets`)
        const data = await res.json()
        setPlanetName(data.map(item => item.name ))
    }

    useEffect( () => {
            getPlanets().then(() => console.log('Were loaded'))
         }, [])


            // .then(res => res.json())
            // .then(data => { setPlanetName(data) ; setLoading(false) })
            // .catch(err => {
            //     console.log(err)
            //     setPlanetName('ERROR')
            //     setLoading(false);
            // })




    // if(loading){
    //     return <div>
    //         <span className="spinner-border spinner-border-sm"></span>
    //         Loading..
    //     </div>;
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();}



    return (
        <div className="containerName">
            <form onSubmit={e => { e.preventDefault(); }}>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label htmlFor="country">Planet</label>
                <select id="country" name="country">
                    {planets.map((planetName, index) => (
                        <option key={index} value={planetName}>
                            {planetName}
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