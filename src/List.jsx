function List() {
  const fruits = ["apple", "banana", "actor"];
  fruits.sort()

  const fruitList = fruits.map(fruit =><li>{fruit}</li>)
  return (<ol>{fruitList}</ol>);
}

export default List;
