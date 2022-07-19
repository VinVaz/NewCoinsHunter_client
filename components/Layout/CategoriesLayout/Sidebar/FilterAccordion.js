import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function FilterAccordion({ order, title, children }) {
  return (
    <Accordion defaultExpanded elevation={0} square={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={order ? `panel${order}a-content` : null}
        id={order ? `panel${order}a-header` : null}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
