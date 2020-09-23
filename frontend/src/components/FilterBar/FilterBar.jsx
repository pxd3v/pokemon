import React from 'react';

const FilterBar = ({ types, setTypes }) => {
    const toggleIsActivatedType = (type) => {
        setTypes(types.map(t => {
            if(t.name === type.name){
                return {...t, active: true}
            }
            return { ...t, active: false };
        }));
    };
    return (
        <ul className="border-yellow-500 border-2 rounded-lg p-2 bg-red-100 grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-3 w-full gap-2">
            {types.map(t => (
                <li
                    className={t.active ? "border-yellow-600 bg-yellow-300 border rounded-lg" : "border-yellow-600 bg-yellow-400 border rounded-lg"}
                    key={t.name}
                >
                    <button 
                        className="flex items-center justify-center p-2 w-full text-yellow-600 font-bold"
                        onClick={() => toggleIsActivatedType(t)}
                    >
                        <div className="flex-1">{t.name}</div>
                        <img className="w-8 h-8 ml-2"src={t.imageUrl} alt={`${t.name} logo`}/>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FilterBar;