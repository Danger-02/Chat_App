import PusherServer from "pusher"
import PusherClient from "pusher-js"

//in development this will create instances of pusher,
//which might cause you to hit the connection limit in free tier

// 


declare global{
    var pusherServer:PusherServer|undefined;
    var pusherClient:PusherClient| undefined;
}

export const pusherServer=global.pusherServer || new PusherServer({
    appId:process.env.PUSHER_APP_ID!,
    key:process.env.PUSHER_APP_KEY!,
    secret:process.env.PUSHER_APP_SECRET!,
    cluster:"ap2",
    useTLS:true
});

export const pusherClient=global.pusherClient || new PusherClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,{cluster:"ap2"});