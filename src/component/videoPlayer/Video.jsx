import React, { forwardRef, useRef, useState } from 'react';

const VideoPlayer = forwardRef(({width}, ref) => {
    return <video ref={ref} width={width}>
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" />
</video>
});

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
            <VideoPlayer width='400' ref={videoRef} />
        </div>
    );
};

export default Video;