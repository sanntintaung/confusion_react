import React  from 'react';
import {
  Card, CardText, CardImg, CardImgOverlay,
} from 'reactstrap';

    function RenderMenuItem({dish,onClick}){
        return(
            <Card onClick={ _ => onClick(dish.id)}>
                <CardImg className="p-0" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardText>{dish.name}</CardText>
                </CardImgOverlay>
            </Card>
        );
    }

    const MenuComponent = (props) => {
        const menu = props.dishes.map( dish => {
            return(
                <div className="col-12 col-md-6 pt-3" key={dish}>
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            </div>
        );
    };

export default MenuComponent;

