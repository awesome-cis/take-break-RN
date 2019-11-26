import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

interface Props extends NavigationStackScreenProps {}

class DetailsScreen extends React.Component<Props> {
  render() {
    console.log(this.props);

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default DetailsScreen;
