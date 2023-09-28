import { useState } from "react";
import styles from "./Size.module.css";

const Size = ({closeModal}) => {
  const conversionRate = 2.54;
  const [convertedSize, setConvertedSize] = useState("");
  const [form, setForm] = useState("Bust");
  const inputHandler = (e) => {
    const enteredValue = e.target.value;
    const convertedSize = Math.floor(enteredValue / conversionRate);
    setConvertedSize(convertedSize);
  };

    return (
      <div className={styles.sizeContainer}>
        <div className={styles.sizes}>
          <div>
            <button onClick={() =>closeModal(false)}type="button" class={styles.btnClose}>
              <span class={styles.iconCross}></span>
              <span class={styles.visuallyHidden}>Close</span>
            </button>
          </div>
          <div>
            <div>
              <div>Find Your Size</div>
              <div className={styles.buttons}>
                <button
                  style={{
                    color: form === "Bust" && "orange",
                    borderBottom:
                      form === "Bust" ? "1px solid orange" : "1px solid grey",
                  }}
                  className={form === "Bust" && styles.activated}
                  onClick={() => setForm("Bust")}>
                  Bust
                </button>
                <button
                  style={{
                    color: form === "Waist" && "orange",
                    borderBottom:
                      form === "Waist" ? "1px solid orange" : "1px solid grey",
                  }}
                  onClick={() => setForm("Waist")}>
                  Waist
                </button>
                <button
                  style={{
                    color: form === "Shoes" && "orange",
                    borderBottom:
                      form === "Shoes" ? "1px solid orange" : "1px solid grey",
                  }}
                  onClick={() => {setForm("Shoes")}}>
                  Shoes
                </button>
              </div>
            </div>
            <div className={styles.convert}>
            {form ==="Shoes" ? <ShoeSizes/> : 
            <>
              <input
                placeholder="Please enter your size in cm"
                onChange={inputHandler}
              />
              <i className="fa-solid fa-arrows-up-down" />
              <input
                placeholder="Your size"
                disabled={true}
                value={convertedSize || "Your size"}
              />
              </> 
            }
            </div>
        
          </div>
        </div>

      </div>
    );
  }

const sizesData = [
    // UK, EU, US, JP, CM
    [3, 35.5, 4, 21.5, 220],
    [4, 37, 5, 22.5, 229],
    [5, 38, 6, 23.5, 237],
    [ 6, 39, 7, 24.5, 246],
    [7, 40.5, 8, 25.5, 254],
    [7.5, 41, 8.5, 26, 258],
    [ 8, 42, 9, 26.5, 262],
    [ 8.5, 42.5, 9.5, 27, 266],
    [ 9, 43, 10, 27.5, 271],
    [ 9.5, 44, 10.5, 28, 275],
    [10, 44.5, 11, 28.5, 279],
    [ 10.5, 45, 11.5, 29, 283],
    [ 11, 46, 12, 29.5, 288],
    [ 12, 47, 13, 30.5, 296],
    [ 13, 48, 14, 31.5, 305],
    [ 14, 49.5, 15, 32.5, 314]
  ];


const ShoeSizes = () => {
    return (
        <table className={styles.sizesTable}>
        <thead>
          <tr>
            <th className={styles.centerAlign}>UK Size</th>
            <th className={styles.centerAlign}>EU Size</th>
            <th className={styles.centerAlign}>US Size</th>
            <th className={styles.centerAlign}>JP Size</th>
            <th className={styles.centerAlign}>MM SIZE</th>
          </tr>
        </thead>
        <tbody>
        {sizesData.map((data, index) => {
          const [ukSize,euSize , usSize, jpSize, cmSize] = data;
          return (
            <tr key={index}>
                <td className={styles.centerAlign}>{ukSize}</td>
              <td className={styles.centerAlign}>{euSize}</td>
              <td className={styles.centerAlign}>{usSize.toFixed(1)}</td>
              <td className={styles.centerAlign}>{jpSize.toFixed(1)}</td>
              <td className={styles.centerAlign}>{cmSize.toFixed(1)}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    )
}

export default Size;
