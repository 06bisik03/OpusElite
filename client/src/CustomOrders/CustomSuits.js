import styles from './CustomSuits.module.css';
import {useState} from 'react';

import UseCustomShop from '../Hooks/UseCustomShop';

import SuitsList from './SuitsList';
const linenColours = ['Brown', 'Navy', 'Grey','Light-Brown', 'Midnight-Blue'];
const itaWoolColours = ['Black', 'Navy', 'Grey', 'Bisque', 'Blue'];
const itaCottonColours = ['Black','Navy','Grey', 'Sapphire', 'Blue'];
const cashmereColours = ['Black', 'Grey', 'Navy', 'Light-Grey','Midnight-Blue']

const CustomSuits = () => {
    const [sliderValue, setSliderValue] = useState(6000);
const [suitSize, setSuitSize] = useState(null);
    const [suitMaterial, setSuitMaterial] = useState("");
    const [suitColour, setSuitColour] = useState("");
    const [errorSize, setErrorSize] = useState(null)
    const [appropriateSuits, setAppropriateSuits] = useState(null);
    const [availableColours, setAvailableColours] = useState([])
const submissionHandler = async (e) => {
  e.preventDefault();

  const findAppropriateSuits = {
    custom_suit_colour: suitColour ,
    custom_suit_material: suitMaterial,
    custom_suit_max_price: sliderValue
  }
  if(suitSize > 70 || suitSize < 32) {
    setErrorSize('Choose size between 32 and 72')
    setSuitSize('')
  } else {

  const appropriateSuits = await UseCustomShop('suit', findAppropriateSuits, 'getCustomData');
  const suitFound =  appropriateSuits.data[0];
  const newSuit = {
    custom_product_size: suitSize,
    ...suitFound
  }

  setAppropriateSuits(newSuit)
} 
}

const handleSizeChange = (event) => {
  const newValue = event.target.value;
  setSuitSize(newValue);
};
    const handleSuitColourChange = (event) => {
      const newValue = event.target.value;
      setSuitColour(newValue);
    };
    const handleSuitMaterialChange = (event) => {
      const newValue = event.target.value;
      switch(newValue) {
        case 'Linen': 
          setAvailableColours(linenColours);
          break;
        case 'Italian Wool':
          setAvailableColours(itaWoolColours);
          break;
        case 'Italian Cotton':
          setAvailableColours(itaCottonColours);
          break;
        case 'Cashmere':
          setAvailableColours(cashmereColours);
          break;
        default:
          break;
      }
      setSuitMaterial(newValue);
    };
  

    const handleSliderChange = (event) => {
      const newValue = event.target.value;
      setSliderValue(newValue);
    };
    if(!appropriateSuits) {
      return (
        <div className={styles.customOrdersContainer}>
          <div className={styles.formCustom}>
            <form className={styles.formSuits}>
              <div className={styles.inputCont}>
                <label htmlFor="type">Custom Suit Material</label>
                <select
                  id="material"
                  value={suitMaterial}
                  onChange={handleSuitMaterialChange}>
                  <option value="" disabled={suitMaterial ? true : false}>Select a Suit Material</option>
                  <option value="Italian Wool">Italian Wool</option>
                  <option value="Italian Cotton">Italian Cotton</option>
                  <option value="Linen">Linen</option>
                  <option value="Cashmere">Cashmere</option>
  
  
                </select>
              </div>
              <div className={styles.inputCont}>
                <label htmlFor="type">Custom Suit Colour</label>

               
                <select
                  id="color"
                  value={suitColour}
                  onChange={handleSuitColourChange}>
                  <option value="" disabled={suitColour ? true : false}>Select a Suit Color</option>
                  {availableColours.map(colour => {
                  return <option value={colour}>{colour}</option>
                })}
                </select>
              </div>
              <div className={styles.inputCont}>
                <label htmlFor="type">Custom Suit Size</label>
                  <input id="type" required={true} placeholder={errorSize} style={{backgroundColor: errorSize && "rgba(255, 98, 98, 0.3)"}}value={suitSize} onChange={handleSizeChange} />
              
  
              </div>
              <div className={styles.inputContScroller}>
                <label htmlFor="type">Price Range</label>
                <div>
                  <input
                    id="type"
                    type="range"
                    step="50"
                    min="6000"
                    max="10000"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    required
                  />
                  <span>
                    ${sliderValue}.00</span>
                </div>
              </div>
              <div className={styles.checkout}>
                <button type="submit"onClick={submissionHandler} className={styles.checkoutBut}>Find me the right suits!</button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <SuitsList suitFound={appropriateSuits}/>
    }
   
  };
  export default CustomSuits;
