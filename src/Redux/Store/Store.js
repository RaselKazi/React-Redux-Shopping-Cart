const { createStore } = require("redux");
const { default: Reducer } = require("../Reducer/Reducer");

const store = createStore(Reducer)

export default store