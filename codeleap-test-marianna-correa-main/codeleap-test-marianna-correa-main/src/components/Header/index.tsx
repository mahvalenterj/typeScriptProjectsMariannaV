/* eslint-disable react-hooks/exhaustive-deps */
import * as Dialog from '@radix-ui/react-dialog'
import { DialogTrigger, HeaderContainer, Title, TriggerWrapper } from './styles'
import { LoginModal } from '../LoginModal'
import { useEffect, useState } from 'react'
import { MdLogin, MdLogout } from 'react-icons/md'

import { useSelector } from 'react-redux'
import { LogoutModal } from '../LogoutModal'
import { selectedUser } from '../../store/slices/user'

export function Header() {
  const { user } = useSelector(selectedUser)
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openLogoutModal, setOpenLogoutModal] = useState(false)

  useEffect(() => {
    if (!user) {
      setOpenLoginModal(true)
    }
  }, [])

  return (
    <HeaderContainer>
      <Title>CodeLeap Network</Title>
      {user ? (
        <Dialog.Root open={openLogoutModal} onOpenChange={setOpenLogoutModal}>
          <TriggerWrapper>
            {user && (
              <span>
                Hello,<strong>{user}</strong>!
              </span>
            )}
            <DialogTrigger>
              <MdLogout />
            </DialogTrigger>
          </TriggerWrapper>

          <LogoutModal onCloseModal={() => setOpenLogoutModal(false)} />
        </Dialog.Root>
      ) : (
        <>
          <Dialog.Root open={openLoginModal} onOpenChange={setOpenLoginModal}>
            <DialogTrigger>
              <span>login</span> <MdLogin />
            </DialogTrigger>

            <LoginModal onCloseModal={() => setOpenLoginModal(false)} />
          </Dialog.Root>
        </>
      )}
    </HeaderContainer>
  )
}
