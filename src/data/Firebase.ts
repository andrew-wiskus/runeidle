import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAzhNaSxSHSdnEER7kP7hfe1rQRYCvK7Dk',
    authDomain: 'longlivebeeg.firebaseapp.com',
    databaseURL: 'https://longlivebeeg.firebaseio.com',
    projectId: 'longlivebeeg',
    storageBucket: 'longlivebeeg.appspot.com',
    messagingSenderId: '676033897112',
    appId: '1:676033897112:web:93b2f90da8483b455ba6ed',
    measurementId: 'G-95F2XCSGGE',
};

firebase.initializeApp(firebaseConfig);

export class FirebaseService {
    public static userName = 'BEEG';

    // public static setRating = (id: string, rating: number) => {
    //     firebase
    //         .database()
    //         .ref()
    //         .child('ratings_v1')
    //         .child(id)
    //         .set(rating)
    // }

    public static sendChatMessage = (message: string) => {
        console.log('HELLO');
        firebase.database().ref().child('chatLog').push({
            message: message,
            userName: FirebaseService.userName,
        });
    };
}
