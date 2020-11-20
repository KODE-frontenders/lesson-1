module.exports = {
  extends: ["react-app"],
  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": 0,
      },
    },
  ],
};
