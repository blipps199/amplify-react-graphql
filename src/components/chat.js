import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { Button, Flex, Heading, Text, TextField, View, Card, ScrollView } from '@aws-amplify/ui-react';
import { listChats } from "../graphql/queries";
import moment from 'moment';
import {
  createChat as createChatMutation,
} from "../graphql/mutations";
import { Auth } from 'aws-amplify';
import { onCreateChat } from '../graphql/subscriptions';

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    async function getUsername() {
      const result = await Auth.currentUserInfo();
      setUsername(result.username);
    }
    getUsername();
  }, []);

  useEffect(() => {
    async function fetchChats() {
      const apiData = await API.graphql({ query: listChats });
      const chatsFromAPI = apiData.data.listChats.items;
      // sort chats by timestamp
      const sortedChats = chatsFromAPI.sort((a, b) => moment(b.timestamp, 'MMM. D, YYYY h:mm a') - moment(a.timestamp, 'MMM. D, YYYY h:mm a'));
      setChats(sortedChats);
    }
    fetchChats();
    const subscription = API.graphql({ query: onCreateChat }).subscribe({
      next: (eventData) => {
        const chat = eventData.value.data.onCreateChat;
        setChats((prevChats) => [...prevChats, chat]);
      },
    });
    return () => subscription.unsubscribe();
  }, []);

  async function createChat(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const date = new Date();
    const formattedDate = `${date.toLocaleString('default', { month: 'short' })}. ${date.getDate()}, ${date.getFullYear()} ${formatAMPM(date)}`;
    const data = {
      username: username,
      message: form.get("message"),
      timestamp: formattedDate,
    };
    await API.graphql({
      query: createChatMutation,
      variables: { input: data },
    });
    event.target.reset();
  }

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  

  return (
    <Card>
      <Heading level={4}>Three Kings Messenger</Heading>
        <ScrollView height="40vh" margin="1rem 0">
            {chats.map((chat) => (
                <Flex key={chat.id || chat.username} direction="row" justifyContent="center" alignItems="center">
                    <Text as="strong" fontWeight={700}>{chat.username}</Text>
                    <Text as="span">{chat.message}</Text>
                    <Text as="span">{chat.timestamp}</Text>
                </Flex>
            ))}
        </ScrollView >
        <Flex as="form" margin="15px 0 0 0" direction="row" justifyContent="center" alignItems="center"  onSubmit={createChat}>
          <TextField
            name="message"
            placeholder="Enter Message"
            label="Enter Message"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Send Message
          </Button>
        </Flex>
    </Card>
    );
}


export default Chat;