import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createTheme({
    overrides: {
        MuiButton: {
          palette: {
            primary: {
              main: '#4683d9',
            },
          },
        
          root: {
            borderRadius: '8px',
            textTransform: 'inherit',
            fontSize: 16,
            transition: 'none',
            '&:active': {
              boxShadow:
                '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important',
              transform: 'translateY(1px)',
            },
          },
    
            contained: {
                backgroundColor: 'white',
                boxShadow:
                  '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
                '&:hover': {
                  backgroundColor: 'white',
                  boxShadow:
                    '0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 15%)',
                },
              },
        
        }
    }
});