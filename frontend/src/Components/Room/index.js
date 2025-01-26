import React from "react";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import './index.css'
import { useParams } from "react-router-dom";
const RoomPage = ()=>{

const { RoomId } = useParams();
console.log(RoomId);
const  myMetting = async (element) =>{
    const appID = 12065913;
    const serverSecret = "8c1c679698b81b65dcd3e184468b3060";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, 
        serverSecret,
         RoomId,
          Date.now().toString(),
           "Bibek ");
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
        container: element,
        sharedLinks: [{
            name: 'Personal link',
            url: `http://localhost:3000/Videoc/Room/${RoomId}`
             
          },
        ],
        scenario:{
            mode: ZegoUIKitPrebuilt.OneONoneCall
        },
        showScreenSharingButton: true,
    })
}
    return(
    <div className="room_div">

{/* <h1>Room Page  { RoomId }</h1> */}
<div id="videocall_container">
<div ref={myMetting}/>
</div>




    </div>
    )
  
}

export default RoomPage;