import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: 250,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    width: 210,
    margin: '0 auto',
  },
  card: {
    minWidth: 275,
    maxWidth: 350,
    paddingBottom: 20,
    margin: '0 auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
