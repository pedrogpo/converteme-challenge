import * as S from './styles'
import { Button, Select, Text, ToggleButton } from '~/components/atoms'
import { FileUploader } from 'react-drag-drop-files'
import { MdUpload } from 'react-icons/md'
import { FaFile, FaTrash } from 'react-icons/fa'
import { observer } from 'mobx-react'
import { NextButtonContainer } from '../../styles'
import { billingSteps } from '~/store/billing/steps'
import { useFormContext, useWatch } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'

const fileTypes = ['JPG', 'JPEG', 'PNG', 'PDF']

const FileList = ({
  onRemove,
  uploadedFiles,
}: {
  onRemove: (index: number) => void
  uploadedFiles: File[]
}) => {
  if (!uploadedFiles || uploadedFiles.length == 0) {
    return <></>
  }

  return (
    <S.FileListContainer>
      <S.FileListHead>
        <S.FileListTRHead>
          <S.FileListItemHead>Nome do arquivo</S.FileListItemHead>
          <S.FileListItemHead>Tipo do arquivo</S.FileListItemHead>
          <S.FileListItemHead>MOSTRAR APENAS APÓS O PAGAMENTO</S.FileListItemHead>
          <S.FileListItemHead>Excluir</S.FileListItemHead>
        </S.FileListTRHead>
      </S.FileListHead>
      <S.FileListBody>
        {uploadedFiles.map((file, index) => (
          <S.FileListTRBody key={index}>
            <S.FileListItemBody>
              <S.FileListItemBodyContent>
                <FaFile size={12} color="grey" />
                <Text size="xs" color="gray_600" weight="medium">
                  {file.name}
                </Text>
              </S.FileListItemBodyContent>
            </S.FileListItemBody>
            <S.FileListItemBody>
              <Select label="" placeholder="Status" sizeOf="m" defaultValue="nf">
                <option value="nf">Nota fiscal</option>
              </Select>
            </S.FileListItemBody>
            <S.FileListItemBody>
              <Select label="" placeholder="Status" sizeOf="m" defaultValue="nf">
                <option value="nf">Nota fiscal</option>
              </Select>
            </S.FileListItemBody>
            <S.FileListItemBody>
              <FaTrash
                onClick={() => {
                  onRemove(index)
                }}
                size={14}
                color="rgba(234, 84, 98, 1)"
              />
            </S.FileListItemBody>
          </S.FileListTRBody>
        ))}
      </S.FileListBody>
    </S.FileListContainer>
  )
}

function Documents() {
  const {
    register,
    trigger,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useFormContext<BillingFormTypeInput>()

  const uploadedFiles: File[] = useWatch({
    name: 'steps.documents.uploaded_files',
  })

  const handleChange = (files: FileList) => {
    const newFiles = Array.from(files)
    const currentFiles = uploadedFiles || []
    const filteredFiles = newFiles.filter(
      (file) =>
        !currentFiles.some(
          (currentFile) => currentFile.name === file.name || currentFile.size == file.size
        )
    )
    setValue('steps.documents.uploaded_files', [...currentFiles, ...filteredFiles])
  }

  return (
    <S.Documents>
      <S.DocumentHead>
        <Text size="sm" color="black" weight="bold" uppercase>
          Documentos e arquivos de cobrança
        </Text>
        <Text size="xs" color="gray_600" weight="regular">
          Aplique juros para quando o pagamento não ocorrer até a data de vencimento. Os
          juros acumulativos serão somados diariamente ao valor da parcela até o
          pagamento.
        </Text>
        <FileUploader
          styles={{
            maxWidth: '100%',
          }}
          label="Clique aqui para selecionar o arquivo ou arraste-o para cá"
          hover="Arraste aqui"
          multiple
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          children={
            <>
              <S.DropArea>
                <MdUpload size={28} />
                <Text size="sm" color="primary_500" weight="medium">
                  Clique aqui para selecionar o arquivo ou arraste-o para cá
                </Text>
              </S.DropArea>
            </>
          }
        />
        <FileList
          uploadedFiles={uploadedFiles}
          onRemove={(index) => {
            const newFiles = getValues('steps.documents.uploaded_files')?.filter(
              (file, i) => i !== index
            )
            setValue('steps.documents.uploaded_files', newFiles)
          }}
        />
      </S.DocumentHead>
      <NextButtonContainer>
        <Button
          hug={false}
          type="button"
          onClick={() => {
            billingSteps.previousStep()
          }}
        >
          VOLTAR
        </Button>
        <Button
          hug={false}
          type="button"
          onClick={() => {
            billingSteps.nextStep()
          }}
        >
          AVANÇAR
        </Button>
      </NextButtonContainer>
    </S.Documents>
  )
}

export default Documents
