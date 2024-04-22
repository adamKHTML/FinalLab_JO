import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <>

            <div>
                <Video autoPlay muted loop id="bg-video" src="./video/PingPong.mp4" type="video/mp4" />

                <header className="bg-transparent py-4 px-6 flex items-center justify-between">
                    <div className="link-btg">
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-white">Instagram</a>
                            <a href="#" className="text-white">TikTok</a>
                        </div>
                    </div>
                </header>

            </div>



        </>
    )
}

export default Header

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 400px;
`;

