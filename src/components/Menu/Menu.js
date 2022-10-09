import React from 'react';
import CatagoryFood from '../CatagoryFood/CatagoryFood';
import CountryFood from '../CountryFood/CountryFood';

const Menu = () => {
    return (
        <div>
            <div className='bg-logo-text-color py-8'>
                <p className='text-3xl font-semibold '>Bon appetit!</p>
            </div>
            <div className='flex gap-5 flex-row justify-center  mt-10'>
                <CountryFood></CountryFood>
                <CatagoryFood></CatagoryFood>
            </div>
            
        </div>
    );
};

export default Menu;