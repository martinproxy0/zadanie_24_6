import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
    shallow(<AddPlayer />);
});

it('calls correct callback', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
    const nameInput = addPlayerComponent.find('input').first().getDOMNode();

    nameInput.value = 'Marcin';

    const form = addPlayerComponent.find('form');
    form.simulate('submit');

    expect(onPlayerAdd).toBeCalledWith('Marcin');

});