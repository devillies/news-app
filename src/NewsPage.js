import React from "react";
import {
  ScrollView,
  Text,
  View,
  WebView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
class NewsPage extends React.Component {
  state = {
    newsList: []
  };
  componentDidMount() {
    this._fetching();
  }
  async _fetching() {
    let { navigation } = this.props;
    let news = navigation.getParam("news");
    this.setState({ newsList: news });
  }
  _navigate(url) {
    console.log(url);
    return <WebView source={{ uri: url }} />;
  }

  render() {
    let { newsList } = this.state;

    return (
      <ScrollView style={styles.mainPage}>
        {newsList.map((data, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => this._navigate(data.url)}
            >
              <View>
                <Text style={styles.container}>
                  {data.title}-{data.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
let styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    margin: 40
  },
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: "stretch"
  }
});
export default NewsPage;
