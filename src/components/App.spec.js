import App from './App.js';
import data from '../data/cartoon-network/cartoon-network.js'
import shuffle from './random.js';

describe('App', () => {
   it('should render without crashing', () => {
      const el = App();
      expect(el instanceof HTMLElement).toBe(true);
   });

   it('should be an object', () => {
      expect(typeof data).toBe('object');
   });

   /*test('App contiene cartas', () => {
      expect(App()).toContain('div')

  });*/
   /*test('El array debe contener 2 elementos o menos', () => {
      expect(pairs()).toHaveLength(0,1,2);
  })*/

   describe('shuffle', () => {

      it('should be an object', () => {
         expect(typeof shuffle).toBe('object');
      });

   });  
});

describe("data", () =>{

it('should be an object', () => {
   expect(typeof data).toBe('object');
});

test('data contiene id', () => {
   expect(data.items[0].id).toEqual("adventureTime")})

});

