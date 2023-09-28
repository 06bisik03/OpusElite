const UseFindTitle = (productType, sex) => {
    let returnal;
    let sexFirstLetterCapital = sex.charAt(0).toUpperCase() + sex.slice(1);
    switch(productType) {
        case "suits": 
            returnal = `${sexFirstLetterCapital}'s Suits` 
            break;
        case "shoes":
            returnal = `${sexFirstLetterCapital}'s Shoes`
            break;
        case "trousers":
            returnal = `${sexFirstLetterCapital}'s Trousers`
            break;
        case "scents": 
            returnal = `${sexFirstLetterCapital}'s Scents`
            break;
        case "skirts":
            returnal = 'Women\'s Skirts'
            break;
        case "blouses":
            returnal = 'Women\'s Blice'
            break;
        case "shirts":
            returnal =`Men's Shirts`
            break;
        default: 
           break;
    }
    return returnal;

}
export default UseFindTitle;


