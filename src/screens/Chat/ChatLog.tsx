import React, { CSSProperties } from 'react';
import { FirebaseChatMessage } from 'data/DatabaseService';

export const ChatLog = (props: {
    messages: FirebaseChatMessage[];
    onChangeText: (val: any) => void;
    inputValue: any;
    onKeyPress: (val: any) => void;
}) => {
    return (
        <div
            style={{
                height: 300,
                width: 800,
                backgroundColor: '#FFFFFFCC',
                marginTop: 20,
                padding: 10,
                border: `3px solid black`,
                position: 'relative',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    width: `100%`,
                    flexDirection: 'column-reverse',
                    height: 268,
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                }}
                // className='hide-scrollbar'
            >
                {props.messages.map((message, index) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{ paddingTop: 1 }}>{message.timestamp}</p>
                            <h1
                                key={index}
                                style={{
                                    marginLeft: 5,
                                    marginBottom: 10,
                                    fontSize: 18,
                                    fontFamily: 'sans-serif',
                                    fontWeight: 'lighter',
                                    color: '#333333',
                                }}
                            >
                                <b>{message.userName + ':'}</b>
                                <span style={{ fontSize: 14, lineHeight: `16px` }}>{' ' + message.message}</span>
                            </h1>
                        </div>
                    );
                })}
            </div>
            <input
                type='text'
                style={styles.input}
                placeholder={'Say something...'}
                onChange={(val) => props.onChangeText(val)}
                value={props.inputValue}
                onKeyPress={(key) => props.onKeyPress(key)}
            />
        </div>
    );
};

const styles = {
    input: {
        height: 40,
        position: 'absolute',
        bottom: -40,
        border: '3px solid black',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        outline: 'none',
        paddingLeft: 20,
        width: 800,
        marginLeft: -3,
    } as CSSProperties,
};
