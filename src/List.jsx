function List() {
  const fruits = ["apple", "banana", "actorr"];
  fruits.sort()

  const fruitList = fruits.map(fruit =><li>{fruit}</li>)
  return (<ol>{fruitList}</ol>);
}

export default List;
