import React from 'react';

import { 
    Row, 
    Col, 
    Typography
} from 'antd';

const TextTitle = Typography.Title;

//title, year, awards, poster
const LoadCardBox = ({Title, Awards, imdbID, Poster, Year, Plot}) => {

    return (
        <div className="poster__break--detail">
            <Row>
                <Col span={11}>
                    <img 
                        src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster} 
                        alt={Title} 
                    />
                </Col>
            </Row>
            <Row>    
                <Col span={13}>
                    <Row>
                        <Col span={21}>
                            <TextTitle level={4}>{Title}</TextTitle>
                        </Col>
                        
                    </Row>
                    <Row style={{marginBottom: '20px'}}>
                    <Col>{Year}</Col>
                    </Row>
                
                    <Row style={{marginBottom: '20px'}}>
                        <Col className="plot">{Plot}</Col>
                    </Row>
                    <Row style={{marginBottom: '20px'}}>
                        <Col>{Awards}</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default LoadCardBox;