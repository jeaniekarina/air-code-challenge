import { Person as PersonType } from "usePeople";

type Props = {
  person: PersonType;
};

export const Person = ({ person }: Props) => {
  return (
    <li className="person" aria-label="Person">
      <img
        src={person.avatar}
        alt={`A headshot of ${person.name}`}
        className="person-image"
      />

      <div className="info-container">
        <h2 className="name">{person.name}</h2>
        <p
          className="description"
          aria-label={`Description for person ${person.name}`}
        >
          {person.description}
        </p>
      </div>
    </li>
  );
};
