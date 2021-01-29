type Props = {
  avatar: string;
  name: string;
  description: string;
  id: string;
};

export const Person = ({ avatar, id, name, description }: Props) => {
  return (
    <li className="person" key={id}>
      <img
        src={avatar}
        alt={`A headshot of ${name}`}
        className="person-image"
      />

      <div className="info-container">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
      </div>
    </li>
  );
};
