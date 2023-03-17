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
} from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import AddListPlayers from './components/addlistplayers'
import AddListGames from './components/addlistgames'
import Chat from './components/chat'
import PrivacyPolicy from './components/privacypolicy'
import Terms from './components/terms'

const App = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    async function getUsername() {
      const result = await Auth.currentUserInfo();
      setUsername(result.username);
    }
    getUsername();
  }, []);
  
  const [showComponents, setShowComponents] = useState([false, false, true, false, false]);

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
  
  const signOut = async () => {
    try {
      await Auth.signOut();
      return <Navigate to="/login" />;
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  
  return (
    <Router>
      <View className="App">
        <Grid
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateRows="1fr"
        >
          <Card>
            <Flex direction="row" justifyContent="space-between" alignItems="center">
              <Heading level={1}>Three Kings</Heading>
              <Flex alignItems="center">
                <p>Hello, {username}!</p>
                  <Menu menuAlign="end">
                    <MenuItem>
                      <Link to="/chat" onClick={() => toggleComponent(2)}>
                        Chat
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/players" onClick={() => toggleComponent(0)}>
                        Players
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/games" onClick={() => toggleComponent(1)}>
                        Games
                      </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Link to="/privacy-policy" onClick={() => toggleComponent(3)}>
                        Privacy Policy
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/terms" onClick={() => toggleComponent(4)}>
                        Terms and Conditions
                      </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Link onClick={signOut}>
                        Sign Out
                      </Link>
                    </MenuItem>
                  </Menu>

              </Flex>
            </Flex>
          </Card>

          <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/players" element={<AddListPlayers />} />
            <Route path="/games" element={<AddListGames />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/" element={<Navigate to="/chat" />} />
          </Routes>
        </Grid>
      </View>
    </Router>
  );
};

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Please sign in to access the app.</p>
    </div>
  );
};

export default App;
