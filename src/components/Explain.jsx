// Тайлбарын хайрцаг (variant: info | tip | warn)
 function Explain({ variant = "info", children }) {
  return <div className={`lr-explain lr-explain--${variant}`}>{children}</div>;
}
export default Explain