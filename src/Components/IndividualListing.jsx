function IndividualListing(props){
    return (
        <div className="posting">
            <h1>{props.data.title}</h1>
            <p>{props.data.price}</p>
            <img src={props.data.imageURL} alt={props.data.title} />
            <p>{props.data.descriptiopn}</p>
        </div>
    )
}
export default IndividualListing