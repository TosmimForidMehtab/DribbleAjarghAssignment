import React from 'react';

const ImageCards = ({ name }) => {
    return (
        // Responsive Image card
        <div class="md:max-w-[250px] rounded-xl overflow-hidden shadow-lg md:mb-0 md:mx-0 mb-5 mx-5">
            <img class="w-full" src={`/images/${name}.png`} alt="Sunset in the mountains" />
        </div>
    );
};

export default ImageCards;