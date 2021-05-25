export const AWAITING_BITCOIN = "AWAITING_BITCOIN";
export const REJECTED_BITCOIN = "REJECTED_BITCOIN";
export const SUCCESS_BITCOIN = "SUCCESS_BITCOIN";

import axios from "axios";
import moment from "moment";

export const getData =
  ({ number, time }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: AWAITING_BITCOIN,
      });

      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD?apikey=8aa09e5e3bf95a4a1f8d9c73a7da61cf`
      );
      // console.log("RESPONSE", response.data);

      const labels = [];
      const data = [];

      for (let i = 0; i < response.data.length; i++) {
        data.unshift(response.data[i].close);
        labels.unshift(moment(response.data[i].date).format("LT"));

        if (i === number - 1) {
          break;
        }
      }

      dispatch({
        type: SUCCESS_BITCOIN,
        payload: {
          data,
          labels,
        },
      });
    } catch (e) {
      dispatch({
        type: REJECTED_BITCOIN,
      });
    }
  };
