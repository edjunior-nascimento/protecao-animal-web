import { ChevronRight } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Modal } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  image?: string | null;
  onPrev?: () => void;
  onNext?: () => void;
};

const style = {
  position: "absolute" as const,
  top: { md: "50%", xs: "50%" },
  left: { md: "50%", xs: "50%" },
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", sm: "80%", md: "80%" },
  height: "100%",
  bgcolor: "rgba(0, 0, 0, 0.7)",
  boxShadow: 24,
  p: 0,
  // 👇 ADICIONE ESTA LINHA PARA REMOVER AS LINHAS DO FOCO AUTOMÁTICO
  outline: "none",
};

export default function BasicModal({
  open,
  onClose,
  image,
  onPrev,
  onNext,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button
          onClick={onPrev}
          aria-label="anterior"
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: 5, sm: 15, md: 25 },
            transform: "translateY(-50%)",
            color: "white",
            bgcolor: "#1E1E1E",
            minWidth: 40,
            width: 40,
            height: 40,
            borderRadius: 0,
            zIndex: 2,

            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          onClick={onClose}
          className="Close"
          aria-label="fechar"
          sx={{
            display: { xs: "flex", sm: "none" },
            position: "absolute",
            width: 40,
            height: 40,
            right: 10,
            top: 20,
            bgcolor: "#777575",
            color: "white",
            borderRadius: 0,
            minWidth: 40,
            zIndex: 3,
          }}
        >
          <CloseIcon />
        </Button>

        <Box
          sx={{
            position: "absolute",
            top: { md: "50%", xs: "50%" },
            left: { md: "50%", xs: "50%" },
            transform: "translate(-50%, -50%)",
            width: { xs: "100%", sm: "80%", md: "85%" },
            height: { md: "100%", xs: "100%" },
            bgcolor: "transparent",
            p: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {image ? (
            <Box
              component="img"
              src={image}
              alt="Imagem Ampliada"
              sx={{
                width: { md: "100%", xs: "60%" },
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          ) : null}
        </Box>

        <Button
          onClick={onNext}
          aria-label="próximo"
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: 5, sm: 15, md: 25 },
            transform: "translateY(-50%)",
            color: "white",
            bgcolor: "#1E1E1E",
            minWidth: 40,
            width: 40,
            height: 40,
            borderRadius: 0,
            zIndex: 2,

            "&:hover": {
              bgcolor: "#333",
            },
          }}
        >
          <ChevronRight />
        </Button>
      </Box>
    </Modal>
  );
}
