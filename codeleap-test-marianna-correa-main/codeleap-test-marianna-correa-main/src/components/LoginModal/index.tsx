import * as Dialog from '@radix-ui/react-dialog'
import { ButtonWrapper, DialogContent, DialogOverlay } from './styles'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { setUsername } from '../../store/slices/user'

const userSchema = z.object({
  username: z
    .string()
    .min(1, '*At least 1 character')
    .max(30, '*At most 30 characters'),
})

type userFormSchema = z.infer<typeof userSchema>

export function LoginModal({ onCloseModal }: { onCloseModal: () => void }) {
  const dispatch = useDispatch()

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm<userFormSchema>({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
  })

  function onUserSubmit({ username }: userFormSchema) {
    dispatch(setUsername({ user: username })) && onCloseModal()
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <Dialog.Title>Welcome to CodeLeap network</Dialog.Title>
        <Dialog.Close />

        <form onSubmit={handleSubmit(onUserSubmit)}>
          <div>
            <label>Please enter your username</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register('username')}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <ButtonWrapper>
            <button type="submit" disabled={!isValid}>
              Enter
            </button>
          </ButtonWrapper>
        </form>
      </DialogContent>
    </Dialog.Portal>
  )
}
