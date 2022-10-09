import React from 'react';
import { Link } from 'react-router-dom';
import CatagoryFood from '../CatagoryFood/CatagoryFood';
import CountryFood from '../CountryFood/CountryFood';

const Menu = () => {
    return (
        <div>
            <div className='bg-logo-text-color py-8'>
                <p className='text-3xl font-semibold '>Bon appetit!</p>
            </div>
            <div className='flex gap-8 flex-row justify-center  mt-10'>
                <Link to='/menu/countryfood'><CountryFood></CountryFood></Link>
                <Link to='/menu/catagoryfood'><CatagoryFood></CatagoryFood></Link>
            </div>
        </div>
    );
};

export default Menu;