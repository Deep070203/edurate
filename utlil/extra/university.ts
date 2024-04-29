import { RowDataPacket } from "mysql2"

export interface University extends RowDataPacket {
  id?: number
  name: string
  courses: [string]
}