import "./RadioBTN.css";

export default function RadioBTN({ label, menuItems, gender, setGender }) {
  return (
    <>
      <div className="gender-cotainer">
        {label && <label>{label}</label>}

        <div className="radio-group">
          {menuItems.map((item) => (
            <div key={item}>
              <input
                type="Radio"
                name="gender"
                value={item}
                checked={gender === item}
                onChange={(e) => setGender(e.target.value)}
              />

              <label>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
