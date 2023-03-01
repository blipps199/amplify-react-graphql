import React from "react";
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
  withAuthenticator,
} from '@aws-amplify/ui-react';

import AddListPlayers from './components/addlistplayers'

const App = ({ signOut }) => {
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
              <MenuItem  onClick={signOut}>
                Sign Out
              </MenuItem>
            </Menu>
          </Flex>
        </Card>

        <AddListPlayers/>

      </Grid>

    </View>
  );
};

export default withAuthenticator(App);