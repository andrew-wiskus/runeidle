import React, { CSSProperties } from 'react';
import { getPuzzle } from './ArcheologyPuzzleData';

const CONTAINER_SIZE = 350;

interface GridInput {
    x: number;
    y: number;
    filled: boolean;
    removed: boolean;
}

interface State {
    puzzle: {
        topRow: string[];
        leftRow: string[];
        playerInput: GridInput[];
    };
}

export class ArcheologyPannel extends React.Component<{}, State> {
    public state = {
        puzzle: {
            topRow: [] as string[],
            leftRow: [] as string[],
            playerInput: [] as GridInput[],
        },
    };

    private generatePuzzle() {
        let puzzle = getPuzzle(5);
        this.setState(
            {
                puzzle: {
                    topRow: puzzle.topRow,
                    leftRow: puzzle.leftRow,
                    playerInput: [],
                },
            },
            () => {
                console.log('STATE', this.state);
            }
        );
    }

    componentDidMount() {
        if (this.state.puzzle.topRow.length == 0) {
            this.generatePuzzle();
        }
    }

    private onClickSquare = (x: number, y: number) => {
        let input = this.state.puzzle.playerInput;
        let index = input.findIndex((pos) => pos.x == x && pos.y == y);

        if (index == -1) {
            input.push({
                x: x,
                y: y,
                filled: true,
                removed: false,
            });
        } else {
            let pos = input[index];
            if (pos.filled) {
                input[index].filled = false;
                input[index].removed = true;
            } else if (pos.removed) {
                input[index].removed = false;
            } else {
                input[index].filled = true;
            }
        }

        let puzzle = { ...this.state.puzzle };
        puzzle.playerInput = input;
        this.setState({ puzzle: puzzle });
    };

    private isSelected = (x: number, y: number) => {
        return this.state.puzzle.playerInput.some((pos) => pos.filled == true && pos.x == x && pos.y == y);
    };

    private isRemoved = (x: number, y: number) => {
        return this.state.puzzle.playerInput.some((pos) => pos.removed == true && pos.x == x && pos.y == y);
    };

    private solvePuzzle = () => {
        // typing this now, this is gonna b messy.
        //
    };

    private renderGame() {
        let count = this.state.puzzle.topRow.length;

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                }}
            >
                {this.state.puzzle.leftRow.map((_, y) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {this.state.puzzle.topRow.map((_, x) => {
                                return (
                                    <div
                                        style={{
                                            width: CONTAINER_SIZE / count,
                                            height: CONTAINER_SIZE / count,
                                            borderBottom: '3px solid black',
                                            borderRight: '3px solid black',
                                            position: 'relative',
                                        }}
                                        onClick={() => this.onClickSquare(x, y)}
                                    >
                                        {this.isSelected(x, y) && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundColor: '#00000099',
                                                }}
                                            />
                                        )}

                                        {this.isRemoved(x, y) && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundColor: 'red',
                                                }}
                                            />
                                        )}

                                        {x == 0 && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    right: 0 + CONTAINER_SIZE / count,
                                                    top: -3,
                                                    height: CONTAINER_SIZE / count - (y == count - 1 ? 3 : 0),
                                                    width: 120,
                                                    border: '3px solid black',
                                                    borderRight: 'none',
                                                    borderTop: y == count - 1 ? '3px solid black' : 'none',
                                                    borderBottom: y == 0 ? '6px solid black' : '3px solid black',
                                                    boxSizing: 'content-box',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    display: 'flex',
                                                }}
                                            >
                                                <h1
                                                    style={{
                                                        width: `100%`,
                                                        textAlign: 'right',
                                                        paddingRight: 10,
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    {this.state.puzzle.leftRow[count - y - 1].split('.').join('  ')}
                                                </h1>
                                            </div>
                                        )}
                                        {y == count - 1 && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    bottom: 0 + CONTAINER_SIZE / count,
                                                    left: -3,
                                                    width: CONTAINER_SIZE / count - (y == count - 1 ? 3 : 0),
                                                    height: 120,
                                                    border: '3px solid black',
                                                    borderBottom: 'none',
                                                    borderRight: x == count - 1 ? '6px solid black' : '3px solid black',
                                                    boxSizing: 'content-box',
                                                    display: 'flex',
                                                    flexDirection: 'column-reverse',
                                                }}
                                            >
                                                {this.state.puzzle.topRow[x]
                                                    .split('.')
                                                    .reverse()
                                                    .map((str) => {
                                                        return (
                                                            <h1
                                                                style={{
                                                                    width: `100%`,
                                                                    textAlign: 'center',
                                                                    fontSize: 18,
                                                                }}
                                                            >
                                                                {str}
                                                            </h1>
                                                        );
                                                    })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }

    public render(): JSX.Element {
        return (
            <div style={styles.windowContainer}>
                <div style={styles.container}>
                    <div style={styles.topContainer}>
                        <div
                            style={{
                                width: CONTAINER_SIZE,
                                height: CONTAINER_SIZE,
                                position: 'absolute',
                                border: '3px solid black',
                                boxSizing: 'content-box',
                                bottom: 10,
                                right: 50,
                            }}
                        >
                            {this.renderGame()}
                        </div>
                    </div>
                    <div style={{ height: 94, backgroundColor: 'grey' }}>
                        <div
                            onClick={() => {
                                this.solvePuzzle();
                            }}
                            style={{
                                height: 45,
                                width: 150,
                                border: '3px solid black',
                                position: 'absolute',
                                bottom: 10,
                                right: 50,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <h1>DIG ARTIFACT!</h1>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        height: 75,
                        width: 75,
                        borderRadius: 5,
                        border: '3px solid black',
                    }}
                >
                    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, bottom: 0, backgroundColor: '#00ddff' }} />
                    <h1 style={{ position: 'absolute', top: 23, left: 0, right: 0, textAlign: 'center', fontSize: 28 }}>16</h1>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        width: 800 - 226,
    } as CSSProperties,
    topContainer: {
        height: 500,
        width: `100%`,
        borderBottom: '3px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    } as CSSProperties,
    windowContainer: {
        backgroundColor: 'white',
        width: 800 - 226,
        height: 594,
        position: 'relative',
    } as CSSProperties,
};
