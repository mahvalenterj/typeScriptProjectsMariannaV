import * as Dialog from '@radix-ui/react-dialog'
import {
  ButtonWrapper,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from './styles'
import { useDispatch } from 'react-redux'
import { setUsername } from '../../store/slices/user'

export function LogoutModal({ onCloseModal }: { onCloseModal: () => void }) {
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(setUsername({ user: '' })) && onCloseModal()
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Are you sure you want to logout?</DialogTitle>

        <ButtonWrapper>
          <Dialog.Close>Cancel</Dialog.Close>
          <button onClick={handleLogout}>Logout</button>
        </ButtonWrapper>
      </DialogContent>
    </Dialog.Portal>
  )
}
