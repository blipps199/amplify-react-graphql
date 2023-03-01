import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { Button, Flex, Heading, Text, TextField, View, Card } from '@aws-amplify/ui-react';
import { listPlayers } from "../graphql/queries";
import {
  createPlayer as createPlayerMutation,
  deletePlayer as deletePlayerMutation,
} from "../graphql/mutations";

const AddListGames = () => {
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
    setPlayers(newPlayers);
    await Storage.remove(name);
    await API.graphql({
      query: deletePlayerMutation,
      variables: { input: { id } },
    });
  }

  return (
    <Card>
      Games!
    </Card>
    );
}


export default AddListGames;