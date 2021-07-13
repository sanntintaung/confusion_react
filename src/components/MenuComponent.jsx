import React , {Component} from 'react';
import {
  Card,CardBody, CardText, CardImg, CardTitle, CardImgOverlay,
} from 'reactstrap';
import DishDetailComponent from "./DishDetailComponent";

class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if(dish != null){
            return(
                <DishDetailComponent dish={this.state.selectedDish}/>
            );
        } else {
            return(
              <div></div>
            );
        }
    }
    render() {
          const Menu = this.props.dishes.map(dish => {
                return(
                        <Card className="col-12 col-md-6" key={dish.id} onClick={ _  => this.onDishSelect(dish)}>
                            <CardImg className="p-0" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardText>{dish.name}</CardText>
                            </CardImgOverlay>
                        </Card>
                );
          })
          return (
                <div>
                     <div className="container">
                          <div className="row">
                              {Menu}
                          </div>
                         {this.renderDish(this.state.selectedDish)}
                     </div>
                </div>
          );
    }
}

export default MenuComponent;

