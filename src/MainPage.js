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
    news: [],
    sourcesName: []
  };

  componentDidMount() {
    this._fetching();
  }

  async _fetching() {
    let res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=7b86bce8f2f846f19fa53f9c73c89da1"
    );
    let result = await res.json();
    let newsData = result.articles.map(data => {
      return {
        name: data.source.name,
        title: data.title,
        url: data.url,
        image: data.urlToImage
      };
    });
    sourcesName = [];
    for (let data of newsData) {
      if (!sourcesName.includes(data.name)) {
        sourcesName.push(data.name);
      }
    }
    this.setState({ news: newsData, sourcesName: sourcesName });
  }

  _navigate(dataName) {
    let { news } = this.state;
    let { navigate } = this.props.navigation;
    let filteredNews = news.filter(data => {
      return dataName === data.name;
    });
    navigate("Page", { news: filteredNews });
  }

  render() {
    let { navigate } = this.props.navigation;
    let { news, sourcesName } = this.state;

    return (
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        <View style={{ borderWidth: 1, alignItems: "stretch" }}>
          {sourcesName.map((name, idx) => {
            return (
              <TouchableOpacity key={idx} onPress={() => this._navigate(name)}>
                <View style={styles.container}>
                  <Text style={styles.text}>{name}</Text>
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
  text: {
    fontSize: 24
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 7,
    alignItems: "stretch"
  }
});
export default MainPage;
