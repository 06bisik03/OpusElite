
import styles from "./CustomSuits.module.css";
import UseCustomShop from "../Hooks/UseCustomShop";
import { useState } from "react";
import ShoesList from "./ShoesList";
const oxfordGS = ["Black", "Navy", "Dark-Brown", "Brown", "Grey"];
const oxfordCS = ["Black", "Navy", "Dark-Brown", "Brown", "Light-Blue"];
const derbyGS = ["Black", "Navy", "Dark-Brown", "Brown", "Grey"];
const derbyCS = ["Black", "Navy", "Dark-Brown", "Brown", "Grey"];
const CustomShoes = () => {
  const [sliderValue, setSliderValue] = useState(600);
  const [shoeType, setShoeType] = useState(""); // Initialize with an empty string
  const [shoeMaterial, setShoeMaterial] = useState("");
  const [shoeColour, setShoeColour] = useState("");
  const [shoeSizeType, setShoeSizeType] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [availableColours, setAvailableColours] = useState([]);
  const [appropriateShoes, setAppropriateShoes] = useState(null);
  const [shoeSizeError, setShoeSizeError] = useState("");

  const submissionHandler = async (e) => {
    e.preventDefault();
    let faulty; 
    const findAppropriateShoes = {
      custom_shoe_colour: shoeColour,
      custom_shoe_material: shoeMaterial ,
      custom_shoe_type: shoeType,
      custom_shoe_max_price: sliderValue
    };
    switch (shoeSizeType) {
      case "US":
        if (shoeSize > 15 || shoeSize < 5) {
          setShoeSizeError("Choose between 5 and 15 US");
          setShoeSize('')
          faulty = true;
        } else {
          setShoeSize(shoeSize);
          faulty = false
        }
        break;
      case "EU":
        if (shoeSize > 50 || shoeSize < 35) {
          setShoeSizeError("Choose between 35 and 50 EU");
          setShoeSize('')

          faulty = true;
        } else {
          setShoeSize(shoeSize);
          faulty = false;
        }
        break;
      case "UK":
        if (shoeSize > 14 || shoeSize < 3) {
          setShoeSizeError("Choose between 3 and 14 UK");
          setShoeSize('')

          faulty = true;
        } else {
          setShoeSize(shoeSize);
          faulty = false;
        }
        break;
      case "CM":
        if (shoeSize > 37 || shoeSize < 22) {
          setShoeSizeError("Choose between 22 and 37 CM");
          setShoeSize('')

          faulty = true;
        } else {
          setShoeSize(shoeSize);
          faulty = false;
        }
        break;
      case "JP":
        if (shoeSize > 32 || shoeSize < 21) {
          setShoeSizeError("Choose between 21 and 32 JP");
          setShoeSize('')

          faulty = true;
        } else {
          setShoeSize(shoeSize);
          faulty = false;
        }
        break;

      default: 
        break;
    }
    if (!faulty) {
      const appropriateShoes = await UseCustomShop(
        "shoe",
        findAppropriateShoes,
        "getCustomData"
      );
      const shoeFound = appropriateShoes.data[0];
      const newSuit = {
        custom_product_size: `${shoeSize} ${shoeSizeType}`,
        ...shoeFound,
      };

      setAppropriateShoes(newSuit);
    } 
  };

  const handleShoeSizeChange = (event) => {
    const newValue = event.target.value;
    setShoeSize(newValue)
  };

  const handleShoeSizeTypeChange = (event) => {
    const newValue = event.target.value;
    setShoeSizeType(newValue);
  };

  const shoeSizeTypes = ["US", "EU", "UK", "CM", "JP"];
  const handleShoeColorChange = (event) => {
    const newValue = event.target.value;
    setShoeColour(newValue);
  };
  const handleShoeMaterialChange = (event) => {
    const newValue = event.target.value;
    if (shoeType === "Oxford") {
      if (newValue === "Goat Skin") {
        setAvailableColours(oxfordGS);
      } else {
        setAvailableColours(oxfordCS);
      }
    } else {
      if (newValue === "Goat Skin") {
        setAvailableColours(derbyGS);
      } else {
        setAvailableColours(derbyCS);
      }
    }
    setShoeMaterial(newValue);
  };

  const handleShoeTypeChange = (event) => {
    const newValue = event.target.value;
    setShoeType(newValue);
  };
  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };
  if (!appropriateShoes) {
    return (
      <div className={styles.customOrdersContainer}>
        <div className={styles.formCustom}>
          <form className={styles.form} onSubmit={submissionHandler}>
            <div className={styles.inputCont}>
              <label htmlFor="type">Custom Suit Type</label>
              <select
                id="type"
                value={shoeType}
                required
                onChange={handleShoeTypeChange}>
                <option value="" disabled={shoeType ? true : false}>
                  Select a Shoe Type
                </option>
                <option value="Oxford">Oxford</option>
                <option value="Derby">Derby</option>
              </select>
            </div>
            <div className={styles.inputCont}>
              <label htmlFor="type">Custom Shoe Material</label>
              <select
                required
                id="material"
                value={shoeMaterial}
                onChange={handleShoeMaterialChange}>
                <option value="" disabled={shoeMaterial ? true : false}>
                  Select a Shoe Material
                </option>
                <option value="Goat Skin">Goat Skin</option>
                <option value="Calf Skin">Calf Skin</option>
              </select>
            </div>
            <div className={styles.inputCont}>
              <label htmlFor="type">Custom Shoe Colour</label>
              <select required id="color" onChange={handleShoeColorChange}>
                <option value="" disabled={shoeColour ? true : false}>
                  Select a Shoe Color
                </option>
                {availableColours.map((colour) => {
                  return <option value={colour}>{colour}</option>;
                })}
              </select>
            </div>
            <div className={styles.inputContSize}>
              <label htmlFor="type">Custom Shoe Size</label>
              <div>
                <input
                  id="type"
                  required
                  onChange={handleShoeSizeChange}
                  value={shoeSize}
                  placeholder={shoeSizeError}

                  style={{backgroundColor: shoeSizeError && 'rgba(255, 98, 98, 0.3)' }}
                />

                <select
                  required
                  id="sizetype"
                  value={shoeSizeType}
                  onChange={handleShoeSizeTypeChange}
                 
                  >
                  <option value="" disabled={shoeSizeType ? true : false}>
                    Size Type
                  </option>
                  {shoeSizeTypes.map((sizeType) => (
                    <option key={sizeType} value={sizeType}>
                      {sizeType}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.inputContScroller}>
              <label htmlFor="type">Price Range</label>
              <div>
                <input
                  id="type"
                  type="range"
                  step="50"
                  min="600"
                  max="3000"
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
                <span> ${sliderValue}.00</span>
              </div>
            </div>
            <div className={styles.checkout}>
              <button className={styles.checkoutBut} type="submit">
                Find me the right shoe!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <ShoesList shoeFound={appropriateShoes} />;
  }
};
export default CustomShoes;
