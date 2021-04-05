 let valuegBeforeConvertion = '345';
 console.log(typeof(valuegBeforeConvertion));
 
 let valueAfterConvertionToInteger = parseInt(valuegBeforeConvertion, 10);
 console.log(typeof(valueAfterConvertionToInteger));

 let valueAfterConvertionToFloat = parseFloat(valuegBeforeConvertion);
 console.log(typeof(valueAfterConvertionToFloat));

 let useNumberMethod = Number(valuegBeforeConvertion);
 console.log(typeof(useNumberMethod));
