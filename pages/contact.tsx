import Page from "@/component/page";
import ContactForm from "@/pages/Form";
import styles from "@/pages/styles/contact.module.css";

function Contact() {
  return (
    <>
      <Page />
      <section id="contact" className={styles.contact}>
        <div className={styles.main__container}>
          <h3>Get in touch</h3>
          <h1>
            Have a question, an idea or a project in mind? <br />
            Don't hesitate to contact!
          </h1>
          <div className={styles.social}>
            <a href="mailto:onkl3p@gmail.com" className={styles.mail}>
              onkl3p@gmail.com
            </a>
            <div className={styles.gitNlink}>
              <a href="https://github.com/N1kos9" target="_blank">
                github
              </a>
              <a
                href="https://www.linkedin.com/in/nikos-m-631366284/"
                target="_blank"
              >
                linkedin
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default Contact;
