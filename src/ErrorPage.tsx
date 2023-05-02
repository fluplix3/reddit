import React from 'react';

function ErrorPage() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} id="error-page">
            <h1>Oops!</h1>
            <p>Извините, произошла непредвиденная ошибка</p>
            <p>
                <i>404 not found</i>
            </p>
        </div>
    );
}

export default ErrorPage;