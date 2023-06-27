import Card from "../assets/images/Card/Card";

function Concepts(props) {
  return (
    <Card>
      <img src={props.image} alt="TODO: TITLE" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Card>
  );
}

export default Concepts;
