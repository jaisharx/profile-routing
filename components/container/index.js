import React from 'react';

function Container({ children }) {
    return (
        <>
            <div className="container">{children}</div>

            <style jsx>{`
                .container {
                    padding: 1.6rem;
                    display: grid;
                    place-items: center;
                    min-height: 100vh;
                    max-width: 60rem;
                    margin: 0 auto;
                }
            `}</style>
        </>
    );
}

export default Container;
