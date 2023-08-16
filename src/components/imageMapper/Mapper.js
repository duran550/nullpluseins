import React from 'react'; 
import ImageMapper from 'reactjs-img-mapper'; 
import ImageMapperProps from 'reactjs-img-mapper';
import { Map } from 'reactjs-img-mapper'; 
import { MapAreas } from 'reactjs-img-mapper';

const Mapper = (props) => {

    const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
    const MAP = {
      name: 'my-map',
      // GET JSON FROM BELOW URL AS AN EXAMPLE
      areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
    };

    return <ImageMapperProps src={URL} map={MAP} />
}

export default Mapper