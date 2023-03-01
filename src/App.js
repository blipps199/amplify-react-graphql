import React, { useState } from "react";
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

import AddListPlayers from './components/addlistplayers'
import AddListGames from './components/addlistgames'

const App = ({ signOut }) => {
  
  const [showComponents, setShowComponents] = useState([true, false]);

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
      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateRows="1fr"
      >
        <Card>
          <Flex direction="row" justifyContent="space-between" alignItems="center">
            <Heading level={1}>Three Kings</Heading>
            <Menu menuAlign="end">
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
        </Card>
        
        {showComponents[0] && <AddListPlayers/>}
        {showComponents[1] && <AddListGames/>}
      </Grid>

    </View>
  );
};

export default withAuthenticator(App);