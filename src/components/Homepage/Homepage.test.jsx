import { removeConfigFromObjects } from '../../utils/utils';
import { render, fireEvent } from '@testing-library/react';
import { ModalComponent } from './ModalComponent';

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
});
