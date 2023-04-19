import './styles.scss';

const About = () => {
  return (
    <div className="about">
      <h1 className="about-header">Plongez dans la cuisine orientale chez Ô Zaytoon</h1>

      <div className="about-text">
        <h2>Goûtez l'Orient</h2>
        <p>
          Bienvenue chez Ô Zaytoon, votre restaurant oriental de choix! Depuis notre ouverture, nous proposons une cuisine
          fine à base de produits frais et de saison. Passionnés par la gastronomie orientale, nous mettons notre
          savoir-faire culinaire au service de votre plaisir gustatif. Ô Zaytoon, la garantie d'un moment culinaire hors
          du commun.
        </p>

        <h3>La carte</h3>
        <p>
          Vous êtes curieux de découvrir notre carte? N'hésitez pas à consulter les plats proposés dans{' '}
          <a href="/catalogue">notre catalogue</a>. Vous y trouverez des plats préparés avec soin et dont nous sommes
          fiers, tels que le poulet aux olives, la chorba ou encore le tajine d'agneau. Venez découvrir les saveurs de
          l'Orient chez Ô Zaytoon!
        </p>
      </div>

      <div className="about-image"></div>
    </div>
  );
};

export default About;
