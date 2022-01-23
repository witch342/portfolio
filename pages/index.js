import Button from '@mui/material/Button';
import Navibar from '../components/Navibar';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

export default function Home() {
  return (
    <>
      <title>ポートフォリオ</title>
      <Navibar />
      <Box pt={4}>
        
        <Button variant="text">unti</Button>
        <Box
        sx={{
          width: 300,
          height: 3000,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
            />
      </Box>
    </>
  )
}
