import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import BankTable from '../../components/BankTable';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bankActions } from '../../redux/actions/banks.actions';
import { calcActions } from '../../redux/actions/calculations.actions';
import { useState } from 'react';

import './styles.scss';
import BankForm from '../../components/BankForm';
import { makeStyles } from '@material-ui/core';
import Loading from '../../components/Loading';
import CalcAccordion from '../../components/CalcAccordion';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ADD_ACTION = 'add';
const EDIT_ACTION = 'edit';

function HomePage(props) {
  const {
    banks = [],
    formulars: [],
    getAllBanks,
    getAllFormulars,
    getBank,
    bank = {},
    loading,
  } = props;
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState('Banks');
  const [openModal, setOpenModal] = useState(false);
  const [bankAction, setBankAction] = useState('');
  const [bankId, setBankId] = useState(null);

  const handleSetBankId = (id) => {
    setBankId(id);
  };

  const handleOpenModal = (action) => {
    setOpenModal(true);
    setBankAction(action === ADD_ACTION ? ADD_ACTION : EDIT_ACTION);
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleSelectedItem = (item) => setSelectedItem(item);

  useEffect(() => {
    if (selectedItem === 'Banks') {
      getAllBanks();
    } else if (selectedItem === 'Calculations') {
      getAllFormulars();
    }
  }, [selectedItem]);

  useEffect(() => {
    if (bankId !== null) {
      getBank(bankId);
    }
  }, [bankId]);
  return (
    <div className='homepage-container'>
      <Navbar onSelectedItem={handleSelectedItem} />
      <Carousel
        item={selectedItem}
        quantity={selectedItem === 'Banks' ? banks.length : 0}
      />
      <div className='button-container'>
        <Button
          variant='contained'
          color='default'
          startIcon={<FontAwesomeIcon icon={faPlusCircle} />}
          onClick={() => handleOpenModal('add')}
        >
          Add new
        </Button>
      </div>
      <div className='table-container'>
        {loading ? (
          <Loading loading={loading} />
        ) : selectedItem === 'Banks' ? (
          <BankTable
            onOpenModal={handleOpenModal}
            onSelectedBank={handleSetBankId}
            banks={banks}
          />
        ) : (
          <div>
            <CalcAccordion />
            <CalcAccordion />
          </div>
        )}
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className={classes.modal}
      >
        <BankForm
          bank={bank}
          action={bankAction}
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
        />
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    banks: state.bankReducer.banks,
    bank: state.bankReducer.bank,
    loading: state.bankReducer.loading,
    formulars: state.calcReducers.formulars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch,
    getAllBanks: () => dispatch(bankActions.getAllBanksRequest()),
    getBank: (id) => dispatch(bankActions.getBankRequest(id)),
    getAllFormulars: () => dispatch(calcActions.getAllFormularRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
