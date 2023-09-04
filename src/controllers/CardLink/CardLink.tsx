import { Link } from "react-router-dom";
import Card, { CardProps } from "../../components/Card/Card";

interface CardLinkProps extends CardProps {
  to:   string;
}

function CardLink(props: CardLinkProps): React.ReactElement {

  const { to, ...cardProps } = props;

  return (
    <Link to={ to } style={{ textDecoration: "none" }}>
      <Card { ...cardProps } />
    </Link>
  );

}

export default CardLink;