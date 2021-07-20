import React  from 'react';
import {
    Card,CardBody, CardText, CardImg, CardTitle,Breadcrumb,BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderDishDetail({dish}) {
        if(dish != null){
            return(
                <div className="col-12 col-md-6 mt-md-3">
                    <Card key={dish.id}>
                        <CardImg src={dish.image}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return <div></div>
        }
    }

    function RenderDishComments({comments}){
        if(comments != null) {
            const comment = comments.map( comment => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}})}</p>
                    </div>
                );
            })
            return(
                <div className="col-12 col-md-6 mt-3 p-4 mt-md-3">
                    <h3>Comments</h3>
                    {comment}
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    const DishDetailComponent = props => {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row mt-md-5">
                    <RenderDishDetail dish={props.dish}/>
                    <RenderDishComments comments={props.comments}/>
                </div>
            </div>
        );
    }

export default DishDetailComponent;