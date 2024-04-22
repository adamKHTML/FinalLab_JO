import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const MySplineComponent = () => {
    useEffect(() => {
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/BujFRtXWwsDA7-ws/scene.splinecode');

        return () => {
            app.dispose();
        };
    }, []);

    return (
        <div>

            <canvas id="canvas3d" />
        </div>
    );
};

export default MySplineComponent;
