import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('renders without crashing', () => {
    shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);

    const playerNameRendered = playerComponent.find('.Player__name').text();

    expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
    const playerScorePassed = 21;
    const playerComponent = shallow(<Player score={playerScorePassed} />);

    const playerScoreRendered = playerComponent.find('.Player__score').text();
    const playerScoreInt = Number.parseInt(playerScoreRendered);

    expect(playerScoreInt).toEqual(playerScorePassed);
});

it('calls correct callback', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const plusButton = playerComponent.find('.Player__button').at(0);
    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('calls correct callback', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const minusButton = playerComponent.find('.Player__button').at(1);
    minusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('calls correct callback', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerScoreChange} />);

    const deleteButton = playerComponent.find('.Player__button_delete');
    deleteButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith();
});
