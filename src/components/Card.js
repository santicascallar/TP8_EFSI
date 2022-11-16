import React from 'react';
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

const Card = (props) => {
    let navigate = useNavigate();
    const redirigir = (url)=>{
        navigate(url);
    }
    
    return(
        <div className="card mx-auto" width="18rem">
            <img className="card-img-top" src={props.images} width={500} height={250} alt="producto"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                
                <button onClick={()=>redirigir(`/${props.id}`)} className="btn btn-primary">Detalles</button>
                <button className="btn btn-primary">Agregar</button>
            </div>
    </div>
    );
}

Card.propTypes = {
    images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Card;