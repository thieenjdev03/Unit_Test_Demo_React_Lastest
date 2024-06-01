import { removeConfigFromObjects } from '../../utils/utils';
import { render, fireEvent } from '@testing-library/react';
import { ModalComponent } from './ModalComponent';
import CheckBoxListSecondary from './CheckboxListSecondary'
import Homepage from './Homepage';
describe('Homepage Component', () => {
    it('remove all config from obj of mss and business in mss', () => {
        const inputDataObj = {
            mss: {
                config: { someConfig: true },
                business: {
                    config: { anotherConfig: false },
                    details: 'some details'
                },
                data: 'some data'
            },
            otherField: 'other value'
        };

        const outputDataObj = {
            mss: {
                business: {
                    details: 'some details'
                },
                data: 'some data'
            },
            otherField: 'other value'
        };

        const newUserEhealthProfile = removeConfigFromObjects(inputDataObj);

        expect(newUserEhealthProfile).toEqual(outputDataObj);
    });
    const mockUserList =
  [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }];

});
