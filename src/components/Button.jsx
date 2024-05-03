import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ children, className, href, px, white, onClick }) => {
  const classes = `button relative inline-flex items-center justify center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${className || ""} ${white ? "text-n-8" : "text-n-1"}`;
  const spanClass = ` z-10 relative ${className || ""} `;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClass}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={onClick}>
      <span className={spanClass}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  {
    return href ? renderLink() : renderButton();
  }
};
export default Button;
