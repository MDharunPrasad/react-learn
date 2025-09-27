import CheckLog from "./CheckLog.jsx"
function App() {
  return(
    <>
      <CheckLog  IsLogged={true} username={123}/>
      <CheckLog  IsLogged={false} username="dharun"/>
   
    </>
)}

export default App
