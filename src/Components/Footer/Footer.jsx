import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer} id="footer">
      <section className={classes.footerContent}>
        <span>Weather App</span>
        <p>Weather app created by github.com/gl0b3x</p>
      </section>
      <section className={classes.footerContent}>
        <span>Find us</span>
        <p>Some city</p>
        <p style={{ margin: 0 }}>32132 Some street 43</p>
      </section>
      <section className={classes.footerContent}>
        <span>Contacts</span>
        <p>Telephone</p>
        <a href="tel:+10000000">+10000000</a>
        <p>Write on our Mail</p>
        <a href="mailto:some@gmail.com">some@gmail.com</a>
      </section>
    </footer>
  );
};

export default Footer;
