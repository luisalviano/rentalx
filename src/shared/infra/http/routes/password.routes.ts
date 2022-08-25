import { Router } from "express";

import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoute = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();

passwordRoute.post("/forgot-password", sendForgotPasswordMailController.handle);

export { passwordRoute };
