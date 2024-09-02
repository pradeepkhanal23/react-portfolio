const Header = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="title text-center">{title}</h2>
      <p className="subtitle text-center">{subtitle}</p>
    </>
  );
};
export default Header;
