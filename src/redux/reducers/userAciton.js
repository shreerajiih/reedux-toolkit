import { createAction } from "@reduxjs/toolkit";

export const changeNameOfuserAction = createAction("changeNameOfUser"); // cannot be empty type of the action
export const changeAgeOfuserAction = createAction("changeAgeOfUser");