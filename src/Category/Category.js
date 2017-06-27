import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Department from '../Department/Department';
import DepartmentLink from '../DepartmentLink/DepartmentLink';

class Category extends Component{
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }
    componentWillMount() {
        fetch('/api/get-data/category')
                .then(response => response.json())
                .then((departments) => {
                    this.setState({ data: departments });
                })
                .catch((error) => {
                console.log(error);
                });
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                {
                    this.state.data.map((department,index) =>   
                    (
                        <DepartmentLink path={department._id} imgUrl ={index+1} / > 
                    ))
                    
                }
                </div>
            </div>
        )
    }
}



export default Category;
 