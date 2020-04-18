import React, { CSSProperties } from 'react';
import { Star } from 'shared_components/Star';

export const CardName = (props: { name: string; starCount: number; styles: any }) => {
    return (
        <p style={props.styles.cardText}>
            {props.name + ' '}
            {new Array(props.starCount).fill('').map((x) => {
                return <Star />;
            })}
        </p>
    );
};
