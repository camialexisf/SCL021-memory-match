import App from './App.js';

describe('App', () => {
 it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
 });
 it('should return random index', ()=>{
    const random = shuffle();
    expect(random  )
 })
});
