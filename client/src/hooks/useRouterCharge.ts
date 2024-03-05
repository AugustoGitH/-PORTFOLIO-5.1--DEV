import ancors from '@/settings/ancors'
import { useParams } from 'react-router-dom'

type TypeKeysRouterCharge = 'full-stack' | 'front-end' | 'back-end'

interface IRouterInfos {
  label: string
  cv: string
}

type TypeRouterChargeT = Record<TypeKeysRouterCharge, IRouterInfos>

const userRouterCharge = (): { routersCharge: IRouterInfos } => {
  const { charge } = useParams()
  const routersCharge: TypeRouterChargeT = {
    ['full-stack']: {
      label: 'Full-Stack',
      cv: ancors.others.cv.FULL_STACK,
    },
    ['front-end']: {
      label: 'Front-End',
      cv: ancors.others.cv.FRONT_END,
    },
    ['back-end']: {
      label: 'Back-End',
      cv: ancors.others.cv.BACK_END,
    },
  }

  const routersChargeTrated = charge
    ? routersCharge[charge as TypeKeysRouterCharge]
    : routersCharge['full-stack']

  return {
    routersCharge: routersChargeTrated,
  }
}
export default userRouterCharge
