import {
  ButtonWrapper,
  DialogTrigger,
  PostContainer,
  PostContent,
  PostDate,
  PostHeader,
  PostTitle,
  PostAuthor,
} from './styles'
import { TbTrashXFilled } from 'react-icons/tb'
import { FaRegEdit } from 'react-icons/fa'
import { EditModal } from '../../../../components/EditModal'
import * as Dialog from '@radix-ui/react-dialog'
import { DeleteModal } from '../../../../components/DeleteModal'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectedUser } from '../../../../store/slices/user'
import { PostProps } from '../../../../store/slices/posts'

export function Post({
  title,
  username,
  created_datetime: createdDateTime,
  content,
  id,
}: PostProps) {
  const { user } = useSelector(selectedUser)

  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{title}</PostTitle>

        {user === username && (
          <ButtonWrapper>
            <Dialog.Root
              open={openDeleteModal}
              onOpenChange={setOpenDeleteModal}
            >
              <DialogTrigger>
                <TbTrashXFilled />
              </DialogTrigger>

              <DeleteModal
                id={id}
                onCloseModal={() => setOpenDeleteModal(false)}
              />
            </Dialog.Root>

            <Dialog.Root open={openEditModal} onOpenChange={setOpenEditModal}>
              <DialogTrigger>
                <FaRegEdit />
              </DialogTrigger>

              <EditModal id={id} onCloseModal={() => setOpenEditModal(false)} />
            </Dialog.Root>
          </ButtonWrapper>
        )}
      </PostHeader>

      <PostContent>
        <div>
          <PostAuthor>@{username}</PostAuthor>
          <PostDate>{createdDateTime}</PostDate>
        </div>

        <p>{content}</p>
      </PostContent>
    </PostContainer>
  )
}
