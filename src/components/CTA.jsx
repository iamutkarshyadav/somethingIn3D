import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        I never want to stop <br className="sm:block hidden" /> making memories
        with you.
      </p>
      <Link to="/" className="btn">
        Click
      </Link>
    </section>
  );
};

export default CTA;
