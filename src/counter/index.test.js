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
    
   it('renders without crashing', () => {
      const text = findByTestIdProp(counter, 'displayText');
      expect(text).toHaveLength(1);
    });

   it('renders without crashing', () => {
      const btnIncrement = findByTestIdProp(counter, 'btnIncrement');
      btnIncrement.at(0).simulate('press');
      const text = findByTestIdProp(counter, 'texto');
      expect(text.at(0).props().children).toBe("Count: 1");
    });

    it('renders without crashing', () => {
        const btnIncrement = findByTestIdProp(counter, 'btnDecrement');
        btnIncrement.at(0).simulate('press');
        const text = findByTestIdProp(counter, 'texto');
        expect(text.at(0).props().children).toBe("Count: -1");
      });
});