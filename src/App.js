import { useEffect,useState } from 'react';

function App() {
  const [peopleInSpace,setPeopleInSpace]= useState([]);
  const [isLoaded,setIsLoaded]=useState(false);
  useEffect(()=>{
    fetch("http://api.open-notify.org/astros.json")
    .then((response)=>response.json())
    .then((data)=>{
      setPeopleInSpace(data.people);
      setIsLoaded(true);
    });
  },[]);
   //use an empty dependencies array so we only run the fetch request once
  if(!isLoaded)return<h3>Loading...</h3>
   return (
  <div>
    <ol>
    {peopleInSpace.map((person)=>
    <li>{person.name}</li>)}</ol>
    </div>
  );
}

export default App;
