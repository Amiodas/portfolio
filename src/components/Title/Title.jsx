import React from 'react';

const Title = ({title, description}) => {
    console.log(title);
    return (
        <div className='mb-5'>
            <div className='text-center'>
                <h2 className="text-5xl font-bold text-teal-500 mb-3">{title}</h2>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default Title;