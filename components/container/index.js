import React from 'react';

function Container({ children }) {
    return (
        <>
            <div className="container">{children}</div>

            <style jsx>{`
                .container {
                    text-align: center;
                    max-width: 60rem;
                    margin: 0 auto;
                }
            `}</style>
        </>
    );
}

export default Container;
