function NumberNotNullValidator(input) {

  if(input){
    if (/[^0-9]/g.test(input) && input) {
      return {
        messageEn: 'contains characters other than Number',
        messageFa: 'شامل نویسه های غیر عددی است',
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

export default NumberNotNullValidator