import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
    },
  }),
);

export default function CookiesSettings() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [CookiesState, SetCookiesState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetCookiesState({
      ...CookiesState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className='bg-cool-gray-50 dark:bg-gray-700 text-cool-gray-700 dark:text-gray-300'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography className={classes.heading}>
            {' '}
            <Switch
              checked={CookiesState.checkedB}
              onChange={handleChangeSwitch}
              color='primary'
              disabled
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            Authentication Token
          </Typography>
          <Typography
            style={{
              flexShrink: 0,
            }}
            className='mt-2 text-cool-gray-500 dark:text-gray-300'
          >
            Authentication Token is used to store your session and keeps you
            signed in
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We store Authentication Token to keep you signed in.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className='bg-cool-gray-50 dark:bg-gray-700 text-cool-gray-700 dark:text-gray-300'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography className={classes.heading}>
            {' '}
            <Switch
              checked={CookiesState.checkedB}
              onChange={handleChangeSwitch}
              color='primary'
              disabled
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            Google Analytics
          </Typography>
          <Typography
            style={{
              flexShrink: 0,
            }}
            className='mt-2 text-cool-gray-500 dark:text-gray-300'
          >
            Google analytics to Analyse user
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are using Google Analytics to analyse user, this is required
            cookie.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
