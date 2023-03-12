import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { Button, Flex, Heading, Text, TextField, Card, ScrollView, Badge, View } from '@aws-amplify/ui-react';
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
  const [lastUsername, setLastUsername] = useState('');

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
    const formattedDate = formatAMPM(date);
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
    let hours = date.getHours() % 12 || 12;
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const month = date.getMonth() + 1; // month is zero-based, add 1 to get the actual month number
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2); // get last 2 digits of the year
  
    const dateString = `${month}/${day}/${year}`;
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return `${dateString} ${timeString}`;
  }

  return (
  <Card>
    <Heading level={4}>Three Kings Messenger</Heading>
    <Badge variation="info">
      Badge
    </Badge>
    <Badge variation="info">
      Badge
    </Badge>
    <Badge variation="info">
      Badge
    </Badge>
    <ScrollView height="40vh" maxWidth="50%" margin="1rem auto" onSubmit={createChat}>
      {chats.map((chat, index) => {
        const isFirstInGroup = index === 0 || chat.username !== chats[index - 1].username;
        return (
          <View as="div">
            {isFirstInGroup && (
              <Text as="strong" style={{ float: chat.username === username ? 'right' : 'left', clear: 'both' }} fontWeight={700}>
                {chat.username}
              </Text>
            )}
            <View as="div" style={{ clear: 'both' }}></View>
            <View
              as="div"
              className="msg-container"
              key={chat.id || chat.username}
              backgroundColor="lightgray"
              borderRadius="6px"
              border="1px solid var(--amplify-colors-black)"
              color="var(--amplify-colors-blue-60)"
              
              maxWidth="100%"
              padding="10px"
              minWidth="20%"
              maxWidth="65%"
              style={{ float: chat.username === username ? 'right' : 'left' }}
            >
              <Text variation="warning" as="span">
                {chat.message}
              </Text>
              <p className="msg-timestamp">
                {chat.timestamp}
              </p>
            </View>
          </View>
        )
      })}
    </ScrollView>
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