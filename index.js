/* Generate otp from allowed length */

const unique = (min, max) => {
    const random = Math.random();
    return Math.floor(random * (max - min) + min);
  }
  
/* Generate OTP of the length */
const setNumber = (length) => {

    /* Set default value */
    length = length || 4
    
    const allowNumbers = '0123456789';
    let otp = ''
    
    for (i = otp.length; i < length; i++) 
    {
        const index = unique(0, allowNumbers.length - 1);
        otp += allowNumbers[index];
    }
    return otp
}


/* to check OTP or Password timestamp */

const verifyOTP = (dateString, min) => {
    try
    {
        const time = (dateString) => {
            let timeInMilliseconds = new Date()  - new Date(dateString);
            return (timeInMilliseconds/1000/60);   // convert to years
        }
        

        if(time(dateString) < min)
        {
            return  true
        }
        else
        {
            return false
        }
    }
    catch (err)
    {
        return err
    }
}


module.exports = { 
    setNumber,
    verifyOTP
}
  
  