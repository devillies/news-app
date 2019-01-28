import React from "react";
import { ScrollView, Text, View, WebView, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
class NewsPage extends React.Component {
  state = {
    newsList: [],
    openWeb: false,
    url: ""
  };
  componentDidMount() {
    this._fetching();
  }
  async _fetching() {
    let { navigation } = this.props;
    let news = navigation.getParam("news");
    this.setState({ newsList: news });
  }
  _toggleView(url) {
    let { openWeb } = this.state;
    this.setState({ openWeb: !openWeb, url: url });
  }
  render() {
    let { newsList, openWeb, url } = this.state;
    let { goBack } = this.props.navigation;

    return openWeb ? (
      <WebView
        style={{ marginTop: 20, flex: 1 }}
        source={{ uri: url }}
        onLoad={() => <Text>loading...</Text>}
      />
    ) : (
      <View>
        <HeaderApp title="News" />
        <ScrollView style={styles.newsPage}>
          {newsList.map((data, idx) => {
            return (
              <ListItem
                key={idx}
                title={data.title}
                onPress={() => this._toggleView(data.url)}
                leftAvatar={{ source: { uri: data.image } }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  newsPage: {
    marginTop: 10
  }
});
export default NewsPage;
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
