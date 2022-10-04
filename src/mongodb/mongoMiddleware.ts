import { connect, connection } from 'mongoose';

interface mongoMiddlewareProps {
    mongoHost: string;
    mongoUsername: string;
    mongoPassword: string;
}

export const mongoMiddleware = async ({ mongoHost, mongoUsername, mongoPassword }: mongoMiddlewareProps) => {
    try{
        const mongoURI = [
            'mongodb+srv://',
            mongoUsername,
            ':',
            mongoPassword,
            '@',
            mongoHost
        ].join('');

        console.log('mongoURI: ', mongoURI);

        connect(mongoURI);
        connection.on("error", console.error.bind(console, "connection error: "));
        connection.once("open", function () {
            console.log("Connected successfully");
        });
    }catch(error){
      console.log("Error: ", error);
    }

}

