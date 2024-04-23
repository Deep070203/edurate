import requests
from requests.exceptions import ConnectionError
from bs4 import BeautifulSoup


def web_content_div(web_content, class_path, value):
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


def college_courses():
    Error = 0
    url = 'https://www.collegetransfer.net/Search/Search-for-Courses/Course-Search-Results?instnm=Rutgers+University-New+Brunswick&distance=5&language=en-US&perpage=50'

    try:
        r = requests.get(url)
        web_content = BeautifulSoup(r.text, 'lxml')

        # Price and Price Changes
        texts = web_content_div(web_content, 'course-search-course-title', 'h3')
        for i in range(len(texts)):
            texts[i] = texts[i][0].rstrip()
            texts[i] = texts[i][13:]
        print(texts)
    except ConnectionError:
        print("Connection Error")


college_courses()