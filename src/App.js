import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Flex,
  Heading,
  View,
  Grid,
  Card,
  Menu,
  MenuItem,
  Divider,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import {
 NavBar 
} from './ui-components';

import AddListPlayers from './components/addlistplayers'
import AddListGames from './components/addlistgames'
import Chat from './components/chat'

const App = ({ signOut }) => {

  const [username, setUsername] = useState(null);

  useEffect(() => {
    async function getUsername() {
      const result = await Auth.currentUserInfo();
      setUsername(result.username);
    }

    getUsername();
  }, []);
  
  const [showComponents, setShowComponents] = useState([false, false, true]);

  const toggleComponent = (index) => {
    const newShowComponents = showComponents.map((show, i) => {
      if (i === index) {
        return true;
      } else {
        return false;
      }
    });
    setShowComponents(newShowComponents);
  };
  
  return (
    <View className="App">
    
      <NavBar
        className="navbar"
        overrides={{
          Chat: { onClick: () => toggleComponent(2) },
          Players: { onClick: () => toggleComponent(0) },
          Games: { onClick: () => toggleComponent(1) }
        }}
      />
      
      
      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateRows="1fr"
      >
      { /*
        <Card>
          <Flex direction="row" justifyContent="space-between" alignItems="center">
            <Heading level={1}>Three Kings</Heading>
            <Flex alignItems="center">
              <p>Hello, {username}!</p>
              <Menu menuAlign="end">
                <MenuItem onClick={() => toggleComponent(2)}>
                  Chat
                </MenuItem>
                <MenuItem onClick={() => toggleComponent(0)}>
                  Players
                </MenuItem>
                <MenuItem onClick={() => toggleComponent(1)}>
                  Games
                </MenuItem>
                <Divider />
                <MenuItem onClick={signOut}>
                  Sign Out
                </MenuItem>
              </Menu>
            </Flex>
          </Flex>
        </Card>
      */}
      
        {showComponents[2] && <Chat/>}
        {showComponents[0] && <AddListPlayers/>}
        {showComponents[1] && <AddListGames/>}
      
      </Grid>
      

    </View>
  );
};

export default withAuthenticator(App);