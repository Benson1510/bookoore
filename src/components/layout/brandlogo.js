import Logo from "../../assets/images/logo-partenaire.png";

export default function BrandLogo() {
  return (
    <div className="d-flex justify-content-center my-4 py-3">
      <img src={Logo} alt="Logo" />
    </div>
  );
}