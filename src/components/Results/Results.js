import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
// import { FaSistrix, FaMicrophone } from 'react-icons/fa';
import { RiSearchLine, RiMicLine, RiCloseFill } from 'react-icons/ri';
import { Data } from '../../index';
import './Results.css';

export default function Results(props) {
    const history = useHistory();
    const key = process.env.REACT_APP_API_KEY;
    const cx = process.env.REACT_APP_CX;
    const [state, setState] = useState(props.location?.state ?? '');
    const [results, setResults] = useState([]);
    const [info, setInfo] = useState('');

    useEffect(() => {
        async function getData() {
            if (props.location.state) {
                try {
                    const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
                    if (response) {
                        setResults(response.data.items);
                        setInfo(response.data.searchInformation);
                    }
                } catch (error) {
                    alert(error);
                }
            }
        }
        getData();
    }, []);

    const searchGoogle = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
            if (response) {
                setResults(response.data.items);
                setInfo(response.data.searchInformation);
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <div className="resultsHeader">
                <div>
                    <img src="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="logo"
                        onClick={() => history.push('/')}
                    />
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
            </div>
            <Data results={results} info={info} />
        </div>
    );
};