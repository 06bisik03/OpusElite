import { useParams } from 'react-router-dom';

import CustomShoes from './CustomShoes';
import CustomSuits from './CustomSuits';
const Customisation = () => {
    const productType = useParams('custom').producttype;
    if(productType === "suits") {
        return <CustomSuits />
            
    
    } else if(productType ==="shoes" ) {
        return <CustomShoes />
    }
    
}
export default Customisation;