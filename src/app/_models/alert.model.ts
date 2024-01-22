export class Alert {
    type!: AlertType;
    message: string = "";
    title: string = "";
    id: string = "";
    delay: number = 0;
    keepAfterRouteChange: boolean = false;
    isVisible: boolean = false;
    userData: any;
    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning"
}

export enum PositiionType {
    TopCenter = 0,
    TopLeft = 1,
    TopRight = 2,
    BottomCenter = 3,
    BottomLeft = 4,
    BottomRight = 5,
    Middle = 6,
}
