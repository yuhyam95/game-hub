import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c531601f0484982b5940b6626696580",
  },
});
