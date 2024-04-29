import mysql.connector
import json

db_config ={
    'host': "127.0.0.1",
    'user': "root",
    'password': "vraj@1381",
    'database': "university_ratings"
}


def insert_data(university_data):
    connection = None
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        for university_name, courses in university_data.items():
            cursor.execute("INSERT INTO universities (name) VALUES (%s)", (university_name,))
            university_id = cursor.lastrowid
            for course in courses:
                course_parts = course.split(': ', 1)
                if len(course_parts) == 2:  
                    course_no, course_name = course_parts
                cursor.execute("INSERT INTO courses (university_id, course_name, course_no) VALUES (%s, %s, %s)", (university_id, course_name, course_no))

        # Commit changes
        connection.commit()
        print("Data inserted successfully!")

    except mysql.connector.Error as error:
        print("Error inserting data:", error)

    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

with open('src/components/webScrap/university_courses.json', 'r') as file:
    university_data = json.load(file)

insert_data(university_data)
