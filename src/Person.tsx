import { Person as PersonType } from "usePeople";

type Props = {
  person: PersonType;
};

export const Person = ({ person }: Props) => {
  return (
    <li className="person">
      <img
        src={person.avatar}
        alt={`A headshot of ${person.name}`}
        className="person-image"
      />

      <div className="info-container">
        <h3 className="name">{person.name}</h3>
        <p className="description">{person.description}</p>
      </div>
    </li>
  );
};
