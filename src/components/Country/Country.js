import React from 'react';

const Country = ({country}) => {
    return (
        <div className='cursor-pointer text-2xl font-semibold border-2 border-main-color p-2'>
            <p>{country.strArea}</p>
        </div>
    );
};

export default Country;