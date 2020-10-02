import { initEnvironment, useEnvironment } from '@lib/relay';
import React from 'react';
import { Environment } from 'relay-runtime';

describe('Lib Relay', () => {
    it('should create a new Environment', () => {
        const resolve = initEnvironment();
        expect(resolve).toBeInstanceOf(Environment);
    });

    it('should useEnvironment return a Environment', () => {
        const environment = initEnvironment();
        jest.spyOn(React, 'useMemo').mockImplementation(() => { return initEnvironment(); });
        const resolve = useEnvironment(environment.getStore().getSource().toJSON());
        expect(resolve).toBeInstanceOf(Environment);
    });

    it('should return Environment with the sended Records', () => {
        const recordsMap = initEnvironment();
        const resolve = initEnvironment(recordsMap.getStore().getSource().toJSON());

        expect(resolve.getStore().getSource().toJSON())
            .toEqual(recordsMap.getStore().getSource().toJSON());
    });
});