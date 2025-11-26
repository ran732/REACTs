const ErrorMessage = ({ items }) => {
  return <> {items.length === 0 && <h3>No Food Items Available</h3>} </>;
};
export default ErrorMessage;
