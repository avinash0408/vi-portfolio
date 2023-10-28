import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  backgroundColor:`inherit`,
  '&:before': {
    display: 'none',
  },
  fontFamily: 'Poppins',
  fontSize: 'var(--fz-md)',
  color: 'var(--slate)'
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem',color:'var(--slate)' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  width:'100%',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
  },
  margin : '0px',
}));

const AccordionDetails = styled('div')(({ theme }) => ({
    display: 'flex',
    width:'100%',
    margin : '0px 20px',
}));

const MyWorkHeader = styled('div')(({theme}) => ({
    padding: '0 20px',
    width: '100%',
}));
const MyPosition = styled('h1')(({theme}) => ({
        whiteSpace: 'nowrap',
}));
const Period = styled('p')(({theme}) => ({
    whiteSpace: 'nowrap',
}));

export default function CustomizedAccordions({title,period,summary}) {
  const [expanded, setExpanded] = React.useState('panel0');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <MyWorkHeader>
            <div className='title-wrap'>
            <MyPosition>{title}</MyPosition>
            <Period className='period'>{period}</Period>
            </div>
          </MyWorkHeader>
        </AccordionSummary>
        <AccordionDetails>
        <p>
           {summary}
        </p>
        </AccordionDetails>
      </Accordion>
  );
}