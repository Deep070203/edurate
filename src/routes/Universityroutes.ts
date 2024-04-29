import { Router } from "express";
import UniversityController from "../controllers/UniversityController";

class UniversityRoutes {
  router = Router();
  controller = new UniversityController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new University
    this.router.post("/", this.controller.create);

    // Retrieve all Universitys
    this.router.get("/", this.controller.findAll);

    // Retrieve a single University with id
    this.router.get("/:id", this.controller.findOne);

    // Update a University with id
    this.router.put("/:id", this.controller.update);

    // Delete a University with id
    this.router.delete("/:id", this.controller.delete);

    // Delete all Universitys
    this.router.delete("/", this.controller.deleteAll);
  }
}

export default new UniversityRoutes().router;