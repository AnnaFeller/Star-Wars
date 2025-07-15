import {useEffect, useState} from "react";
import {base_url} from "../utils/constant.js";



const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCraw] = useState('Loading...')

    useEffect(() => {//принимает в качестве аргумента call back
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setOpeningCraw(opening_crawl);

        } else {
            const episode = Math.floor(Math.random() * 6) + 1
            fetch(`${base_url}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCraw(data.opening_crawl)
                    sessionStorage.setItem('opening_crawl', data.opening_crawl)

                })
        }

        // return()=> console.log('opening crawl was unmounted')
    }, [])//чтобы монтировался только 1 раз

    if (openingCrawl) {
        return (
            <p className='text-[1.7em] text-justify leading-[1.6]'>{openingCrawl}</p>
        )
    } else {
        return (
            <p className='text-[1.7em] text-justify leading-[1.6]'>{openingCrawl}
                <span className="spinner-border spinner-border-sm"> </span>
                Loading...
            </p>

        )
    }


};

export default OpeningCrawl;