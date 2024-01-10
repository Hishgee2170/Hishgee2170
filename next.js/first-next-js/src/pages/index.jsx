import Box from "../components/information";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          width: "50%",
          backgroundColor: "white",
          paddingBottom: "40px",
          paddingTop: "40px",
        }}
      >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
export default Home;
