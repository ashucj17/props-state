import { Component } from 'react';
import './Card'


class Card extends Component{
    render(){
        const {title, description} = this.props

        return(
            <div className='card'>
            <h2 className='title'>{title}</h2>
            <p className='description'>{description}</p>
        </div>
        )
    }
}

export default Card;