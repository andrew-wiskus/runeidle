import { images } from 'images/images';
import React from 'react';

export class CardSellingTab extends React.Component {
    public render(): JSX.Element {
        return (
            <div
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    display: 'flex',
                    overflowY: 'scroll',
                    flexWrap: 'wrap',
                    padding: 20,
                    height: `calc(100% - 83px)`,
                }}
            >
                // TODO ( sell by skill)
            </div>
        );
    }
}

export const BuyCardButton = (props: { cardPrice: number }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: 15, marginBottom: 40 }}>
            <div style={{ width: 155, height: 200, border: '3px solid black', borderRadius: 6, boxSizing: `border-box` }} />
            <div
                style={{
                    width: 155,
                    height: 50,
                    marginTop: 15,
                    border: '3px solid black',
                    borderRadius: 6,
                    boxSizing: `border-box`,
                }}
            >
                <h1 style={{ fontFamily: 'sans-serif', textAlign: 'center', width: `100%`, fontSize: 30, paddingTop: 7 }}>
                    {props.cardPrice} BP
                </h1>
            </div>
        </div>
    );
};
