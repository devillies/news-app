import React from "react";
import { ScrollView, Text, View, WebView, StyleSheet } from "react-native";
import { Header, Image, ListItem } from "react-native-elements";
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
        <Header
          // leftComponent={{
          //   text: "back",
          //   onPress: () => goBack(),
          //   style: { color: "#fff" }
          // }}
          centerComponent={{
            text: "News",
            style: { color: "#fff", fontSize: 36, paddingBottom: 90 }
          }}
        />
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
