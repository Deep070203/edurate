import requests
from bs4 import BeautifulSoup
import csv

def scrape_university_names():
    url = "https://doors.stanford.edu/~sr/universities.html"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    # Find the container with university names
    container = soup.find("div", class_="lead")

    # Extract university names
    university_names = [a.text.strip() for a in container.find_all("a")]

    return university_names

def write_to_csv(data, filename):
    with open(filename, "w", newline="", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["University Name"])
        for university_name in data:
            writer.writerow([university_name])

if __name__ == "__main__":
    university_names = scrape_university_names()
    write_to_csv(university_names, "university_names.csv")
    print("University names scraped and saved to university_names.csv")
