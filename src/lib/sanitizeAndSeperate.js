import uniqBy from "lodash/uniqBy";

const sanitizeAndSeperate = data => {
  // recreate data collection correcting miss-spelled key " tag"
  const correctedData = data.map(each => {
    let tag, content;
    [tag, content] = Object.values(each);
    return {
      tag,
      content
    };
  });

  // find all unique tags and return an array of filter types
  const filterTypesArray = uniqBy(correctedData, "tag").map(
    each => each["tag"]
  );
  return {
    filterTypesArray,
    correctedData
  };
};

export default sanitizeAndSeperate;
