import { useEffect } from "react"
import { Controller } from "react-hook-form"


import InputSelectIdRepo from "./components/InputSelectIdRepo"
import { optionsTechnologiesUsedProject, optionsTypeProject } from "./settings"
import * as S from "./styles"
import useCreateProject from "../../../../hooks/form/useCreateProject"
import { Input } from "../../../../components/Input"
import { Loader } from "../../../../components/Loader"

const PainelFormCreateProject = (): JSX.Element => {
  const { registerForm, registerInput, control, errors, isCreatingProject, isReset } = useCreateProject()
  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <S.PainelFormCreateProject>
      <h2>Criar Projeto</h2>
      <form {...registerForm} noValidate>
        {
          isCreatingProject && (
            <S.PopUpLoading>
              <Loader.Default color="light" />
            </S.PopUpLoading>
          )
        }
        <Input.Default label="Nome do Projeto" helperText={errors.name?.message} error={!!errors.name}  {...registerInput("name")} />
        <Input.Default label="Link do Projeto" helperText={errors.websiteLink?.message} error={!!errors.websiteLink}  {...registerInput("websiteLink")} />
        <Input.Default label="Link da Preview" helperText={errors.videoLink?.message} error={!!errors.videoLink} {...registerInput("videoLink")} />
        <Input.Default
          label="Link do repositorio"
          helperText={errors.repoLink?.message}
          error={!!errors.repoLink}
          {...registerInput("repoLink")}
        />
        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, name } }) => (
            <Input.Checkboxes
              label="Tipo de projeto"
              name={name}
              onChange={({ value }) => { onChange(value as string); }}
              options={optionsTypeProject}
              helperText={errors.type?.message}
              error={!!errors.type}
              reset={isReset}
            />
          )}
        />
        <Controller
          name="technologiesUsed"
          control={control}
          render={({ field: { onChange, name } }) => (
            <Input.Checkboxes
              tagAnyone
              label="Tecnologias e linguagens mais usadas"
              name={name}
              onChange={({ value }) => { onChange(value as [string, ...string[]]) }}
              options={optionsTechnologiesUsedProject}
              helperText={errors.technologiesUsed?.message}
              error={!!errors.technologiesUsed}
              reset={isReset}
            />
          )}
        />
        <Controller
          name="repoId"
          control={control}
          render={({ field: { onChange } }) => (
            <InputSelectIdRepo
              onChange={(value) => { onChange(value) }}
              error={!!errors.repoId}
              helperText={errors.repoId?.message}
              reset={isReset}
            />
          )}
        />

        <Controller
          name="images"
          control={control}
          render={({ field: { onChange } }) => (
            <Input.Images
              onChange={(value) => { onChange(value as { images: string[], cover: string }) }}
              error={!!errors.images}
              helperText={errors.images?.cover?.message}
              reset={isReset}
            />
          )}
        />
        <button>Criar Projeto</button>
      </form>

    </S.PainelFormCreateProject>
  )
}

export default PainelFormCreateProject