try {
  throw new Error('We are learning about exception in js');
}catch(e) {
  console.log('name: ', e.name);
  console.log('message: ', e.message);
};

// another exemple.
class UserTypeError extends Error {
  constructor (message) {
    super(message)
    this.name = 'userError';
  };
};

const playload = '{ "type": "PJF" }';

try {
  const { type } = JSON.parse(playload);

  if (!type) throw new UserTypeError('The type of playload did not find');

  if (type === 'PF' || type === 'PJ') {
    console.log('User valided');
  } else throw new UserTypeError('type of user is invalid');
}catch (e) {
  console.log(e.name);
  console.log(e.message);
};
