// let fetch = require("node-fetch");
// async function _fetching() {
//   let url =
//     "https://newsapi.org/v2/top-headlines?" +
//     "country=us&" +
//     "apiKey=7b86bce8f2f846f19fa53f9c73c89da1";
//   let res = await fetch(url);
//   let result = await res.json();
//   let news = result.articles.map(data => {
//     return {
//       author: data.author,
//       title: data.title
//     };
//     //_newsData(data)
//   });
//   console.log(news);
// }
// // _newsData = data => {
// //   if (data) {
// //     let state = {
// //       author: data.author,
// //       title: data.title
// //     };
// //     let array = [];
// //     array.push(state);
// //     console.log(array);
// //   } else {
// //     return "data not found";
// //   }
// // };
// _fetching();
// // _newsData();

let arr = [
  { id: 1, name: "aa", status: "single" },
  { id: 2, name: "jj", status: "married" },
  { id: 3, name: "tt", status: "divorced" },
  { id: 4, name: "dd", status: "single" }
];
let filteredArr = arr.filter(data => {
  name = "aa";
  return data.name === name ? "not found" : data === name;
});
console.log(filteredArr);

// old touchable
<TouchableOpacity key={idx} onPress={() => this._toggleView(data.url)}>
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
</TouchableOpacity>;
// old mainpage List
<TouchableOpacity key={idx} onPress={() => this._navigate(name)}>
  <View style={styles.container}>
    <Text style={styles.text}>{name}</Text>
  </View>
</TouchableOpacity>;
