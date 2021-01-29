import "./style.css";
import { Header } from "Header";
import { SearchInput } from "SearchInput";
import { useState } from "react";
import { Person } from "Person";
import { usePeople } from "./usePeople";

function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let people = usePeople({ searchTerm });

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
        <SearchInput
          name="searchInput"
          value={searchTerm}
          handleChange={setSearchTerm}
        />

        <div className="list-container">
          <ul className="people-list">
            {people.map((person) => (
              <Person key={person.id} person={person} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
