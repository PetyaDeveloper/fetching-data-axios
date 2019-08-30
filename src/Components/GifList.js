import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 

  let gifs;
  if(props.data.length>0){ gifs = props.data.map(gif=> <Gif url = { gif.images.fixed_height.url } key={gif.id} />);
  } else{
    gifs = <NoGifs />
  }
  
  return(
    <ul className="gif-list">
      {/* <Gif /> */}
      {gifs}
    </ul> 
  );
}

export default GifList;
