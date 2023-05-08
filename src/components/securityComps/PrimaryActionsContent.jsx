import React from 'react'
import './primaryactions.css'



const PrimaryActionsContent = () => {
  return (
    <div>
        <div className="two_factor_auth mb-10">
            <div className='flex items-center gap-8 mb-4'>
                <h5 className='text-xl font-bold text-vengray'>Two-factor Authentication</h5>
                <div className='flex items-center'><input className='switchinput' type="checkbox" id="switch" /><label className='switchLabel' for="switch">Toggle</label></div>
            </div>
            <p className='text-base text-vengray'>Two-factor authentication is an additional security process to secure organization accounts with the combination of a password and mobile device. You can choose to enable or disable TFA for your organization.</p>
        </div>
        <div className="idle_session">
            <div className='flex items-center gap-8 mb-4'>
                <h5 className='text-xl font-bold text-vengray'>Idle Session Timeout</h5>
                <div className='flex items-center'><input className='switchinput' type="checkbox" id="switch2" /><label className='switchLabel' for="switch2">Toggle</label></div>
            </div>
            <p className='text-base text-vengray'>By setting an idle session timeout, you can ensure that administrators have to login to the Venmail Admin Console again. If it is idle for the specified period of time.</p>
        </div>
    </div>
  )
}

export default PrimaryActionsContent