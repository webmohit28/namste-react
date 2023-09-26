const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  return (
    <div className="col-md-3" >
      <div className="card ">
        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-content">{cuisines.join(', ')}</p>
          <p className="card-text">{avgRating + 'star'}- {resData?.info.sla.deliveryTime + 'min'}</p>
          <a href="#" className="btn btn-primary ">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;