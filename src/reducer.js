import sanitizeAndSeperate from "./lib/sanitizeAndSeperate";

export default function reducer(state = [], action) {
  switch (action.type) {
    case "SET_FILTER":
      state = {
        ...state,
        selectedFilter: action.payload.selectedFilter
      };
      return state;
    case "SET_DATA":
      const { filterTypesArray, correctedData } = sanitizeAndSeperate(
        action.payload
      );
      state = {
        ...state,
        filterTypes: [...filterTypesArray],
        data: [...correctedData]
      };
      return state;
    default:
      return state;
  }
}
