import React from 'react';

export class RRHomePage extends React.Component {
    public render(): JSX.Element {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, textAlign: 'center', fontSize: 47, color: 'white' }}
                >
                    <br />
                    RoversRescues Baby <br />
                    <br /> feed the dog
                </h1>
                <p></p>
                <img
                    style={{ width: `100%`, objectFit: 'contain' }}
                    src='https://images.dog.ceo/breeds/papillon/n02086910_3478.jpg'
                />
            </div>
        );
    }
}
