// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isvalid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isvalid).toBe('function');
    });

    it('debería retornar true para "4485715860868875"', () => {
      // escribe aquí tu test
      expect(validator.isvalid("4485715860868875")).toBe(true);
    });

    it('debería retornar true para "5390700823285988"', () => {
      expect(validator.isvalid("5390700823285988")).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isvalid("1234567890")).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe("############5616");
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify("1")).toBe("1");
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe("######orld");
    });
  });
});
