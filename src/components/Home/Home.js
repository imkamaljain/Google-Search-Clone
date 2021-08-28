import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { RiSearchLine, RiMicLine, RiCloseFill } from 'react-icons/ri';
import './Home.css';

export default function Home() {
    const history = useHistory();
    const [state, setState] = useState('');

    const searchGoogle = () => {
        if (state) {
            history.push({ pathname: '/search', state });
        }
    };

    return (
        <div className="homeContainer">
            <div className="homeLogo">
                <img src="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo" />
            </div>
            <div className="searchContainer">
                <input type="text" value={state}
                    onChange={e => setState(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? searchGoogle() : null}
                />
                <RiSearchLine className="searchIcon" />
                {state ? <RiCloseFill className="clearIcon" onClick={() => setState('')} /> : null}
                <RiMicLine className="microphoneIcon" />
            </div>
            <div className="homeButtons">
                <button type="submit" onClick={searchGoogle}>Google Search</button>
                <button type="button">I'm Feeling Lucky</button>
            </div>
        </div>
    );
};