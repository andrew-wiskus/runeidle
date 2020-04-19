import React from 'react';

export const ChatLog = (props: {
    messages: string[];
    onChangeText: (val: any) => void;
    inputValue: any;
    onKeyPress: (val: any) => void;
}) => {
    return (
        <div
            style={{
                height: 300,
                width: 760,
                backgroundColor: 'white',
                margin: 20,
                marginTop: 0,
                padding: 20,
                border: `3px solid black`,
                borderTop: 'none',
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
                }}
            >
                {props.messages.map((message, index) => {
                    return (
                        <h1 key={index} style={{ marginBottom: 10, fontSize: 22, fontFamily: 'sans-serif' }}>
                            {message}
                        </h1>
                    );
                })}
            </div>
            <input
                type='text'
                style={{
                    height: 40,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: `calc(100% - 20px)`,
                    border: 'none',
                    borderTop: `3px solid black`,
                    backgroundColor: 'white',
                    outline: 'none',
                    paddingLeft: 20,
                }}
                placeholder={'say hello to the BEEG'}
                onChange={(val) => props.onChangeText(val)}
                value={props.inputValue}
                onKeyPress={(key) => props.onKeyPress(key)}
            />
        </div>
    );
};
