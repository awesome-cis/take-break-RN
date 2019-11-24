import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Comment from './src/Comment';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={{
                uri:
                  'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
              }}
              style={styles.image}>
              <Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1481437642641-2f0ae875f836',
                }}
                style={styles.profile}
              />
            </ImageBackground>
          </View>
          <View style={styles.blank}></View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Gwan-duk Kim</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => ''} style={styles.contactButton}>
              <Text style={styles.contactButtonText}>연락하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ''} style={styles.contactButton}>
              <Text style={styles.contactButtonText}>블로그 방문</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemIcon}>👍</Text>
                <Text style={styles.summaryItemText}>123</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemIcon}>🍔</Text>
                <Text style={styles.summaryItemText}>123</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemIcon}>❤️</Text>
                <Text style={styles.summaryItemText}>123</Text>
              </View>
            </View>
            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemIcon}>⭐️</Text>
                <Text style={styles.summaryItemText}>123</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemIcon}>🏊</Text>
                <Text style={styles.summaryItemText}>123</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemIcon}>✏️</Text>
                <Text style={styles.summaryItemText}>123</Text>
              </View>
            </View>
          </View>
          <View style={styles.commentsContainer}>
            <Comment />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const profileWidth = 120;

const styles = StyleSheet.create({
  container: {
    top: 20,
    width: '80%',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    alignItems: 'center',
  },
  profile: {
    position: 'absolute',
    bottom: 0,
    transform: [
      {
        translateY: profileWidth / 2,
      },
    ],
    width: profileWidth,
    height: profileWidth,
    borderWidth: 3,
    borderColor: '#FFF',
    borderRadius: profileWidth / 2,
  },
  blank: {
    height: profileWidth / 2,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginBottom: 3,
  },
  name: {
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contactButton: {
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20,
    borderColor: '#8FC5F2',
    borderWidth: 2,
    width: '40%',
  },
  contactButtonText: {
    fontSize: 12,
    color: '#8FC5F2',
  },
  summaryContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  summaryRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom: 10,
  },
  summaryItem: {
    flexDirection: 'row',
  },
  summaryItemIcon: {
    fontSize: 16,
  },
  summaryItemText: {
    fontSize: 16,
  },
  commentsContainer: {},
});

export default App;
