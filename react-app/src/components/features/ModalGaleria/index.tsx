import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ChevronRight, TransformSharp } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '80%' }, // varia conforme o tamanho da tela
  height: '100%',
  bgcolor: 'rgba(0, 0, 0, 0.7)',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button sx={{ position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)', color: 'white', bgcolor: "#1E1E1E", display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
            <ChevronLeftIcon />
          </Button>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '85%' }, // varia conforme o tamanho da tela
            height: '100%',
            bgcolor: 'black',
            boxShadow: 24,
            p: 4,
            padding: 0,
            alignContent: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src="https://2.bp.blogspot.com/-SqLttsLOfls/VwetM_VKQmI/AAAAAAAAQGk/cbVm21-kJhohiewulTBY9ug1QK52XpUpA/s1600/pedigree.jpg" alt="Imagem Ampliada" style={{ width: '100%', height: 'auto' }} />
          </Box>
          <Button sx={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)', color: 'white', bgcolor: "#1E1E1E", display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', fontSize: "small" }}>
            <ChevronRight />
          </Button>
        </Box>
      </Modal>
    </div>
  );
}