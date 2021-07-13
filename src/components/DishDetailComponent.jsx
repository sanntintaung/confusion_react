import React , {Component} from 'react';
import {
    Card,CardBody, CardText, CardImg, CardTitle,
} from 'reactstrap';

class DishDetailComponent extends Component {
    constructor(props) {
        super(props);

    }
    renderDishDetails(dish){
        return(
            <div className="col-12 col-md-6">
                <Card key={this.props.dish.id}>
                    <CardImg src={this.props.dish.image}/>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderDishComments(comments){
        const comment = comments.map( comment => {
            const date = new Date(comment.date);
            return (

                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {date.toLocaleString('en-US',{ timeZone: 'America/New_York' })}</p>
                    </div>

            );
        })

        return(
            <div className="col-12 col-md-6 mt-3 p-4 mt-md-3">
                <h3>Comments</h3>
                {comment}
            </div>
        );
    }
    render() {
        return(
            <div className="row mt-md-5">
                {this.renderDishDetails(this.props.dish)}
                {this.renderDishComments(this.props.dish.comments)}
            </div>
        );
    }
}

export default DishDetailComponent;