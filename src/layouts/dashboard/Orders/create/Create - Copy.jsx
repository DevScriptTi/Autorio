import React from 'react'
import { FilledButton } from '../../../../DevScript/Buttons/FilledButton'
import { OutlineButton } from '../../../../DevScript/Buttons/OutlineButton'
import { Modal } from '../../../../DevScript/Modal/Modal'
import { CreateOne } from './CreateOne'
import { showModal } from '../../../../helpers/Dom/modal'

export const Create = () => {
  return (
    <div className='flex gap-4'>
        <FilledButton onClick={()=>{showModal('CreateReference')}}>إنشاء منتج مصدري</FilledButton>
        <OutlineButton>إضافة منتجات مصدرية (excel)</OutlineButton>
        <Modal id='CreateReference'>
            <CreateOne/>
        </Modal>
    </div>
  )
}
