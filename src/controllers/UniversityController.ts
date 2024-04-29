import { Request, Response } from "express";
import { University } from "../models/university";
import  UniversityRepository  from "../repositories/Universityrepositories";

export default class UniversityController {
  async create(req: Request, res: Response) {
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    try {
      const University: University = req.body;
      const savedUniversity = await UniversityRepository.save(University);

      res.status(201).send(savedUniversity);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving Universitys."
      });
    }
  }

  async findAll(req: Request, res: Response) {
    const name = typeof req.query.name === "string" ? req.query.name : "";

    try {
      const Universitys = await UniversityRepository.retrieveAll({ name: name });

      res.status(200).send(Universitys);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving Universitys."
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const University = await UniversityRepository.retrieveById(id);

      if (University) res.status(200).send(University);
      else
        res.status(404).send({
          message: `Cannot find University with id=${id}.`
        });
    } catch (err) {
      res.status(500).send({
        message: `Error retrieving University with id=${id}.`
      });
    }
  }

  async update(req: Request, res: Response) {
    let University: University = req.body;
    University.id = parseInt(req.params.id);

    try {
      const num = await UniversityRepository.update(University);

      if (num == 1) {
        res.send({
          message: "University was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update University with id=${University.id}. Maybe University was not found or req.body is empty!`
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Error updating University with id=${University.id}.`
      });
    }
  }

  async delete(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const num = await UniversityRepository.delete(id);

      if (num == 1) {
        res.send({
          message: "University was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete University with id=${id}. Maybe University was not found!`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Could not delete University with id==${id}.`
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const num = await UniversityRepository.deleteAll();

      res.send({ message: `${num} Universitys were deleted successfully!` });
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while removing all Universitys."
      });
    }
  }

  
}
