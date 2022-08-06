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

   describe('shuffle', () => {

      it('should be an object', () => {
         expect(typeof shuffle).toBe('object');
      });

   });

  
});
