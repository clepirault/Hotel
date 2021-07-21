import PropTypes from 'prop-types';
import './Button.css';

function ContactButton(props) {
  const { children, title } = props;
  return (
    <div className="contactButtonSection">
      <h3>{title}</h3>
      <button type="button" className="contactButton">
        {children}
      </button>
    </div>
  );
}

ContactButton.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContactButton;
