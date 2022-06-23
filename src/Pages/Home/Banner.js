import React from 'react';
import image from '../../assets/image.jpg'
const Banner = () => {
    return (
        <div className='mb-36 '>
            <div class="hero  bg-base-200">
                <div class="hero-content  flex-col lg:flex-row-reverse">
                    <img src={image} class="max-w-xl rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;