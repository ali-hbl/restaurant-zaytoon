import './styles.scss';

const Reservations = () => {
  return (
    <div className="reservation">
      <div className="reservation-image"></div>

      <div className="reservation-form">
        <h1>Réserver une table</h1>
        <form>
          <div className="form-holder">
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
  );
};

export default Reservations;
