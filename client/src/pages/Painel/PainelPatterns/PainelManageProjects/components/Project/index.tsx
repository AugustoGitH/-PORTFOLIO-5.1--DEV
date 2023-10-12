
import { Alert } from "../../../../../../components/Alert"
import { Input } from "../../../../../../components/Input"
import { Loader } from "../../../../../../components/Loader"
import useEditProject from "../../../../../../hooks/project/private/useEditProject"
import roots from "../../../../../../styles/roots"
import { IProjectPrivate } from "../../../../../../types/Project"
import { optionsTechnologiesUsedProject, optionsTypeProject } from "../../../PainelFormCreateProject/settings"
import ControlButtons from "./components/ControlButtons"
import DisplayPositions from "./components/DisplayPositions"
import ImagesProject from "./components/ImagesProject"
import * as S from "./styles"

interface IProjectProps { project: IProjectPrivate, order: number }

const Project = ({ project, order }: IProjectProps): JSX.Element => {

  const { handleUpdateProject,
    addEditedValues,
    valuesProject,
    handleDeleteProject,
    handleReloadRepo,
    undoChanges,
    isLoading,
    isEdited,
    statesInputEdit,
    handleToggleStateInputEdit, alertDialog, setAlertDialog } = useEditProject(project)


  return (
    <>
      <S.Project className="project" order={order}>
        {
          isLoading && (
            <S.PopupLoading>
              <Loader.Default color="light" />
            </S.PopupLoading>
          )
        }
        <div className="sub-project">
          <ImagesProject
            cover={project.images.cover}
            images={project.images.images}
          />
          <DisplayPositions
            value={valuesProject.orderOfFive}
            onChange={vl => { addEditedValues("orderOfFive", vl); }}
          />
          <div className="form-inputs-edit">
            <Input.ForEditing
              placeholder="fadsf"
              edited={statesInputEdit.name}
              onChange={ev => { addEditedValues("name", ev.target.value); }}
              value={valuesProject.name}
              onEdit={() => { handleToggleStateInputEdit("name"); }}
            />
            <Input.ForEditing
              placeholder="Link do projeto"
              edited={statesInputEdit.websiteLink}
              onChange={ev => { addEditedValues("websiteLink", ev.target.value); }}
              value={valuesProject.websiteLink}
              onEdit={() => { handleToggleStateInputEdit("websiteLink"); }}
            />
            <Input.ForEditing
              placeholder="Link da preview"
              edited={statesInputEdit.videoLink}
              onChange={ev => { addEditedValues("videoLink", ev.target.value); }}
              value={valuesProject.videoLink}
              onEdit={() => { handleToggleStateInputEdit("videoLink"); }}
            />
            <Input.ForEditing
              placeholder="Id do repositório"
              edited={statesInputEdit.repoId}
              onChange={ev => { addEditedValues("repoId", ev.target.value); }}
              value={valuesProject.repoId ?? ""}
              onEdit={() => { handleToggleStateInputEdit("repoId"); }}
            />
            <Input.ForEditing
              placeholder="Link do repositório"
              edited={statesInputEdit.repoLink}
              onChange={ev => { addEditedValues("repoLink", ev.target.value) }}
              value={valuesProject.repoLink}
              onEdit={() => { handleToggleStateInputEdit("repoLink"); }}
            />
          </div>
          <ControlButtons
            onReloadRepo={handleReloadRepo}
            onTrash={handleDeleteProject}
          />
        </div>
        <div className="sup-project">
          <Input.Checkboxes
            label="Tipo de projeto"
            name="type"
            options={optionsTypeProject}
            value={valuesProject.type}
            onChange={vl => { addEditedValues("type", vl.value); }}
          />
          <Input.Checkboxes
            label="Tecnologias e linguagens mais usadas"
            name="type"
            tagAnyone
            value={valuesProject.technologiesUsed}
            options={optionsTechnologiesUsedProject}
            onChange={vl => { addEditedValues("technologiesUsed", vl.value); }}
          />
        </div>
        {
          isEdited && (
            <nav className="buttons-control-edit">
              <button onClick={() => { void handleUpdateProject() }}>
                <i className='bx bxs-save' ></i>
                Salvar alterações
              </button>
              <button onClick={undoChanges}>
                Desfazer alterações
              </button>
            </nav>
          )
        }
      </S.Project>
      <Alert.Dialog
        title={alertDialog.title}
        message={alertDialog.message}
        show={alertDialog.show}
        icon={
          alertDialog.error ? <i style={{ color: roots.color.ALERT }} className='bx bxs-error'></i> :
            <i style={{ color: roots.color.SUCCESS }} className='bx bxs-check-circle' ></i>
        }
        buttons={{
          ...(alertDialog.buttons?.close?.isActive && {
            close: {
              on: () => setAlertDialog(prevAlertD => ({ ...prevAlertD, show: false })),
              placeholder: alertDialog.buttons?.close?.label
            }
          }),
          ...(alertDialog.buttons?.action && {
            action: {
              on: alertDialog.buttons.action.on,
              placeholder: alertDialog.buttons.action.label
            }
          })

        }}

      />
    </>
  )
}


export default Project