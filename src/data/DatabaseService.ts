import * as firebase from 'firebase';
import moment from 'moment';

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
    // create SPAM filter here

    public static sendChatMessage = (message: string, userName: string) => {
        let timestamp = `[` + moment().utc().format('HH:mm') + `] `;

        firebase
            .database()
            .ref()
            .child('chatLog')
            .push({
                message: message,
                userName: timestamp + userName,
            });
    };

    public static listenForChatMessage = (callback: (message: string) => void) => {
        let ref = firebase.database().ref().child('chatLog').limitToLast(5);

        ref.on('child_added', (snap) => {
            callback(snap.val());
        });
    };

    public static saveEmail = (email: string) => {
        firebase.database().ref().child('email').push({ email: email });
    };
}
