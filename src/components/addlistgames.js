import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { Button, Flex, Heading, Text, TextField, View, Card, Image } from '@aws-amplify/ui-react';
import { listGames } from "../graphql/queries";
import {
  createGame as createGameMutation,
  deleteGame as deleteGameMutation,
} from "../graphql/mutations";

const AddListGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    const apiData = await API.graphql({ query: listGames });
    const gamesFromAPI = apiData.data.listGames.items;
     await Promise.all(
        gamesFromAPI.map(async (game) => {
          if (game.image) {
            const url = await Storage.get(game.name);
            game.image = url;
          }
          return game;
        })
      );
    setGames(gamesFromAPI);
  }

async function createGame(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const image = form.get("image");
  const data = {
    name: form.get("name"),
    genre: form.get("genre"),
    platform: form.get("platform"),
    description: form.get("description"),
    image: image.name,
  };
  if (!!data.image) await Storage.put(data.name, image);
  await API.graphql({
    query: createGameMutation,
    variables: { input: data },
  });
  fetchGames();
  event.target.reset();
}

  async function deleteGame({ id, name }) {
    const newGames = games.filter((game) => game.id !== id);
    setGames(newGames);
    await Storage.remove(name);
    await API.graphql({
      query: deleteGameMutation,
      variables: { input: { id } },
    });
  }

  return (
    <Card>
      <View as="form" margin="3rem 0" onSubmit={createGame}>
        <Heading level={3} margin="0 0 1rem">Add Game</Heading>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <TextField
            name="name"
            placeholder="Name of the Game"
            label="Name of the Game"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="genre"
            placeholder="Genre"
            label="Genre"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="platform"
            placeholder="Platform"
            label="Platform"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Game Description"
            label="Game Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Game
          </Button>
        </Flex>
      </View>
        <Heading level={4}>Current Games</Heading>
        <View margin="1rem 0">
            {games.map((game) => (
                <Flex key={game.id || game.name} direction="row" justifyContent="center" alignItems="center">
                    {game.image && (
                      <Image
                        src={game.image}
                        alt={`visual aid for ${game.name}`}
                        style={{ width: 100 }}
                      />
                    )}
                    <Text as="strong" fontWeight={700}>{game.name}</Text>
                    <Text as="span">{game.genre}</Text>
                    <Text as="span">{game.platform}</Text>
                    <Text as="span">{game.description}</Text>
                    <Button variation="link" onClick={() => deleteGame(game)}>
                        Delete Game
                    </Button>
                </Flex>
            ))}
        </View>
    </Card>
    );
}


export default AddListGames;