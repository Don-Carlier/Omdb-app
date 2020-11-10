import React, { useEffect, useState } from 'react';
import { 
    Layout,
    Row, 
    Col,
    Alert, 
    Modal
} from 'antd';
import 'antd/dist/antd.css';
import API_KEY from './apis/OmdbApi';
import SearchBox from './components/SearchBox';
import Loader from './components/Loader';
import MovieDetail from './components/MovieDetail';
import ColCardBox from './components/ColCardBox';
import StaticResults from './components/StaticResults';
import Route from './components/Route';
import Header from './components/Header';

const {Content, Footer } = Layout;

function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [q, setQuery] = useState('bridge');
    const [activateModal, setActivateModal] = useState(false);
    const [detail, setShowDetail] = useState(false);
    const [detailRequest, setDetailRequest] = useState(false);

    useEffect(() => {

        setLoading(true);
        setError(null);
        setData(null);

        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
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
        <div className="App">
            <Layout className="layout">
            <Header></Header>
                <Route path="/">
                    <Content style={{ padding: '0 50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <SearchBox searchHandler={setQuery} />
                            <br />
                            <div className="list-break">
                                <Row gutter={16} type="flex" justify="center">
                                    { loading &&
                                        <Loader />
                                    }

                                    { error !== null &&
                                        <div style={{margin: '20px 0'}}>
                                            <Alert message={error} type="error" />
                                        </div>
                                    }

                                    { data !== null && data.length > 0 && data.slice(0, 5).map((result, index) => (
                                        <ColCardBox 
                                            ShowDetail={setShowDetail} 
                                            DetailRequest={setDetailRequest}
                                            ActivateModal={setActivateModal}
                                            key={index} 
                                            {...result} 
                                        />
                                    ))}
                                </Row>
                            </div>
                        </div>
            
                        <Modal
                            title='Detail'
                            centered
                            visible={activateModal}
                            onCancel={() => setActivateModal(false)}
                            footer={null}
                            width={800}
                            >
                            { detailRequest === false ?
                                (<MovieDetail {...detail} />) :
                                (<Loader />) 
                            }
                        </Modal>
                    </Content>
                </Route>
               
                <Route path="/featured-static">
                    <Content>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <StaticResults />
                        </div>
                    </Content>
                </Route>
                
                <Footer>
                    <Row>
                        <Col style={{margin: '20px 0'}} className="gutter-row" span={8}>
                            <ul>
                                <li><a href="https://codepen.io/Don-Carlier" target="_blank">Codepens Don</a></li>
                                <li><a href="https://github.com/donno86" target="_blank">Github Don</a></li>
                            </ul>
                        </Col>

                        <Col style={{margin: '20px 0'}} className="gutter-row" span={8}>
                            <ul>
                                <li><p>Questions?</p></li>
                                <li>E: <a href="mailto:don.carlier@gmail.com" type="email">don.carlier@gmail.com</a></li>
                                
                            </ul>
                        </Col>
                            
                        <Col style={{margin: '20px 0'}} className="gutter-row" span={8}>
                            <ul>
                                <li>
                                    <p>
                                        This page is set up by Don Carlier <br /> 
                                        For more information: <br /> <a href="https://www.linkedin.com/in/doncarlier/" target="_blank">Linkedin Don Carlier</a> 
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </div>
    );
}

export default App;