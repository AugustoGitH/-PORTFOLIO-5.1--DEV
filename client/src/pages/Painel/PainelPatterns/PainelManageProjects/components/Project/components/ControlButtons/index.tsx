import * as S from "./styles"

interface IControlButtonsProps {
  onTrash: () => Promise<void>,
  onReloadRepo: () => Promise<void>
}

const ControlButtons = ({ onTrash, onReloadRepo }: IControlButtonsProps): JSX.Element => {
  return (
    <S.ControlButtons>
      <ul>
        <li onClick={() => { void onTrash() }} className="button-trash"><i className='bx bxs-trash' /></li>
        <li onClick={() => { void onReloadRepo() }} className="button-att-repo"><i className='bx bx-revision' /></li>
      </ul>
    </S.ControlButtons>
  )
}

export default ControlButtons