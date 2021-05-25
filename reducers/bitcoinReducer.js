import * as actions from "../actions";

const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: "BTC",
        data: [],
        backgroundColor: "rgba(238, 175, 0, 0.4)",
        fill: true,
        borderColor: "rgba(238, 175, 0, 0.5)",
        pointBorderColor: "rgba(238, 175, 0, 0.7)",
      },
    ],
  },
};

const bitcoinReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.AWAITING_BITCOIN:
      return {
        ...state,
        loading: true,
      };

    case actions.REJECTED_BITCOIN:
      return {
        ...state,
        loading: false,
      };

    case actions.SUCCESS_BITCOIN:
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [
            {
              label: "BTC",
              data: payload.data,
              backgroundColor: "rgba(238, 175, 0, 0.4)",
              fill: true,
              borderColor: "rgba(238, 175, 0, 0.5)",
              pointBorderColor: "rgba(238, 175, 0, 0.7)",
            },
          ],
        },
      };

    default:
      return state;
  }
};

export default bitcoinReducer;
