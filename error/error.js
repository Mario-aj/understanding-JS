try {
  throw new Error('We are learning about exception in js');
}catch(e) {
  console.log('name: ', e.name);
  console.log('message: ', e.message);
};
