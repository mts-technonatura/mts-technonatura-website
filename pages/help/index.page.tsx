import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import { Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useSearchInputStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: '2px 4px 2px 10px',
    display: 'flex',
    alignItems: 'center',
    width: '100px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const searchInput = useSearchInputStyle();

  return (
    <section className='bg-gray-100' style={{ padding: '20px 0px' }}>
      <Container maxWidth='sm'>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          // @ts-ignore
          align='center'
        >
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
            fontWeight={400}
          >
            Help Center
          </Typography>

          <Paper
            component='form'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 5px 0px 10px',
              transform: 'scale(1.2)',
            }}
          >
            <InputBase
              className={searchInput.input}
              placeholder='What can we help?'
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton
              type='submit'
              className={searchInput.iconButton}
              aria-label='search'
              style={{ outline: 'none' }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </Container>
    </section>
  );
}
