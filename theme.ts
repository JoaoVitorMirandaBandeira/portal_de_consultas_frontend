
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0da6a6', // Substitua 'cor-da-sua-escolha' pela cor primária desejada
    },
    // Outras configurações de paleta, se necessário
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Configurando a fonte Poppins
  },
  components:{
    MuiButton:{
        styleOverrides:{
            root:{
                color: '#FFFFFF'
            }
        }
    }
  }
  // Outras configurações de tema, se necessário
});

export default theme;