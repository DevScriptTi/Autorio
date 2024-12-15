import React from 'react'
import { IconButton } from '../../../../DevScript/Buttons/IconButton'
import { ViewIcon } from 'lucide-react'

export const View = () => {
  return (
    <div>
      <IconButton className={'text-green-700 dark:text-green-400'}>
        <ViewIcon />
      </IconButton>
    </div>
  )
}
