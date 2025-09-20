import PropTypes from "prop-types"
function Prop(props) {
return(
    <div className="student">
        <p>Name : {props.name} </p>
        <p> Age : {props.age}</p>
        <p>rank : {props.isPassed ? "Yes " : "no" }</p>
    </div>
);
}

Prop.propTypes={
  name : PropTypes.string,
  age : PropTypes.number,
  isPassed: PropTypes.bool

}

Prop.defaultProps = {
  name: "guest",
  age: 90,
  isPassed: true   // ✅ fixed: correct name + correct type
};

export default Prop;