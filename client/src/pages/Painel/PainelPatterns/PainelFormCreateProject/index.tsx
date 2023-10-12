



import InputSelectIdRepo from "./components/InputSelectIdRepo"
import { optionsTechnologiesUsedProject, optionsTypeProject } from "./settings"
import * as S from "./styles"
import useCreateProject from "../../../../hooks/project/private/useCreateProject"
import { Input } from "../../../../components/Input"
import { Loader } from "../../../../components/Loader"
import { TProjectTechnologiesUsed } from "../../../../types/Project"
import { Alert } from "../../../../components/Alert"
import roots from "../../../../styles/roots"

const PainelFormCreateProject = (): JSX.Element => {
  const { onChangeField, isCreating, isRestarted, statusForm, onSubmit, alertDialog, setAlertDialog } = useCreateProject()


  return (
    <>
      <S.PainelFormCreateProject>
        <h2>Criar Projeto</h2>
        <form noValidate onSubmit={onSubmit}>
          {
            isCreating && (
              <S.PopUpLoading>
                <Loader.Default color="light" />
              </S.PopUpLoading>
            )
          }
          <Input.Default
            label="Nome do Projeto"
            onChange={(ev) => onChangeField("name", ev.target.value)}
            value={statusForm.name}
          />
          <Input.Default
            label="Link do Projeto"
            onChange={(ev) => onChangeField("websiteLink", ev.target.value)}
            value={statusForm.websiteLink}
          />
          <Input.Default
            label="Link da Preview"
            onChange={(ev) => onChangeField("videoLink", ev.target.value)}
            value={statusForm.videoLink}
          />
          <Input.Default
            label="Link do repositorio"
            onChange={(ev) => onChangeField("repoLink", ev.target.value)}
            value={statusForm.repoLink}
          />
          <Input.Checkboxes
            label="Tipo de projeto"
            options={optionsTypeProject}
            onChange={({ value }) => onChangeField("type", value as string)}
            value={statusForm.type}
          />
          <Input.Checkboxes
            tagAnyone
            label="Tecnologias e linguagens mais usadas"
            options={optionsTechnologiesUsedProject}
            onChange={({ value }) => onChangeField("technologiesUsed", value as TProjectTechnologiesUsed[])}
            value={statusForm.technologiesUsed}
          />

          <InputSelectIdRepo
            onChange={(value) => onChangeField("repoId", value)}
            reset={isRestarted}
          />
          <Input.Images
            onChange={(value) => onChangeField("images", value)}
            reset={isRestarted}
          />
          <button>Criar Projeto</button>
        </form>

      </S.PainelFormCreateProject>
      <Alert.Dialog
        show={alertDialog.show}
        icon={
          alertDialog.error ? <i style={{ color: roots.color.ALERT }} className='bx bxs-error'></i> :
            <i style={{ color: roots.color.SUCCESS }} className='bx bxs-check-circle' ></i>
        }
        title={alertDialog.title}
        message={alertDialog.message}
        buttons={{
          close: {
            placeholder: "Fechar",
            on: () => setAlertDialog(prevAlertD => ({ ...prevAlertD, show: false }))
          },
        }}
      />
    </>
  )
}

export default PainelFormCreateProject