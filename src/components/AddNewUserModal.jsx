import React,{useState} from 'react'

import PlanSummary from './PlanSummary'
import PurchaseSummaryModal from './PurchaseSummaryModal'
import PaymentMethodModal from './PaymentMethodModal'
import SuccessfulPayModal from './SuccessfulPayModal'


const AddNewUserModal = ({setSubPage,setActiveMenu}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    creditCard: "",
  });

  
// to be used later in capturing data across all forms below
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    const [newUserModalPage, setNewUserModalPage] = useState(1)
  return (
    <div className='h-screen fixed top-0 left-0 w-screen flex items-center justify-center bg-[rgba(0,0,0,.2)]'>
        {newUserModalPage==1 && <PlanSummary setNewUserModalPage={setNewUserModalPage} setSubPage={setSubPage}/>}
        {newUserModalPage==2 && <PurchaseSummaryModal setNewUserModalPage={setNewUserModalPage} setSubPage={setSubPage}/>}
        {newUserModalPage==3 && <PaymentMethodModal setNewUserModalPage={setNewUserModalPage} setSubPage={setSubPage}/>}
        {newUserModalPage==4 && <SuccessfulPayModal setActiveMenu={setActiveMenu} setNewUserModalPage={setNewUserModalPage} setSubPage={setSubPage}/>}
    </div>
  )
}

export default AddNewUserModal