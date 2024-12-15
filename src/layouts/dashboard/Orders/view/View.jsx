import React from 'react'
import { IconButton } from '../../../../DevScript/Buttons/IconButton'
import { ViewIcon } from 'lucide-react'
import { Modal } from '../../../../DevScript/Modal/Modal'
import { ViewItem } from './ViewItem'
import { showModal } from '../../../../helpers/Dom/modal'

export const View = ({item}) => {
  return (
    <div>
      <IconButton onClick={()=>{showModal(`viewReference${item.id}`)}} className={'text-green-700 dark:text-green-400'}>
        <ViewIcon />
      </IconButton>
      <Modal id={`viewReference${item.id}`}>
        <ViewItem item={item}/>
      </Modal>
    </div>
  )
}
