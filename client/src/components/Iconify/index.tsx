import { Icon, IconifyIcon, IconifyIconHTMLElement, IconifyIconProps } from "@iconify-icon/react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

type IIconifyProps = ForwardRefExoticComponent<Omit<IconifyIconProps, "ref" | "$$typeof"> & RefAttributes<IconifyIconHTMLElement>> & {
  icon: string | IconifyIcon
}

const Iconify = (props: IIconifyProps) => {
  return (
    <Icon {...props} />
  )
}

export default Iconify