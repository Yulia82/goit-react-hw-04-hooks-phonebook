import { TitleSection } from "./SectionTitle.styles";
import PropTypes from "prop-types";

const SectionTitle = ({ title, children }) => {
  return (
    <section>
      <TitleSection>{title}</TitleSection>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default SectionTitle;
