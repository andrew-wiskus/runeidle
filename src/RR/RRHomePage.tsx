import React from 'react';

interface State {
    dogs: string[];
}

export class RRHomePage extends React.Component<{}, State> {
    public state: State = {
        dogs: [],
    };

    public componentDidMount() {
        this.fetchRandomDog();
    }

    private fetchRandomDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                if (data.status == 'success') {
                    let dogs = this.state.dogs;
                    dogs.push(data.message);
                    this.setState({ dogs: dogs });
                }

                if (this.state.dogs.length < 50) {
                    this.fetchRandomDog();
                }
            });
    }

    public render(): JSX.Element {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingTop: 15 }}>
                    <p style={{ fontSize: 47 }}>Rovers Rescue</p>
                    <p style={{ fontSize: 18, paddingTop: 5 }}>feed rescue dogs live!</p>
                </div>

                <div style={{ padding: 15, width: `100%`, maxWidth: 1000, display: 'flex', flexWrap: 'wrap' }}>
                    {this.state.dogs.map((dog) => {
                        return <DogoListing src={dog} />;
                    })}
                </div>
            </>
        );
    }
}

const DogoListing = (props: { src: any }) => {
    let size = `calc(100% - 20px)`;

    return (
        <div
            className='dog-listing'
            style={{ margin: 10, backgroundColor: 'aqua', position: 'relative', border: '2px solid navy', borderRadius: 5 }}
        >
            <img
                src={props.src}
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    width: size,
                    height: size,
                    objectFit: 'cover',
                    borderRadius: 4,
                }}
            />
            <p
                style={{
                    position: 'absolute',
                    bottom: 25,
                    left: `calc(50% - 85px)`,
                    right: 0,
                    height: 45,
                    width: 170,
                    textAlign: 'center',
                    color: 'white',
                    paddingTop: 13,
                    fontSize: 18,
                    fontWeight: 'lighter',
                    borderRadius: 8,
                    borderColor: 'navy',
                    backgroundColor: 'navy',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    alert(
                        "well we need a treat flicking robot, a dog sancuary, a camera feed, payment processing, and connect it all to the server. \n\nBut you'll feed a real pup soon"
                    );
                }}
            >
                Feed Me :D
            </p>
        </div>
    );
};
