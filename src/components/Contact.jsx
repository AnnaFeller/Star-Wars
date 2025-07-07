import React, {useEffect, useState} from 'react';

const Contact = () => {

    const [planets, setPlanetName] = useState('')
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://sw-info-api.herokuapp.com/v1/planets`)
            .then(res => res.json())
            .then(data => { setPlanetName(data) ; setLoading(false) })
            .catch(err => {
                console.log(err)
                setPlanetName('ERROR')
                setLoading(false);
            })

    }, [])


    if(loading){
        return <div>
            <span className="spinner-border spinner-border-sm"></span>
            Loading..
        </div>;
    }
    const handleSubmit = (e) => {
        e.preventDefault();}



    return (
        <div className="containerName">
            <form onSubmit={handleSubmit}>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                    {planets.map((planet) => (
                        <option key={planet.id} value={planet.name}>
                            {planet.name}
                        </option>

                        ))}


                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default Contact;