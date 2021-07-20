import React from 'react';
import {
    Card,CardBody, CardText, CardImg, CardTitle,CardSubtitle
} from 'reactstrap';

function RenderCard({item}) {
    if(item != null) {
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return <div></div>
    }
}

function HomeComponent(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-sm-4">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-sm-4">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;