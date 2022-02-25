import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import Typography from '@mui/material/Typography';

function LinearIndeterminate() {
  return (
    <Box
      sx={{
        width: '400px',
        height: '144px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'auto',
        transform: 'translateY(-50%)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '30px',
      }}
    >
      <Typography
        fontFamily="Poppins"
        fontWeight="500"
        fontSize="18px"
        color="#4F4F4F"
      >
        Uploading ...
      </Typography>
      <LinearProgress
        sx={{ margin: '20px auto 0', width: '100%', borderRadius: '9999px' }}
      />
    </Box>
  );
}

export default LinearIndeterminate;
