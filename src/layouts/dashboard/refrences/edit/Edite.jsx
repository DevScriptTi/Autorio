import React from 'react'
import { IconButton } from '../../../../DevScript/Buttons/IconButton'
import { Edit2 } from 'lucide-react'
import { Modal } from '../../../../DevScript/Modal/Modal'
import { showModal } from '../../../../helpers/Dom/modal'
import { EditeItem } from './EditeItem'

export const Edite = ({item}) => {
  return (
    <>
        <IconButton onClick={()=>{showModal(`EditeReference${item.id}`)}} className={'text-green-600 dark:text-green-400'}>
            <Edit2/>
        </IconButton>
        <Modal id={`EditeReference${item.id}`}>
            <EditeItem item={item}/>
        </Modal>
    </>
  )
}
