import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: '8px',  // Replacing theme.spacing(1) with a fixed value
    },
  },
  paper: {
    padding: '16px',  // Replacing theme.spacing(2) with a fixed value
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: '10px',
  },
}));

export default useStyles;
