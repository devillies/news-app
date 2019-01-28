import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { ListItem } from "react-native-elements";
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
      <View style={{ flex: 1 }}>
        <HeaderApp title="News Source" />
        <ScrollView style={styles.scrollStyle}>
          <View>
            {sourcesName.map((name, idx) => {
              return (
                <ListItem
                  key={idx}
                  title={name}
                  onPress={() => this._navigate(name)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: "#fff",
    marginTop: 10
  }
});
export default MainPage;

const HeaderApp = props => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#4a89ef"
      }}
    >
      <Text style={{ fontSize: 36, color: "white" }}>{props.title}</Text>
    </View>
  );
};
