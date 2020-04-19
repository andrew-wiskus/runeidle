import React, { CSSProperties } from 'react';
import { images } from 'images/images';

interface Props {
    header: string;
    defaultShown?: boolean;
}

interface State {
    isHidden: boolean;
}

export class CollapsableHeader extends React.Component<Props, State> {
    public state: State = {
        isHidden: this.props.defaultShown ? false : true,
    };

    private onClick = () => {
        this.setState({ isHidden: !this.state.isHidden });
    };

    public render(): JSX.Element {
        let expandedStyle = this.state.isHidden ? styles.hidden : styles.shown;

        return (
            <div style={{}}>
                <div style={styles.container} onClick={this.onClick}>
                    <img style={styles.button} src={this.state.isHidden ? images.plus_button : images.minus_button}></img>

                    <h1 style={styles.header}>{this.props.header}</h1>
                </div>
                <div style={expandedStyle}>{this.props.children}</div>
            </div>
        );
    }
}

const styles = {
    hidden: {
        display: 'none',
    } as CSSProperties,
    shown: {
        display: 'flex',
        width: `100%`,
    } as CSSProperties,
    container: {
        height: 50,
        width: 780,
        marginLeft: 20,
        border: '3px solid black',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 20,
        cursor: 'pointer',
    } as CSSProperties,
    button: {
        height: 35,
        width: 35,
        outline: 'none',
        backgroundColor: 'white',
        fontSize: 28,
        fontStyle: 'bold',
        fontFamily: 'sans-serif',
    } as CSSProperties,
    header: {
        fontSize: 22,
        fontFamily: 'sans-serif',
        paddingLeft: 30,
    } as CSSProperties,
};
