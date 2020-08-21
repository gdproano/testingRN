import React from 'react';
import { shallow } from 'enzyme';
import Counter from './index';

describe('Counter component test with Enzyme', () => {
    let counter = {};
    function findByTestIdProp(wrapper, testID) {
     return wrapper.find({ testID});
    }

    beforeEach(() => {
      counter = shallow(<Counter />);
    });
    
   it('should have a text label', () => {
      const text = findByTestIdProp(counter, 'textLabel');
      expect(text).toHaveLength(1);
    });

   it('should increment counter', () => {
      const btnIncrement = findByTestIdProp(counter, 'btnIncrement');
      btnIncrement.at(0).simulate('press');
      const text = findByTestIdProp(counter, 'textLabel');
      expect(text.at(0).props().children).toBe("Counter 1");
    });

    it('should decrement counter', () => {
        const btnIncrement = findByTestIdProp(counter, 'btnDecrement');
        btnIncrement.at(0).simulate('press');
        const text = findByTestIdProp(counter, 'textLabel');
        expect(text.at(0).props().children).toBe("Counter -1");
      });

    it('should set counter value', () => {
        const btnIncrement = findByTestIdProp(counter, 'counterText');
        btnIncrement.at(0).simulate('changeText', 4);
        const text = findByTestIdProp(counter, 'textLabel');
        expect(text.at(0).props().children).toBe("Counter 4");
      });
});