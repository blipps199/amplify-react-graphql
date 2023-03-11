import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { Button, Flex, Heading, Text, TextField, View, Card } from '@aws-amplify/ui-react';
import { listPlayers } from "../graphql/queries";
import {
  createPlayer as createPlayerMutation,
  deletePlayer as deletePlayerMutation,
} from "../graphql/mutations";

const AddListPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    const apiData = await API.graphql({ query: listPlayers });
    const playersFromAPI = apiData.data.listPlayers.items;
    await Promise.all(
      playersFromAPI.map(async (player) => {
        return player;
      })
    );
    setPlayers(playersFromAPI);
  }
   
  async function createPlayer(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      playername: form.get("playername"),
      gamertag: form.get("gamertag"),
      location: form.get("location"),
      description: form.get("description"),
    };
    await API.graphql({
      query: createPlayerMutation,
      variables: { input: data },
    });
    fetchPlayers();
    event.target.reset();
  }

  async function deletePlayer({ id, name }) {
    const newPlayers = players.filter((player) => player.id !== id);
    
    try {
      const response = await API.get('deleteplayer', '/1');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    
    // setPlayers(newPlayers);
    // await Storage.remove(name);
    // await API.graphql({
    //   query: deletePlayerMutation,
    //   variables: { input: { id } },
    // });
  }
  
  async function fetchHelloWorld(id) {
    try {
      const response = await API.get('deleteplayer', '/1');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <Card>
    
      <Button variation="link" onClick={() => fetchHelloWorld()}>
        Testing
      </Button>

      <View as="form" margin="3rem 0" onSubmit={createPlayer}>
        <Heading level={3} margin="0 0 1rem">Add Player</Heading>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <TextField
            name="playername"
            placeholder="Player Name"
            label="Player Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="gamertag"
            placeholder="Gamertag"
            label="Gamertag"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="location"
            placeholder="Location"
            label="Location"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Player Description"
            label="Player Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Player
          </Button>
        </Flex>
      </View>
        <Heading level={4}>Current Players</Heading>
        <View margin="1rem 0">
            {players.map((player) => (
                <Flex key={player.id || player.playername} direction="row" justifyContent="center" alignItems="center">
                    <Text as="strong" fontWeight={700}>
                        {player.playername}
                    </Text>
                    <Text as="span">{player.gamertag}</Text>
                    <Text as="span">{player.location}</Text>
                    <Text as="span">{player.description}</Text>
                    <Button variation="link" onClick={() => deletePlayer(player)}>
                        Delete Player
                    </Button>
                </Flex>
            ))}
        </View>
    </Card>
    );
}


export default AddListPlayers;