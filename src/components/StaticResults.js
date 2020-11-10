import React, { useEffect, useState } from 'react';
import {
    Row, 
    Alert, 
} from 'antd';
import API_KEY from '../apis/OmdbApi';
import Loader from './Loader';
import LoadCardBox from './LoadCardBox';

const StaticResults = ({Title, Poster, Year,Type, Director, Actors, Awards, imdbRating, Rated, Runtime, Genre, Plot, ShowDetail, DetailRequest, ActivateModal,imdbID}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [q] = useState('tt1457767');

    useEffect(() => {

        setLoading(true);
        setError(null);
        setData(null);

        fetch(`http://www.omdbapi.com/?s=conjuring&apikey=${API_KEY}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            if (response.Response === 'False') {
                setError(response.Error);
            }
            else {
                setData(response.Search);
            }

            setLoading(false);
        })
        .catch(({message}) => {
            setError(message);
            setLoading(false);
        })

    }, [q]);

    return (
        <div style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Row gutter={16} type="flex" justify="center">
                    { loading &&
                        <Loader />
                    }

                    { error !== null &&
                        <div style={{margin: '20px 0'}}>
                            <Alert message={error} type="error" />
                        </div>
                    }

                    { data !== null && data.length > 0 && data.slice(0, 2).map((result, index) => (
                        <LoadCardBox 
                            key={index} 
                            {...result} 
                        />
                    ))}
                </Row>
            </div>
        </div>

    )
}

export default StaticResults;