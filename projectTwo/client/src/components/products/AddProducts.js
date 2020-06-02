import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import { css } from 'glamor'
import ReactTooltip from "react-tooltip";
import { addProject } from '../../actions/productActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLuggageCart } from '@fortawesome/free-solid-svg-icons'

class AddProducts extends Component {
    state = {
        product_name: '',
        price: 0,
        stock: 0
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProducts(this.state);
        this.setState({
            product_name: '',
            price: 0,
            stock: 0
        })
    }



    render() {
        const { products } = this.props;

        const notify = () => toast(`${this.state.product_name}, added successfully!`, {
            position: toast.POSITION.TOP_LEFT, autoClose: 3000, closeButton: false, className: css({
                background: '#e4fcf9',
            }),
            bodyClassName: css({
                fontSize: '20px',
                color: '#071e3d',
                fontFamily: `'Baloo Tamma 2', cursive`

            })
        });

        return (
            <div className="position-fixed">
                <div className="card shadow" style={{ width: '430px' }}>
                    <div class="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <h5 style={{ color: '#071e3d' }}>Add new product
                            <span className="btn" style={{ marginLeft: '150px', backgroundColor: '#071e3d', color: '#21e6c1' }}>

                                    <FontAwesomeIcon icon={faLuggageCart} ></FontAwesomeIcon>
                                    <span className="badge" style={{ color: 'white', fontSize: '20px' }}>{products.length}</span>
                                </span></h5>
                            <div className="form-group">
                                <label htmlFor="product_name" style={{ color: '#1f4287' }}>Product Name</label>
                                <input type="text" id="product_name" className="form-control" value={this.state.product_name} onChange={this.handelChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price" style={{ color: '#1f4287' }}>Price</label>
                                <input type="number" id="price" className="form-control" value={this.state.price} onChange={this.handelChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock" style={{ color: '#1f4287' }}>Stock Qty</label>
                                <input type="number" id="stock" className="form-control" value={this.state.stock} onChange={this.handelChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock" style={{ color: '#1f4287' }}>Upload product image</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                            </div>

                            <a data-tip data-for="add" style={{ margin: '0px' }}>
                                <button className="btn" onClick={notify} style={{ backgroundColor: '#21e6c1', color: '#1f4287', width: '40px', height: '35px' }}><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.2em' }} /></button>
                            </a>
                            <ReactTooltip id="add" place="bottom" type="info" effect="float">
                                <span>Add product to inventory</span>
                            </ReactTooltip>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProducts: (products) => {
            dispatch(addProject(products))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
