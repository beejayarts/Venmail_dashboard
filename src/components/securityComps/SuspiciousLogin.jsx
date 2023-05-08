import React from 'react'

const SuspiciousLogin = () => {
  return (
    <div>
       <div className='flex items-center gap-8 mb-4'>
                <h5 className='text-xl font-bold text-vengray'>Two-factor Authentication</h5>
                <div className='flex items-center'><input className='switchinput' type="checkbox" id="switch" /><label className='switchLabel' for="switch">Toggle</label></div>
            </div>
            <p className='text-base text-vengray'>You can choose to send an email alerting users for any unusual logins into their email accounts</p>
    </div>
  )
}

export default SuspiciousLogin