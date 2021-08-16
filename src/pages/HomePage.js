import React from "react";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Simply the Best Phonebook application!</h1>
    </div>
  );
};

export default HomePage;
