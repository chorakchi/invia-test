function EnglishCharValidator(input) {

  if(input){
    if (/[^A-Za-z]/g.test(input) && input) {
      return {
        messageEn: 'contains characters other than English',
        messageFa: 'شامل نویسه های غیر انگلیسی است',
        id: '0',
        succFlag: 0,
        errorFlag: 1,
      };
    } else {
      return {
        messageEn: null,
        messageFa: null,
        id: '1',
        succFlag: 1,
        errorFlag: 0,
      };
    
    }
      } else{
        return {
          messageEn: 'this value require',
          messageFa: 'این مقدار  ضروری است',
          id: '0',
          succFlag: 0,
          errorFlag: 1,
        };
      }
  



  
}

export default EnglishCharValidator