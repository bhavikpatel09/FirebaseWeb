var admin = require("firebase-admin");

// var serviceAccount = require("fir-send-receive-demo-firebase-adminsdk-x2cku-d396d8de96.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://fir-send-receive-demo.firebaseio.com"
// });


var serviceAccount = require("./fir-send-receive-demo-firebase-adminsdk-x2cku-d396d8de96.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-send-receive-demo.firebaseio.com"
});

// admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: "fir-send-receive-demo",
//       clientEmail: "firebase-adminsdk-x2cku@fir-send-receive-demo.iam.gserviceaccount.com",
//       privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCpw/4WVWeBoeRz\nQmn8OITOn42VGG8/nZRfm3OnHoT89shpmHO1aRmoMyrCcEur82v8sy0+VnZ8XDqO\nUOP7NMARo4lKH7gNXqAgzPRc8iY6eNWqqz2RHRwCzk1Ia3Ak4EMYEeGuL6C2LXMj\nPv/sAhSUbkiIC1ePqKnvtnf4gPFMOvkb4/XHHUXucyEFQ7YLQ2weNNLO0hn7bEDb\nLhAxBgXfDGAt64AdMA+GAywy+hRBNymR/VaorEgWkY1UK+aifU/7zFi1E1KE3H/T\nVw0+jHZNFGzzO6xob5pzs/laMjtZS53rckd9J/qeY1iBP4fwbRZa46aM/f4+CPtt\n5kgscQPTAgMBAAECggEAF8rpNHYZwJhQ7Tp0oi3FpzPDYw7+oHrUTaX6yoRDfTSV\nF/+Oz/D/8IvjRUb5xAqkqtDt2VvC1WETr9h0a0OUW6SA3EufvvfxF0fCQ7iIVQ+U\nWowPX+QlhdsmB61PFUv8+0WeTIxOSNoL1ffBZHFSMw9VyQNV7UNlNbxsCf8AUn+C\nbLDDxmwf0YMXpiY/Yjr8/YLvnGmAgbAioB9MT1KMD02sZIumUMNRJT2DGLfVwtSl\nCzFglJCof2IRHHQ7N3Cj/+enH/7iaaWegaxz7DhWcPSgqc1gDNxmpwjNhHk9L7lo\niBODhK7ygclgTla1OZTDo2eTJNOpi/h2rNm3RX4HEQKBgQDujz6VONOX3DA5bXRX\nLviQOuO0ROLZbuM7BcnXBaOJAh6+bEdALWb+8BMVV+ec+Ek5R/SiMj3oJMnkxFbw\nBIllXd76wbTpq1W82Ipt7XWdPdikT22P+GRceRrQ2GV+l+YIrjl2VKo1e7tDk12a\nSxYxOjFAjFSnJ3KmpA10mBuWGwKBgQC2LTyKFEThHT7Gcm/sbz+l/5SmCl0KVWMx\nQA7XPU9ilZWmYIIVSB7bHNFWbJ6BzUCNqAhuussaA32P6K1BbvAAkIC5Eo6IRiQQ\ndFH/tKObyip8dHpqwAXK+AV6v4q/PK8StAl5fyilJXJtLa4Zc6w0I4io08sxlVi+\nuCpgC8+EqQKBgQDlKECrwxyuodrJL3U0UnB+y7Lz9cAbscMhbVwH6ui+sYSq0wRW\nh8aKWj9an0hjprVgCtjZ/X0uRDiUQm5ovVLmRpftNKn+VJFViIThN9tlIoW6wHm0\ndJyjn8m8mEJWqr9T01hrbMTb/3FRZnvhvQMiYo3xPVwL/X7KyIgMWhkVxQKBgE0r\nMlbHKTo2ei3zscd0hICbl+sRvsGu09q76M1yEhuPg5m7jb7YEwH73gz+69HOEQcw\nY4oMJBZ73gdEp4dtJ8sFaxF6c9fz5jj2HPn1GczXQVIAwQ5REuMcVq3dTzeczAhf\nLRhDLgNurl7jF7l+TzayyqPBO3Rgb/wx5PlUZ24pAoGBAKmXSflrBOn/aDaWSfOY\nBbAsi14TETk2U2EL5iF1OJhzKEYeTg80fNr6G+J2YybBh5icGbIRQDaoqOVNsXMH\nklboVbJjZd1kP9eXUu07vddK3Z7lzIkgWj+eaKLD7yKU2bd8Vs/wCqycStZscrOw\n1C5TC5z8du0ldQk9wt3S0kTv\n-----END PRIVATE KEY-----\n"
//     }),
//     databaseURL: "https://fir-send-receive-demo.firebaseio.com"
//   });

// This registration token comes from the client FCM SDKs.
var registrationToken = "fSI3bAQazvA:APA91bHMbqwn-0iPe6bTiaOLXtfLosj7JOlsy4WxxN8ZMnvf-EmdSJdDywzovTqXH3WAWM36i0-IVk61MnblfbSoFL-ZwzFecyeBgbB5qZ6FLsow6K9jV7OGYhyYB3LGGIJrt_vRZlyv";

// var registrationTokens = [
//     "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
//     // ...
//     "ecupwIfBy1w:APA91bFtuMY7MktgxA3Au_Qx7cKqnf..."
//   ];

// See the "Defining the message payload" section below for details
// on how to define a message payload.
// var payload = {
//   data: {
//     score: "850",
//     time: "2:45"
//   }
// };

var payload = {
    notification: {
      title: "$GOOG up 1.43% on the day",
      body: "$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day."
    },
    data: {
      stock: "GOOG",
      open: "829.62",
      close: "635.67"
    }
  };

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().sendToDevice(registrationToken, payload)
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });