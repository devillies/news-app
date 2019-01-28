import React from "react";
import {
  ScrollView,
  Text,
  View,
  WebView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
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
      <ScrollView style={styles.mainPage}>
        <Text style={styles.title}>News</Text>
        {newsList.map((data, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => this._toggleView(data.url)}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row"
                }}
              >
                <Image
                  style={{ height: 100, width: 100, alignSelf: "flex-start" }}
                  source={{ uri: data.image }}
                />
                <View style={styles.textWrapper}>
                  <Text style={styles.text}>{data.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
let styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 30
  },
  text: {
    fontSize: 18
  },
  textWrapper: {
    flex: 1,
    alignItems: "stretch",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  }
});
export default NewsPage;
