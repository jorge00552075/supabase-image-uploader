import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function LinearIndeterminate() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width={400}
      height={128}
      padding="30px"
      borderRadius={3}
      boxShadow={3}
      overflow="auto"
      sx={{ background: "#ffffff", transform: "translateY(-50%)" }}
    >
      <Typography
        variant="h1"
        fontFamily="Poppins, san-serif"
        fontWeight="500"
        fontSize="18px"
        color="#4F4F4F"
      >
        Uploading ...
      </Typography>
      <LinearProgress
        sx={{ width: "100%", margin: "20px auto 0", borderRadius: "9999px" }}
      />
    </Box>
  );
}

export default LinearIndeterminate;
