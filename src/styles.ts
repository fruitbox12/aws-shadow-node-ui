import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxWidth: '95%',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
  title: {
    marginTop: theme.spacing(5),
    minHeight: 50,
  },
  content: {
    marginTop: theme.spacing(2),
    minHeight: 330,
  },
  confirmDets:{
    marginTop: theme.spacing(2),
    minHeight: 50,
  },
  confirmGraph:{
    minHeight: 280,
  },
  navbtns: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    minHeight: 30,
  },
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  navTitle: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.secondary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.secondary.main
    }
  },
  equation: {
    overflowX: 'auto',
    wordWrap: 'break-word',
  }
}));