import userReducer, { initialState } from '.';
import {
  INITIALISE_USER,
  initialiseUser,
  CHANGE_INPUT,
  changeInput,
  CHANGE_DATA_USER,
  changeDataUser,
}
  from '../../actions/user';

const fakeState = {
  id: 8,
  pseudonym: 'toto',
  email: 'toto@gmail.com',
  password: 'pass',
  isUserConnected: true,
  errorMessageSigninFormular: 'dsfsd',
  errorMessageSignupFormular: 'fsdfdzs',
  errorStatusCode: '400',
};

describe('user reducer', () => {
  it('should be a function', () => {
    expect(typeof userReducer).toBe('function');
  });
  it('should be a function', () => {
    expect(typeof userReducer()).toBe('object');
  });
  it('should return initial state', () => {
    expect(userReducer()).toBe(initialState);
  });

  describe(CHANGE_DATA_USER, () => {
    it('should be an object', () => {
      const action = changeDataUser(fakeState);
      expect(typeof userReducer({}, action)).toBe('object');
    });
    it('should return fakeData', () => {
      const action = changeDataUser(fakeState);
      expect(userReducer({}, action)).toStrictEqual(fakeState);
    });
  });
  describe(INITIALISE_USER, () => {
    it('should be an object', () => {
      const action = initialiseUser();
      expect(typeof userReducer({}, action)).toBe('object');
    });
    it('should return initialState', () => {
      let action = changeDataUser(fakeState);
      userReducer({}, action);
      action = initialiseUser();
      expect(userReducer({}, action)).toStrictEqual(initialState);
    });
  });
  describe(CHANGE_INPUT, () => {
    it('should be an object', () => {
      const action = changeInput();
      expect(typeof userReducer({}, action)).toBe('object');
    });
    it('should return initialState', () => {
      const action = changeInput(undefined, 'id');
      expect(userReducer(initialState, action)).toStrictEqual(initialState);
    });
    it('should return initialState with modification', () => {
      const action = changeInput(8, 'id');
      expect(userReducer(initialState, action)).toStrictEqual({ ...initialState, id: 8 });
    });
  });
});
