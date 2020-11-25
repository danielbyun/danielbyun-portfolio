const importAll = (directory) => {
  const images = {};

  directory.keys().forEach((item, index) => {
    images[item.replace("./", "")] = directory(item);
  });

  return images;
};

export const covidAssets = importAll(
  require.context(
    "../../assets/images/covidTracker",
    false,
    /\.(png|jpe?g|svg|gif)$/
  )
);

export const devConnectorAssets = importAll(
  require.context(
    "../../assets/images/devConnector",
    false,
    /\.(png|jpe?g|svg|gif)$/
  )
);

export const ecommerceAssets = importAll(
  require.context(
    "../../assets/images/eCommerce",
    false,
    /\.(png|jpe?g|svg|gif|mov)$/
  )
);

export const chatAssets = importAll(
  require.context(
    "../../assets/images/socketChat",
    false,
    /\.(png|jpe?g|svg|gif|mov)$/
  )
);

export const ppmToolAssets = importAll(
  require.context(
    "../../assets/images/ppmTool",
    false,
    /\.(png|jpe?g|svg|gif)$/
  )
);

export const materialAssets = importAll(
  require.context(
    "../../assets/images/materialui",
    false,
    /\.(png|jpe?g|svg|gif)$/
  )
);

export const flowerStoreAssets = importAll(
  require.context(
    "../../assets/images/flowerStore",
    false,
    /\.(png|jpe?g|svg|gif)$/
  )
);

export const getExtension = (url) => {
  if (!url) return;
  const re = /(?:\.([^.]+))?$/;

  return re.exec(url)[1];
};
