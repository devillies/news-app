import React from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
class MainPage extends React.Component {
  navigationOptions = {
    title: "welcome"
  };
  state = {
    news: []
  };

  componentDidMount() {
    this._fetching();
  }

  async _fetching() {
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=7b86bce8f2f846f19fa53f9c73c89da1";
    let res = await fetch(url);
    let result = await res.json();
    let newsData = result.articles.map(data => {
      return {
        source: data.source,
        author: data.author,
        title: data.title,
        url: data.url,
        urlToImage: data.urlToImage
      };
    });
    this.setState({ news: newsData });
  }

  _navigate(dataName) {
    let { news } = this.state;
    let { navigate } = this.props.navigation;
    let filteredNews = news.filter(data => {
      return dataName == data.source.name ? data : null;
    });
    console.log(filteredNews);
    navigate("Page", { news: filteredNews });
  }
  render() {
    let { navigate } = this.props.navigation;
    let { news } = this.state;
    return (
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        <View style={{ borderWidth: 1, alignItems: "stretch" }}>
          {news.map(({ source }, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => this._navigate(source.name)}
              >
                <View style={styles.container}>
                  <Text>{source.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
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
export default MainPage;
