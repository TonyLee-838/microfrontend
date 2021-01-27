module.exports = {
  module: {
    // Define Loaders here:
    // It tells webpack what files are going to load and how to load them.
    rules: [
      {
        //It match all the files with an extension of '.js' OR '.mjs'
        test: /\.m?js/,
        //Do not try to process files from node_modules/ folder
        exclude: /node_modules/,
        //Specify what processor/loader we what to use.
        use: {
          //load all these file using babel
          loader: "babel-loader",
          options: {
            //"@babel/preset-env":
            // Transform syntaxes after ES2015 into ES5 form.
            //
            //"@babel/preset-react":
            // babel is going to process all the '.jsx' files about React
            presets: ["@babel/preset-env", "@babel/preset-react"],

            //Add some additional features for our code to run well inside the browser.
            //Like:async-await syntax...
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
