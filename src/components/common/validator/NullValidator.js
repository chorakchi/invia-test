function NullValidator (input) {
    if(input)
    {
        return {
          messageEn: null,
          messageFa: null,
          id: '1',
          succFlag: 1,
          errorFlag: 0,
          };
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
    
    export default NullValidator