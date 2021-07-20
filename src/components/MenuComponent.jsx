import React  from 'react';
import {
  Card, CardText, CardImg, CardImgOverlay,Breadcrumb,BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderMenuItem({dish,onClick}){
        return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg className="p-0" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardText>{dish.name}</CardText>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const MenuComponent = (props) => {
        const menu = props.dishes.map( dish => {
            return(
                <div className="col-12 col-md-6 pt-3" key={dish}>
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>Menu</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className='row'>
                        {menu}
                    </div>
                </div>
            </div>
        );
    };

export default MenuComponent;

