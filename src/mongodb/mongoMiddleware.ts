import { connect, connection } from 'mongoose';
import { decoder } from '../decoder';

interface mongoMiddlewareProps {
    mongoHost: string;
    mongoUsername: string;
    mongoPassword: string;
}



export const mongoMiddleware = async ({ mongoHost, mongoUsername, mongoPassword }: mongoMiddlewareProps) => {

    try{
        //checked in mongodb cluster
        const dbName = mongoUsername;

        const mongoURI = [
            'mongodb+srv://',
            mongoUsername,
            ':',
            mongoPassword,
            '@',
            mongoHost,
            '/',
            dbName
        ].join('');

        console.log('mongoURI: ', mongoURI);

        connect(mongoURI);

        connection.on("error", console.error.bind(console, "connection error: "));
        connection.once("open",  () => {
            console.log("Connected successfully to mongoDB Cluster");
        });

        let collections: any[] = [];
        let collectionName: string = '';

        connection.on("open", () => {
            console.log("Connected to mongo server.");
            connection.db.listCollections().toArray((err, names) => {
                if(names){
                    for (const element of names) {
                        const { name } = element;
                        collections.push(name);
                    }
                }
                
                collectionName = collections[0];
                console.log('collectionName: ', collectionName);
                const projection = { _id: 0, code: 1 };
                const cursor = connection.db.collection(collectionName)
                                .find({}).project(projection).toArray();

                
                cursor.then((data) => {
                    const { code } = data[0];
                    console.log('code: ', code);
                    decoder(code);
                });     

            });

          });

    }catch(error){
      console.log("Error: ", error);
    }

}

