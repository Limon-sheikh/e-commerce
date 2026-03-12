import React from 'react';

const Button = ({title, icon, className}) => {
    const Icon = icon;
    return (
        <div>
            <button className='flex items-center gap-2 capitalize bgprcolor text-white px-5 py-2 rounded-md cursor-pointer'>
                <Icon className={className}/>
                {title}
            </button>
        </div>
    );
};

export default Button;