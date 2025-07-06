import React from 'react';
import {starWarsInfo} from "../utils/constant.js";

const StarWars = () => {
    return (
        <div className={'farGalaxy'}>

            {starWarsInfo}
        </div>
    );
};

export default StarWars;