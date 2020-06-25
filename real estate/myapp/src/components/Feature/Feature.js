import React, { Component } from 'react'


export class Feature extends Component {
    render() {
        return (
            <div id="features" className="text-center">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title">
                        <h3>Features</h3>
                    </div>
                    <div className="row">

                        <div className="col-xs-6 col-md-3"> <i className="fa fa-comments-o"></i>
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>

                        <div className="col-xs-6 col-md-3"> <i className="fa fa-bullhorn"></i>
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>

                        <div className="col-xs-6 col-md-3"> <i className="fa fa-group"></i>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>

                        <div className="col-xs-6 col-md-3"> <i className="fa fa-magic"></i>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>



                    </div>
                </div>
            </div>
        )
    }
}

export default Feature
