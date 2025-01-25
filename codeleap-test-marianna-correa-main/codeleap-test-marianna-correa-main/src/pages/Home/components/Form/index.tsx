/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux'
import {
  FieldsWrapper,
  FormContainer,
  FormButton,
  FormButtonWrapper,
  FormTitle,
} from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { selectedUser } from '../../../../store/slices/user'
import { createPost } from '../../../../store/slices/posts'

const postSchema = z.object({
  title: z
    .string()
    .min(1, '*At least 1 character')
    .max(30, '*At most 30 characters'),
  content: z
    .string()
    .min(1, '*At least 1 character')
    .max(144, '*At most 144 characters'),
})

type postFormSchema = z.infer<typeof postSchema>

export function Form() {
  const { user } = useSelector(selectedUser)
  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<postFormSchema>({
    resolver: zodResolver(postSchema),
    mode: 'onChange',
  })

  async function onPostSubmit({ title, content }: postFormSchema) {
    const newPost = { title, content, username: user }
    ;(await dispatch(createPost(newPost))) && reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(onPostSubmit)}>
      <FormTitle>What's on your mind?</FormTitle>
      <FieldsWrapper>
        <label>Title</label>
        <input type="text" placeholder="Hello world" {...register('title')} />
        {errors.title && <span>{errors.title.message}</span>}
      </FieldsWrapper>

      <FieldsWrapper>
        <label>Content</label>
        <textarea
          placeholder="Content here"
          {...register('content', { required: 'Text required' })}
        />
        {errors.content && <span>{errors.content.message}</span>}
      </FieldsWrapper>

      {!user ? (
        <FormButtonWrapper variant="spaceBetween">
          <span>*Login to post</span>
          <FormButton type="submit" disabled={!user || !isValid}>
            Create
          </FormButton>
        </FormButtonWrapper>
      ) : (
        <FormButtonWrapper variant="flexEnd">
          <FormButton type="submit" disabled={!user || !isValid}>
            Create
          </FormButton>
        </FormButtonWrapper>
      )}
    </FormContainer>
  )
}
