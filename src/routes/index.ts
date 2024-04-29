import { Application } from "express";
import UniversityRoutes from "./Universityroutes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/university", UniversityRoutes);
  }
}