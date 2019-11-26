import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

interface Props extends NavigationStackScreenProps {}

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default HomeScreen;
