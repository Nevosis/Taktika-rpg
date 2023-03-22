import { ActionSteps, Action } from "./action.types"

export const movement: Action = {
    name: "Déplacement",
    description: "Consome les phases de preparation, action, et mouvement afin de se déplacer",
    steps: [ActionSteps.PREPARATION, ActionSteps.ACTION, ActionSteps.MOVEMENT]
};

export const hitMyself: Action = {
    name: "Se frapper",
    description: "Consome les phases de preparation et d'action afin de s'infliger des dégats (gg l'arraignée)",
    steps: [ActionSteps.PREPARATION, ActionSteps.ACTION]
};

export const healMyself: Action = {
    name: "Se soigner",
    description: "Consome la phase de résolution afin de se soigner (faut bien debug hein ?)",
    steps: [ActionSteps.RESOLVE]
};
