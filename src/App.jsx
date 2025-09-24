import CheckLog from "./CheckLog.jsx"
function App() {
  return(
    <>
      <CheckLog  IsLogged={true} username="dharun"/>
      <CheckLog  IsLogged={false} username="dharun"/>
      <CheckLog  />
    </>
)}

export default App
