import { IActionRegister } from "../../../../../types/Project";


const calculateActionsCurrentDate = (actions: IActionRegister[]): number => {
  const currentDate = new Date().toLocaleDateString('pt-BR');
  const actionsCurrent = actions.filter((action) => {
    const actionDate = new Date(action.previewDate).toLocaleDateString('pt-BR');
    return actionDate === currentDate;
  });

  return actionsCurrent.length;
};

export default calculateActionsCurrentDate;
