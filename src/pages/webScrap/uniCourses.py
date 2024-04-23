import json
import requests
from bs4 import BeautifulSoup
from requests.exceptions import ConnectionError


def get_total_pages(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        pagination = soup.find('nav', class_='a1-pager')
        if pagination:
            last_page_link = pagination.find('a', class_='a1-pager-last')
            if last_page_link:
                last_page_url = last_page_link['href']
                total_pages = int(last_page_url.split('page=')[-1])
                print(total_pages)
                return total_pages
            else:
                print("Last page link not found")
                return None
        else:
            print("Pagination not found")
            return None
    else:
        print("Failed to fetch page:", response.status_code)
        return None


def web_content_div(web_content, class_path, value):
    count = 0
    web_content_div = web_content.find_all('div', {'class': class_path})
    textslist = []
    try:
        if value != 'None':
            for i in range(50):
                spans = web_content_div[i].find_all(value)
                texts = [span.get_text() for span in spans]
                textslist.append(texts)
        else:
            text = web_content_div[0].get_text("|", strip=True)
            text = text.split("|")
            texts = text[-1]
    except IndexError:
        texts = []

    return textslist

def fetch_courses_for_university(university_name):
    base_url = "https://www.collegetransfer.net/Search/Search-for-Courses/Course-Search-Results?instnm={}&distance=5&language=en-US&perpage=50&page={}"
    total_pages = get_total_pages(base_url.format(university_name, 1))
    courses = []

    if total_pages:
        for page_number in range(1, total_pages + 1):
            url = base_url.format(university_name, page_number)
            try:
                r = requests.get(url)
                web_content = BeautifulSoup(r.text, 'html.parser')
                texts = web_content_div(web_content, 'course-search-course-title', 'h3')
                for i in range(len(texts)):
                    courses.append(texts[i][0].rstrip()[13:])
            except requests.exceptions.RequestException as e:
                print("Failed to fetch page:", e)

    return courses

def main():
    with open("/Users/vraj/projects/edurate/src/pages/webScrap/university_names.txt", "r", encoding="utf-8") as file:
        university_names = [line.strip() for line in file]

    university_courses = {}
    for university_name in university_names:
        print(university_name)
        courses = fetch_courses_for_university(university_name)
        university_courses[university_name] = courses

    with open("/Users/vraj/projects/edurate/src/pages/webScrap/university_courses.json", "w", encoding="utf-8") as json_file:
        json.dump(university_courses, json_file, indent=4)

if __name__ == "__main__":
    main()
