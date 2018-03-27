import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App players={[]} />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    }
  ]
  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(0, -3);

  const playersAfterUpdate = appComponent.state().players;

  expect(playersAfterUpdate[0].score).toEqual(2);

});

it('should add player to state', () => {
  const appComponent = shallow(<App players={[]} />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');


  const players = appComponent.state().players;

  expect(players[2].score).toEqual(0);
  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Ania');
});

it('should delete player from state', () => {
  const appComponent = shallow(<App players={[]} />);

  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove('Ali');


  const players = appComponent.state().players;

  expect(players.length).toEqual(1);
});