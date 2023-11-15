const Linn = (props) => (
    <div>
        <div className="column-right">
        <div><strong> {props.andmed.nimi} </strong> </div>
            <img src={props.andmed.pilt} width="400" />
            <p>{props.andmed.kirjeldus}</p>
        </div>
    </div>

)

export default Linn;