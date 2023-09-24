import Link from "next/link";

const credit = "<SammyLeths />";

const Footer = () => {
  return (
    <div className="pt-5 pb-10 text-center text-sm font-medium transition-colors">
      A project by &nbsp;
      <Link
        className="hover:text-primary/60"
        href="https://www.sammyleths.com"
        target="_blank"
      >
        {credit}
      </Link>
    </div>
  );
};

export default Footer;
