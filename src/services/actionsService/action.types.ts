

export enum ActionSteps {
    INITIATIVE = "INITIATIVE",
    PREPARATION = "PREPARATION",
    ACTION = "ACTION",
    MOVEMENT = "MOVEMENT",
    RESOLVE = "RESOLVE",
}

export type Action = {
    name: string;
    description: string;
    steps: ActionSteps[];
}