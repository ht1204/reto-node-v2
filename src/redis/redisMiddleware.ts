import { createClient } from 'redis';

interface redisMiddlewareProps {
    host: string;
    port: string;
    user:string
    password: string;
}

export const redisMiddleware = async ({ host, port, user, password }: redisMiddlewareProps) => {

    let mongoDBCredentials = {
        mongoHost: '',
        mongoUsername: '',
        mongoPassword: '',
    }

    try{
        const username = user;
        const redisPort = port as unknown as number;

        const client = createClient({
            socket:{
                host,
                port: redisPort
            },
            username,
            password
        });

        client.on("error", (error) => console.error(`Error : ${error}`));
        await client.connect();

        const hostFromRedis = await client.get("host");
        const usernameFromRedis = await client.get("username");
        const passwordFromRedis = await client.get("password");

        console.log(hostFromRedis, usernameFromRedis, passwordFromRedis);
        
        const hostForMongo: string = hostFromRedis || 'cluster0.lmfyyop.mongodb.net';
        const userForMongo: string = usernameFromRedis || 'taller-mir';
        const passwordForMongo: string = passwordFromRedis || '3eDcvfr4*';

        mongoDBCredentials = {
            mongoHost: hostForMongo,
            mongoUsername: userForMongo,
            mongoPassword: passwordForMongo,
        }
    }catch(error){
        console.log("Error: ", error);
    }

    return mongoDBCredentials;
}