import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

type Props = {};

const Comment: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://picsum.photos/id/514/200/200',
          }}
        />
      </View>
      <View style={styles.contentsContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.nameText}>Gwan-duk Kim</Text>
          <Text style={styles.createdDateText}>2019. 10. 11.</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text
            style={styles.messageText}
            ellipsizeMode={'tail'}
            numberOfLines={2}>
            가나다라 가나다라 가나다라 가나다라 가나다라 가나다라 가나다라
            가나다라 가나다라 가나다라. Lorem ipsum dolar amit. Lorem ipsum
            dolar amit. Lorem ipsum dolar amit. Lorem ipsum dolar amit.
          </Text>
        </View>
      </View>
    </View>
  );
};

const profileWidth = 50;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
  },
  profileContainer: {
    flexShrink: 0,
    paddingRight: 10,
  },
  profileImage: {
    width: profileWidth,
    height: profileWidth,
    borderRadius: profileWidth / 2,
  },
  contentsContainer: {
    flexGrow: 1,
    flexBasis: 0,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontWeight: 'bold',
    marginLeft: 0,
    marginRight: 'auto',
  },
  createdDateText: {
    marginRight: 0,
    color: '#ccc',
    fontSize: 12,
  },
  bodyContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  messageText: {},
});

export default Comment;
