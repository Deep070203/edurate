import connection from "../db";
import { University } from "../models/university";
import { ResultSetHeader } from "mysql2";

interface IUniversityRepository {
  save(University: University): Promise<University>;
  retrieveAll(searchParams: {name: string}): Promise<University[]>;
  retrieveById(IUniversityId: number): Promise<University | undefined>;
  update(University: University): Promise<number>;
  delete(IUniversityId: number): Promise<number>;
  deleteAll(): Promise<number>;
}

class UniversityRepository implements IUniversityRepository { 
    save(university: University): Promise<University> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "INSERT INTO University (name, courses) VALUES(?,?)",
        [university.name, []],
        (err, res) => {
          if (err) reject(err);
          else
            this.retrieveById(res.insertId)
              .then((university) => resolve(university!))
              .catch(reject);
        }
      );
    });
  }
    retrieveAll(searchParams: {name?: string}): Promise<University[]> { 
        let query: string = "SELECT * FROM University";
    let condition: string = "";

    

    if (searchParams?.name)
      condition += `LOWER(name) LIKE '%${searchParams.name}%'`

    if (condition.length)
      query += " WHERE " + condition;

    return new Promise((resolve, reject) => {
      connection.query<University[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
    }

  retrieveById(IUniversityId: number): Promise<University> { 
    return new Promise((resolve, reject) => {
      connection.query<University[]>(
        "SELECT * FROM University WHERE id = ?",
        [IUniversityId],
        (err, res) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    });
  }

  update(University: University): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "UPDATE University SET name= ? WHERE id = ?",
        [University.name, University.id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
   }

  delete(IUniversityId: number): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "DELETE FROM University WHERE id = ?",
        [IUniversityId],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
   }

  deleteAll(): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>("DELETE FROM IUniversitys", (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      });
    });
  }
}


export default new UniversityRepository();