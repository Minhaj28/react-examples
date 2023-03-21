import React, { useRef, useState } from 'react';

const Video = () => {
    const [isPlaying,setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const playVideo = () => {
        if(isPlaying){
            videoRef.current.pause();
            setIsPlaying(false);
            return;
        }

        videoRef.current.play();
        setIsPlaying(true);
        
    }
    
    return (
        <div>
            <button onClick={playVideo}>{ isPlaying ? "pause" : "play" }</button>
            <br />
            <br />
            <video ref={videoRef} width='400'>
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" />
            </video>
        </div>
    );
};

export default Video;