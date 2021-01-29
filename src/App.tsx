import "./style.css";
import { Header } from "Header";
import { SearchInput } from "SearchInput";
import { useState } from "react";
import { Person } from "Person";

function App() {
  let [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <h1 className="title">The Person Finder</h1>
        <p className="text">
          If you can't find someone and need to know what they look like, you've
          come to the right place! Just type the name of the person you are
          looking for below into the search box!
        </p>
        <SearchInput name="searchInput" value={value} handleChange={setValue} />

        <div className="list-container">
          <ul className="people-list">
            <Person
              id="1"
              avatar={
                "https://robohash.org/rerumliberoamet.png?size=200x200&set=set1"
              }
              name="Dyanna Cullingford"
              description="Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture"
            />
            <Person
              id="1"
              avatar={
                "https://robohash.org/rerumliberoamet.png?size=200x200&set=set1"
              }
              name="Dyanna Cullingford"
              description="Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
