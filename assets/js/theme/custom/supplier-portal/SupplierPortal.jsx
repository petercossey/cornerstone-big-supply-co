import React, { useState } from 'react';

const SupplierPortal = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className="supplier-portal">
            <h1>Supplier Portal</h1>
            
            <div className="counter-test">
                <h2>React Test Counter</h2>
                <div>
                <span className="counter-value" style={{fontSize: '20px'}}>{count}</span>
                </div>
                <div className="counter-controls">
                    <button 
                        type="button" 
                        onClick={handleDecrement}
                        className="button button--primary"
                    >
                        -
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={handleIncrement}
                        className="button button--primary"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SupplierPortal;