import people from "./people.json";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";

export type Person = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  description: string;
};

type Props = {
  searchTerm: string;
};

let searchEngine = new Fuse<Person>(people, { keys: ["name"], threshold: 0.2 });

export const usePeople = ({ searchTerm }: Props) => {
  let [results, setResults] = useState(searchEngine.search(searchTerm));

  useEffect(() => {
    setResults(searchEngine.search(searchTerm));
  }, [searchTerm]);

  if (searchTerm === "") return people;
  return results.map((result) => result.item);
};
