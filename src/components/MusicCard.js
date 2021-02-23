import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MusicCard = ({picture,songName,desc,time}) => {


    return (
        <div className="card">
            <ToastContainer />
            <img src={picture} alt="music" />
            <p className="musicName">{songName}</p>
            <p className="decs">{desc}</p>
            <code>{time} min ago</code>
            <div className="playBtn" onClick={()=>{toast.dark(songName+' is added to playlist')}}><i className="fas fa-heart fa-2x"></i></div>
        </div>
        
    )
}

export default MusicCard
