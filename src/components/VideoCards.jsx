import React from 'react';

const VideoCards = ({ name }) => {
    // Responsive Video card
    return (
        <div class="md:max-w-[250px] rounded-xl overflow-hidden shadow-lg md:mb-0 md:mx-0 mb-5 mx-5">
            <video autoPlay loop class="w-full" src={`/images/${name}.mp4`} />
        </div>
    );
};

export default VideoCards;