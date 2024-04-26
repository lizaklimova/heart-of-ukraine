import { OpportunitiesBlock } from "../Opportunities.styled";

const Opportunity = ({ card: { iconName: Icon, title, text } }) => {
  return (
    <OpportunitiesBlock>
      <Icon />
      <h3>{title}</h3>
      <p>{text}</p>
    </OpportunitiesBlock>
  );
};

export default Opportunity;
