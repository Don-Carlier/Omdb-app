import React from 'react';
import { 
    Row, 
    Col, 
    Tag, 
    Typography
} from 'antd';


const TextTitle = Typography.Title;

const MovieDetail = ({Title, Poster, Year, Director, Actors, Awards, imdbRating, Rated, Runtime, Genre, Plot}) => {
    return (
        <div className="poster__break">
            <Row>
                <Col span={11}>
                    <img 
                        src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster} 
                        alt={Title} 
                    />
                </Col>
                <Col span={13}>
                    <Row>
                        <Col span={21}>
                            <TextTitle level={4}>{Title}</TextTitle></Col>
                        <Col span={3} style={{textAlign:'right'}}>
                            <TextTitle level={4}><span style={{color: '#41A8F8'}}>{imdbRating}</span></TextTitle>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '20px'}}>
                    <Col>{Year}, {Director}</Col>
                    </Row>
                    <Row style={{marginBottom: '20px'}}>
                        <Col>
                            <Tag>{Rated}</Tag> 
                            <Tag>{Runtime}</Tag> 
                            <Tag>{Genre}</Tag>
                        </Col>
                    </Row>
        
                    <Row style={{marginBottom: '20px'}}>
                        <Col>Starring: {Actors}</Col>
                    </Row>
                    <Row style={{marginBottom: '20px'}}>
                        <Col>{Plot}</Col>
                    </Row>
                    <Row style={{marginBottom: '20px'}}>
                        <Col>{Awards}</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetail;