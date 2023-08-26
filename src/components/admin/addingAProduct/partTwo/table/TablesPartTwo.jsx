import { Paper, Table, TableContainer } from '@mui/material'
import React from 'react'
import { columns, rows } from '../dd'
import { TablesRow } from './TablesRow'
import { TablesHeadPartTwo } from './TablesHeadPartTwo'

export const TablesPartTwo = () => {
   return (
      <Paper sx={{ width: '79.6875vw' }}>
         <TableContainer>
            <Table stickyHeader aria-label="sticky table">
               <TablesHeadPartTwo columns={columns} />
               <TablesRow rows={rows} columns={columns} />
            </Table>
         </TableContainer>
      </Paper>
   )
}
