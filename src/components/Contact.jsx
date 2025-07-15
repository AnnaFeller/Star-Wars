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
            } catch (er) {
                console.log('ERROR', er)
            }
        }

        getPlanets()

    }, []);


    if (!planets) {
        return <div>
            <span className="spinner-border spinner-border-sm"></span>
            Loading..
        </div>;
    }


    return (
        <div className='max-w-xl mx-auto p-4 bg-white rounded-lg'>
            <form onSubmit={e => {
                e.preventDefault();
            }}>
                <div>
                    <label htmlFor="fname" className="block text-sm font-medium text-gry-color">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." className="mt-1 block w-full rounded-md border border-black p-1 text-yellow-600"/>
                </div>

                <div>
                    <label htmlFor="lname" className="block text-sm font-medium text-gry-color">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="mt-1 block w-full rounded-md border border-black p-1 text-yellow-600"/>
                </div>



                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gry-color border-black">Planet</label>
                    <select id="country" name="country"  className="mt-1 block w-full rounded-md border border-black p-2 text-yellow-600">
                        {planets.map((planet, index) => (
                            <option key={index} value={planet}>
                                {planet}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gry-color">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." className="mt-1 block w-full rounded-md border border-black p-2 h-32 resize-none text-yellow-600"></textarea>

                </div>




                <div className='text-center '>
                    <input type="submit" value="Submit"  className="bg-green-color hover:bg-gren-color text-white px-4 py-2 p-2x rounded cursor-pointer" />
                </div>


            </form>
        </div>
    );
};

export default Contact;