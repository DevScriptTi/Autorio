import { Edit2 } from 'lucide-react'
import React from 'react'
import { IconButton } from '../../../../DevScript/Buttons/IconButton'
import { showModal } from '../../../../helpers/Dom/modal'
import { Modal } from '../../../../DevScript/Modal/Modal'
import { EditeItem } from './EditeItem'

export const Edit = ({item}) => {
  return (
    <div>
      <IconButton className={'text-yellow-700 dark:text-yellow-400'} onClick={()=>{showModal(`EditeProCat${item.id}`)}}>
        <Edit2 />
      </IconButton>
      <Modal id={`EditeProCat${item.id}`}>
        <EditeItem item={item}/>
      </Modal>
    </div>
  )
}
