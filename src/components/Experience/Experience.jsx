import React from 'react';

const Experience = () => {
    return (
        <div className='container grid grid-cols-2 gap-5 min-h-screen mx-auto'>
            <div className=''>
                <h1 className='text-5xl font-bold mb-8'>My Experience</h1>
                <div className='card border p-5 space-y-2'>
                    <p className='text-teal-500 text-2xl font-bold'>2020 - 2022</p>
                    <p className='text-white text-3xl font-bold'>Frontend Engineer</p>
                    <p className='text-xl'>Console IT, Sylhet.</p>
                </div>
            </div>
            <div className=''>
                <h1 className='text-5xl font-bold mb-8'>My Education</h1>
                <div className='card border p-5 space-y-2'>
                    <p className='text-teal-500 text-2xl font-bold'>2017 - 2022</p>
                    <p className='text-white text-3xl font-bold'>Bsc in Computer Science and Engineering</p>
                    <p className='text-xl'>Metroploitan University, Sylhet.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;