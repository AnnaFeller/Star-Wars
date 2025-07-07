import {useEffect, useState} from "react";
import {base_url} from "../utils/constant.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCraw] = useState('Loading...')

    useEffect(() => {//принимает в качестве аргумента call back
        const episode = Math.floor(Math.random() * 6) + 1
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCraw(data.opening_crawl))
    // return()=> console.log('opening crawl was unmounted')
    },[])//чтобы монтировался только 1 раз

    if(openingCrawl){
        return (
            <p className='farGalaxy'>{openingCrawl}</p>
        )
    }else{
        return (
            <p className={'farGalaxy'}>{openingCrawl}
                <span className="spinner-border spinner-border-sm"> </span>
                Loading...
            </p>

        )
    }




};

export default OpeningCrawl;