import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-web';

const MyLottieAnimation = () => {
    const container: any = useRef(null);

    useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/src/spootify.json',
        });

        animation.play();
    }, []);
    return <div ref={container}></div>;
};

export default MyLottieAnimation;
