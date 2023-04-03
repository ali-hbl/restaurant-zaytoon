import './styles.scss';

const Reservations = () => {
  return (
    <>
      <div className="reservation">
        <div className="reservation-header">
          <h3>Bienvenue sur notre page de réservations! </h3>
          <h4>Nous sommes ravis de vous accueillir chez nous et espérons que vous passerez un excellent moment.</h4>
          <p>
            Ici, vous pouvez réserver une table en indiquant la date, l'heure et le nombre de personnes.
            <br />
            Nous avons hâte de vous recevoir et de vous faire découvrir nos délicieuses spécialités.
          </p>
          <p>À très bientôt !</p>
        </div>

        <div className="reservation-container">
          <div className="reservation-container-image"></div>

          <div className="reservation-container-form">
            <h1>Réserver une table</h1>

            <form>
              <div className="reservation-container-form-holder">
                <div>
                  <select required>
                    <option value="1">1 couvert</option>
                    <option value="2">2 couverts</option>
                    <option value="3">3 couverts</option>
                    <option value="4">4 couverts</option>
                    <option value="5">5 couverts</option>
                    <option value="6">6 couverts</option>
                    <option value="7">7 couverts</option>
                    <option value="8">8 couverts</option>
                    <option value="9">9 couverts</option>
                    <option value="10">10 couverts</option>
                    <option>+10 couverts</option>
                  </select>

                  <input type="text" name="name" placeholder="Nom" required />
                  <input type="text" name="phone" placeholder="Téléphone" pattern="[0-9]{10}" required />
                </div>

                <div>
                  <input type="date" name="date" placeholder="Date" required />
                  <input type="time" name="time" placeholder="Heure" required />

                  <input type="email" name="email" placeholder="Adresse mail" required />
                </div>
              </div>

              <div className="reservation-button">
                <button type="submit" className="btn">
                  Réserver
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
