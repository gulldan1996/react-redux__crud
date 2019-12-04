import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: '0 auto',
    marginTop: 50,
  },
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
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
});
