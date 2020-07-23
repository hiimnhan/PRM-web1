import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import './styles.scss';
import { bankActions } from '../../redux/actions/banks.actions';
import { useState } from 'react';
function BankTable(props) {
  const { banks = [], onOpenModal, onSelectedBank } = props;

  const handleClickEdit = (id) => {
    onOpenModal('edit');
    console.log('click', id);
    onSelectedBank(id);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickDelete = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDelete = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);
  return (
    <TableContainer component={Paper}>
      <Table className='table'>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='center' colSpan={3}>
              Loan (%)
            </TableCell>
            <TableCell align='center' colSpan={3}>
              Saving (%)
            </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>6 months</TableCell>
            <TableCell>12 months</TableCell>
            <TableCell>24 months</TableCell>
            <TableCell>6 months</TableCell>
            <TableCell>12 months</TableCell>
            <TableCell>24 months</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {banks.map((bank) => {
            return (
              <TableRow key={bank.id}>
                <TableCell>{bank.id + 1}</TableCell>
                <TableCell>
                  <div className='bank-container__name'>
                    <div className='icon-container'>
                      <img src={bank.icon} alt='' />
                    </div>
                    {bank.name}
                  </div>
                </TableCell>
                <TableCell>{bank.loanRateSix}</TableCell>
                <TableCell>{bank.loanRateTwelve}</TableCell>
                <TableCell>{bank.loanRateTwentyFour}</TableCell>
                <TableCell>{bank.savingRateSix}</TableCell>
                <TableCell>{bank.savingRateTwelve}</TableCell>
                <TableCell>{bank.savingRateTwentyFour}</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    className='table-icon'
                    icon={faEdit}
                    color={'#4a83f2'}
                    onClick={() => handleClickEdit(bank.id)}
                  />
                  <FontAwesomeIcon
                    className='table-icon'
                    icon={faTrashAlt}
                    color={'#eb002b'}
                    onClick={(event) => handleClickDelete(event)}
                  />
                  <Popover
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={isOpen}
                    anchorEl={anchorEl}
                    onClose={handleCloseDelete}
                  >
                    Are you sure to delete this item?
                    <FontAwesomeIcon
                      className='table-icon'
                      icon={faTimesCircle}
                      color={'#eb002b'}
                      onClick={() => handleCloseDelete()}
                    />
                    <FontAwesomeIcon
                      className='table-icon'
                      icon={faCheckCircle}
                      color={'#48C690'}
                    />
                  </Popover>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch,
    getBank: (id) => dispatch(bankActions.getBankRequest(id)),
  };
};

BankTable.propTypes = {
  children: PropTypes.array,
  getBank: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(BankTable);
