import PropTypes from "prop-types";
function CheckLog (Props) {

const IsLoggedTrue = <h2 className="one">welcome {Props.username}</h2>
const IsLoggedFalse = <h2 className="two">please log in now</h2>

return Props.IsLogged ? IsLoggedTrue : IsLoggedFalse 




  
}

CheckLog.propTypes ={
    username : PropTypes.string,
    IsLogged : PropTypes.bool

}


CheckLog.defaultProps={
username: "guest",
IsLogged: false
}
export default CheckLog;

