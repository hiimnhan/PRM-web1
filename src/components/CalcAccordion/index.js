import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: '20px auto',
  },
  accordionRoot: {
    backgroundColor: 'rgba(97,175,254,.1)',
    borderColor: '#61affe',
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightBold,
    color: '#000',
    fontFamily: 'monospace',
    flexBasis: '33.3%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function CalcAccordion(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion classes={{ root: classes.accordionRoot }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id='header'>
          <Typography className={classes.heading}>Example</Typography>
          <Typography className={classes.secondaryHeading}>second</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Hello!</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

CalcAccordion.propTypes = {};

export default CalcAccordion;
